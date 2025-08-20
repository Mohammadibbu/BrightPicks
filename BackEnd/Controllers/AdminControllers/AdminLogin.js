const db = require("../../Database/DBconn");

const AdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
        Status: "$ERROR",
      });
    }

    const database = await db.connectToDatabase();

    const admin = await database
      .collection("Admin_Credentials")
      .findOne({ username: username, password: password });

    // console.log("Admin credentials checked:", { username, password });
    // console.log("admin:", admin);

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", Status: "$ERROR" });
    }

    res.status(200).json({
      message: "Login successful",
      Status: "$SUCCESS",
      adminDetails: { username: admin.username, role: admin.Role },
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

module.exports = AdminLogin;
