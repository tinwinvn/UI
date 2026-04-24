import { Link } from "react-router-dom";
import { CATEGORY_BADGE, type NewsItem } from "./type";

export const NewsGridCard = ({
  item,
  index,
}: {
  item: NewsItem;
  index: number;
}) => (
  <Link
    to={`/tin-tuc/${item.id}`}
    className="block no-underline group"
    style={{ animation: `slideUp 0.5s ease-out ${index * 100}ms both` }}
  >
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm ${CATEGORY_BADGE[item.category] ?? "bg-gray-100 text-gray-600"}`}
          >
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-[14px] font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#0054a5] transition-colors duration-200 mb-2">
          {item.title}
        </h4>
        <span className="text-xs text-gray-400 mt-auto">{item.date}</span>
      </div>
    </div>
  </Link>
);
