"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoutine_1 = __importDefault(require("../services/Routine/createRoutine"));
const getRoutine_1 = __importDefault(require("../services/Routine/getRoutine"));
const addExercise_1 = __importDefault(require("../services/Exercise/addExercise"));
const deleteExercise_1 = __importDefault(require("../services/Exercise/deleteExercise"));
let router = express_1.default.Router();
router.post("/create", createRoutine_1.default);
router.get("/get", getRoutine_1.default);
// router.get("/update", updateRoutine);
// router.get("/delete", deleteRoutine);
router.post('/add-exercise', addExercise_1.default);
router.delete('/delete-exercise', deleteExercise_1.default);
exports.default = router;
//# sourceMappingURL=routine.js.map