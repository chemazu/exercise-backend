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
const forgotPsasword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield user_1.default.find({ email });
    if (user == null) {
        return res.status(400).send("Cannot find user");
    }
    //   try {
    //     // const token = await user[0].generateResetPasswordToken();
    //     const resetUrl = `http://localhost:3000/reset-password/${token}`;
    //     const mailOptions = {
    //       from: "}",
    //     };
    //   } catch {
    //     res.status(500).send();
    //   }
});
//# sourceMappingURL=forgotPassword.js.map