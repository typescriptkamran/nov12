import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      {" "}
      <header className="flex flex-row h-full gap-5 py-5 px-2 bg-slate-600 text-white">
        <Link href="\">
          <Image
            src="\next.svg"
            width={50}
            height={50}
            alt={"logo"}
            className="flex"
          ></Image>
        </Link>
        <Link
          href="\"
          className="flex shadow-blue-500/50 shadow-md shad text-slate-200 drop-shadow-lg font-bold "
        >
          Muhammad Kamran
        </Link>
        <nav className="flex flex-row text-center">
          <ul className="flex gap-5 text-center">
            <li>
              <Link href="\about">About</Link>
            </li>
            <li>
              <Link href="\work">Work</Link>
            </li>
            <li>
              <Link href="\contact">Contact</Link>
            </li>
            <li>
              <Link href="\blog">Blogs</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
