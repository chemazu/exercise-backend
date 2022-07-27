import Exercise from "../../models/exercise";

let getExercises = async (req, res) => {
  try {
    let result = await Exercise.find({});
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
console.log("reach")
};
export default getExercises;
