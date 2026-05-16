"use client";

import { useState, useRef } from "react";

export default function CopyAddress() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText("pvp.ac");
      setState("copied");
      timerRef.current = setTimeout(() => setState("idle"), 3000);
    } catch {
      setState("failed");
      timerRef.current = setTimeout(() => setState("idle"), 3000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="서버 주소 pvp.ac 복사"
      className="relative flex items-center gap-3 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-sm font-mono text-zinc-300">pvp.ac</span>
      <svg
        className={`w-3.5 h-3.5 shrink-0 ${state === "failed" ? "text-red-400" : state === "copied" ? "text-emerald-400" : "text-zinc-500"}`}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {state === "failed" ? (
          <path d="M18 6 6 18M6 6l12 12" />
        ) : state === "copied" ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </>
        )}
      </svg>
    </button>
  );
}
