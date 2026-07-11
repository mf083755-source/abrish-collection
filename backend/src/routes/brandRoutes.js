import express from "express";

import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.js";

const router = express.Router();

// GET All Brands
router.get("/", getBrands);

// CREATE Brand
router.post("/", createBrand);

router.put("/:id", updateBrand);

router.delete("/:id", deleteBrand);

export default router;