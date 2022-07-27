import express from "express";
import addRoutineToProgram from "../services/Program/addRoutineToProgram";
import createProgram from "../services/program/createProgram";
import getProgram from "../services/program/getProgram";


let router = express.Router();

router.post("/create", createProgram);
router.get("/get", getProgram);
router.post("/add-routine", addRoutineToProgram);



export default router;
