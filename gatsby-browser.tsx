import * as React from 'react'
import { useState } from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'
import { MDXEmbedProvider } from 'mdx-embed'
import { AnimatePresence } from 'framer-motion'
import { createClient } from './supabase/supabaseClient'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { Database } from './src/lib/database.types'
import './src/styles/global.css'
import '@fontsource/eb-garamond'

const options = {
  auth: {
    localStorage: true,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
}

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return
  ;<MDXEmbedProvider>
    <SessionContextProvider supabaseClient={supabase}>
      <AnimatePresence wait>{element}</AnimatePresence>
    </SessionContextProvider>
  </MDXEmbedProvider>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)

  if (answer === true) {
    window.location.reload()
  }
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined
  setTimeout(() => {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', { page_path: pagePath })
    }
  }, 100)
}

export const wrapRootElement = wrap

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.theme = 'light'

localStorage.theme = 'dark'

localStorage.removeItem('theme')
