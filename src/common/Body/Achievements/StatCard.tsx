import { useEffect, useState } from "react";
import type { Stat } from "./type";

type StatCardProps = {
  stat: Stat;
  active: boolean;
  index: number;
};

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round((target * step) / steps), target));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

export const StatCard = ({ stat, active, index }: StatCardProps) => {
  const count = useCountUp(stat.value, 1800, active);
  const delayClass =
    [
      "animate-scale-in",
      "animate-scale-in-d1",
      "animate-scale-in-d2",
      "animate-scale-in-d3",
    ][index] ?? "animate-scale-in";

  return (
    <div
      className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100
                  hover:border-[#0054a5]/30 hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 ${active ? delayClass : "opacity-0"}`}
    >
      <div className="mb-4 p-4 rounded-full bg-blue-50 text-[#0054a5] group-hover:bg-[#0054a5] group-hover:text-white transition-all duration-300">
        {stat.icon}
      </div>
      <div className="text-4xl font-extrabold text-[#0054a5] tabular-nums">
        {count.toLocaleString("vi-VN")}
        {stat.suffix}
      </div>
      <div className="mt-2 text-base font-bold text-gray-800">{stat.label}</div>
      <div className="mt-1 text-sm text-gray-500">{stat.sublabel}</div>
    </div>
  );
};
