"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Assuming you want to use Feather icons

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-between gap-5 py-5 px-2 bg-slate-300 text-white">
        {/* Toggle button for mobile */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logopic.jpg"
            width={40}
            height={40}
            alt={"logo"}
            className="flex rounded-full bg-slate-100"
          />
        </Link>

        {/* Navigation */}
        <nav className={`md:flex flex-row text-center py-3 px-3 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row gap-5 text-center md:text-left">
            <li>
              <Link
                href="/about"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/react"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                React
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
