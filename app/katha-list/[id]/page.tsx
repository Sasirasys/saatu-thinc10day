import { createClient } from '@/utils/supabase/server';
import SaatuButton from '@/components/SaatuButton';
import ScrollHandler from '@/components/ScrollHandler';
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
    <main className="overflow-auto">
      <ScrollHandler allowScroll={true} />

      <div
        className="relative w-full min-h-screen bg-[url('/katha-BG.png')] bg-cover bg-top bg-no-repeat overflow-y-auto"
      >
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 translate-y-60 z-10">
          <div className="text-8xl text-black font-[Srisakdi] font-bold text-center">{katha.name}</div>

          <div className="text-6xl translate-y-10 text-center leading-20 text-black font-bold font-[Srisakdi] mt-5">
            {katha.prayer.replace(/\\n/g, '\n')}
          </div>

          {/* AudioPlayer component */}
          <div className="flex flex-row items-center gap-10">
            <PrayerSoundButton id={id} />
            <SaatuButton id={id} />
          </div>


          {/* Add katha.description below the AudioPlayer */}
          <div className="text-5xl translate-y-20 text-center leading-20 text-black font-[Srisakdi] mt-5">
            {katha.description.replace(/\\n/g, '\n')}
          </div>


          {/* YouTube Embed */}
          <div className="mt-8 w-full max-w-2xl flex">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/fhK1ZcUjhDk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg translate-y-30 mb-10"
            />
          </div>
        </div>

        {/* Spacer to ensure the background extends */}
        <div className="h-[200vh] bg-transparent" />
      </div>
    </main>
  );
}