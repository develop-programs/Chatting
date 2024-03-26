"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware/middleware");
const messageRoutes = express_1.default.Router();
messageRoutes.get("/", () => { });
messageRoutes.post("/", middleware_1.verifyToken, () => { });
exports.default = messageRoutes;
