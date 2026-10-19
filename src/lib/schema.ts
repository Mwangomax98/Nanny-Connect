import { site } from '../data/site'

/** Google structured data describing the shop (helps local search results). */
export function storeSchema(siteUrl: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    name: 'tai – Pride of Africa',
    url: siteUrl.href,
    image: new URL('/og-default.jpg', siteUrl).href,
    logo: new URL('/logo.png', siteUrl).href,
    telephone: site.phone,
    email: site.email,
    founder: { '@type': 'Person', name: site.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: `${site.address.area}, ${site.address.city}`,
      addressCountry: site.address.countryCode,
    },
    areaServed: ['TZ', 'KE', 'UG', 'RW', 'BI'],
  }
}
