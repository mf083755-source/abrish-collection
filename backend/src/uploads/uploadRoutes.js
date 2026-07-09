import express from "express";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log("UPLOAD ROUTE HIT");
  next();
}, upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    res.json({
      success: true,
      imageUrl: `/uploads/products/${req.file.filename}`,
      filename: req.file.filename,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;