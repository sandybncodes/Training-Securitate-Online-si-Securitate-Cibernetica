# THE DIGITAL WORLD

A cinematic, single-page keynote presentation about online safety, cyber manipulation and AI literacy for future teachers in Moldova.

## Project purpose

This static web presentation is designed for a classroom projector and uses a 16:9 slide stage, reduced-motion support, keyboard navigation, and presenter notes hidden from the audience.

## Run locally

The presentation works offline: Bootstrap and the Inter font are stored in `assets/vendor/` (no CDN). Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Keyboard controls

- ArrowRight / Space / PageDown = next step, or next slide when the slide has no steps left
- ArrowLeft / PageUp = previous step; going back across a slide boundary lands on the previous slide fully revealed
- Home = first slide, End = last slide
- F = fullscreen, Esc = exit fullscreen
- Space on a focused button or link activates that control (it does not advance the deck)

In fullscreen the top and bottom bars hide automatically; move the mouse or press Tab to bring them back for about 3 seconds.

## Slide canvas and step reveal

Slides are authored on a fixed 1920x1080 canvas that is scaled to the window (`fitStage()` in `js/slide-engine.js`), so content never scrolls or reflows. Slides that declare `data-steps="N"` reveal content step by step via `data-step="k"` / `data-step-until="k"` (see `js/reveal.js`).

Redesigned slides (currently S01, S10, S18) use `.slide-v2` plus a theme and layout class. The remaining slides still use the original markup through a compatibility layer in `css/layout.css` and are scheduled for redesign (see `docs/REDESIGN_QA_REPORT.md`).

## Presenter mode

Use the `Notes` button in the control bar to reveal the private speaker notes panel. This panel contains slide timing, owner, and quick talking points without exposing them to the audience.

## Project structure

- `index.html` – slide shell and controls
- `css/` – `tokens.css` (design tokens), `layout.css` (shell, canvas, legacy shim), `layouts.css` (slide-v2 layouts), `components.css`, `motion.css`, `animations.css`, `responsive.css`
- `js/content/ro.js` – all 34 slide definitions in Romanian
- `js/slide-engine.js` – render logic, notes synchronization, stage scaling
- `js/reveal.js` – step reveal controller
- `js/navigation.js` – keyboard, buttons, fullscreen chrome
- `js/interactions.js` – quiz, reveal, hotspot and poll behaviors
- `assets/images/` – locally stored illustration assets
- `assets/vendor/` – Bootstrap 5.3.3 CSS and Inter variable font (offline)
- `docs/` – presenter notes, source register, design audit, design system, QA report

## Notes about sources and safety

- No real phishing URLs, OTPs, or personal data are used.
- No actual video player or video asset is included; the opening video is handled separately by presenters.
- Unverified claims are flagged for editorial review rather than presented as facts.
- All asset usage is tracked in `ASSET_SOURCES.md`.

## Deployment

Because the project is static, deployment is trivial. Upload the project folder to any static host such as GitHub Pages, Netlify, or Azure Static Web Apps.
