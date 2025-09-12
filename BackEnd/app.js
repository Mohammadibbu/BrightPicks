import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiKeyAuth from "./middlewares/Auth.js";
import clientRouters from "./Routes/ClientRouters.js";
import adminRouters from "./Routes/AdminRouters.js";

dotenv.config({ quiet: true });

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(json());

//  Global middleware for API key auth
app.use(apiKeyAuth);

app.use("/", clientRouters);
app.use("/", adminRouters);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  console.log(
    `http://localhost:${port}/brightpicks/catagories to fetch categories`
  );
});
