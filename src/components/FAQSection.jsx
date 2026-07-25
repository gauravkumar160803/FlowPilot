import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

function FAQSection({ faqs, title = 'Questions, answered', description = 'Everything you need to know about FlowPilot.' }) {
  return <section><SectionHeading eyebrow="FAQ" title={title} description={description} /><div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">{faqs.map(({ answer, question }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="max-w-2xl pt-4 leading-7 text-slate-600">{answer}</p></details>)}</div></section>
}

export default FAQSection
