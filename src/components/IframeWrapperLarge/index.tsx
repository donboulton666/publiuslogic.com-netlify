import * as React from 'react'
import { ReactNode, FC } from 'react'

interface IframeWrapperLargeProps {
  children?: ReactNode
}

const IframeWrapperLarge: FC<IframeWrapperLargeProps> = (props) => {
  const { children, ...delegated } = props

  return (
    <>
      <div
        className="h-[360px] w-[640px] flex-initial rounded-lg border-2 border-wine-300 bg-[#121212] p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default IframeWrapperLarge
