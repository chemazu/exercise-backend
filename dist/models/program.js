"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let ProgramSchema = new Schema({
    programName: { type: String, required: [true, "Please enter program name"] },
    routines: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
    duration: { type: String, required: [true, "Please enter program name"] },
    days: { type: [String], required: [true, "Please enter program name"] },
});
exports.default = mongoose_1.default.model("Program", ProgramSchema);
//# sourceMappingURL=program.js.map