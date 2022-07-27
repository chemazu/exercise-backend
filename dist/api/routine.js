"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoutine_1 = __importDefault(require("../services/Routine/createRoutine"));
const getRoutine_1 = __importDefault(require("../services/Routine/getRoutine"));
const deleteExercise_1 = __importDefault(require("../services/Exercise/deleteExercise"));
const addExerciseToRoutine_1 = __importDefault(require("../services/Exercise/addExerciseToRoutine"));
let router = express_1.default.Router();
router.post("/create", createRoutine_1.default);
router.get("/get", getRoutine_1.default);
router.delete('/delete-exercise', deleteExercise_1.default);
router.post('/add-exercise', addExerciseToRoutine_1.default);
exports.default = router;
//# sourceMappingURL=routine.js.map