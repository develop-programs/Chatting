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
exports.DeleteUser = exports.AddUser = exports.FindUser = void 0;
const Auth_1 = require("../models/Auth");
function FindUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield Auth_1.Auth.findById({ uuid: req.params.id });
            return res.status(200).json(user);
        }
        catch (error) {
            return res
                .status(500)
                .statusMessage(error.message)
                .json({ message: error.message });
        }
    });
}
exports.FindUser = FindUser;
function AddUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body();
        try {
            const user = yield Auth_1.Auth.create(data);
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.AddUser = AddUser;
function DeleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield Auth_1.Auth.findByIdAndDelete(req.params.id);
            return res.status(200).json(data);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    });
}
exports.DeleteUser = DeleteUser;
