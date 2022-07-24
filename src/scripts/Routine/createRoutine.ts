const express = require("express");
import Routine from "../../models/routine";
const app = express();

let createRoutine = async (req, res) => {
  let { routineName} =
    req.body;
  const routine = new Routine(req.body);

  try {
    await routine.save();
    res
      .status(200)
      .json({
        status: "success",
        message: `${routineName} created`,
        data: routine,
      });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default createRoutine;
