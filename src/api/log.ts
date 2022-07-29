import express from "express";
import createLog from "../services/Log/createLog";
const router = express.Router();

router.post("/create", createLog)

export default router;