import express from "express";
import createExercise from "../services/Exercise/createExercise";
import createBulkExercise from "../services/Exercise/createBulkExercise";
import filterExercises from "../services/Exercise/filterExercises";

const router = express.Router();

router.post("/create", createExercise);
router.get("/exercise", createExercise);
router.post("/createbulk", createBulkExercise); 
router.get("/filter-exercises", filterExercises); 







export default router;
