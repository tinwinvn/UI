import { Children } from "react";
import { VerticalLine } from "./Connector";

interface OrgBranchProps {
  children: React.ReactNode;
}

export const OrgBranch = ({ children }: OrgBranchProps) => {
  const childCount = Children.count(children);
  const childArray = Children.toArray(children);

  return (
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
          }}
        />
      )}

      {childArray.map((child, i) => (
        <div key={i} className="flex flex-col items-center">
          <VerticalLine delay={i * 80} />
          {child}
        </div>
      ))}
    </div>
  );
};
