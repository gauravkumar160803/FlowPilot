function Container({ as: Tag = 'div', children, className = '' }) {
  return <Tag className={`mx-auto w-full max-w-7xl px-5 lg:px-8 ${className}`}>{children}</Tag>
}

export default Container
