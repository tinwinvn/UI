import type { ReactNode } from "react";

export type QuickLink = {
  id: number;
  label: string;
  desc: string;
  colorClass: string;
  iconBg: string;
  icon: ReactNode;
};
