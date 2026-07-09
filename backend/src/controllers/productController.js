import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all products
export const getProducts = async (req, res) => {
  try {
    const { category, search, limit = 50, page = 1 } = req.query;

    const where = {};

    if (category && category !== "All") {
      where.category = category;
    }

    if (search) {
      where.title = {
        contains: search,
        mode: "insensitive",
      };
    }

    const skip = (Number(page) - 1) * Number(limit);

    const products = await prisma.product.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: Number(limit),
    });

    const total = await prisma.product.count({
      where,
    });

    res.json({
      success: true,
      products,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single product
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id }
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        views: {
          increment: 1
        }
      }
    });

    res.json({
      success: true,
      product: updatedProduct
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create product
export const createProduct = async (req, res) => {
  try {

    console.log("========== CREATE PRODUCT ==========");
    console.log(req.body);

    const slug = req.body.title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const product = await prisma.product.create({
      data: {
        title: req.body.title,
        slug,
        description: req.body.description || "",
        price: Number(req.body.price),
        salePrice: Number(req.body.salePrice || 0),
        sku: req.body.sku || "",
        stock: Number(req.body.stock || 0),
        featuredImage: req.body.featuredImage || "https://via.placeholder.com/400x400/C9A84C/FFFFFF?text=ABRISH",
        category: req.body.category,
        status: req.body.status || "Draft",
        tags: req.body.tags || []
      }
    });
    console.log("PRODUCT SAVED:", product);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.product.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        ...req.body,
        price: req.body.price ? Number(req.body.price) : undefined,
        salePrice: req.body.salePrice ? Number(req.body.salePrice) : undefined,
        stock: req.body.stock ? Number(req.body.stock) : undefined
      }
    });

    res.json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await prisma.product.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    await prisma.product.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};