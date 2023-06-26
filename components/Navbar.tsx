"use client";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import styles from "@/styles/Style";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="z-10 w-full py-3">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 ss:px-16">
        <div className={`${styles.flexCenter} flex-col font-poppins`}>
          <Image
            src="/Logo/logo.png"
            alt="TechExtreme"
            height={52}
            width={52}
            priority={true}
          />
          <h1 className="font-semibold">TX23</h1>
        </div>
        <ul className="list-none ss:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } font-semibold`}
            >
              <Link
                href={`${nav.id}`}
                className={`font-poppins hover:text-indigo-500`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ss:hidden flex flex-1 justify-end items-center">
          <input
            id="checkbox"
            type="checkbox"
            onClick={() => setToggle((prev) => !prev)}
          />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gradient-to-b from-violet-500 to-indigo-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-10"
                  } text-white`}
                >
                  <Link href={`${nav.id}`} className={`font-poppins`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
