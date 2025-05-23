import * as React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'
import Center from '@/components/Center'
// @ts-ignore
const loadFeatures = () => import('@/components/FramerFeatures').then((res) => res.default)

const Accordion = () => {
  const accordionContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={accordionContainer}>
        <div className="ml-auto mr-auto w-full px-4">
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex w-full pt-2">
              <div className="mx-auto w-full rounded-2xl p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                        <span className="text-lg">Lyrics Suspicious Minds</span>
                        <ChevronDownIcon
                          className={`${open ? 'rotate-180 transform' : ''} mt-1 h-5 w-5 text-slate-300`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="text-md px-4 pb-2 pt-4 text-slate-200">
                        <div className="text-md">
                          Only change in song is verse 1, to, "Heart of a Child", from, "We're are caught in a trap
                        </div>
                        <Center>I Already Know Angie!</Center>
                        <div>
                          Way more Beautiful than Elvis's version of which I saw live along time ago. 1972 or 73?{' '}
                        </div>

                        <div className="my-4">[Bridge]</div>

                        <div>Oh, let our love survive</div>
                        <div>I'll dry the tears from your eyes</div>
                        <div>Let's don't let a good thing die</div>
                        <div>When, honey, you know I've never lied, to you</div>

                        <div className="my-4">[Verse 1]</div>

                        <div>Heart Of A Child, I can't walk out</div>
                        <div>Because I love you too much, baby </div>
                        <div>Why can't you see, what you're doin' to me </div>
                        <div>When you don't believe a word I say?</div>

                        <div className="my-4">[Chorus]</div>

                        <div>We can't go on together With suspicious minds</div>

                        <div>And we can't build our dreams On suspicious minds</div>

                        <div className="my-4">[Verse 2]</div>

                        <div>If an old friend I know,</div>
                        <div>stops by to say hello</div>
                        <div>Would I still see suspicion in your eyes?</div>
                        <div>Here we go again,</div>
                        <div>asking where I've been</div>
                        <div>You can't see the tears are real, I'm cryin</div>

                        <div className="my-4">[Chorus]</div>

                        <div>We can't go on together,</div>
                        <div>With suspicious minds</div>
                        <div>And we can't build our dreams,</div>
                        <div>On suspicious minds</div>

                        <div className="my-4">[Bridge]</div>

                        <div>Oh, let our love survive,</div>
                        <div>I'll dry the tears from your eyes</div>
                        <div>Let's don't let a good thing die When, honey,</div>
                        <div>you know I've never lied to you.</div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full justify-between rounded-lg bg-slate-300 px-4 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                        <span className="text-lg">Credits</span>
                        <ChevronDownIcon
                          className={`${open ? 'rotate-180 transform' : ''} mt-1 h-5 w-5 text-slate-300`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="text-md px-4 pb-2 pt-4 text-slate-800">
                        <div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Vocals: Angelina Jordan
                            </span>
                          </div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Produced By: Mery Zamani
                            </span>
                          </div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Written By: Mark James
                            </span>
                          </div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Piano: Rob Christie
                            </span>
                          </div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Release Date: June 22, 2022
                            </span>
                          </div>
                          <div>
                            <span className="mb-1" variant="secondary">
                              Suspicious Minds Is A Cover Of, Suspicious Minds by Elvis Presley
                            </span>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default Accordion
