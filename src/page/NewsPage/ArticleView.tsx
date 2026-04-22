import { Link } from "react-router-dom";
import {
  CATEGORY_BADGE,
  type NewsItem,
} from "../../common/Body/NewsSection/type";

interface ArticleViewProps {
  item: NewsItem | null;
}

export const ArticleView = ({ item }: ArticleViewProps) => {
  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-xl font-semibold text-gray-600 mb-4">
          Không tìm thấy bài viết
        </p>
        <Link
          to="/tin-tuc"
          className="text-[#0054a5] hover:underline font-medium"
        >
          ← Quay lại danh sách tin tức
        </Link>
      </div>
    );
  }

  return (
    <article key={item.id} className="animate-[fadeIn_300ms_ease-out]">
      <div className="overflow-hidden rounded-xl mb-6">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            CATEGORY_BADGE[item.category] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {item.category}
        </span>

        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {item.date}
        </span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-[#164478] mb-4 leading-tight">
        {item.title}
      </h1>

      <p className="text-base text-gray-700 leading-relaxed">{item.excerpt}</p>
    </article>
  );
};
