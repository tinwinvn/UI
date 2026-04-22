import { SectionHeader } from "../SectionHeader";
import { EducationCard } from "./EducationCard";
import HeroImg from "../../../assets/hero.png";
import SeminarImg from "../../../assets/backdrop-hoi-nghi-khoa-hoc-phat-trien-ben-vung-thu-du-ha-noi-a25021704.jpg";
import LibraryImg from "../../../assets/thu-vien-truong-dh-cong-nghe-tphcm-hutech-184304.jpg";
import type { ProgramType } from "./type";

const PROGRAMS: ProgramType[] = [
  {
    title: "Đại Học Chính Quy",
    description:
      "15+ ngành đào tạo chất lượng cao với chương trình chuẩn quốc tế, đáp ứng nhu cầu thị trường lao động.",
    imageUrl: HeroImg,
    path: "/dai-hoc-chinh-quy",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    title: "Sau Đại Học",
    description:
      "Chương trình Thạc sĩ và Tiến sĩ với đội ngũ giảng viên hàng đầu, nghiên cứu chuyên sâu.",
    imageUrl: SeminarImg,
    path: "/sau-dai-hoc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Đào Tạo Ngắn Hạn",
    description:
      "Các khóa học chứng chỉ, bồi dưỡng nghiệp vụ và kỹ năng chuyên môn cho người đi làm.",
    imageUrl: LibraryImg,
    path: "/e-learning",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export const Education = () => (
  <section className="py-12 md:py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        tag="Đào tạo"
        title="Chương Trình Đào Tạo"
        description="Đa dạng chương trình từ đại học đến sau đại học, đáp ứng mọi nhu cầu học tập và phát triển nghề nghiệp."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROGRAMS.map((prog, i) => (
          <EducationCard key={prog.title} {...prog} index={i} />
        ))}
      </div>
    </div>
  </section>
);
