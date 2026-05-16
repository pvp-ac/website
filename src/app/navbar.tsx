import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#09090b]/80 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="PVP.AC"
              width={26}
              height={26}
              loading="eager"
              className="w-[26px] h-[26px] shrink-0 drop-shadow-[0_0_6px_rgba(177,200,222,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(177,200,222,0.5)] transition-[filter]"
            />
            <span className="text-[13px] font-extrabold pvp-gradient-text">
              PVP.AC
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <NavLink href="https://discord.pvp.ac" icon={<Gamepad2 className="w-4 h-4" />} label="디스코드" />
          </div>
        </div>
      </div>
      <div className="h-px pvp-gradient-border opacity-30" />
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  const cls = "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
