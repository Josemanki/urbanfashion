import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Products } from './Products';

export const ProductList: React.FC = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const router = useRouter();

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setFilters({
      ...filters,
      [name]: value.toLowerCase(),
    });
  };

  return (
    <div>
      <h2 className="m-8 text-4xl font-bold capitalize">{router.query.cat ?? 'Products'}</h2>
      <div className="flex flex-wrap justify-around md:justify-between">
        <div className="flex flex-col w-2/5 text-xl font-semibold gap-5 items-start md:m-8 md:flex-row md:items-center">
          <span>Filter Products:</span>
          <select
            name="colors"
            id="color"
            onChange={handleFilters}
            className="border border-neutral-700 py-1 px-2 w-full md:w-auto"
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select
            name="sizes"
            id="size"
            onChange={handleFilters}
            className="border border-neutral-700 py-1 px-2 w-full md:w-auto"
          >
            <option disabled>Size</option>
            <option value={'S'}>Small</option>
            <option value={'M'}>Medium</option>
            <option value={'L'}>Large</option>
            <option value={'XL'}>Extra Large</option>
          </select>
        </div>
        <div className="flex flex-col w-2/5 text-xl font-semibold gap-5 items-center">
          <span>Sort Products:</span>
          <select
            name="filter"
            id="filter"
            onChange={(e) => setSort(e.target.value)}
            className="border border-neutral-700 py-1 px-2 w-full md:w-auto"
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (Asc)</option>
            <option value="desc">Price (Desc)</option>
          </select>
        </div>
      </div>
      <Products cat={router.query.cat} filters={filters} sort={sort} />
    </div>
  );
};
