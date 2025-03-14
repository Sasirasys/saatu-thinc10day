"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {

  return (
    
    <main>

      <div className="relative flex items-center justify-center h-screen">

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute z-0 w-120 h-120 -translate-y-40"
        >
          <Image src="/Saatu_Scroll1_WHITE.svg" alt="Saatu Scroll Logo" layout="fill" objectFit="contain" />
        </motion.div>

        
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute z-0 w-120 h-122 -translate-y-20"
        >
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 280, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className="absolute z-0 w-120 h-120"
            >
              <Image src="/Saatu_Scroll1_WHITE.svg" alt="Saatu Scroll Logo" layout="fill" objectFit="contain" />
            </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute z-0 w-71 h-71 translate-y-5"
        >
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, ease: "easeInOut" , delay: 1 }}
            className="absolute z-0 w-full h-full flex items-center justify-center top-0 left-0"
          >
            <Image src="/Saatu_Paper1_WHITE.svg" alt="Saatu Paper" layout="fill" objectFit="contain" />
          </motion.div>
        </motion.div>

        <div className="">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{
            delay: 1.5,
            duration: 1.5, // Longer duration for smoother effect
            ease: [0.25, 0.8, 0.25, 1], // Custom cubic-bezier curve for smoother easing
          }}
          className="relative z-10 text-9xl font-regular text-white drop-shadow-lg"
          style={{
            textShadow: "4px 4px 20px rgba(0, 0, 0, 1)", // Customize shadow here
          }}
        >
          Saatu
        </motion.h1>
        </div>
      </div>
    </main>
  );
}
