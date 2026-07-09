import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Create uploads folder if it doesn't exist
const uploadsPath = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(path.join(uploadsPath, "products"), {
    recursive: true,
  });
}

// Serve uploaded images
app.use("/uploads", express.static(uploadsPath));

// ============================================
// API ROUTES
// ============================================

// Products API
app.use('/api/products', productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/upload", uploadRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Abrish Collection API is running',
    timestamp: new Date().toISOString(),
    database: "PostgreSQL (Neon)"
  });
});

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// SERVE FRONTEND (Production)
// ============================================

// Serve Frontend Static Files
const frontendDistPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

// All non-API routes go to index.html (React Router)
app.use((req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }
  // Send index.html for all other routes
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// ============================================
// ERROR HANDLER
// ============================================

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ 
    success: false,
    message: err.message || 'Something went wrong!' 
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
  console.log('Health Check: http://localhost:' + PORT + '/api/health');
  console.log('Products API: http://localhost:' + PORT + '/api/products');
  console.log('Frontend: http://localhost:' + PORT);
  console.log('Test API: http://localhost:' + PORT + '/api/test');
});