function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-sky-100/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-[11px] sm:tracking-[0.26em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 max-w-[18ch] font-display text-[1.86rem] leading-[1.1] text-white sm:mt-5 sm:text-[2.4rem] lg:text-[2.72rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-[42rem] text-[0.96rem] leading-7 text-slate-200/[0.82] sm:text-[1.03rem] sm:leading-8">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
