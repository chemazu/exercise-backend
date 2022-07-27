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
let addExerciseToRoutine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { routineId, exerciseId } = req.body;
    // check if routine exisits
    let routine = yield routine_1.default.findById(routineId);
    console.log(routine);
    try {
        let result = yield routine_1.default.updateOne(
        // check if routine exists
        { _id: routineId }, { $push: { exercises: exerciseId } });
        if (result.acknowledged) {
            res.status(200).json({ status: "success", data: result });
        }
        else {
            res.status(400).json({ status: "failed", data: result });
        }
    }
    catch (error) {
        res.status(400).json({ status: "error", error: `${error.message} ` });
    }
});
exports.default = addExerciseToRoutine;
//# sourceMappingURL=addExerciseToRoutine.js.map