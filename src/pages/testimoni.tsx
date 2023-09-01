import React from 'react'
import Head from 'next/head'

const Testimoni = () => (
  <section id="testimoni" className="relative">
    <Head>
      <title>Testimoni - Muhamad Ardiansyah</title>
      <meta
        name="description"
        content="Testimoni Muhamad Ardiansyah Portfolio"
      />
    </Head>

    <div className="h-[700px]">
      <img
        src="/photo/review.png"
        alt="testimoni user"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-black absolute z-10 top-10 left-0 p-20">
      <p className="font-bold text-2xl bg-yellow-100/50 p-2">
        &quot; Ardi bekerja dengan baik dalam tim dan dapat diandalkan&quot;
      </p>
      <span>- Bisma, Head Division</span>
    </div>
  </section>
)

export default Testimoni