const express = require("express");
import Program from "../../models/program";
const app = express();

let createRoutine = async (req, res) => {
  let { routineId, programName } = req.body;
  const program = new Program({
    ...req.body,
    routines: [routineId],
  });

  try {
    await program.save();
    res.status(200).json({
      status: "success",
      message: `${programName} created`,
      data: program,
    });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default createRoutine;
