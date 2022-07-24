"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const routine_1 = __importDefault(require("./api/routine"));
const app = (0, express_1.default)();
const port = 4000;
// clg('Hello World');
app.use(express_1.default.json());
(0, dotenv_1.config)();
mongoose_1.default.connect(process.env.MONGO_URI);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use("/api/routine", routine_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map