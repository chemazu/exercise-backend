import Program from "../../models/program";

let addRoutineToProgram = async (req, res) => {
  let { routineId , programId } = req.body;
  // check if they exist

  try {
    let result = await Program.updateOne(
      { _id: programId },
      { $push: { routines: routineId } }
    );
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default addRoutineToProgram;
