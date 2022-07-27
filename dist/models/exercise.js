"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ExerciseSchema = new mongoose_1.default.Schema({
    exerciseName: {
        type: String,
        required: [true, "Please enter exercise name"],
    },
    level: { type: String },
    category: { type: String },
    force: {
        type: String,
    },
    mechanic: {
        type: String,
    },
    equipment: {
        type: String,
    },
    primaryMuscles: {
        type: [String],
        required: [true, "Please enter exercise set"],
    },
    secondaryMuscles: {
        type: [String],
    },
    instructions: {
        type: [String],
        required: [true, "Please enter exercise intensity"],
    },
    exerciseNotes: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("Exercise", ExerciseSchema);
//# sourceMappingURL=exercise.js.map