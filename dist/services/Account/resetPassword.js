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
const token_1 = __importDefault(require("../../models/token"));
const crypto_1 = __importDefault(require("crypto"));
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userID = req.body.userID;
    let email = req.body.email;
    let token = yield token_1.default.findOne({ userId: userID });
    if (!token) {
        token = yield new token_1.default({
            userId: userID,
            token: crypto_1.default.randomBytes(32).toString("hex"),
        }).save();
    }
    const link = `${process.env.BASE_URL}/api/account/reset-link/${userID}/${token.token}`;
    console.log(link);
    (0, sendEmail_1.default)(link);
});
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map