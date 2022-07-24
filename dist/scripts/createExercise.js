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
const routine_1 = __importDefault(require("../models/routine"));
const app = express();
let createExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { routineId, exercise } = req.body;
    const itemId = "62dae5bda3914d3064a95273";
    const query = {
        _id: itemId
    };
    try {
        let routine = yield routine_1.default.findByIdAndUpdate(routineId);
        console.log(routine);
        res.status(200).json({
            status: "success",
            data: routine,
        });
    }
    catch (error) {
        res.status(400).json({ status: "error", error: `${error.message} ` });
    }
});
exports.default = createExercise;
//# sourceMappingURL=createExercise.js.map