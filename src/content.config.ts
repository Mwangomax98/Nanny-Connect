import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { categoryIds } from './data/site'

// Text written in both languages.
const bilingual = z.object({ en: z.string(), sw: z.string() })

const products = defineCollection({
  // Every .md file in src/content/products is one product.
  loader: glob({ pattern: '*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      code: z.string(),
      category: z.enum(categoryIds),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      hidden: z.boolean().default(false),
      images: z.array(image()).min(1),
      name: bilingual,
      summary: bilingual,
      specs: z
        .array(z.object({ en: z.string(), sw: z.string(), value: bilingual.or(z.string()) }))
        .default([]),
      inTheBox: z.array(bilingual).default([]),
      warrantyDays: z.number().optional(),
      price: z.string().optional(),
    }),
})

export const collections = { products }
