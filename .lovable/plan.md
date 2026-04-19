
## Kerala Malabar Wedding Invitation — Premium Animated Site

A luxurious, cinematic wedding invitation site inspired by **Kerala Malabar tradition** — think temple gold, deep maroon, ivory mundu textures, jasmine garlands, brass lamps (nilavilakku), and coconut palm silhouettes — wrapped in modern glassmorphism and stunning Framer Motion animations.

### Visual direction
- **Palette**: temple gold `#C9A24B`, deep maroon `#6B1E1E`, ivory `#FBF5E9`, blush `#E8C7C0`, accent emerald `#1F4D3A` (Kerala greens)
- **Typography**: Cormorant Garamond (display serif, elegant) + Inter (body) + a delicate script (Great Vibes) for the couple's names
- **Motifs**: subtle Aripoo (floral rangoli) SVG dividers, brass lamp glow, jasmine garland accents, gold filigree borders
- **Surfaces**: glassmorphism cards over ivory background, soft maroon shadows, gold glowing borders, 2xl rounded corners

### Site structure (separate routes for SEO + share previews)
- `/` — Home (envelope intro → hero → all sections in scroll order)
- `/story` — Couple story (deep dive)
- `/events` — Event details (Mehendi, Sangeet, Wedding, Reception)
- `/gallery` — Full gallery with lightbox
- `/rsvp` — Standalone RSVP page

Home page contains all sections inline so a single scroll tells the full story; standalone routes give shareable deep links + per-page meta.

### Sections (built as reusable components)
1. **Envelope Intro Overlay** — full-screen ivory + gold envelope; user taps to "Open Invitation". Wax seal breaks, flap opens, golden particles burst, card slides up. Plays a soft chime + paper rustle (Web Audio, no external file). Dismissable, remembered for session.
2. **Hero** — Three.js canvas with floating 3D jasmine petals + gold particles drifting. Couple names in script with fade + scale + letter-stagger. Tagline below. Date/venue reveal in staggered cards. Animated scroll indicator (bouncing gold dot + line).
3. **Couple Story Timeline** — vertical timeline with gold lamp icons; each milestone (How we met → First date → Proposal → Wedding) reveals on scroll with opacity + translateY + slight rotate.
4. **Event Details** — 4 glassmorphic cards (Mehendi, Sangeet, Wedding Muhurtham, Reception) with date/time/venue, hover tilt + gold glow shimmer.
5. **Gallery** — masonry grid with hover zoom + maroon overlay; click opens custom lightbox with crossfade + swipe.
6. **Invitation Message** — emotional Malayalam-inspired blessing with typewriter animation, framed by aripoo SVG dividers.
7. **RSVP** — name, attending (yes/no), guest count, message. On submit: confetti burst (gold + maroon + blush) + animated thank-you card. No backend; confirmation only.
8. **Venue Map** — Google Maps embed in a gold-bordered glass card with directions button.
9. **Footer with Countdown** — large countdown timer (days / hours / minutes / seconds) with flip animation on each tick, brass lamp illustrations, social handles.

### Animation system (Framer Motion + Three.js)
- Page load: parent stagger fade-up
- Scroll reveals: `whileInView` with opacity 0→1 + y 40→0 on every section
- Parallax: hero background layers move at different scroll speeds
- Floating florals: looping y/rotate transforms on jasmine SVGs scattered in margins
- Buttons: scale on hover + animated gold shimmer sweep + soft glow
- Three.js: lightweight `@react-three/fiber` + `drei` scene with ~40 instanced petal meshes drifting; degrades gracefully on mobile (reduced count)
- Respects `prefers-reduced-motion`

### Extras
- **Background music toggle**: floating gold lamp icon bottom-right; mute/unmute with soft fade. Uses a royalty-free instrumental URL (placeholder, easily swapped).
- **Confetti** on RSVP success (canvas-confetti)
- **Countdown** updates every second, flip animation on digit change
- **Sound FX** on envelope open via Web Audio API (no asset files needed)

### Placeholder content (easy to edit)
- Names: **Arjun & Meenakshi**
- Date: 6 months from today, evening muhurtham
- Venue: Guruvayur Sree Krishna Temple Hall, Thrissur, Kerala
- Story: 4 timeline milestones
- Gallery: 8 curated Unsplash wedding images

### Tech additions
- `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `canvas-confetti`, `react-icons`
- Google Fonts via stylesheet link in `__root.tsx`
- All sections mobile-first responsive; Three.js scene scales down on small screens
- Per-route `head()` meta with og:title/description for shareable previews

### Deliverable
A fully responsive, deploy-ready Kerala Malabar wedding invitation with envelope intro, 3D hero, scroll-revealed story, glass event cards, gallery lightbox, typewriter blessing, confetti RSVP, live countdown, music toggle, and map — all tied together with cinematic Framer Motion transitions.
