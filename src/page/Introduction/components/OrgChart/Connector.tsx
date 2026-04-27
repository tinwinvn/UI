interface VerticalLineProps {
  height?: number;
  color?: string;
  animated?: boolean;
  delay?: number;
}

export const VerticalLine = ({
  height = 28,
  color = "#cbd5e1",
  animated = true,
  delay = 0,
}: VerticalLineProps) => (
  <div className="flex justify-center" style={{ height }}>
    <div
      className={animated ? "origin-top animate-grow-y" : ""}
      style={{
        width: 2,
        height: "100%",
        backgroundColor: color,
        borderRadius: 1,
        animationDelay: `${delay}ms`,
      }}
    />
  </div>
);

interface HorizontalBarProps {
  color?: string;
  delay?: number;
}

export const HorizontalBar = ({
  color = "#cbd5e1",
  delay = 0,
}: HorizontalBarProps) => (
  <div
    className="absolute top-0 left-0 right-0 flex justify-center animate-grow-x origin-center"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div
      style={{
        width: "100%",
        height: 2,
        backgroundColor: color,
        borderRadius: 1,
      }}
    />
  </div>
);
