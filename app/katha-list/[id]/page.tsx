import { createClient } from '@/utils/supabase/server';
import SaatuButton from '@/components/SaatuButton';
import PrayerSoundButton from '@/components/PrayerSoundButton'; // Import the new client component

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: katha } = await supabase.from('katha').select().eq('katha_id', id).single();

  return (
    <main className="mt-16 overflow-y-auto">
      <img src='/katha-BG.png' alt="" className='absolute top-0 -z-10'/>
      <a href='/selection' className='size-[8vw] absolute top-[3vw] left-[3vw]'><img src='/backButton.png' alt="กลับ" /></a>
        <div className="text-pretty flex flex-col items-center absolute left-1/2 -translate-x-1/2 translate-y-[11vw] z-10">
          <div className="text-[5vw] leading-[5vw] text-black font-[Srisakdi] font-bold text-center">{katha.name}</div>

          <div className="text-[3vw] leading-[3.5vw] text-center text-black font-bold font-[Srisakdi] mt-[2vw]">
            {katha.prayer.replace(/\\n/g, '\n')}
          </div>

          {/* AudioPlayer component */}
          <div className="flex flex-row items-center gap-[2vw] mt-[2vw]">
            <PrayerSoundButton id={id} />
            <SaatuButton id={id} />
          </div>


          {/* Add katha.description below the AudioPlayer */}
          <div className="text-[2.5vw] leading-[3.5vw] text-center text-black font-[Srisakdi] mt-5">
            {katha.description.replace(/\\n/g, '\n')}
          </div>


          {/* YouTube Embed */}
          <div className="mt-[2vw] w-full max-w-2xl flex">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/fhK1ZcUjhDk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-[50vw] h-[30vw]"
            />
          </div>
        </div>
    </main>
  );
}