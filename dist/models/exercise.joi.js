"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const exerciseJoiSchema = joi_1.default.object({
    exerciseName: joi_1.default.string().required(),
    level: joi_1.default.string(),
    category: joi_1.default.string(),
    force: joi_1.default.string(),
    mechanic: joi_1.default.string(),
    equipment: joi_1.default.string(),
    primaryMuscles: joi_1.default.array().required(),
    secondaryMuscles: joi_1.default.array(),
    instructions: joi_1.default.array().required(),
    exerciseNotes: joi_1.default.string(),
});
// Language: typescript
exports.default = exerciseJoiSchema;
//# sourceMappingURL=exercise.joi.js.map