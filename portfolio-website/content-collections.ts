import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const workflows = defineCollection({
  name: "workflows",
  directory: "content/workflows",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    tech: z.array(z.string()),
    content: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  name: "caseStudies",
  directory: "content/case-studies",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.string(),
    date: z.string(),
    company: z.string(),
    role: z.string(),
    duration: z.string(),
    tags: z.array(z.string()),
    pdf: z.string().optional(),
    content: z.string().optional(),
  }),
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.string(),
    date: z.string(),
    type: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    tags: z.array(z.string()),
    prd: z.string().optional(),
    infoArchitecture: z.string().optional(),
    uiux: z.string().optional(),
    content: z.string().optional(),
  }),
});

const prds = defineCollection({
  name: "prds",
  directory: "content/prds",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.string(),
    date: z.string(),
    company: z.string(),
    type: z.string(),
    tags: z.array(z.string()),
    pdf: z.string().optional(),
    content: z.string().optional(),
  }),
});

export default defineConfig({
  content: [workflows, caseStudies, projects, prds],
});
