import { connectToDatabase } from "../../Database/DBconn.js";
import { ObjectId } from "mongodb";

//Add Channel

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

    // Required fields validation
    if (!channelName || !channelDescription || !youtubeUrl || !category) {
      return res.status(400).json({
        message:
          "Channel name, description, YouTube URL, and category are required",
        Status: "$ERROR",
      });
    }

    const database = await connectToDatabase();

    // Check if a channel with the same youtubeUrl already exists
    const existingChannel = await database
      .collection("channels")
      .findOne({ youtubeUrl: youtubeUrl });

    if (existingChannel) {
      return res.status(409).json({
        message: "Channel with this YouTube URL already exists",
        Status: "$ERROR",
        existingChannelId: existingChannel._id,
      });
    }

    const newChannel = {
      name: channelName,
      youtubeUrl: youtubeUrl,
      category: category,
      language: language || null,
      level: level || null,
      subscribers: subscribers || 0,
      rating: 0,
      tags: Array.isArray(tags) ? tags : [],
      description: channelDescription,
      createdAt: new Date(),
    };

    const result = await database.collection("channels").insertOne(newChannel);
    // console.log(result);

    if (!result.acknowledged || !result.insertedId) {
      return res
        .status(500)
        .json({ message: "Failed to add channel", Status: "$ERROR" });
    }

    res.status(201).json({
      message: "Channel added successfully",
      Status: "$SUCCESS",
      channelId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

//Edit Channel

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
    console.log("Editing channel with ID:", channelId);

    if (!ObjectId.isValid(channelId)) {
      return res
        .status(400)
        .json({ message: "Invalid Channel ID", Status: "$ERROR" });
    }

    const database = await connectToDatabase();
    const channelsCollection = database.collection("channels");

    const updateFields = {
      ...(channelName && { name: channelName }),
      ...(youtubeUrl && { youtubeUrl }),
      ...(category && { category }),
      ...(language && { language }),
      ...(level && { level }),
      ...(typeof subscribers === "number" && { subscribers }),
      ...(rating && { rating }),
      ...(tags && { tags: Array.isArray(tags) ? tags : [] }),
      ...(channelDescription && { description: channelDescription }),
      updatedAt: new Date(),
    };

    const result = await channelsCollection.updateOne(
      { _id: new ObjectId(channelId) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Channel not found, No updates Done",
        Status: "$ERROR",
      });
    }

    res
      .status(200)
      .json({ message: "Channel updated successfully", Status: "$SUCCESS" });
  } catch (error) {
    console.error("Error updating channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

//Delete Channel

const DeleteChannel = async (req, res) => {
  try {
    const { channelId } = req.params;
    // console.log("Deleting channel with ID:", channelId);
    if (!ObjectId.isValid(channelId)) {
      return res
        .status(400)
        .json({ message: "Invalid Channel ID", Status: "$ERROR" });
    }

    const database = await connectToDatabase();
    const channelsCollection = database.collection("channels");

    const result = await channelsCollection.deleteOne({
      _id: new ObjectId(channelId),
    });
    // console.log("Delete result:", result);

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "Channel not found", Status: "$ERROR" });
    }

    res
      .status(200)
      .json({ message: "Channel deleted successfully", Status: "$SUCCESS" });
  } catch (error) {
    console.error("Error deleting channel:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", Status: "$ERROR" });
  }
};

export { AddChannels, EditChannel, DeleteChannel };
