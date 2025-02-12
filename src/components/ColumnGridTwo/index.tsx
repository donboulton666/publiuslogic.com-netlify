import * as React from 'react'
import { ReactNode, FC } from 'react'

interface ColumnGridTwoProps {
  children?: ReactNode
}

const ColumnGridTwo: FC<ColumnGridTwoProps> = props => {
  const { children } = props
  return (
    <>
      <div className="flex flex-wrap items-center">{children}</div>
    </>
  )
}

export default ColumnGridTwo
