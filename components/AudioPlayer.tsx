'use client';

import { useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(1); // Start from "Saatu_v1.mp3"

  const playAudio = () => {
    if (audioRef.current) {
      // Set the current audio source based on the index
      audioRef.current.src = `/Saatu_v${index}.mp3`;
      audioRef.current.play();

      // If the index is less than 7, increment it; otherwise, keep it at 7
      setIndex((prevIndex) => (prevIndex < 7 ? prevIndex + 1 : 7));
    }
  };

  return (
    <>
      <button
        onClick={playAudio}
        className="mt-16 bg-[#FFDA60] translate-y-10 text-black text-4xl font-[Srisakdi] font-bold py-5 px-10 sm:px-20 rounded-4xl shadow-lg
        transition duration-400 hover:bg-yellow-500 whitespace-nowrap cursor-pointer hover:scale-105"
      >
        สาธุ ๙๙
      </button>
      <audio ref={audioRef} />
    </>
  );
};

export default AudioPlayer;
