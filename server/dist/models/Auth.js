"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.Auth = mongoose_1.models.users || (0, mongoose_1.model)("users", userSchema);
