import { Link } from "react-router-dom";

type CollaborationCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  path: string;
  ctaLabel: string;
  accent: string;
};

export const CollaborationCard = ({
  title,
  description,
  imageUrl,
  path,
  ctaLabel,
  accent,
}: CollaborationCardProps) => (
  <Link to={path} className="block no-underline group">
    <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md hover:shadow-2xl transition-all duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 bg-linear-to-t ${accent} to-transparent`}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/60 px-5 py-2 rounded-full group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
          {ctaLabel}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </div>
  </Link>
);
