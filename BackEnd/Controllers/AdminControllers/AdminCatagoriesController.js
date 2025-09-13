import mongoose from "mongoose";
import { CategoryModel } from "../../Database/models/DataModel.js";

// Add Category
const AddCategory = async (req, res) => {
  try {
    const { categoryName, categoryDescription, tags } = req.body;

    if (!categoryName || !categoryDescription) {
      return res.status(400).json({
        message: "Category name and description are required",
        Status: "$ERROR",
      });
    }

    const existingCategory = await CategoryModel.findOne({ categoryName });

    if (existingCategory) {
      return res.status(409).json({
        message: "Category with this name already exists",
        Status: "$ERROR",
        existingCategoryId: existingCategory._id,
      });
    }

    const newCategory = new CategoryModel({
      categoryName,
      categoryDescription,
      tags: Array.isArray(tags) ? tags : [],
      createdAt: new Date(),
    });

    const result = await newCategory.save();

    if (!result) {
      return res.status(500).json({
        message: "Failed to add category",
        Status: "$ERROR",
      });
    }

    res.status(201).json({
      message: "Category added successfully",
      Status: "$SUCCESS",
      categoryId: result._id,
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

// Edit Category
const EditCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { categoryName, categoryDescription, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        message: "Invalid category ID",
        Status: "$ERROR",
      });
    }

    if (!categoryName && !categoryDescription && !tags) {
      return res.status(400).json({
        message: "At least one field is required for update",
        Status: "$INFO",
      });
    }

    const existingCategory = await CategoryModel.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found",
        Status: "$ERROR",
      });
    }

    const updatedCategory = {
      ...(categoryName && { categoryName }),
      ...(categoryDescription && { categoryDescription }),
      ...(tags && { tags: Array.isArray(tags) ? tags : [] }),
      updatedAt: new Date(),
    };

    const result = await CategoryModel.findByIdAndUpdate(
      categoryId,
      { $set: updatedCategory },
      { new: true }
    );

    if (!result) {
      return res.status(500).json({
        message: "Failed to update category",
        Status: "$ERROR",
      });
    }

    res.status(200).json({
      message: "Category updated successfully",
      Status: "$SUCCESS",
      categoryId: result._id,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

// Delete Category
const DeleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        message: "Invalid category ID",
        Status: "$ERROR",
      });
    }

    const existingCategory = await CategoryModel.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found",
        Status: "$ERROR",
      });
    }

    const result = await CategoryModel.findByIdAndDelete(categoryId);

    if (!result) {
      return res.status(500).json({
        message: "Failed to delete category",
        Status: "$ERROR",
      });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      Status: "$SUCCESS",
      categoryId: result._id,
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res
      .status(500)
      .json({ message: "Internal server error", Status: "$ERROR" });
  }
};

export { AddCategory, EditCategory, DeleteCategory };
