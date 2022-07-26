"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../services/Account/login"));
const register_1 = __importDefault(require("../services/Account/register"));
const resetPassword_1 = __importDefault(require("../services/Account/resetPassword"));
let router = express_1.default.Router();
router.post("/register", register_1.default);
router.post("/login", login_1.default);
router.post("/reset-password", resetPassword_1.default);
exports.default = router;
//# sourceMappingURL=account.js.map