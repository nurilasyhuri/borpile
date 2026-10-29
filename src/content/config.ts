import { defineCollection, z } from 'astro:content';

const artikelCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('Tim Teknik Pondasi Mandiri'),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  artikel: artikelCollection,
};
