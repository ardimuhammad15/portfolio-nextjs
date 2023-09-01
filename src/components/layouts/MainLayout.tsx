/* eslint-disable react/prop-types */
import React from 'react'
import Header from '@/components/general/Header'
import Footer from '@/components/general/Footer'
import { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto p-5">{children}</main>
    <Footer />
  </>
)

export default MainLayout