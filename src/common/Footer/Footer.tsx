import Logo from "../../assets/react.svg";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.17a8.16 8.16 0 0 0 4.77 1.52V7.25a4.85 4.85 0 0 1-1-.56z" />
      </svg>
    ),
  },
];

const ABOUT_LINKS = [
  "Lịch sử hình thành",
  "Kiểm định & Công nhận",
  "Ban lãnh đạo nhà trường",
  "Tham quan trường",
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0054a5] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-4">
              <img
                className="h-14 w-auto object-contain"
                src={Logo}
                alt="UEH Logo"
              />
              <div>
                <p className="text-[11px] font-light tracking-widest uppercase text-blue-200">
                  Đại Học Đà Nẵng
                </p>
                <p className="font-extrabold text-base md:text-lg leading-tight uppercase">
                  Trường Đại Học Kinh Tế
                </p>
              </div>
            </div>
            <div className="space-y-2 text-blue-100 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>71 Ngũ Hành Sơn, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0987 654 321</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>dhkt@due.edu.vn</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 pb-2 border-b border-white/20">
              Về Chúng Tôi
            </h3>
            <ul className="flex flex-col space-y-3 text-blue-100">
              {ABOUT_LINKS.map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 hover:translate-x-1 hover:text-white transition-all duration-200 cursor-pointer text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 pb-2 border-b border-white/20">
              Kết Nối Với Chúng Tôi
            </h3>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#0054a5] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-blue-200 text-sm leading-relaxed">
              Theo dõi chúng tôi để cập nhật tin tức mới nhất về tuyển sinh, sự
              kiện và hoạt động của trường.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-200">
          <p>© 2026 Trường Đại Học Kinh Tế Đà Nẵng. Bản quyền được bảo lưu.</p>
          <div className="flex gap-5">
            <span className="hover:text-white cursor-pointer transition-colors">
              Chính sách bảo mật
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Điều khoản sử dụng
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
