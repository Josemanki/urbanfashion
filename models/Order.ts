import { Schema, model, models } from 'mongoose';
import { Status } from '../types/types';
import { IOrder } from '../types/types';

const OrderSchema = new Schema<IOrder>(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, enum: Status, default: Status.pending },
  },
  { timestamps: true }
);

export default models.Order || model<IOrder>('Order', OrderSchema);
