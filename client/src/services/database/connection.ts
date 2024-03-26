import mongoose from "mongoose";

export async function connect() {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI
        ? process.env.MONGO_URI
        : "mongodb://localhost:27017/chatting"
    );
    if (connection) {
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log(error);
  }
}
