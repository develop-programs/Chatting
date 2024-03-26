"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    senderId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
    },
    RecieverId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
    },
    message: {
        type: String,
    },
}, { timestamps: true });
exports.Messages = mongoose_1.models.messages || (0, mongoose_1.model)("messages", messageSchema);
