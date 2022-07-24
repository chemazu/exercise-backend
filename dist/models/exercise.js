"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ExerciseSchema = new mongoose_1.default.Schema({
    exerciseName: {
        type: String,
        required: [true, 'Please enter exercise name']
    },
    exerciseDescription: {
        type: String
    },
    exerciseSet: {
        type: Array
    },
    exerciseNotes: {
        type: String,
    }
});
const Exercise = mongoose_1.default.model("Exercise", exports.ExerciseSchema);
exports.default = Exercise;
//# sourceMappingURL=exercise.js.map