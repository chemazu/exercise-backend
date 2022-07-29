const dummy = require("mongoose-dummy");
const ignoredFields = ["_id", "createdAt", "__v", /detail.*_info/,"exercises[0]._id"];

const handleDummy = (model: any) => {
  return dummy(model, {
    ignore: ignoredFields,
    returnDate: true,
  });
};

export default handleDummy;
