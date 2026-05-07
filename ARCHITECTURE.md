# AI Product Manager Portfolio - Architecture Document

## Executive Summary

This document outlines the technical architecture for Goutham Shaji CK's AI-native Product Manager portfolio website. The architecture prioritizes **extensibility** - enabling easy addition of new projects, workflows, and case studies without code changes.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Content Schemas](#content-schemas)
4. [Content Collections Configuration](#content-collections-configuration)
5. [Extensibility Workflow](#extensibility-workflow)
6. [Deployment Strategy](#deployment-strategy)
7. [Performance Considerations](#performance-considerations)
8. [Security Considerations](#security-considerations)

---

## 1. Tech Stack

| Component | Technology | Version | Rationale |
|-----------|-----------|---------|-----------|
| **Framework** | Next.js | 16 | Server Components, SEO optimization, image optimization, ISR |
| **Language** | TypeScript | 5.x | Type safety, better developer experience |
| **Content Layer** | Content Collections | latest | File-based content management, schema validation, zero setup |
| **Styling** | Tailwind CSS | 4 | Dark theme support, utility-first, already used in projects |
| **Animations** | Framer Motion | latest | Declarative animations, already familiar |
| **Icons** | Lucide React | latest | Lightweight, consistent with existing projects |
| **Deployment** | Vercel | latest | Native Next.js integration, auto-deploys, edge caching |

### Key Dependencies

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "framer-motion": "^12.34.3",
    "lucide-react": "^0.575.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@content-collections/next": "^0.5.0",
    "@content-collections/core": "^0.5.0",
    "@tailwindcss/postcss": "^4",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "^16.1.6"
  }
}
```

---

## 2. Folder Structure

```
portfolio-website/
├── app/                                      # Next.js App Router
│   ├── layout.tsx                            # Root layout with theme provider
│   ├── page.tsx                              # Home page
│   ├── workflows/
│   │   └── page.tsx                          # Workflows listing
│   ├── case-studies/
│   │   └── page.tsx                          # Case studies listing
│   ├── projects/
│   │   └── page.tsx                          # Projects listing
│   ├── prds/
│   │   └── page.tsx                          # PRD documents
│   └── about/
│       └── page.tsx                          # About page
│
├── content/                                   # ALL CONTENT (add new items here!)
│   ├── workflows/
│   │   ├── ai-stock-analysis-email-agent.md
│   │   ├── ai-product-idea-to-prd-system.md
│   │   └── [add-new-workflow].md            # ← Add new workflows here
│   ├── case-studies/
│   │   ├── cloudeagle-rpa.md
│   │   ├── propflo-whatsapp.md
│   │   ├── youtube-search.md
│   │   ├── refund-anxiety.md
│   │   └── [add-new-case-study].md          # ← Add new case studies here
│   ├── projects/
│   │   ├── nomadai-mvp.md
│   │   ├── peeko-daily-companion.md
│   │   ├── timely-ai-wedding-planner.md
│   │   └── [add-new-project].md             # ← Add new projects here
│   ├── prds/
│   │   ├── uber-guardian-mode.md
│   │   └── [add-new-prd].md                 # ← Add new PRDs here
│   └── config/
│       ├── site.ts                           # Global site config
│       └── hero.ts                           # Hero section content
│
├── components/
│   ├── ui/                                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Input.tsx
│   │   └── Navbar.tsx
│   ├── workflow/                             # Workflow-specific components
│   │   ├── WorkflowCard.tsx
│   │   └── WorkflowGrid.tsx
│   ├── project/                              # Project components
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   ├── case-study/                           # Case study components
│   │   ├── CaseStudyCard.tsx
│   │   └── CaseStudyFeatured.tsx
│   ├── prd/                                  # PRD components
│   │   ├── PRDCard.tsx
│   │   └── PRDDownload.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   └── animations/
│       ├── ScrollReveal.tsx
│       ├── AnimatedBackground.tsx
│       └── Counter.tsx
│
├── lib/
│   ├── content/                              # Content collection helpers
│   │   └── collections.ts                    # Helper functions for content access
│   ├── utils.ts                              # Utility functions
│   └── types.ts                              # Shared TypeScript types
│
├── public/                                   # Static assets
│   ├── pdfs/                                 # All PDF documents
│   │   ├── Uber_Safety_Assurance_Mode.pdf
│   │   ├── CloudEagle-RPA-Deck.pdf
│   │   ├── PropFlo-WhatsApp.pdf
│   │   ├── YouTube-Search.pdf
│   │   └── Reducing-Refund-Anxiety.pdf
│   ├── images/
│   │   ├── workflows/                        # Workflow visualizations
│   │   │   ├── stock-analysis.png
│   │   │   └── ai-prd-system.png
│   │   ├── projects/                         # Project screenshots
│   │   │   ├── nomadai.png
│   │   │   ├── peeko.png
│   │   │   └── timely-ai.png
│   │   └── case-studies/                     # Case study assets
│   │       └── cloudeagle.png
│   ├── resume/
│   │   └── Goutham-Shaji-Resume.pdf
│   └── favicon.ico
│
├── content-collections.ts                    # Content collections config
├── next.config.ts                            # Next.js configuration
├── tailwind.config.ts                        # Tailwind configuration
├── tsconfig.json                             # TypeScript configuration
├── postcss.config.mjs                        # PostCSS configuration
├── package.json                              # Dependencies
└── README.md                                 # Setup instructions
```

---

## 3. Content Schemas

### 3.1 Workflow Schema

```typescript
// content/workflows/ai-stock-analysis-email-agent.md
---
title: "AI Stock Analysis Email Agent"
slug: "ai-stock-analysis-email-agent"
description: "Automated stock market analysis with email delivery"
status: "published"  // draft | published
date: "2025-03-15"
tags: ["n8n", "AI", "Stock Analysis", "Email Automation"]
tech: ["n8n", "Google Gemini", "Gmail API"]
---

## Workflow Overview

[Brief description of what the workflow does...]

## How It Works

[Step-by-step explanation...]

## Key Features

- Feature 1
- Feature 2
- Feature 3
```

**Schema Definition:**
```typescript
z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published']),
  date: z.string(),
  tags: z.array(z.string()),
  tech: z.array(z.string()),
})
```

### 3.2 Case Study Schema

```typescript
// content/case-studies/cloudeagle-rpa.md
---
title: "CloudEagle AI-Driven Web Automation"
slug: "cloudeagle-rpa-solution"
description: "SaaS user management automation for non-API applications"
status: "published"
date: "2025-04-01"
company: "CloudEagle"
role: "Associate Product Manager"
duration: "Mar 2025 - Present"
tags: ["AI Automation", "RPA", "SaaS", "Product Strategy"]
pdf: "/pdfs/CloudEagle-RPA-Deck.pdf"
---

## Problem

[Problem description...]

## Solution

[Solution approach...]

## Impact

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Onboarding Time | 2-3 days | <1 hour | 96% faster |

## Tech Stack

- [List technologies]
```

**Schema Definition:**
```typescript
z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published']),
  date: z.string(),
  company: z.string(),
  role: z.string().optional(),
  duration: z.string().optional(),
  tags: z.array(z.string()),
  pdf: z.string().optional(),
})
```

### 3.3 Project Schema

```typescript
// content/projects/peeko-daily-companion.md
---
title: "Peeko Daily Companion"
slug: "peeko-daily-companion"
description: "AI-powered baby product discovery platform"
status: "published"
date: "2025-03-26"
type: "vibe-coding"
liveUrl: "https://peeko-companion.vercel.app"
githubUrl: "https://github.com/gouthamshaji/peeko-companion"
tags: ["JavaScript", "AI", "E-commerce", "Baby Products"]
prd: "/pdfs/Peeko-Daily-Companion-PRD.pdf"
infoArchitecture: "/pdfs/Peeko-Information-Architecture.pdf"
uiux: "/pdfs/Peeko-UI-UX.pdf"
---

## Overview

[Project description...]

## The Innovation

[What makes it unique...]

## Key Features

- Feature 1
- Feature 2

## Business Impact

- +85% Daily Active Users
- +45% Average Order Value

## Tech Stack

- JavaScript
- HTML
- CSS
- AI-based pattern detection
```

**Schema Definition:**
```typescript
z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published']),
  date: z.string(),
  type: z.string(),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  tags: z.array(z.string()),
  prd: z.string().optional(),
  infoArchitecture: z.string().optional(),
  uiux: z.string().optional(),
})
```

### 3.4 PRD Schema

```typescript
// content/prds/uber-guardian-mode.md
---
title: "Uber Safety Assurance Mode - Guardian Mode"
slug: "uber-guardian-mode"
description: "Enhanced safety feature for ride-hailing with real-time monitoring"
status: "published"
date: "2025-02-20"
company: "Uber"
type: "prd"
tags: ["Safety", "Real-time Monitoring", "Emergency Response"]
pdf: "/pdfs/Uber_Safety_Assurance_Mode.pdf"
---

## Overview

[PRD description...]

## Key Features

- Feature 1
- Feature 2

## Technical Requirements

[Technical specs...]
```

**Schema Definition:**
```typescript
z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published']),
  date: z.string(),
  company: z.string().optional(),
  type: z.string(),
  tags: z.array(z.string()),
  pdf: z.string(),
})
```

### 3.5 Global Config Schema

```typescript
// content/config/site.ts
export const siteConfig = {
  name: "Goutham Shaji CK",
  title: "AI Product Manager Portfolio",
  description: "Specializing in agentic AI workflows, product strategy, and AI-driven solutions",
  url: "https://gouthamshaji.dev",
  author: {
    name: "Goutham Shaji CK",
    email: "gouthamshaji@gmail.com",
    linkedin: "https://linkedin.com/in/gouthamshaji",
    github: "https://github.com/gouthamshaji"
  },
  social: {
    linkedin: "https://linkedin.com/in/gouthamshaji",
    github: "https://github.com/gouthamshaji",
    email: "mailto:gouthamshaji@gmail.com"
  }
}
```

---

## 4. Content Collections Configuration

```typescript
// content-collections.ts
import { defineCollection, z } from '@content-collections/core'

const workflows = defineCollection({
  name: 'workflows',
  directory: 'content/workflows',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']),
    date: z.string(),
    tags: z.array(z.string()),
    tech: z.array(z.string()),
  }),
})

const caseStudies = defineCollection({
  name: 'caseStudies',
  directory: 'content/case-studies',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']),
    date: z.string(),
    company: z.string(),
    role: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()),
    pdf: z.string().optional(),
  }),
})

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']),
    date: z.string(),
    type: z.string(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    tags: z.array(z.string()),
    prd: z.string().optional(),
    infoArchitecture: z.string().optional(),
    uiux: z.string().optional(),
  }),
})

const prds = defineCollection({
  name: 'prds',
  directory: 'content/prds',
  include: '*.md',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']),
    date: z.string(),
    company: z.string().optional(),
    type: z.string(),
    tags: z.array(z.string()),
    pdf: z.string(),
  }),
})

export default [workflows, caseStudies, projects, prds]
```

---

## 5. Extensibility Workflow

### 5.1 Adding a New Workflow (5 minutes)

```bash
# 1. Create content file
content/workflows/my-new-workflow.md

# 2. Add workflow JSON (if applicable)
public/workflows/my-new-workflow.json

# 3. Add thumbnail image
public/images/workflows/my-new-workflow.png

# 4. Commit and push
git add .
git commit -m "Add new workflow: My New Workflow"
git push
```

No code changes required!

### 5.2 Adding a New Case Study (5 minutes)

```bash
# 1. Create content file
content/case-studies/my-new-case-study.md

# 2. Upload PDF
public/pdfs/my-new-case-study.pdf

# 3. Add images
public/images/case-studies/my-new-case-study.png

# 4. Commit and push
git add .
git commit -m "Add new case study: My New Case Study"
git push
```

No code changes required!

### 5.3 Adding a New Project (5 minutes)

```bash
# 1. Create content file
content/projects/my-new-project.md

# 2. Upload assets
public/pdfs/my-new-project-prd.pdf
public/images/projects/my-new-project.png

# 3. Commit and push
git add .
git commit -m "Add new project: My New Project"
git push
```

No code changes required!

### 5.4 Content Status Management

All content items have a `status` field:
- `draft`: Not visible on production site
- `published`: Visible on production site

To unpublish content without deleting it, change `status: "published"` to `status: "draft"`.

---

## 6. Deployment Strategy

### 6.1 Vercel Deployment

**Prerequisites:**
- GitHub repository with the code
- Vercel account
- Custom domain (optional)

**Setup Steps:**

1. **Connect Repository**
   ```bash
   # In Vercel dashboard:
   # 1. Click "Add New Project"
   # 2. Import from GitHub
   # 3. Select your repository
   ```

2. **Configure Build Settings**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "devCommand": "npm run dev",
     "installCommand": "npm install"
   }
   ```

3. **Environment Variables**
   - No secrets required (all content is public)
   - Next.js auto-detects configuration

4. **Deployment Configuration**
   ```bash
   # Create vercel.json (optional)
   {
     "build": {
       "env": {
         "NEXT_PUBLIC_SITE_URL": "https://yourdomain.com"
       }
     }
   }
   ```

### 6.2 Automatic Deployments

Vercel provides automatic deployments:

| Trigger | Type | Description |
|---------|------|-------------|
| Push to `main` | Production | Deploys to production URL |
| Pull Request | Preview | Creates preview deployment |
| Push to other branches | Preview | Creates preview deployment |

### 6.3 Custom Domain Configuration

```bash
# In Vercel project settings:
# 1. Go to Domains
# 2. Add your domain (e.g., gouthamshaji.dev)
# 3. Configure DNS records
# 4. Enable automatic HTTPS
```

**DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 6.4 Deployment Pipeline

```
Git Push
    ↓
Vercel Webhook
    ↓
Build & Test
    ↓
Deploy to Edge Network
    ↓
Cache Invalidation
    ↓
Production Live
```

---

## 7. Performance Considerations

### 7.1 Image Optimization

- Use Next.js `<Image>` component for all images
- Configure responsive sizes
- Enable WebP format with fallbacks
- Lazy load below-the-fold images

```typescript
<Image
  src="/images/projects/nomadai.png"
  alt="NomadAI Project"
  width={800}
  height={600}
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 7.2 Code Splitting

- Route-based splitting (automatic in Next.js App Router)
- Dynamic imports for heavy components
- Component-level lazy loading

```typescript
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <LoadingSpinner /> }
)
```

### 7.3 Caching Strategy

- Static assets: Cache indefinitely
- HTML pages: Cache with revalidation
- API routes: Cache for 1 hour

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',
      },
    ],
  },
}
```

### 7.4 Bundle Optimization

- Tree-shaking enabled by default
- Analyze bundle size with `@next/bundle-analyzer`
- Remove unused dependencies

```bash
npm run build
npm run analyze
```

---

## 8. Security Considerations

### 8.1 Content Security Policy

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ]
  },
}
```

### 8.2 Environment Variables

- No sensitive data stored in code
- All configuration through public environment variables
- No secrets required for portfolio functionality

### 8.3 Content Validation

- Zod schemas validate all content at build time
- Type-safe content access through TypeScript
- Invalid content prevents build

---

## 9. Critical Implementation Files

| File | Purpose | Priority |
|------|---------|----------|
| `content-collections.ts` | Core content configuration | Critical |
| `app/layout.tsx` | Root layout with theme provider | Critical |
| `lib/content/collections.ts` | Content access helpers | Critical |
| `components/ui/Card.tsx` | Reusable card component | High |
| `tailwind.config.ts` | Theme configuration | High |
| `next.config.ts` | Next.js configuration | Medium |

---

## 10. Architecture Decisions & Trade-offs

### 10.1 Content Collections vs. Headless CMS

| Factor | Content Collections | Headless CMS |
|--------|-------------------|--------------|
| Setup | Zero setup | Requires CMS setup |
| Cost | Free | Paid tiers for advanced features |
| Learning Curve | Low (just markdown) | Medium (CMS interface) |
| Performance | Fast (local files) | Depends on API |
| Flexibility | High (any markdown) | High (rich text editor) |

**Decision:** Content Collections - file-based, zero setup, perfect for developer workflow.

### 10.2 Static Generation vs. SSR

| Factor | Static Generation | SSR |
|--------|-------------------|-----|
| Performance | Fastest (pre-built) | Fast (cached) |
| Content Updates | Rebuild required | Dynamic |
| Hosting | Any static host | Requires Node.js |
| Complexity | Simple | More complex |

**Decision:** Static Generation with ISR - best of both worlds.

### 10.3 Animation Library

| Library | Bundle Size | Ease of Use | Features |
|---------|-------------|-------------|----------|
| Framer Motion | ~100KB | High | Declarative, powerful |
| CSS Animations | 0KB | Medium | Limited interactivity |
| GSAP | ~70KB | Medium | Very powerful |

**Decision:** Framer Motion - already familiar, declarative API, smooth animations.

---

## 11. Monitoring & Analytics

### 11.1 Recommended Analytics

- **Vercel Analytics** - Built-in, no extra setup
- **Google Analytics 4** - Optional for detailed tracking
- **Plausible** - Privacy-focused alternative

### 11.2 Performance Monitoring

- **Vercel Speed Insights** - Core Web Vitals
- **Lighthouse CI** - Automated performance checks
- **Web Vitals** - User-facing metrics

---

## 12. Maintenance & Updates

### 12.1 Dependency Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest
```

### 12.2 Content Updates

Content updates are as simple as:
1. Edit markdown file
2. Commit and push
3. Automatic deployment

### 12.3 Regular Maintenance Tasks

| Task | Frequency |
|------|-----------|
| Dependency updates | Monthly |
| Security audits | Quarterly |
| Performance review | Quarterly |
| Content review | As needed |

---

## 13. Troubleshooting

### 13.1 Build Failures

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### 13.2 Content Not Showing

1. Check `status: "published"` in markdown frontmatter
2. Verify file is in correct directory
3. Check for YAML syntax errors
4. Rebuild the site

### 13.3 Styling Issues

1. Verify Tailwind CSS is properly configured
2. Check for class name conflicts
3. Clear browser cache
4. Rebuild with `npm run build`

---

## Appendix A: Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

---

## Appendix B: File Templates

### B.1 Workflow Template

```markdown
---
title: "Workflow Title"
slug: "workflow-slug"
description: "Brief description"
status: "published"
date: "2025-01-01"
tags: ["tag1", "tag2"]
tech: ["tech1", "tech2"]
---

## Overview

Description...

## How It Works

Steps...

## Key Features

- Feature 1
- Feature 2
```

### B.2 Project Template

```markdown
---
title: "Project Title"
slug: "project-slug"
description: "Brief description"
status: "published"
date: "2025-01-01"
type: "vibe-coding"
liveUrl: "https://example.com"
githubUrl: "https://github.com/user/repo"
tags: ["tag1", "tag2"]
prd: "/pdfs/prd.pdf"
---

## Overview

Description...

## The Innovation

Unique aspects...

## Key Features

- Feature 1
- Feature 2

## Tech Stack

- Tech 1
- Tech 2
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-05-05 | Initial architecture document |

---

## Contact

For questions about this architecture, contact:
- **Email:** gouthamshaji@gmail.com
- **GitHub:** github.com/gouthamshaji
- **LinkedIn:** linkedin.com/in/gouthamshaji
