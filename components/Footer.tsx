import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import { usefulLinks } from '../data';
import React from 'react';
import Link from 'next/link';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="flex gap-10" id="footer">
      <div className="flex-1 flex flex-col p-5">
        <h1 className="text-2xl font-semibold uppercase">Urban Fashion.</h1>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis culpa recusandae sunt excepturi, eaque
          quis eveniet saepe accusantium molestias?
        </p>
        <div className="flex gap-5">
          <div className="h-10 w-10 rounded-full text-white bg-blue-500 flex items-center justify-center cursor-pointer">
            <Facebook />
          </div>
          <div className="h-10 w-10 rounded-full text-white bg-rose-500 flex items-center justify-center cursor-pointer">
            <Instagram />
          </div>
          <div className="h-10 w-10 rounded-full text-white bg-sky-500 flex items-center justify-center cursor-pointer">
            <Twitter />
          </div>
          <div className="h-10 w-10 rounded-full text-white bg-red-600 flex items-center justify-center cursor-pointer">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="font-semibold text-2xl uppercase">Useful Links.</h3>
        <ul className="flex flex-wrap mt-3">
          {usefulLinks.map((link) => (
            <Link href={link.url} key={link.title}>
              <li className="w-2/4 mt-2">
                <a>{link.title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-5">
        <h3 className="font-semibold text-2xl uppercase">Contact.</h3>
        <div className="mt-5">
          <Room />
          <span className="ml-4">Randomstraße 42, 12345 Berlin</span>
        </div>
        <div className="mt-5">
          <Phone />
          <span className="ml-4">+49 1234 5678 90</span>
        </div>
        <div className="mt-5">
          <MailOutline />
          <span className="ml-4">hello@hernandez-jose.com</span>
        </div>
      </div>
    </footer>
  );
};
