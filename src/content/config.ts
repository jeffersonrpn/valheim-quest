import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const heroes = defineCollection({
  schema: z.object({
    name: z.string(),
    class: z.string(),
    atk: z.number(),
    def: z.number(),
    building: z.number(),
    exploration: z.number(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog, heroes };
