import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiKeyAuth from "./middlewares/ApiAuth.js";
import clientRouters from "./Routes/ClientRouters.js";
import adminRouters from "./Routes/AdminRouters.js";
import { connectToDatabase, closeConnection } from "./Database/DBconn.js";
dotenv.config({ quiet: true });

const DBCONN = await connectToDatabase();
if (DBCONN) {
  console.log("DB connected Succesfully...");
}

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(json());

//  Global middleware for API key auth
app.use(apiKeyAuth);

app.use("/", clientRouters);
app.use("/", adminRouters);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
