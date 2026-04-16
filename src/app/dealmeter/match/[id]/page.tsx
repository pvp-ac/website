"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  Skull,
  Trophy,
  Swords,
  Sword,
  Target,
  Heart,
  Crosshair,
  BowArrow,
  Loader2,
  Shield,
  ShieldHalf,
  Hash,
  Zap,
  Flame,
  Pickaxe,
  Ghost,
  Droplets,
  Map,
  type LucideIcon,
} from "lucide-react";
import {
  getMatch,
  formatDuration,
  getHeadUrl,
  CLASS_CONFIG,
  type MatchDetail,
  type MatchPlayer,
  type MatchEventData,
} from "@/lib/api";

export default function MatchDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [match, setMatch] = useState<MatchDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMatch(id)
      .then(setMatch)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-24 text-center">
        <Loader2 className="w-6 h-6 text-zinc-400 animate-spin mx-auto" />
      </main>
    );
  }

  if (!match) {
    return (
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-24 text-center">
        <Shield className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
        <p className="text-zinc-500 text-lg">매치를 찾을 수 없습니다.</p>
        <Link href="/dealmeter" className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 mt-4 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          목록으로
        </Link>
      </main>
    );
  }

  const isTeam1Winner = match.winner_team?.toLowerCase() === match.team1_name.toLowerCase();
  const isTeam2Winner = match.winner_team?.toLowerCase() === match.team2_name.toLowerCase();

  return (
    <main className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <Link href="/dealmeter" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-sm mb-6 sm:mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        목록
      </Link>

      {/* Score header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-10 mb-4 sm:mb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-zinc-600 text-xs sm:text-sm font-mono tracking-wider mb-5 sm:mb-8">
          <span className="inline-flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {match.id}
          </span>
          <span className="text-zinc-800">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {formatDuration(match.duration_ms)}
          </span>
          {match.world_name && (
            <>
              <span className="text-zinc-800">|</span>
              <span className="inline-flex items-center gap-1.5">
                <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {match.world_name}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              {isTeam1Winner && (
                <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-base font-black uppercase tracking-widest text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                  <span className="hidden sm:inline">Victory</span>
                  <Trophy className="w-4 h-4 sm:w-6 sm:h-6" />
                </span>
              )}
              <span className={`text-lg sm:text-3xl font-bold truncate ${isTeam1Winner ? "text-white" : "text-zinc-500"}`}>
                {match.team1_name}
              </span>
            </div>
          </div>
          <div className="px-4 sm:px-12 flex items-baseline gap-2 sm:gap-5">
            <span className={`text-3xl sm:text-6xl font-black tabular-nums ${isTeam1Winner ? "text-cyan-400" : "text-zinc-600"}`}>
              {match.team1_kills}
            </span>
            <span className="text-zinc-700 text-base sm:text-xl font-bold">:</span>
            <span className={`text-3xl sm:text-6xl font-black tabular-nums ${isTeam2Winner ? "text-rose-400" : "text-zinc-600"}`}>
              {match.team2_kills}
            </span>
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className={`text-lg sm:text-3xl font-bold truncate ${isTeam2Winner ? "text-white" : "text-zinc-500"}`}>
                {match.team2_name}
              </span>
              {isTeam2Winner && (
                <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-base font-black uppercase tracking-widest text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                  <Trophy className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">Victory</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <TeamPanel
          teamName={match.team1_name}
          players={match.team1_players}
          isWinner={isTeam1Winner}
          accent="cyan"
        />
        <TeamPanel
          teamName={match.team2_name}
          players={match.team2_players}
          isWinner={isTeam2Winner}
          accent="rose"
        />
      </div>

      {/* Timeline */}
      {match.events.length > 0 && <Timeline events={match.events} matchStart={match.started_at} />}
    </main>
  );
}

function WinBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">
      <Trophy className="w-3 h-3" />
      WIN
    </span>
  );
}

function TeamPanel({
  teamName,
  players,
  isWinner,
  accent,
}: {
  teamName: string;
  players: MatchPlayer[];
  isWinner: boolean;
  accent: "cyan" | "rose";
}) {
  const accentColor = accent === "cyan" ? "text-cyan-400" : "text-rose-400";
  const accentBorder = accent === "cyan" ? "border-cyan-500/20" : "border-rose-500/20";
  const accentBg = accent === "cyan" ? "bg-cyan-500/5" : "bg-rose-500/5";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <div className={`px-4 sm:px-5 py-3 sm:py-4 border-b ${accentBorder} ${accentBg}`}>
        <div className="flex items-center gap-2">
          <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${accentColor}`} />
          <span className={`text-base sm:text-lg font-bold ${accentColor}`}>{teamName}</span>
          {isWinner && <WinBadge />}
        </div>
      </div>

      <div className="overflow-x-auto">
        {/* Table header */}
        <div className="grid grid-cols-[auto_1fr_repeat(7,36px)] sm:grid-cols-[auto_1fr_repeat(7,42px)] gap-0.5 sm:gap-1 px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] uppercase tracking-wider text-zinc-600 font-semibold border-b border-zinc-800/50 min-w-[420px]">
          <div className="w-8 sm:w-9" />
          <div>이름</div>
          <div className="flex justify-center" title="킬 횟수">
            <Skull className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex justify-center" title="사망 횟수">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex justify-center" title="총 딜량">
            <Swords className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex justify-center" title="때린 횟수">
            <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex justify-center" title="활을 쏜 횟수">
            <Crosshair className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex justify-center" title="아처태그를 맞춘 횟수">
            <BowArrow className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500/60" />
          </div>
          <div className="flex justify-center" title="힐 포션 사용 횟수">
            <Droplets className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-500/60" />
          </div>
        </div>

        {players.length === 0 ? (
          <div className="px-5 py-12 text-center text-zinc-700 text-sm">참가 기록 없음</div>
        ) : (
          <div className="divide-y divide-zinc-800/50 min-w-[420px]">
            {players.map((p) => (
              <PlayerRow key={p.id} player={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const CLASS_ICONS: Record<string, LucideIcon> = {
  Sword, BowArrow, ShieldHalf, Zap, Flame, Pickaxe, Ghost,
};

function PlayerRow({ player }: { player: MatchPlayer }) {
  const cls = CLASS_CONFIG[player.class_name] || CLASS_CONFIG["Diamond"];
  const Icon = CLASS_ICONS[cls.icon] || Sword;
  const isArcher = player.class_name === "Archer";

  return (
    <div className="grid grid-cols-[auto_1fr_repeat(7,36px)] sm:grid-cols-[auto_1fr_repeat(7,42px)] gap-0.5 sm:gap-1 items-center px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-zinc-800/30 transition-colors">
      <div className="relative">
        <Image
          src={getHeadUrl(player.player_name, 64)}
          alt={player.player_name}
          width={36}
          height={36}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-md"
          unoptimized
        />
        <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center" title={cls.label}>
          <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${cls.color}`} />
        </div>
      </div>
      <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate pl-2 sm:pl-2.5">
        {player.player_name}
      </div>
      <Cell value={player.kills} color={player.kills > 0 ? "text-emerald-400" : undefined} />
      <Cell value={player.deaths} color={player.deaths > 0 ? "text-red-400" : undefined} />
      <Cell value={Math.round(player.damage)} color="text-amber-400" />
      <Cell value={player.melee_hits} />
      <Cell value={player.bow_hits} />
      <Cell
        value={isArcher ? player.archer_tags : ""}
        color={isArcher && player.archer_tags > 0 ? "text-green-400" : "text-transparent"}
      />
      <Cell value={player.splash_heal} color={player.splash_heal > 0 ? "text-pink-400" : undefined} />
    </div>
  );
}

function Cell({ value, color }: { value: number | string; color?: string }) {
  return (
    <div className={`text-center text-xs sm:text-sm tabular-nums font-medium ${color || "text-zinc-400"}`}>
      {value}
    </div>
  );
}

function Timeline({ events, matchStart }: { events: MatchEventData[]; matchStart: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6">
      <h2 className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 sm:mb-6">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        전투 타임라인
      </h2>
      <div className="relative pl-5 sm:pl-6">
        <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />
        <div className="space-y-2.5 sm:space-y-3">
          {events.map((e) => (
            <TimelineEvent key={e.id} event={e} matchStart={matchStart} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineEvent({ event, matchStart }: { event: MatchEventData; matchStart: string }) {
  const startMs = new Date(matchStart).getTime();
  const eventMs = new Date(event.event_time).getTime();
  const elapsedSec = Math.floor((eventMs - startMs) / 1000);
  const min = Math.floor(elapsedSec / 60);
  const sec = elapsedSec % 60;
  const timeStr = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

  return (
    <div className="relative flex items-center gap-2.5 sm:gap-4">
      <div className="absolute -left-[15px] sm:-left-[17px] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900 z-10" />
      <span className="text-[10px] sm:text-xs text-zinc-600 font-mono tabular-nums w-10 sm:w-12 shrink-0">{timeStr}</span>
      <div className="flex-1 bg-zinc-800/50 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm flex-wrap">
          <strong className="text-emerald-400">{event.actor_name}</strong>
          <Swords className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-600" />
          <strong className="text-red-400">{event.target_name}</strong>
          {event.weapon && (
            <span className="text-zinc-600 text-[10px] sm:text-xs">({event.weapon})</span>
          )}
        </span>
      </div>
    </div>
  );
}
