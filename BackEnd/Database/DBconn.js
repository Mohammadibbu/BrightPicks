import { MongoClient as _MongoClient } from "mongodb";

const MongoClient = _MongoClient;

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "BrightPicks";

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
