import Routine, { SuperSet } from "../../models/routine";

let getRoutine = async (req, res) => {
  try {
    let id = req.body.id;
    let result = await Routine.findById(id)
      .populate("stretches")
      .populate({
        path: "routineExercises",
        model: "Exercise",
        populate: [
          {
            path: "exerciseId",
            model: "[Exercise]",
          },
        ],
      });
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default getRoutine;
// .populate({
//   path: "routineExercises",
//   model: "Exercise",
//   populate: [
//     {
//       path: "exercise",
//       model: SuperSet,
//       populate: [
//         {
//           path: "exerciseId",
//           model: "Exercise",
//         },
//       ],
//     },
//   ],
// })
