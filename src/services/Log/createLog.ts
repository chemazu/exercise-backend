import Log from "../../models/log";
import Joi from "joi";
const createLog = async (req, res) => {

  const schema = Joi.object({
    userId: Joi.string().required(),
    RoutineId: Joi.string().required(),
    RoutineSummary: Joi.string().required(),
    exercises: Joi.array()
      .items(
        Joi.object({
          exerciseId: Joi.string().required(),
          exerciseName: Joi.string().required(),
          sets: Joi.number().required(),
          reps: Joi.number().required(),
          weight: Joi.number().required(),
          rpe: Joi.number(),
          nextgoal: Joi.string(),
        })
      )
      .required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "validation error", error: error.details[0].message });
  }

  try {
    let result = await Log.create(req.body);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default createLog;


