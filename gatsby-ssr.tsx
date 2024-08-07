import * as React from 'react'
import { wrapRootElement as wrap } from './wrap-root-element'
import { AnimatePresence } from 'framer-motion'

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

export function onRenderBody({ setHtmlAttributes, setPreBodyComponents }) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null
  setHtmlAttributes({ lang: 'en' })
  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=G-LGV204F0PT" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
    React.createElement('script', {
      key: 'gatsby-dark-mode',
      dangerouslySetInnerHTML: {
        __html: `
void function() {
  window.__onThemeChange = function() {}
  var preferredTheme
  try {
    preferredTheme = localStorage.getItem('theme')
  } catch (err) { }
  function setTheme(newTheme) {
    if (preferredTheme && document.documentElement.classList.contains(preferredTheme)) {
      document.documentElement.classList.replace(preferredTheme, newTheme)
    } else {
      document.documentElement.classList.add(newTheme)
    }
    window.__theme = newTheme
    preferredTheme = newTheme
    window.__onThemeChange(newTheme)
  }
  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) {}
  }
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  })
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
}()
    `,
      },
    }),
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=G-LGV204F0PT" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
  ])
}
