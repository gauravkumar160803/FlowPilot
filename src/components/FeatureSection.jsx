import SectionHeading from '@/components/SectionHeading'

function FeatureSection({ eyebrow, title, description, features }) {
  return <section><SectionHeading eyebrow={eyebrow} title={title} description={description} /><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map(({ description: featureDescription, icon: Icon, title }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1"><span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><Icon className="size-5" aria-hidden="true" /></span><h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3><p className="mt-2 leading-7 text-slate-600">{featureDescription}</p></article>)}</div></section>
}

export default FeatureSection
