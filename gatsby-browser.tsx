import * as React from 'react'
import '@fontsource/sacramento'
import '@fontsource/inter'
import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'
import { gtag, initDataLayer, install } from 'ga-gtag'

export function wrapPageElement({ element }) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <AnimatePresence onExitComplete={onExitComplete} mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  )
}

export const wrapRootElement = wrap

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm('This application has been updated. ' + 'Reload to display the latest version?')

  if (answer === true) {
    window.location.reload()
  }
}

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      initDataLayer()
      install('GTM-WLCMLLP', {
        send_page_view: true,
        optimize_id: 'G-LGV204F0PT',
        anonymize_ip: true,
        cookie_expires: 0,
      })
      gtag('event', 'page_view', 'gatsby-route-change', { page_path: pagePath })
    }
  }, 100)
}
