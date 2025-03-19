"use server";
import { createClient } from "@/utils/supabase/server";

export async function addUser(email: string, name: string) {
  const supabase = await createClient();
  const { data: user } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();
  if (user == null) {
    await supabase
      .from("users")
      .insert({ email: email, fullname: name });
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
  const { data: kathalist, error } = await supabase
    .from("katha")
    .select()
    .in("katha_id", [user.saved_katha_id]);
  console.log(error);
  const date = new Date();
  const today = date.toLocaleDateString("en-CA");
  date.setDate(date.getDate() - 1);
  const yesterday = date.toLocaleDateString("en-CA");
  if (yesterday == user.last_login) {
    // if last login yesterday, +1
    await supabase
      .from("users")
      .update({ last_login: today, streak: user.streak + 1 })
      .eq("email", email);
  } else if (today != user.last_login) {
    // if last login not today and not yesterday, reset to 1
    await supabase
      .from("users")
      .update({ last_login: today, streak: 1 })
      .eq("email", email);
  }
  return { ktlist: kathalist, streak: user.streak };
}

export async function updateSavedKatha(list: number[], userEmail: string) {
  const supabase = await createClient();
  await supabase
    .from("users")
    .update({ saved_katha_id: list })
    .eq("email", userEmail)
    .select();
}
