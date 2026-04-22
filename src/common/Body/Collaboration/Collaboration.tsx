import { SectionHeader } from "../SectionHeader";
import { CollaborationCard } from "./CollaborationCard";
import ExchangeImg from "../../../assets/Trao-doi-SVQT-Viet-Trung-scaled.jpg";
import WorkdayImg from "../../../assets/ufi2287.png";
import type { CollabItemType } from "./type";

const COLLAB_ITEMS: CollabItemType[] = [
  {
    title: "Hợp Tác Trong Nước",
    description:
      "Liên kết chặt chẽ với hơn 100 doanh nghiệp và tổ chức hàng đầu Việt Nam, tạo cơ hội thực tập và việc làm cho sinh viên.",
    imageUrl: WorkdayImg,
    path: "/doi-tac",
    ctaLabel: "Đối tác doanh nghiệp",
    accent: "from-blue-900/80",
  },
  {
    title: "Hợp Tác Quốc Tế",
    description:
      "Chương trình trao đổi sinh viên và nghiên cứu với 50+ trường đại học danh tiếng tại châu Á, châu Âu và Bắc Mỹ.",
    imageUrl: ExchangeImg,
    path: "/quoc-te",
    ctaLabel: "Khám phá cơ hội",
    accent: "from-emerald-900/80",
  },
];

export const Collaboration = () => (
  <section className="py-12 md:py-16 px-4 bg-linear-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        tag="Hợp tác"
        title="Hợp Tác & Phát Triển"
        description="Xây dựng mạng lưới đối tác rộng khắp trong nước và quốc tế, mang đến cơ hội phát triển toàn diện."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COLLAB_ITEMS.map((item) => (
          <CollaborationCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);
