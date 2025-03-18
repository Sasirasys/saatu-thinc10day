"use client";

import { useEffect } from "react";

export default function ScrollHandler({ allowScroll }: { allowScroll: boolean }) {
  useEffect(() => {
    if (allowScroll) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }

    // Cleanup function to reset the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [allowScroll]);

  return null;
}