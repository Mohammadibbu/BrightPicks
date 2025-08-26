import { connectToDatabase } from "../../Database/DBconn.js";

const brightpickscatagories = async (req, res) => {
  try {
    const database = await connectToDatabase();
    console.log("Connected to database successfully");

    const categories = await database
      .collection("categories")
      .find({})
      .toArray();

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
