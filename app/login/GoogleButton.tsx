import React from "react";
import { signIn, signOut } from "next-auth/react";

export const GoogleSignoutButton = () => {
  return (
    <button
      className="bg-white text-black rounded-lg px-5 py-1.5 my-3 content-center
    flex flex-row gap-2 focus:bg-gray-300"
      onClick={() => signOut()}
    >
      <img src="/login/G-logo.png" className="w-[25px] h-[25px]" alt="" />
      Sign out
    </button>
  );
};

export const GoogleSigninButton = () => {
  return (
    <button
      className="bg-white text-black rounded-lg px-5 py-1.5 my-3 content-center
    flex flex-row gap-2 focus:bg-gray-300"
      onClick={() => signIn("google")}
    >
      <img src="/login/G-logo.png" className="w-[25px] h-[25px]" alt="" />
      Sign in with Google
    </button>
  );
};
