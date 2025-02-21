'use client'

import * as React from 'react'
import { useState, Fragment } from 'react'
import { Link } from 'gatsby'
import ReactPaginate from 'react-paginate'
import { LazyMotion, m, useInView } from 'framer-motion'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import GetPosts from '@/utils/getposts'
import Tags from '@/components/SiteTags'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// @ts-ignore
const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

interface ImageProp {
  embeddedImagesLocal: IGatsbyImageData
  imgClass?: string
  thumbAlt?: string
  title?: string
  caption?: string
}

interface BlogRollProps {
  tag?: string
  category?: string
  title: string
  description: string
  path: string
  author: string
  date: string
  embeddedImagesLocal: ImageProp[]
  tags: string[]
  categories: string[]
  excerpt: string
}

const POSTS_PER_PAGE = 12

const BlogRoll = ({ category, excerpt }: BlogRollProps) => {
  const posts = GetPosts(category)
  const [offset, setOffset] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selected = selectedItem.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <div className="mb-10 mt-6 flex flex-col items-center">
        <div className="mb-4 flex flex-wrap space-y-12 lg:space-y-0">
          {posts.slice(offset, offset + POSTS_PER_PAGE).map((post) => (
            <Fragment key={post.id}>
              <div className="p-4 md:w-1/2 lg:w-1/3">
                <m.div className="relative opacity-75" initial="initial" whileHover="hover">
                  <div>
                    <m.div
                      className="border-1 h-full overflow-hidden rounded-lg border-slate-800 bg-slate-200 p-2 text-slate-900 opacity-75 shadow-xl dark:border-slate-300 dark:bg-slate-900 dark:text-slate-200"
                      variants={cardVariants}
                      transition={{
                        ease: 'easeOut',
                        delay: 0.15,
                        duration: 0.5,
                      }}
                    >
                      <Link to={`/${post.slug}`}>
                        <p className="sr-only">{post.frontmatter.title}</p>
                      </Link>
                      <div className="p-6">
                        {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : ''}
                        <Link to={`/${post.slug}`}>
                          <h2 className="title-font mt-2 text-xl font-bold text-slate-900 dark:text-slate-300 dark:hover:text-slate-300">
                            {post.frontmatter.title}
                          </h2>
                        </Link>
                        <div className="flex flex-wrap items-center">
                          <span className="mr-3 inline-flex items-center border-r-2 border-wine-300 py-1 pr-3 text-xs leading-none text-slate-900 dark:text-slate-300">
                            <CalendarIcon className="mr-1 h-4 w-4" />
                            {post.frontmatter.date}
                          </span>
                          <span className="text-black inline-flex items-center text-xs leading-none dark:text-white">
                            <UserCircleIcon className="mr-1 h-4 w-4" />
                            {post.frontmatter.author}
                          </span>
                        </div>
                        <p className="text-black mt-3 text-sm italic dark:text-white">{post.excerpt}</p>
                      </div>
                    </m.div>
                  </div>
                </m.div>
              </div>
            </Fragment>
          ))}
        </div>
        {posts.length > POSTS_PER_PAGE ? (
          <ReactPaginate
            previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-900 bg-wine-300 text-sm font-medium text-slate-800 dark:text-slate-300 hover:bg-wine-200"
            previousLabel={
              <>
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            }
            nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-800 text-slate-200 bg-wine-300 hover:bg-wine-300 text-sm font-medium"
            nextLabel={
              <>
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            }
            pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-900 bg-slate-300 dark:bg-slate-800 text-sm font-medium hover:bg-wine-300 text-sm font-medium"
            breakLabel={'...'}
            breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-900 text-sm font-medium"
            pageCount={Math.ceil(posts.length / POSTS_PER_PAGE)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="relative z-0 inline-flex shadow-sm -space-x-px border-slate-300 dark:border-slate-900"
            activeLinkClassName="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-900 text-slate-900 dark:text-slate-200 text-sm font-medium hover:bg-wine-200 bg-wine-300"
          />
        ) : (
          ''
        )}
      </div>
    </LazyMotion>
  )
}

export default BlogRoll
