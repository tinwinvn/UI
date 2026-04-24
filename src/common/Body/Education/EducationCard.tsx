import { Link } from "react-router-dom";

type EducationCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  path: string;
  icon: React.ReactNode;
  index: number;
};

export const EducationCard = ({ title, description, imageUrl, path, icon, index }: EducationCardProps) => (
  <Link
    to={path}
    className="block no-underline group"
    style={{ animation: `slideUp 0.5s ease-out ${index * 120}ms both` }}
  >
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0054a5] shadow-md group-hover:bg-[#0054a5] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0054a5] transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0054a5] group-hover:gap-3 transition-all duration-300">
          Tìm hiểu thêm
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </Link>
);
