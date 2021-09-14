import React from 'react';
import type { ReactElement } from 'react';
import Header from './Header';
import Navbar from './Nav';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}