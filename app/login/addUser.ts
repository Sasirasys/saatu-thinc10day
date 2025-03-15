"use server";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createClient } from "@/utils/supabase/server";

export default async function addUser(email: string, name: string) {
  const supabase = await createClient();
  const { data: katha } = await supabase
    .from("users")
    .select()
    .eq("email", email)
    .single();
  console.log(katha);
  if (katha == null) {
    const { error } = await supabase
      .from("users")
      .insert({ email: email, fullname: name });
    console.log(error);
  }
}
