import Image from "next/image";
import { Globe, Gamepad2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="PVP.AC"
                width={22}
                height={22}
                loading="lazy"
                className="w-[22px] h-[22px] shrink-0"
              />
              <span className="text-sm font-extrabold pvp-gradient-text">PVP.AC</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">EAT, SLEEP, PVP, REPEAT</p>
          </div>

          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              바로가기
            </h3>
            <ul className="space-y-2">
              <FooterLink href="https://discord.pvp.ac" label="디스코드" />
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              <Globe className="w-3.5 h-3.5" />
              서버 정보
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                pvp.ac
              </div>
              <p className="text-xs text-zinc-700">Minecraft Java Edition 1.21+</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-800/40 gap-3">
          <p className="flex items-center gap-1 text-[11px] text-zinc-700">
            {"Made with "}
            <Heart className="w-3 h-3 text-[#D9AFD9]" />
            {" by Irochi ("}
            <a href="https://irochi.moe" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-500 transition-colors">https://irochi.moe</a>
            {")"}
          </p>
          <p className="text-[11px] text-zinc-800">
            &copy; {new Date().getFullYear()} PVP.AC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
