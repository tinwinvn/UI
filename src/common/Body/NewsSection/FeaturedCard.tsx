import { Link } from "react-router-dom";
import { CATEGORY_BADGE, type NewsItem } from "./type";

export const FeaturedCard = ({ item }: { item: NewsItem }) => (
  <Link to={`/tin-tuc/${item.id}`} className="block no-underline group">
    <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_BADGE[item.category] ?? "bg-gray-100 text-gray-600"}`}
          >
            {item.category}
          </span>
          <span className="text-white/70 text-sm">{item.date}</span>
        </div>
        <h3 className="text-white text-xl md:text-2xl font-extrabold leading-tight mb-2 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2">
          {item.excerpt}
        </p>
      </div>
    </div>
  </Link>
);
