import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DealMeter - PVP.AC",
  description: "PVP.AC Minecraft PvP Combat Analytics",
};

export default function DealMeterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
