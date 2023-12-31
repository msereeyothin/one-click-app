"use client";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-gray-400 sticky top-0 p-5 w-full">
      <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto justify-center">
        <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link href="..">
            <p className="text-xl px-10 rounded text-white font-bold items-center justify-center transition hover:underline ">
              Home
            </p>
          </Link>
          <Link href="../process">
            <p className="text-xl lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-white font-bold items-center justify-center transition hover:underline">
              Process
            </p>
          </Link>
          <p className="px-10 py-2 text-white text-2xl font-bold">ONECLICK</p>
          <Link href="../software">
            <p className="text-xl lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-white font-bold items-center justify-center transition hover:underline">
              Software
            </p>
          </Link>
          <Link href="../buy">
            <p className="text-xl lg:inline-flex lg:w-auto w-full px-10 py-2 rounded text-white font-bold items-center justify-center transition hover:underline">
              Buy
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
