import { ReactNode, FC } from 'react'

interface CenterProps {
  children?: ReactNode
}

const Center: FC<CenterProps> = props => {
  const { children, ...delegated } = props

  return (
    <>
      <div
        className="mb-2 flex justify-center pb-4 text-2xl italic text-slate-800 underline decoration-wine-400 decoration-wavy underline-offset-8 transition duration-300 dark:text-slate-200 dark:decoration-slate-400"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default Center
