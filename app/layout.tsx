import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import SessionP from "./SessionP";

export const metadata: Metadata = {
  title: "Saatu",
  description: "May all your prayers come true.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionP>
        <body className="font-[K2d] text-white">{children}</body>
      </SessionP>
    </html>
  );
}
