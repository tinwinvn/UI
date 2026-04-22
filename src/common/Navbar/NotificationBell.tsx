import { useState, useRef, useEffect } from "react";
import type { NotifPreview } from "./type";

const NOTIF_PREVIEWS: NotifPreview[] = [
  {
    id: 1,
    title: "Lịch thi học kỳ 2 năm học 2025–2026 đã được cập nhật",
    date: "15/04/2026",
    isNew: true,
  },
  {
    id: 2,
    title: "Thông báo nộp học phí học kỳ 2 — hạn chót 30/04/2026",
    date: "14/04/2026",
    isNew: true,
  },
  {
    id: 3,
    title: "Kết quả xét học bổng khuyến khích học tập HK1",
    date: "13/04/2026",
    isNew: true,
  },
  {
    id: 4,
    title: "Ngày hội việc làm Xuân 2026 diễn ra ngày 20/04",
    date: "12/04/2026",
    isNew: true,
  },
  {
    id: 5,
    title: "Đăng ký môn học HK3 bắt đầu từ ngày 18/04",
    date: "11/04/2026",
    isNew: true,
  },
];

export const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const newCount = NOTIF_PREVIEWS.filter((n) => n.isNew).length;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
        aria-label="Thông báo"
      >
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {newCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-[10px] font-bold bg-red-500 text-white rounded-full animate-pulse">
            {newCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-slide-down">
          <div className="bg-[#0054a5] px-4 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm">Thông báo mới</span>
            <span className="text-blue-200 text-xs">{newCount} chưa đọc</span>
          </div>
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
            {NOTIF_PREVIEWS.map((n) => (
              <div
                key={n.id}
                className="px-4 py-3 hover:bg-blue-50/50 cursor-pointer transition-colors duration-150 flex gap-3 items-start"
              >
                {n.isNew && (
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-red-500" />
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-[13px] leading-snug line-clamp-2 ${n.isNew ? "font-semibold text-gray-900" : "text-gray-600"}`}
                  >
                    {n.title}
                  </p>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    {n.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-100 bg-gray-50/50">
            <button className="w-full py-2 text-sm font-semibold text-[#0054a5] hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer">
              Xem tất cả thông báo →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
