import express from "express";
import createRoutine from "../services/Routine/createRoutine";
import getRoutine from "../services/Routine/getRoutine";
import deleteExercise from "../services/Exercise/deleteExercise";
import addExerciseToRoutine from "../services/Exercise/addExerciseToRoutine";

let router = express.Router();

router.post("/create", createRoutine);
router.get("/get", getRoutine);
router.delete('/delete-exercise',deleteExercise)
router.post('/add-exercise',addExerciseToRoutine)






export default router;
