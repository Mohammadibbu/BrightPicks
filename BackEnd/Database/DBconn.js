import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
const DB_URL = process.env.DB_URL || "";
const DB_NAME = process.env.DB_NAME || "";

if (!DB_URL || !DB_NAME) {
  throw new Error(
    "Database URL or Name is not defined in environment variables"
  );
}

let client;
async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(DB_URL);
  }

  const db = client.db(DB_NAME);
  if (!db) {
    throw new Error("Database connection failed");
  }

  return db;
}

async function closeConnection() {
  if (client) {
    await client.close();
    client = null;
    console.log("MongoDB connection closed");
  }
}

export { connectToDatabase, closeConnection };
