import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import type { MenuItem } from "./type";
import Logo from "../../assets/react.svg";
import SearchIcon from "../../assets/search-01-stroke-rounded.svg";

const premenuItems: MenuItem[] = [
  { label: "SINH VIÊN", path: "/sinh-vien" },
  { label: "GIẢNG VIÊN & CÁN BỘ", path: "/giang-vien" },
  { label: "CỰU SINH VIÊN", path: "/cuu-sinh-vien" },
  { label: "LIÊN HỆ", path: "/lien-he" },
];

const menuItems: MenuItem[] = [
  { label: "Trang chủ", path: "/" },
  {
    label: "Giới thiệu",
    path: "/gioi-thieu",
    subItems: [
      { label: "Lịch sử hình thành", path: "/lich-su" },
      { label: "Sứ mạng & Tầm nhìn", path: "/su-mang" },
      { label: "Ban lãnh đạo", path: "/lanh-dao" },
      { label: "Cơ cấu tổ chức", path: "/co-cau" },
    ],
  },
  {
    label: "Tuyển sinh",
    path: "/tuyen-sinh",
    subItems: [
      { label: "Đại học chính quy", path: "/dai-hoc-chinh-quy" },
      { label: "Thạc sĩ & Tiến sĩ", path: "/sau-dai-hoc" },
      { label: "Học bổng", path: "/hoc-bong" },
      { label: "Tuyển sinh quốc tế", path: "/tuyen-sinh-quoc-te" },
    ],
  },
  {
    label: "Đào tạo",
    path: "/dao-tao",
    subItems: [
      { label: "Chương trình đào tạo", path: "/chuong-trinh" },
      { label: "Thời khóa biểu", path: "/lich-hoc" },
      { label: "E-Learning", path: "/e-learning" },
      { label: "Thư viện điện tử", path: "/thu-vien" },
    ],
  },
  {
    label: "Hợp tác",
    path: "/hop-tac",
    subItems: [
      { label: "Đối tác doanh nghiệp", path: "/doi-tac" },
      { label: "Hợp tác quốc tế", path: "/quoc-te" },
      { label: "Ngày hội việc làm", path: "/viec-lam" },
    ],
  },
  {
    label: "Nghiên cứu",
    path: "/nghien-cuu",
    subItems: [
      { label: "Trung tâm nghiên cứu", path: "/trung-tam" },
      { label: "Công trình khoa học", path: "/cong-trinh" },
      { label: "Hội thảo khoa học", path: "/hoi-thao" },
    ],
  },
  { label: "Tuyển dụng", path: "/tuyen-dung" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="bg-[#0054a5] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img
              className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110"
              src={Logo}
              alt="UEH Logo"
            />
            <div className="leading-tight">
              <div className="text-[9px] md:text-[10px] font-light tracking-widest uppercase opacity-80">
                Đại Học Đà Nẵng
              </div>
              <div className="text-sm md:text-lg font-extrabold tracking-tight uppercase">
                Trường Đại Học Kinh Tế
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end space-y-2">
              <div className="flex space-x-5 text-[11px] font-semibold uppercase tracking-wide">
                {premenuItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  className="bg-blue-800/50 border border-blue-400 rounded-full py-1.5 px-4 pr-10 text-sm focus:outline-none focus:bg-white focus:text-blue-900 focus:w-64 transition-all duration-300 w-44 placeholder-blue-200"
                  type="text"
                  placeholder="Tìm kiếm..."
                />
                <img
                  className="absolute right-3 w-4 h-4 opacity-70 invert"
                  src={SearchIcon}
                  alt="search"
                />
              </div>
            </div>

            <div className="hidden md:flex lg:hidden relative items-center">
              <input
                className="bg-blue-800/50 border border-blue-400 rounded-full py-1.5 px-4 pr-10 text-sm focus:outline-none focus:bg-white focus:text-blue-900 transition-all duration-300 w-40 placeholder-blue-200"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <img
                className="absolute right-3 w-4 h-4 opacity-70 invert"
                src={SearchIcon}
                alt="search"
              />
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-center h-14 items-stretch">
          {menuItems.map((item) =>
            item.subItems ? (
              <div
                key={item.label}
                className="relative group/nav flex items-center"
              >
                <button
                  className="flex items-center gap-1 h-full px-4 text-[14px] font-bold uppercase tracking-tight text-gray-700
                             group-hover/nav:text-[#0054a5] transition-colors duration-200
                             border-b-2 border-transparent group-hover/nav:border-[#0054a5] cursor-pointer"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover/nav:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className="absolute top-full left-0 z-50 min-w-52 bg-white
                              shadow-xl border-t-2 border-[#0054a5] rounded-b-lg
                              opacity-0 -translate-y-1 pointer-events-none
                              group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto
                              transition-all duration-200"
                >
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.label}
                      to={sub.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700
                                 hover:bg-blue-50 hover:text-[#0054a5] hover:pl-5
                                 transition-all duration-150 border-b border-gray-50 last:border-0
                                 first:rounded-none last:rounded-b-lg cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5] opacity-60 shrink-0" />
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 text-[14px] font-bold uppercase tracking-tight transition-all duration-200 border-b-2 cursor-pointer
                  ${
                    isActive
                      ? "text-[#0054a5] border-[#0054a5]"
                      : "text-gray-700 border-transparent hover:text-[#0054a5] hover:border-[#0054a5]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>
      </div>

      <div
        className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {menuItems.map((item) =>
            item.subItems ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenSubmenu((prev) =>
                      prev === item.label ? null : item.label,
                    )
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold uppercase tracking-tight text-gray-700 hover:text-[#0054a5] hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSubmenu === item.label ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openSubmenu === item.label ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {item.subItems.map((sub) => (
                    <NavLink
                      key={sub.label}
                      to={sub.path}
                      onClick={closeMobile}
                      className="flex items-center gap-2 pl-7 pr-3 py-2.5 text-sm text-gray-600 hover:text-[#0054a5] hover:bg-blue-50 rounded-lg transition-colors duration-150 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0054a5] opacity-50 shrink-0" />
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `block px-3 py-3 text-sm font-bold uppercase tracking-tight rounded-lg transition-colors duration-200 cursor-pointer
                  ${
                    isActive
                      ? "text-[#0054a5] bg-blue-50"
                      : "text-gray-700 hover:text-[#0054a5] hover:bg-blue-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}

          <div className="pt-2 pb-1">
            <div className="relative">
              <input
                className="w-full border border-gray-200 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-[#0054a5] transition-colors"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <img
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40"
                src={SearchIcon}
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
