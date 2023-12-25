"use client";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function ReactLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row h-full py-5 px-2 text-white">
        {/* Toggle button */}
        <button className="md:hidden block text-white" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Slide-in menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-slate-300 transition-transform transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="text-white absolute top-5 right-5"
            onClick={toggleMenu}
          >
            <FiX size={24} />
          </button>

          <ul className="flex flex-col py-5 px-5 space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/react">React</Link>
            </li>
            <li>
              <Link href="/react/ticktoc">TickToc</Link>
            </li>
            <li>
              <Link href="/react/to-do-app">To Do App</Link>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="md:w-1/6 py-5 px-5 text-left bg-slate-300 hidden md:flex">
          <ul className="flex flex-col md:flex-col space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/react">React</Link>
            </li>
            <li>
              <Link href="/react/ticktoc">TickToc</Link>
            </li>
            <li>
              <Link href="/react/to-do-app">To Do App</Link>
            </li>
            <li>
              <Link href="/react/customhook">Custom hook</Link>
            </li>
          </ul>
        </div>

        {/* Responsive content area for children pages */}
        <div className="flex-grow px-5 py-5">
          {children}
        </div>
      </div>
    </section>
  );
}
