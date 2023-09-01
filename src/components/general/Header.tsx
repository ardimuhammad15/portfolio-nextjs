import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Header () {
  return (
    <header className="border-b border-slate-500 py-5 mb-5">
      <div className="container mx-auto flex justify-between px-5">
        <div className="logo">
            <Link href="/">Muhamad Ardiansyah</Link>
            </div>
        <ul className="flex gap-5">
          {menu.map((value, index) => {
            return (
              <li key={index}>
                <Link href={value.href}>{value.label}</Link>
              </li>
            )
          })}
        </ul>
        <div>
        <Link className="border border-slate-500 p-1 px-5" href="/contact">Contact</Link>
      </div>
      </div>
    </header>
  )
}
