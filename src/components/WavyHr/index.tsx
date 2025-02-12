import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
// @ts-ignore
const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

const WavyHr = () => {
  const WavyHrContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref7, isVisible7] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const variants7 = {
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
    <>
      <LazyMotion features={loadFeatures}>
        <m.section variants={WavyHrContainer}>
          <m.div
            ref={ref7}
            variants={variants7}
            animate={isVisible7 ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-2 mt-2 text-center text-transparent"
          >
            <hr className='text-center mx-auto text-zinc-200' />
          </m.div>
        </m.section>
      </LazyMotion>
    </>
  )
}

export default WavyHr
