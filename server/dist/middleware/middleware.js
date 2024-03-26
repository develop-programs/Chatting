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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_1 = require("../models/auth.model");
function verifyToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(" ");
            const verify = jsonwebtoken_1.default.verify(bearer[1], `${process.env.JWT_SECRET}`);
            let { email } = verify;
            const find = yield auth_model_1.Auth.findOne({ email: email });
            if (find) {
                next();
            }
            else {
                res.redirect("/login");
            }
        }
        else {
            res.sendStatus(403);
        }
    });
}
exports.verifyToken = verifyToken;
