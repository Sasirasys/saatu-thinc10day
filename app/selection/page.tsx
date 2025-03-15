"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    
    <main>
      <div className="relative flex items-center justify-center h-screen"> 
        <div className="absolute z-0 w-90 h-90 border-6 border-white-500 rounded-full"
    style={{
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      // clipPath: "polygon(50% 50%, 100% 40%, 95% 45%, 95% 55%, 100% 60%, 50% 50%)", 
    }}
    ></div>

        <div className="absolute z-0 w-25 h-25 -translate-y-28 translate-x-70 group">
        <div className={`relative w-full h-full opacity-50 transition-all duration-300 group-hover:opacity-100 ${
          isEnlarged ? "scale-120" : "scale-100"
        }`}
          onClick={() => setIsEnlarged(!isEnlarged)}
        >
            <Image src="/education1.png" alt="education" layout="fill" objectFit="contain" />
          </div>

          <div className={`absolute top-[85%] left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg p-2 rounded shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-100 max-w-max whitespace-nowrap ${
            isEnlarged ? "scale-120" : "scale-100"
          }`}
            >
            กลุ่มดาวการศึกษา
          </div>
        </div>
        
        <div className="absolute z-0 w-18 h-18 -translate-y-69 translate-x-28">
          <Image src="/love-new.png" alt="love" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-20 h-20 -translate-y-70 -translate-x-28">
          <Image src="/general.png" alt="general" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-25 h-25 -translate-y-27 -translate-x-70">
          <Image src="/health.png" alt="health" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-25 h-25 translate-y-30 -translate-x-70">
          <Image src="/luck.png" alt="luck" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-23 h-23 translate-y-70 -translate-x-28">
          <Image src="/career.png" alt="career" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-20 h-20 translate-y-68 translate-x-30">
          <Image src="/family.png" alt="family" layout="fill" objectFit="contain"/>
        </div>

        <div className="absolute z-0 w-25 h-25 translate-y-26 translate-x-71">
          <Image src="/finance.png" alt="finance" layout="fill" objectFit="contain"/>
        </div>

      </div>
    </main>
  );
}
