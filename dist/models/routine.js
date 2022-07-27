"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
const RoutineSchema = new mongoose_1.default.Schema({
    routineName: {
        type: String,
        required: [true, "Please enter routine name"],
    },
    routineDescription: {
        type: String,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise",
            required: [true, "Please enter exercise"],
            routineSet: {
                type: String,
                required: [true, "Please enter exercise set"],
            },
            routineRep: {
                type: String,
                required: [true, "Please enter exercise rep range"],
            },
            routineRpe: {
                type: String,
                required: [true, "Please enter exercise intensity"],
            },
        },
    ],
    routineNotes: {
        type: String,
    },
    program: { type: String },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const Routine = mongoose_1.default.model("Routine", RoutineSchema);
exports.default = Routine;
//# sourceMappingURL=routine.js.map