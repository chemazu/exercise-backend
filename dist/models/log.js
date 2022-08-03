"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let LogSchema = new mongoose_1.default.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Routine",
        required: [true, "Please enter exercise name"],
    },
    RoutineId: {
        type: Schema.Types.ObjectId,
        ref: "Routine",
        required: [true, "Please enter exercise name"],
    },
    RoutineSummary: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    exercises: [
        {
            exerciseId: {
                type: Schema.Types.ObjectId,
            },
            exerciseName: {
                type: String,
            },
            sets: {
                type: Number,
                required: [true, "Please enter sets"],
            },
            reps: {
                type: Number,
                required: [true, "Please enter reps"],
            },
            weight: {
                type: Number,
                required: [true, "Please enter weight"],
            },
            rpe: {
                type: Number,
            },
            nextgoal: {
                type: String,
            },
        },
    ],
});
exports.default = mongoose_1.default.model("Log", LogSchema);
//# sourceMappingURL=log.js.map