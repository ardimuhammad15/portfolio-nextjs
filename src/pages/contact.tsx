import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Contact = () => (
  <section id="contact" className="relative">
    <Head>
      <title>Contact - Muhamad Ardiansyah</title>
      <meta name="description" content="Contact Muhamad Ardiansyah" />
    </Head>

    <div className="h-[700px]">
      <img
        src="/contact.png"
        alt="contact"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/2 h-[400px] bg-[#F2F5EB] absolute z-10 top-10 right-10 p-5 grid place-content-center">
      <h1 className="text-5xl mb-5">
        <span>Get in</span> <br />
        <span className="font-bold">Touch</span>
      </h1>
      <p>
        Jalan Matraman Salemba VIII, Matraman Jakarta Timur, 13150. <br /> muhamada@upnvj.ac.id
      </p>
      <nav className="mt-20">
        <Link className="border border-slate-500 p-3 px-5 uppercase font-bold" href="/contact">
            Send an Email
        </Link>
      </nav>
    </div>
  </section>
)

export default Contact
