import * as React from 'react'
import { ReactNode, FC } from 'react'

export interface ListGridProps {
  children: ReactNode
  rest: boolean
}

const ListGrid: FC<ListGridProps> = (props) => {
  const { children, ...rest } = props
  return (
    <div
      className="mb-4 mt-10 space-y-12 text-slate-900 dark:text-slate-200 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:grid-cols-3"
      {...rest}
    >
      {children}
    </div>
  )
}

export default ListGrid
