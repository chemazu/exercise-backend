import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import routine from "./api/routine";
import account from "./api/account";

import jwt from "jsonwebtoken";
import bcrpyt from "bcrypt";
const app = express();
const port = 4000;

// clg('Hello World');
app.use(express.json());
config();
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use("/api/routine", routine);
app.use("/api/account", account);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
