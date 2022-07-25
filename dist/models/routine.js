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
    exerciseDescription: {
        type: String,
    },
    exerciseSet: {
        type: String,
        required: [true, "Please enter exercise set"],
    },
    exerciseRep: {
        type: String,
        required: [true, "Please enter exercise rep range"],
    },
    exerciseRpe: {
        type: String,
        required: [true, "Please enter exercise intensity"],
    },
    exerciseNotes: {
        type: String,
    },
});
const RoutineSchema = new mongoose_1.default.Schema({
    routineName: {
        type: String,
        required: [true, "Please enter routine name"],
    },
    routineDescription: {
        type: String,
    },
    routineExercises: {
        type: [ExerciseSchema],
    },
    routineNotes: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const Routine = mongoose_1.default.model("Routine", RoutineSchema);
exports.default = Routine;
//# sourceMappingURL=routine.js.map