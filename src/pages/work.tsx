import React from 'react'
import Head from 'next/head'

const Work = () => (
  <section id="work" className="flex flex-col lg:flex-row">
    <Head>
      <title>Work - Muhamad Ardiansyah</title>
      <meta name="description" content="Contact Muhamad Ardiansyah" />
    </Head>

    <div className="flex gap-3">
      <div className='w-full h-full space-y-3'>
        <img
          src="/work/foto-magang.jpeg"
          alt="work 1"
          className="w-full h-[660px] object-cover"
        />
      </div>
      <div className="space-y-3">
        <img src="/work/bni-logo1.png" alt="work 2" />
        <img src="/work/LogoBnimove.png" alt="work 3" className="w-[400px]"/>
      </div>
    </div>
    <div className="w-[400px] flex-shrink-0 p-20">
      <h1 className="text-5xl mb-5">
        <span>IT Intern</span> <br />
        <span>2022</span> <br />
        <span className="font-bold">Work</span>
      </h1>

      <ul>
        <li>Mengembangkan desain aplikasi pengajuan pinjaman.</li>
        <li>Merancang Front End aplikasi monitoring berbasis web.</li>
      </ul>
    </div>
  </section>
)

export default Work
