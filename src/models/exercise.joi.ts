import Joi from "joi";
 const exerciseJoiSchema = Joi.object({
  exerciseName: Joi.string().required(),
  level: Joi.string(),
  category: Joi.string(),
  force: Joi.string(),
  mechanic: Joi.string(),
  equipment: Joi.string(),
  primaryMuscles: Joi.array().required(),
  secondaryMuscles: Joi.array(),
  instructions: Joi.array().required(),
  exerciseNotes: Joi.string(),
});
// Language: typescript
export default exerciseJoiSchema;