"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addUser } from "./addUser"

export default function Page() {
  const [popup, setPopup] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      addUser(session);
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
    <>
      {session ? (
        <>
          Signed in as {session.user?.email} <br />
          {session.user?.name} <br />
          <img src={session.user?.image ?? ""} alt="profile image" />
          <br />
          <button onClick={() => signOut()}>Sign out</button>
          <br />
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn("google")}>Sign in</button>
          <br />
        </>
      )}
      <button
        onClick={() => {
          if (session) {
            router.push("/content");
          } else {
            showPop();
          }
        }}
      >
        Content
      </button>
      {popup && <div className="text-red-500">Please login!</div>}
    </>
  );
}
