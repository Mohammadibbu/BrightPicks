import { Channel } from "../../Database/models/DataModel.js";
import mongoose from "mongoose";
const brightpickschannels = async (req, res) => {
  const { Text, language, level, rating, category } = req.query;
  if (mongoose.connection.readyState !== 1) {
    throw new Error("Connection not Established");
  }
  if (Text) {
    // Handle search query
    try {
      const channels = await Channel.find({
        name: { $regex: Text, $options: "i" },
      });
      if (!channels || channels.length === 0) {
        return res
          .status(404)
          .json({ message: "No Result found", query: Text, Status: "$ERROR" });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: Text,
        Status: "$SUCCESS",
      });
    } catch (error) {
      console.error("Error fetching channels by search:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", Status: "$ERROR" });
    }
  }

  if (language) {
    // Handle language query
    try {
      const channels = await Channel.find({ language: language });
      if (!channels || channels.length === 0) {
        return res.status(404).json({
          message: "No Result found",
          query: language,
          Status: "$ERROR",
        });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: language,
        Status: "$SUCCESS",
      });
    } catch (error) {
      console.error("Error fetching channels by language:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", Status: "$ERROR" });
    }
  }

  if (level) {
    // Handle level query
    try {
      const channels = await Channel.find({ level: level });
      if (!channels || channels.length === 0) {
        return res
          .status(404)
          .json({ message: "No Result found", query: level, Status: "$ERROR" });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: level,
      });
    } catch (error) {
      console.error("Error fetching channels by level:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", Status: "$ERROR" });
    }
  }
  if (category) {
    // Handle category query
    try {
      const channels = await Channel.find({ category: category });
      if (!channels || channels.length === 0) {
        return res.status(404).json({
          message: "No Result found",
          query: category,
          Status: "$ERROR",
        });
      }
      return res.status(200).json({
        data: channels,
        message: "Data fetched successfully",
        query: category,
        Status: "$SUCCESS",
      });
    } catch (error) {
      console.error("Error fetching channels by category:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", Status: "$ERROR" });
    }
  }

  // If no specific query parameters are provided, return all channels
  try {
    const channels = await Channel.find({});
    if (!channels || channels.length === 0) {
      return res
        .status(404)
        .json({ message: "No Result found", Status: "$ERROR" });
    }
    res.status(200).json({
      data: channels,
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
export default brightpickschannels;
