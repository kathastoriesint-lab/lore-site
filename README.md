# Lore — one-page marketing site

"Live your story." A dark, cinematic landing page for Lore, built on the Lore design system.

## What's in here

| File | What it is |
|---|---|
| `index.html` | **The site, self-contained.** Everything inlined (markup, CSS, fonts, images, JS). Drop it on any static host and it works. |
| `Lore.dc.html` | Readable source — full markup, all CSS in one `<style>`, and a small JS logic class at the bottom. Use this to adapt/rebuild. |
| `assets/` | Original images — `lore-mark.svg` (logo), `scenes/` (villa, Wankhede, terrace), `avatars/` (cast). |
| `og-image.png` | 1200×630 social share image. |
| `Lore OG.dc.html` | Source that generated the OG image. |
| `_ds/`, `support.js` | Lore design tokens + component bundle + runtime (needed only if you run `Lore.dc.html` directly rather than `index.html`). |

## Run it

- **Fastest:** open `index.html` (or deploy it — Netlify, Vercel, GitHub Pages, S3, anything).
- Everything is inlined, so no build step and no server required.

## Waitlist

The email field validates, then **opens your Google Form in a new tab** to finish (your form makes *Phone Number* required, which Google won't accept via a background email-only POST — so we hand off to the real form).

- Form URL is wired to your live form. To change it: in `Lore.dc.html`, edit the `waitlistFormUrl` value in the logic class, then re-open/re-deploy.
- If you'd rather capture email **inline with no redirect**, make the Google Form email-only (remove/az un-require Phone) — then a seamless POST becomes possible and I can wire it.

## Social sharing (Open Graph)

Meta tags point at `https://livelore.app/og-image.png` and `og:url = https://livelore.app`. **Before launch:** host `og-image.png` at your real domain and swap `livelore.app` for your domain in the `og:*` / `twitter:*` / `og:url` meta tags (top of `Lore.dc.html`). OG images must be absolute URLs to preview in WhatsApp/Twitter.

## Notes

- Mobile-first, responsive down to 360px; breakpoints at 900px and 520px.
- Respects `prefers-reduced-motion` (no autoplay, no float, no scroll reveals, counter shows final value).
- Semantic HTML, alt text, keyboard-navigable, focus rings on the email input.
- Sections, in order: Nav · Hero (autoplay phone: feed → DM → choice) · How it works · The Worlds · The Why · Waitlist · Team · Footer.
- Type: Fraunces (display serif) + Poppins (UI). Palette + components from the Lore design system.

© 2026 Lore
