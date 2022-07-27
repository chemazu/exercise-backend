"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let schema = mongoose_1.default.Schema;
let LogSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: [true, "Please enter exercise name"],
    },
    RoutineName: {
        type: String,
        required: [true, "Please enter exercise name"],
    },
});
exports.default = mongoose_1.default.model("Log", LogSchema);
//# sourceMappingURL=log.js.map