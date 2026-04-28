import { useAnimateOnScroll, useCountUp } from "./useAnimateOnScroll";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatBannerProps {
  stats: StatItem[];
}

const StatCell = ({ stat, index, visible }: { stat: StatItem; index: number; visible: boolean }) => {
  const count = useCountUp(stat.value, 1800, visible);
  return (
    <div
      className={`relative text-center px-4 py-6 transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
        {count}{stat.suffix || ""}
      </div>
      <div className="text-xs text-gray-500 mt-1 font-semibold uppercase tracking-wider">{stat.label}</div>
    </div>
  );
};

export const StatBanner = ({ stats }: StatBannerProps) => {
  const { ref, visible } = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className="mb-12 rounded-2xl bg-white border border-gray-100 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"
    >
      {stats.map((stat, i) => (
        <StatCell key={stat.label} stat={stat} index={i} visible={visible} />
      ))}
    </div>
  );
};
