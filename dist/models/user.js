"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// age,sex,weight,height
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Please enter user name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        $regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        unique: true,
    },
    password: { type: String, required: true },
    routines: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
    age: { type: String },
    sex: { type: String },
    weight: { type: String },
    height: { type: String },
    //   dob
    //   sex,
    //   weight,
    //   height,
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map