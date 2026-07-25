import { ArrowRight } from 'lucide-react'
import Button from '@/components/Button'
import Container from '@/components/Container'

function CTASection({ title = 'Ready to make work flow?', description = 'See how FlowPilot can turn your most important processes into a competitive advantage.' }) {
  return <section className="py-20"><Container><div className="overflow-hidden rounded-3xl bg-indigo-600 px-7 py-14 text-center text-white shadow-xl sm:px-12"><p className="text-sm font-bold uppercase tracking-widest text-indigo-200">Move with momentum</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2><p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-indigo-100">{description}</p><Button to="/contact" variant="light" className="mt-8">Talk to an expert <ArrowRight className="ml-2 size-4" aria-hidden="true" /></Button></div></Container></section>
}

export default CTASection
