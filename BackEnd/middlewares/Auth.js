// middleware/apiKeyAuth.js
import dotenv from "dotenv";
dotenv.config({ quiet: true });

function apiKeyAuth(req, res, next) {
  const userKey = req.header("x-api-key");
  const serverKey = process.env.API_KEY;

  if (!userKey || userKey !== serverKey) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Invalid or missing API key",
    });
  }

  next(); // Continue to route
}

export default apiKeyAuth;
