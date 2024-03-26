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
exports.SendMessage = exports.GetMessage = void 0;
const message_model_1 = require("../models/message.model");
const socket_1 = __importDefault(require("../services/socket"));
function GetMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield message_model_1.Messages.find({});
        }
        catch (error) {
            res.send(error.message);
        }
    });
}
exports.GetMessage = GetMessage;
function SendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { senderId, receiverId, message, id } = req.body;
        const io = new socket_1.default();
        try {
            const data = yield message_model_1.Messages.find({ uuid: id });
            if (data) {
                if (data.online === true) {
                    io.listener();
                    const model = {
                        senderId: senderId,
                        receiverId: receiverId,
                        message: message,
                    };
                    const data = yield message_model_1.Messages.create(model);
                    return res.status(200).json(data);
                }
            }
        }
        catch (error) {
            res.send(error.message);
        }
    });
}
exports.SendMessage = SendMessage;
