// age,sex,weight,height
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
  //   age,
  //   dob,
  //   sex,
  //   weight,
  //   height,
});
const User = mongoose.model("User", UserSchema);


export default User;
