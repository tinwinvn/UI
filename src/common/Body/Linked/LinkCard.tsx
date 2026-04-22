import type { QuickLink } from "./type";

type LinkCardProps = { link: QuickLink; index: number };

export const LinkCard = ({ link, index }: LinkCardProps) => {
  return (
    <button
      className={`group flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-white
                  transition-all duration-250 cursor-pointer hover:shadow-md hover:-translate-y-0.5
                  text-left w-full ${link.colorClass}`}
      style={{ animation: `scaleIn 0.35s ease-out ${index * 50}ms both` }}
    >
      <div
        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-250 ${link.iconBg}`}
      >
        {link.icon}
      </div>
      <div className="min-w-0">
        <p className="text-[13px] font-bold text-gray-800 group-hover:text-inherit leading-tight truncate">
          {link.label}
        </p>
        <p className="text-[11px] text-gray-500 leading-tight mt-0.5 line-clamp-1">
          {link.desc}
        </p>
      </div>
    </button>
  );
};
