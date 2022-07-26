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
const express = require("express");
const user_1 = __importDefault(require("../../models/user"));
const app = express();
const bcrypt = require("bcrypt");
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // what do i need to register
    // username, password, email
    // username is unique
    // email is unique
    // password is hashed
    // create a user
    let { username, password, age, sex, weight, height } = req.body;
    const hashedPassword = yield bcrypt.hash(password, 10);
    const encryptedUser = Object.assign(Object.assign({}, req.body), { password: hashedPassword });
    const newUser = new user_1.default(encryptedUser);
    try {
        yield newUser.save();
        res.status(201).send("User created");
    }
    catch (_a) {
        res.status(500).send();
    }
});
exports.default = register;
//# sourceMappingURL=register.js.map