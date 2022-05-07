import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { ICartProduct } from '../types/types';

export const CartProductDetails: React.FC<ICartProduct> = ({ _id, title, color, size, img, price, quantity }) => {
  return (
    <div className="flex flex-col py-8 gap-4 md:flex-row">
      <div className="flex justify-between flex-[2_2_0%] gap-4">
        <img src={img} alt="" className="w-32 md:w-48" />
        <div className="flex flex-col justify-around">
          <span>
            <b>Product:</b> {title}
          </span>
          <span>
            <b>ID:</b> {_id}
          </span>
          <div style={{ backgroundColor: `${color}` }} className="w-6 h-6 rounded-full"></div>
          <span>
            <b>Size:</b> {size}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center gap-6 md:flex-col">
        <div className="flex items-center justify-center gap-3">
          <Add className="cursor-pointer" />
          <span className="text-2xl font-light cursor-default">{quantity}</span>
          <Remove className="cursor-pointer" />
        </div>
        <div>
          <span className="text-3xl font-thin">{price * quantity}€</span>
        </div>
      </div>
    </div>
  );
};
