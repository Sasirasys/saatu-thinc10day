"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const getRandomPosition = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return { top, left };
};

const getRandomSize = () => {
  const size = Math.random() * 20 + 10;
  return { width: size, height: size };
};

const getRandomDelay = () => Math.random() * 2;

export default function Home() {
  const numberOfStars = 30;

  return (
    <main>
      <Navbar />

      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Scatter stars in the background */}
        {Array.from({ length: numberOfStars }).map((_, index) => {
          const { top, left } = getRandomPosition();
          const { width, height } = getRandomSize();
          const delay = getRandomDelay();

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay + 1.5,
              }}
              className="absolute"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              <Image
                src="/Star_1.png"
                alt="Star"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          );
        })}

        <div
          className=" border-amber-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[60svw] h-[60svw] max-h-[60svh] max-w-[60svh]"
        >
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" border-amber-200 z-0 w-[100%] h-[18%] translate-y-[41%]"
          >
            <Image
              src="/Saatu_Scroll1_WHITE.svg"
              alt="Saatu Scroll Logo"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" border-fuchsia-400 absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 
            flex justify-center z-0 w-[55%] h-[60%]"
          >
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className=" border-blue-400 top-0 z-0 w-full h-full"
            >
              <Image
                src="/Saatu_Paper1_WHITE.svg"
                alt="Saatu Paper"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" border-amber-600 flex z-0 w-[100%] h-[20%]"
          >
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: "100%", opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className=" border-emerald-400 absolute flex align-bottom
              -translate-y-[100%] z-0 w-[100%] h-[60%]"
            >
              <Image
                src="/Saatu_Scroll1_WHITE.svg"
                alt="Saatu Scroll Logo"
                layout="fill"
                objectFit="contain"
                className="absolute translate-y-[70%]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{
            delay: 1.5,
            duration: 1.5,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="border-amber-600 z-10 text-center content-center font-regular text-white drop-shadow-lg
          w-[60svw] h-[60svw] max-h-[60svh] max-w-[60svh] 
          text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          style={{
            textShadow: "4px 4px 20px rgba(0, 0, 0, 1)",
          }}
        >
          Saatu
        </motion.h1>
      </div>
    </main>
  );
}
