import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@/components/Button'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center px-5 py-4 lg:px-8">
        <NavLink to="/" className="mr-auto flex items-center gap-2 text-lg font-bold tracking-tight text-slate-950" onClick={() => setIsMenuOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-indigo-600 text-sm text-white">F</span>
          FlowPilot
        </NavLink>
        <div className="hidden items-center gap-7 md:flex">
          {navigation.slice(1).map(({ label, to }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>
              {label}
            </NavLink>
          ))}
          <Button to="/contact" size="sm">Start a conversation</Button>
        </div>
        <button type="button" className="rounded-md p-2 text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-5 shadow-lg md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navigation.map(({ label, to }) => (
                <NavLink key={to} to={to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'}`}>
                  {label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-3" onClick={() => setIsMenuOpen(false)}>Start a conversation</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
