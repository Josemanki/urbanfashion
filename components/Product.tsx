import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';

interface ProductProps {
  id: number;
  img: string;
}

export const Product: React.FC<ProductProps> = ({ id, img }) => {
  return (
    <div className="flex-1 min-w-[17.5rem] h-80 flex items-center justify-center bg-sky-50 relative">
      <div className="w-52 h-52 bg-white rounded-full absolute"></div>
      <img src={img} className="h-4/5 z-10" alt="" />
      <div className="opacity-0 w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center gap-4 transition-all duration-200 hover:bg-black/20 hover:opacity-100">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer">
          <ShoppingCartOutlined />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer">
          <SearchOutlined />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer">
          <FavoriteBorder />
        </div>
      </div>
    </div>
  );
};
