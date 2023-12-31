import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Footer () {
  return (
        <footer className="border-t border-slate-500 mt-5 py-5">
            <div className="container mx-auto flex px-5">
            <ul className="flex gap-5">
          {menu.map((value, index) => (
          <li key={index}>
            <Link href={value.href}>{value.label}</Link>
          </li>
          ))}
        </ul>
                <div className="ml-auto">Copyrights &copy; 2023</div>
            </div>
        </footer>
  )
}
