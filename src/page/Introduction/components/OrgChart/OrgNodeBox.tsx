import { useInView } from "./useInView";

interface OrgNodeBoxProps {
  label: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

export const OrgNodeBox = ({
  label,
  icon,
  color = "bg-[#0054a5]",
  delay = 0,
}: OrgNodeBoxProps) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`${color} text-white rounded-xl px-5 py-3 shadow-md
                    flex items-center gap-2 relative z-10
                    hover:shadow-lg hover:scale-105 transition-all duration-200`}
      >
        {icon}
        <span className="text-sm font-bold whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
};
