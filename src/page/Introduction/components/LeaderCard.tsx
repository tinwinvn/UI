import { useEffect, useRef, useState } from "react";

interface LeaderCardProps {
  name: string;
  title: string;
  role: string;
  description: string;
  delay?: number;
}

export const LeaderCard = ({
  name,
  title,
  role,
  description,
  delay = 0,
}: LeaderCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 bg-linear-to-br from-[#0054a5] to-[#0068cc] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-12 h-12 text-white/80"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent" />
      </div>

      <div className="p-5 -mt-2 relative">
        <span className="inline-block px-3 py-1 bg-yellow-400 text-[#0054a5] text-xs font-bold rounded-full mb-2">
          {role}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mb-0.5">{name}</h3>
        <p className="text-sm text-[#0054a5] font-medium mb-3">{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
