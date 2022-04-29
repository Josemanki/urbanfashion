import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import { Products } from '../components/Products';

export const ProductsPage: NextPage = ({}) => {
  return (
    <Layout>
      <div>
        <h2 className="m-8 text-4xl font-bold">Dresses</h2>
        <div className="flex justify-between">
          <div className="m-8 text-xl font-semibold flex gap-5 items-center">
            <span>Filter Products:</span>
            <select name="filter" id="filter" className="border border-neutral-700 py-1 px-2">
              <option disabled selected>
                Color
              </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
            <select name="filter" id="filter" className="border border-neutral-700 py-1 px-2">
              <option disabled selected>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
          <div className="m-8 text-xl font-semibold flex gap-5 items-center">
            <span>Sort Products:</span>
            <select name="filter" id="filter" className="border border-neutral-700 py-1 px-2">
              <option>Price (Asc)</option>
              <option>Price (Desc)</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
        <Products />
      </div>
    </Layout>
  );
};

export default ProductsPage;
