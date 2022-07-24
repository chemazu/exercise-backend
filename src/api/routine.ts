import express from "express";
import createRoutine from "../scripts/Routine/createRoutine";
import getRoutine from "../scripts/Routine/getRoutine";
import addExercise from "../scripts/Exercise/addExercise";

let router = express.Router();

router.post("/create", createRoutine);
router.get("/get", getRoutine);
// router.get("/update", updateRoutine);
// router.get("/delete", deleteRoutine);
router.post('/add-exercise',addExercise)
// router.put('/update-exercise',updateExercise)
// router.delete('/delete-exercise',deleteExercise)






export default router;
