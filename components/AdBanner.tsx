"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
  
    <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg flex justify-center items-center">
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-300"
        >
          ×
        </button>
        <Link href={`/katha-list/4`}>
          <Image
            src="/Ad_Cancer.gif"
            alt="Advertisement"
            width={500}
            height={150}
            className="object-contain"
          />
        </Link>
      </div>
    </div>
    
  );
}