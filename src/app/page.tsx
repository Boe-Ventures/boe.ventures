import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { TiltedCards } from '@/components/TiltedCards'
import logoHomiDark from '@/images/clients/homi/logo-dark.svg'
import logomarkHomi from '@/images/clients/homi/logomark-light.svg'
import logomarkPromad from '@/images/clients/promad/logomark-compass-light.svg'
import logomarkSwipeStats from '@/images/clients/swipestats/logomark-dark.svg'
import logomarkTowers from '@/images/clients/towers/logomark-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Promad's mark has no tile background of its own, so it gets the outlined
// treatment; the other logomarks are self-contained colored squircles.
const ventures = [
  { name: 'Homi', logo: logomarkHomi },
  { name: 'SwipeStats', logo: logomarkSwipeStats },
  { name: 'PROMAD', logo: logomarkPromad, outlined: true, spaced: true },
  { name: 'Towers Club', logo: logomarkTowers },
]

function Ventures() {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-56 lg:px-8">
      <div
        className="relative overflow-hidden rounded-4xl border border-white/8 py-20 shadow-[0_30px_70px_rgba(15,15,16,0.22)] sm:py-24"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 88% 10%, rgba(233,168,124,0.16) 0%, transparent 55%), linear-gradient(165deg, #18181B 0%, #0E0E10 100%)',
        }}
      >
        <TiltedCards tone="dark" />
        <Container className="relative">
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Current ventures
            </h2>
            <div className="h-px flex-auto bg-white/12" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {ventures.map((venture) => (
                <li key={venture.name}>
                  <FadeIn className="flex items-center gap-x-3">
                    <span
                      className={clsx(
                        'flex h-9 w-9 flex-none items-center justify-center rounded-lg',
                        venture.outlined && 'border-[1.5px] border-white/40',
                      )}
                    >
                      <Image
                        src={venture.logo}
                        alt=""
                        className={
                          venture.outlined ? 'h-5 w-5' : 'h-9 w-9 rounded-lg'
                        }
                        unoptimized
                      />
                    </span>
                    <span
                      className={clsx(
                        'font-display text-lg font-semibold text-white',
                        venture.spaced && 'tracking-[0.08em]',
                      )}
                    >
                      {venture.name}
                    </span>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </div>
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
        title="The same underlying problem, across every product"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Homes, dating data, cities to work from — infrequent, high-stakes
          decisions where existing tools focus on the wrong things. Each
          product here addresses a version of that same problem.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-[20px] border border-neutral-950/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,15,16,0.06),0_2px_8px_rgba(15,15,16,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,15,16,0.1),0_2px_8px_rgba(15,15,16,0.04)] sm:p-8">
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
        title="AI products, data platforms, and a lot of unglamorous plumbing."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every product here is a coordination problem first and a technology
          problem second. The tech&apos;s job is to stay out of the way.
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
    'Boe Ventures is the one-person product studio of Kristian Elset Bø. Homi, SwipeStats, Promad, Towers Club — software for high-stakes decisions.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_78%_8%,rgba(246,217,184,0.35),transparent_60%)]" />
        <div className="absolute top-0 right-0 hidden h-[520px] w-[55%] lg:block">
          <TiltedCards tone="light" />
        </div>
      </div>

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Software for high-stakes decisions.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Boe Ventures is my one-person product studio. I&apos;m Kristian —
            Norwegian engineer, Oslo and New York. My thesis was on apartment
            matching, and a decade later everything I build is still some
            version of the same problem: finding the right thing in a sea of
            options with bad signal.
          </p>
        </FadeIn>
      </Container>

      <Ventures />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Homi', logo: logoHomiDark }}
      >
        Homi exists because I watched people make the biggest purchase of their
        lives with fifteen browser tabs and a group chat. Everything I build
        starts like that — a frustration I couldn&apos;t stop thinking about
        until I&apos;d built the fix.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
