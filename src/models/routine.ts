import mongoose from "mongoose";
import exercise from "./exercise";
let Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
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
  stretches: {
    type: Array,
  },
  routineNotes: {
    type: String,
  },

  program: { type: String },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});
const Routine = mongoose.model("Routine", RoutineSchema);
export default Routine;
