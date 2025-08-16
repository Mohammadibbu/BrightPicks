const db = require("../Database/DBconn");

const brightpickscatagories = async (req, res) => {
  try {
    const database = await db.connectToDatabase();
    console.log("Connected to database successfully");

    const categories = await database
      .collection("catagories")
      .find({})
      .toArray();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "No Result found" });
    }
    res.status(200).json({
      data: categories,
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = brightpickscatagories;
