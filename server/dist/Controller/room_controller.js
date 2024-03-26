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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser = exports.CreateRoom = exports.FindRooms = void 0;
const Rooms_model_1 = require("../models/Rooms.model");
function FindRooms(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield Rooms_model_1.Rooms.findOne({ _id: req.body.roomId });
            return res.status(200).json(data);
        }
        catch (error) {
            res.send(error.message);
        }
    });
}
exports.FindRooms = FindRooms;
function CreateRoom(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, image, about, id } = req.body;
        try {
            const model = {
                name: name,
                image: image,
                about: about,
                admin: id,
            };
            const data = yield Rooms_model_1.Rooms.create(model);
            return res.status(200).json(data);
        }
        catch (error) {
            res.send(error.message);
        }
    });
}
exports.CreateRoom = CreateRoom;
function AddUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { roomId, userId } = req.body;
        try {
            const data = yield Rooms_model_1.Rooms.find({ _id: roomId });
            if (data) {
                const response = yield Rooms_model_1.Rooms.findOneAndUpdate({ _id: roomId }, {
                    $push: { users: userId },
                }, {
                    new: true,
                    upsert: false,
                });
                return res.status(200).json(response);
            }
        }
        catch (error) {
            res.send(error.message);
        }
    });
}
exports.AddUser = AddUser;
