const express = require("express");
import Routine from "../../models/routine";
const app = express();

let addExercise = async (req, res) => {
  let { routineId, exercise } = req.body;

  try {
    let result = await Routine.updateOne(
      { _id: routineId },
      { $push: { routineExercises: req.body.exercise } }
    );
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default addExercise;
