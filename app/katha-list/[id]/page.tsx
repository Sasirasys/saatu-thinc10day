import { createClient } from '@/utils/supabase/server';

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: katha } = await supabase.from("katha").select().eq('id', id).single();

    return (
        <div>
            <h1>{katha.name}</h1>
            <p className="font-[Srisakdi]">
                {katha.prayer}
            </p>
        </div>
    );
}