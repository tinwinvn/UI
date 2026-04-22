import { useState, useEffect, useCallback } from "react";
import ArrowLeft from "../../../assets/arrow-left-01-stroke-rounded.svg";
import ArrowRight from "../../../assets/arrow-right-01-stroke-rounded.svg";
import LibraryImg from "../../../assets/thu-vien-truong-dh-cong-nghe-tphcm-hutech-184304.jpg";
import DormImg from "../../../assets/300067570_642175447247349_4849287905266301968_n.jpg";
import StadiumImg from "../../../assets/IMG_9561.jpg";
import CanteenImg from "../../../assets/thiet-ke-cantin-truong-hoc-tran-van-giau-2-scaled.jpg";
import LabImg from "../../../assets/1.jpg";
import HallImg from "../../../assets/toan-canh-hoi-truong-phenikaa.jpg";
import type { CampusItem } from "./type";

const CAMPUS_ITEMS: CampusItem[] = [
  {
    id: 1,
    title: "Thư Viện & Không Gian Học",
    subtitle:
      "Hệ thống 120,000+ đầu sách, phòng học nhóm và khu vực tự học hiện đại",
    imageUrl: LibraryImg,
    accent: "from-blue-900/80",
  },
  {
    id: 2,
    title: "Khu Ký Túc Xá",
    subtitle: "1.200 chỗ ở tiêu chuẩn với đầy đủ tiện nghi, an ninh 24/7",
    imageUrl: DormImg,
    accent: "from-emerald-900/80",
  },
  {
    id: 3,
    title: "Sân Thể Thao & Giải Trí",
    subtitle: "Sân bóng đá, bóng rổ, hồ bơi và phòng gym hiện đại",
    imageUrl: StadiumImg,
    accent: "from-orange-900/80",
  },
  {
    id: 4,
    title: "Căn tin",
    subtitle: "Căng-tin đa dạng món ăn, khu cafe học tập thoải mái",
    imageUrl: CanteenImg,
    accent: "from-purple-900/80",
  },
  {
    id: 5,
    title: "Phòng Lab & Nghiên Cứu",
    subtitle: "Trang thiết bị hiện đại phục vụ nghiên cứu và thực hành",
    imageUrl: LabImg,
    accent: "from-teal-900/80",
  },
  {
    id: 6,
    title: "Hội Trường & Sự Kiện",
    subtitle:
      "Không gian tổ chức sự kiện sức chứa 1.000 người với công nghệ AV tiên tiến",
    imageUrl: HallImg,
    accent: "from-rose-900/80",
  },
];

function useVisible() {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 768) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}

export const CampusCarousel = () => {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const visible = useVisible();
  const totalPages = Math.ceil(CAMPUS_ITEMS.length / visible);

  const goTo = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setPage(((next % totalPages) + totalPages) % totalPages);
        setAnimating(false);
      }, 300);
    },
    [animating, totalPages],
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(page + 1), 5000);
    return () => clearInterval(timer);
  }, [page, goTo]);

  const visibleItems = CAMPUS_ITEMS.slice(
    page * visible,
    page * visible + visible,
  );

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0054a5] mb-3">
            Khám phá
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Cuộc Sống Tại Trường
          </h2>
          <p className="max-w-xl mx-auto text-gray-500">
            Môi trường học tập và sinh hoạt hiện đại, thân thiện — nơi bạn phát
            triển toàn diện cả tri thức lẫn kỹ năng sống.
          </p>
        </div>

        <div
          className={`grid gap-6 transition-opacity duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          } ${
            visible === 1
              ? "grid-cols-1"
              : visible === 2
                ? "grid-cols-2"
                : "grid-cols-3"
          }`}
        >
          {visibleItems.map((item, i) => (
            <div
              key={item.id}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-linear-to-t ${item.accent} to-transparent`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-lg font-bold mb-1 drop-shadow">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-snug line-clamp-2 mb-3">
                  {item.subtitle}
                </p>
                <button className="text-xs font-semibold px-4 py-1.5 rounded-full border border-white/70 hover:bg-white hover:text-gray-900 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Khám phá →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10 gap-3">
          <button
            onClick={() => goTo(page - 1)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-[#0054a5] hover:bg-[#0054a5] transition-all duration-200 group/btn cursor-pointer shrink-0"
          >
            <img
              src={ArrowLeft}
              alt="Prev"
              className="w-4 h-4 brightness-0 group-hover/btn:invert"
            />
          </button>

          <div className="flex items-center gap-2 h-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  page === i
                    ? "w-8 h-3 bg-[#0054a5]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-[#0054a5] hover:bg-[#0054a5] transition-all duration-200 group/btn cursor-pointer shrink-0"
          >
            <img
              src={ArrowRight}
              alt="Next"
              className="w-4 h-4 brightness-0 group-hover/btn:invert-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
