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
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const hashPassword_1 = __importDefault(require("../utility/hashPassword"));
const createJWTCookie_1 = __importDefault(require("../utility/createJWTCookie"));
const validateRegistration_1 = __importDefault(require("../middleware/validateRegistration"));
const validateLogin_1 = __importDefault(require("../middleware/validateLogin"));
const router = (0, express_1.Router)();
router.post('/register', validateRegistration_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const newUser = yield User_1.default.create({
        name,
        email,
        password: yield (0, hashPassword_1.default)(password),
    });
    const { _id } = yield newUser.save();
    return res.send(_id);
}));
router.post('/login', validateLogin_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield User_1.default.findOne({ email });
    res.cookie('authCookie', (0, createJWTCookie_1.default)({ id: user._id }), { httpOnly: false });
    return res.send('User has been successfully logged in');
}));
router.get('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie('authCookie');
    return res.send('User has been successfully logged out');
}));
exports.default = router;
