# That ONE Team — Design System

Brand & interface system for **That ONE Team — Our Next Engineers** (FIRST® Robotics Competition **Team 4967**), a community K-12 robotics program under the Paradise Teams umbrella, based at That STEAM Space in the Belmont / Grand Rapids, MI area.

> **Mission:** Preserve our environment, engage our community, build relationships, and be gracious professionals, in order to inspire Our Next Engineers.
> **Tagline:** *Playing the Water Game Since 2013.*

This project is a compiler-read design system: link `styles.css` for tokens & fonts, and use `window.ThatONETeamDesignSystem_a6a028.<Component>` after loading `_ds_bundle.js`.

---

## Sources
- **Website:** https://www.thatoneteam.org/ (Wix). Content, structure, program copy, and stats were read from the live homepage.
- **4967 Brand Style Guide** (pasted): official colors, typography, logo rules, naming, tagline, signature format, photography & social guidance.
- **FIRST® brand:** https://www.firstinspires.org/brand (referenced; FIRST® season and org imagery should be sourced from official FIRST media, not recreated).
- Socials: Facebook /ThatONETeam · X @team4967 · Instagram @frc_4967.

## ⚠️ Asset status
All brand fonts and both logos are now supplied and wired in:
- **Square logo** → `assets/logo-square.png` · **Long logo** → `assets/logo-wide.png` (light-colored, for dark backgrounds).
- **Pirulen** → `assets/fonts/Pirulen-Rg.otf` · **SquareFont** → `assets/fonts/Square.ttf` · **Roboto** via Google Fonts.

Still welcome: **single-color versions** of both logos, and **team photography** (slides/kit currently use labeled photo slots).

---

## CONTENT FUNDAMENTALS
How That ONE Team writes.

- **Voice:** warm, community-minded, and mission-driven — proud but never boastful. Achievements are framed as shared ("We had the pleasure of competing…"), reflecting the FIRST values of **Gracious Professionalism** and **Coopertition**.
- **Person:** first-person plural **"we / our"** for the team; direct **"you"** when inviting participation ("Where do I start?", "Want to know more?").
- **Casing:** headlines and section labels lean **UPPERCASE** in the display/heading faces (e.g. "JOIN ONE OF OUR TEAMS", "FACTS ABOUT FIRST®"). Body copy is sentence case.
- **The name:** written **"That ONE Team"** with **ONE** emphasized (in the wordmark, ONE is Team Blue). Online/email, prefer **"ThatONEteam.org"** — the run-together form keeps the three words readable. Full sign-off: *That ONE Team — Our Next Engineers*.
- **FIRST®:** always styled **FIRST®** (all-caps, registered mark). Program names carry ® / ™ as FIRST specifies (FIRST® LEGO® League, FIRST® Tech Challenge, FIRST® Robotics Competition).
- **Tagline:** *Playing the Water Game Since 2013* — used as a signature line, often italic.
- **Emoji:** **not used** in brand copy. Use real iconography instead.
- **Tone examples:**
  - Announcement: *"Double Blue Banners at Muskegon — we won the event and the Impact Award, the most prestigious award in FIRST®."*
  - Invitation: *"Explore and be inspired through STEAM. Contact us for further details."*
  - Stats: plain and factual — *"785K+ students participated in the 2023-2024 season."*

## VISUAL FOUNDATIONS
- **Colors:** four official brand colors only — **Team Blue `#0095C8`** (Pantone 639 C), **Team Grey `#C7C8CA`** (Cool Gray 3 C), **Team White `#FFFFFF`**, **Team Black `#000000`**. Rich Black (CMYK 60/40/40/100) is **print-only**. The supplied square logo uses exactly these — blue "OUR NEXT ENGINEERS", grey "THAT"/"TEAM", white "ONE", on near-black. Blue and neutral ramps are derived for UI depth; support colors (success/warning/danger) are reserved for functional UI states only. The palette is **cool and high-contrast** — blue on white, or white/blue on near-black.
- **Type:**
  - **Roboto** — all paragraph / long-form text. *Exact.*
  - **Pirulen** — loud all-caps display & short competition lines. ***Official supplied font*** (`assets/fonts/Pirulen-Rg.otf`) — regular weight only; use it uppercase, do not synthesize bold.
  - **SquareFont** — squared headers & short lines. ***Official supplied font*** (`assets/fonts/Square.ttf`) — all-caps, single weight; the `--font-heading` face, so headings render UPPERCASE by nature.
  - Display/heading type is **UPPERCASE with light tracking**; the team number "4967" and stat figures use the display face big.
- **Backgrounds:** solid fields, not gradients-as-decoration. Three modes: **white** (default), **near-black** (`--grey-900`, hero/footer), and **full Team Blue** (stat/impact sections). No textures or patterns. Photography is full-bleed where used.
- **Imagery:** cool-leaning, **sharp** action photography of full robots and teams. Brand rules: no blurry photos; no subjects with their backs to camera; never let one photo clash with another. Source FIRST/season imagery from official FIRST media.
- **Corners & borders:** modest, squared feel. Radii: 4px (controls), 8px (inputs/badges bg), 12px (cards), pill (badges). Brand-forward borders are **2px**; accent rules/underlines are **4px** Team Blue (e.g. card top accent, signature left rule).
- **Shadows:** soft, **neutral** (grey-based) elevation only — `shadow-sm/md/lg`. **Never colored glows.** A subtle blue shadow token exists for rare emphasis.
- **Hover states:** buttons darken (`brightness(0.92)`); cards lift `translateY(-4px)` and deepen shadow; nav dropdown items fill with `--brand-soft`. **Press:** buttons scale to `0.94–0.97`.
- **Motion:** quick and functional — 120–360ms, standard/`ease-out` curves. Fades and small translates; no bounces, no infinite decorative loops.
- **Layout:** centered `1200px` max-width container, `24px` gutters, generous `~80px` section padding. 4px spacing grid.
- **Transparency/blur:** used sparingly — translucent white chips on dark bars (socials), otherwise solid.

## ICONOGRAPHY
- The source site is Wix-built and has **no proprietary icon set**. It uses **social glyphs** (Facebook, X, Instagram) and simple UI affordances.
- **Recommendation & substitution:** use **[Lucide](https://lucide.dev)** (2px stroke, rounded caps) as the house icon set — it matches the clean, squared-but-friendly brand feel. This is a **substitution / addition**, flagged here. Demo cards and the website kit use small inline SVGs in the Lucide style (menu, arrow, camera, heart) plus simple social marks.
- **Emoji:** not used as iconography.
- **Photo slots** use a camera glyph placeholder until real photography is supplied.

---

## VISUAL SYSTEM CHEATSHEET
- Section opener = **blue uppercase eyebrow → squared heading → intro** (`SectionHeading`).
- Big numbers = **display face** in Team Blue (`StatCard`), often on blue or dark fields.
- Awards / grade bands = **Badge** pills.
- Primary action = **uppercase blue Button**; on dark, ghost/outline in white.

---

## Index / Manifest
**Root**
- `styles.css` — global entry (import this). Imports the token files below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `readme.md` — this file. `SKILL.md` — portable skill wrapper.

**Foundations** (`foundations/` — Design System tab cards)
- Colors: Official Team Colors, Blue Ramp, Neutral Ramp, Semantic Tokens.
- Type: Display (Pirulen→Orbitron), Headings (SquareFont→Chakra Petch), Body (Roboto), Type Scale.
- Spacing: Spacing Scale, Radius & Elevation.
- Brand: Logo — Square (supplied), Naming & Tagline, Email Signature.

**Components** (`components/`, namespace `ThatONETeamDesignSystem_a6a028`)
- `core/` — **Button**, **IconButton**, **Badge**
- `content/` — **Card**, **StatCard**, **SectionHeading**
- `forms/` — **Input**

**UI Kits** (`ui_kits/`)
- `website/` — full homepage recreation: `Header`, `Hero`, `Programs`, `Facts`, `Support`, `Footer` (→ `index.html`).

**Slides** (`slides/`)
- Title, Content, Impact/Stats, Closing — 1280×720 branded presentation templates.

### Intentional additions
- **Lucide** icon set (no proprietary icons in source) — flagged above.
- **StatCard / SectionHeading / ProgramCard-style Card usage** — distilled from recurring site patterns, not a named source component library (the source is a Wix site with no component inventory).
