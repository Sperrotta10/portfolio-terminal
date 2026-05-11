import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tech: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
