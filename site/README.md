# That ONE Team — Training Hub

A static, no-build-step website for **Team 4967 (That ONE Team)** students. It's a
launch page that links out to a growing set of **interactive training modules** —
each one lets a student write real FRC Java code and immediately see it drive a
small in-browser simulation (Inverse Kinematics, Filters, Image Recognition,
Mecanum Drive, Swerve Drive, PIDF Control, and more to come).

This is **not** a recreation of thatoneteam.org — it's a new, separate tool that
borrows the team's brand system (colors, fonts, logo, components) from the design
export in [`/project`](../project) and [`/project/readme.md`](../project/readme.md).
Treat that folder as the source of truth for anything visual that isn't already
copied into `assets/css` here.

**Current status:** the start page (`/index.html`, at the repo root so it's ready
for GitHub Pages), the module scaffold (`modules/template.html`), and all six
modules in `data/modules.js` are built and marked `status: 'available'`:
[`modules/inverse-kinematics.html`](modules/inverse-kinematics.html),
[`modules/filters.html`](modules/filters.html),
[`modules/image-recognition.html`](modules/image-recognition.html),
[`modules/mecanum-drive.html`](modules/mecanum-drive.html),
[`modules/swerve-drive.html`](modules/swerve-drive.html), and
[`modules/pidf-control.html`](modules/pidf-control.html). Use this README (and
Inverse Kinematics as a worked example) as the guide for any future module.

## Folder structure

```
index.html                The hub / start page — hero, module grid, facts, footer
                          (lives at the repo root so GitHub Pages can serve it)
site/
  README.md               This file
  data/
    modules.js             The module catalog that drives the card grid on /index.html
  modules/
    template.html           Starting-point scaffold for a new module page (live demo)
    inverse-kinematics.html  Complete module — worked example to copy from
    filters.html             Complete module
  assets/
    css/
      tokens/               Copied 1:1 from /project/tokens — do not fork these values
      base.css               Element defaults (copied from /project/tokens/base.css)
      site.css                Component classes (.tot-btn, .tot-card, .tot-badge, ...)
                               translated from /project/components/*.jsx
      main.css                 Entry point: imports tokens + base + site.css
      module.css                Extra styles only used on /modules/*.html pages
    fonts/                  Pirulen-Rg.otf, Square.ttf (the real supplied brand fonts)
    img/                    logo-square.png, logo-wide.png
    js/
      nav.js                  Header dropdown / mobile menu behavior
      theme.js                 Night/day mode toggle (injects the button, persists to localStorage)
      render-modules.js        Renders data/modules.js into the /index.html card grid
      module-runtime.js        Shared code-panel + simulation-canvas plumbing
      module-storage.js        Shared save/restore/download/load for a module's code editor
```

No bundler, no npm install — open the repo-root `index.html` in a browser, or serve
the repo root with any static file server (`python3 -m http.server`, GitHub Pages,
Netlify, etc.). Because `index.html` lives at the repo root, enabling GitHub Pages
for this repo (Settings → Pages → deploy from the default branch, root folder) works
with no further configuration — all of its asset/script/data references already
point into `site/...`.

## Building a new module page

1. **Duplicate the scaffold.** Copy `modules/template.html` to
   `modules/<slug>.html` (e.g. `modules/pidf-control.html`).
2. **Write the lesson.** Replace the placeholder text in
   `.tot-module-header__lead` and the "Objective" card with real content: what the
   student is learning, and the concrete goal for this module.
3. **Replace the code starter.** Put real starter code (with a couple of `TODO`s or
   blanks to fill in) in the `<textarea id="code-input">`.
4. **Wire the simulation.** In the page's own `<script>` block, call
   `TotModuleRuntime.init({...})` (see `assets/js/module-runtime.js`) with:
   - `initialState()` — the simulation's starting values
   - `step(state, dt)` — advance the simulation by `dt` seconds every frame
   - `draw(ctx, state, dt, canvas)` — render one frame to the `<canvas>`
   - `onRun(sourceText, state)` — called when the student clicks **Run**; this is
     where their code actually affects the simulation (see "Executing student code"
     below)
   - `onReset(state)` — restore anything `initialState()` doesn't already reset
   The template's own script (bottom of `modules/template.html`) is a complete,
   working example — a box that drifts around a canvas — copy its shape and swap
   the physics.
5. **Persist the student's code.** Call `TotModuleStorage.attach({ key: '<slug>',
   textarea: <the code textarea element> })` (see `assets/js/module-storage.js`)
   once the starter code is in the textarea. It autosaves to `localStorage` (so
   work survives closing the tab) and adds Download/Load-file controls; pass
   `saveButtonId`/`restoreButtonId` instead of letting it build its own row if
   the module already has its own Save/Restore buttons (see
   `modules/inverse-kinematics.html`).
6. **Update telemetry.** Change the three `.tot-telemetry__item` labels/values (or
   add more columns) to whatever numbers matter for this lesson.
7. **Register it in the catalog.** In `data/modules.js`, change that module's entry
   from `status: 'coming-soon'` to `status: 'available'` and add
   `href: 'site/modules/<slug>.html'` (the hrefs are relative to the repo-root
   `index.html`, not to this folder). The hub page picks this up automatically — no
   other file needs to change.
8. **Remove the template banner.** Delete the `.tot-callout` "this is a template
   preview" box — that's only for the scaffold itself.

`modules/inverse-kinematics.html` follows this exact pattern end to end — a
prismatic + rotational arm, a Java-flavored `step(dt)` code panel, live telemetry,
parameter sliders, and an "API reference" card — and is a better starting point to
copy than the bare template if your module needs richer controls (sliders, live
per-joint readouts, etc.) beyond the template's single code+canvas pair. It also
introduces a few more shared classes worth reusing: `.tot-control-group` /
`.tot-control-row` (parameter sliders), `.tot-metrics-row` (compact stat cards),
`.tot-joint-block` / `.tot-accent-block` (grouped sub-panels), and `.tot-vel-row`
(live value bars) — all defined in `assets/css/module.css`.

### Executing student code

This scaffold does **not** yet include a way to actually compile/run the Java a
student types — `onRun()` in `modules/template.html` is a stand-in that just nudges
the demo simulation. Before building a real module, decide how `onRun()` will work.
Options, roughly cheapest-to-most-capable:

- **Reimplement the lesson's algorithm in JavaScript**, and have the code panel's
  Java act as an annotated reference the student edits conceptually (fastest to
  ship, least "real").
- **Client-side JVM in the browser** (e.g. CheerpJ, TeaVM, Doppio) — runs actual
  Java client-side, no server needed, but has real setup cost and payload size.
- **Server-side compile+run sandbox** — most faithful to real FRC Java, but needs a
  backend, a sandboxing story (untrusted code!), and hosting.

Whatever is chosen, it should be implemented once as a shared helper (alongside
`module-runtime.js`) so every module calls the same `onRun()` pattern.

`modules/inverse-kinematics.html` currently ships the cheapest option as a proof of
concept: its `compileAndRun()` does a small regex-based swap of Java syntax
(`double`/`int`/`Math.signum`/`println`/…) into JS, then runs it with `new
Function(...)`. It's good enough to let a student write real `step(dt)` logic and
see it drive the simulation today, but it isn't real Java — arrays, generics, and
most of the standard library aren't supported. Treat it as a placeholder to replace
once the team picks a real execution strategy, not a pattern to copy verbatim into
every future module.

## Design system reference

- Brand colors, type, spacing, and component visuals are defined in
  `/project/tokens/*.css` and documented in `/project/readme.md` (VISUAL
  FOUNDATIONS, CONTENT FUNDAMENTALS, ICONOGRAPHY sections) — read that before
  introducing any new color, font, or spacing value here.
- `assets/css/tokens/*.css` in this folder are direct copies of those files (font
  `url()` paths adjusted for this folder's layout). If the design system's tokens
  change, re-copy them here rather than hand-editing values out of sync.
- `assets/css/site.css` has the reusable component classes translated from
  `/project/components/*.jsx` (Button → `.tot-btn`, Badge → `.tot-badge`, Card →
  `.tot-card`, SectionHeading → `.tot-section-heading`, StatCard → `.tot-stat`,
  Input → `.tot-input`). Reuse these classes instead of writing new one-off styles.
- Headings use `SquareFont` (`--font-heading`) and render UPPERCASE automatically
  (`h1`–`h6` in `base.css`) — write normal sentence/title case in your HTML, the
  font + CSS handle the capitals.
- `--font-display` (Pirulen) is for loud, short lines only (stat figures, hero
  numerals) — never body copy, never long headings.

## Content conventions

Per `/project/readme.md` → CONTENT FUNDAMENTALS: first-person plural ("we/our") for
the team, direct "you" when inviting action, no emoji in copy (use real
iconography), **FIRST®** always styled with the registered mark, and
"ThatONEteam.org" (no spaces) when writing the URL inline. Keep module lesson copy
plain and factual — this is a training tool, not marketing.
