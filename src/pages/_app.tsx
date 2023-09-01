import MainLayout from '@/components/layouts/MainLayout'
import '../styles/globals.css'
import React from 'react'
import { type AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
