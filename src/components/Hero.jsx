import { ArrowRight, CheckCircle2, Play } from 'lucide-react'
import Button from '@/components/Button'
import Container from '@/components/Container'

function Hero() {
  return (
    <section className="overflow-hidden bg-slate-950 pb-20 pt-16 text-white sm:pt-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="motion-safe:animate-[fade-in_0.45s_ease-out_both]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-sm font-medium text-indigo-200"><span className="size-2 rounded-full bg-cyan-300" /> AI-powered workflow orchestration</p>
          <h1 className="max-w-xl text-5xl font-bold tracking-tight sm:text-6xl">Workflows that move at the speed of your business.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">FlowPilot turns scattered work into intelligent, automated systems—so your teams can focus on the decisions that matter.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button to="/contact">Book a demo <ArrowRight className="ml-2 size-4" aria-hidden="true" /></Button><Button to="/product" variant="light"><Play className="mr-2 size-4 fill-current" aria-hidden="true" /> Explore the platform</Button></div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"><li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" /> No-code automation</li><li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" /> SOC 2-ready controls</li></ul>
        </div>
        <div className="relative motion-safe:animate-[fade-in_0.5s_ease-out_both]">
          <div className="absolute -inset-6 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white p-5 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live workflow</p><p className="mt-1 font-bold">Client onboarding</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Running smoothly</span></div>
            <div className="mt-5 space-y-3"><WorkflowStep number="01" label="New deal in CRM" color="bg-blue-500" /><WorkflowStep number="02" label="AI gathers account context" color="bg-indigo-500" /><WorkflowStep number="03" label="Launch onboarding plan" color="bg-cyan-500" /></div>
            <div className="mt-5 rounded-xl bg-slate-950 p-4 text-white"><p className="text-xs text-slate-400">This month</p><p className="mt-1 text-2xl font-bold">142 hours <span className="text-sm font-medium text-emerald-300">saved</span></p></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WorkflowStep({ color, label, number }) { return <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"><span className={`grid size-8 place-items-center rounded-lg ${color} text-xs font-bold text-white`}>{number}</span><span className="flex-1 text-sm font-semibold">{label}</span><span className="flex items-center gap-1 text-sm font-medium text-emerald-700"><CheckCircle2 className="size-5 text-emerald-500" aria-hidden="true" /><span className="sr-only">Complete</span></span></div> }

export default Hero
