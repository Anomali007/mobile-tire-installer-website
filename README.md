# Don’s Mobile Tire Website (Next.js)

Marketing + booking entry website for a mobile tire service. Built to drive conversions (Book Now / Call / Text) and establish credibility for customers, partners, and financing.

## Tech
- Next.js (App Router)
- TypeScript (recommended)
- Tailwind CSS (recommended)
- Vercel deployment (recommended)

---

## Getting Started

### Install
```bash
pnpm install
# or npm install / yarn

Run locally

pnpm dev

Open http://localhost:3000

⸻

Project Structure (Suggested)

/
├─ app/
│  ├─ page.tsx                # Home
│  ├─ book/
│  │  └─ page.tsx             # Book Now
│  ├─ services/
│  │  ├─ page.tsx             # Services overview
│  │  └─ [slug]/page.tsx      # Service detail pages (optional)
│  ├─ coverage/page.tsx
│  ├─ pricing/page.tsx
│  ├─ fleet/page.tsx
│  ├─ reviews/page.tsx
│  ├─ about/page.tsx
│  ├─ faq/page.tsx
│  └─ contact/page.tsx
├─ components/
│  ├─ layout/
│  ├─ sections/               # Hero, ServicesGrid, HowItWorks, etc.
│  └─ ui/
├─ content/
│  ├─ site.ts                 # Business name, phone, address, coverage list
│  ├─ services.ts             # Services + descriptions
│  └─ faqs.ts
└─ docs/
   ├─ sitemap-onepager.md
   └─ homepage-copy.md


⸻

Content Setup (Do This First)

Update these placeholders:
	•	Business name
	•	Service area / metro
	•	Phone number
	•	Booking link / booking flow (even if it starts as a form)

If you’re not ready for a full booking system yet, the Book Now page can:
	•	Collect service + address + preferred time window
	•	Route submissions to email/SMS
	•	Offer click-to-call and click-to-text as fallback

⸻

Deployment

Recommended: Vercel
	•	Push to GitHub
	•	Import to Vercel
	•	Deploy

⸻

Goals / Success Metrics
	•	Visitors can start booking in < 10 seconds
	•	Clear service area + pricing expectations
	•	Trust signals: proof photos, testimonials, policies
	•	Fleet lead capture (recurring revenue story)

---