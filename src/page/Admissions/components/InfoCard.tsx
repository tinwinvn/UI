import { useAnimateOnScroll } from "./useAnimateOnScroll";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  accent?: string;
}

const accentStyles: Record<string, { ring: string; iconBg: string; iconText: string }> = {
  orange:  { ring: "hover:ring-orange-200",  iconBg: "bg-orange-100",  iconText: "text-orange-600" },
  cyan:    { ring: "hover:ring-cyan-200",    iconBg: "bg-cyan-100",    iconText: "text-cyan-600" },
  rose:    { ring: "hover:ring-rose-200",    iconBg: "bg-rose-100",    iconText: "text-rose-600" },
  emerald: { ring: "hover:ring-emerald-200", iconBg: "bg-emerald-100", iconText: "text-emerald-600" },
  violet:  { ring: "hover:ring-violet-200",  iconBg: "bg-violet-100",  iconText: "text-violet-600" },
  blue:    { ring: "hover:ring-blue-200",    iconBg: "bg-blue-100",    iconText: "text-blue-600" },
  amber:   { ring: "hover:ring-amber-200",   iconBg: "bg-amber-100",   iconText: "text-amber-600" },
  indigo:  { ring: "hover:ring-indigo-200",  iconBg: "bg-indigo-100",  iconText: "text-indigo-600" },
  red:     { ring: "hover:ring-red-200",     iconBg: "bg-red-100",     iconText: "text-red-600" },
  yellow:  { ring: "hover:ring-yellow-200",  iconBg: "bg-yellow-100",  iconText: "text-yellow-600" },
};

export const InfoCard = ({ icon, title, description, delay = 0, accent = "orange" }: InfoCardProps) => {
  const { ref, visible } = useAnimateOnScroll();
  const s = accentStyles[accent] || accentStyles.orange;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 ring-1 ring-gray-100 ${s.ring} hover:ring-2 hover:shadow-lg transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-11 h-11 rounded-xl ${s.iconBg} ${s.iconText} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};
