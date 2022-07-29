import mongoose from "mongoose";
let Schema = mongoose.Schema;

let LogSchema = new mongoose.Schema({
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

export default mongoose.model("Log", LogSchema);
