import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';
import { IProduct } from '../types/types';

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: [String] },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.Product || model<IProduct>('Product', ProductSchema);
