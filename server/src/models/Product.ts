import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: Math.random,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const Product = mongoose.model<{
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}>('Product', productSchema);

export default Product;
