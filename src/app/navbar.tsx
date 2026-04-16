"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, BarChart3 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

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
              className="drop-shadow-[0_0_6px_rgba(177,200,222,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(177,200,222,0.5)] transition-[filter]"
            />
            <span className="text-[13px] font-extrabold pvp-gradient-text">
              PVP.AC
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <NavLink href="/dealmeter" icon={<BarChart3 className="w-4 h-4" />} label="매치 기록" badge="Beta" active={pathname.startsWith("/dealmeter")} />
            <NavLink href="https://discord.pvp.ac" icon={<Gamepad2 className="w-4 h-4" />} label="디스코드" external />
          </div>
        </div>
      </div>
      <div className="h-px pvp-gradient-border opacity-30" />
    </nav>
  );
}

function NavLink({ href, icon, label, external, badge, active }: { href: string; icon: React.ReactNode; label: string; external?: boolean; badge?: string; active?: boolean }) {
  const cls = `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
    active
      ? "text-zinc-100 bg-zinc-800/80"
      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
  }`;
  const inner = (
    <>
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {badge && (
        <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-wider text-violet-400 bg-violet-400/10 px-1.5 py-0.5 rounded">
          {badge}
        </span>
      )}
    </>
  );
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  }
  return <Link href={href} className={cls}>{inner}</Link>;
}
