const express = require("express");
import Routine from "../models/routine";
const app = express();

let createExercise = async (req, res) => {
  let { routineId, exercise } = req.body;
  const itemId = "62dae5bda3914d3064a95273";
  const query = {
    _id: itemId 
  }
  try {
    let routine = await Routine.findByIdAndUpdate(routineId);
    console.log(routine)
    res.status(200).json({
      status: "success",
      data: routine,
    });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default createExercise;
