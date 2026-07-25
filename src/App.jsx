import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/layouts/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))
const PricingPage = lazy(() => import('@/pages/PricingPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return (
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-slate-950 text-white" role="status" aria-live="polite">Loading FlowPilot...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
