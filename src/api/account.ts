import express from "express";
import login from "../services/Account/login";
import register from "../services/Account/register";

let router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
