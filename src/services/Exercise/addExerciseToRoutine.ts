const express = require("express");
import Routine from "../../models/routine";
const app = express();

let addExerciseToRoutine = async (req, res) => {
  let { routineId, exerciseId } = req.body;
  // check if routine exisits
  let routine = await Routine.findById(routineId);
  console.log(routine);

  try {
    let result = await Routine.updateOne(
      // check if routine exists
      { _id: routineId },
      { $push: { exercises: exerciseId } }
    );
    if (result.acknowledged) {
      res.status(200).json({ status: "success", data: result });
    }
    else {
      res.status(400).json({ status: "failed", data: result });

    }
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default addExerciseToRoutine;
