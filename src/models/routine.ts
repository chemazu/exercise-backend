import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: [true, "Please enter exercise name"],
  },
  exerciseDescription: {
    type: String,
  },
  exerciseSet: {
    type: Array,
  },
  exerciseNotes: {
    type: String,
  },
});

const RoutineSchema = new mongoose.Schema({
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
const Routine = mongoose.model("Routine", RoutineSchema);
export default Routine;
