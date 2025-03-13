import { createClient } from '@/utils/supabase/server';

export default async function KathaList() {
  const supabase = await createClient();
  const { data: kathalist } = await supabase.from("katha").select();

  return <pre>{JSON.stringify(kathalist, null, 2)}</pre>
}