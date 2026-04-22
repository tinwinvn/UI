import { CATEGORY_BADGE, type NewsItem } from "../../common/Body/News/type";

interface NewsCardProps {
  item: NewsItem;
  isSelected: boolean;
  index: number;
  onClick: () => void;
}

export const NewsCard = ({ item, isSelected, index, onClick }: NewsCardProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group flex gap-3 px-4 py-3 cursor-pointer transition-colors duration-200 ${
        isSelected
          ? "border-l-3 border-[#0054a5] bg-blue-50"
          : "border-l-3 border-transparent hover:bg-gray-50"
      }`}
      style={{
        animation: `slideUp 0.4s ease-out ${index * 60}ms both`,
      }}
    >
      <div className="shrink-0 w-18 h-14 rounded-lg overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-between min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              CATEGORY_BADGE[item.category] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {item.category}
          </span>
          <span className="text-[11px] text-gray-400 ml-auto shrink-0">
            {item.date}
          </span>
        </div>
        <p className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-[#0054a5] transition-colors duration-200">
          {item.title}
        </p>
      </div>
    </div>
  );
};
