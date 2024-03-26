"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../Controller/auth_controller");
const AuthRouter = express_1.default.Router();
AuthRouter.get("/login", auth_controller_1.login);
AuthRouter.post("/add", auth_controller_1.CreateUser);
AuthRouter.patch("/update", auth_controller_1.UpdateUser);
AuthRouter.delete("/remove", auth_controller_1.DeleteUser);
exports.default = AuthRouter;
