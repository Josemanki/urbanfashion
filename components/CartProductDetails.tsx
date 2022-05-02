import { Add, Remove } from '@material-ui/icons';
import React from 'react';

interface CartProductDetailsProps {}

export const CartProductDetails: React.FC<CartProductDetailsProps> = ({}) => {
  return (
    <div className="flex flex-col py-8 gap-4 md:flex-row">
      <div className="flex justify-between flex-[2_2_0%] gap-4">
        <img
          src="https://rukminim2.flixcart.com/image/332/398/kq6yefk0/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq.jpeg?q=50"
          alt=""
          className="w-32 md:w-48"
        />
        <div className="flex flex-col justify-around">
          <span>
            <b>Product:</b> JESSIE THUNDER SHOES
          </span>
          <span>
            <b>ID:</b> 9897908723
          </span>
          <div className="w-6 h-6 rounded-full bg-black"></div>
          <span>
            <b>Size:</b> 37.5
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center gap-6 md:flex-col">
        <div className="flex items-center justify-center gap-3">
          <Add className="cursor-pointer" />
          <span className="text-2xl font-light cursor-default">2</span>
          <Remove className="cursor-pointer" />
        </div>
        <div>
          <span className="text-3xl font-thin">30 €</span>
        </div>
      </div>
    </div>
  );
};
