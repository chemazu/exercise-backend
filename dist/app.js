"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const routine_1 = __importDefault(require("./api/routine"));
const account_1 = __importDefault(require("./api/account"));
const program_1 = __importDefault(require("./api/program"));
const exercise_1 = __importDefault(require("./api/exercise"));
const log_1 = __importDefault(require("./api/log"));
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, dotenv_1.config)();
mongoose_1.default.connect(process.env.MONGO_URI);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use("/api/routine", routine_1.default);
app.use("/api/account", account_1.default);
app.use("/api/program", program_1.default);
app.use("/api/exercise", exercise_1.default);
app.use("/api/log", log_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map