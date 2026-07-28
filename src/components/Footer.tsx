import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { company } from '@/lib/company'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Homi', href: '/work/homi' },
      { title: 'SwipeStats', href: '/work/swipestats' },
      { title: 'Draupnir', href: '/work/draupnir' },
      { title: 'Promad', href: '/work/promad' },
      { title: 'Towers Club', href: '/work/towers' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function ContactCTA() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Say hello
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Building something interesting? Have a question about one of the
        products? Drop me a line.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
      >
        Get in touch
        <ArrowIcon className="w-4" />
      </Link>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <ContactCTA />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-start justify-between gap-x-12 gap-y-8 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo fillOnHover />
          </Link>
          <div className="text-sm leading-6 text-neutral-700 sm:text-right">
            <p className="font-semibold text-neutral-950">
              {company.legalName}
            </p>
            <p>
              Org. no.{' '}
              <a
                href={company.registryUrl}
                className="underline decoration-neutral-950/30 underline-offset-4 transition hover:text-neutral-950"
              >
                {company.organizationNumber} MVA
              </a>
            </p>
            <address className="not-italic">
              {company.address.street}, {company.address.postalCode}{' '}
              {company.address.locality}, {company.address.country}
            </address>
            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition hover:text-neutral-950"
              >
                {company.email}
              </a>
            </p>
            <p className="mt-2">
              © {company.displayName} {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
