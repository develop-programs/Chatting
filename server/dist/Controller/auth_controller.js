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
exports.DeleteUser = exports.UpdateUser = exports.CreateUser = exports.login = void 0;
const auth_model_1 = require("../models/auth.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
/**
 * Asynchronous function for user login.
 *
 * @param {any} req - request object
 * @param {any} res - response object
 * @return {Promise<void>} Promise that resolves to the login response
 */
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield auth_model_1.Auth.findOne({ email });
            const match = bcrypt_1.default.compareSync(password, user.password);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (match === false) {
                return res.status(401).json({ message: "Invalid password" });
            }
            if (match === true) {
                yield auth_model_1.Auth.findOneAndUpdate({ email: email }, { online: true }, { new: true });
                const token = jsonwebtoken_1.default.sign({ email: email, password: password }, `${process.env.JWT_SECRET}`, {
                    algorithm: "HS256",
                });
                return res.status(200).json({
                    message: "Login successful",
                    token: token,
                });
            }
        }
        catch (error) {
            return res.send(error.message);
        }
    });
}
exports.login = login;
/**
 * Function to create a new user in the database based on the request body.
 *
 * @param {any} req - the request object containing user data
 * @param {any} res - the response object to send back the result
 * @return {Promise<void>} a Promise that resolves when the user is successfully created
 */
function CreateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const find = yield auth_model_1.Auth.findOne({ email: body.email });
            if (find) {
                return res.status(200).json({ message: "User already exists" });
            }
            else {
                const salt = bcrypt_1.default.genSaltSync(10);
                const hash = bcrypt_1.default.hashSync(body.password, salt);
                const model = {
                    uuid: (0, uuid_1.v4)(),
                    name: body.name,
                    email: body.email,
                    password: hash,
                    address: body.address,
                    phone: body.phone,
                    image: body.image,
                };
                const user = yield auth_model_1.Auth.create(model);
                return res.status(200).json(user);
            }
        }
        catch (error) {
            return res.send(error.message);
        }
    });
}
exports.CreateUser = CreateUser;
/**
 * Update user information if password matches and new password is confirmed.
 *
 * @param {any} req - request object containing user information
 * @param {any} res - response object to send back user information or error message
 * @return {Promise<any>} JSON response with updated user information or error message
 */
function UpdateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, newPassword, confirmPassword } = req.body;
        try {
            const find = yield auth_model_1.Auth.findOne({ email: email });
            if (find) {
                const match = bcrypt_1.default.compareSync(password, find.password);
                if (match) {
                    if (newPassword === confirmPassword) {
                        const salt = bcrypt_1.default.genSaltSync(10);
                        const hash = bcrypt_1.default.hashSync(newPassword, salt);
                        const model = {
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            address: req.body.address,
                            phone: req.body.phone,
                            image: req.body.image,
                        };
                        const user = yield auth_model_1.Auth.findOneAndUpdate({ email: email }, model, {
                            new: true,
                        });
                        return res.status(200).json(user);
                    }
                    else {
                        return res.status(400).json({ message: "Password does not match" });
                    }
                }
            }
        }
        catch (error) {
            return res.send(error.message);
        }
    });
}
exports.UpdateUser = UpdateUser;
/**
 * Asynchronous function to delete a user.
 *
 * @param {any} req - request object
 * @param {any} res - response object
 * @return {Promise<void>} Promise that resolves with the deleted user or rejects with an error message
 */
function DeleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const find = yield auth_model_1.Auth.findOne({ email: email });
            if (find) {
                const match = bcrypt_1.default.compareSync(password, find.password);
                if (match) {
                    const user = yield auth_model_1.Auth.findOneAndDelete({ email: email });
                    return res.status(200).json(user);
                }
            }
        }
        catch (error) {
            return res.send(error.message);
        }
    });
}
exports.DeleteUser = DeleteUser;
