import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'

interface AProps {
  href: string
  external?: boolean
  className?: string
  children: ReactNode
}

export default function A({ href, external = false, className, children }: AProps) {
  if (external) {
    return (
      <Link
        key={href}
        to={href}
        className={`text-slate-200 hover:text-wine-300 dark:text-slate-200 ${className}`}
        rel="me"
        target="_blank"
        area-label="Social Link"
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        key={href}
        to={href}
        rel="me"
        target="_blank"
        className={`text-slate-200 hover:text-wine-300 dark:text-slate-200 ${className}`}
        activeClassName="active"
      >
        {children}
      </Link>
    )
  }
}
