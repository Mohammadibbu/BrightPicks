const db = require("../Database/DBconn");

const brightpickschannels = async (req, res) => {
  const { search, language, level, rating } = req.query;
  const database = await db.connectToDatabase();
  if (!database) {
    return res.status(500).json({ message: "Database connection failed" });
  }

  if (search) {
    // Handle search query
    try {
      const channels = await database
        .collection("channels")
        .find({ name: { $regex: search, $options: "i" } })
        .toArray();
      if (!channels || channels.length === 0) {
        return res
          .status(404)
          .json({ message: "No Result found", query: search });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: search,
      });
    } catch (error) {
      console.error("Error fetching channels by search:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  if (language) {
    // Handle language query
    try {
      const channels = await database
        .collection("channels")
        .find({ language: language })
        .toArray();
      if (!channels || channels.length === 0) {
        return res
          .status(404)
          .json({ message: "No Result found", query: language });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: language,
      });
    } catch (error) {
      console.error("Error fetching channels by language:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  if (level) {
    // Handle level query
    try {
      const channels = await database
        .collection("channels")
        .find({ level: level })
        .toArray();
      if (!channels || channels.length === 0) {
        return res
          .status(404)
          .json({ message: "No Result found", query: level });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: level,
      });
    } catch (error) {
      console.error("Error fetching channels by level:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  //   if (rating) {
  //     return res.send(`Channels with rating: ${rating}`);
  //   }

  // If no specific query parameters are provided, return all channels
  try {
    const channels = await database.collection("channels").find({}).toArray();
    if (!channels || channels.length === 0) {
      return res.status(404).json({ message: "No Result found" });
    }
    res.status(200).json({
      data: channels,
      message: "Data fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = brightpickschannels;
