# Lore — Design System

> **Live your story.** Lore is a mobile interactive-fiction app where you don't *watch* a reality show — you're cast in one. You step into a living "world" (a creator reality villa, an Indian cricket dressing room), make decisions inside unfolding situations, and watch the social world react in real time through an Instagram-native feed. Your choices move three meters; the meters move your follower count; the world remembers.

This project is the design system extracted from the **Lore app codebase** (`lore-main/`, a Next.js + Capacitor app). It packages Lore's tokens, brand, components, and full-screen UI kit so design agents can produce on-brand Lore screens, decks, and prototypes.

---

## Sources

- **Codebase:** `lore-main/` — Next.js 14 app (App Router) + Capacitor (iOS/Android shell). Read-only mount.
  - `app/globals.css` — the live design language (~920 lines): tokens, screen styles, animations.
  - `DESIGN.md` — the canonical "Design Language v1" doc (palette, type, rules).
  - `docs/creator-house-design-brief.md` — screen-by-screen generation brief / product narrative.
  - `components/` — React screens (`FeedScreen`, `WorldsScreen`, `LiveScreen`, `CharProfileScreen`, …) and the `MeterHUD`.
  - `lib/data.ts` — characters, situations, worlds (Creator House + Indian Dressing Room / cricket).
  - `public/avatars/`, `public/generated/creator-house-posts/` — character avatars + scene art (copied into `assets/`).
- No Figma was provided. All visual decisions are sourced from the codebase + DESIGN.md, not screenshots.

---

## What Lore is (product context)

Lore turns interactive fiction into a **social-media simulation you live inside**. The core loop:

1. **Worlds** — pick a living world. Each is a self-contained drama with a cast, a season, and an accent identity. The flagship is **Creator House** (6 creators, one villa, 10 days — a desi reality-TV pressure cooker). A second live world, **Indian Dressing Room**, drops you into an MI-flavoured cricket squad.
2. **Live** — a **situation** drops (e.g. *Pehla Kadam* — the first step into the villa). You read a short second-person scene, feel pressure from characters, and pick between two choices. Choices never preview their stat effects — you weigh the *fiction*, not the numbers.
3. **Feed** — the consequence surface. Your choice becomes an Instagram post; housemates subpost you; fan accounts (`creator.tea`, `housewatch_india`) gossip. The feed *proves the world changed because of you*.
4. **Meters** — every action moves **Fame ⭐ / Heat 🔥 / Trust 🤝** (in cricket: **Form / Fame / Team Trust**). Fame drives your follower count. The meters live in a persistent HUD pinned to the top of every in-world screen — consequence is always visible.

It's built mobile-first (390px design width), dark, cinematic, and Hinglish.

---

## CONTENT FUNDAMENTALS — how Lore writes

Lore's voice is **bilingual Hinglish, second-person, and cinematic**. It reads like a narrator in a Netflix reality edit who's also your hype-friend.

- **Language:** Hindi-English code-switching, written in Latin script. *"Villa ka gate khulta hai."* / *"Kya karoge?"* / *"Naye ghar, naye rules."* English carries UI; Hindi carries emotion and drama. Never fully translate to English — the mix *is* the brand.
- **Person:** **Second person, present tense** for situations — *"Tumhare paas ek chance hai."* You are the protagonist. The player is "tum/tumhara", never "the user".
- **Two registers:**
  - **Narrator / situations** → Fraunces serif, slow, literary, sensory. Sets scenes, raises stakes. *"Sab dekh rahe hain."*
  - **Social / captions / DMs** → Poppins sans, fast, real Instagram energy — slang, ellipses, lowercase, attitude. *"she ate. no crumbs."* / *"are they playing chess already??"*
- **Character voices are distinct.** Ria is polished and calculating; Kabir is chaotic-warm; fan accounts are unhinged-gossipy. Captions carry the character's personality, not house style.
- **Casing:** Display/titles are sentence case in serif. Eyebrows and meter labels are UPPERCASE with tracking (`DAY 1 · MORNING`, `FAME`). Captions follow IG-native casing (often lowercase for effect).
- **Emoji:** Yes — but as *social texture*, sparingly and in-character. 🤍 🔥 😭 in captions and chips; meter glyphs ⭐🔥🤝 are functional. Never emoji in system UI chrome, buttons, or navigation.
- **Numbers shout.** Follower counts, meter values, "63% chose this" — bold, tabular, treated as drama. A number changing is an *event* (it ticks, flashes, throws a +N chip).
- **Tone test:** if a line could appear verbatim in a real Indian creator's Instagram caption or a reality-show voiceover, it's right. If it sounds like a product tooltip, rewrite it.

---

## VISUAL FOUNDATIONS

**Vibe:** premium, cinematic, after-dark. Think a prestige reality show's title sequence, not a SaaS dashboard. Everything floats in near-black; colour is *earned* by meaning.

- **Colour.** 11 base tokens, full stop (see `tokens/colors.css`). Surfaces are four near-blacks (`#08080F` bg → `#1e1e24` line). Text is three inks (white → `#a8a8b3` → `#5e5e6e`). The only saturated hues are **one accent** (`#FF2D78` hot pink — *the* interactive colour) and **three meter colours** (gold/red/teal). **Iron rule:** meter colours appear ONLY inside meters; accent pink ONLY on interactive things. This restraint is what keeps a colourful, busy app from turning into a rainbow.
- **World accents.** Each world owns ONE accent family; characters are tints within it. Creator House = pink/rose (`#FF2D78`→`#7a1140`); Indian Dressing Room = MI navy (`#003087`→`#001540`) with a gold live mark. Character bubble/card tints are derived via `color-mix` from the character colour — never hand-picked.
- **Type.** Two faces only. **Fraunces** (display serif, wt 500/600) for titles, situation names, choice questions, endings — anything emotional. **Poppins** (wt 400–800) for *everything else* — body, labels, buttons, numbers. Display sizes run 22→44px; UI body 14–15px. Eyebrows 9px UPPERCASE +0.08em.
- **Backgrounds & imagery.** Full-bleed character/scene art (AI-generated, warm-to-moody, cinematic, shot like film stills) under **protection scrims** (bottom-up black gradient) so text stays legible. Flat world **gradients** (135°, accent→dark) when there's no photo. A signature **film-grain** texture (`--grain`, desaturated SVG fractal-noise at ~40%) sits over hero cards and posts — it's the thing that makes Lore feel shot, not rendered. Imagery skews warm, slightly desaturated, moody.
- **Cards.** Dark surface (`--surf #121214`), generous radii (16–20px), 1px hairline border (`--line`) or a low-alpha accent ring + soft glow for "live" cards. Deep, soft drop-shadows (`0 10px 30px rgba(0,0,0,.5)`) — never crisp. Posts are edge-to-edge with a 1px divider, IG-style.
- **Glass.** Badges and choice cards use frosted glass (`rgba(255,255,255,.10)` + `backdrop-filter: blur`) over imagery — `backdrop-blur` is reserved for things floating *over* photos (badges, the HUD scrim, choice cards), not flat surfaces.
- **Radii.** 6px (inner pills) → 10 (inputs) → 14 (buttons) → 16–20 (cards) → 30 (CTAs/badges) → full (avatars, dots). CTAs and status pills are fully rounded; cards are soft-rectangular.
- **Borders.** 1px hairline default; 1.5px world-card ring; 2px accent for selected/active states (active tab gets a 2px accent top-border + tint).
- **Shadows & glow.** Two systems: **deep soft shadows** for lift (cards, sheets), **coloured glows** for emphasis (`--sh-cta` pink CTA glow, `--glow-trust` teal bar, logo glow). Dark UI ⇒ glow is the new shadow.
- **Motion.** Two speeds. **UI is confident + quick** (120–280ms) on a signature ease `cubic-bezier(.32,.72,0,1)`. **Story moments are slow + cinematic** (500ms+): situation lines fade up sequentially, evictions linger. Meter bars fill over 0.7s. Pills/chips *arrive* with a slight overshoot (`--ease-pop`). The LIVE dot pulses (expanding ring, 1.6s loop). No gratuitous looping animation on content — only the live mark loops.
- **Hover / press.** Touch-first, so press dominates: `:active` shrinks to `scale(.97–.98)` over 120ms. Hover (where present) lightens fill or fades opacity — never a colour-shift hue change.
- **Layout.** Fixed mobile frame (390px). Persistent chrome: **MeterHUD pinned top**, **tab bar pinned bottom** (64px). Content scrolls between. Screen gutter 16px. Sticky bars get the `--scrim-strong` blurred scrim so content reads underneath.
- **Transparency & blur.** Used deliberately: protection scrims (gradient, no blur) on imagery; frosted blur on floating chrome (badges, HUD, choice cards, bottom sheets). Flat dark surfaces stay opaque.

---

## ICONOGRAPHY

- **Approach:** thin, rounded-stroke line icons — **1.8–2px stroke, round caps/joins**, currentColor, ~24px. Matches Poppins' geometry. Filled only to signal an active/engaged state (a *liked* heart fills with accent; a playing narration toggle fills solid).
- **Source in the app:** the codebase hand-rolls a small set of inline SVGs (heart, comment, share, ellipsis/more, play, pause, lock, lightning, back chevron) — there's **no icon-font dependency**. Those exact icons are reproduced inside the components here (see `Post.jsx`, `StoryDrop.jsx`, `SituationHeader.jsx`) so the kit stays self-contained.
- **For NEW work / icons not in the app:** use **Lucide** (https://lucide.dev) from CDN — it matches Lore's stroke weight and round-join style almost exactly. This is a *substitution* for coverage beyond the hand-rolled set; flagged as such. Keep stroke 1.8–2px, round caps, currentColor.
- **Emoji as icon:** the meter glyphs (⭐ Fame, 🔥 Heat, 🤝 Trust) and the lightning ⚡ on day eyebrows are used as functional iconography. Otherwise emoji belong only in social copy, never in chrome.
- **Unicode:** `·` (middle dot) is the universal separator in meta lines (`Creator House · Day 1 of 10`). `→` arrows live inside CTAs (`Andar jao →`).
- **Logo:** the Lore orbit mark (`assets/lore-mark.svg`) — a pink→gold gradient dashed ring orbiting an inner ring + gold core, with a soft accent glow. Pairs with the **Fraunces** "Lore" wordmark. The ring slowly rotates as a loading/hero accent.

---

## Index — what's in this system

**Foundations** (root)
- `styles.css` — the single entry point consumers link (only `@import`s).
- `tokens/colors.css` · `typography.css` · `spacing.css` (radii/shadows/motion/grain) · `fonts.css` (Fraunces + Poppins) · `base.css` (reset + shared keyframes).

**Foundation specimen cards** — `guidelines/*.card.html` (render in the Design System tab): colours (surfaces, brand+meters, world families), type (display, sans, eyebrows/numbers), spacing (scale, radii, shadows), brand (logo, texture+pulse).

**Components** — `components/<group>/` (React, namespace `window.LoreDesignSystem_022f97`):
- `core/` — `Button`, `Avatar` + `AvatarStack`, `Badge` + `Pulse` + `NewPill`, `Chip` + `Tag`.
- `meters/` — `Meter`, `MeterHUD` (the app's spine).
- `feed/` — `Post`, `StoryDrop`.
- `worlds/` — `WorldCard`.
- `live/` — `ChoiceCard`, `ReactionBubble`, `SituationHeader` + `NarrationButton`.
Each group has a `*.card.html` showcase, and each component a `.d.ts` + `.prompt.md`.

**UI kit** — `ui_kits/lore-app/` — interactive click-through of the full Lore app (Worlds → Live decision → Feed → Profile), composing the components above. `index.html` is the runnable demo.

**Assets** — `assets/avatars/` (character portraits), `assets/scenes/` (scene/world art), `assets/lore-mark.svg` (logo).

**Skill** — `SKILL.md` — makes this folder usable as a downloadable Claude Skill.
