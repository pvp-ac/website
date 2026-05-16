import Image from "next/image";
import CopyAddress from "../copy-address";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full flex flex-col items-center justify-center px-4 pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(177,200,222,0.06)_0%,transparent_70%)]" />

        <Image
          src="/logo.webp"
          alt="PVP.AC"
          width={80}
          height={80}
          className="relative w-[80px] h-[80px] shrink-0 drop-shadow-[0_0_24px_rgba(177,200,222,0.25)] mb-6 sm:mb-8"
          priority
        />

        <h1 className="relative text-4xl sm:text-6xl font-black tracking-tight pvp-gradient-text mb-4">
          PVP.AC
        </h1>

        <p className="relative text-sm sm:text-base text-zinc-400 tracking-[0.3em] uppercase font-medium mb-10 sm:mb-14">
          EAT, SLEEP, PVP, REPEAT
        </p>

        <CopyAddress />
      </section>
    </main>
  );
}
