import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-bold text-white">
            <span className="grid size-8 place-items-center rounded-lg bg-indigo-500 text-sm">F</span> FlowPilot
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">The AI workflow platform that keeps your teams moving with clarity and momentum.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div><h2 className="text-sm font-semibold text-white">Product</h2><ul className="mt-4 space-y-3 text-sm"><li><Link className="hover:text-white" to="/product">Product overview</Link></li><li><Link className="hover:text-white" to="/pricing">Pricing</Link></li></ul></div>
          <div><h2 className="text-sm font-semibold text-white">Company</h2><ul className="mt-4 space-y-3 text-sm"><li><Link className="hover:text-white" to="/contact">Contact</Link></li><li><a className="hover:text-white" href="mailto:hello@flowpilot.example">hello@flowpilot.example</a></li></ul></div>
          <div><h2 className="text-sm font-semibold text-white">Resources</h2><ul className="mt-4 space-y-3 text-sm"><li><Link className="hover:text-white" to="/product">Integrations</Link></li><li><Link className="hover:text-white" to="/contact">Support</Link></li></ul></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-800 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© {new Date().getFullYear()} FlowPilot. All rights reserved.</span>
        <a className="underline decoration-slate-600 underline-offset-4 hover:text-white" href="https://digitalheroesco.com" target="_blank" rel="noreferrer">Built for Digital Heroes Training Task</a>
      </div>
    </footer>
  )
}

export default Footer
