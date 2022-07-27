import mongoose from "mongoose";

const Schema = mongoose.Schema;
let ProgramSchema = new Schema({
  programName: { type: String, required: [true, "Please enter program name"] },
  routines: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
  duration: { type: String, required: [true, "Please enter program name"] },
  days: { type: [String], required: [true, "Please enter program name"] },



});

export default mongoose.model("Program", ProgramSchema);
