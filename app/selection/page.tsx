"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    
    <main>
      <div className="relative flex items-center justify-center h-screen"> 

      <div className="absolute z-0 w-25 h-25 -translate-y-28 translate-x-70 group"
      onMouseEnter={() => setHoveredImage("/education1.png")}
      onMouseLeave={() => setHoveredImage(null)}
      >
          
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
            <Image src="/education1.png" alt="education" layout="fill" objectFit="contain" />
          </div>

        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวการศึกษา
        </div>

        </div>
    


        <div className="absolute z-0 w-18 h-18 -translate-y-69 translate-x-28 group"
        onMouseEnter={() => setHoveredImage("/love-new.png")}
        onMouseLeave={() => setHoveredImage(null)}
        >
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
            <Image src="/love-new.png" alt="love" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวความรัก
        </div>
          
        </div>

        <div className="absolute z-0 w-20 h-20 -translate-y-70 -translate-x-28 group"
        onMouseEnter={() => setHoveredImage("/general.png")}
        onMouseLeave={() => setHoveredImage(null)}
        >
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/general.png" alt="general" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวทั่วไป
        </div>

        </div>

        <div className="absolute z-0 w-25 h-25 -translate-y-27 -translate-x-70 group"
        onMouseEnter={() => setHoveredImage("/health.png")}
        onMouseLeave={() => setHoveredImage(null)}>
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/health.png" alt="health" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวสุขภาพ
        </div>
         
        </div>

        <div className="absolute z-0 w-25 h-25 translate-y-30 -translate-x-70 group"
        onMouseEnter={() => setHoveredImage("/luck.png")}
        onMouseLeave={() => setHoveredImage(null)}>
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/luck.png" alt="luck" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวโชคลาภ
        </div>
          
        </div>

        <div className="absolute z-0 w-23 h-23 translate-y-70 -translate-x-28 group"
        onMouseEnter={() => setHoveredImage("/career.png")}
        onMouseLeave={() => setHoveredImage(null)}>
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/career.png" alt="career" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวอาชีพ
        </div>

        </div>

        <div className="absolute z-0 w-20 h-20 translate-y-68 translate-x-30 group"
        onMouseEnter={() => setHoveredImage("/family.png")}
        onMouseLeave={() => setHoveredImage(null)}>

        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/family.png" alt="family" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวครอบครัว
        </div>
        
        </div>

        <div className="absolute z-0 w-25 h-25 translate-y-26 translate-x-71 group"
        onMouseEnter={() => setHoveredImage("/finance.png")}
        onMouseLeave={() => setHoveredImage(null)}>
        
        <div className="relative w-full h-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/finance.png" alt="finance" layout="fill" objectFit="contain"/>
          </div>

        <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg transition-all duration-300 max-w-max whitespace-nowrap ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-100">
          กลุ่มดาวการเงิน
        </div>
          
        </div>


        {hoveredImage && ( // Only render if hoveredImage is not null
          <div
            className="fixed inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out delay-200 pointer-events-none"
            style={{ opacity: hoveredImage ? 1 : 0 }}
          >
            <div className="relative w-60 h-60">
              <Image
                src={hoveredImage} 
                alt="hovered-image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
      </div>

    </main>
  );
}
