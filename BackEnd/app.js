import express, { json } from "express";
const app = express();
import cors from "cors";
const port = process.env.PORT || 5500;
import apiKeyAuth from "./middlewares/Auth.js";
import clientRouters from "./Routes/ClientRouters.js";
import adminRouters from "./Routes/AdminRouters.js";

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
