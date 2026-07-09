import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// Get All Categories
router.get("/", getCategories);

// Create Category
router.post("/", createCategory);

export default router;
router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);