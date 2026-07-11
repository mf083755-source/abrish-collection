import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All Brands
export const getBrands = async (req, res) => {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      brands,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Create Brand
export const createBrand = async (req, res) => {

  try {

    const slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const brand = await prisma.brand.create({

      data: {

        name: req.body.name,
        slug,
        logo: req.body.logo || "",
        description: req.body.description || "",
        status: "Active",

      },

    });

    res.status(201).json({

      success: true,
      brand,

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};
// Update Brand
export const updateBrand = async (req, res) => {
  try {
    const slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const brand = await prisma.brand.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        slug,
        logo: req.body.logo || "",
        description: req.body.description || "",
      },
    });

    res.json({
      success: true,
      brand,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Brand
export const deleteBrand = async (req, res) => {
  try {

    await prisma.brand.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      success: true,
      message: "Brand deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};