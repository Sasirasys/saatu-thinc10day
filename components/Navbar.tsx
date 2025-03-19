"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/100 to-black/40 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo + "Saatu" */}
        <div className="absolute left-6">
          <Link href="/" className="flex items-center space-x-1 group">
            {/* Logo */}
            <motion.div
              className="w-10 h-10 relative"
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src="/star_sharp.png"
                alt="Saatu Logo"
                fill={true}
                className="rounded-full group-hover object-contain"
              />
            </motion.div>
            {/* Text */}
            <div className="text-white text-xl font-bold hover:opacity-80 transition duration-300">
              Saatu
            </div>
          </Link>
        </div>

        {/* Navigation Links (Outside Container) */}
        <div className="absolute left-40 flex space-x-4">
          <Link
            href="/selection"
            className="text-white text-lg font-medium hover:opacity-80 transition duration-300"
          >
            คาถา
          </Link>
          {/* Future Pages Can Be Added Here */}
        </div>

        {/* Profile Icon (Clickable → /login) */}
        <div className="absolute right-6 w-10 h-10">
          <Link href="/login">
            <Image
              src={session?.user?.image ?? "/user.png"}
              width={100}
              height={100}
              alt="User Profile"
              referrerPolicy="no-referrer"
              className="rounded-full cursor-pointer hover:opacity-80 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
