import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./constants/constants.js";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ DB connectend successfully");
  } catch (error) {
    console.error(`Error connecting with DB: ${error.message}`);
  }
}
export async function bootstrapServer(app) {
  try {
    await connectDB();
    await app.listen(PORT, () => {
      console.log(`Server: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
