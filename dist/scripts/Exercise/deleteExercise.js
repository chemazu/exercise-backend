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
const express = require("express");
const routine_1 = __importDefault(require("../../models/routine"));
const app = express();
let deleteExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let { routineId, exercise } = req.body;
    // let { exerciseId } = exercise;
    try {
        // let result = await Routine.updateOne(
        //   // { _id: routineId },
        //   // { $push: { routineExercises: req.body.exercise } }
        // );
        let result = yield routine_1.default.find({ exerciseName: "Squat" });
        res.status(200).json({ status: "success", data: result });
    }
    catch (error) {
        res.status(400).json({ status: "error", error: `${error.message} ` });
    }
});
exports.default = deleteExercise;
//# sourceMappingURL=deleteExercise.js.map