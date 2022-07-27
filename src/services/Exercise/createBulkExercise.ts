import express from "express";
import Exercise from "../../models/exercise";

// import exercisejson from "../exercises.json"
let data = require("../../exercises.json");
const app = express();

let createBulkExercise = async (req, res) => {
  let { routineId, exercise } = req.body;
  console.log(data.exercises);
  let all = await Exercise.insertMany(data.exercises);
  console.log(all);
  // try {
  //   let result = await Routine.updateOne(
  //     { _id: routineId },
  //     { $push: { routineExercises: req.body.exercise } }
  //   );
  //   res.status(200).json({ status: "success", data: result });
  // } catch (error) {
  //   res.status(400).json({ status: "error", error: `${error.message} ` });
  // }
};
export default createBulkExercise;
