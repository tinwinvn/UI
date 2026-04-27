import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  icon: React.ReactNode;
}

export const TimelineItem = ({
  year,
  title,
  description,
  isLeft,
  icon,
}: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center w-full mb-8 ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      <div
        className={`w-full md:w-5/12 transition-all duration-700 ${
          visible
            ? "opacity-100 translate-x-0"
            : isLeft
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <span className="inline-block px-3 py-1 bg-[#0054a5] text-white text-xs font-bold rounded-full mb-3">
            {year}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="hidden md:flex w-2/12 justify-center">
        <div
          className={`w-12 h-12 rounded-full bg-[#0054a5] text-white flex items-center justify-center shadow-lg transition-all duration-500 ${
            visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          {icon}
        </div>
      </div>

      <div className="hidden md:block w-5/12" />
    </div>
  );
};
