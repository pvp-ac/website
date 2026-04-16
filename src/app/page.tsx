import Image from "next/image";
import { Copy } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full flex flex-col items-center justify-center px-4 pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(177,200,222,0.06)_0%,transparent_70%)]" />

        <Image
          src="/logo.png"
          alt="PVP.AC"
          width={80}
          height={80}
          className="relative drop-shadow-[0_0_24px_rgba(177,200,222,0.25)] mb-6 sm:mb-8"
          priority
        />

        <h1 className="relative text-4xl sm:text-6xl font-black tracking-tight pvp-gradient-text mb-4">
          PVP.AC
        </h1>

        <p className="relative text-sm sm:text-base text-zinc-500 tracking-[0.3em] uppercase font-medium mb-10 sm:mb-14">
          EAT, SLEEP, PVP, REPEAT
        </p>

        <div className="relative flex items-center gap-3 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors cursor-default">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-mono text-zinc-300 select-all">pvp.ac</span>
          <Copy className="w-3.5 h-3.5 text-zinc-600" />
        </div>
      </section>
    </main>
  );
}
