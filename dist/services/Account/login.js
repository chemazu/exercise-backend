"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../../models/user"));
const app = (0, express_1.default)();
const bcrypt = require("bcrypt");
let login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.find({ email: req.body.email });
    if (user == null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if (yield bcrypt.compare(req.body.password, user[0].password)) {
            res.send("Success");
        }
        else {
            res.send("Not Allowed");
        }
    }
    catch (_a) {
        res.status(500).send();
    }
});
exports.default = login;
//# sourceMappingURL=login.js.map