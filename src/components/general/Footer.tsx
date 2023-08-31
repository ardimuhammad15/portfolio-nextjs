import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-500 mt-5 py-5">
            <div className="container mx-auto flex px-5">
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
                <div className="ml-auto">Copyrights &copy; 2023</div>
            </div>
        </footer>
    )
}