import type { Metadata } from "next";
import "./globals.css";
import SessionP from "./SessionP";
import Navbar from "@/components/Navbar";

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
        <body className="font-[K2d] text-white">
          <Navbar />
          {children}
        </body>
      </SessionP>
    </html>
  );
}
