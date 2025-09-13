import { CategoryModel } from "../../Database/models/DataModel.js";
// import mongoose from "mongoose";
const brightpickscatagories = async (req, res) => {
  try {
    // if (mongoose.connection.readyState !== 1) {
    //   throw new Error("Connection not Established");
    // }
    const categories = await CategoryModel.find({});

    if (!categories || categories.length === 0) {
      return res
        .status(404)
        .json({ message: "No Result found", Status: "$ERROR" });
    }
    res.status(200).json({
      data: categories,
      message: "Data fetched successfully",
      Status: "$SUCCESS",
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};
export default brightpickscatagories;
