"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 w-full bg-black/70 shadow-lg z-50">
      <div className="max-w-7xl px-4 py-4 mx-auto flex justify-start xl:justify-center items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-3xl text-white focus:outline-none"
        >
          ☰
        </button>

        <div className="w-full hidden xl:flex justify-around gap-6">
          <Link href="/" className="text-xl md:text-2xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Carnivores
          </Link>

          <Link href="/herbivores" className="text-xl md:text-2xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Herbivores
          </Link>

          <Link href="/scavengers" className="text-xl md:text-2xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Scavengers/Parasites
          </Link>

          <Link href="/leviathans" className="text-xl md:text-2xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Leviathans
          </Link>

          <Link href="/extinct" className="text-xl md:text-2xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Extinct
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden max-w-8xl px-4 pb-4 flex flex-col justify-start gap-2">
          <Link href="/" className="block text-left text-xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Carnivores
          </Link>

          <Link href="/herbivores" className="block text-left text-xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Herbivores
          </Link>

          <Link href="/scavengers" className="block text-left text-xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Scavengers/Parasites
          </Link>

          <Link href="/leviathans" className="block text-left text-xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Leviathans
          </Link>

          <Link href="/extinct" className="block text-left text-xl font-semibold py-2 hover:text-gray-500 transition duration-500 text-white">
            Extinct
          </Link>
        </div>
      )}
    </nav>
  );
}