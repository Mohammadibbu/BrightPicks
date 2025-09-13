import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (e) => e.length >= 6,
        message: "Password must be at least 6 characters long",
      },
    },
    Role: {
      type: String,
      required: true,
      enum: ["admin", "superadmin", "moderator"],
      default: "admin",
    },
  },
  {
    timestamps: true,
    collection: "Admin_Credentials",
  }
);

// Create model
const AdminModel = mongoose.model("Admin_Credentials", AdminSchema);

export { AdminModel };
