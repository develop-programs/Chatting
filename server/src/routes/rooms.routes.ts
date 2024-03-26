import Express from "express";
import { AddUser, CreateRoom, FindRooms } from "../Controller/room_controller";

const roomRoutes = Express.Router();

roomRoutes.get("/", FindRooms);
roomRoutes.post("/create", CreateRoom);
roomRoutes.post("/Useradd", AddUser);

export default roomRoutes;
