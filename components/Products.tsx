import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './Product';
import { useRouter } from 'next/router';

interface ProductsProps {
  cat?: string | string[];
  filters?: {};
  sort?: string;
}

export const Products: React.FC<ProductsProps> = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat && cat != 'index' ? `/api/products/find?category=${cat}` : '/api/products/find'
        );
        if (res.data.length === 0) {
          router.push('/');
        } else {
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'desc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  useEffect(() => {
    cat !== 'index' &&
      setFilteredProducts(
        products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
      );
  }, [cat, filters, products]);

  const generateProducts = () => {
    if (cat === 'index') {
      return products.slice(0, 8).map((productProps) => <Product {...productProps} key={productProps._id} />);
    }
    if (cat) {
      return filteredProducts.map((productProps) => <Product {...productProps} key={productProps._id} />);
    }
    return filteredProducts.map((productProps) => <Product {...productProps} key={productProps._id} />);
  };

  return (
    <>
      <div className="p-6 flex flex-wrap justify-between gap-4">{generateProducts()}</div>
    </>
  );
};
