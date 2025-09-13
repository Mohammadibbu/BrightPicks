import { verifyToken } from "../utils/jwt.js";

const AdminAuth = (req, res, next) => {
  // const token = req.headers.authorization?.split(" ")[1];

  // if (!token) {
  //   return res
  //     .status(401)
  //     .json({ message: "Authorization token is required", Status: "$ERROR" });
  // }

  // const decoded = verifyToken(token);

  // if (!decoded) {
  //   return res
  //     .status(401)
  //     .json({ message: "Invalid or expired token", Status: "$ERROR" });
  // }

  // if (!(decoded.data?.username && decoded.data?.role)) {
  //   return res.status(403).json({
  //     message: "Access denied: You must be a superadmin/admin/moderator  ",
  //     Status: "$ERROR",
  //   });
  // }
  // req.user = decoded;
  next();
};

const isSuperAdmin = (req, res, next) => {
  // if (req.user?.data?.role !== "superadmin") {
  //   return res.status(403).json({
  //     message: "Access denied: You must be a superadmin",
  //     Status: "$ERROR",
  //   });
  // }
  next();
};
export { AdminAuth, isSuperAdmin };
