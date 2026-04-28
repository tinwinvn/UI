import { useEffect, useState } from "react";
import bannerImg from "../../../assets/banner-ngay-tot-nghiep-15.jpg";

interface AdmissionsHeroProps {
  title: string;
  subtitle: string;
  badge: string;
}

export const AdmissionsHero = ({
  title,
  subtitle,
  badge,
}: AdmissionsHeroProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-72 md:h-96 overflow-hidden">
      <img
        src={bannerImg}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 50%, #06b6d4 0%, transparent 50%)",
        }}
      />

      <div
        className={`relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 md:pb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 w-fit rounded-full bg-orange-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347"
            />
          </svg>
          {badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
