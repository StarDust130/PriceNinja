import mongoose from "mongoose";

let isConnected: boolean = false; // Database connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return;

  if (isConnected) {
    console.log("=> using existing database connection ✅");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log("MongoDB connection ✅");
  } catch (error: any) {
    console.log(error.message);

    console.error("Error connecting to database ❌");
  }
};
