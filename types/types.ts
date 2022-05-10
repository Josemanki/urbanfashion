import { JwtPayload } from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { Types } from 'mongoose';

export interface IAbbreviatedProduct {
  productId: string;
  quantity: number;
}

export interface IUser {
  _id: string;
  username: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface IProduct {
  title: string;
  desc: string;
  _id: string;
  img: string;
  categories?: Types.Array<string>;
  sizes?: Types.Array<string>;
  colors?: Types.Array<string>;
  price: number;
  inStock: boolean;
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

export interface ICartState {
  products: IProduct[];
  quantity: number;
  price: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
  price: number;
  color: string;
  size: string;
}
