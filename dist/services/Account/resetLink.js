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
const user_1 = __importDefault(require("../../models/user"));
const token_1 = __importDefault(require("../../models/token"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const resetLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("first");
    const { userID, token } = req.params;
    console.log(userID, token);
    const user = yield user_1.default.findOne({ _id: userID });
    if (!user) {
        return res.status(400).send("Cannot find user");
    }
    const tokenFound = yield token_1.default.findOne({ userId: userID, token });
    if (!tokenFound) {
        return res.status(400).send("Cannot find token");
    }
    const newPassword = req.body.password;
    const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
    user.password = hashedPassword;
    yield user.save();
    yield tokenFound.remove();
    res.send("Password changed");
});
exports.default = resetLink;
//# sourceMappingURL=resetLink.js.map