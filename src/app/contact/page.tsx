import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Have an idea, a question, or just want to say hi? Drop me a line.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Let's talk">
        <p>
          Have an idea you want to explore, or just want to connect? I read
          every email.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Email me
          </h2>
          <p className="mt-6 text-base text-neutral-600">
            The most reliable way to reach me — I reply to everything, usually
            within a day or two.
          </p>
          <p className="mt-6">
            <Link
              href="mailto:kristian@boe.ventures"
              className="font-display text-2xl font-semibold text-neutral-950 transition hover:text-neutral-700 sm:text-3xl"
            >
              kristian@boe.ventures
            </Link>
          </p>

          <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Where I work from
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Remote-first. Usually in Oslo or New York, occasionally somewhere
              with better coffee.
            </p>
            <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
          </Border>

          <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Find me online
            </h2>
            <SocialMedia className="mt-6" />
          </Border>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
