---
name: that-one-team-design
description: Use this skill to generate well-branded interfaces and assets for That ONE Team (FRC Team 4967 — "Our Next Engineers"), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts to load first:
- Brand colors: Team Blue #0095C8, Team Grey #C7C8CA, White, Black. Cool, high-contrast; solid fields (white / near-black / Team Blue), never decorative gradients.
- Type: Roboto (body, exact) · **Pirulen** (display, real supplied font — `assets/fonts/Pirulen-Rg.otf`, regular only, use uppercase) · SquareFont→Chakra Petch (headers, SUBSTITUTE). Display/headings are UPPERCASE with light tracking.
- Name: "That ONE Team" (ONE in blue); online form "ThatONEteam.org". Always "FIRST®". Tagline: "Playing the Water Game Since 2013."
- Voice: warm, community-minded, gracious; "we/our" for the team, "you" to invite. No emoji.
- ⚠️ Square logo (`assets/logo-square.png`) and Pirulen are supplied/real. Still needed: the **Long (5:1) logo** and the **SquareFont** binary (currently substituted with Chakra Petch). Ask the user for these before finalizing production work.

Load `styles.css` for tokens/fonts; components live on `window.ThatONETeamDesignSystem_a6a028` after loading `_ds_bundle.js`.
