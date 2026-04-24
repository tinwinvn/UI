import { useInView } from "./useInView";

interface OrgLeafProps {
  label: string;
  color?: string;
  delay?: number;
}

export const OrgLeaf = ({
  label,
  color = "#0054a5",
  delay = 0,
}: OrgLeafProps) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="rounded-lg px-4 py-2 text-xs font-semibold shadow-sm
                   border-2 cursor-default whitespace-nowrap
                   transition-colors duration-200 text-center"
        style={{
          borderColor: color,
          color,
          backgroundColor: "white",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = color;
        }}
      >
        {label}
      </div>
    </div>
  );
};
