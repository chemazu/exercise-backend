import Exercise from "../../models/exercise";

let filterExercises = async (req, res) => {
  try {
    // let id = req.body.id;
    let result = await Exercise.find(req.body);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default filterExercises;
