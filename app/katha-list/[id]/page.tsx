import { createClient } from '@/utils/supabase/server';
import AudioPlayer from '@/components/AudioPlayer';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: katha } = await supabase.from('katha').select().eq('katha_id', id).single();

  return (
    <main className="min-h-screen">
      <div
        className="bg-[url('/katha-BG.png')] bg-auto bg-top bg-no-repeat min-h-[100vh] w-full flex justify-center items-start pt-5"
      >
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 translate-y-60 z-10">
          <div className="text-8xl text-black font-[Srisakdi] font-bold">{katha.name}</div>

          <div className="text-6xl translate-y-10 text-center leading-20 text-black font-bold font-[Srisakdi] mt-5">
            {katha.prayer.replace(/\\n/g, '\n')}
          </div>

          {/* Use the AudioPlayer component without passing audioSrc */}
          <AudioPlayer />
        </div>
      </div>

      {/* Add this to make the page scrollable */}
      <div className="h-[100vh] bg-transparent" />
    </main>
  );
}
