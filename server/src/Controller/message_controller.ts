import { Messages } from "../models/message.model";
import SocketService from "../services/socket";

export async function GetMessage(req: any, res: any) {
  try {
    const data = await Messages.find({});
  } catch (error: any) {
    res.send(error.message);
  }
}
export async function SendMessage(req: any, res: any) {
  const { senderId, receiverId, message, id } = req.body;
  const io = new SocketService();
  try {
    const data: any = await Messages.find({ uuid: id });
    if (data) {
      if (data.online === true) {
        io.listener();
        const model = {
          senderId: senderId,
          receiverId: receiverId,
          message: message,
        };
        const data = await Messages.create(model);
        return res.status(200).json(data);
      }
    }
  } catch (error: any) {
    res.send(error.message);
  }
}
