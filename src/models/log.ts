import mongoose from "mongoose";
let schema = mongoose.Schema;

let LogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please enter exercise name"],
  },
  RoutineName: {
    type: String,
    required: [true, "Please enter exercise name"],
  },
});

export default mongoose.model("Log",LogSchema)
