import jwt from "jsonwebtoken";

const generateToken = (TokenizeObj) => {
  const payload = { data: TokenizeObj };
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRATION || "1h";

  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
