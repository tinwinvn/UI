import { IntroLayout } from "../components/IntroLayout";
import { TimelineItem } from "../components/TimelineItem";
import { StatBadge } from "../components/StatBadge";
import campusImg from "../../../assets/toan-canh-hoi-truong-phenikaa.jpg";
import type { TimeLineDataType } from "./type";

const timelineData: TimeLineDataType[] = [
  {
    year: "1975",
    title: "Thành lập trường",
    description:
      "Trường Đại học Kinh tế Đà Nẵng được thành lập theo quyết định của Bộ Giáo dục và Đào tạo, đánh dấu bước ngoặt quan trọng trong sự phát triển giáo dục đại học tại miền Trung Việt Nam.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    year: "1985",
    title: "Mở rộng ngành đào tạo",
    description:
      "Trường mở thêm nhiều ngành đào tạo mới bao gồm Quản trị Kinh doanh, Tài chính Ngân hàng và Kế toán, đáp ứng nhu cầu phát triển kinh tế của khu vực.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    year: "1995",
    title: "Gia nhập Đại học Đà Nẵng",
    description:
      "Trường chính thức trở thành thành viên của Đại học Đà Nẵng, tạo nền tảng vững chắc cho sự hợp tác và phát triển liên ngành trong hệ thống giáo dục đại học.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    year: "2005",
    title: "Hợp tác quốc tế",
    description:
      "Ký kết hợp tác với hơn 30 trường đại học quốc tế tại Nhật Bản, Hàn Quốc, Úc và châu Âu. Triển khai các chương trình trao đổi sinh viên và giảng viên.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    year: "2015",
    title: "Kiểm định chất lượng",
    description:
      "Đạt kiểm định chất lượng giáo dục cấp quốc gia và quốc tế AUN-QA cho nhiều chương trình đào tạo, khẳng định vị thế hàng đầu trong khu vực.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Hướng tới tương lai",
    description:
      "Kỷ niệm 50 năm thành lập, trường tiếp tục đổi mới với chiến lược chuyển đổi số, phát triển bền vững và đào tạo nguồn nhân lực chất lượng cao cho kỷ nguyên 4.0.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const heroIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const History = () => {
  return (
    <IntroLayout
      title="Lịch Sử Hình Thành"
      subtitle="Hành trình nửa thế kỷ xây dựng và phát triển, từ những ngày đầu thành lập đến vị thế hàng đầu khu vực miền Trung"
      icon={heroIcon}
    >
      <div className="rounded-xl overflow-hidden mb-10 shadow-md">
        <img
          src={campusImg}
          alt="Toàn cảnh khuôn viên trường"
          className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <StatBadge
          value="50+"
          label="Năm thành lập"
          delay={0}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <StatBadge
          value="15,000+"
          label="Sinh viên"
          delay={100}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
        />
        <StatBadge
          value="500+"
          label="Giảng viên"
          delay={200}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          }
        />
        <StatBadge
          value="30+"
          label="Đối tác quốc tế"
          delay={300}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#0054a5] text-white flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        Các Mốc Lịch Sử Quan Trọng
      </h2>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
        {timelineData.map((item, i) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            title={item.title}
            description={item.description}
            isLeft={i % 2 === 1}
            icon={item.icon}
          />
        ))}
      </div>
    </IntroLayout>
  );
};
