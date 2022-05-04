import { Schema, model, models } from 'mongoose';
import { ICart } from '../types/types';

const CartSchema = new Schema<ICart>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

export default models.Cart || model<ICart>('Cart', CartSchema);
