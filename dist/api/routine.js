"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createExercise_1 = __importDefault(require("../scripts/createExercise"));
const createRoutine_1 = __importDefault(require("../scripts/createRoutine"));
const getRoutine_1 = __importDefault(require("../scripts/getRoutine"));
const updateExercise_1 = __importDefault(require("../scripts/updateExercise"));
let router = express_1.default.Router();
router.post("/create", createRoutine_1.default);
router.get("/get", getRoutine_1.default);
router.get('/add-exercise', createExercise_1.default);
router.get('/update-exercise', updateExercise_1.default);
exports.default = router;
//# sourceMappingURL=routine.js.map