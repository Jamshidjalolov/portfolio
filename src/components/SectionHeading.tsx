type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        <span className="text-hover-accent">{title}</span>
      </h2>
      <p className="mt-4 text-[0.98rem] leading-7 text-slate-300 sm:text-lg sm:leading-8">{description}</p>
    </div>
  );
}

export default SectionHeading;
