"use client"; // Mark this as a client component

import Image from "next/image";

export default function PlaySoundButton({ id }: { id: string }) {
  const handlePlaySound = () => {
    const audio = new Audio(`/voices/voice_${id}.mp3`);
    audio.play();
  };

  return (
    <button
      onClick={handlePlaySound}
      className="mt-16 bg-[#FFDA60] translate-y-10 text-black text-4xl font-[Srisakdi] font-bold py-5 px-10 sm:px-20 rounded-4xl shadow-lg
      transition duration-400 hover:bg-yellow-500 whitespace-nowrap cursor-pointer hover:scale-105"
    >
      <Image
        src="/speaker.png" // Path to your image in the public folder
        alt="Speaker Icon"
        width={40} // Adjust the width as needed
        height={40} // Adjust the height as needed
        className="object-contain" // Ensure the image scales properly
      />
    </button>
  );
}