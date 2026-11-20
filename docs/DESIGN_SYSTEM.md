# Design system: SIGNAL / NOISE

Concept: the deck separates the **signal** (what is true and worth trusting) from the **noise** (urgency, fear, fake authority). Dark "ink" slides carry the dramatic moments; light "paper" slides carry evidence and artefacts. One accent per slide does the pointing.

## Canvas

- Fixed 1920x1080. `fitStage()` scales it to the available area; nothing scrolls.
- Safe area: 112 px left/right, 72 px top, 64 px bottom (`.v2-frame`).
- Never use viewport units (`vw`, `vh`) inside a slide.

## Colour tokens (`css/tokens.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--ink` / `--ink-soft` | #080b11 / #111722 | dark slide and chrome background |
| `--paper` | #f6f7f9 | light slide background |
| `--text-on-dark` / `--text-muted` | #f5f7fa / #a5adba | text on ink |
| `--electric` | #4f8bff | system / assistant |
| `--cyan` | #66d9e8 | trusted, interactive focus |
| `--alert` | #f2a65a | warning, untrusted |
| `--danger` | #e45e65 | injected / harmful content |
| `--safe` | #4baf8b | safe outcome |

Rules: one accent per slide as the focal point; no gradients or glow except the single light source in S01; meaning is never carried by colour alone (numbers, labels, outlines, line-through).

## Typography

One family: Inter variable (local). Scale on the 1920 canvas:

| Class | Size | Use |
| --- | --- | --- |
| `.display-xl` | 132 px | hero statement (S01) |
| `.display-m` | 76 px | slide question / claim, max 2 lines, controlled `<br>` |
| `.body-l` | 36 px | prompt text |
| body in components | 28-34 px | explanations, cards (minimum 28 px) |
| `.eyebrow`, `.v2-header` | 24-26 px, uppercase, tracking | chapter / simulation labels |

Letter-spacing on headlines: -0.025em to -0.035em. Line-height 1.0-1.04.

## Themes and layouts (`css/layouts.css`)

- Themes: `.theme-ink`, `.theme-paper` (set `--fg`, `--fg-muted`, `--line`, `--slide-bg`).
- Layouts: `.layout-hero` (statement + key visual), `.layout-evidence` (copy + large artefact), `.layout-diagram` (artefact left, explanation / diagram right).
- A slide is `<section class="slide slide-v2 theme-* layout-*" data-slide="Sxx" data-steps="N">`.

## Components (`css/components.css`)

Phone (`.phone--lock`, `.phone--messages`), notification, hotspot, flag list, document card (`.doc`, `.inj`), poll (`.poll-option`), trust diagram (`.tdiagram`, `.t-card`, `.t-assistant`, `.t-link`), step pips, simulation tag (`.sim-tag`).

## Motion (`css/motion.css`, tokens in `tokens.css`)

- Durations: fast 180 ms, base 360 ms, slow 650 ms, hero 900 ms. Easing `--ease-standard`.
- Motion shows cause and effect: a reveal step brings in one idea. Hero entrance: headline, then second line, then notification.
- Reveal: `data-step="k"` appears at step k; `data-step-until="k"` leaves at step k. Class hooks `.is-revealed`, `.is-gone`; slide attribute `data-current-step`.
- `prefers-reduced-motion`: all animation and transition disabled on `.slide-v2`; content is visible immediately.

## Interaction rules

- Everything clickable is a real `<button>` (keyboard: Tab, Enter/Space). Space on a focused button never advances the deck.
- Visible focus ring (`:focus-visible`, 3 px cyan).
- Polls never reveal a right or wrong answer in the UI; the presenter does.
- Simulations carry a visible "Simulare educațională" label; the bank ("Banca Exemplu") and URL (`https://verificare.example`) are fictional and not links.

## Legacy compatibility

Slides without `.slide-v2` are rendered through a shim in `css/layout.css`: the original 1280x720 layout scaled by 1.5 inside the canvas, with a fixed title size. The shim is removed once all slides are migrated.
