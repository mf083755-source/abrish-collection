import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Product title is required'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  salePrice: {
    type: Number,
    min: [0, 'Sale price cannot be negative'],
    default: 0
  },
  sku: {
    type: String,
    trim: true
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  featuredImage: {
    type: String,
    default: 'https://via.placeholder.com/400x400/C9A84C/FFFFFF?text=ABRISH'
  },
  images: [{
    url: String,
    alt: String
  }],
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  tags: [String],
  status: {
    type: String,
    enum: ['Active', 'Draft', 'Archived'],
    default: 'Draft'
  },
  ratings: [{
    userId: String,
    rating: { type: Number, min: 1, max: 5 },
    review: String,
    createdAt: { type: Date, default: Date.now }
  }],
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  wishlistCount: { type: Number, default: 0 },
  orderCount: { type: Number, default: 0 }

}, {
  timestamps: true
});

// Generate slug before save
productSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;