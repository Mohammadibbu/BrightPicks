const MongoDB = require("mongodb");

const MongoClient = MongoDB.MongoClient;

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "BrightPicks";

async function connectToDatabase() {
  const Client = await MongoClient.connect(DB_URL);

  const db = Client.db(DB_NAME);
  if (!db) {
    throw new Error("Database connection failed");
  }
  return db;
}

module.exports = { connectToDatabase };
