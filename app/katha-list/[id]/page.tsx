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
    <main className="overflow-auto">

      <div
        className="relative w-full min-h-screen bg-[url('/katha-BG.png')] bg-cover bg-top bg-no-repeat overflow-y-auto"
      >

        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 translate-y-60 z-10">
          <div className="text-8xl text-black font-[Srisakdi] font-bold">{katha.name}</div>

          <div className="text-6xl translate-y-10 text-center leading-20 text-black font-bold font-[Srisakdi] mt-5">
            {katha.prayer.replace(/\\n/g, '\n')}
          </div>

          <AudioPlayer />
        </div>

        
        <div className="h-[200vh] bg-transparent" />
      </div>
    </main>
  );
}