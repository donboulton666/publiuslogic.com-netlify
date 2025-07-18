'use client'

import * as React from 'react'
import { useRef, useState, Fragment } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ThemeToggle from '@/components/ThemeToggle'
import { Menu, MenuItem, MenuButton, SubMenu, MenuDivider, MenuHeader, FocusableItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/theme-dark.css'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  HomeIcon,
  DeviceTabletIcon,
  UserIcon,
  TableCellsIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

const godNavigation = [
  { name: 'Creation of All', href: '/blog/creation-of-all', current: false },
  { name: 'Churches', href: '/blog/churches', current: false },
  { name: 'Commandments', href: '/blog/commandments', current: false },
  { name: 'Groups', href: '/blog/groups', current: false },
  { name: 'Judeo Christian', href: '/blog/judeo-christian', current: false },
  { name: 'Jew Who', href: '/blog/jew-who', current: false },
  { name: 'Soul and Hell', href: '/blog/soul-hell', current: false },
  { name: 'Immorality', href: '/blog/immorality-abortion', current: false },
  { name: 'more More MORE', href: '/blog/more-more-more', current: false },
  { name: 'Playtime', href: '/blog/playtime', current: false },
  { name: 'Virtue', href: '/blog/virtue', current: false },
  { name: 'The Day The I', href: '/blog/the-day-the-i', current: false },
  { name: 'Trinity of Man', href: '/blog/trinity-of-man', current: false },
  { name: 'Works of Flesh', href: '/blog/works-of-flesh', current: false },
]

const logicNavigation = [
  { name: 'Donald Tom Elon', href: '/blog/donald-tom-elon', current: false },
  { name: 'Fair and Square', href: '/blog/fair-and-square', current: false },
  { name: 'Fourteenth Amendment', href: '/blog/fourteenth-amendment', current: false },
  { name: 'Bullshit', href: '/blog/bullshit', current: false },
  { name: 'Government', href: '/blog/government', current: false },
  { name: 'Homeless', href: '/blog/homeless', current: false },
  {
    name: 'Earth Magnetism',
    href: '/blog/earths-magnetic-flux',
    current: false,
  },
  { name: 'Arcata CA', href: '/blog/arcata', current: false },
  { name: 'EMF EMP', href: '/blog/emf-emp', current: false },
  { name: 'Intelligence Failure', href: '/blog/intelligence-failure', current: false },
  { name: 'NATO Disarmed', href: '/blog/nato-disarmed', current: false },
  { name: 'Philosophy', href: '/blog/philosophy', current: false },
  { name: 'USA Elections', href: '/blog/usa-election', current: false },
  { name: 'Vaccination', href: '/blog/vaccination', current: false },
  { name: 'War Machine', href: '/blog/war-machine', current: false },
]

const angieNavigation = [
  { name: 'Charlotte Summers', href: '/blog/charlotte-summers', current: false },
  { name: 'Angelina', href: '/blog/angelina-jordan', current: false },
]

const programmingNavigation = [
  { name: 'Cookies Gdpr', href: '/blog/cookies', current: false },
  { name: 'Gatsby V5', href: '/blog/gatsby-version-five', current: false },
  {
    name: 'Netlify Forms',
    href: '/blog/react-netlify-forms',
    current: false,
  },
  { name: 'Hook Forms', href: '/blog/react-hook-form', current: false },
  { name: 'Sectionize', href: '/blog/animated-sections', current: false },
]

export default function Header() {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [isDark, setDark] = useState(true)
  const ref = useRef(null)
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [target, setTarget] = useState(null)
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
      <div className="relative flex h-16 items-center justify-between">
        <Menu
          className="ml-7"
          arrow
          ref={ref}
          menuButton={
            <MenuButton aria-label="Menu">
              <Bars3Icon className="ml-6 h-8 w-8 text-slate-300" aria-hidden="true" aria-label="Open Menu" />
            </MenuButton>
          }
          theming={isDark ? 'dark' : undefined}
          portal={{ target }}
        >
          <MenuItem>
            <HomeIcon
              className="h-7 w-8 pr-2 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600"
              aria-label="Home Icon"
              role="presentation"
            />{' '}
            <Link to="/" aria-label="Home">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <UserIcon
              className="h-7 w-8 pr-2 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600"
              aria-label="About Icon"
              role="presentation"
            />{' '}
            <Link to="/blog/about" aria-label="About">
              About
            </Link>
          </MenuItem>
          <SubMenu
            label={
              <>
                <TableCellsIcon
                  className="h-7 w-8 pr-2 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600"
                  aria-label="Blog Icon"
                  role="presentation"
                />
                Blog
              </>
            }
          >
            <MenuItem>
              <Link to="/blog" aria-label="All Blog Posts">
                All Blog Posts
              </Link>
            </MenuItem>
            <MenuDivider />
            <MenuHeader>God</MenuHeader>
            <SubMenu label="Bible / Bibwoe">
              {godNavigation.map((item) => (
                <Fragment key={item.name}>
                  <MenuItem>
                    <FocusableItem>
                      {({ ref }) => (
                        <Link ref={ref} aria-label={item.name} key={item.name} to={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </FocusableItem>
                  </MenuItem>
                </Fragment>
              ))}
            </SubMenu>
            <MenuDivider />
            <MenuHeader>Internet</MenuHeader>
            <SubMenu label="Programming">
              {programmingNavigation.map((item) => (
                <Fragment key={item.name}>
                  <MenuItem>
                    <FocusableItem>
                      {({ ref }) => (
                        <Link ref={ref} aria-label={item.name} key={item.name} to={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </FocusableItem>
                  </MenuItem>
                </Fragment>
              ))}
            </SubMenu>
            <MenuDivider />
            <MenuHeader>Logic</MenuHeader>
            <SubMenu label="Common Sense">
              {logicNavigation.map((item) => (
                <Fragment key={item.name}>
                  <MenuItem>
                    <FocusableItem>
                      {({ ref }) => (
                        <Link ref={ref} aria-label={item.name} key={item.name} to={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </FocusableItem>
                  </MenuItem>
                </Fragment>
              ))}
            </SubMenu>
            <MenuDivider />
            <MenuHeader>Trinity</MenuHeader>
            <SubMenu label="Of Angels">
              {angieNavigation.map((item) => (
                <Fragment key={item.name}>
                  <MenuItem>
                    <FocusableItem>
                      {({ ref }) => (
                        <Link ref={ref} aria-label={item.name} key={item.name} to={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </FocusableItem>
                  </MenuItem>
                </Fragment>
              ))}
            </SubMenu>
            <MenuDivider />
            <MenuItem>
              <Link to="https://bibwoe.com/posts/enoch-preface" target="_blank" aria-label="Enoch">
                <span className="flex items-center">
                  Book Of Enoch{' '}
                  <ArrowTopRightOnSquareIcon className="h-7 w-8 pl-2 text-blue-500 text-opacity-75 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-600" />
                </span>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem>
            <DeviceTabletIcon
              className="h-7 w-8 pr-2 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600"
              aria-label="Contact"
              role="presentation"
            />{' '}
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <MagnifyingGlassIcon
              className="h-7 w-8 pr-2 text-slate-900 text-opacity-75 hover:text-slate-300 dark:text-slate-600"
              aria-hidden="true"
              aria-label="Search Button"
              role="presentation"
            />{' '}
            <Link to="/search" aria-label="Contact">
              Search
            </Link>
          </MenuItem>
        </Menu>
        <div className="flex items-center">
          <Link to="/" aria-label="Home Link">
            <div className="flex items-center">
              <span>
                <StaticImage
                  className="h-8 w-8"
                  formats={['auto', 'webp']}
                  src="../../../static/img/apple-touch-icon-32x32.png"
                  quality={95}
                  alt="Home Logo"
                  area-label="Home Logo"
                  loading="eager"
                />
              </span>
            </div>
          </Link>
        </div>
        <div className="mr-7">
          <ThemeToggle panelClassName="mt-8" aria-hidden="true" aria-label="Theme Button" />
        </div>
      </div>
    </header>
  )
}
