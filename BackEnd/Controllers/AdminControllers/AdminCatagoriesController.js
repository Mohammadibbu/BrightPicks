const db = require("../../Database/DBconn");
const { ObjectId } = require("mongodb");

// Function to add a new category
const AddCategory = async (req, res) => {
  try {
    const { categoryName, categoryDescription, tags } = req.body;

    // Required fields validation
    if (!categoryName || !categoryDescription) {
      return res.status(400).json({
        message: "Category name and description are required",
        Status: "$ERROR",
      });
    }

    const database = await db.connectToDatabase();

    // Check if a category with the same name already exists
    const existingCategory = await database
      .collection("categories")
      .findOne({ category: categoryName });

    if (existingCategory) {
      return res.status(409).json({
        message: "Category with this name already exists",
        Status: "$ERROR",
        existingCategoryId: existingCategory._id,
      });
    }

    const newCategory = {
      category: categoryName,
      description: categoryDescription,
      tags: tags || [],
      createdAt: new Date(),
    };

    const result = await database
      .collection("categories")
      .insertOne(newCategory);

    if (!result.acknowledged || !result.insertedId) {
      return res
        .status(500)
        .json({ message: "Failed to add category", Status: "$ERROR" });
    }

    res.status(201).json({
      message: "Category added successfully",
      Status: "$SUCCESS",
      categoryId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

//Edit Category
const EditCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { categoryName, categoryDescription, tags } = req.body;

    if (!categoryName && !categoryDescription && !tags) {
      return res.status(400).json({
        message: "Atleast one field is required for update",
        Status: "$INFO",
      });
    }
    // Required fields validation
    if (!ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        message: "Invalid category ID",
        Status: "$ERROR",
      });
    }

    const database = await db.connectToDatabase();
    // Check if the category exists
    const existingCategory = await database
      .collection("categories")
      .findOne({ _id: new ObjectId(categoryId) });
    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found",
        Status: "$ERROR",
      });
    }
    // Update the category
    const updatedCategory = {
      ...(categoryName && { category: categoryName }),
      ...(categoryDescription && { description: categoryDescription }),
      ...(tags && { tags }),
      updatedAt: new Date(),
    };

    // console.log("Updating category with ID:", updatedCategory);

    const result = await database
      .collection("categories")
      .updateOne({ _id: new ObjectId(categoryId) }, { $set: updatedCategory });
    if (result.modifiedCount === 0) {
      return res.status(500).json({
        message: "Failed to update category",
        Status: "$ERROR",
      });
    }
    res.status(200).json({
      message: "Category updated successfully",
      Status: "$SUCCESS",
      categoryId: categoryId,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

//Delete Category

const DeleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    // Required fields validation
    if (!ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        message: "Invalid category ID",
        Status: "$ERROR",
      });
    }
    const database = await db.connectToDatabase();
    // Check if the category exists
    const existingCategory = await database
      .collection("categories")
      .findOne({ _id: new ObjectId(categoryId) });
    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found",
        Status: "$ERROR",
      });
    }
    // Delete the category
    const result = await database
      .collection("categories")
      .deleteOne({ _id: new ObjectId(categoryId) });
    if (result.deletedCount === 0) {
      return res.status(500).json({
        message: "Failed to delete category",
        Status: "$ERROR",
      });
    }
    res.status(200).json({
      message: "Category deleted successfully",
      Status: "$SUCCESS",
      categoryId: categoryId,
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

module.exports = {
  AddCategory,
  EditCategory,
  DeleteCategory,
};
