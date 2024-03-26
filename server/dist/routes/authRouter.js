"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../Controller/AuthController");
const AuthRouter = express_1.default.Router();
AuthRouter.get("/:id", AuthController_1.FindUser);
AuthRouter.post("/", AuthController_1.AddUser);
AuthRouter.delete("/remove/:id", AuthController_1.DeleteUser);
exports.default = AuthRouter;
