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
const express_1 = __importDefault(require("express"));
const exercise_1 = __importDefault(require("../../models/exercise"));
// import exercisejson from "../exercises.json"
let data = require("../../exercises.json");
const app = (0, express_1.default)();
let createBulkExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { routineId, exercise } = req.body;
    console.log(data.exercises);
    let all = yield exercise_1.default.insertMany(data.exercises);
    console.log(all);
    // try {
    //   let result = await Routine.updateOne(
    //     { _id: routineId },
    //     { $push: { routineExercises: req.body.exercise } }
    //   );
    //   res.status(200).json({ status: "success", data: result });
    // } catch (error) {
    //   res.status(400).json({ status: "error", error: `${error.message} ` });
    // }
});
exports.default = createBulkExercise;
//# sourceMappingURL=createBulkExercise.js.map