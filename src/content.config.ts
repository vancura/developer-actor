import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    loader: glob({
        pattern: '**/[^_]*.{md,mdx}',
        base: 'content/pages'
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional()
    })
});

export const collections = {
    pages
};
