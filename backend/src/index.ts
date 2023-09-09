import app from "./app";
import mongoose from "mongoose";

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://team:4VjLGlnRE7QshgoF@cluster0.cawoaaa.mongodb.net/?retryWrites=true&w=majority";

const start = async () => {
  await mongoose.connect(MONGO_URI);
  app.listen(SERVER_PORT, () => console.log("Listening on port " + SERVER_PORT));
};

start();
