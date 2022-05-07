import { Add, Remove } from '@material-ui/icons';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { IProduct } from '../types/types';
import { publicRequest } from '../utils/requestMethods';

interface ProductDetailsProps {}

export const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const id = router.query.id;
  const [product, setProduct] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    id && getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  console.log(router.query);
  return (
    product && (
      <div className="p-4 w-screen flex flex-col items-center md:items-start md:p-16 md:flex-row">
        <div className="flex-1 w-full md:w-auto">
          <img src={product.img} alt="" className="h-[40vh] w-full object-cover md:w-auto md:h-full" />
        </div>
        <div className="flex-1 mt-6 md:px-16">
          <h2 className="text-4xl font-thin">{product.title}</h2>
          <p className="my-6">{product.desc}</p>
          <span className="text-3xl font-thin">{product.price}€</span>
          <div className="flex w-full justify-between my-8">
            <div className="flex items-center gap-1 md:w-2/4">
              <h3 className="text-xl font-light">Color</h3>
              {product.colors.map((color) => (
                <div
                  style={{ backgroundColor: `${color}` }}
                  key={color}
                  className={`w-6 h-6 border border-black rounded-full cursor-pointer`}
                  onClick={() => setColor(color)}
                ></div>
              ))}
            </div>
            <div className="flex items-center gap-1 md:w-2/4">
              <h3 className="text-xl font-light">Size</h3>
              <select onChange={(e) => setSize(e.target.value.toLowerCase())} className="border p-1">
                {product.sizes.map((size) => (
                  <option key={size}>{size.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="md:w-2/4">
              <Remove onClick={() => handleQuantity('dec')} className="cursor-pointer" />
              <span className="rounded-md border-2 border-teal-500 px-2 mx-2">{quantity}</span>
              <Add onClick={() => handleQuantity('inc')} className="cursor-pointer" />
            </div>
            <div className="md:w-2/4">
              <button
                onClick={handleClick}
                className="uppercase border-2 py-2 px-4 border-teal-500 cursor-pointer transition-all duration-200 hover:text-white hover:bg-teal-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
