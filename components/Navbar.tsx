"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/100 to-black/40 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Saatu</div>

        {/* Profile Icon */}
        <div className="ml-auto">
        </div>
      </div>
    </nav>
  );
}
