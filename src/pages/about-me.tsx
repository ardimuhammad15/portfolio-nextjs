import React from 'react'
import Head from 'next/head'

const AboutMe = () => (
  <section id="about-me" className="flex flex-col lg:gap-52 lg:flex-row">
    <Head>
      <title>About - Muhamad Ardiansyah</title>
      <meta name="description" content="About Mathilde Langevin Portfolio" />
    </Head>

    <div className="space-y-5 grid place-content-center">
      <h1 className="text-5xl">
        <span>Engineer</span> <br />
        <span className="font-bold">Biography</span>
      </h1>

      <p>
       Hi. Saya mempunyai ketertarikan dalam bidang Software Development dan Data Analyst. 
       Memiliki motivasi untuk mengembangkan kemampuan secara profesional.
       Dapat diandalkan dalam tim dan berkomunikasi dengan baik.
      </p>
      <p>
        Saya pernah bekerja sebagai IT Intern di perusahaan PT Bank Negara Indonesia (Persero) Tbk. 
      </p>
    </div>

    <div className="mt-10 lg:mt-0 w-full h-[700px]">
      <img
        src="/photo/foto-1.jpeg"
        alt="About Ardiansyah"
        className="w-full h-full object-cover"
      />
    </div>
  </section>
)

export default AboutMe
