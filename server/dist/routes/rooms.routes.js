"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_controller_1 = require("../Controller/room_controller");
const roomRoutes = express_1.default.Router();
roomRoutes.get("/", room_controller_1.FindRooms);
roomRoutes.post("/create", room_controller_1.CreateRoom);
roomRoutes.post("/Useradd", room_controller_1.AddUser);
exports.default = roomRoutes;
