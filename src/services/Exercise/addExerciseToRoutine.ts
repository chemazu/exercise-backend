const express = require("express");
import Routine from "../../models/routine";
import Joi from "joi";
const app = express();

let addExerciseToRoutine = async (req, res) => {
  let { routineId, exerciseId } = req.body;
  let schema = Joi.object({
    routineId: Joi.string().required(),
    exerciseId: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "validation error", error: error.details[0].message });
  }

  // check if routine exisits
  let routine = await Routine.findById(routineId);
  console.log(routine);
  if (!routine) {
    return res
      .status(400)
      .json({ status: "error", error: "Routine does not exist" });
  }

  try {
    let result = await Routine.updateOne(
      // check if routine exists
      { _id: routineId },
      { $push: { exercises: exerciseId } }
    );
    if (result.acknowledged) {
      res.status(200).json({ status: "success", data: result });
    } else {
      res.status(400).json({ status: "failed", data: result });
    }
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default addExerciseToRoutine;
