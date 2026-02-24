import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoHomiDark from '@/images/clients/homi/logo-dark.svg'
import logoHomiLight from '@/images/clients/homi/logo-light.svg'
import logoSwipeStatsDark from '@/images/clients/swipestats/logo-dark.png'
import logoSwipeStatsLight from '@/images/clients/swipestats/logo-light.png'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Homi', logoHomiLight],
  ['SwipeStats', logoSwipeStatsLight],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Current ventures
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Products that solve real problems"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every venture starts with a matching problem — connecting people with
          homes, with data, with each other. We build products that make those
          connections effortless.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Focus areas"
        title="AI products, data platforms, and the tools people actually need."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From home search to dating analytics to remote work — every product
          tackles a coordination problem where technology can genuinely help.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="AI-powered products">
              Building intelligent applications that understand context and
              intent — from conversational home search to structured data
              analysis. AI as a tool, not a gimmick.
            </ListItem>
            <ListItem title="Data platforms">
              Turning raw data into insights people actually use. Whether it's
              dating patterns or housing markets, the goal is always clarity
              from complexity.
            </ListItem>
            <ListItem title="Full-stack development">
              Modern web applications built with Next.js, TypeScript, and
              whatever stack best fits the problem. Ship fast, iterate from
              evidence.
            </ListItem>
            <ListItem title="Growth & distribution">
              Products that grow through genuine value — organic signups, 
              community-driven distribution, and word of mouth over paid
              acquisition.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Boe Ventures is the product holding company of Kristian Elset Bøe, building AI-powered products that solve matching and coordination problems.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Building products that connect people with what matters.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Boe Ventures is the product studio of Kristian Elset Bøe. We build
            AI-powered tools and data platforms that solve real matching
            problems — from finding your next home to understanding your dating
            life.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Homi', logo: logoHomiDark }}
      >
        The best products come from deeply understanding a problem before writing
        a single line of code. Every venture I build starts with a real
        frustration I've experienced firsthand.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
