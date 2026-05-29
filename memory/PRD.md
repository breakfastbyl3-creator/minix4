# Breakfast in Bed by LaCole LLC — PRD

## Problem Statement
Create a modern, cozy, soul-food breakfast restaurant marketing website for "Breakfast in Bed by LaCole LLC" in Akron, OH. Warm cream/brown/gold/deep red/soft black palette, elegant Playfair Display + Work Sans typography, jazz/soul-food atmosphere, mobile-first responsive.

## User Personas
- **Local diners / Akron neighbors** — discover hours, menu, location, place delivery/pickup orders via DoorDash, call the restaurant.
- **Out-of-town visitors** — read reviews, get directions, see featured dishes.
- **Event hosts** — submit catering inquiries (saved to DB).
- **Owner (LaCole)** — receives catering inquiries through `/api/catering` (GET to list).

## Architecture
- **Frontend**: React 19 SPA (single page with anchor sections). Tailwind + shadcn/ui + lucide-react + react-fast-marquee. Google Fonts: Playfair Display + Work Sans.
- **Backend**: FastAPI with `/api` prefix. MongoDB collection `catering_inquiries` for persistence.
- **External**: DoorDash store URL for online ordering, `tel:+13308099126` for calls, Google Maps embed for location.

## Implemented (2026-05-29)
- Hero with rotating background of 6 food images, headline/sub/3 CTAs, rating bar.
- Sticky glass header w/ scroll state, mobile hamburger, Call Now + Order Online CTAs.
- Marquee ticker bar between hero and menu.
- Featured Menu grid (12 dishes w/ user-supplied + curated images, steam puff CSS animation, hover lift).
- About / Story section with LaCole, interior image, jazz badge, rating callout, 4 micro-feature cards.
- Highlights section (dark) — 6 "What Sets Us Apart" cards.
- Reviews Wall — 45 Google-style cards across 3 scrolling marquee rows with star ratings, avatar initials, owner responses on featured reviews, highlight word marker.
- Amenities grid — 12 badges (rating, delivery, pickup, dine-in, catering, family friendly, etc.).
- Catering Inquiry form (shadcn Input/Select/Textarea/Button) → POST `/api/catering` → MongoDB persistence + sonner toast.
- Location section — Google Maps embed, address, phone, parking note, full hours (Mon Closed), Get Directions button.
- Footer with brand, hours summary, social icons, address, DoorDash CTA.
- Floating Order Online pill (bottom-right) with pulse-glow animation linking to DoorDash.

## Backend Endpoints
- `GET /api/` — health
- `POST /api/catering` — create inquiry (validation via Pydantic + EmailStr)
- `GET /api/catering` — list inquiries (desc by created_at)
- `POST/GET /api/status` — legacy

## Test Results
- Backend: 7/7 pytest cases pass.
- Frontend: All critical flows verified (hero, menu, reviews marquee, catering submit, location, mobile menu, floating button).

## Backlog (P1 / P2)
- P1: Admin route to view catering inquiries (auth-gated).
- P1: Full menu page with all 7 categories detailed.
- P2: Image gallery / Instagram feed integration.
- P2: Email notification to LaCole on new catering inquiry (Resend/SendGrid).
- P2: Reservation booking (OpenTable or built-in).
- P2: Newsletter signup.
