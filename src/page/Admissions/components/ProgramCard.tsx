import { useAnimateOnScroll } from "./useAnimateOnScroll";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
  credits: string;
  description: string;
  tags: string[];
  delay?: number;
  color?: string;
}

const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
  orange: { border: "hover:border-orange-400", bg: "bg-orange-50", text: "text-orange-600", tag: "bg-orange-50 text-orange-600" },
  cyan:   { border: "hover:border-cyan-400",   bg: "bg-cyan-50",   text: "text-cyan-600",   tag: "bg-cyan-50 text-cyan-600" },
  violet: { border: "hover:border-violet-400", bg: "bg-violet-50", text: "text-violet-600", tag: "bg-violet-50 text-violet-600" },
  emerald:{ border: "hover:border-emerald-400",bg: "bg-emerald-50",text: "text-emerald-600",tag: "bg-emerald-50 text-emerald-600" },
  rose:   { border: "hover:border-rose-400",   bg: "bg-rose-50",   text: "text-rose-600",   tag: "bg-rose-50 text-rose-600" },
  blue:   { border: "hover:border-blue-400",   bg: "bg-blue-50",   text: "text-blue-600",   tag: "bg-blue-50 text-blue-600" },
};

export const ProgramCard = ({ icon, title, duration, credits, description, tags, delay = 0, color = "orange" }: ProgramCardProps) => {
  const { ref, visible } = useAnimateOnScroll();
  const c = colorMap[color] || colorMap.orange;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border-2 border-gray-100 ${c.border} p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.text} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 leading-snug">{title}</h3>
          <div className="flex items-center gap-3 mt-1 text-xs text-gray-400 font-medium">
            <span>{duration}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{credits}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${c.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
