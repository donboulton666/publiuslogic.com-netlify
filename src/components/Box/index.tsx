'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import Bio from '../Bio'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
import BoxWrapper from './box-wrapper'

interface BoxProps {
  children: ReactNode
}

const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

function Box({ children }: BoxProps) {
  const BoxContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref6, isVisible6] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const variants6 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -300,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section variants={BoxContainer}>
        <m.div
          ref={ref6}
          variants={variants6}
          animate={isVisible6 ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl"
        >
          <span className="filter: blur(140px); transform: translate3d(0px, 0px, 0px) pointer-events-none absolute top-0 -z-10 block h-[50%] w-[50%] rounded-none bg-[#4571FF] opacity-30"></span>
          <span className="filter: blur(140px); transform: translate3d(0px, 0px, 0px) pointer-events-none absolute bottom-0 right-0 -z-10 block h-[50%] w-[50%] rounded-none bg-[#EA1EB1] opacity-25"></span>
          <figure className="bg-bg-2/40 relative flex items-center justify-center rounded-2xl px-8 pb-6 pt-8 backdrop-blur-xl sm:py-11">
            <div className="text-content text-text-2 before:text-text-3 relative before:absolute before:-left-6 before:-top-1 before:text-[52px] before:content-['“']">
              {children}
              <figcaption className="text-text-2 mt-5 inline-flex items-center gap-4 text-sm">
                <BoxWrapper>
                  <Bio />
                </BoxWrapper>
              </figcaption>
            </div>
          </figure>
        </m.div>
      </m.section>
    </LazyMotion>
  )
}

export default Box
