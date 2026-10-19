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
