import { useAnimateOnScroll } from "./useAnimateOnScroll";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

export const TimelineStep = ({
  step,
  title,
  description,
  icon,
  isLast = false,
}: TimelineStepProps) => {
  const { ref, visible } = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`flex items-start gap-5 transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${step * 100}ms` }}
    >
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-orange-200/50">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[40px] bg-linear-to-b from-orange-300 to-cyan-200 mt-2" />
        )}
      </div>

      <div className="pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-orange-500">{icon}</span>
          <h4 className="font-bold text-gray-900">{title}</h4>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
