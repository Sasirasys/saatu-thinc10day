'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRef, useState } from 'react';

export default function SaatuButton({ id }: { id: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(1); // Start from "Saatu_v1.mp3"

  const [isLiked, setLiked] = useState(false);
  const supabase = createClientComponentClient();

  const handleClick = async () => {
    if (audioRef.current) {
      // Set the current audio source based on the index
      audioRef.current.src = `/Saatu_v${index}.mp3`;
      audioRef.current.play();

      // If the index is less than 7, increment it; otherwise, keep it at 7
      setIndex((prevIndex) => (prevIndex < 7 ? prevIndex + 1 : 7));
    }

    // Update saatu99 count. Can only be updated once.
    if (!isLiked) {
      setLiked(true);
      const { data: katha_old } = await supabase.from('katha').select().eq('katha_id', id).single();
      const { data } = await supabase.from('katha').update({ saatu99: katha_old.saatu99 + 1 }).eq('katha_id', id).select();
    }

  };

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-16 bg-[#FFDA60] translate-y-10 text-black text-4xl font-[Srisakdi] font-bold py-5 px-10 sm:px-20 rounded-4xl shadow-lg
        transition duration-400 hover:bg-yellow-500 whitespace-nowrap cursor-pointer hover:scale-105"
      >
        สาธุ ๙๙
      </button>
      <audio ref={audioRef} />
    </>
  );
};