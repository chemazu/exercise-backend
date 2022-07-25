const express = require("express");
import Routine from "../../models/routine";
const app = express();

let deleteExercise = async (req, res) => {
  let { routineId, exercise } = req.body;
  let { exerciseId } = exercise;

  try {
    let result = await Routine.updateOne(
      { _id: routineId },
      { $pull: { routineExercises: { _id: exerciseId } } }
    );
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default deleteExercise;
// { $pull: { 'Routine.routineExercises': { exerciseName: '+1786543589455' } } }