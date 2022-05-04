import { JwtPayload } from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { Types } from 'mongoose';

export interface IAbbreviatedProduct {
  productId: string;
  quantity: number;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface IProduct {
  title: string;
  desc: string;
  img: string;
  categories?: Types.Array<string>;
  size?: string;
  color?: string;
  price: number;
}

export interface IOrder {
  userId: string;
  products: Types.Array<IAbbreviatedProduct>;
  amount: number;
  address: object;
  status: Status;
}

export interface ICart {
  userId: string;
  products: Types.Array<IAbbreviatedProduct>;
}

export enum Status {
  pending = 'PENDING',
  sent = 'SENT',
  received = 'RECEIVED',
}

export interface ExtendedRequest extends NextApiRequest {
  user: JwtPayload;
}
