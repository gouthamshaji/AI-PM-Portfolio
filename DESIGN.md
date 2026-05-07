# AI Product Manager Portfolio - Design Document

## Executive Summary

This document establishes the visual identity and design system for Goutham Shaji CK's AI-native Product Manager portfolio. The design prioritizes a dark, modern aesthetic with vibrant accents, smooth animations, and a focus on content presentation.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Border Radius](#border-radius)
6. [Shadows & Effects](#shadows--effects)
7. [Component Library](#component-library)
8. [Animation Patterns](#animation-patterns)
9. [Layout System](#layout-system)
10. [Icon System](#icon-system)
11. [Responsive Design](#responsive-design)
12. [Accessibility](#accessibility)
13. [Page Sections](#page-sections)

---

## 1. Design Philosophy

**Core Principles:**

1. **Content-First** - Design serves to showcase work, not distract from it
2. **AI-Native Aesthetic** - Modern, tech-forward, professional but innovative
3. **Dark Theme** - Reduces eye strain, emphasizes content, feels premium
4. **Smooth Interactions** - Micro-interactions enhance UX without overwhelming
5. **Accessibility-First** - WCAG AA compliant, keyboard navigable, screen reader friendly

---

## 2. Color Palette

### 2.1 Primary Colors

```css
/* Background Colors */
--background: #0a0a0a;          /* Deep black - primary background */
--background-secondary: #111111; /* Slightly lighter - card backgrounds */
--background-tertiary: #161616;  /* Elevation surfaces */

/* Text Colors */
--foreground: #ffffff;           /* Primary text - 21:1 contrast */
--foreground-muted: #a1a1aa;     /* Secondary text - 18.9:1 contrast */
--foreground-subtle: #71717a;    /* Tertiary text - 12.6:1 contrast */
```

### 2.2 Accent Colors

```css
/* Electric Blue - Primary Action */
--accent-blue: #3b82f6;
--accent-blue-light: #60a5fa;
--accent-blue-dark: #2563eb;
--accent-blue-glow: rgba(59, 130, 246, 0.4);

/* Vibrant Purple - Secondary Action */
--accent-purple: #8b5cf6;
--accent-purple-light: #a78bfa;
--accent-purple-dark: #7c3aed;
--accent-purple-glow: rgba(139, 92, 246, 0.4);

/* Cyan - Highlights & Tech Elements */
--accent-cyan: #06b6d4;
--accent-cyan-light: #22d3ee;
--accent-cyan-dark: #0891b2;
--accent-cyan-glow: rgba(6, 182, 212, 0.4);
```

### 2.3 Semantic Colors

```css
/* Success */
--success: #10b981;
--success-glow: rgba(16, 185, 129, 0.4);

/* Warning */
--warning: #f59e0b;
--warning-glow: rgba(245, 158, 11, 0.4);

/* Error */
--error: #ef4444;
--error-glow: rgba(239, 68, 68, 0.4);

/* Info */
--info: #3b82f6;
--info-glow: rgba(59, 130, 246, 0.4);
```

### 2.4 Glassmorphism Variables

```css
--glass-bg: rgba(10, 10, 10, 0.6);
--glass-bg-hover: rgba(26, 26, 26, 0.7);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-border-hover: rgba(255, 255, 255, 0.12);
--glass-blur: 16px;
--glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
```

### 2.5 Color Usage Guidelines

| Element | Color | Usage |
|---------|-------|-------|
| Primary Background | #0a0a0a | Main page background |
| Card Background | #111111 | Card, modal, panel backgrounds |
| Primary Text | #ffffff | Headings, body text |
| Secondary Text | #a1a1aa | Captions, metadata |
| Primary Action | #3b82f6 | Main buttons, links |
| Secondary Action | #8b5cf6 | Secondary buttons, highlights |
| Accent | #06b6d4 | Technical elements, code |

---

## 3. Typography

### 3.1 Font Families

```css
/* Font Families */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-serif: 'Playfair Display', Georgia, serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Usage:**
- **Inter** - Body text, UI elements, navigation
- **Playfair Display** - Headings, titles, display text
- **JetBrains Mono** - Code, technical terms, data

### 3.2 Typography Scale

```css
/* Display Typography */
--text-display-1: 4.5rem;    /* 72px - Hero title */
--text-display-2: 3.75rem;   /* 60px - Section titles */
--text-display-3: 3rem;      /* 48px - Subsection titles */

/* Heading Typography */
--text-h1: 2.25rem;          /* 36px - Page headings */
--text-h2: 1.875rem;         /* 30px - Subsection titles */
--text-h3: 1.5rem;           /* 24px - Card titles */
--text-h4: 1.25rem;          /* 20px - Small headings */
--text-h5: 1.125rem;         /* 18px - Labels */
--text-h6: 1rem;             /* 16px - Small labels */

/* Body Typography */
--text-lg: 1.125rem;         /* 18px - Large body */
--text-base: 1rem;           /* 16px - Default body */
--text-sm: 0.875rem;         /* 14px - Small body */
--text-xs: 0.75rem;          /* 12px - Labels, captions */
--text-2xs: 0.625rem;        /* 10px - Tiny text */
```

### 3.3 Typography Weights

```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### 3.4 Line Heights

```css
--leading-tight: 1.2;      /* Headings */
--leading-snug: 1.375;    /* Tight body */
--leading-normal: 1.5;    /* Default body */
--leading-relaxed: 1.625; /* Relaxed body */
--leading-loose: 2;       /* Spaced out */
```

### 3.5 Letter Spacing

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### 3.6 Typography Usage

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Hero Title | Playfair Display | 4.5rem | 700 | 1.2 |
| Section Title | Playfair Display | 3rem | 700 | 1.2 |
| Card Title | Playfair Display | 1.5rem | 600 | 1.3 |
| Body Text | Inter | 1rem | 400 | 1.6 |
| Caption | Inter | 0.875rem | 400 | 1.5 |
| Label | Inter | 0.75rem | 600 | 1.3 |
| Code | JetBrains Mono | 0.875rem | 400 | 1.5 |

---

## 4. Spacing System

**Base Unit:** 4px

```css
/* Spacing Scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### 4.1 Spacing Usage

| Context | Spacing |
|---------|---------|
| Card padding | 1.5rem (24px) |
| Section padding | 5rem (80px) mobile, 8rem (128px) desktop |
| Grid gap | 1.5rem (24px) |
| Button padding | 0.75rem (12px) vertical, 1rem (16px) horizontal |
| Element margin | 2rem (32px) |

---

## 5. Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;      /* 4px - Small elements */
--radius-md: 0.5rem;       /* 8px - Tags, badges */
--radius-lg: 0.75rem;      /* 12px - Small cards */
--radius-xl: 1rem;         /* 16px - Buttons, inputs */
--radius-2xl: 1.5rem;      /* 24px - Cards */
--radius-3xl: 2rem;        /* 32px - Large cards, modals */
--radius-full: 9999px;     /* Pill buttons, badges */
```

### 5.1 Border Radius Usage

| Element | Radius |
|---------|--------|
| Cards | 1.5rem (24px) |
| Buttons | 0.75rem (12px) |
| Modals | 2rem (32px) |
| Badges | 9999px (pill) |
| Tags | 0.5rem (8px) |
| Inputs | 0.75rem (12px) |

---

## 6. Shadows & Effects

### 6.1 Elevation Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
```

### 6.2 Glow Effects

```css
--glow-blue: 0 0 20px var(--accent-blue-glow);
--glow-purple: 0 0 20px var(--accent-purple-glow);
--glow-cyan: 0 0 20px var(--accent-cyan-glow);
--glow-success: 0 0 20px var(--success-glow);
```

### 6.3 Hover Effects

```css
/* Hover lift */
.hover-lift {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

/* Hover scale */
.hover-scale {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* Hover glow */
.hover-glow-blue:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}
```

---

## 7. Component Library

### 7.1 Button Component

**Variants:**
- `primary` - Main action, filled with accent color
- `secondary` - Secondary action, outlined
- `outline` - Minimal action, outlined
- `ghost` - Subtle action, no border
- `link` - Text-only action, underlined

**Sizes:**
- `xs` - Extra small (10px text)
- `sm` - Small (12px text)
- `md` - Medium (14px text)
- `lg` - Large (16px text)
- `xl` - Extra large (18px text)

**Colors:**
- `blue` - Primary accent
- `purple` - Secondary accent
- `cyan` - Tertiary accent

**Example:**
```tsx
<Button variant="primary" size="md" color="blue">
  Get in Touch
</Button>
```

### 7.2 Card Component

**Variants:**
- `default` - Solid background, subtle border
- `glass` - Glassmorphism with blur
- `bordered` - Visible border
- `elevated` - More prominent shadow

**Hover Effects:**
- `scale` - Slight scale on hover
- `glow` - Colored glow on hover
- `lift` - Vertical lift on hover

**Example:**
```tsx
<Card variant="glass" hover="scale">
  <Card.Header>Title</Card.Header>
  <Card.Content>Description</Card.Content>
</Card>
```

### 7.3 Badge Component

**Variants:**
- `default` - Neutral styling
- `success` - Green, for positive status
- `warning` - Amber, for warnings
- `error` - Red, for errors
- `info` - Blue, for information

**Sizes:**
- `sm` - Small text
- `md` - Medium text
- `lg` - Large text

**Dot Indicator:**
- Optional dot for status indication

**Example:**
```tsx
<Badge variant="success" size="sm" dot>
  Published
</Badge>
```

### 7.4 Modal Component

**Sizes:**
- `sm` - max-w-sm
- `md` - max-w-lg
- `lg` - max-w-2xl
- `xl` - max-w-4xl
- `full` - 95vw width, 95vh height

**Parts:**
- `backdrop` - Semi-transparent background
- `content` - Modal container
- `header` - Title and close button
- `body` - Scrollable content
- `footer` - Action buttons

**Example:**
```tsx
<Modal isOpen={isOpen} onClose={onClose} size="lg">
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button>Close</Button>
  </Modal.Footer>
</Modal>
```

---

## 8. Animation Patterns

### 8.1 Page Transitions

**Fade In Up:**
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
}
```

### 8.2 Scroll Animations

**Scroll Reveal:**
- Fade in from bottom
- Stagger delay for lists
- Trigger when 100px from viewport

**Stagger Children:**
```typescript
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
}
```

### 8.3 Hover Effects

**Card Hover:**
- Scale: 1.02
- Shadow: Increase
- Border: Slightly brighter
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Button Hover:**
- Background: Slightly darker
- Transform: None
- Arrow: Slide in
- Duration: 200ms

### 8.4 Loading States

**Spinner:**
- Rotate animation
- Duration: 1s
- Infinite loop
- Linear easing

**Skeleton:**
- Pulse animation
- Duration: 1.5s
- Infinite loop
- Ease-in-out

### 8.5 Background Animation

**Floating Orbs:**
- Blue orb: 20s duration, linear loop
- Purple orb: 25s duration, linear loop
- Cyan orb: 30s duration, linear loop
- Opacity: 0.06-0.08
- Blur: 100-140px

**Grid Pattern:**
- Fixed background
- Opacity: 0.03
- 60px grid size

---

## 9. Layout System

### 9.1 Container System

```css
.container-sm   { max-width: 768px; }   /* 3xl */
.container-md   { max-width: 896px; }   /* 4xl */
.container-lg   { max-width: 1024px; }  /* 5xl */
.container-xl   { max-width: 1152px; }  /* 6xl */
.container-2xl  { max-width: 1280px; }  /* 7xl */
.container-full { max-width: 100%; }
```

### 9.2 Grid System

```css
/* Responsive Grid */
.grid-1  { grid-template-columns: 1fr; }
.grid-2  { grid-template-columns: repeat(1, 1fr); }
         @media (min-width: 768px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
.grid-3  { grid-template-columns: repeat(1, 1fr); }
         @media (min-width: 640px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
         @media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
.grid-4  { grid-template-columns: repeat(1, 1fr); }
         @media (min-width: 640px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
         @media (min-width: 1024px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }
```

### 9.3 Flex Layouts

```css
.flex-center      { display: flex; align-items: center; justify-content: center; }
.flex-between     { display: flex; align-items: center; justify-content: space-between; }
.flex-col-center  { display: flex; flex-direction: column; align-items: center; justify-content: center; }
```

### 9.4 Section Spacing

```css
.section-sm  { padding: 3rem 0; }    /* 48px vertical */
.section-md  { padding: 4rem 0; }    /* 64px vertical */
.section-lg  { padding: 5rem 0; }    /* 80px vertical */
.section-xl  { padding: 6rem 0; }    /* 96px vertical */
.section-2xl { padding: 8rem 0; }    /* 128px vertical */
```

---

## 10. Icon System

### 10.1 Icon Library

**Primary Library:** Lucide React

**Categories:**
- Navigation: Home, User, Briefcase, Mail, Github, Linkedin, ArrowRight, ArrowLeft
- AI & Tech: Brain, Cpu, Bot, Zap, Network, Layers, Database, Terminal
- Business: TrendingUp, Target, BarChart, PieChart, FileText, ClipboardCheck
- UI Elements: Search, Menu, X, Plus, Minus, Check, AlertCircle, Info, ChevronRight, ChevronDown, ExternalLink, Download
- Communication: MessageCircle, Send, Phone, Mail, Share2
- Actions: Edit, Trash, Copy, Bookmark, Heart, Star, Filter, Sort
- Status: CheckCircle, XCircle, Clock, AlertTriangle, Loader2

### 10.2 Icon Sizes

```css
.icon-xs  { width: 12px; height: 12px; }
.icon-sm  { width: 16px; height: 16px; }
.icon-md  { width: 20px; height: 20px; }
.icon-lg  { width: 24px; height: 24px; }
.icon-xl  { width: 32px; height: 32px; }
.icon-2xl { width: 40px; height: 40px; }
.icon-3xl { width: 48px; height: 48px; }
```

### 10.3 Icon Colors

```css
.icon-default { color: var(--foreground-muted); }
.icon-primary { color: var(--accent-blue); }
.icon-success { color: var(--success); }
.icon-warning { color: var(--warning); }
.icon-error   { color: var(--error); }
.icon-glow    { filter: drop-shadow(0 0 8px currentColor); }
```

---

## 11. Responsive Design

### 11.1 Breakpoints

```css
sm  /* 640px  - Small tablets, large phones */
md  /* 768px  - Tablets */
lg  /* 1024px - Small laptops, tablets */
xl  /* 1280px - Desktops */
2xl /* 1536px - Large desktops */
```

### 11.2 Mobile-First Approach

**Navigation:**
- Mobile: Hamburger menu, slide-in drawer
- Desktop: Horizontal navigation, sticky header

**Layout:**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Typography:**
- Mobile: Smaller base size (16px)
- Desktop: Larger base size (18px)

### 11.3 Touch Targets

- Minimum touch target: 44px × 44px
- Minimum button height: 44px
- Minimum link tap area: 44px × 44px

### 11.4 Readable Line Length

- Maximum: 75 characters per line
- Optimal: 60-65 characters
- Minimum: 45 characters

---

## 12. Accessibility

### 12.1 WCAG AA Compliance

**Contrast Ratios:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Focus Indicators:**
- 2px solid border
- Color: #3b82f6 (primary accent)
- Offset: 2px
- Always visible on keyboard navigation

### 12.2 Keyboard Navigation

- All interactive elements accessible via Tab
- Logical tab order
- Skip link for keyboard users
- Escape closes modals/menus

### 12.3 Screen Reader Support

- ARIA labels for icon-only buttons
- Alt text for all images
- Proper heading hierarchy (h1-h6)
- Live regions for dynamic content
- Hidden text for icon buttons

### 12.4 Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Page Sections

### 13.1 Hero Section

**Layout:**
- Full viewport height (min-h-screen)
- Centered content
- Animated gradient background
- Floating orbs animation

**Content:**
- Name: 4.5rem, Playfair Display, bold
- Title: 1.5rem, Inter, medium
- Tagline: 1.125rem, Inter, regular, muted
- CTAs: 3 buttons, primary, secondary, outline

**Background:**
- Base: #0a0a0a
- Orbs: Blue, purple, cyan (20-30s loop)
- Grid: 60px pattern, 3% opacity

### 13.2 About & Expertise

**Layout:**
- Single column, centered
- Bio text (max-width: 3xl)
- 6 competency cards in 3x2 grid

**Competency Cards:**
- Icon, title, description
- Glassmorphism background
- Hover: scale 1.02, glow

### 13.3 Agentic Workflows

**Layout:**
- Section header
- 2 workflow cards (side by side)
- "View All" link

**Workflow Cards:**
- Thumbnail (aspect-video)
- Title, description
- Tech stack tags
- "View Workflow" button

### 13.4 Product Case Studies

**Layout:**
- Featured case study (full width)
- Problem, solution, impact metrics
- Links to other studies

**Metrics Display:**
- 3 metric cards
- Large numbers, small labels
- Counter animation on scroll

### 13.5 Vibe Coding Projects

**Layout:**
- 3 project cards in row
- Each with screenshot, title, description, metrics

**Project Cards:**
- Screenshot (aspect-video)
- Title, description
- Key metrics (2-3)
- "Explore" button

### 13.6 PRDs & Documentation

**Layout:**
- Featured PRD card
- PDF icon, title, description
- "Download PDF" button

### 13.7 Tech Stack & Tools

**Layout:**
- 8 categories in grid
- 3 tools per category
- Icon + text per tool

### 13.8 Key Outcomes

**Layout:**
- Table format
- Project, Metric, Result columns
- Striped rows
- Hover highlight

### 13.9 Contact & Connect

**Layout:**
- Description text
- 3 contact cards (Email, LinkedIn, GitHub)
- Icon, label, value, CTA button

### 13.10 Footer

**Layout:**
- Copyright text
- 3 links (Privacy, Terms, Sitemap)
- Centered, minimal

---

## 14. Tailwind Configuration

```javascript
// tailwind.config.ts
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-secondary': '#111111',
        'background-tertiary': '#161616',
        foreground: '#ffffff',
        'foreground-muted': '#a1a1aa',
        'foreground-subtle': '#71717a',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 15. Global Styles

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #0a0a0a;
    --foreground: #ffffff;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Selection */
  ::selection {
    @apply bg-accent-blue/30 text-white;
  }

  /* Focus styles */
  *:focus-visible {
    @apply outline-none ring-2 ring-accent-blue ring-offset-2 ring-offset-background;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .glass {
    @apply bg-background-secondary/60 backdrop-blur-xl border border-white/8;
  }
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-05-05 | Initial design document |
