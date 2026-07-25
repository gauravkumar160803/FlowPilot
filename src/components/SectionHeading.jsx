function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-600">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  )
}

export default SectionHeading
