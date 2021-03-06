import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { logout } from '../redux/userSlice';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const cart = useSelector((state: AppState) => state.cart.quantity);
  const currentUser = useSelector((state: AppState) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="h-16">
      <div className="h-full py-2 flex items-center justify-between md:px-4">
        <div className="flex flex-1 items-center">
          {/* <span className="hidden md:block text-md cursor-pointer">EN</span> */}
          <div className="flex items-center justify-center p-1">
            {/* <input placeholder="Search" className="w-14 md:w-auto" type="text" name="searchbar" id="searchbar" />
            <Search style={{ color: 'gray', fontSize: 20 }} /> */}
            <Link href={'/products'}>
              <a className="underline uppercase text-center">Browse Products</a>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Link href={'/'}>
            <a>
              <h1 className="text-xl text-center font-bold md:text-3xl">URBAN FASHION.</h1>
            </a>
          </Link>
        </div>
        <div className="flex-1 cursor-pointer flex items-center justify-end">
          {currentUser ? (
            <button onClick={handleLogout} className="uppercase">
              Logout
            </button>
          ) : (
            <div className="flex">
              <Link href={'/register'}>
                <a className="uppercase hidden ml-6 md:block">Register</a>
              </Link>
              <Link href={'/login'}>
                <a className="uppercase ml-4 md:ml-6">Login</a>
              </Link>
            </div>
          )}
          <div className="ml-4 md:ml-6">
            <Link href={'/cart'}>
              <Badge badgeContent={cart} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
