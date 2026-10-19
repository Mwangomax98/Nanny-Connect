// Business details used across the whole site. Edit here to update every page.
export const site = {
  name: 'tai',
  tagline: 'Pride of Africa',
  founder: 'Hendry Kanje',
  phone: '+255755702121',
  phoneDisplay: '+255 755 702 121',
  whatsapp: '255755702121',
  email: 'taishop589@gmail.com',
  address: {
    street: 'Magila Street',
    area: 'Ilala',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    countryCode: 'TZ',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Magila+Street+Ilala+Dar+es+Salaam',
}

// Product categories, in the order they appear on the site.
export const categories = [
  { id: 'chargers', en: 'Chargers', sw: 'Chaja' },
  { id: 'cables', en: 'Charging cables', sw: 'Nyaya za kuchaji' },
  { id: 'batteries', en: 'Phone batteries', sw: 'Betri za simu' },
  { id: 'holders', en: 'Phone holders & stands', sw: 'Vishikio na stendi za simu' },
  { id: 'storage', en: 'USB drives & memory cards', sw: 'Flash na memory card' },
  { id: 'clippers', en: 'Hair clippers & trimmers', sw: 'Mashine za kunyolea' },
  { id: 'audio', en: 'Earphones & audio', sw: 'Earphone na vifaa vya sauti' },
] as const

export const categoryIds = categories.map((c) => c.id) as [
  (typeof categories)[number]['id'],
  ...(typeof categories)[number]['id'][],
]
