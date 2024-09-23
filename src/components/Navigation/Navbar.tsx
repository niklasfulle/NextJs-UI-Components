"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed h-20 flex flex-row items-center gap-12 lg:gap-24 justify-between md:justify-start px-12 lg:px-20 md:pt-2 bg-zinc-800">
      <Link
        className="text-2xl md:text-lg lg:text-2xl hover:underline transition-all duration-200 ease-in"
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <div className="flex-row items-center gap-12 md:gap-24 md:flex hidden">
        <Link
          className="text-lg lg:text-2xl hover:underline transition-all duration-200 ease-in"
          href="/buttons"
        >
          Button
        </Link>
        <Link
          className="text-lg lg:text-2xl hover:underline transition-all duration-200 ease-in"
          href="/inputs"
        >
          Inputs
        </Link>
        <Link
          className="text-lg lg:text-2xl hover:underline transition-all duration-200 ease-in"
          href="/lists"
        >
          Lists
        </Link>
        <Link
          className="text-lg lg:text-2xl hover:underline transition-all duration-200 ease-in"
          href="/utils"
        >
          Utils
        </Link>
      </div>
      <div className="md:hidden flex items-center justify-center cursor-pointer">
        <IoMenu size={40} onClick={() => setIsOpen(!isOpen)} />
        <div
          className={`absolute top-20 transition-all duration-200 ease-in right-0 w-36 min-h-36 h-auto bg-zinc-700 rounded-bl-3xl ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-full flex flex-col p-6 gap-6">
            <Link
              className="text-xl hover:underline transition-all duration-200 ease-in"
              href="/buttons"
              onClick={() => setIsOpen(!isOpen)}
            >
              Button
            </Link>
            <Link
              className="text-xl hover:underline transition-all duration-200 ease-in"
              href="/inputs"
              onClick={() => setIsOpen(!isOpen)}
            >
              Inputs
            </Link>
            <Link
              className="text-xl hover:underline transition-all duration-200 ease-in"
              href="/lists"
              onClick={() => setIsOpen(!isOpen)}
            >
              Lists
            </Link>
            <Link
              className="text-xl hover:underline transition-all duration-200 ease-in"
              href="/utils"
              onClick={() => setIsOpen(!isOpen)}
            >
              Utils
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
