"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ToggleHeart from "./ToggleHeart";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 15px rgba(255, 218, 96, 0.4)",
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

const toThaiNumber = (num: number): string => {
  const thaiDigits: string[] = [
    "๐",
    "๑",
    "๒",
    "๓",
    "๔",
    "๕",
    "๖",
    "๗",
    "๘",
    "๙",
  ];
  return num
    .toString()
    .replace(/\d/g, (digit: string) => thaiDigits[parseInt(digit, 10)]);
};

export default function KathaItem({
  katha,
  myTag,
  userEmail,
}: {
  katha: {
    katha_id: number;
    name: string;
    prayer: string;
    description: string;
    saatu99: number;
    tags: string[];
  };
  myTag: number[];
  userEmail: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 border border-gray-200"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-800">{katha.name}</h2>
        <ToggleHeart
          state={myTag.includes(katha.katha_id)}
          id={katha.katha_id}
          email={userEmail}
        />
      </div>
      <p className="text-sm font-bold text-[#3C278A]">
        ยอดสาธุ: {toThaiNumber(katha.saatu99)}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {katha.description.replace(/\\n/g, "\n")}
      </p>

      {/* Tags with improved spacing */}
      <div className="flex flex-wrap gap-2 mt-2">
        {katha.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-[#08113F] text-white px-1.5 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Animated Button */}
      {/* Improved button with dynamic link */}
      <div className="w-full flex justify-center mt-3">
        <Link
          href={`/katha-list/${katha.katha_id}`}
          className="w-full"
          passHref
        >
          {" "}
          {/* Dynamic route */} 
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full py-1.5 bg-[#FFDA60] hover:bg-yellow-500 text-black text-lg cursor-pointer rounded-xl transition-transform duration-400"
            aria-label={`เริ่มสวดมนต์บท${katha.name}`} // Accessibility
          >
            เริ่มสวดกันเลย !
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
