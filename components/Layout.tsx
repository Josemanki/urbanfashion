import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';
import { Announcement } from './Announcement';
import { Footer } from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Urban Fashion' }: Props) => (
  <div className="flex flex-col min-h-[100vh] overflow-hidden">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header>
      <Navbar />
      <Announcement />
    </header>
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
