import mongoose from "mongoose";

export const ExerciseSchema = new mongoose.Schema({

  exerciseName :{
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
const Exercise = mongoose.model("Exercise", ExerciseSchema);
export default Exercise;
