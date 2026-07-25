import { Quote, Star } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

function TestimonialSection({ testimonials }) {
  return <section><SectionHeading eyebrow="Customer stories" title="Made for teams that refuse busywork" description="Operations leaders use FlowPilot to create calm, connected workdays." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map(({ company, name, quote, role }) => <figure key={name} className="rounded-2xl bg-slate-950 p-7 text-white"><Quote className="size-7 text-indigo-300" aria-hidden="true" /><blockquote className="mt-5 text-lg leading-8">“{quote}”</blockquote><div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5"><figcaption><p className="font-bold">{name}</p><p className="mt-1 text-sm text-slate-400">{role}, {company}</p></figcaption><div className="flex text-amber-300" aria-label="Five star rating">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-3.5 fill-current" aria-hidden="true" />)}</div></div></figure>)}</div></section>
}

export default TestimonialSection
