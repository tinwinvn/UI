import { Children } from "react";
import { OrgNodeBox } from "./OrgNodeBox";
import { VerticalLine } from "./Connector";

interface OrgGroupProps {
  label: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
  children?: React.ReactNode;
}

export const OrgGroup = ({
  label,
  icon,
  color = "bg-[#0054a5]",
  delay = 0,
  children,
}: OrgGroupProps) => {
  const childCount = Children.count(children);
  const childArray = Children.toArray(children);

  return (
    <div className="flex flex-col items-center">
      <OrgNodeBox label={label} icon={icon} color={color} delay={delay} />

      {childCount > 0 && (
        <>
          <VerticalLine delay={delay + 100} />

          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${childCount}, minmax(0, 1fr))`,
              gap: 0,
            }}
          >
            {childCount > 1 && (
              <div
                className="absolute top-0 h-0.5 bg-slate-300 rounded-full animate-grow-x origin-center"
                style={{
                  left: `calc(100% / ${childCount} / 2)`,
                  right: `calc(100% / ${childCount} / 2)`,
                  animationDelay: `${delay + 150}ms`,
                }}
              />
            )}

            {childArray.map((child, i) => (
              <div key={i} className="flex flex-col items-center px-1.5">
                <VerticalLine delay={delay + 200 + i * 50} />
                {child}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
