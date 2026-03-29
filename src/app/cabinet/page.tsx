"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CabinetPage() {
  const router = useRouter();

  useEffect(() => {
    let dest = "/cabinet/all/all";
    try {
      const saved = localStorage.getItem("trophy-room-last");
      if (saved && saved.startsWith("/cabinet/")) dest = saved;
    } catch {
      // private browsing / storage unavailable
    }
    router.replace(dest);
  }, [router]);

  // Blank while resolving — avoids flash
  return null;
}
