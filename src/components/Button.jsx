import { Link } from 'react-router-dom'

const styles = { primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm', secondary: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50', light: 'bg-white text-indigo-700 hover:bg-indigo-50' }
const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-5 py-3 text-sm' }

function Button({ children, className = '', size = 'md', to, variant = 'primary', ...props }) {
  const classNames = `inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${styles[variant]} ${sizes[size]} ${className}`
  if (to) return <Link to={to} className={classNames} {...props}>{children}</Link>
  return <button type="button" className={classNames} {...props}>{children}</button>
}

export default Button
