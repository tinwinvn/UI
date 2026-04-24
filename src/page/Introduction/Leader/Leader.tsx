import graduationImg from "../../../assets/banner-ngay-tot-nghiep-15.jpg";
import { IntroLayout } from "../components/IntroLayout";
import { LeaderCard } from "../components/LeaderCard";
import { SectionCard } from "../components/SectionCard";
import type { MemberType } from "./type";

const boardMembers: MemberType[] = [
  {
    name: "GS.TS. Lê Văn Huy",
    title: "Tiến sĩ Kinh tế học",
    role: "Hiệu trưởng",
    description:
      "Hơn 25 năm kinh nghiệm trong lĩnh vực giáo dục đại học và nghiên cứu kinh tế. Chủ trì nhiều đề tài nghiên cứu cấp quốc gia.",
  },
  {
    name: "PGS.TS. Trần Thị B",
    title: "Tiến sĩ Quản trị Kinh doanh — ĐH Melbourne",
    role: "Phó Hiệu trưởng",
    description:
      "Phụ trách đào tạo và nghiên cứu khoa học. Chuyên gia về quản trị chiến lược và phát triển bền vững.",
  },
  {
    name: "TS. Lê Văn C",
    title: "Tiến sĩ Tài chính — ĐH Tokyo",
    role: "Phó Hiệu trưởng",
    description:
      "Phụ trách hợp tác quốc tế và đảm bảo chất lượng. Có nhiều công trình nghiên cứu về tài chính quốc tế.",
  },
  {
    name: "PGS.TS. Phạm Thị D",
    title: "Tiến sĩ Kế toán — ĐH Sydney",
    role: "Phó Hiệu trưởng",
    description:
      "Phụ trách cơ sở vật chất và công tác sinh viên. Chuyên gia về kế toán quản trị và kiểm toán.",
  },
];

const deans: MemberType[] = [
  {
    name: "TS. Hoàng Văn Đ",
    title: "Trưởng Khoa Kinh tế",
    role: "Trưởng Khoa",
    description:
      "Chuyên gia kinh tế vĩ mô, hơn 15 năm giảng dạy và nghiên cứu.",
  },
  {
    name: "PGS.TS. Ngô Thị H",
    title: "Trưởng Khoa Quản trị Kinh doanh",
    role: "Trưởng Khoa",
    description: "Nghiên cứu về marketing số và hành vi người tiêu dùng.",
  },
  {
    name: "TS. Vũ Minh K",
    title: "Trưởng Khoa Tài chính — Ngân hàng",
    role: "Trưởng Khoa",
    description: "Chuyên gia fintech và tài chính doanh nghiệp.",
  },
  {
    name: "TS. Đặng Thị L",
    title: "Trưởng Khoa Kế toán",
    role: "Trưởng Khoa",
    description: "Nghiên cứu về chuẩn mực kế toán quốc tế IFRS.",
  },
  {
    name: "PGS.TS. Bùi Văn M",
    title: "Trưởng Khoa Thương mại Điện tử",
    role: "Trưởng Khoa",
    description:
      "Chuyên gia chuyển đổi số và thương mại điện tử xuyên biên giới.",
  },
  {
    name: "TS. Lý Thị N",
    title: "Trưởng Khoa Du lịch",
    role: "Trưởng Khoa",
    description: "Nghiên cứu về du lịch bền vững và quản trị khách sạn.",
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
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export const Leader = () => {
  return (
    <IntroLayout
      title="Ban Lãnh Đạo"
      subtitle="Đội ngũ lãnh đạo tâm huyết, giàu kinh nghiệm, dẫn dắt nhà trường phát triển vững mạnh"
      icon={heroIcon}
    >
      <div className="rounded-xl overflow-hidden mb-10 shadow-md">
        <img
          src={graduationImg}
          alt="Lễ tốt nghiệp"
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        title="Giới thiệu Ban lãnh đạo"
      >
        <p className="text-base leading-relaxed">
          Ban lãnh đạo Trường Đại học Kinh tế — Đại học Đà Nẵng gồm Hiệu trưởng
          và các Phó Hiệu trưởng, là những nhà khoa học, nhà quản lý giàu kinh
          nghiệm, tâm huyết với sự nghiệp giáo dục. Đội ngũ lãnh đạo luôn nỗ lực
          đổi mới, sáng tạo để đưa nhà trường phát triển xứng tầm với vị thế của
          một trường đại học hàng đầu khu vực.
        </p>
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        Ban Giám Hiệu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {boardMembers.map((m, i) => (
          <LeaderCard key={m.name} {...m} delay={i * 120} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        Trưởng Các Khoa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deans.map((d, i) => (
          <LeaderCard key={d.name} {...d} delay={i * 100} />
        ))}
      </div>
    </IntroLayout>
  );
};
