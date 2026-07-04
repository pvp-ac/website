"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check, X } from "lucide-react";
import { site } from "@/site";

const states = {
  idle: { Icon: Copy, color: "text-zinc-500" },
  copied: { Icon: Check, color: "text-emerald-400" },
  failed: { Icon: X, color: "text-red-400" },
} as const;

export default function CopyAddress({ ariaLabel }: { ariaLabel: string }) {
  const [state, setState] = useState<keyof typeof states>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText(site.address);
      setState("copied");
    } catch {
      setState("failed");
    }
    timerRef.current = setTimeout(() => setState("idle"), 3000);
  };

  const { Icon, color } = states[state];

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ariaLabel}
      className="relative flex items-center gap-3 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-sm font-mono text-zinc-300">{site.address}</span>
      <Icon className={`w-3.5 h-3.5 shrink-0 ${color}`} aria-hidden />
    </button>
  );
}
