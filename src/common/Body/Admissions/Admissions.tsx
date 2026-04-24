import { Link } from "react-router-dom";
import BannerImg from "../../../assets/banner-ngay-tot-nghiep-15.jpg";

export const Admissions = () => (
  <section className="py-12 md:py-16 px-4 bg-linear-to-br from-blue-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0054a5] mb-3">
          Tuyển sinh
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Tuyển Sinh 2026
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Mở ra cánh cửa tương lai cùng Trường Đại Học Kinh Tế Đà Nẵng — nơi đào
          tạo nguồn nhân lực chất lượng cao cho khu vực miền Trung và cả nước.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden group shadow-xl">
        <img
          src={BannerImg}
          alt="Tuyển sinh 2026"
          className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0054a5]/90 via-[#0054a5]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              Chào đón khóa tuyển sinh mới
            </h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed">
              Hơn 15 chương trình đào tạo chất lượng cao, cơ hội học bổng lên
              đến 100% học phí, và môi trường học tập quốc tế.
            </p>
          </div>
          <Link
            to="/tuyen-sinh"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg no-underline"
          >
            Tìm hiểu ngay
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
