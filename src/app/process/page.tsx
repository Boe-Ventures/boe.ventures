import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section
      title="Discover"
      image={{
        src: '/images/archive/product-development-spaceship-car.png',
        width: 1536,
        height: 1024,
        grayscale: false,
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every product starts with a problem worth solving. I spend time
          mapping the{' '}
          <strong className="font-semibold text-neutral-950">
            existing landscape
          </strong>{' '}
          — who has this problem, how are they solving it today, and where are
          the biggest gaps.
        </p>
        <p>
          For Homi, this meant studying how people actually search for
          apartments: the frustration of filtering by static attributes when
          what you really want is a{' '}
          <strong className="font-semibold text-neutral-950">feeling</strong>.
          For SwipeStats, it meant talking to Tinder users who were drowning in
          data but had no way to make sense of it.
        </p>
        <p>
          The goal is to turn the vision into testable assumptions: a sharp
          problem statement and a clear hypothesis. Not a business plan — a{' '}
          <strong className="font-semibold text-neutral-950">bet</strong>.
          Product development should feel more like driving a car and making
          small corrections than launching a spaceship on a fixed trajectory.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What this looks like
      </h3>
      <TagList className="mt-4">
        <TagListItem>User interviews</TagListItem>
        <TagListItem>Market sizing</TagListItem>
        <TagListItem>Competitor teardowns</TagListItem>
        <TagListItem>Problem statement</TagListItem>
        <TagListItem>Early prototypes</TagListItem>
        <TagListItem>Hypothesis definition</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section
      title="Build"
      image={{
        src: '/images/archive/mvp-learning-instrument.png',
        width: 1536,
        height: 1024,
        shape: 1,
        grayscale: false,
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I build with a small surface area:{' '}
          <strong className="font-semibold text-neutral-950">
            Next.js, TypeScript, tRPC, Postgres
          </strong>
          . Same stack across every product. This isn&apos;t laziness —
          it&apos;s leverage. Familiarity lets me ship fast without accumulating
          hidden complexity.
        </p>
        <p>
          The first version is a working{' '}
          <strong className="font-semibold text-neutral-950">
            learning instrument
          </strong>
          , not a smaller list of features or a bad version of the final
          product. I&apos;d rather have ten real users teach me something than
          spend three months polishing something nobody needs.
        </p>
        <p>
          AI is now a first-class collaborator in every build. I use it for code
          generation, UX copy, data processing, and feature brainstorming — not
          as a shortcut, but as a{' '}
          <strong className="font-semibold text-neutral-950">
            force multiplier
          </strong>{' '}
          for a single founder moving at speed.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Core stack
      </h3>
      <TagList className="mt-4">
        <TagListItem>Next.js</TagListItem>
        <TagListItem>TypeScript</TagListItem>
        <TagListItem>tRPC</TagListItem>
        <TagListItem>Drizzle ORM</TagListItem>
        <TagListItem>Postgres</TagListItem>
        <TagListItem>Vercel</TagListItem>
      </TagList>
    </Section>
  )
}

const atlasRows = [
  {
    step: 'Collect',
    story: 'Save a listing before it disappears',
    views: ['Share', 'Inbox'],
  },
  {
    step: 'Organize',
    story: 'Keep the shortlist useful for everyone',
    views: ['Inbox', 'Collection'],
  },
  {
    step: 'Compare',
    story: 'See the tradeoffs without reopening ten tabs',
    views: ['Collection', 'Listing', 'Compare'],
  },
  {
    step: 'Choose',
    story: 'Make the decision together',
    views: ['Listing', 'Compare'],
  },
]

const atlasViews = ['Share', 'Inbox', 'Collection', 'Listing', 'Compare']

function ProductAtlas() {
  return (
    <Container>
      <FadeIn>
        <section className="overflow-hidden rounded-4xl bg-neutral-950 text-white">
          <div className="grid gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
            <div>
              <p className="font-display text-sm font-semibold tracking-wide text-blue-300 uppercase">
                Product Atlas
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                Map the job. Then map where the product does it.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-neutral-300">
                <p>
                  A feature list loses the thread. I start with the job someone
                  is trying to get done, break it into concrete stories, then
                  connect those stories to the screens, routes, data, and
                  services that make them real.
                </p>
                <p>
                  The result is a product map that a founder, designer, or
                  coding agent can inspect. It shows what exists, what has been
                  verified, and where the experience has holes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-xs">
                {[
                  'Jobs and journeys',
                  'Screens and views',
                  'Implementation evidence',
                  'Marketing surfaces',
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-neutral-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <p className="mb-3 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                Homi example: job steps by product view
              </p>
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="grid min-w-[650px] grid-cols-[150px_1fr_repeat(5,54px)] gap-1.5 text-xs">
                  <div />
                  <div className="px-2 py-2 text-neutral-500">User story</div>
                  {atlasViews.map((view) => (
                    <div
                      key={view}
                      className="flex items-end justify-center px-1 py-2 text-center text-[10px] leading-tight text-neutral-400"
                    >
                      {view}
                    </div>
                  ))}
                  {atlasRows.flatMap((row) => [
                    <div
                      key={`${row.step}-step`}
                      className="rounded-lg bg-white/8 px-3 py-3 font-semibold text-white"
                    >
                      {row.step}
                    </div>,
                    <div
                      key={`${row.step}-story`}
                      className="rounded-lg bg-white/[0.04] px-3 py-3 leading-5 text-neutral-300"
                    >
                      {row.story}
                    </div>,
                    ...atlasViews.map((view) => (
                      <div
                        key={`${row.step}-${view}`}
                        className={`flex items-center justify-center rounded-lg ${
                          row.views.includes(view)
                            ? 'bg-blue-400 text-neutral-950'
                            : 'bg-white/[0.03] text-neutral-700'
                        }`}
                        aria-label={`${row.step}: ${view} ${
                          row.views.includes(view)
                            ? 'supports this story'
                            : 'does not support this story'
                        }`}
                      >
                        {row.views.includes(view) ? '●' : '·'}
                      </div>
                    )),
                  ])}
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-neutral-500">
                This is an experience inventory, not a replacement for the
                delivery backlog.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.03] p-4 sm:p-6 lg:px-16 lg:py-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src="/images/product-atlas/homi-board-2024.png"
                alt="An early Homi collection board used as a source for the Product Atlas"
                width={1080}
                height={595}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              An early Homi product view from 2024. Old screens are useful
              evidence when the map records what they were and when they were
              observed.
            </p>
          </div>
        </section>
      </FadeIn>
    </Container>
  )
}

function Iterate() {
  return (
    <Section
      title="Iterate"
      image={{
        src: '/images/archive/baseline-tune-pivot.png',
        width: 1536,
        height: 1024,
        shape: 2,
        grayscale: false,
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Launching is the beginning, not the end. After an initial release I
          watch how people actually use the product — not how I imagined they
          would. Usage patterns, drop-off points, and support messages are{' '}
          <strong className="font-semibold text-neutral-950">data</strong>.
          Opinions are cheap.
        </p>
        <p>
          First establish a baseline. Then tune the engine through small bets: a
          specific change with a clear expected outcome. If it works, double
          down. If it doesn&apos;t, cut it and move on.
        </p>
        <p>
          Iteration also applies to the portfolio itself. I&apos;m not attached
          to any particular product — I&apos;m attached to building things that
          matter. If the evidence says{' '}
          <strong className="font-semibold text-neutral-950">pivot</strong>, I
          pivot.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        How I track progress
      </h3>
      <List className="mt-8">
        <ListItem title="Metrics over feelings">
          I define success metrics before building a feature, not after. If I
          can&apos;t measure it, I question whether it&apos;s worth building.
        </ListItem>
        <ListItem title="Tight feedback loops">
          Direct access to users. No layers of account managers or product
          committees. Feedback reaches me in hours, not sprints.
        </ListItem>
        <ListItem title="Kill fast">
          Features that don&apos;t move the needle get removed. Simplicity is a
          competitive advantage, especially for a solo product.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Principles" title="What I actually believe">
        <p>
          Not values from a brand exercise. Things I&apos;ve learned from
          building products, making bets that didn&apos;t pan out, and
          occasionally getting it right.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Evidence over opinion">
            The right answer is usually in the data, not in the meeting room. I
            try to form hypotheses and test them rather than argue about what
            users want.
          </GridListItem>
          <GridListItem title="Small surface area">
            Fewer abstractions, fewer dependencies, fewer moving parts. Every
            layer of complexity is technical debt you&apos;re paying interest
            on.
          </GridListItem>
          <GridListItem title="Compounding bets">
            The products I build share underlying infrastructure and insights.
            Work done on one informs the others. That&apos;s not accident —
            it&apos;s strategy.
          </GridListItem>
          <GridListItem title="Remote by default">
            I&apos;ve worked from Oslo, New York, and places in between. The
            best way to stay sharp is to stay curious — and that requires
            freedom of location.
          </GridListItem>
          <GridListItem title="Ship, then polish">
            Perfect is the enemy of shipped. A rough product in front of real
            users teaches more than any internal review cycle.
          </GridListItem>
          <GridListItem title="Own the problem">
            I build in domains where I have genuine conviction. Dating data,
            home search, professional mobility — these aren&apos;t random bets.
            They&apos;re problems I&apos;ve lived.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'How I Work',
  description:
    'How Boe Ventures moves from user stories to product maps, working software, and evidence from real use.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="How I work" title="Discover, build, iterate">
        <p>
          No 12-week discovery phases. No committee-approved roadmaps. I move
          fast, stay close to users, and let evidence drive decisions. It&apos;s
          the same core loop I taught in Lean Startup talks in 2016–2018,
          updated for how I build today.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <ProductAtlas />
        <Iterate />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
