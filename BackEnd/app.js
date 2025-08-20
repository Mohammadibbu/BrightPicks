const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const apiKeyAuth = require("./middlewares/Auth");

app.use(express.json());

//  Global middleware for API key auth
app.use(apiKeyAuth);

app.use("/", require("./Routes/ClientRouters"));
app.use("/", require("./Routes/AdminRouters"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  console.log(
    `http://localhost:${port}/brightpicks/catagories to fetch categories`
  );
});
