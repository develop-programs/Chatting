import jwt from "jsonwebtoken";
import { Auth } from "../models/auth.model";

export async function verifyToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const verify = jwt.verify(bearer[1], `${process.env.JWT_SECRET}`);
    let { email }: any = verify;
    const find = await Auth.findOne({ email: email });
    if (find) {
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    res.sendStatus(403);
  }
}
