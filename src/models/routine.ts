import mongoose from "mongoose";
let Schema = mongoose.Schema;

const RoutineSchema = new mongoose.Schema({
  routineName: {
    type: String,
    required: [true, "Please enter routine name"],
  },
  routineDescription: {
    type: String,
  },
  routineExercises: [
    {
      exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise" },
      exerciseSet: {
        type: Number,
        required: [true, "Please enter exercise set"],
      },
      exerciseRep: {
        type: String,
        required: [true, "Please enter exercise rep range"],
      },
      exerciseRpe: {
        type: Number,
        required: [true, "Please enter exercise intensity"],
      },
      exerciseNotes: {
        type: String,
      },
      setId: {
        type: String,
      },
    },
  ],
  stretches: [{ type: Schema.Types.ObjectId, ref: "Exercise" }],
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

const SuperSet = mongoose.model("SuperSet", RoutineSchema);
export { SuperSet };
