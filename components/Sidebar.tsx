import { Search } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <nav className="w-screen h-screen z-30">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <span className="text-md cursor-pointer">EN</span>
        <div className="border border-regular-700 flex items-center justify-center ml-6 p-1">
          <input type="text" name="searchbar" id="searchbar" />
          <Search style={{ color: 'gray', fontSize: 20 }} />
        </div>
        <Link href={'/login'}>
          <a className="uppercase text-2xl">Login</a>
        </Link>
        <Link href={'/register'}>
          <a className="uppercase text-2xl">Register</a>
        </Link>
      </div>
    </nav>
  );
};
