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