import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
const DB_URL = process.env.DB_LOCAL_URL || "";
// const DB_URL = process.env.DB_ATLAS_URL || "";
const DB_NAME = process.env.DB_NAME || "";

if (!DB_URL || !DB_NAME) {
  throw new Error(
    "Database URL or Name is not defined in environment variables"
  );
}
const ConnectionString = `${DB_URL}${DB_NAME}`;

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(ConnectionString);
    console.log("Database connected:", conn.connection.host);
    return conn;
  } catch (e) {
    console.error("Database connection failed:", e);
    return e;
  }
};
const closeConnection = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database connection closed");
  } catch (e) {
    console.error("Error while closing connection:", e);
  }
};

export { connectToDatabase, closeConnection };
