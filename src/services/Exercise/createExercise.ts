import Exercise from "../../models/exercise";

import exerciseJoiSchema from "../../models/exercise.joi";

let createExercise = async (req, res) => {
  console.log(Exercise)
  const { error } = exerciseJoiSchema.validate(req.body);
  let { exerciseName } = req.body;
  if (error) return res.status(400).send(error.details[0].message);
  // check if exercise already exists
  const exerciseExists = await Exercise.findOne({ exerciseName: exerciseName });
  if (exerciseExists) return res.status(400).send("Exercise already exists");
  // create exercise
  const exercise = new Exercise(req.body);
  await exercise.save();
  res.status(201).json({ message: "Exercise created successfully", exercise });
};

export default createExercise;
