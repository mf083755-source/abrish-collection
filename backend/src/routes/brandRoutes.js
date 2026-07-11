import express from "express";

import {
  getBrands,
  createBrand,
} from "../controllers/brandController.js";

const router = express.Router();

// GET All Brands
router.get("/", getBrands);

// CREATE Brand
router.post("/", createBrand);

export default router;