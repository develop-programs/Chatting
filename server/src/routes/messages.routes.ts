import Express from "express";
import { verifyToken } from "../middleware/middleware";

const messageRoutes = Express.Router();

messageRoutes.get("/", () => {});
messageRoutes.post("/", verifyToken, () => {});

export default messageRoutes;
