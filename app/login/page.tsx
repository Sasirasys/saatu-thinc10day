"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { addUser } from "./loginFunctions";
import { GoogleSigninButton, GoogleSignoutButton } from "./GoogleButton";
import MyKathaList from "./MyKathaList";

export default function Page() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const prevEmail = document.cookie
        .split("; ")
        .find((row) => row.startsWith("prevEmail"))
        ?.split("=")[1];
      if (session.user?.email != prevEmail) {
        // reduce database fetch
        addUser(session.user?.email!, session.user?.name!);
        document.cookie = `prevEmail=${session.user?.email}; path=/`;
      }
    }
  }, [session]);
  return (
    <div
      className="pt-24 h-svh
    overflow-y-auto flex flex-col no-scrollbar"
    >
      {status == "authenticated" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">User Profile</h1>
          <Image
            src={session.user?.image ?? "/user.png"}
            alt="profile image"
            width={100}
            height={100}
            referrerPolicy="no-referrer"
            className="my-4 rounded-full size-24"
          />
          <div className="text-lg ">{session.user?.name}</div>
          <div className="text-gray-300">{session.user?.email}</div>
          <GoogleSignoutButton />
          <MyKathaList email={session.user?.email ?? ""} />
        </div>
      ) : (
        <>
          {status == "unauthenticated" ? (
            <div className="flex flex-col items-center">
              <h1 className="text-3xl">Sign In</h1>
              <GoogleSigninButton />
            </div>
          ) : (
            <div className="flex flex-col items-center text-xl">
              <img src="/Star_1.png" alt="" className="size-14 animate-spin" />
              Loading...
            </div>
          )}
        </>
      )}
    </div>
  );
}
