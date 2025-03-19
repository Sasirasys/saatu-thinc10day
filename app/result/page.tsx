import Navbar from "@/components/Navbar";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import AdBanner from "@/components/AdBanner";
import KathaItem from "@/components/KathaItem";
import { cookies } from "next/headers";

// Add proper type definitions
interface PageProps {
  searchParams?: {
    tag?: string;
  };
}

export default async function KathaList({ searchParams }: PageProps) {
  const supabase = await createClient();
  const tag = (await searchParams)?.tag || "ทั่วไป";
  const cookieStore = await cookies();
  const userEmail = cookieStore.get("prevEmail")?.value;

  const { data: myTag } = await supabase
    .from("users")
    .select("saved_katha_id")
    .eq("email", userEmail)
    .single();

  const { data: kathalist } = await supabase
    .from("katha")
    .select()
    .contains("tags", [tag]);

  // Map tag to appropriate image
  const tagImages: { [key: string]: string } = {
    การศึกษา: "/education.png",
    ความรัก: "/love-new.png",
    ทั่วไป: "/general.png",
    สุขภาพ: "/health.png",
    โชคลาภ: "/luck.png",
    อาชีพ: "/career.png",
    ครอบครัว: "/family.png",
    การเงิน: "/finance.png",
  };
  //return <pre>{JSON.stringify(kathalist, null, 2)}</pre>

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center pt-60 gap-4 p-4 relative">
        {/* Add icon at the top of the page */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-20">
          <Image
            src={tagImages[tag] || tagImages["ทั่วไป"]} // Fallback to general
            alt={tag}
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="text-lg text-center font-medium">คาถาด้าน {tag}</p>
        </div>

        {kathalist?.map((katha) => (
          <KathaItem
            key={katha.katha_id}
            katha={katha}
            myTag={myTag?.saved_katha_id}
            userEmail={userEmail ?? ""}
          />
        ))}
      </div>

      <AdBanner />
    </>
  );
}
