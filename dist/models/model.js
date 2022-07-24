"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoutineSchema = new mongoose_1.default.Schema({
    routineName: {
        type: String,
        required: [true, 'Why no eggs?']
    },
    routineDescription: {
        type: String
    },
    routineExercises: {
        type: Array
    },
    routineNotes: {
        type: String,
    }
});
const Routine = mongoose_1.default.model("Routine", RoutineSchema);
exports.default = Routine;
//# sourceMappingURL=model.js.map