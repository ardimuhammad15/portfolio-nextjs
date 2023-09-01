/* eslint-disable react/prop-types */
import React, { type ReactNode } from 'react'
import Header from '@/components/general/Header'
import Footer from '@/components/general/Footer'

// Menggunakan tipe ReactNode untuk children
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="container mx-auto p-5">{children}</main>
    <Footer />
  </>
)

export default MainLayout
