"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createExercise_1 = __importDefault(require("../services/Exercise/createExercise"));
const createBulkExercise_1 = __importDefault(require("../services/Exercise/createBulkExercise"));
const filterExercises_1 = __importDefault(require("../services/Exercise/filterExercises"));
const getExercises_1 = __importDefault(require("../services/Exercise/getExercises"));
const authenticateToken_1 = __importDefault(require("../services/Account/authenticateToken"));
const router = express_1.default.Router();
router.post("/create", createExercise_1.default);
// router.get("/exercise", createExercise);
router.post("/createbulk", createBulkExercise_1.default);
router.get("/filter-exercises", filterExercises_1.default);
router.get("/exercises", authenticateToken_1.default, getExercises_1.default);
exports.default = router;
//# sourceMappingURL=exercise.js.map