"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createJWTCookie = function (payload) {
    var authCookie = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY);
    return authCookie;
};
exports.default = createJWTCookie;
