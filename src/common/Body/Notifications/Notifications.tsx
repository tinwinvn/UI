import { useState } from "react";
import NotificationIcon from "../../../assets/megaphone-02-stroke-rounded.svg";
import { CATEGORY_BADGE, CATEGORY_BAR, type NotifItem } from "./type";

const ALL_ITEMS: NotifItem[] = [
  {
    id: 1,
    title: "Lịch thi học kỳ 2 năm học 2025–2026 đã được cập nhật chính thức",
    date: "15/04/2026",
    status: "new",
    category: "Lịch thi",
  },
  {
    id: 2,
    title: "Thông báo nộp học phí học kỳ 2 — hạn chót ngày 30/04/2026",
    date: "14/04/2026",
    status: "new",
    category: "Thông báo",
  },
  {
    id: 3,
    title: "Kết quả xét học bổng khuyến khích học tập học kỳ 1 đợt 1 đã có",
    date: "13/04/2026",
    status: "new",
    category: "Học bổng",
  },
  {
    id: 4,
    title: "Ngày hội việc làm Xuân 2026 diễn ra ngày 20/04 tại Hội trường A",
    date: "12/04/2026",
    status: "new",
    category: "Sự kiện",
  },
  {
    id: 5,
    title: "Đăng ký môn học học kỳ 3 năm 2026 bắt đầu từ ngày 18/04",
    date: "11/04/2026",
    status: "new",
    category: "Đào tạo",
  },
  {
    id: 6,
    title: "Thời khóa biểu tuần 15 (13–19/04) điều chỉnh một số phòng học",
    date: "10/04/2026",
    status: "old",
    category: "Đào tạo",
  },
  {
    id: 7,
    title: "Thông báo nghỉ lễ 30/4 và 1/5 — sinh viên lưu ý lịch học bù",
    date: "08/04/2026",
    status: "old",
    category: "Thông báo",
  },
  {
    id: 8,
    title: "Học bổng Chính phủ Nhật Bản MEXT 2026 — Hạn nộp hồ sơ 15/05",
    date: "06/04/2026",
    status: "old",
    category: "Học bổng",
  },
  {
    id: 9,
    title: "Hội thảo kỹ năng mềm & hướng nghiệp dành cho sinh viên năm cuối",
    date: "04/04/2026",
    status: "old",
    category: "Sự kiện",
  },
  {
    id: 10,
    title: "Cập nhật quy chế đào tạo theo học chế tín chỉ áp dụng từ HK3/2026",
    date: "01/04/2026",
    status: "old",
    category: "Đào tạo",
  },
];

const INITIAL_SHOW = 5;

export const Notifications = () => {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = ALL_ITEMS.length - INITIAL_SHOW;
  const initialItems = ALL_ITEMS.slice(0, INITIAL_SHOW);
  const extraItems = ALL_ITEMS.slice(INITIAL_SHOW);
  const newCount = ALL_ITEMS.filter((n) => n.status === "new").length;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="bg-[#0054a5] px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <img
            src={NotificationIcon}
            className="w-5 h-5 brightness-0 invert opacity-90"
            alt="icon"
          />
          <h2 className="text-white font-bold tracking-wider text-base uppercase">
            Thông Báo
          </h2>
        </div>
        {newCount > 0 && (
          <span className="flex items-center gap-1.5 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {newCount} mới
          </span>
        )}
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-y-auto divide-y divide-gray-50">
        {initialItems.map((item, i) => (
          <NotifRow key={item.id} item={item} index={i} />
        ))}

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-150" : "max-h-0"
          }`}
        >
          <div className="divide-y divide-gray-50">
            {extraItems.map((item, i) => (
              <NotifRow
                key={item.id}
                item={item}
                index={INITIAL_SHOW + i}
                animated={expanded}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 p-3 border-t border-gray-100 bg-gray-50/50 flex gap-2">
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold
                       hover:border-[#0054a5] hover:text-[#0054a5] hover:bg-blue-50
                       transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {expanded ? "Thu gọn" : `Xem thêm ${hiddenCount} thông báo`}
          </button>
        )}
        <button
          className="flex-1 py-2 rounded-lg bg-[#0054a5] text-white text-sm font-semibold
                     hover:bg-[#164478] transition-all duration-200 cursor-pointer"
        >
          Tất cả thông báo →
        </button>
      </div>
    </div>
  );
};

function NotifRow({
  item,
  index,
  animated = true,
}: {
  item: NotifItem;
  index: number;
  animated?: boolean;
}) {
  return (
    <div
      className="group flex gap-3 px-4 py-3.5 hover:bg-blue-50/50 transition-all duration-200
                 cursor-pointer relative overflow-hidden"
      style={
        animated
          ? { animation: `slideUp 0.4s ease-out ${index * 50}ms both` }
          : undefined
      }
    >
      <div
        className={`w-1 shrink-0 rounded-full self-stretch ${CATEGORY_BAR[item.category]}`}
      />

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_BADGE[item.category]}`}
          >
            {item.category}
          </span>
          <span className="text-[11px] text-gray-400">{item.date}</span>
          {item.status === "new" && (
            <span className="relative flex h-2 w-2 ml-auto shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
          )}
        </div>

        <p
          className={`text-[13.5px] leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#0054a5]
            ${item.status === "new" ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}
        >
          {item.title}
        </p>
      </div>

      <svg
        className="w-4 h-4 text-[#0054a5] shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
