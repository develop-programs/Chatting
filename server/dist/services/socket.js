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
const socket_io_1 = require("socket.io");
class SocketService {
    constructor() {
        this._io = new socket_io_1.Server({
            cors: {
                origin: "*",
                allowedHeaders: ["*"],
            },
        });
    }
    get io() {
        return this._io;
    }
    listener() {
        const io = this.io;
        io.on("connect", (socket) => {
            console.log(`Connected: ${socket.id}`);
            socket.on("event:message", (_a) => __awaiter(this, [_a], void 0, function* ({ msg }) {
                console.log(msg);
                io.emit("messages", msg);
            }));
        });
    }
}
exports.default = SocketService;
