import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  phone: {
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "About me",
  },
  online: {
    type: Boolean,
    default: false,
  },
});

export const Auth = models.users || model("users", userSchema);
