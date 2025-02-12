import * as React from 'react'
import { ReactNode } from 'react'

interface LeftProps {
  children?: ReactNode
}

const Left = ({ children, ...delegated }: LeftProps) => {

  return (
    <>
      <div className="justify-left flex items-stretch" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default Left
