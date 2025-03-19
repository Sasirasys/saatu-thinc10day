"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollHandler from '@/components/ScrollHandler';
import Link from "next/link";

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
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [stars, setStars] = useState<{ top: number; left: number; width: number; height: number; delay: number }[]>([]); // State to store star data
  const [rotation, setRotation] = useState(0); // Cumulative rotation value
  const [prevAngle, setPrevAngle] = useState(0); // Track previous angle for smooth transitions

  const numberOfStars = 30;

  const sideImages = [
    { src: "/aries.png", alt: "Image 1" },
    { src: "/cancer.png", alt: "Image 2" },
    { src: "/gemini.png", alt: "Image 3" },
    { src: "/leo.png", alt: "Image 4" },
    { src: "/libra.png", alt: "Image 5" },
    { src: "/scorpio.png", alt: "Image 6" },
    { src: "/capricorn.png", alt: "Image 7" },
    { src: "/pisces.png", alt: "Image 8" },
  ];

  const manualPositions = [
    { top: 15, left: 7 }, // Aries (Left)
    { top: 35, left: 12 }, // Cancer (Left)
    { top: 55, left: 4 },  // Gemini (Left)
    { top: 75, left: 11 }, // Leo (Left)
    { top: 15, left: 90 }, // Libra (Right)
    { top: 35, left: 82 }, // Scorpio (Right)
    { top: 55, left: 88 }, // Capricorn (Right)
    { top: 75, left: 81 }, // Pisces (Right)
  ];

  const iconVariants = {
    hidden: { opacity: 0, y: 10 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Animate to fully visible and original position
  };

  useEffect(() => {
    const starData = Array.from({ length: numberOfStars }).map(() => ({
      ...getRandomPosition(),
      ...getRandomSize(),
      delay: getRandomDelay(),
    }));
    setStars(starData);
  }, [numberOfStars]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    // Calculate the angle between the cursor and the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const angle = 90 + Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convert to degrees

    // Calculate the change in angle (deltaRotation)
    let deltaRotation = angle - prevAngle;

    // Handle the transition when crossing the 180°/-180° boundary
    if (deltaRotation > 180) deltaRotation -= 360;
    if (deltaRotation < -180) deltaRotation += 360;

    // Update the cumulative rotation value
    setRotation((prevRotation) => prevRotation + deltaRotation);

    // Update the previous angle
    setPrevAngle(angle);
  };

  return (

    <main onMouseMove={handleMouseMove}>

      <ScrollHandler allowScroll={false} />


      {stars.map((star, index) => (
        <motion.div
          suppressHydrationWarning={true}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: star.delay,
          }}
          className="absolute"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.width}px`,
            height: `${star.height}px`,
          }}
        >
          <Image src="/Star_1.png" alt="Star" fill={true} className="object-contain" />
        </motion.div>
      ))}

      {sideImages.map((image, index) => {
        const { top, left } = manualPositions[index];

        return (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2 }}>
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ y: [0, -10, 0] }} // Subtle up-and-down animation
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.5, // Stagger the animation for each image
              }}
              className="absolute opacity-50 xl:block hidden"
              style={{
                top: `${top}%`, // Randomized vertical positioning
                left: `${left}%`, // Randomized horizontal positioning
                width: "100px", // Adjust size as needed
                height: "100px", // Adjust size as needed
                transform: index < 4 ? "translateX(-50%)" : "translateX(50%)", // Center images on the sides
                opacity: 0.5,
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </motion.div>
        );
      })}

      <div className="relative flex items-center justify-center h-screen overflow-hidden">

        <motion.div
          className="fixed inset-0 items-center justify-center pointer-events-none hidden sm:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: rotation }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut", delay: 1 },
            scale: { duration: 0.8, ease: "easeOut", delay: 1 },
            rotate: { type: "spring", stiffness: 100 },
          }}
          style={{ transformOrigin: "center" }}
        >
          <div className="relative w-120 h-120 flex items-center justify-center">
            <Image
              src="/Select_Wheel.svg"
              alt="Select Wheel"
              fill={true}
              className="transform origin-center object-contain"
            />
          </div>
        </motion.div>

        <div className="grid sm:hidden grid-cols-2 grid-rows-4 gap-4 w-full max-w-md mx-auto">
          {[
            { src: "/education1.png", text: "กลุ่มดาวการศึกษา", tag: "การศึกษา" },
            { src: "/love-new.png", text: "กลุ่มดาวความรัก", tag: "ความรัก" },
            { src: "/general.png", text: "กลุ่มดาวทั่วไป", tag: "ทั่วไป" },
            { src: "/health.png", text: "กลุ่มดาวสุขภาพ", tag: "สุขภาพ" },
            { src: "/luck.png", text: "กลุ่มดาวโชคลาภ", tag: "โชคลาภ" },
            { src: "/career.png", text: "กลุ่มดาวอาชีพ", tag: "อาชีพ" },
            { src: "/family.png", text: "กลุ่มดาวครอบครัว", tag: "ครอบครัว" },
            { src: "/finance.png", text: "กลุ่มดาวการเงิน", tag: "การเงิน" },
          ].map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: "/result",
                query: { tag: item.tag },
              }}
              passHref
              legacyBehavior
            >
              <a className="flex flex-col items-center justify-center p-2">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.src}
                    alt={item.text}
                    fill={true}
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 text-white text-lg text-center">{item.text}</div>
              </a>
            </Link>
          ))}
        </div>

        <motion.div
          className="absolute z-0 w-25 h-25 -translate-y-28 translate-x-70 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/education1.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.9 }} // Fade-in duration and delay
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "การศึกษา" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/education1.png" alt="ed" fill={true} className="object-contain" />
              </div>

              <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
                กลุ่มดาวการศึกษา
              </div>
            </a>
          </Link>
        </motion.div>



        <motion.div
          className="absolute z-0 w-18 h-18 -translate-y-69 translate-x-28 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/love-new.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "ความรัก" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/love-new.png" alt="love" fill={true} className="object-contain" />
              </div>
              <motion.div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
                กลุ่มดาวความรัก
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-20 h-20 -translate-y-70 -translate-x-28 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/general.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "ทั่วไป" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/general.png" alt="general" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวทั่วไป
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-25 h-25 -translate-y-27 -translate-x-70 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/health.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "สุขภาพ" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/health.png" alt="health" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวสุขภาพ
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-25 h-25 translate-y-30 -translate-x-70 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/luck.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "โชคลาภ" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/luck.png" alt="luck" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวโชคลาภ
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-23 h-23 translate-y-70 -translate-x-28 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/career.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "อาชีพ" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/career.png" alt="career" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวอาชีพ
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-20 h-20 translate-y-68 translate-x-30 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/family.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.7 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "ครอบครัว" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/family.png" alt="family" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวครอบครัว
              </motion.div>
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="absolute z-0 w-25 h-25 translate-y-26 translate-x-71 group hidden sm:block"
          onMouseEnter={() => setHoveredImage("/finance.png")}
          onMouseLeave={() => setHoveredImage(null)}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }} // Adjust delay for staggering
        >
          <Link href={{
            pathname: "/result",
            query: { tag: "การเงิน" }
          }}
            passHref
            legacyBehavior
          >
            <a className="block w-full h-full relative">
              <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out cursor-pointer group-hover:opacity-100 group-hover:scale-110">
                <Image src="/finance.png" alt="finance" fill={true} className="object-contain" />
              </div>

              <motion.div
                className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg cursor-pointer transition-all group-hover:scale-110 duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100"
              >
                กลุ่มดาวการเงิน
              </motion.div>
            </a>
          </Link>
        </motion.div>

      </div>


      <AnimatePresence>
        {hoveredImage && ( // Only render if hoveredImage is not null
          <motion.div
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden and slightly scaled down)
            animate={{ opacity: 1, scale: 1 }} // Animate to fully visible and normal scale
            exit={{ opacity: 0, scale: 0.8 }} // Exit state (fade out and scale down)
            transition={{
              duration: 0.4,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <div className="relative w-40 h-40">
              <Image
                src={hoveredImage}
                alt="hovered-image"
                fill={true}
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
