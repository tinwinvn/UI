import type { QuickLink } from "./type";

export const QuickLinkCard = ({
  link,
  index,
}: {
  link: QuickLink;
  index: number;
}) => (
  <button
    className={`group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-white
                transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1.5
                w-full ${link.colorClass}`}
    style={{ animation: `scaleIn 0.4s ease-out ${index * 60}ms both` }}
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 ${link.iconBg}`}
    >
      <div className="w-7 h-7 [&>svg]:w-7 [&>svg]:h-7">{link.icon}</div>
    </div>
    <p className="text-sm font-bold text-gray-800 group-hover:text-inherit leading-tight">
      {link.label}
    </p>
    <p className="text-[11px] text-gray-500 leading-tight mt-1 line-clamp-2">
      {link.desc}
    </p>
  </button>
);
