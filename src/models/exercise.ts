import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
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

export default mongoose.model("Exercise", ExerciseSchema);
