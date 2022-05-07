import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';
import { IProduct } from '../types/types';

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: [String] },
    sizes: { type: [String], required: true },
    colors: { type: [String], required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Product || model<IProduct>('Product', ProductSchema);
