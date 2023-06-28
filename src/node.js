// NodeJS: v18.16.0
// Typescript 5.1.3
import mongoose from 'mongoose'; // mongoose@7.3
import { MongoMemoryReplSet } from 'mongodb-memory-server';
const TestSchema = new mongoose.Schema({
    title: {
        type: String,
    },
});
const Test = mongoose.model("test", TestSchema);
async function main() {
    const instance = await MongoMemoryReplSet.create();
    const MONGO_URI = instance
        .getUri()
        .slice(0, instance.getUri().lastIndexOf("/"));
    await mongoose.connect(MONGO_URI, {
        dbName: "test",
    });
    await Test.create({});
    const testDoc = await Test.findOne({});
    console.log("one", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id); // has proper type "mongoose.Types.ObjectId" and works at runtime
    console.log("two", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id._id); // is undefined at runtime
    console.log("three", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id._id._id);
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close(true);
    await mongoose.disconnect();
    await instance.stop();
}
main();
