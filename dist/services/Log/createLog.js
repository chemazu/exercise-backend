"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../../models/log"));
const joi_1 = __importDefault(require("joi"));
const createLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        userId: joi_1.default.string().required(),
        RoutineId: joi_1.default.string().required(),
        RoutineSummary: joi_1.default.string().required(),
        exercises: joi_1.default.array()
            .items(joi_1.default.object({
            exerciseId: joi_1.default.string().required(),
            exerciseName: joi_1.default.string().required(),
            sets: joi_1.default.number().required(),
            reps: joi_1.default.number().required(),
            weight: joi_1.default.number().required(),
            rpe: joi_1.default.number(),
            nextgoal: joi_1.default.string(),
        }))
            .required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ status: "validation error", error: error.details[0].message });
    }
    try {
        let result = yield log_1.default.create(req.body);
        res.status(200).json({ status: "success", data: result });
    }
    catch (error) {
        res.status(400).json({ status: "error", error: `${error.message} ` });
    }
});
exports.default = createLog;
//# sourceMappingURL=createLog.js.map