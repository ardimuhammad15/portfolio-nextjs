/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import Header from '@/components/general/Header';
import Footer from '@/components/general/Footer';
import { AppProps } from 'next/app';

// Menggunakan tipe ReactNode untuk children
const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="container mx-auto p-5">{children}</main>
    <Footer />
  </>
);

export default MainLayout;