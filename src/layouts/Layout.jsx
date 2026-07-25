import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <a href="#main-content" className="sr-only z-[60] rounded-md bg-white px-4 py-2 font-semibold text-indigo-700 shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a>
      <Navbar />
      <div id="main-content" tabIndex={-1} className="flex-1"><Outlet /></div>
      <Footer />
    </div>
  )
}

export default Layout
