import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
const app = express();
const port = 4000;

// clg('Hello World');
config();
mongoose.connect(
  process.env.MONGO_URI
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
