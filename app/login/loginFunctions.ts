"use server";
import { createClient } from "@/utils/supabase/server";

export async function addUser(email: string, name: string) {
  const supabase = await createClient();
  const { data: user } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();
  console.log(user);
  if (user == null) {
    const { error } = await supabase
      .from("users")
      .insert({ email: email, fullname: name });
    console.log(error);
  }
}

export async function getMyKatha(email: string | null | undefined) {
  if (email == undefined || email == null) {
    return;
  }
  const supabase = await createClient();
  const { data: user } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();
  const { data: kathalist } = await supabase
    .from("katha")
    .select()
    .in("katha_id", [user.saved_katha_id]);
  return { ktlist: kathalist, streak: user.streak };
}

export async function updateSavedKatha(list: number[], userEmail: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .update({ saved_katha_id: list })
    .eq("email", userEmail)
    .select();
  console.log("input:", list);
  console.log(data, error);
}
