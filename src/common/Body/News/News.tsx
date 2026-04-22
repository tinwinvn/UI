import { useState } from "react";
import { Link } from "react-router-dom";
import { ALL_NEWS } from "../../../data/newsData";
import { CATEGORY_BADGE } from "./type";
import { CompactRow } from "./CompactRow";

const INITIAL_SHOW = 4;

export const News = () => {
  const [expanded, setExpanded] = useState(false);
  const featured = ALL_NEWS[0];
  const compactInitial = ALL_NEWS.slice(1, INITIAL_SHOW);
  const extraItems = ALL_NEWS.slice(INITIAL_SHOW);
  const hiddenCount = extraItems.length;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="bg-[#0054a5] px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h10l4 4v9a2 2 0 01-2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 13h6M9 17h4"
            />
          </svg>
          <h2 className="text-white font-bold tracking-wider text-base uppercase">
            Tin tức & Sự kiện
          </h2>
        </div>
        <span className="text-blue-200 text-xs font-medium">
          {ALL_NEWS.length} bài viết
        </span>
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-y-auto">
        <Link to={`/tin-tuc/${featured.id}`} className="contents">
          <div
            className="group relative cursor-pointer overflow-hidden shrink-0"
            style={{ animation: "slideUp 0.5s ease-out both" }}
          >
            <div className="h-44 overflow-hidden">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_BADGE[featured.category]}`}
                >
                  {featured.category}
                </span>
                <span className="text-white/70 text-[11px]">{featured.date}</span>
              </div>
              <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-yellow-300 transition-colors duration-200">
                {featured.title}
              </h3>
            </div>
          </div>
        </Link>

        <div className="divide-y divide-gray-50">
          {compactInitial.map((item, i) => (
            <Link key={item.id} to={`/tin-tuc/${item.id}`} className="block no-underline text-inherit">
              <CompactRow item={item} index={i + 1} />
            </Link>
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-150" : "max-h-0"
          }`}
        >
          <div className="divide-y divide-gray-50">
            {extraItems.map((item, i) => (
              <Link key={item.id} to={`/tin-tuc/${item.id}`} className="block no-underline text-inherit">
                <CompactRow
                  item={item}
                  index={INITIAL_SHOW + i}
                  animated={expanded}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 p-3 border-t border-gray-100 bg-gray-50/50 flex gap-2">
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold
                       hover:border-[#0054a5] hover:text-[#0054a5] hover:bg-blue-50
                       transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {expanded ? "Thu gọn" : `Xem thêm ${hiddenCount} bài viết`}
          </button>
        )}
        <Link to="/tin-tuc" className="flex-1 no-underline">
          <button
            className="w-full py-2 rounded-lg bg-[#0054a5] text-white text-sm font-semibold
                       hover:bg-[#164478] transition-all duration-200 cursor-pointer"
          >
            Tất cả tin tức →
          </button>
        </Link>
      </div>
    </div>
  );
};
