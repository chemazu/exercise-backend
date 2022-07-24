import express from "express";
import createExercise from "../scripts/createExercise";
import createRoutine from "../scripts/createRoutine";
import getRoutine from "../scripts/getRoutine";
import updateExercise from "../scripts/updateExercise";

let router = express.Router();

router.post("/create", createRoutine);
router.get("/get", getRoutine);
router.get('/add-exercise',createExercise)
router.get('/update-exercise',updateExercise)





export default router;
