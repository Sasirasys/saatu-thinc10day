"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import addUser from "./addUser";
import { GoogleSigninButton, GoogleSignoutButton } from "./GoogleButton";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [popup, setPopup] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const prevEmail = document.cookie
        .split("; ")
        .find((row) => row.startsWith("prevEmail"))
        ?.split("=")[1];
      if (session.user?.email != prevEmail) {
        // reduce user fetch
        addUser(session.user?.email!, session.user?.name!);
        document.cookie = `prevEmail=${session.user?.email}; path=/`;
      }
    }
  }, [session]);
  function showPop() {
    if (session) return;
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 4000);
  }
  return (
    <div className="pt-24">
      <Navbar />
      {session ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">User Profile</h1>
          <img
            src={session.user?.image ?? "/user.png"}
            alt="profile image"
            referrerPolicy="no-referrer"
            className="my-4 rounded-full size-24"
          />
          <div className="text-lg ">{session.user?.name}</div>
          <div className="text-gray-300">{session.user?.email}</div>
          <GoogleSignoutButton />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Sign In</h1>
          <GoogleSigninButton />
          <br />
        </div>
      )}
    </div>
  );
}
