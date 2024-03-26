import { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    RecieverId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Messages = models.messages || model("messages", messageSchema);
