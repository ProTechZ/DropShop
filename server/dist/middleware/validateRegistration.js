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
const User_1 = __importDefault(require("../models/User"));
const User_2 = require("../schemas/User");
const validateRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const { error } = User_2.registerValidationSchema.validate({
        name,
        email,
        password,
    });
    if (error === null || error === void 0 ? void 0 : error.details[0].message) {
        return res.status(403).send(error === null || error === void 0 ? void 0 : error.details[0].message);
    }
    const userWithSameEmail = yield User_1.default.findOne({ email });
    if (userWithSameEmail) {
        return res
            .status(403)
            .send(`A user with the email ${email} already exists`);
    }
    next();
});
exports.default = validateRegistration;
