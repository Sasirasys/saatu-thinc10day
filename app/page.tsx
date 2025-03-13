import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-9xl font-regular text-white drop-shadow-lg -translate-y-10">Saatu</h1>
      </div>
    </main>
  );
}
