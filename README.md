# QoreTech — Website

Premium landing page for QoreTech, a modern tech solutions studio for startups and small businesses.

**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · Framer Motion

---

## Quick start

### Prerequisites
- Node.js 18.17+ ([download](https://nodejs.org))
- npm 9+ (bundled with Node)

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## Project structure

```
qoretech/
├── app/
│   ├── layout.tsx          # Root layout + metadata/SEO
│   └── page.tsx            # Home page (assembles sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky glassmorphism nav
│   │   └── Footer.tsx       # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with animated dashboard mockup
│   │   ├── LogoMarquee.tsx  # Scrolling tech brand strip
│   │   ├── Services.tsx     # 6 service cards
│   │   ├── WhyQoreTech.tsx  # 6 differentiator cells
│   │   ├── Process.tsx      # 5-step alternating timeline
│   │   ├── TechStack.tsx    # Tech logo grid + pill tags
│   │   ├── Projects.tsx     # 3 case study cards
│   │   ├── Testimonials.tsx # 3 client quotes
│   │   └── CTA.tsx          # Contact form section
│   └── ui/
│       ├── Button.tsx       # Multi-variant button
│       ├── Badge.tsx        # Pill badge
│       ├── GlowOrb.tsx      # Ambient background glow
│       ├── Logo.tsx         # SVG logo mark + wordmark
│       ├── Section.tsx      # Fade-in section wrapper
│       └── SectionHeading.tsx
├── lib/
│   └── utils.ts            # cn() class merge utility
├── styles/
│   └── globals.css         # Design tokens, base styles
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install CLI
npm i -g vercel

# Authenticate
vercel login

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Framework will be auto-detected as **Next.js**
5. Click **Deploy** — no environment variables needed for the base site

### Custom domain
1. In Vercel dashboard → Project → **Settings → Domains**
2. Add `qoretech.io` and `www.qoretech.io`
3. Update your DNS records as instructed

---

## Customisation guide

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors`:
- `navy` → background palette
- `ember` → primary CTA accent
- `sky` → secondary / highlight accent

### Copy
All section text lives directly in each component file under `components/sections/`. No CMS — just edit the strings.

### Contact form
The form in `CTA.tsx` currently simulates a submission. Wire it to a real endpoint:
- [Resend](https://resend.com) for transactional email
- [Formspree](https://formspree.io) for zero-backend forms
- Your own API route at `app/api/contact/route.ts`

### Adding sections
1. Create `components/sections/NewSection.tsx`
2. Import and add it to `app/page.tsx`

---

## Performance notes
- All fonts loaded via `next/font` (zero layout shift)
- Images use `next/image` for automatic optimisation
- Framer Motion animations respect `prefers-reduced-motion`
- Tailwind purges unused CSS at build time

---

## License
MIT — use freely for your own projects.
# qoretech-website-V0
# qoretech-website
