const express = require("express");
import User from "../../models/user";
const app = express();
const bcrypt = require("bcrypt");
import handleJwt from "../../utils/handleJwt";

let register = async (req, res) => {
  // what do i need to register
  // username, password, email
  // username is unique
  // email is unique
  // password is hashed
  // create a user
  let { username, password, age, sex, weight, height } = req.body;
  let token = handleJwt(username);
  const hashedPassword = await bcrypt.hash(password, 10);
  const encryptedUser = { ...req.body, password: hashedPassword };
  const newUser = new User(encryptedUser);
  try {
    await newUser.save();
    res.status(201).send({ status: "Successs User Created", token: token });
  } catch {
    res.status(500).send();
  }
};

export default register;
