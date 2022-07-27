"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_1 = __importDefault(require("../../models/exercise"));
const exercise_joi_1 = __importDefault(require("../../models/exercise.joi"));
let createExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(exercise_1.default);
    const { error } = exercise_joi_1.default.validate(req.body);
    let { exerciseName } = req.body;
    if (error)
        return res.status(400).send(error.details[0].message);
    // check if exercise already exists
    const exerciseExists = yield exercise_1.default.findOne({ exerciseName: exerciseName });
    if (exerciseExists)
        return res.status(400).send("Exercise already exists");
    // create exercise
    const exercise = new exercise_1.default(req.body);
    yield exercise.save();
    res.status(201).json({ message: "Exercise created successfully", exercise });
});
exports.default = createExercise;
//# sourceMappingURL=createExercise.js.map