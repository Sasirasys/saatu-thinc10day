"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({ text }: { text: string }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-36 py-1.5 bg-[#FFDA60] text-black text-lg cursor-pointer rounded-xl hover:bg-yellow-500 transition-colors"
    >
      {text}
    </motion.button>
  );
}