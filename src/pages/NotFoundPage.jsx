import Button from '@/components/Button'
import Container from '@/components/Container'
import Seo from '@/components/Seo'

function NotFoundPage() { return <><Seo title="Page not found" path="/404" description="The page you requested could not be found." /><main><Container className="grid min-h-[60vh] place-items-center py-20 text-center"><div><p className="text-sm font-bold uppercase tracking-widest text-indigo-600">404</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">That workflow doesn’t exist.</h1><p className="mt-4 text-slate-600">Let’s get you back to a page that does.</p><Button to="/" className="mt-8">Back to FlowPilot</Button></div></Container></main></> }

export default NotFoundPage
