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
const user_1 = __importDefault(require("../../models/user"));
const joi_1 = __importDefault(require("joi"));
const bcrypt = require("bcrypt");
const handleJwt_1 = __importDefault(require("../../utils/handleJwt"));
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        let { username, password } = req.body;
        let token = (0, handleJwt_1.default)(username);
        const hashedPassword = yield bcrypt.hash(password, 10);
        const encryptedUser = Object.assign(Object.assign({}, req.body), { password: hashedPassword });
        const newUser = new user_1.default(encryptedUser);
        yield newUser.save();
        res.status(201).send({ status: "Successs User Created", token: token });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.default = register;
//# sourceMappingURL=register.js.map