import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

interface CareerEntry {
  role: string
  company: string
  period: string
  location?: string
  description: string
}

const career: CareerEntry[] = [
  {
    role: 'Founder',
    company: 'Homi',
    period: 'Oct 2025 to Present',
    location: 'Oslo',
    description:
      'Building a collaborative home search tool that replaces messy group chats and spreadsheets with one shared workspace.',
  },
  {
    role: 'Founding Engineer',
    company: 'Wordware (YC S24)',
    period: 'Aug 2024 to Jul 2025',
    location: 'San Francisco',
    description:
      'Helped design and scale the product and infrastructure through a $30M seed round. Built parts of the typed multimodal runtime powering structured AI workflows, and supported company-wide SOC 2 Type I & II compliance.',
  },
  {
    role: 'Lead Engineer',
    company: 'Matcha',
    period: 'Mar 2023 to May 2024',
    description:
      'A platform for professionals and communities investing in growing their network in a focused way.',
  },
  {
    role: 'Senior Software Engineer → Dev Team Lead → Engineering Manager',
    company: 'Holaplex',
    period: 'Nov 2021 to Jan 2023',
    location: 'Remote',
    description:
      'Grew from IC into managing the engineering team over 15 months, working on distributed systems and Solana-based infrastructure.',
  },
  {
    role: 'Co-Founder & CTO (Acquired)',
    company: 'Scales',
    period: 'Mar 2020 to May 2022',
    location: 'Palo Alto',
    description:
      'Enterprise software for designing and automating employee engagement programs. Connected 1,000+ people worldwide across 3,000+ program interactions during private beta.',
  },
  {
    role: 'Product Lead',
    company: 'Husleie.no',
    period: 'Jul 2019 to Feb 2020',
    location: 'Oslo',
    description:
      'Digitising the landlord-tenant relationship. Led process and requirements across the org.',
  },
  {
    role: 'Consultant',
    company: 'Netlight',
    period: 'Sep 2018 to Jul 2019',
    location: 'Oslo / Berlin',
    description:
      'Client work at VG/Schibsted (partner integration API, recommendation system, GDPR-compliant consent handling) and at Klarna Bank in Berlin, preparing the merchant onboarding flow for its US launch.',
  },
]

const competencies = [
  {
    title: 'System design & architecture',
    description:
      'Mapping how the pieces of a system fit together, across a range of products and teams.',
  },
  {
    title: 'Frontend and product engineering',
    description:
      'React and Next.js day to day, with a preference for flat, functional design over decoration.',
  },
  {
    title: 'APIs and data',
    description:
      'Node.js and TypeScript on the backend, tRPC or REST for APIs, Postgres or MongoDB depending on the shape of the data.',
  },
  {
    title: 'Applied AI',
    description:
      'MSc specialization in AI and recommendation systems, applied since to production products.',
  },
]

const education = [
  {
    title: 'MSc in Computer Science & Artificial Intelligence',
    place: 'Norwegian University of Science and Technology (NTNU), Trondheim',
    period: '2013 to 2018',
    description:
      'Specialization in artificial intelligence and recommendation systems. Thesis on AI-based apartment matching.',
  },
  {
    title: 'Study Abroad / Exchange',
    place: 'University of Melbourne, Australia',
    period: '2015 to 2016',
    description: 'One year abroad as part of the NTNU degree.',
  },
]

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "Kristian Elset Bø's career history, technical background, and education.",
}

export default function Resume() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Resume" title="Career history">
        <p>
          Technical background, career history, and education. This is the long
          version of the About page.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Key competencies
          </h2>
        </FadeIn>
        <GridList className="mt-10">
          {competencies.map((item) => (
            <GridListItem key={item.title} title={item.title}>
              {item.description}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Career
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-10">
          <ul role="list">
            {career.map((entry, i) => (
              <li key={i} className="group mt-10 first:mt-0">
                <FadeIn>
                  <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-base font-semibold text-neutral-950">
                        {entry.role}{' '}
                        <span className="font-normal text-neutral-500">
                          · {entry.company}
                        </span>
                      </h3>
                      <span className="text-sm text-neutral-500">
                        {entry.period}
                        {entry.location ? ` · ${entry.location}` : ''}
                      </span>
                    </div>
                    <p className="mt-3 text-base text-neutral-600">
                      {entry.description}
                    </p>
                  </Border>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Education
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-10">
          <ul role="list">
            {education.map((item, i) => (
              <li key={i} className="group mt-10 first:mt-0">
                <FadeIn>
                  <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-base font-semibold text-neutral-950">
                        {item.title}
                      </h3>
                      <span className="text-sm text-neutral-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">
                      {item.place}
                    </p>
                    <p className="mt-3 text-base text-neutral-600">
                      {item.description}
                    </p>
                  </Border>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <a
            href="/downloads/kristian-elset-boe-cv.pdf"
            className="text-base font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
          >
            Download as PDF
          </a>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
