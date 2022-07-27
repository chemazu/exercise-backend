import Routine from "../../models/routine";

let deleteRoutine = async (req, res) => {
  let { routineId } = req.body;
  try {
    let result = await Routine.findByIdAndDelete(routineId);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default deleteRoutine;
