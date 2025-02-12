import * as React from 'react'
import { ReactNode, FC } from 'react'

interface CenterItemProps {
  children?: ReactNode
}

const CenterItem: FC<CenterItemProps> = props => {
  const { children, ...delegated } = props
  return (
    <>
      <div className="center items-stretch" {...delegated}>
        {children}
      </div>
    </>
  )
}

export default CenterItem
