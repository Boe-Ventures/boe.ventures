import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { StatList, StatListItem } from '@/components/StatList'
import imageKristian from '@/images/team/kristian.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Approach() {
  return (
    <div className="mx-auto mt-24 max-w-7xl rounded-4xl bg-neutral-950 py-24 px-6 sm:mt-32 lg:mt-40 lg:px-8 lg:py-32">
      <SectionIntro
        eyebrow="How I work"
        title="Ship fast. Learn from real users. Iterate."
        invert
      >
        <p>
          No committees, no process theater. Just a feedback loop between
          product and the people using it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Evidence over opinion" invert>
            Decisions get made based on what users actually do, not what they
            say they'd do or what feels right in a planning meeting.
          </GridListItem>
          <GridListItem title="Remote-first, async by default" invert>
            Oslo and NYC, sometimes simultaneously. Time zones are a scheduling
            constraint, not a reason to slow down.
          </GridListItem>
          <GridListItem title="Compounding bets" invert>
            Every product I build teaches me something that makes the next one
            sharper. Matching problems are my through-line — I just keep
            applying them to better contexts.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Founder() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-12 pt-12 sm:pt-16 lg:grid-cols-2">
          <FadeIn className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-[3rem] blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 25% 15%, rgba(233,168,124,0.35) 0%, transparent 65%)',
              }}
            />
            <div className="overflow-hidden rounded-4xl bg-neutral-100 shadow-[0_30px_70px_rgba(15,15,16,0.15)]">
              <GrayscaleTransitionImage
                src={imageKristian}
                alt="Kristian Elset Bøe"
                className="h-[26rem] w-full object-cover sm:h-[30rem]"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              Founder
            </h2>
            <p className="mt-6 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Kristian Elset Bøe
            </p>
            <p className="mt-6 max-w-lg text-xl text-neutral-600">
              &ldquo;Everything I build is still some version of the same
              problem — finding the right thing in a sea of options with bad
              signal.&rdquo;
            </p>
            <SocialMedia className="mt-8" />
          </FadeIn>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Boe Ventures is the product holding company of Kristian Elset Bøe — a Norwegian engineer building software that solves matching and coordination problems.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About" title="One-person product studio">
        <p>
          Boe Ventures is my holding company. I'm Kristian — Norwegian engineer,
          Oslo and NYC, MSc in AI from NTNU. I build software products and run them.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            My thesis was on apartment matching algorithms. Then I spent years at
            Netlight and Schibsted, then did a stint at Antler where I worked on
            workplace matchmaking at Scales. The pattern kept showing up: people
            trying to find the right thing in a sea of options, with bad tools to
            help them. So I started building better ones.
          </p>
          <p>
            SwipeStats gives dating app users a data lens on their own behavior.
            Homi applies AI to home search — another market where signal is buried
            under noise. Promad.life is next: a community for professional nomads
            who've made remote work a lifestyle, not a perk.
          </p>
          <p>
            I'm a member of Nova Talent, have facilitated at Stanford's STeLA Forum,
            and was Project Manager for Norwegian Game Awards at Start NTNU. Full-stack
            in practice: Next.js, TypeScript, tRPC, ML when the problem warrants it.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3" label="Products in portfolio" />
          <StatListItem value="2" label="Countries operating from" />
          <StatListItem value="∞" label="Matching problems left to solve" />
        </StatList>
      </Container>

      <Approach />

      <Founder />

      {blogArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="From the blog"
          intro="Occasional writing on matching problems and what building these products keeps teaching me."
          pages={blogArticles}
        />
      )}

      <ContactSection />
    </RootLayout>
  )
}
