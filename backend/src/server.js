import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection with Timeout Options
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 60000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 60000,
    });
    console.log('MongoDB Connected Successfully!');
    console.log('Database:', mongoose.connection.db.databaseName);
  } catch (error) {
    console.log('MongoDB Connection Error:', error.message);
    console.log('Running without MongoDB - using mock data');
  }
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// API ROUTES
// ============================================

// Products API
app.use('/api/products', productRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Abrish Collection API is running',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
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