import { AdmissionsLayout } from "../components/AdmissionsLayout";
import { StatBanner } from "../components/StatBanner";
import { SectionTitle } from "../components/SectionTitle";
import { ProgramCard } from "../components/ProgramCard";
import { TimelineStep } from "../components/TimelineStep";
import { CTABanner } from "../components/CTABanner";
import campusImg from "../../../assets/banner-ngay-tot-nghiep-15.jpg";
import { useAnimateOnScroll } from "../components/useAnimateOnScroll";

const stats = [
  { value: 15, suffix: "+", label: "Ngành đào tạo" },
  { value: 3000, suffix: "+", label: "Chỉ tiêu 2026" },
  { value: 95, suffix: "%", label: "Tỷ lệ có việc làm" },
  { value: 4, suffix: " năm", label: "Thời gian đào tạo" },
];

const programs = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75" /></svg>,
    title: "Tài chính – Ngân hàng", duration: "4 năm", credits: "130 tín chỉ",
    description: "Đào tạo chuyên gia tài chính, ngân hàng với kiến thức chuyên sâu về thị trường tài chính, quản trị rủi ro và đầu tư.",
    tags: ["Tài chính", "Ngân hàng", "Đầu tư"], color: "orange",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
    title: "Quản trị Kinh doanh", duration: "4 năm", credits: "132 tín chỉ",
    description: "Trang bị kỹ năng quản lý, lãnh đạo và khởi nghiệp. Chương trình kết hợp lý thuyết với thực tiễn doanh nghiệp.",
    tags: ["Quản trị", "Khởi nghiệp", "Marketing"], color: "cyan",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>,
    title: "Kế toán – Kiểm toán", duration: "4 năm", credits: "128 tín chỉ",
    description: "Đào tạo chuyên gia kế toán, kiểm toán đạt chuẩn quốc tế với chứng chỉ ACCA, CPA được công nhận toàn cầu.",
    tags: ["Kế toán", "Kiểm toán", "ACCA"], color: "violet",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
    title: "Hệ thống Thông tin Quản lý", duration: "4 năm", credits: "135 tín chỉ",
    description: "Kết hợp công nghệ thông tin và quản trị kinh doanh, đào tạo chuyên gia chuyển đổi số cho doanh nghiệp.",
    tags: ["CNTT", "Chuyển đổi số", "ERP"], color: "emerald",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" /></svg>,
    title: "Kinh tế Quốc tế", duration: "4 năm", credits: "130 tín chỉ",
    description: "Chương trình giảng dạy song ngữ, tập trung vào thương mại quốc tế, logistics và chuỗi cung ứng toàn cầu.",
    tags: ["Quốc tế", "Logistics", "Thương mại"], color: "rose",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>,
    title: "Kinh tế học", duration: "4 năm", credits: "128 tín chỉ",
    description: "Phân tích kinh tế vĩ mô và vi mô, chính sách công, kinh tế phát triển và kinh tế lượng ứng dụng.",
    tags: ["Kinh tế", "Chính sách", "Phân tích"], color: "blue",
  },
];

const admissionSteps = [
  { title: "Đăng ký trực tuyến", description: "Thí sinh đăng ký tài khoản và điền thông tin cá nhân trên hệ thống tuyển sinh trực tuyến của trường.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> },
  { title: "Nộp hồ sơ xét tuyển", description: "Nộp bản sao học bạ, bằng tốt nghiệp THPT, kết quả thi THPT quốc gia và các giấy tờ liên quan.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { title: "Xét tuyển & Phỏng vấn", description: "Hội đồng tuyển sinh xét duyệt hồ sơ. Một số ngành yêu cầu phỏng vấn trực tiếp hoặc bài kiểm tra năng lực.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: "Nhận kết quả & Nhập học", description: "Thí sinh trúng tuyển nhận thông báo qua email và hệ thống. Hoàn tất thủ tục nhập học và đóng học phí.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904" /></svg> },
];

const HeroImage = () => {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <div ref={ref} className={`rounded-2xl overflow-hidden mb-10 shadow-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <img src={campusImg} alt="Lễ tốt nghiệp" className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  );
};

export const RegularProgram = () => (
  <AdmissionsLayout
    title="Đại Học Chính Quy"
    subtitle="Chương trình đào tạo cử nhân 4 năm với hơn 15 ngành học, chuẩn đầu ra quốc tế và cơ hội việc làm rộng mở"
    badge="Tuyển sinh 2026"
  >
    <HeroImage />
    <StatBanner stats={stats} />

    <SectionTitle title="Các Ngành Đào Tạo" subtitle="Lựa chọn ngành học phù hợp với đam mê và năng lực của bạn" />
    <div className="grid md:grid-cols-2 gap-5 mb-14">
      {programs.map((p, i) => (
        <ProgramCard key={p.title} {...p} delay={i * 80} />
      ))}
    </div>

    <SectionTitle title="Quy Trình Xét Tuyển" subtitle="4 bước đơn giản để trở thành sinh viên" />
    <div className="mb-8">
      {admissionSteps.map((step, i) => (
        <TimelineStep key={step.title} step={i + 1} {...step} isLast={i === admissionSteps.length - 1} />
      ))}
    </div>

    <CTABanner
      title="Sẵn sàng cho hành trình mới?"
      description="Đăng ký ngay hôm nay để nhận thông tin tuyển sinh mới nhất và cơ hội học bổng hấp dẫn."
      buttonText="Đăng ký ngay"
      buttonLink="/tuyen-sinh"
    />
  </AdmissionsLayout>
);
