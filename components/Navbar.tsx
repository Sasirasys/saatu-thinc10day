"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/100 to-black/40 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        
        {/* Logo + "Saatu" */}
        <div className="absolute left-6">
          <Link href="/" className="flex items-center space-x-1">
          {/* Logo */}
            <div className="w-10 h-10 relative">
                <Image
                  src="/Star_1.png"
                  alt="Logo" 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
            </div>
            {/* Text */}
            <div className="text-white text-xl font-bold">Saatu</div>
            </Link>
        </div>

        {/* Navigation Links (Outside Container) */}
        <div className="absolute left-40 flex space-x-4">
          <Link href="/selection" className="text-white text-lg font-medium hover:opacity-80 transition duration-300">
            คาถา
          </Link>
          {/* Future Pages Can Be Added Here */}
        </div>

        {/* Profile Icon (Clickable → /login) */}
        <div className="absolute right-6 w-10 h-10">
          <Link href="/login">
            <Image 
              src="/user.png" 
              alt="User Profile" 
              layout="fill" 
              objectFit="contain" 
              className="rounded-full cursor-pointer hover:opacity-80 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}