import { Schema, model, models } from "mongoose";

const roomSchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTIaVBIo1lAOt5zqKZdpEK_-xXJc5wQABtHfVh-ha0fFVpqxaV1eID6O8lBCSMLADlII",
    },
    about: {
      type: String,
    },
    admin: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

export const Rooms = models.rooms || model("rooms", roomSchema);
