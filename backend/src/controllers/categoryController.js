import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Category
export const createCategory = async (req, res) => {
  try {
    const slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const category = await prisma.category.create({
      data: {
        name: req.body.name,
        slug,
        image: req.body.image || "",
        description: req.body.description || "",
        status: "Active",
      },
    });

    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const category = await prisma.category.update({
      where: { id },
      data: {
        name: req.body.name,
        slug,
        image: req.body.image || "",
        description: req.body.description || "",
        status: req.body.status || "Active",
      },
    });

    res.json({
      success: true,
      category,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Category
export const deleteCategory = async (req, res) => {
  try {

    await prisma.category.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      success: true,
      message: "Category deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};