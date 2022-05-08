import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSize, decreaseQuantity, increaseQuantity } from '../redux/cartSlice';
import { ICartProduct } from '../types/types';

export const CartProductDetails: React.FC<ICartProduct> = (props) => {
  const dispatch = useDispatch();

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec') {
      dispatch(decreaseQuantity(props));
    } else {
      dispatch(increaseQuantity(props));
    }
  };

  const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value.toLowerCase();
    const product = { ...props };
    dispatch(changeSize({ product, newSize }));
  };

  const { _id, title, color, size, img, price, quantity, sizes } = props;
  return (
    <div className="flex flex-col py-8 gap-4 md:flex-row">
      <div className="flex flex-[2_2_0%] gap-4">
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
            <b>Size:</b>
            <select value={props.size} onChange={handleChangeSize} className="border p-1 uppercase">
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center gap-6 md:flex-col">
        <div className="flex items-center justify-center gap-3">
          <Add onClick={() => handleQuantity('inc')} className="cursor-pointer" />
          <span className="text-2xl font-light cursor-default">{quantity}</span>
          <Remove onClick={() => handleQuantity('dec')} className="cursor-pointer" />
        </div>
        <div>
          <span className="text-3xl font-thin">{price * quantity}€</span>
        </div>
      </div>
    </div>
  );
};
