import * as React from 'react'
import { useRef, forwardRef, FC } from 'react'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@/components/Layout'
import PageTransition from '@/components/PageTransition'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import NowPlaying from '@/components/PlayList'
import SeoBlog from '@/components/Seo/SeoBlog'
import { SuspenseHelper } from '@/components/SuspenseHelper'

// @ts-ignore
const Bio = React.lazy(() => import('@/components/Bio'))
// @ts-ignore
const Tags = React.lazy(() => import('@/components/SiteTags'))
// @ts-ignore
const WavyHr = React.lazy(() => import('@/components/WavyHr'))

interface ImageProp {
  image: IGatsbyImageData
  full: IGatsbyImageData
  thumb: IGatsbyImageData
  imgClass?: string
  thumbAlt?: string
  title?: string
  caption?: string
  customWrapper?: FC
}

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        path: string
        author: string
        date: string
        embeddedImagesLocal: ImageProp[]
        tags: string[]
        publicId: string
        videoTitle: string
      }
      slug: string
      excerpt: string
      parent: {
        modifiedTime: string
      }
      body: string
      tableOfContents: JSON
      pathname: string
      timeToRead: string
    }
  }
}

type BlogPostRef = React.ForwardedRef<HTMLDivElement>

function BlogPost({ data }: BlogPostProps, ref: BlogPostRef) {
  const { frontmatter, timeToRead } = data.mdx
  const pathname = '/' + data.mdx.slug
  const pageRef = useRef(null)
  return (
    <>
      <Layout>
        <PageTransition ref={pageRef}>
          <div className="left-beams -mt-10 object-cover">
            <div className="mb-20 mt-10 font-inter">
              <section className="prose-text:text-slate-900 prose-text:dark:text-slate-200 prose mx-auto mb-10 mt-2 max-w-screen-lg px-4 md:prose-lg lg:prose-xl prose-a:text-purple-600 hover:prose-a:text-purple-500 lg:px-0">
                <div className="mt-4 py-4">
                  <h1 className="mb-2 text-lg font-semibold leading-normal">{frontmatter.title}</h1>
                  <div className="flex items-center">
                    <span className="ml-2 text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:font-garamond first-letter:text-7xl first-letter:font-bold first-letter:uppercase first-letter:text-slate-900 first-line:uppercase first-line:tracking-widest dark:text-slate-200 dark:first-letter:text-slate-300">
                      {frontmatter.description}
                    </span>
                  </div>
                </div>
                <div className="mb-4 ml-2 text-slate-900 dark:text-slate-200">
                  <SuspenseHelper fallback={<div>Loading...</div>}>
                    <Bio />
                  </SuspenseHelper>
                </div>
                <div>
                  <div className="mb-10 flex flex-wrap items-center sm:place-content-center md:place-content-center lg:place-content-start">
                    <div className="ml-3 mr-2 inline-flex items-center py-1 text-base leading-none text-slate-900 dark:text-slate-200">
                      <TagIcon className="mr-2 h-6 w-6" />
                      <SuspenseHelper fallback={<div>Loading...</div>}>
                        <Tags className="px-2 py-1" tags={frontmatter.tags} />
                      </SuspenseHelper>
                    </div>
                    <div className="mr-2 inline-flex items-center py-1 text-base leading-none text-slate-900 dark:text-slate-200">
                      <CalendarIcon className="mr-1 h-6 w-6" />
                      {frontmatter.date}
                    </div>
                    <div className="mr-3 inline-flex items-center text-base leading-none text-slate-900 dark:text-slate-200">
                      <ClockIcon className="mr-1 h-6 w-6" />
                      {timeToRead} min read
                    </div>
                    <div className="mr-3 inline-flex items-center text-base leading-none">
                      <NowPlaying />
                    </div>
                  </div>
                </div>
                <MDXRenderer localImages={frontmatter.embeddedImagesLocal}>{data.mdx.body}</MDXRenderer>
                <SuspenseHelper fallback={<div>Loading...</div>}>
                  <WavyHr />
                </SuspenseHelper>
              </section>
            </div>
          </div>
        </PageTransition>
      </Layout>
    </>
  )
}

export default forwardRef(BlogPost)

interface DataProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        path: string
        date: string
        embeddedImagesLocal: ImageProp[]
        tags: string[]
        publicId: string
        videoTitle: string
      }
      slug: string
      excerpt: string
      parent: {
        modifiedTime: string
      }
      body: string
      tableOfContents: JSON
      pathname: string
      timeToRead: string
    }
  }
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps<DataProps>) {
  const siteUrl = 'https://publiuslogic.com'
  const pathname = '/' + props.data.mdx.slug
  const excerpt = props.data.mdx.excerpt
  const seo = {
    path: `${siteUrl}${pathname || ''}`,
  }
  const Image = props.data.mdx.frontmatter.embeddedImagesLocal[0]
  return (
    <>
      <SeoBlog
        type="page"
        title={props.data.mdx.frontmatter.title}
        description={props.data.mdx.frontmatter.description}
        image={Image}
        pathname={seo.path}
      >
        <title>{props.data.mdx.frontmatter.title}</title>
        <meta name="description" content={props.data.mdx.frontmatter.description} />
        <meta name="image" content={Image} />
        <meta name="twitter:site" content="@donaldboulton" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.data.mdx.frontmatter.title} />
        <meta name="twitter:url" content={seo.path} />
        <meta name="twitter:description" content={props.data.mdx.frontmatter.description} />
        <meta name="twitter:image" content={Image} />
        <meta name="twitter:creator" content="@donboulton" />
        <meta name="og:title" content={props.data.mdx.frontmatter.title} />
        <meta name="og:url" content={seo.path} />
        <meta name="og:description" content={props.data.mdx.frontmatter.description} />
        <meta name="og:site_name" content="PubliusLogic" />
        <meta name="og:image" content={Image} />
        <meta name="og:image:title" content={props.data.mdx.frontmatter.title} />
        <meta name="og:image:alt" content={props.data.mdx.frontmatter.title} />
        <meta name="og:image:width" content="1400px" />
        <meta name="og:image:height" content="450px" />
        <meta name="og:updated_time" content={props.data.mdx.parent.modifiedTime} />
        <meta name="canonical" content={seo.path} />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </SeoBlog>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          about: {
            '@id': 'https://publiuslogic.com',
          },
          audience: 'public',
          abstract:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          author: {
            '@id': 'https://donwboulton.com',
          },
          copyrightHolder: {
            '@id': 'https://publiuslogic.com',
          },
          copyrightYear: 2025,
          creator: {
            '@id': 'https://publiuslogic.com',
          },
          description: 'PubliusLogic name means to Publish Logic',
          image: {
            '@type': 'ImageObject',
            url: Image,
            width: '1400px',
            height: '450px',
          },
          inLanguage: 'en',
          name: 'PubliusLogic',
          publisher: {
            '@id': 'https://publiuslogic.com',
          },
          url: 'https://publiuslogic.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: props.data.mdx.frontmatter.title,
          url: seo.path,
          image: {
            '@type': 'ImageObject',
            url: Image,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mansbooks.com',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: props.data.mdx.frontmatter.title,
          alternativeHeadline: props.data.mdx.frontmatter.description,
          mainEntityOfPage: seo.path,
          image: Image,
          award: 'Best Blog page ever built',
          editor: props.data.mdx.frontmatter.author,
          genre: 'group',
          keywords: props.data.mdx.frontmatter.tags,
          wordCount: '1120',
          publisher: 'PubliusLogic',
          url: seo.path,
          datePublished: props.data.mdx.frontmatter.date,
          dateCreated: props.data.mdx.frontmatter.date,
          dateModified: props.data.mdx.parent.modifiedTime,
          description: props.data.mdx.frontmatter.description,
          articleBody: excerpt,
          author: {
            '@type': 'Person',
            name: props.data.mdx.frontmatter.author,
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com/',
                name: 'PubliusLogic Blog',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com/blog',
                name: 'PubliusLogic Blog',
              },
              position: '2',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': seo.path,
                name: props.data.mdx.frontmatter.title,
              },
              position: '3',
            },
          ],
          numberOfItems: '3',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://publiuslogic.com',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donboulton666@gmail.com',
            telephone: '+405-863-2165',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donboulton666@gmail.com',
          founder: {
            '@id': 'https://donwboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: 'https://publiuslogic.com/static/images/jpg/dbbg.jpg',
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'PubliusLogic',
          sameAs: [
            'mailto:donboulton666@gmail.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://publiuslogic.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://donwboulton.com',
          name: 'Donald Boulton',
          url: 'https://donwboulton.com',
          worksFor: {
            '@id': 'https://publiuslogic.com',
          },
        })}
      </script>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        author
        path
        publicId
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
        date(formatString: "YYYY-MM-DD")
        tags
      }
      headings {
        value
        depth
      }
      slug
      id
      excerpt(pruneLength: 5000)
      timeToRead
      parent {
        ... on File {
          modifiedTime
        }
      }
      body
    }
  }
`
