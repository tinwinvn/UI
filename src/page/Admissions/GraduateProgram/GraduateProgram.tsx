import { AdmissionsLayout } from "../components/AdmissionsLayout";
import { StatBanner } from "../components/StatBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ProgramCard } from "../components/ProgramCard";
import { InfoCard } from "../components/InfoCard";
import { CTABanner } from "../components/CTABanner";
import labImg from "../../../assets/backdrop-hoi-nghi-khoa-hoc-phat-trien-ben-vung-thu-du-ha-noi-a25021704.jpg";
import { useAnimateOnScroll } from "../components/useAnimateOnScroll";

const stats = [
  { value: 8, label: "Chuyên ngành Thạc sĩ" },
  { value: 3, label: "Chuyên ngành Tiến sĩ" },
  { value: 200, suffix: "+", label: "Học viên/năm" },
  { value: 90, suffix: "%", label: "GV có học vị TS" },
];

const masterPrograms = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75" /></svg>,
    title: "Thạc sĩ Tài chính", duration: "2 năm", credits: "60 tín chỉ",
    description: "Chương trình chuyên sâu về quản trị tài chính doanh nghiệp, phân tích đầu tư và quản lý danh mục.",
    tags: ["Tài chính", "Đầu tư", "Nghiên cứu"], color: "orange",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" /></svg>,
    title: "Thạc sĩ Quản trị Kinh doanh (MBA)", duration: "2 năm", credits: "60 tín chỉ",
    description: "Chương trình MBA uy tín với giảng viên quốc tế, case study thực tế và mạng lưới doanh nhân rộng lớn.",
    tags: ["MBA", "Lãnh đạo", "Chiến lược"], color: "cyan",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>,
    title: "Thạc sĩ Kinh tế học", duration: "2 năm", credits: "60 tín chỉ",
    description: "Nghiên cứu chuyên sâu kinh tế lượng, chính sách kinh tế và phát triển bền vững.",
    tags: ["Kinh tế", "Nghiên cứu", "Chính sách"], color: "violet",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>,
    title: "Tiến sĩ Kinh tế", duration: "3–4 năm", credits: "90 tín chỉ",
    description: "Chương trình đào tạo nhà nghiên cứu và giảng viên đại học với luận án tiến sĩ đạt chuẩn quốc tế.",
    tags: ["Tiến sĩ", "Nghiên cứu", "Học thuật"], color: "emerald",
  },
];

const advantages = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
    title: "Nghiên cứu chuyên sâu",
    description: "Tham gia các đề tài nghiên cứu cấp bộ, cấp nhà nước với hướng dẫn từ các giáo sư đầu ngành.",
    accent: "orange",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25" /></svg>,
    title: "Cơ hội nghề nghiệp",
    description: "Mở rộng cơ hội thăng tiến trong doanh nghiệp, tổ chức quốc tế hoặc giảng dạy tại các trường đại học.",
    accent: "cyan",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" /></svg>,
    title: "Mạng lưới quốc tế",
    description: "Kết nối với các trường đại học đối tác tại Nhật Bản, Hàn Quốc, Úc và châu Âu cho nghiên cứu hợp tác.",
    accent: "violet",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Hỗ trợ tài chính",
    description: "Học bổng nghiên cứu, trợ giảng và hỗ trợ tài chính cho học viên xuất sắc trong suốt quá trình học.",
    accent: "emerald",
  },
];

const HeroImage = () => {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <div ref={ref} className={`rounded-2xl overflow-hidden mb-10 shadow-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <img src={labImg} alt="Hội nghị khoa học" className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  );
};

export const GraduateProgram = () => (
  <AdmissionsLayout
    title="Thạc Sĩ & Tiến Sĩ"
    subtitle="Chương trình sau đại học chất lượng cao, đào tạo nhà nghiên cứu và chuyên gia hàng đầu trong lĩnh vực kinh tế"
    badge="Sau đại học"
  >
    <HeroImage />
    <StatBanner stats={stats} />

    <SectionTitle title="Chương Trình Đào Tạo" subtitle="Nâng cao chuyên môn với các chương trình được kiểm định quốc tế" />
    <div className="grid md:grid-cols-2 gap-5 mb-14">
      {masterPrograms.map((p, i) => (
        <ProgramCard key={p.title} {...p} delay={i * 80} />
      ))}
    </div>

    <SectionTitle title="Ưu Điểm Nổi Bật" subtitle="Lý do chọn chương trình sau đại học tại trường" />
    <div className="grid md:grid-cols-2 gap-5 mb-8">
      {advantages.map((a, i) => (
        <InfoCard key={a.title} {...a} delay={i * 80} />
      ))}
    </div>

    <CTABanner
      title="Nâng tầm sự nghiệp của bạn"
      description="Đăng ký chương trình sau đại học để mở rộng kiến thức chuyên môn và cơ hội nghề nghiệp."
      buttonText="Tìm hiểu thêm"
      buttonLink="/tuyen-sinh"
    />
  </AdmissionsLayout>
);
