function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.26em] text-sky-100/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-[11px]">
        {eyebrow}
      </span>
      <h2 className="mt-5 max-w-[18ch] font-display text-[2rem] leading-[1.08] text-white sm:text-[2.4rem] lg:text-[2.72rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-8 text-slate-200/[0.82] sm:text-[1.03rem]">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
