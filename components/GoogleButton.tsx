import React from "react";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

export const GoogleSignoutButton = () => {
  return (
    <button
      className="bg-white text-black rounded-xl px-5 py-1.5 my-3 content-center
    flex flex-row gap-2 focus:bg-gray-300"
      onClick={() => signOut()}
    >
      <Image src="/Google-logo.png" width={768} height={768} className="w-[25px] h-[25px]" alt="" />
      Sign out
    </button>
  );
};

export const GoogleSigninButton = () => {
  return (
    <button
      className="bg-white text-black rounded-xl px-5 py-1.5 my-3 content-center
    flex flex-row gap-2 focus:bg-gray-300"
      onClick={() => signIn("google")}
    >
      <Image src="/Google-logo.png" width={768} height={768} className="w-[25px] h-[25px]" alt="" />
      Sign in with Google
    </button>
  );
};
