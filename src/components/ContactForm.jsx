import { useState } from 'react'
import Button from '@/components/Button'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true) }
  if (submitted) return <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8" role="status"><h2 className="text-xl font-bold text-emerald-950">Thanks—we’ll be in touch shortly.</h2><p className="mt-2 text-emerald-800">A FlowPilot specialist will follow up within one business day.</p></div>
  return <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><Field id="first-name" label="First name" /><Field id="last-name" label="Last name" /></div><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field id="work-email" label="Work email" type="email" /><Field id="company" label="Company" /></div><div className="mt-5"><label className="text-sm font-semibold text-slate-800" htmlFor="message">How can we help?</label><textarea id="message" name="message" required rows="5" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" /></div><p className="mt-4 text-xs leading-5 text-slate-500">By submitting this form, you agree to be contacted about FlowPilot.</p><Button type="submit" className="mt-6 w-full sm:w-auto">Send message</Button></form>
}

function Field({ id, label, type = 'text' }) { const autoComplete = { 'first-name': 'given-name', 'last-name': 'family-name', 'work-email': 'email', company: 'organization' }[id]; return <div><label className="text-sm font-semibold text-slate-800" htmlFor={id}>{label}</label><input id={id} name={id} type={type} required autoComplete={autoComplete} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100" /></div> }

export default ContactForm
