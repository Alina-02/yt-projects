import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export const ConnectDB = async () => {
  await mongoose.connect(URI ? URI : "");
  console.log("DB Connected");
};
