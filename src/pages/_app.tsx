// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import MainLayout from '@/components/layouts/MainLayout'
import "../styles/globals.css"
import React, { ReactNode } from 'react'
import { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
