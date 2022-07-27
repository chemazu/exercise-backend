import express from "express";
import login from "../services/Account/login";
import register from "../services/Account/register";
import resetPassword from "../services/Account/resetPassword";
import  resetLink from "../services/Account/resetLink";
import getUser from "../services/Account/getUser";



let router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/reset-password", resetPassword);
router.post("/reset-link/:userID/:token", resetLink);
router.post("/user", getUser);


export default router;
