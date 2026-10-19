export type Lang = 'en' | 'sw'
export type Bilingual = { en: string; sw: string }

// Words and sentences used in the page layout. Product text lives in src/content/products.
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.wholesale': 'Wholesale',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Kiswahili',
    'lang.switchLabel': 'Soma kwa Kiswahili',
    'theme.toggle': 'Switch light or dark mode',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.askPrice': 'Ask price on WhatsApp',
    'cta.call': 'Call us',
    'cta.email': 'Email us',
    'cta.viewProducts': 'View products',
    'cta.becomeStockist': 'Become a stockist',
    'cta.details': 'View details',
    'price.onRequest': 'Price on request',
    'product.specs': 'Specifications',
    'product.inTheBox': "What's in the box",
    'product.warranty': 'Warranty',
    'product.warrantyDays': '{days} days',
    'product.model': 'Model',
    'product.back': 'All products',
    'product.faq': 'Questions',
    'product.faq.price.q': 'How much does it cost?',
    'product.faq.price.a':
      'Send us a WhatsApp message with the model code. We reply with retail and wholesale prices.',
    'product.faq.delivery.q': 'Can you deliver outside Dar es Salaam?',
    'product.faq.delivery.a':
      'Yes. Tell us your town on WhatsApp and we will arrange delivery through a trusted transporter.',
    'product.faq.wholesale.q': 'Do you sell in bulk?',
    'product.faq.wholesale.a':
      'Yes. We supply retailers, wholesalers, distributors and barbershops. Ask us for wholesale prices.',
    'wa.product':
      "Hello tai, I'm interested in {code} {name}. Please share the price and availability. {url}",
    'wa.general': 'Hello tai, I would like to know more about your products.',
    'wa.wholesale':
      'Hello tai, I would like to become a stockist.\nBusiness name: \nTown / country: \nType of business: \nProducts I need: \nQuantity per month: ',
    'footer.rights': 'All rights reserved.',
    'footer.contact': 'Contact',
    'footer.pages': 'Pages',
    'notFound.title': 'Page not found',
    'notFound.text': 'This page does not exist. It may have moved.',
  },
  sw: {
    'nav.home': 'Mwanzo',
    'nav.products': 'Bidhaa',
    'nav.wholesale': 'Jumla',
    'nav.about': 'Kuhusu sisi',
    'nav.contact': 'Mawasiliano',
    'nav.menu': 'Menyu',
    'nav.skip': 'Ruka hadi maudhui',
    'lang.switch': 'English',
    'lang.switchLabel': 'Read in English',
    'theme.toggle': 'Badilisha mwanga au giza',
    'cta.whatsapp': 'Tuandikie WhatsApp',
    'cta.askPrice': 'Uliza bei WhatsApp',
    'cta.call': 'Tupigie simu',
    'cta.email': 'Tutumie barua pepe',
    'cta.viewProducts': 'Tazama bidhaa',
    'cta.becomeStockist': 'Kuwa msambazaji wetu',
    'cta.details': 'Tazama maelezo',
    'price.onRequest': 'Bei kwa ombi',
    'product.specs': 'Vipimo',
    'product.inTheBox': 'Vilivyomo kwenye boksi',
    'product.warranty': 'Dhamana',
    'product.warrantyDays': 'Siku {days}',
    'product.model': 'Modeli',
    'product.back': 'Bidhaa zote',
    'product.faq': 'Maswali',
    'product.faq.price.q': 'Bei yake ni kiasi gani?',
    'product.faq.price.a':
      'Tutumie ujumbe WhatsApp ukiwa na namba ya modeli. Tutakujibu na bei ya rejareja na ya jumla.',
    'product.faq.delivery.q': 'Mnaweza kusafirisha nje ya Dar es Salaam?',
    'product.faq.delivery.a':
      'Ndiyo. Tuambie mji wako WhatsApp na tutapanga usafirishaji kupitia msafirishaji wa kuaminika.',
    'product.faq.wholesale.q': 'Mnauza kwa jumla?',
    'product.faq.wholesale.a':
      'Ndiyo. Tunahudumia wauzaji wa rejareja, wa jumla, wasambazaji na vinyozi. Uliza bei ya jumla.',
    'wa.product':
      'Habari tai, nimevutiwa na {code} {name}. Naomba bei na upatikanaji wake. {url}',
    'wa.general': 'Habari tai, ningependa kujua zaidi kuhusu bidhaa zenu.',
    'wa.wholesale':
      'Habari tai, ningependa kuwa msambazaji wenu.\nJina la biashara: \nMji / nchi: \nAina ya biashara: \nBidhaa ninazohitaji: \nIdadi kwa mwezi: ',
    'footer.rights': 'Haki zote zimehifadhiwa.',
    'footer.contact': 'Mawasiliano',
    'footer.pages': 'Kurasa',
    'notFound.title': 'Ukurasa haupatikani',
    'notFound.text': 'Ukurasa huu haupo. Huenda umehamishwa.',
  },
} as const

export type UiKey = keyof (typeof ui)['en']

export function t(lang: Lang, key: UiKey, vars: Record<string, string | number> = {}) {
  let text: string = ui[lang][key]
  for (const [name, value] of Object.entries(vars)) {
    text = text.replace(`{${name}}`, String(value))
  }
  return text
}

/** Adds the /sw prefix to a path for Swahili pages. Paths start and end with "/". */
export function localePath(lang: Lang, path: string) {
  return lang === 'en' ? path : `/sw${path}`
}

/** The same page in the other language. */
export function alternatePath(lang: Lang, pathname: string) {
  if (lang === 'sw') return pathname.replace(/^\/sw(?=\/)/, '') || '/'
  return `/sw${pathname}`
}
