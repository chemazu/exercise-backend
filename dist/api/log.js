"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createLog_1 = __importDefault(require("../services/Log/createLog"));
const router = express_1.default.Router();
router.post("/create", createLog_1.default);
exports.default = router;
//# sourceMappingURL=log.js.map