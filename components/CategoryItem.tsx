import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryItemProps {
  id: number;
  img: string;
  title: string;
  cat: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ img, title, cat }) => {
  return (
    <div className="flex-1 relative w-full h-[60vh]">
      <Image src={img} alt="" layout="fill" objectFit={'cover'} />
      <div className="md:opacity-0 transition-all duration-300 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center hover:opacity-100">
        <div className="p-4 flex flex-col items-center justify-center bg-teal-500 skew-y-neg3">
          <h1 className="text-3xl text-white font-semibold uppercase">{title}</h1>
          <Link href={`/products/${cat}`}>
            <a className="px-4 py-1 border-2 border-white text-white uppercase">Visit</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
