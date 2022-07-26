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

//     console.log("email sent sucessfully");
//   } catch (error) {
//     console.log(error, "email not sent");
//   }
// };

// export default sendEmail;

import nodemailer from "nodemailer";
// const sendMail = async (email, subject, text) => {}
 
const sendMail = async (link) => {

    console.log("nodemailer",link)
}
export default sendMail;