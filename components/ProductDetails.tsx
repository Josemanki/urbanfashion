import { Add, Remove } from '@material-ui/icons';
import React from 'react';

interface ProductDetailsProps {}

export const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  return (
    <div className="p-4 w-screen flex flex-col items-center md:items-start md:p-16 md:flex-row">
      <div className="flex-1 w-full md:w-auto">
        <img
          src="https://static.zara.net/photos///2022/V/0/1/p/7227/037/711/2/w/850/7227037711_6_1_1.jpg?ts=1651052220256"
          alt=""
          className="h-[40vh] w-full object-cover md:w-auto md:h-full"
        />
      </div>
      <div className="flex-1 mt-6 md:px-16">
        <h2 className="text-4xl font-thin">Straight Jeans</h2>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla consequatur natus dignissimos in
          consequuntur maxime vitae nemo debitis harum voluptates amet quos qui, ipsam tempore illum iusto recusandae
          sunt nobis ullam pariatur sapiente praesentium? Nesciunt possimus voluptatibus natus excepturi neque porro sed
          laborum ex velit. Autem maxime nemo in!
        </p>
        <span className="text-3xl font-thin">20 €</span>
        <div className="flex w-full justify-between my-8">
          <div className="flex items-center gap-1 md:w-2/4">
            <h3 className="text-xl font-light">Color</h3>
            <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex items-center gap-1 md:w-2/4">
            <h3 className="text-xl font-light">Size</h3>
            <select className="border p-1">
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="md:w-2/4">
            <Remove />
            <span className="rounded-md border-2 border-teal-500 px-2 mx-2">1</span>
            <Add />
          </div>
          <div className="md:w-2/4">
            <button className="uppercase border-2 py-2 px-4 border-teal-500 cursor-pointer transition-all duration-200 hover:text-white hover:bg-teal-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
