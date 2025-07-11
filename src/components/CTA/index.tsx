import * as React from 'react'
import Section from '@/components/Section'
import { Link } from 'gatsby'

export default function CTA() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-4 lg:flex lg:items-center lg:justify-between lg:px-6 lg:py-6">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-2xl">
          <span className="block text-slate-900 dark:text-slate-200">Ready to give it a try?</span>
          <span className="block text-slate-900 dark:text-slate-200">Use the starter on Github today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="https://github.com/donaldboulton/publiuslogic.com/generate"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-950"
            >
              Use Template
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="https://github.com/donaldboulton/publiuslogic.com"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-900 px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-950"
            >
              Github Repo
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
