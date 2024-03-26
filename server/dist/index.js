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
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const socket_1 = __importDefault(require("./services/socket"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const rooms_routes_1 = __importDefault(require("./routes/rooms.routes"));
dotenv_1.default.config();
function Connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield mongoose_1.default.connect(process.env.MONGO_URI
                ? process.env.MONGO_URI
                : "mongodb://localhost:27017/chatting");
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
        catch (error) {
            return error.message;
        }
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const server = http_1.default.createServer(app);
        const socketService = new socket_1.default();
        const PORT = process.env.PORT ? process.env.PORT : 8000;
        const corsOptions = {
            origin: "*",
            allowedHeaders: ["*"],
        };
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use("/auth", (0, cors_1.default)(corsOptions), auth_routes_1.default);
        app.use("/room", (0, cors_1.default)(corsOptions), rooms_routes_1.default);
        socketService.io.attach(server);
        Connect()
            .then(() => __awaiter(this, void 0, void 0, function* () {
            yield app.listen(PORT, () => {
                console.log(`PORT:  ${PORT}`);
                console.log(`Local: http://localhost:8000`);
            });
        }))
            .catch((error) => {
            return console.log(error.message);
        });
    });
}
init();
