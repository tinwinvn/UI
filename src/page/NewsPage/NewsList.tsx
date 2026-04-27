import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { NewsCard } from "./NewsCard";
import type { NewsItem } from "../../common/Body/NewsSection/type";

interface NewsListProps {
  items: NewsItem[];
  selectedId: number;
}

function parseDDMMYYYY(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export function sortByDateDescending(items: NewsItem[]): NewsItem[] {
  return [...items].sort(
    (a, b) => parseDDMMYYYY(b.date).getTime() - parseDDMMYYYY(a.date).getTime(),
  );
}

export const NewsList = ({ items, selectedId }: NewsListProps) => {
  const navigate = useNavigate();

  const sortedItems = useMemo(() => sortByDateDescending(items), [items]);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="bg-[#0054a5] px-5 py-4 flex items-center gap-3 shrink-0">
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
          Tin tức &amp; Sự kiện
        </h2>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-gray-50">
        {sortedItems.map((item, index) => (
          <NewsCard
            key={item.id}
            item={item}
            isSelected={item.id === selectedId}
            index={index}
            onClick={() => navigate(`/tin-tuc/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
