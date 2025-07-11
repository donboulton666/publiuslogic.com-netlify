import type { GatsbyConfig } from 'gatsby'
import siteAcronyms from './gatsby-site-acronyms'
import adapter from 'gatsby-adapter-netlify'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'
import remarkSlug from 'remark-slug'
import dotenv from 'dotenv'
dotenv.config()

const fullConfig = resolveConfig(tailwindConfig)

const config: GatsbyConfig = {
  trailingSlash: 'never',
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  headers: [
    {
      source: `/contact`,
      headers: [
        {
          key: 'Link',
          value:
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css; rel=stylesheet; as=stylesheet  crossorigin=anonymous integrity=sha512-nxS1ynzJOmOlHp+iL3FyWqK89GtNL8U8rvlMOsQdTTssxZwCXh8N2NB3GDQOL+YR3XnWyZAxwQixURb+FA74PA==',
        },
      ],
    },
    {
      source: `*`,
      headers: [
        {
          key: 'Netlify-Vary',
          value: 'query',
        },
        // https://www.netlify.com/blog/netlify-cache-key-variations/?utm_source=in-app-notification&utm_medium=referral
        // https://github.com/netlify-labs/cache-key-variations/blob/main/README.md
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
        // Opt-out of Google FLoC: https://amifloced.org/
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        },
        {
          key: 'X-Robots-Tag',
          value: 'index',
        },
        {
          key: 'Vary',
          value: 'accept-encoding',
        },
        {
          key: 'Access-Control-Max-Age',
          value: '3600',
        },
        {
          key: 'Access-Control-Allow-Credentials',
          value: 'true',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value: 'Content-Type, Authorization, Time-Zone',
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'POST, GET, PUT, DELETE, PATCH, OPTIONS, HEAD',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=2592000',
        },
      ],
    },
  ],
  siteMetadata: {
    title: 'PubliusLogic',
    twitterUsername: '@donboulton',
    author: {
      name: 'Donald Boulton',
      url: 'https://donwboulton.com',
      summary: 'Who Resides in OKC.',
    },
    description:
      'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
    siteUrl: 'https://publiuslogic.com',
    siteImage: './static/images/jpg/dbbg.jpg',
    siteRss: 'https://publiuslogic.com/rss.sml',
    siteSitemap: 'https://publiuslogic.com/sitemap.xml',
    location: 'OKC, Middle Earth',
    social: {
      email: 'mailto:donboulton666@gmail.com',
      phone: 'tel:+405-863-2165',
      facebook: 'https://www.facebook.com/don.boulton',
      instagram: 'https://www.instagram.com/boulton3662',
      twitter: 'https://twitter.com/donboulton',
      linkedin: 'https://www.linkedin.com/donboulton',
      github: 'https://github.com/donaldboulton/',
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/`,
        name: 'img',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: `${__dirname}/src/mdx/`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: true,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '64',
              icon: '<svg fill="#620024" x="10px" className="inline-block ml-3 h-6 w-6 bottom-1 text-wine-300" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>',
              maintainCase: true,
              enableCustomId: true,
              removeAccents: false,
              isIconAfterHeader: true,
              elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            },
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms: siteAcronyms,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
        ],
        remarkPlugins: [{ resolve: 'remarkSlug' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PubliusLogic',
        short_name: 'publiuslogic',
        start_url: '/',
        background_color: fullConfig.theme.colors.slate['900'],
        theme_color: fullConfig.theme.colors.slate['900'],
        display: 'minimal-ui',
        icon: 'static/img/android-chrome-512x512.png',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require('./src/utils/algolia-queries'),
        chunkSize: 1000,
        skipIndexing: false,
        enablePartialUpdates: true,
        matchFields: ['path', 'date'],
      },
    },
    'gatsby-plugin-mdx-embed',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
          ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/icon-path*'],
        },
        precachePages: ['/', '/about', '/blog/*', '/privacy', '/thanks'],
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        defaultSizes: "gzip"
      },
    },
  ],
}

export default config
