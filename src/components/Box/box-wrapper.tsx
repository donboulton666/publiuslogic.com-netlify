'use client'

import * as React from 'react'
import { ReactNode } from 'react'

interface BoxWrapperProps {
  children?: ReactNode
}

const BoxWrapper = ({ children }: BoxWrapperProps) => {
  return (
    <div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  )
}

export default BoxWrapper
