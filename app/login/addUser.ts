"use server";
import { createClient } from "@/utils/supabase/server";

export default async function addUser(email: string, name: string) {
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
