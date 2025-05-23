import * as React from 'react'
import { forwardRef, useState } from 'react'
import { Link } from 'gatsby'
import type { HeadProps } from 'gatsby'
import Layout from '@/components/Layout'
import PageTransition from '@/components/PageTransition'
import WavyHr from '@/components/WavyHr'
import Seo from '@/components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import OGImage from '../../static/images/undraw/undraw_Account_re_o7id.png'
import Spacer200 from '../../static/img/spacer-200.jpg'
import PageHero from '@/components/PageHero'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

type ProfileRef = React.ForwardedRef<HTMLDivElement>

const imageCdn = 'https://donboulton666.github.io/image-cdn/images/img/angie.jpg';

function Profile(props, ref: ProfileRef) {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';
    const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';
    const GITHUB_REPO = 'YOUR_GITHUB_REPO';
    const GITHUB_BRANCH = 'main'; // or your branch name
    const FILE_PATH = `uploads/${selectedFile.name}`; // path in the repository

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileContent = event.target.result;

        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${FILE_PATH}`;

        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Upload ${selectedFile.name}`,
            content: btoa(fileContent), // encode to base64
            branch: GITHUB_BRANCH,
          }),
        });

        if (response.ok) {
          alert('File uploaded successfully!');
        } else {
          const errorData = await response.json();
          alert(`Error uploading file: ${errorData.message || response.statusText}`);
        }
      };
      reader.readAsBinaryString(selectedFile);
    } catch (error) {
      alert(`An unexpected error occurred: ${error.message}`);
    }
  };
  const spacer200 = {
    src: Spacer200,
    width: 1400,
    height: 200,
  }
  return (
    <>
      <Layout>
        <PageTransition ref={ref}>
          <div className="left-beams">
            <PageHero title="Profile" description="Github Profile and Repo Info." image={Image} />
            <section className="mb-11">
              <div className="mb-6 mt-6 text-center">
                <h2 className="mb-2 mt-2 text-lg font-bold leading-tight">Github Profile</h2>
                <div className="mb-10 text-slate-200">
                  <div className="flex justify-center">
                    <StaticImage
                      className="m-auto mx-auto mb-3 h-20 w-20 max-w-xs rounded-full ring ring-indigo-500 ring-offset-4"
                      formats={['auto', 'webp']}
                      src="../../static/img/donald-boulton-80.jpg"
                      quality={95}
                      alt="Profile picture"
                      area-label="My Picture"
                      loading="eager"
                    />
                  </div>
                  <h2 className="m-auto flex max-w-xs justify-center text-2xl font-bold">Donald W. Boulton</h2>
                  <OutboundLink
                    className="m-auto flex max-w-xs justify-center text-rose-500 hover:text-rose-400"
                    href="https://donwboulton.com"
                    target="_blank"
                    rel="noreferrer"
                    area-label="Don Boulton Home"
                  >
                    https://donwboulton.com
                  </OutboundLink>
                  <div className="m-auto my-2 mb-6 max-w-xl justify-center text-slate-200 hover:text-slate-300">
                    <div className="justify-items-center text-center">
                      Left Hand of Father God since the beginning of time!{' '}
                    </div>
                    <div className="justify-items-center text-center">
                      Self Taught Full Stack Developer. Gatsby, MDX, TypeScript Tailwind CSS.
                    </div>
                  </div>
                  <div className="m-auto flex max-w-xs justify-center">
                    <div className="grid auto-cols-min grid-flow-col gap-4">
                      <OutboundLink
                        className="flex items-center text-blue-400 hover:text-blue-500"
                        href="https://twitter.com/donboulton"
                        target="_blank"
                        rel="noreferrer"
                        area-label="Don Boulton Twitter"
                      >
                        <svg
                          className="mr-0.5 mt-0.5 flex-initial"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          fill="currentColor"
                        >
                          <title>Twitter</title>
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        <span>donboulton</span>
                      </OutboundLink>
                      <OutboundLink
                        className="flex items-center text-slate-200 hover:text-slate-300"
                        href="https://www.github.com/donaldboulton"
                        target="_blank"
                        rel="noreferrer"
                        area-label="Don Boulton Github"
                      >
                        <svg
                          className="mr-0.5 mt-0.5 flex-initial"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          fill="currentColor"
                        >
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <span>donaldboulton</span>
                      </OutboundLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="pointer-events-none absolute left-1/2 right-0 top-96 mt-10 w-full -translate-x-1/2 scale-x-[-1] transform overflow-hidden bg-transparent pt-10 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2560"
                    height="200"
                    viewBox="0 0 2560 200"
                    className="fill-blue-50 stroke-blue-500 dark:fill-transparent"
                  >
                    <path
                      strokeWidth="2"
                      d="M26 106 0 23-7-1v211h2577V23l-32 118-27-8-27-50-27-19-28 33-27 68-26 15-28-55-26 16-27-27-27-43-27 47-27 18-28-60-25 89-29 8-26-40-27-69-29-32-25-8-27 47-28 38-27-12-27-44h-27l-26 18-27 43-27 15-27-24-28-67-26-28-28-7-25 93-26-32-29-4-28 100-26-24-27 37-27-28-27-16-27 53-28-60-26 23-27-23-27-8-27 42-27 26-27-77-28 17-27-13-26 58-28-11-27 11-27-31-27-22-27 42-27-11-27 28-26 15-27-66-28-13-26-71-27 10-28-21-27 109-27-30-27 8-26 84-27-19-28-93-27-59-26-20-27 68-27-59-27 55-27 35h-27l-28-50-26-8-28 97-27-23-26 51-27-114-26 86-28-102-27 53-27-48-27 27-28 61-27-22-27-8-27 39-27-83-27 44Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center text-2xl">
                <OutboundLink href="https://www.buymeacoffee.com/donaldboulton/w/3913" alt="Buy Me A Coffee">
                  <StaticImage
                    className="m-auto mx-auto mb-3 h-16 w-48 rounded-md"
                    formats={['auto', 'webp']}
                    src="../../static/img/buy-me-a-coffee.jpg"
                    quality={95}
                    alt="Buy me a coffee"
                    area-label="Buy me a coffee"
                    loading="lazy"
                  />
                </OutboundLink>
              </div>
              <div className="center container mx-auto mb-20 px-5 py-2 lg:px-32 lg:pt-12">
               <div className="mx-auto space-x-1 overflow-hidden p-1">
                <span className="group relative flex items-center text-slate-200">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 pl-3 pr-3 text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
                    </svg>
                  </div>
                  <input
                    type="file"
                    placeholder="image"
                    className="w-48 appearance-none rounded border-slate-800 bg-slate-300 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-900 focus:border-wine-300 focus:outline-none focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-200"
                    aria-label="Enter Email"
                    onChange={handleFileChange}
                  />
                  <span className="block space-x-2">
                    <button
                      aria-label="Submit Button"
                      className="ml-2 rounded-md border border-transparent bg-gray-800 p-2 text-sm font-medium text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                      type="submit"
                      onClick={handleUpload} disabled={!selectedFile}
                    >
                      Upload Image
                    </button>
                  </span>
                </span>
              </div>
              </div>
            </section>
          </div>
          <div>            
            <img src={imageCdn} alt="Angie"></img>
          </div>
        </PageTransition>
      </Layout>
    </>
  )
}

export default forwardRef(Profile)

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
  return (
    <>
      <Seo type="page" title="Profile" description="Github Profile" image={ogimage} pathname="/profile">
        <title>Profile Page</title>
        <meta name="description" content="PubliusLogic Profile Page." />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Seo>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'User Github Profile',
          alternativeHeadline: 'Profile using OctoKit.rest',
          image: ogimage,
          award: 'Best Profile page ever built',
          editor: 'Donald Boulton',
          genre: 'search engine optimization',
          keywords: 'github profile user',
          wordCount: '1120',
          publisher: 'PubliusLogic',
          url: 'https://publiuslogic.com/profile',
          datePublished: '2020-09-20',
          dateCreated: '2020-08-20',
          dateModified: '2022-08-16',
          description: 'We love to do stuff to help people',
          articleBody: 'You can paste your entire post in here, and yes it can get really really long.',
          author: {
            '@type': 'Person',
            name: 'Donald W. Boulton',
            url: 'https://donwboulton.com',
          },
        })}
      </script>
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
          copyrightYear: '2022',
          creator: {
            '@id': 'https://publiuslogic.com',
          },
          description: 'PubliusLogic name means to Publish Logic',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
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
          name: 'Github User Profile',
          url: 'https://publiuslogic.com/profile',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'PubliusLogic',
            name: 'Github User Profile',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
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
                '@id': 'https://publiuslogic.com',
                name: 'PubliusLogic',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://publiuslogic.com/profile',
                name: 'Github User Profile',
              },
              position: '2',
            },
          ],
          numberOfItems: '2',
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
            url: ogimage,
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
