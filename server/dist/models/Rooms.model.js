"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTIaVBIo1lAOt5zqKZdpEK_-xXJc5wQABtHfVh-ha0fFVpqxaV1eID6O8lBCSMLADlII",
    },
    about: {
        type: String,
    },
    admin: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    users: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
}, { timestamps: true });
exports.Rooms = mongoose_1.models.rooms || (0, mongoose_1.model)("rooms", roomSchema);
