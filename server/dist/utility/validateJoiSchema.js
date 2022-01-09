"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateJoiSchema = function (joiSchema, payload) {
    var error = joiSchema.validate(payload).error;
    if (error === null || error === void 0 ? void 0 : error.details[0].message) {
        return false;
    }
    return true;
};
exports.default = validateJoiSchema;
