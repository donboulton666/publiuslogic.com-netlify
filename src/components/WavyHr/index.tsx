import * as React from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

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
            className="mb-2 mt-2 text-center"
          >
            <svg
              width="800px"
              height="6px"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="text-wine-200"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#70002a"
                d="M27 23c-2.589 0-4.005-2.549-5.374-5.014C20.537 16.026 19.411 14 18 14c-1.412 0-2.537 2.026-3.626 3.986C13.004 20.451 11.588 23 9 23c-2.65 0-3.853-2.706-4.914-5.094C3.038 15.546 2.256 14 1 14a1 1 0 0 1 0-2c2.65 0 3.853 2.706 4.914 5.094C6.962 19.453 7.744 21 9 21c1.412 0 2.537-2.026 3.626-3.986C13.996 14.549 15.412 12 18 12c2.589 0 4.005 2.549 5.374 5.014C24.463 18.974 25.589 21 27 21c1.256 0 2.037-1.547 3.086-3.906C31.147 14.706 32.351 12 35 12a1 1 0 1 1 0 2c-1.256 0-2.037 1.546-3.086 3.906C30.853 20.294 29.649 23 27 23z"
              ></path>
            </svg>
          </m.div>
        </m.section>
      </LazyMotion>
    </>
  )
}

export default WavyHr
