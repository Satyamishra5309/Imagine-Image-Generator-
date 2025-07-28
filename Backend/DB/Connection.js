import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const DBconnect = async () => {
  try {
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // exit to avoid continuing with broken DB connection
  }
};

export default DBconnect;
