# Dear Lola Kitchen & Bar — Premium Restaurant Site

A single-page, mobile-first site for Dear Lola with cinematic visuals, smooth Framer Motion entrances, an interactive menu, lightbox gallery, testimonials carousel, WhatsApp-driven reservations, a floating WhatsApp CTA, and a self-contained Lola chatbot.

## Brand & Design System

- **Palette:** Blush cream `#FDE8E0` (primary), Matte black `#2C2420` (secondary), Soft gold `#C4A27A` (accent), white background with subtle grain noise overlay. Cards use translucent blush + gold/20 borders with backdrop blur.
- **Typography:** Playfair Display (headings, 500–700) + Inter (body). Loaded via Google Fonts.
- **Logo:** Uploaded Dear Lola wordmark used in navbar and footer.
- **Motion:** Sticky navbar transitions transparent → solid white on scroll; hero text fades up; sections animate `whileInView` (y 30 → 0, opacity); buttons scale on hover; gallery thumbs scale + brighten; top scroll-progress bar; desktop cursor follower; smooth scroll.

## Sections (single page)

1. **Navbar** — Dear Lola logo + gold dot, links (Home, About, Menu, Gallery, Reviews, Contact), "Reserve a Table" CTA, animated mobile slide-in menu.
2. **Hero** — Full-viewport cinematic Unsplash image with slow Ken Burns zoom, dark gradient overlay, headline "Welcome to Dear Lola", subhead "Cozy. Lively. Uniquely Flavorful.", two CTAs (View Menu, Reserve a Table), bouncing scroll-down arrow.
3. **About / Highlights** — Two-column story: brand narrative, Instagram presence, signature dishes, shoutout to Arup, 4.4★ Google badge. Moody interior image on the right.
4. **Menu Tabs** — Tabs for Starters, Main Course, Mocktails, Desserts. 3–4 hardcoded items each with name, short description, ₹ price, "Popular" badge on Tempura Prawns / Butter Chicken / Signature Mocktail. AnimatePresence transitions between tabs.
5. **Gallery** — Masonry CSS-columns grid (3/2/1 cols) of 9 curated Unsplash food + ambience shots, lazy-loaded. Click opens custom lightbox modal with prev/next + keyboard nav.
6. **Testimonials** — Manual carousel (no extra deps) with 3 reviews (Narayan 5★, Anagha 5★, Hiten 4★), UI-Avatars-by-name images, autoplay every 5s, pause on hover, prev/next dots.
7. **Map & Contact** — Embedded Google Maps iframe for Dear Lola Kalyan, address block, "Get Directions" link, 4.4★ (69 reviews) badge.
8. **Footer** — Dear Lola mark, Instagram (`@dearlola_india`), Zomato, WhatsApp icon links, copyright "© 2025 Dear Lola. Crafted with warmth.", back-to-top button.

## Reservation Flow (WhatsApp)

- Any "Reserve a Table" button opens a modal (shadcn Dialog + Framer Motion) with: Full name, Phone, Date, Time, Guests (1–10).
- On submit, opens `https://wa.me/919876543210` in a new tab with a pre-filled message:
  > "Hi Dear Lola, I'd like to reserve a table for {guests} on {date} at {time}. Name: {name}, Phone: {phone}."
- Toast confirms the redirect; modal closes.

## Floating WhatsApp Button (bottom-left)

- Green circular button with WhatsApp icon, pulsing ring + hover scale.
- Tooltip "Chat on WhatsApp" appears on hover/focus, auto-hides after 2s.
- Opens `wa.me/919876543210` with pre-filled inquiry message.

## Lola Chatbot (bottom-right, fully self-contained)

- Circular bubble toggle expands to a 320×400 glassmorphism panel (Framer Motion scale-in).
- Greeting: "Hey there! I'm Lola, the virtual assistant. Ask me anything about our restaurant, menu, hours, or Arup! 😊"
- Quick-reply chips: 📍 Directions, 📞 Call, 🕒 Hours.
- Keyword matcher (lowercased input) covers all 10+ specified topics: hours, address/location, tempura prawns, butter chicken, Arup, delivery/pickup, rating/Google, Instagram/promo, ambience, menu, mocktails, dimsums, price range, parking, reservation. Fallback: "I'm still learning! But you can call us or WhatsApp for immediate help. 😊"
- Auto-scroll to latest message, Enter to send, keeps last 5 turns in state.

## Technical Notes

- Stack: existing React 18 + Vite + Tailwind + TypeScript + shadcn/ui (Dialog, Tabs, Toast, Button, Input). Files written as `.tsx`.
- Add `framer-motion` dependency. Lucide icons already available.
- Tailwind config extended with brand colors (`brand-cream`, `brand-ink`, `brand-gold`), Playfair/Inter font families, grain background utility, Ken Burns + pulse keyframes.
- Global CSS: HSL design tokens updated to brand palette, smooth scroll, grain overlay via body `::before`, focus-visible rings in gold.
- `index.html`: `lang="en"`, meta description, Open Graph tags (title, description, image = uploaded logo), favicon swap to logo.
- `src/pages/Index.tsx` becomes the composed single-page layout; `App.tsx` routing untouched.
- Logo copied to `src/assets/dear-lola-logo.jpg` and imported as ES module.
- Accessibility: aria-labels on icon buttons, focus traps via shadcn Dialog, keyboard support in lightbox + chatbot.
- Performance: `loading="lazy"` on gallery, `React.memo` on chatbot message list, debounced cursor follower, desktop-only cursor effect via `matchMedia`.
- Responsive checked at 375 / 768 / 1024 / 1440.

## Files Created / Modified

- `src/pages/Index.tsx` — page composition
- `src/components/site/Navbar.tsx`, `Hero.tsx`, `About.tsx`, `MenuTabs.tsx`, `Gallery.tsx`, `Testimonials.tsx`, `MapSection.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `Chatbot.tsx`, `ReservationModal.tsx`, `ScrollProgress.tsx`, `CursorFollower.tsx`
- `src/data/menu.ts`, `src/data/gallery.ts`, `src/data/testimonials.ts`
- `src/assets/dear-lola-logo.jpg` (copied from upload)
- `src/index.css` — brand tokens, fonts, grain, keyframes
- `tailwind.config.ts` — brand colors, fonts, animations
- `index.html` — title, meta, OG tags, fonts preconnect
- `package.json` — add `framer-motion`
