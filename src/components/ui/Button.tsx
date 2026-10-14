import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  external?: boolean
}

export default function Button({ href, children, external = true }: ButtonProps) {
  return (
    <a
      className="btn"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  )
}
