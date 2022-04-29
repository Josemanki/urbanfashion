import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="h-16">
      <div className="py-2 px-4 flex items-center justify-between">
        <div className="flex flex-1 items-center">
          <span className="text-md cursor-pointer">EN</span>
          <div className="border border-regular-700 flex items-center justify-center ml-6 p-1">
            <input type="text" name="searchbar" id="searchbar" />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl text-center font-bold">URBAN FASHION.</h1>
        </div>
        <div className="flex-1 cursor-pointer flex items-center justify-end">
          <div className="ml-6">REGISTER</div>
          <div className="ml-6">LOGIN</div>
          <div className="ml-6">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};
