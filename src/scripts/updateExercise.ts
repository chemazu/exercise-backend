const express = require("express");
import Routine from "../models/routine";
const app = express();

let updateExercise = async (req, res) => {
  try {
    let id = req.body.id;
    let result = await Routine.updateOne({ _id: id }, { $set: { routineExercises: req.body.exercise } });
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default updateExercise;

// updateMany({_id:5},{$set:{ skills:["Sales Tax"]}})