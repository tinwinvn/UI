import { LinkCard } from "./LinkCard";
import type { QuickLink } from "./type";

const QUICK_LINKS: QuickLink[] = [
  {
    id: 1,
    label: "Cổng Sinh Viên",
    desc: "Quản lý học tập, điểm số, thời khóa biểu",
    colorClass: "hover:border-blue-400 hover:bg-blue-50",
    iconBg:
      "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Thư Viện Điện Tử",
    desc: "120,000+ đầu sách, tài liệu học thuật",
    colorClass: "hover:border-emerald-400 hover:bg-emerald-50",
    iconBg:
      "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: "E-Learning",
    desc: "Học trực tuyến, video bài giảng",
    colorClass: "hover:border-violet-400 hover:bg-violet-50",
    iconBg:
      "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
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
  {
    id: 4,
    label: "Nghiên Cứu KH",
    desc: "Đề tài, công trình, hội thảo khoa học",
    colorClass: "hover:border-orange-400 hover:bg-orange-50",
    iconBg:
      "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Ký Túc Xá",
    desc: "Đăng ký phòng ở, dịch vụ nội trú",
    colorClass: "hover:border-sky-400 hover:bg-sky-50",
    iconBg:
      "bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Y Tế Học Đường",
    desc: "Khám sức khỏe, tư vấn y tế miễn phí",
    colorClass: "hover:border-red-400 hover:bg-red-50",
    iconBg:
      "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: 7,
    label: "Bản Đồ Campus",
    desc: "Sơ đồ tòa nhà, phòng học, tiện ích",
    colorClass: "hover:border-teal-400 hover:bg-teal-50",
    iconBg:
      "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: 8,
    label: "Hỗ Trợ IT",
    desc: "Tài khoản, phần mềm, kết nối mạng",
    colorClass: "hover:border-indigo-400 hover:bg-indigo-50",
    iconBg:
      "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 9,
    label: "Thanh Toán Học Phí",
    desc: "Tra cứu, đóng học phí trực tuyến",
    colorClass: "hover:border-pink-400 hover:bg-pink-50",
    iconBg:
      "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
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
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    id: 10,
    label: "Hợp Tác Quốc Tế",
    desc: "Trao đổi, du học, học bổng nước ngoài",
    colorClass: "hover:border-cyan-400 hover:bg-cyan-50",
    iconBg:
      "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export const Linked = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="bg-[#0054a5] px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <h2 className="text-white font-bold tracking-wider text-base uppercase">
            Liên Kết Hữu Ích
          </h2>
        </div>
        <span className="text-blue-200 text-xs font-medium">
          {QUICK_LINKS.length} dịch vụ
        </span>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {QUICK_LINKS.map((link, i) => (
            <LinkCard key={link.id} link={link} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
