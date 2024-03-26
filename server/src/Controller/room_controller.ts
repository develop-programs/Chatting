import { Rooms } from "../models/Rooms.model";

export async function FindRooms(req: any, res: any) {
  try {
    const data = await Rooms.findOne({ _id: req.body.roomId });
    return res.status(200).json(data);
  } catch (error: any) {
    res.send(error.message);
  }
}

export async function CreateRoom(req: any, res: any) {
  const { name, image, about, id } = req.body;
  try {
    const model = {
      name: name,
      image: image,
      about: about,
      admin: id,
    };
    const data = await Rooms.create(model);
    return res.status(200).json(data);
  } catch (error: any) {
    res.send(error.message);
  }
}

export async function AddUser(req: any, res: any) {
  const { roomId, userId } = req.body;
  try {
    const data = await Rooms.find({ _id: roomId });
    if (data) {
      const response = await Rooms.findOneAndUpdate(
        { _id: roomId },
        {
          $push: { users: userId },
        },
        {
          new: true,
          upsert: false,
        }
      );
      return res.status(200).json(response);
    }
  } catch (error: any) {
    res.send(error.message);
  }
}
