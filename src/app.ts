import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import routine from "./api/routine";
import account from "./api/account";
import program from "./api/program";
import exercise from "./api/exercise";
import log from "./api/log";


const app = express();
const port = 4000;

app.use(express.json());
config();
let egg ={ useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use("/api/routine", routine);
app.use("/api/account", account);
app.use("/api/program", program);
app.use("/api/exercise", exercise);
app.use("/api/log", log);



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
