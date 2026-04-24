import { Link } from "react-router-dom";
import { ALL_NEWS } from "../../../data/newsData";
import { FeaturedCard } from "./FeaturedCard";
import { NewsGridCard } from "./NewsGridCard";
import { SectionHeader } from "../SectionHeader";

export const NewsSection = () => {
  const featured = ALL_NEWS[0];
  const gridItems = ALL_NEWS.slice(1, 5);

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Cập nhật"
          title="Tin Tức & Sự Kiện"
          description="Những tin tức mới nhất về hoạt động đào tạo, nghiên cứu và sự kiện nổi bật tại trường."
        />

        <FeaturedCard item={featured} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {gridItems.map((item, i) => (
            <NewsGridCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0054a5] text-white font-semibold rounded-full hover:bg-[#164478] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg no-underline"
          >
            Xem tất cả tin tức
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
