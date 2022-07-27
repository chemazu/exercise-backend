"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRoutineToProgram_1 = __importDefault(require("../services/Program/addRoutineToProgram"));
const createProgram_1 = __importDefault(require("../services/program/createProgram"));
const getProgram_1 = __importDefault(require("../services/program/getProgram"));
let router = express_1.default.Router();
router.post("/create", createProgram_1.default);
router.get("/get", getProgram_1.default);
router.post("/add-routine", addRoutineToProgram_1.default);
exports.default = router;
//# sourceMappingURL=program.js.map