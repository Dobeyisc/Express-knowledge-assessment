import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

async function connectToDatabase() {
  try {
    const db = await mongoose.createConnection(MONGODB_URI);
    console.log("Database is connected to", db.connection.name);
  } catch (error) {
    console.error(error.message);
  }
}

connectToDatabase();