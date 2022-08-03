"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dummy = require("mongoose-dummy");
const ignoredFields = ["_id", "createdAt", "__v", /detail.*_info/, "exercises[0]._id"];
const handleDummy = (model) => {
    return dummy(model, {
        ignore: ignoredFields,
        returnDate: true,
    });
};
exports.default = handleDummy;
//# sourceMappingURL=handleDummy.js.map