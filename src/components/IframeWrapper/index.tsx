import * as React from 'react'
import { ReactNode, FC } from 'react'

interface IframeWrapperProps {
  children?: ReactNode
}

const IframeWrapper: FC<IframeWrapperProps> = props => {
  const { children, ...delegated } = props
  return (
    <>
      <div
        className="aspect-video w-full max-w-screen-md flex-initial rounded-lg border-2 border-wine-300 bg-[#121212] p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default IframeWrapper
