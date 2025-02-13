import * as React from 'react'
import { ReactNode } from 'react'

interface BoldTextProps {
  children?: ReactNode
}

const BoldText = ({ children, ...delegated }: BoldTextProps) => {
  return (
    <>
      <div
        className="justify-left flex text-2xl italic text-slate-300 underline decoration-wine-200 decoration-wavy underline-offset-8 transition duration-300 dark:text-slate-300 dark:decoration-wine-200"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default BoldText
