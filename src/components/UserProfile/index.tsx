import * as React from 'react'
import { ReactNode, FC } from 'react'
import { Link } from 'gatsby'

interface UserProfileProps {
  children: ReactNode
  link: string
  buttonLink: string
  description: string
  title: string
  titleLink: string
}

const UserProfile: FC<UserProfileProps> = (props) => {
  const { children, link, buttonLink, description, title, titleLink } = props
  return (
    <>
      <div className="left-0 mx-1 mb-1 w-80 flex-none flex-nowrap">
        <div className="mx-auto max-w-sm space-y-1 rounded-xl px-2 py-1 shadow-lg sm:flex sm:items-center sm:space-x-4 sm:space-y-0 sm:py-1">
          <div className="justify-left h-24 w-24">{children}</div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="space-y-0.5">
              <div className="text-black text-lg font-semibold">
                <Link to={link} target="_blank" rel="noopener noreferrer" aria-describedby={description}>
                  {description}
                </Link>
              </div>
              <div className="font-medium text-slate-500">
                <Link to={titleLink} target="_blank" rel="noopener noreferrer" aria-describedby={title}>
                  {title}
                </Link>
              </div>
            </div>
            <Link to={buttonLink} target="_blank" rel="noopener noreferrer" aria-describedby="Contact">
              <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
