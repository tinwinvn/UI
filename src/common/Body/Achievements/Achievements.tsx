import { useState, useEffect, useRef } from "react";
import type { Stat } from "./type";
import { StatCard } from "./StatCard";

const STATS: Stat[] = [
  {
    id: 1,
    value: 15,
    suffix: "+",
    label: "Chương Trình Đào Tạo",
    sublabel: "AACSB & AUN-QA Accredited",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Công Trình Nghiên Cứu",
    sublabel: "Công bố quốc tế hàng năm",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    value: 10000,
    suffix: "+",
    label: "Sinh Viên",
    sublabel: "Từ 30+ quốc gia trên thế giới",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    value: 200,
    suffix: "+",
    label: "Đối Tác Toàn Cầu",
    sublabel: "Doanh nghiệp & Trường đại học",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-linear-to-br from-[#f5f7fa] to-[#e8f0fb] py-12 md:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-14 ${inView ? "animate-slide-up" : "opacity-0"}`}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0054a5] mb-3">
            Con số biết nói
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Trường Đại Học Kinh Tế Đà Nẵng là một trong những trường kinh tế
            hàng đầu miền Trung, với bề dày hơn 50 năm đào tạo và nghiên cứu
            khoa học, cam kết mang lại môi trường học tập tiên tiến và cơ hội
            phát triển toàn diện cho sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
