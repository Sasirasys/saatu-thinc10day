"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollHandler from '@/components/ScrollHandler';
import { useEffect, useState } from "react";

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

const ShootingStar = ({ delay, id }: { delay: number; id: number }) => {
  return (
    <motion.div
      initial={{
        x: "100vw",
        y: id === 2 ? "-90vh" : "-100vh", // Higher start position for id 2
        opacity: 0
      }}
      animate={{
        x: "-100vw",
        y: id === 2 ? "100vh" : "100vh", // Adjusting trajectory
        opacity: 1
      }}
      transition={{
        duration: 5,
        ease: [0.04, 1.11, 0.9, 0.85],
        repeat: Infinity,
        repeatDelay: 2,
        delay: delay,
      }}
      className={`absolute w-5 h-5 drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) ${id === 2 ? "-translate-y-20" : ""
        }`}
      style={{
        background: "url('/star.png') no-repeat center center",
        backgroundSize: "contain",
      }}
    >

      <motion.div
        transition={{
          delay: 1.5,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute w-70 h-1 bg-white blur-sm transform -rotate-30"
        style={{
          top: "50%",
          left: "50%",
          transformOrigin: "top left", // Ensure the trail rotates from the correct origin
          translate: "0% -50%", // Move the trail behind the star
          height: "6px",   // Head size
          background: "linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.8))",
        }}>

      </motion.div>
    </motion.div>




  );
};

export default function Home() {
  const numberOfStars = 30;
  const defaultShootingStars: { id: number, delay: number }[] = [];
  const [shootingStars, setShootingStars] = useState(defaultShootingStars);

  useEffect(() => {
    // Add two shooting stars with different delays
    setShootingStars([
      { id: 1, delay: 0 },
      { id: 2, delay: -0.1 },
    ]);
  }, []);

  return (
    <main>
      <ScrollHandler allowScroll={false} />

      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Scatter stars in the background */}
        {Array.from({ length: numberOfStars }).map((_, index) => {
          const { top, left } = getRandomPosition();
          const { width, height } = getRandomSize();
          const delay = getRandomDelay();

          return (
            <motion.div
              suppressHydrationWarning={true}
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
                fill={true}
                className="object-contain"
              />
            </motion.div>
          );
        })}

        {shootingStars.map((star) => (
          <ShootingStar key={star.id} id={star.id} delay={star.delay} />
        ))}

        <div className="-translate-y-10">
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
                fill={true}
                className="object-contain"
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
                  fill={true}
                  className="object-contain"
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
                  alt="Saatu Scroll Logo 2"
                  fill={true}
                  className="absolute translate-y-[70%] object-contain"
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
            className="z-10 text-center content-center font-regular text-white drop-shadow-lg
          w-[60svw] h-[60svw] max-h-[60svh] max-w-[60svh] 
          text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
              textShadow: "4px 4px 20px rgba(0, 0, 0, 1)",
            }}
          >
            Saatu
          </motion.h1>

        </div>

        <Link href="/selection">

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
            className="absolute z-10 bottom-20 left-1/2 -translate-x-1/2 lg:-translate-y-4 bg-[#FFDA60] text-black
            text-base sm:text-lg md:text-2xl lg:text-3xl py-5 px-10 sm:px-20 rounded-4xl shadow-lg
            transition-colors duration-400 hover:bg-yellow-500 whitespace-nowrap cursor-pointer"
          >
            <div className="transition hover:scale-105">
              เริ่มค้นหาบทสวด
            </div>
          </motion.button>

        </Link>

      </div>
    </main>
  );
}
