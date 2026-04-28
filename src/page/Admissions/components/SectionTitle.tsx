interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-1 h-7 rounded-full bg-linear-to-b from-orange-500 to-cyan-500" />
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-sm text-gray-500 ml-[19px] mt-1">{subtitle}</p>}
  </div>
);
