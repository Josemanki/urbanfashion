import React from 'react';
import { categories } from '../data';
import { CategoryItem } from './CategoryItem';

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = ({}) => {
  return (
    <div className="mt-6">
      <div className="flex flex-col p-6 gap-4 md:flex-row">
        {categories.map((categoryProps) => (
          <CategoryItem {...categoryProps} key={categoryProps.id} />
        ))}
      </div>
    </div>
  );
};
