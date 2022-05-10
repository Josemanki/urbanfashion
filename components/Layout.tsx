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
