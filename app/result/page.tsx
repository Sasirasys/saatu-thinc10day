import Navbar from "@/components/Navbar";
import Image from "next/image";
import { createClient } from '@/utils/supabase/server';
import { motion } from "framer-motion";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export default async function KathaList() {
  const supabase = await createClient();
  const { data: kathalist } = await supabase
    .from("katha")
    .select()
    .contains("tags", ["tag2"]);
  
  //return <pre>{JSON.stringify(kathalist, null, 2)}</pre>
  
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center pt-60 gap-4 p-4 relative">
        {/* Add icon at the top of the page */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-20">
            <Image src="/education1.png" alt="ed" fill={true} className="object-contain"/>
            <h1 className="text-lg">tag2</h1>
        </div>


        {kathalist?.map((katha) => (
          <div key={katha.katha_id} className="w-full max-w-md bg-white shadow-lg rounded-xl p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">{katha.name}</h2>
            <p className="text-sm font-bold text-[#3C278A]">ยอดสาธุ: ๙๙</p>
            <p className="text-sm text-gray-500 mt-1">{katha.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {katha.tags.map((tag:string, index:number) => (
                <span
                  key={index}
                  className="bg-[#08113F] text-white px-1 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/selection">
                {/* รันไม่ได้ด้วยเหตุผลบางอย่าง...
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
                */}
                <button className="px-36 py-1.5 bg-[#FFDA60] text-black text-lg cursor-pointer rounded-xl">
                  เริ่มสวดกันเลย !
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <AdBanner />
    </>
  );
}