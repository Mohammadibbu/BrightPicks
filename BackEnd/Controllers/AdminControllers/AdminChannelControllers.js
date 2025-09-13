import { Channel } from "../../Database/models/DataModel.js";
import mongoose from "mongoose";

// Add Channel
const AddChannels = async (req, res) => {
  try {
    const {
      channelName,
      youtubeUrl,
      category,
      language,
      level,
      subscribers,
      rating,
      tags,
      channelDescription,
    } = req.body;

    if (!channelName || !channelDescription || !youtubeUrl || !category) {
      return res.status(400).json({
        message:
          "Channel name, description, YouTube URL, and category are required",
        Status: "$ERROR",
      });
    }

    // Check if a channel with the same youtubeUrl already exists
    const existingChannel = await Channel.findOne({ youtubeUrl });
    if (existingChannel) {
      return res.status(409).json({
        message: "Channel with this YouTube URL already exists",
        Status: "$ERROR",
        existingChannelId: existingChannel._id,
      });
    }

    const newChannel = new Channel({
      name: channelName,
      youtubeUrl,
      category,
      language: language || null,
      level: level || null,
      subscribers: subscribers || 0,
      rating: 0,
      tags: Array.isArray(tags) ? tags : [],
      description: channelDescription,
      createdAt: new Date(),
    });

    const savedChannel = await newChannel.save();

    res.status(201).json({
      message: "Channel added successfully",
      Status: "$SUCCESS",
      channelId: savedChannel._id,
    });
  } catch (error) {
    console.error("Error adding channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

// Edit Channel
const EditChannel = async (req, res) => {
  try {
    const { channelId } = req.params;
    const {
      channelName,
      youtubeUrl,
      category,
      language,
      level,
      subscribers,
      rating,
      tags,
      channelDescription,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
      return res
        .status(400)
        .json({ message: "Invalid Channel ID", Status: "$ERROR" });
    }

    const updateFields = {
      ...(channelName && { name: channelName }),
      ...(youtubeUrl && { youtubeUrl }),
      ...(category && { category }),
      ...(language && { language }),
      ...(level && { level }),
      ...(typeof subscribers === "number" && { subscribers }),
      ...(typeof rating === "number" && { rating }),
      ...(tags && { tags: Array.isArray(tags) ? tags : [] }),
      ...(channelDescription && { description: channelDescription }),
      updatedAt: new Date(),
    };

    const updatedChannel = await Channel.findByIdAndUpdate(
      channelId,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedChannel) {
      return res.status(404).json({
        message: "Channel not found, No updates done",
        Status: "$ERROR",
      });
    }

    res.status(200).json({
      message: "Channel updated successfully",
      Status: "$SUCCESS",
    });
  } catch (error) {
    console.error("Error updating channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

// Delete Channel
const DeleteChannel = async (req, res) => {
  try {
    const { channelId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
      return res
        .status(400)
        .json({ message: "Invalid Channel ID", Status: "$ERROR" });
    }

    const deletedChannel = await Channel.findByIdAndDelete(channelId);

    if (!deletedChannel) {
      return res
        .status(404)
        .json({ message: "Channel not found", Status: "$ERROR" });
    }

    res.status(200).json({
      message: "Channel deleted successfully",
      Status: "$SUCCESS",
    });
  } catch (error) {
    console.error("Error deleting channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

export { AddChannels, EditChannel, DeleteChannel };
