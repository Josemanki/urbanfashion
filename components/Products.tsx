import React from 'react';
import { popularProducts } from '../data';
import { Product } from './Product';

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <>
      <div className="p-6 flex flex-wrap justify-between gap-4">
        {popularProducts.map((productProps) => (
          <Product {...productProps} key={productProps.id} />
        ))}
      </div>
    </>
  );
};
