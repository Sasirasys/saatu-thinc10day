"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }
  return <>{children}</>;
}
