import Express from "express";
import {
  CreateUser,
  DeleteUser,
  UpdateUser,
  login,
} from "../Controller/auth_controller";

const AuthRouter = Express.Router();

AuthRouter.get("/login", login);

AuthRouter.post("/add", CreateUser);

AuthRouter.patch("/update", UpdateUser);

AuthRouter.delete("/remove", DeleteUser);

export default AuthRouter;
