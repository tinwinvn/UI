import libraryImg from "../../../assets/thu-vien-truong-dh-cong-nghe-tphcm-hutech-184304.jpg";
import { IntroLayout } from "../components/IntroLayout";
import { OrgChartSection } from "../components/OrgChart";
import { OrgChartIcon } from "../components/OrgChart/icons";
import { SectionCard } from "../components/SectionCard";
import { StatBadge } from "../components/StatBadge";
import type { DepartmentType, StatType } from "./type";

const departments: DepartmentType[] = [
  {
    name: "Khoa Kinh tế",
    desc: "Đào tạo cử nhân, thạc sĩ và tiến sĩ kinh tế học, kinh tế phát triển, kinh tế quốc tế.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    name: "Khoa Quản trị Kinh doanh",
    desc: "Chuyên ngành quản trị chiến lược, marketing, quản trị nhân sự và khởi nghiệp.",
    iconPath:
      "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Khoa Tài chính — Ngân hàng",
    desc: "Đào tạo chuyên gia tài chính, ngân hàng, bảo hiểm và đầu tư chứng khoán.",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Khoa Kế toán",
    desc: "Đào tạo kế toán viên, kiểm toán viên theo chuẩn mực quốc tế IFRS, ACCA.",
    iconPath:
      "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    name: "Khoa Thương mại Điện tử",
    desc: "Chuyên ngành thương mại điện tử, hệ thống thông tin quản lý và chuyển đổi số.",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "Khoa Du lịch",
    desc: "Đào tạo quản trị du lịch, khách sạn, nhà hàng và tổ chức sự kiện.",
    iconPath:
      "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const supportUnits = [
  "Phòng Đào tạo",
  "Phòng Công tác Sinh viên",
  "Phòng Khoa học & HTQT",
  "Phòng Tổ chức — Hành chính",
  "Phòng Kế hoạch — Tài chính",
  "Trung tâm Thư viện",
  "Trung tâm CNTT",
  "Trung tâm Khảo thí",
];

const stats: StatType[] = [
  {
    value: "6",
    label: "Khoa chuyên ngành",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    value: "8",
    label: "Phòng chức năng",
    iconPath:
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
  },
  {
    value: "3",
    label: "Trung tâm",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    value: "500+",
    label: "Cán bộ, giảng viên",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const Ico = ({ d, size = "w-5 h-5" }: { d: string; size?: string }) => (
  <svg
    className={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

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
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

export const OrgStructure = () => (
  <IntroLayout
    title="Cơ Cấu Tổ Chức"
    subtitle="Hệ thống tổ chức khoa học, chuyên nghiệp, đảm bảo vận hành hiệu quả mọi hoạt động của nhà trường"
    icon={heroIcon}
  >
    <div className="rounded-xl overflow-hidden mb-10 shadow-md">
      <img
        src={libraryImg}
        alt="Thư viện trường"
        className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    <SectionCard icon={<OrgChartIcon />} title="Sơ Đồ Tổ Chức">
      <OrgChartSection />
    </SectionCard>

    <div className="h-10" />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {stats.map((s, i) => (
        <StatBadge
          key={s.label}
          value={s.value}
          label={s.label}
          delay={i * 100}
          icon={<Ico d={s.iconPath} size="w-6 h-6" />}
        />
      ))}
    </div>

    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#0054a5] text-white flex items-center justify-center">
        <Ico
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          size="w-4 h-4"
        />
      </div>
      Các Khoa Chuyên Ngành
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      {departments.map((d, i) => (
        <SectionCard
          key={d.name}
          icon={<Ico d={d.iconPath} />}
          title={d.name}
          delay={i * 80}
        >
          <p>{d.desc}</p>
        </SectionCard>
      ))}
    </div>

    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
        <Ico
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
          size="w-4 h-4"
        />
      </div>
      Phòng Ban & Trung Tâm
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {supportUnits.map((unit, i) => (
        <div
          key={unit}
          className="bg-white rounded-lg border border-gray-100 p-4 text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#0054a5] hover:border-[#0054a5]/30 transition-all duration-200 shadow-sm hover:shadow-md"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          {unit}
        </div>
      ))}
    </div>
  </IntroLayout>
);
