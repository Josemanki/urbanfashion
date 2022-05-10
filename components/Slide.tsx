import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SlideProps {
  id: number;
  title: string;
  description: string;
  img: string;
  cta: string;
  url: string;
}

export const Slide: React.FC<SlideProps> = ({ id, title, description, img, cta, url }) => {
  return (
    <div className="flex items-center w-screen h-screen text-uppercase">
      <div className="flex flex-1 items-center h-full">
        <div className="relative h-full w-full flex-1">
          <Image src={img} layout="fill" objectFit="cover" />
          {/* <img src={img} className="h-full object-cover" /> */}
        </div>
        <div className="flex-1 px-16">
          <h2 className="text-7xl font-bold">{title}</h2>
          <p className="text-2xl tracking-wider mt-12">{description}</p>
          <Link href={url}>
            <button className="text-2xl border-2 border-neutral-700 py-2 px-4 mt-12">{cta}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
