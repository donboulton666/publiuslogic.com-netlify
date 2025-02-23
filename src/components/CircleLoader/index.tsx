import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'
// @ts-ignore
const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

const containerStyle = {
  position: 'relative',
  width: '3rem',
  height: '3rem',
  boxSizing: 'border-box',
}

const circleStyle = {
  display: 'block',
  width: '3rem',
  height: '3rem',
  border: '0.5rem solid #e9e9e9',
  borderTop: '0.5rem solid #3498db',
  borderRadius: '50%',
  position: 'absolute',
  boxSizing: 'border-box',
  top: 0,
  left: 0,
}

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
}

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <LazyMotion features={loadFeatures}>
        <m.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition} />
      </LazyMotion>
    </div>
  )
}
