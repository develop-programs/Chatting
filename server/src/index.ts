import http from "http";
import dotenv from "dotenv";
import SocketService from "./services/socket";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import roomRoutes from "./routes/rooms.routes";

dotenv.config();

async function Connect() {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI
        ? process.env.MONGO_URI
        : "mongodb://localhost:27017/chatting"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    return error.message;
  }
}

async function init() {
  const app = express();
  const server = http.createServer(app);
  const socketService = new SocketService();
  const PORT = process.env.PORT ? process.env.PORT : 8000;
  const corsOptions = {
    origin: "*",
    allowedHeaders: ["*"],
  };
  app.use(cors());
  app.use(express.json());

  app.use("/auth", cors(corsOptions), authRouter);
  app.use("/room", cors(corsOptions), roomRoutes);
  socketService.io.attach(server);

  Connect()
    .then(async () => {
      await app.listen(PORT, () => {
        console.log(`PORT:  ${PORT}`);
        console.log(`Local: http://localhost:8000`);
      });
    })
    .catch((error: any) => {
      return console.log(error.message);
    });
}

init();
