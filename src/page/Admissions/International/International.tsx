import { AdmissionsLayout } from "../components/AdmissionsLayout";
import { StatBanner } from "../components/StatBanner";
import { SectionTitle } from "../components/SectionTitle";
import { InfoCard } from "../components/InfoCard";
import { TimelineStep } from "../components/TimelineStep";
import { CTABanner } from "../components/CTABanner";
import { useAnimateOnScroll } from "../components/useAnimateOnScroll";
import exchangeImg from "../../../assets/Trao-doi-SVQT-Viet-Trung-scaled.jpg";

const stats = [
  { value: 30, suffix: "+", label: "Đối tác quốc tế" },
  { value: 15, label: "Quốc gia" },
  { value: 200, suffix: "+", label: "SV trao đổi/năm" },
  { value: 5, label: "Chương trình liên kết" },
];

const partnerRegions = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
    title: "Nhật Bản",
    description: "Hợp tác với Đại học Tokyo, Osaka University và Waseda University. Chương trình trao đổi 1 học kỳ và thực tập doanh nghiệp.",
    accent: "red",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    title: "Hàn Quốc",
    description: "Đối tác với Seoul National University, KAIST và Yonsei University. Học bổng toàn phần cho sinh viên xuất sắc.",
    accent: "blue",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21" /></svg>,
    title: "Úc & New Zealand",
    description: "Liên kết với University of Melbourne, UNSW và University of Auckland. Chương trình 2+2 lấy bằng kép.",
    accent: "emerald",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" /></svg>,
    title: "Châu Âu",
    description: "Hợp tác với các trường tại Pháp, Đức, Hà Lan. Chương trình Erasmus+ và học bổng chính phủ châu Âu.",
    accent: "indigo",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" /></svg>,
    title: "Đông Nam Á",
    description: "Mạng lưới ASEAN University Network với các trường tại Singapore, Thái Lan, Malaysia và Philippines.",
    accent: "amber",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
    title: "Bắc Mỹ",
    description: "Đối tác với các trường tại Hoa Kỳ và Canada. Chương trình thực tập OPT và cơ hội nghiên cứu.",
    accent: "violet",
  },
];

const applicationSteps = [
  { title: "Liên hệ Phòng Hợp tác Quốc tế", description: "Trao đổi với cố vấn để chọn chương trình phù hợp với mục tiêu học tập và nghề nghiệp.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97" /></svg> },
  { title: "Chuẩn bị hồ sơ & Chứng chỉ ngoại ngữ", description: "Chuẩn bị IELTS/TOEFL, bảng điểm, CV, thư động lực và thư giới thiệu từ giảng viên.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375" /></svg> },
  { title: "Nộp đơn & Phỏng vấn", description: "Nộp hồ sơ qua hệ thống trực tuyến. Một số chương trình yêu cầu phỏng vấn trực tuyến với trường đối tác.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg> },
  { title: "Nhận kết quả & Chuẩn bị xuất cảnh", description: "Nhận thư chấp nhận, xin visa, đặt vé máy bay và tham gia buổi định hướng trước khi lên đường.", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg> },
];

const HeroImage = () => {
  const { ref, visible } = useAnimateOnScroll();
  return (
    <div ref={ref} className={`rounded-2xl overflow-hidden mb-10 shadow-lg transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <img src={exchangeImg} alt="Trao đổi sinh viên quốc tế" className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  );
};

export const International = () => (
  <AdmissionsLayout
    title="Tuyển Sinh Quốc Tế"
    subtitle="Mở rộng tầm nhìn toàn cầu với hơn 30 đối tác quốc tế tại 15 quốc gia, chương trình trao đổi và học bổng hấp dẫn"
    badge="Quốc tế"
  >
    <HeroImage />
    <StatBanner stats={stats} />

    <SectionTitle title="Đối Tác Theo Khu Vực" subtitle="Mạng lưới hợp tác rộng khắp 5 châu lục" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
      {partnerRegions.map((r, i) => (
        <InfoCard key={r.title} {...r} delay={i * 80} />
      ))}
    </div>

    <SectionTitle title="Quy Trình Đăng Ký" subtitle="Hành trình đến với chương trình quốc tế" />
    <div className="mb-8">
      {applicationSteps.map((step, i) => (
        <TimelineStep key={step.title} step={i + 1} {...step} isLast={i === applicationSteps.length - 1} />
      ))}
    </div>

    <CTABanner
      title="Khám phá thế giới cùng chúng tôi"
      description="Đăng ký tư vấn miễn phí để tìm hiểu chương trình quốc tế phù hợp nhất với bạn."
      buttonText="Đăng ký tư vấn"
      buttonLink="/tuyen-sinh"
    />
  </AdmissionsLayout>
);
