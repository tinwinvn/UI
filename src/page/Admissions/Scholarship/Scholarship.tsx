import { AdmissionsLayout } from "../components/AdmissionsLayout";
import { StatBanner } from "../components/StatBanner";
import { SectionTitle } from "../components/SectionTitle";
import { InfoCard } from "../components/InfoCard";
import { TimelineStep } from "../components/TimelineStep";
import { CTABanner } from "../components/CTABanner";
import { useAnimateOnScroll } from "../components/useAnimateOnScroll";

const stats = [
  { value: 500, suffix: "+", label: "Suất học bổng/năm" },
  { value: 100, suffix: "%", label: "Mức cao nhất" },
  { value: 10, suffix: "+", label: "Loại học bổng" },
  { value: 5, suffix: " tỷ+", label: "Tổng quỹ học bổng" },
];

const scholarshipTypes = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    title: "Học bổng Thủ khoa",
    description: "100% học phí toàn khóa dành cho thí sinh đạt điểm cao nhất trong kỳ thi tuyển sinh. Bao gồm hỗ trợ sinh hoạt phí hàng tháng.",
    accent: "yellow",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347" /></svg>,
    title: "Học bổng Học lực xuất sắc",
    description: "50–75% học phí cho sinh viên có GPA từ 3.6 trở lên. Được xét mỗi học kỳ dựa trên kết quả học tập.",
    accent: "blue",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
    title: "Học bổng Hoàn cảnh khó khăn",
    description: "25–50% học phí dành cho sinh viên có hoàn cảnh gia đình khó khăn nhưng có ý chí vươn lên trong học tập.",
    accent: "rose",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" /></svg>,
    title: "Học bổng Tài năng",
    description: "Dành cho sinh viên có thành tích xuất sắc trong nghiên cứu khoa học, thể thao, văn nghệ hoặc hoạt động xã hội.",
    accent: "emerald",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25" /></svg>,
    title: "Học bổng Doanh nghiệp",
    description: "Học bổng từ các doanh nghiệp đối tác như Vietcombank, KPMG, Deloitte với cam kết việc làm sau tốt nghiệp.",
    accent: "indigo",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" /></svg>,
    title: "Học bổng Quốc tế",
    description: "Học bổng trao đổi sinh viên tại các trường đại học đối tác quốc tế, bao gồm chi phí đi lại và sinh hoạt.",
    accent: "cyan",
  },
];

const applicationSteps = [
  { title: "Kiểm tra điều kiện", description: "Xem xét các tiêu chí và điều kiện của từng loại học bổng phù hợp với bản thân.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08" /></svg> },
  { title: "Chuẩn bị hồ sơ", description: "Thu thập bảng điểm, giấy chứng nhận, bài luận cá nhân và thư giới thiệu theo yêu cầu.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25" /></svg> },
  { title: "Nộp đơn trực tuyến", description: "Đăng nhập hệ thống và nộp hồ sơ xin học bổng trước thời hạn quy định.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" /></svg> },
  { title: "Phỏng vấn & Kết quả", description: "Tham gia phỏng vấn (nếu có) và nhận kết quả qua email trong vòng 2–4 tuần.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

const DeadlineBanner = () => {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <div
      ref={ref}
      className={`mb-10 rounded-2xl bg-linear-to-r from-orange-50 to-amber-50 border border-orange-200/60 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-0.5 text-sm">Hạn nộp hồ sơ học bổng 2026</h4>
        <p className="text-sm text-gray-500">
          Đợt 1: 01/03 – 30/06/2026 &nbsp;·&nbsp; Đợt 2: 01/07 – 31/08/2026
        </p>
      </div>
    </div>
  );
};

export const Scholarship = () => (
  <AdmissionsLayout
    title="Học Bổng"
    subtitle="Hơn 500 suất học bổng mỗi năm với tổng giá trị lên đến 5 tỷ đồng, hỗ trợ sinh viên hiện thực hóa ước mơ"
    badge="Học bổng 2026"
  >
    <DeadlineBanner />
    <StatBanner stats={stats} />

    <SectionTitle title="Các Loại Học Bổng" subtitle="Đa dạng chương trình hỗ trợ tài chính cho mọi đối tượng sinh viên" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
      {scholarshipTypes.map((s, i) => (
        <InfoCard key={s.title} {...s} delay={i * 80} />
      ))}
    </div>

    <SectionTitle title="Quy Trình Xin Học Bổng" subtitle="Từ chuẩn bị đến nhận kết quả" />
    <div className="mb-8">
      {applicationSteps.map((step, i) => (
        <TimelineStep key={step.title} step={i + 1} {...step} isLast={i === applicationSteps.length - 1} />
      ))}
    </div>

    <CTABanner
      title="Đừng bỏ lỡ cơ hội!"
      description="Nộp hồ sơ học bổng ngay hôm nay để nhận được hỗ trợ tài chính cho hành trình học tập của bạn."
      buttonText="Nộp hồ sơ ngay"
      buttonLink="/tuyen-sinh"
    />
  </AdmissionsLayout>
);
