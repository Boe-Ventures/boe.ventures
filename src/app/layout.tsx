import { type Metadata } from 'next'

import { company } from '@/lib/company'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://boe.ventures'),
  title: {
    template: '%s - Boe Ventures',
    default: 'Boe Ventures - Software for high-stakes, low-frequency decisions',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://boe.ventures/#organization',
    name: company.displayName,
    legalName: company.legalName,
    url: 'https://boe.ventures',
    email: company.email,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'Norwegian organization number',
      value: company.organizationNumber.replaceAll(' ', ''),
    },
    vatID: company.vatId,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.locality,
      addressCountry: company.address.countryCode,
    },
    sameAs: [company.registryUrl],
  }

  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replaceAll(
              '<',
              '\\u003c',
            ),
          }}
        />
        {children}
      </body>
    </html>
  )
}
