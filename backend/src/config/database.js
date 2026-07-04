import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/abrish_db');
    console.log('MongoDB Connected:', conn.connection.host);
  } catch (error) {
    console.log('MongoDB Connection Error:', error.message);
  }
};

export default connectDB;