import { Link } from "react-router-dom";
import { useAnimateOnScroll } from "./useAnimateOnScroll";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CTABanner = ({
  title,
  description,
  buttonText,
  buttonLink,
}: CTABannerProps) => {
  const { ref, visible } = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`mt-14 relative rounded-3xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 70% 50%, #06b6d4 0%, transparent 50%)",
        }}
      />

      <div className="relative px-8 py-12 md:px-14 md:py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-orange-500 to-orange-400 text-white font-bold rounded-full hover:from-orange-400 hover:to-orange-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 no-underline"
        >
          {buttonText}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
