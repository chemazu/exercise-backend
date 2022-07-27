const express = require("express");
import Program from "../../models/program";
const app = express();

let getProgram = async (req, res) => {
  try {
    let id = req.body.id;
    // let result = await Program.findById(id).populate("routines")
    let result = await Program.findById(id).populate({path:"routines",model:"Routine",populate:[{path:"exercises",model:"Exercise"}]})

    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default getProgram;


