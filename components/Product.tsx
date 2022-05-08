import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { ICartProduct, IProduct } from '../types/types';

// interface ProductProps {
//   _id: number;
//   img: string;
// }

export const Product: React.FC<ICartProduct> = (props) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addProduct({ ...props, quantity: 1, color: props.colors[0], size: props.sizes[0], price: props.price }));
  };

  const { _id, img } = props;

  return (
    <div className="flex-1 min-w-[17.5rem] h-80 flex items-center justify-center bg-sky-50 relative">
      <div className="w-52 h-52 bg-white rounded-full absolute"></div>
      <img src={img} className="h-4/5 z-10" alt="" />
      <div className="opacity-0 w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center gap-4 transition-all duration-200 hover:bg-black/20 hover:opacity-100">
        <button
          onClick={handleCart}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer"
        >
          <ShoppingCartOutlined />
        </button>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer">
          <Link href={`/product/${_id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 hover:bg-sky-50 hover:scale-110 hover:cursor-pointer">
          <FavoriteBorder />
        </button>
      </div>
    </div>
  );
};
