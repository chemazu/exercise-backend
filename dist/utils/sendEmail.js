"use strict";
// const nodemailer = require("nodemailer");
// const sendEmail = async (email, subject, text) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: "smtp-relay.sendinblue.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         //   user: process.env.SMTP_USER ,// generated ethereal user
//         //   pass: process.env.SMTP_PASS, // generated ethereal password
//         user: "chukwuemekachemazu@gmail.com",
//         pass: "LbIhQWE8CRgjYpZ7",
//       },
//     });
//    await transporter.verify(function (error, success) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Server is ready to take our messages");
//         }
//       });
//     await transporter.sendMail({
//     //   from: process.env.SMTP_USER,
//       from:"chukwuemekachemazu@gmail.com",
//       to: email,
//       subject: subject,
//       text: text,
//     });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const sendMail = async (email, subject, text) => {}
const sendMail = (link) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("nodemailer", link);
});
exports.default = sendMail;
//# sourceMappingURL=sendEmail.js.map