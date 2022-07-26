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
// import { sendEmail } from "../../utils/sendEmail";
const crypto_1 = __importDefault(require("crypto"));
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userID = req.body.userID;
    let email = req.body.email;
    // if (!token) {
    //     token = await new Token({
    //         userId: user._id,
    //         token: crypto.randomBytes(32).toString("hex"),
    //     }).save();
    // }
    let token = yield token_1.default.findOne({ userId: userID });
    if (!token) {
        token = yield new token_1.default({
            userId: userID,
            token: crypto_1.default.randomBytes(32).toString("hex"),
        }).save();
    }
    const link = `${process.env.BASE_URL}/password-reset/${userID}/${token.token}`;
    console.log(link);
    (0, sendEmail_1.default)(email, "Reset Password", link);
});
const reseLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, token } = req.params;
    console.log(userID, token);
    // const user = await User.findOne({ _id: userID });
    // if (!user) {
    //   return res.status(400).send("Cannot find user");
    // }
    // const tokenFound = await Token.findOne({ userId: userID, token });
    // if (!tokenFound) {
    //   return res.status(400).send("Cannot find token");
    // }
    // const newPassword = req.body.password;
    // const hashedPassword = await bcrypt.hash(newPassword, 10);
    // user.password = hashedPassword;
    // await user.save();
    // await tokenFound.remove();
    // res.send("Password changed");
});
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map