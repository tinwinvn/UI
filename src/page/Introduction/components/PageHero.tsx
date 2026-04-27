import { useEffect, useState } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const PageHero = ({ title, subtitle, icon }: PageHeroProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative bg-linear-to-r from-[#0054a5] via-[#0068cc] to-[#0054a5] text-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full" />

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 flex flex-col items-center text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-16 h-16 mb-5 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-yellow-300">
          {icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-blue-100 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-6 w-20 h-1 rounded-full bg-yellow-400" />
      </div>
    </div>
  );
};
