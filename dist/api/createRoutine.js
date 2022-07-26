"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRoutine_1 = __importDefault(require("../scripts/createRoutine"));
let router = express_1.default.Router();
router.post("/", createRoutine_1.default);
exports.default = router;
//# sourceMappingURL=createRoutine.js.map