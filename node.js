"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// NodeJS: v18.16.0
// MongoDB: 5.0 (Docker)
// Typescript 5.1.3
var mongoose_1 = require("mongoose"); // mongoose@7.3
var mongodb_memory_server_1 = require("mongodb-memory-server");
var TestSchema = new mongoose_1["default"].Schema({
    title: {
        type: String
    }
});
var Test = mongoose_1["default"].model("test", TestSchema);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var instance, MONGO_URI, testDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongodb_memory_server_1.MongoMemoryReplSet.create()];
                case 1:
                    instance = _a.sent();
                    MONGO_URI = instance
                        .getUri()
                        .slice(0, instance.getUri().lastIndexOf("/"));
                    return [4 /*yield*/, mongoose_1["default"].connect(MONGO_URI, {
                            dbName: "test",
                            useNewUrlParser: true,
                            useUnifiedTopology: true
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Test.create({})];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, Test.findOne({})];
                case 4:
                    testDoc = _a.sent();
                    console.log("one", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id); // has proper type "mongoose.Types.ObjectId" and works at runtime
                    console.log("two", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id._id); // is undefined at runtime
                    console.log("three", testDoc === null || testDoc === void 0 ? void 0 : testDoc._id._id._id);
                    return [4 /*yield*/, mongoose_1["default"].connection.db.dropDatabase()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, mongoose_1["default"].connection.close(true)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, mongoose_1["default"].disconnect()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, instance.stop()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();
