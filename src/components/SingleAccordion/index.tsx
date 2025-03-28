import * as React from 'react'
import { ReactNode, FC } from 'react'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
// @ts-ignore
const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

interface SingleAccordionProps {
  children: ReactNode
  label: string
  src?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}

const SingleAccordion: FC<SingleAccordionProps> = (props) => {
  const { children, label } = props
  const singleAccordionContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={singleAccordionContainer}>
        <div className="ml-auto mr-auto w-full px-4">
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex w-full pt-2">
              <div className="mx-auto w-full rounded-2xl p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                        <span className="text-lg">{label}</span>
                        <ChevronDownIcon
                          className={`${open ? 'rotate-180 transform' : ''} mt-1 h-5 w-5 text-slate-300`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="text-md px-4 pb-2 pt-4 text-slate-300">{children}</DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default SingleAccordion
