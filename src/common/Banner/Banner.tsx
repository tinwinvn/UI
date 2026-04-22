import { useState, useEffect, useCallback } from "react";
import type { BannerType } from "./type";
import ArrowLeft from "../../assets/arrow-left-01-stroke-rounded.svg";
import ArrowRight from "../../assets/arrow-right-01-stroke-rounded.svg";
import BannerGraduated from "../../assets/banner-ngay-tot-nghiep-15.jpg";
import BannerWorkDay from "../../assets/ufi2287.png";
import BannerSeminar from "../../assets/backdrop-hoi-nghi-khoa-hoc-phat-trien-ben-vung-thu-du-ha-noi-a25021704.jpg";
import BannerStudentExchange from "../../assets/Trao-doi-SVQT-Viet-Trung-scaled.jpg";

const BANNERS: BannerType[] = [
  {
    id: 1,
    title: "Lễ Tốt Nghiệp 2026",
    description:
      "Chúc mừng 2.500 tân cử nhân vượt qua hành trình tri thức và bước vào trang mới của cuộc đời",
    imageUrl: BannerGraduated,
    ctaLabel: "Tìm hiểu thêm",
  },
  {
    id: 2,
    title: "Ngày Hội Việc Làm 2026",
    description:
      "Kết nối sinh viên với hơn 150 doanh nghiệp hàng đầu tại Đà Nẵng và cả nước",
    imageUrl: BannerWorkDay,
    ctaLabel: "Đăng ký ngay",
  },
  {
    id: 3,
    title: "Hội Thảo Nghiên Cứu Khoa Học Quốc Tế",
    description:
      "Diễn đàn học thuật quy tụ hơn 200 nhà khoa học trong và ngoài nước",
    imageUrl: BannerSeminar,
    ctaLabel: "Xem chương trình",
  },
  {
    id: 4,
    title: "Chương Trình Trao Đổi Sinh Viên Quốc Tế",
    description:
      "Cơ hội học tập tại 50+ trường đối tác danh tiếng ở châu Á, châu Âu và Bắc Mỹ",
    imageUrl: BannerStudentExchange,
    ctaLabel: "Khám phá ngay",
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? BANNERS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTextKey((k) => k + 1);
  };

  const nextSlide = useCallback(() => {
    const newIndex = currentIndex === BANNERS.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTextKey((k) => k + 1);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full h-75 sm:h-100 md:h-120 lg:h-140 relative group overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="w-full h-full shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.imageUrl})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      <div
        key={textKey}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <span className="animate-slide-up inline-block mb-3 text-xs md:text-sm font-semibold uppercase tracking-widest text-yellow-400 border border-yellow-400/60 px-4 py-1 rounded-full">
          Trường Đại Học Kinh Tế Đà Nẵng
        </span>
        <h2 className="animate-slide-up-d1 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl leading-tight mb-4">
          {BANNERS[currentIndex].title}
        </h2>
        <p className="animate-slide-up-d2 max-w-2xl text-base md:text-lg text-white/90 drop-shadow-md mb-8">
          {BANNERS[currentIndex].description}
        </p>
        <button className="animate-slide-up-d3 px-8 py-3 bg-[#0054a5] hover:bg-[#164478] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-900/50 cursor-pointer">
          {BANNERS[currentIndex].ctaLabel} →
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 hidden group-hover:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-200 cursor-pointer"
      >
        <img src={ArrowLeft} alt="Previous" className="w-5 h-5 invert" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 hidden group-hover:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all duration-200 cursor-pointer"
      >
        <img src={ArrowRight} alt="Next" className="w-5 h-5 invert" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setTextKey((k) => k + 1);
            }}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 text-white/70 text-xs font-medium">
        {currentIndex + 1} / {BANNERS.length}
      </div>
    </div>
  );
};
