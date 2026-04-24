type SectionHeaderProps = {
  tag: string;
  title: string;
  description: string;
};

export const SectionHeader = ({ tag, title, description }: SectionHeaderProps) => (
  <div className="text-center mb-12">
    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#0054a5] mb-3">
      {tag}
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      {title}
    </h2>
    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);
