import { useEffect, useRef, useState } from "react";

interface StatBadgeProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export const StatBadge = ({ value, label, icon, delay = 0 }: StatBadgeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 group ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0054a5] flex items-center justify-center mb-3 group-hover:bg-[#0054a5] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <span className="text-2xl font-extrabold text-[#0054a5]">{value}</span>
      <span className="text-xs text-gray-500 mt-1 text-center">{label}</span>
    </div>
  );
};
