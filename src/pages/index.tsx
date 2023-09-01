import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home () {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <Head>
        <title>Muhamad Ardiansyah Portfolio</title>
        <meta
          name="description"
          content="Home page Muhamad Ardiansyah Portfolio"
        />
      </Head>
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="Muhamad Ardiansyah" className="text-[80px] leading-[80px] font-bold">
          Muhamad Ardiansyah
        </h1>
        <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28">
          <div className="flex flex-col">
            <span className="font-bold">Web Developer</span>
            <span>Portfolio</span>
          </div>
          <div>
           Saya mengandalkan ide saya untuk merancang sebuah website yang dapat
           berguna bagi pengguna.
          </div>
        </div>
        <nav>
          <Link className="border bg-slate-700 text-white border-slate-500 p-5 px-10" href="/">
              GET IN TOUCH
          </Link>
        </nav>
      </div>
      <div className="mt-10 w-full h-[300px] lg:w-1/2 lg:h-[700px] lg:mt-0">
        <img
          src="/photo/Foto Diri_Muhamad Ardiansyah.png"
          alt="Mathilde"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
