import express from "express";
import createRoutine from "../services/Routine/createRoutine";
import getRoutine from "../services/Routine/getRoutine";
import addExercise from "../services/Exercise/addExercise";
import deleteExercise from "../services/Exercise/deleteExercise";

let router = express.Router();

router.post("/create", createRoutine);
router.get("/get", getRoutine);
// router.get("/update", updateRoutine);
// router.get("/delete", deleteRoutine);
router.post('/add-exercise',addExercise)
router.delete('/delete-exercise',deleteExercise)






export default router;
