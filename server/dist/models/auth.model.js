"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    uuid: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    about: {
        type: String,
    },
    online: {
        type: Boolean,
    },
});
exports.Auth = mongoose_1.models.users || (0, mongoose_1.model)("users", userSchema);
