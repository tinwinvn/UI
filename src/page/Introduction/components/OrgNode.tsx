import { useEffect, useRef, useState, Children } from "react";

/* ── Parent node with vertical stem → horizontal bar → vertical drops to each child ── */

interface OrgNodeProps {
  label: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
  children?: React.ReactNode;
}

export const OrgNode = ({
  label,
  icon,
  color = "bg-[#0054a5]",
  delay = 0,
  children,
}: OrgNodeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const childCount = Children.count(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Measure the horizontal bar so it spans exactly from the first child center
     to the last child center. We read the child wrapper positions after mount. */
  const [barStyle, setBarStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!visible || childCount < 2) return;
    const container = barRef.current;
    if (!container) return;

    const measure = () => {
      const wrappers = container.querySelectorAll<HTMLElement>(
        ":scope > .org-child-wrapper",
      );
      if (wrappers.length < 2) return;

      const containerRect = container.getBoundingClientRect();
      const firstCenter =
        wrappers[0].getBoundingClientRect().left +
        wrappers[0].getBoundingClientRect().width / 2 -
        containerRect.left;
      const lastCenter =
        wrappers[wrappers.length - 1].getBoundingClientRect().left +
        wrappers[wrappers.length - 1].getBoundingClientRect().width / 2 -
        containerRect.left;

      setBarStyle({
        position: "absolute",
        top: 0,
        left: firstCenter,
        width: lastCenter - firstCenter,
        height: 2,
      });
    };

    // Measure after a short delay so layout is settled
    const raf = requestAnimationFrame(() => setTimeout(measure, 60));
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [visible, childCount]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-600 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`${color} text-white rounded-xl px-5 py-3 shadow-md flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-200 relative z-10`}
      >
        {icon}
        <span className="text-sm font-bold whitespace-nowrap">{label}</span>
      </div>

      {children && childCount > 0 && (
        <>
          <div className="w-0.5 h-7 bg-gray-300" />

          <div ref={barRef} className="relative flex justify-center">
            {childCount > 1 && (
              <div className="bg-gray-300 rounded-full" style={barStyle} />
            )}

            {Children.map(children, (child, i) => (
              <div
                key={i}
                className="org-child-wrapper flex flex-col items-center px-2"
              >
                <div className="w-0.5 h-7 bg-gray-300" />
                {child}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface OrgLeafProps {
  label: string;
  delay?: number;
}

export const OrgLeaf = ({ label, delay = 0 }: OrgLeafProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white border-2 border-[#0054a5] text-[#0054a5] rounded-lg px-4 py-2 text-xs font-semibold shadow-sm hover:bg-[#0054a5] hover:text-white transition-colors duration-200 cursor-default whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

/* ── Branch wrapper: renders a horizontal bar across multiple OrgNode children
     with vertical connectors from a single stem above ── */

interface OrgBranchProps {
  children: React.ReactNode;
}

export const OrgBranch = ({ children }: OrgBranchProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const childCount = Children.count(children);
  const [barStyle, setBarStyle] = useState<React.CSSProperties>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || childCount < 2) return;
    const container = barRef.current;
    if (!container) return;

    const measure = () => {
      const wrappers = container.querySelectorAll<HTMLElement>(
        ":scope > .org-branch-child",
      );
      if (wrappers.length < 2) return;

      const containerRect = container.getBoundingClientRect();
      const firstCenter =
        wrappers[0].getBoundingClientRect().left +
        wrappers[0].getBoundingClientRect().width / 2 -
        containerRect.left;
      const lastCenter =
        wrappers[wrappers.length - 1].getBoundingClientRect().left +
        wrappers[wrappers.length - 1].getBoundingClientRect().width / 2 -
        containerRect.left;

      setBarStyle({
        position: "absolute",
        top: 0,
        left: firstCenter,
        width: lastCenter - firstCenter,
        height: 2,
      });
    };

    const raf = requestAnimationFrame(() => setTimeout(measure, 100));
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [ready, childCount]);

  return (
    <div ref={barRef} className="relative flex justify-center gap-6 flex-wrap">
      {childCount > 1 && (
        <div className="bg-gray-300 rounded-full" style={barStyle} />
      )}

      {Children.map(children, (child, i) => (
        <div key={i} className="org-branch-child flex flex-col items-center">
          <div className="w-0.5 h-7 bg-gray-300" />
          {child}
        </div>
      ))}
    </div>
  );
};
