import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-500 py-5 mb-5">
      <div className="container mx-auto flex justify-between px-5">
        <div className="logo">Muhamad Ardiansyah</div>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Me</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Hobby</Link>
          </li>
        </ul>
        <div>
        <Link className="border border-slate-500 p-1 px-5" href="/contact">Contact</Link>
      </div>
      </div>
      
    </header>
  );
}
