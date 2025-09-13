import mongoose from "mongoose";
import { AdminModel } from "../../Database/models/AdminModels/AdminModel.js";
import { generateToken } from "../../utils/jwt.js";

// AdminLogin

const AdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
        Status: "$ERROR",
      });
    }

    const admin = await AdminModel.findOne({
      username,
      password,
    });

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", Status: "$ERROR" });
    }
    const SECRET_TOKEN = generateToken({
      username: admin.username,
      role: admin.Role,
    });
    res.status(200).json({
      message: "Login successful",
      Status: "$SUCCESS",
      Token: SECRET_TOKEN,
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

//Add Admin

const Addadmin = async (req, res) => {
  try {
    const { username, password, Role = "admin" } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "Username,password,role are required",
        Status: "$ERROR",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
        Status: "$ERROR",
      });
    }
    const newAdmin = new AdminModel({
      username,
      password,
      Role,
    });
    const savedNewAdmin = await newAdmin.save();

    res.status(201).json({
      message: "Admin created Successfully",
      Status: "$SUCCESS",
      newAdminId: savedNewAdmin._id,
    });
  } catch (e) {
    console.log("Error occured while adding Admin", e);
    if (e.keyPattern?.username > 0) {
      return res.status(409).json({
        message: "username Already exists",
        Status: "$ERROR",
      });
    }

    res.status(500).json({
      message: "Internal Server Error",
      Status: "$ERROR",
    });
  }
};

//EditAdminRole

const EditAdminRole = async (req, res) => {
  try {
    const { AdminId } = req.params;
    const { Role } = req.body;

    if (!mongoose.Types.ObjectId.isValid(AdminId)) {
      return res
        .status(400)
        .json({ message: "Invalid Admin ID", Status: "$ERROR" });
    }
    if (!Role) {
      return res
        .status(400)
        .json({ message: "Role is required", Status: "$ERROR" });
    }
    const UpdatedRole = await AdminModel.findByIdAndUpdate(
      AdminId,
      { $set: { Role } },
      { new: true, runValidators: true }
    );

    if (!UpdatedRole) {
      return res.status(404).json({
        message: "Admin not found, No updates done",
        Status: "$ERROR",
      });
    }
    res.status(200).json({
      message: "Admin Role updated successfully",
      Status: "$SUCCESS",
    });
  } catch (error) {
    console.log(error._message);

    if (error._message.toLowerCase() === "validation failed") {
      return res.status(406).json({
        message: "Please enter a Valid Option",
        Status: "$ERROR",
      });
    }
    // console.error("Error While Editing Role of Admin:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

// DeleteAdmin

const DeleteAdmin = async (req, res) => {
  try {
    const { AdminId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(AdminId)) {
      return res
        .status(400)
        .json({ message: "Invalid Admin ID", Status: "$ERROR" });
    }
    const deletedAdmin = await AdminModel.findByIdAndDelete(AdminId);
    if (!deletedAdmin) {
      return res
        .status(404)
        .json({ message: "Admin not found", Status: "$ERROR" });
    }

    res.status(200).json({
      message: "Admin removed successfully",
      Status: "$SUCCESS",
    });
  } catch (error) {
    console.error("Error deleting channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

export { AdminLogin, Addadmin, EditAdminRole, DeleteAdmin };
