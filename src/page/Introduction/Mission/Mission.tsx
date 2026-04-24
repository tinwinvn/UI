import hallImg from "../../../assets/backdrop-hoi-nghi-khoa-hoc-phat-trien-ben-vung-thu-du-ha-noi-a25021704.jpg";
import { IntroLayout } from "../components/IntroLayout";
import { SectionCard } from "../components/SectionCard";
import { StatBadge } from "../components/StatBadge";
import type { CoreValueType } from "./type";

const coreValues: CoreValueType[] = [
  {
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Sáng tạo",
    text: "Khuyến khích tư duy đổi mới, sáng tạo trong nghiên cứu và giảng dạy, tạo ra giá trị mới cho xã hội.",
  },
  {
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Chính trực",
    text: "Đề cao tính trung thực, minh bạch và trách nhiệm trong mọi hoạt động học thuật và quản lý.",
  },
  {
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Hội nhập",
    text: "Chủ động hội nhập quốc tế, tiếp thu tinh hoa tri thức nhân loại và phát huy bản sắc dân tộc.",
  },
  {
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Cộng đồng",
    text: "Xây dựng cộng đồng học thuật gắn kết, nơi mỗi cá nhân đều được tôn trọng và phát triển toàn diện.",
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
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

export const Mission = () => {
  return (
    <IntroLayout
      title="Sứ Mạng & Tầm Nhìn"
      subtitle="Định hướng phát triển và giá trị cốt lõi dẫn dắt mọi hoạt động của nhà trường"
      icon={heroIcon}
    >
      <div className="rounded-xl overflow-hidden mb-10 shadow-md">
        <img
          src={hallImg}
          alt="Hội nghị khoa học"
          className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <SectionCard
        icon={
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
              d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
            />
          </svg>
        }
        title="Sứ Mạng"
        accent="bg-[#0054a5]"
      >
        <p className="text-base leading-relaxed">
          Trường Đại học Kinh tế — Đại học Đà Nẵng có sứ mạng đào tạo nguồn nhân
          lực chất lượng cao trong lĩnh vực kinh tế, quản trị kinh doanh và các
          ngành liên quan; nghiên cứu khoa học và chuyển giao công nghệ phục vụ
          phát triển kinh tế — xã hội khu vực miền Trung — Tây Nguyên và cả
          nước; đóng góp vào sự phát triển bền vững của đất nước trong bối cảnh
          hội nhập quốc tế.
        </p>
      </SectionCard>

      <div className="h-6" />

      <SectionCard
        icon={
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        }
        title="Tầm Nhìn 2030"
        accent="bg-yellow-500"
      >
        <p className="text-base leading-relaxed">
          Đến năm 2030, Trường Đại học Kinh tế — Đại học Đà Nẵng trở thành
          trường đại học định hướng nghiên cứu, nằm trong nhóm các trường đại
          học hàng đầu Việt Nam và được công nhận trong khu vực ASEAN về đào
          tạo, nghiên cứu khoa học trong lĩnh vực kinh tế và quản trị kinh
          doanh.
        </p>
      </SectionCard>

      <div className="h-6" />

      <SectionCard
        icon={
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
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        }
        title="Mục Tiêu Chiến Lược"
        accent="bg-emerald-500"
      >
        <ul className="space-y-3 text-base">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            Nâng cao chất lượng đào tạo đạt chuẩn quốc tế, đáp ứng nhu cầu thị
            trường lao động
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            Đẩy mạnh nghiên cứu khoa học ứng dụng, tăng số lượng công bố quốc tế
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            Mở rộng hợp tác quốc tế, tăng cường trao đổi sinh viên và giảng viên
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            Chuyển đổi số toàn diện trong quản lý và giảng dạy
          </li>
        </ul>
      </SectionCard>

      <div className="h-10" />

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        Giá Trị Cốt Lõi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {coreValues.map((v, i) => (
          <SectionCard
            key={v.title}
            icon={v.icon}
            title={v.title}
            delay={i * 100}
          >
            <p>{v.text}</p>
          </SectionCard>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBadge
          value="95%"
          label="Tỷ lệ có việc làm"
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <StatBadge
          value="Top 10"
          label="Đại học Việt Nam"
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          }
        />
        <StatBadge
          value="200+"
          label="Bài báo quốc tế/năm"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        />
        <StatBadge
          value="50+"
          label="Chương trình đào tạo"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          }
        />
      </div>
    </IntroLayout>
  );
};
