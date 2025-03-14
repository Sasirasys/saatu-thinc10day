import { createClient } from '@/utils/supabase/server';


export async function addUser({ session }: { session: object }) {

    const supabase = await createClient();

    // if (session != null) {
    //   const { data: user } = await supabase.from("users").select().eq('email', session.user.email).single();
    //   console.log(user);
    // }

    console.log(session);
    return (
        <>
        </>
    );
}
