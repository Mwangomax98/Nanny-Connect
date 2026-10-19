import { getCollection, type CollectionEntry } from 'astro:content'
import type { Bilingual, Lang } from './i18n'

export type Product = CollectionEntry<'products'>

/** Visible products, in the order set by each file's `order` number. */
export async function getProducts() {
  const all = await getCollection('products', ({ data }) => !data.hidden)
  return all.sort((a, b) => a.data.order - b.data.order || a.data.code.localeCompare(b.data.code))
}

/** The web address part for a product, e.g. "t-05". */
export function productSlug(product: Product) {
  return product.id
}

/** Picks the right language from text that may be written once or in both languages. */
export function pick(lang: Lang, value: Bilingual | string) {
  return typeof value === 'string' ? value : value[lang]
}

// Spec rows shown as short chips on product cards, in priority order.
const chipLabels = ['Maximum output', 'Rating', 'Capacity', 'Port', 'Ports', 'Connectors', 'Length', 'Cable length', 'Plug', 'Connection', 'Power', 'Display']

/** Up to three short spec chips for a product card, e.g. ["65W", "USB-C", "UK plug"]. */
export function keySpecs(product: Product, lang: Lang) {
  const chips: string[] = []
  for (const label of chipLabels) {
    const spec = product.data.specs.find((s) => s.en === label)
    if (!spec) continue
    let text = pick(lang, spec.value)
    const english = pick('en', spec.value)
    if (label === 'Plug') {
      if (english.includes('UK')) text = lang === 'en' ? 'UK plug' : 'Plagi ya UK'
      else if (english.includes('Europe')) text = lang === 'en' ? 'EU plug' : 'Plagi ya EU'
    }
    // "1 × USB-A, 1 × USB-C" → "USB-A + USB-C"; long text → first part only
    text = text.replace(/\b1 × /g, '').replace(', ', label.startsWith('Port') ? ' + ' : ', ').split(',')[0].trim()
    if (text && !chips.includes(text)) chips.push(text)
    if (chips.length === 3) break
  }
  return chips
}

/** Text the product search matches against (code, names and specs in both languages). */
export function searchText(product: Product) {
  const { code, name, summary, specs } = product.data
  const values = specs.flatMap((s) => [s.en, s.sw, ...(typeof s.value === 'string' ? [s.value] : [s.value.en, s.value.sw])])
  return [code, code.replace('-', ''), name.en, name.sw, summary.en, summary.sw, ...values].join(' ').toLowerCase()
}
