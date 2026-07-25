import { Check } from 'lucide-react'
import Button from '@/components/Button'

function PricingCard({ description, features, name, popular, price }) {
  return <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm ${popular ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200'}`}>
    {popular && <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">Most popular</span>}
    <h2 className="text-xl font-bold text-slate-950">{name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p><div className="mt-6"><span className="text-4xl font-bold text-slate-950">{price}</span>{price !== 'Custom' && <span className="text-slate-500"> / user / month</span>}</div>
    <Button to="/contact" variant={popular ? 'primary' : 'secondary'} className="mt-7">{price === 'Custom' ? 'Contact sales' : 'Start a conversation'}</Button>
    <ul className="mt-7 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-700">{features.map((feature) => <li key={feature} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-indigo-600" aria-hidden="true" />{feature}</li>)}</ul>
  </article>
}

export default PricingCard
