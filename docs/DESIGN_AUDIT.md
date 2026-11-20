# Design audit (Phase 1)

Scope: all 34 slides of the deck, audited before the redesign. Method: automated measurements in a browser at 1920x1080 (word counts, component counts, text contrast, overflow) plus review of the slide markup in `js/content/ro.js`. No claim here is based on audience testing.

## Recurring problems

1. **Same layout everywhere.** About 30 of 34 slides use the same recipe: title + subtitle/box + 2-5 identical cards in a grid. There is no visual rhythm between hero, evidence, diagram and quiz moments.
2. **Cards instead of evidence.** Concepts that could be shown as an artefact (an SMS, a document, a trust boundary) were written as text boxes. S10 and S18 were the clearest cases.
3. **Typography too small for a projector.** Body text and card text were sized for a laptop (about 14-18 px at 1280 wide). On a projector at the back of a classroom this is not readable. New minimum on the 1920x1080 canvas: 28 px for body text.
4. **Over-tight, overlapping headlines.** `.hero-title` used `letter-spacing: -0.07em` and line-height 0.95, which merged words. New: `-0.025em` to `-0.035em`, line-height 1.0-1.04.
5. **Scrolling / reflow instead of a fixed stage.** The layout depended on viewport height and media queries, so content could overflow in fullscreen and on shorter screens. New: fixed 1920x1080 canvas scaled to fit.
6. **Low-contrast or invisible text** (Bootstrap `.text-muted !important`, black SVG text, black text on buttons). Fixed earlier in this project; the contrast scan now reports 0 failures (below 4.5:1) on all 34 slides.
7. **Every slide reveals everything at once.** The presenter cannot control the pace. New: step reveal with the same keys (`js/reveal.js`).
8. **CDN dependencies.** Fonts and Bootstrap came from CDNs, which fails offline in a classroom. New: vendored locally.

## Per-slide table

Words = visible words in the slide markup. Cards = card-like blocks. Buttons = interactive controls. Priority: **P1** = pilot / weak and central to the story, **P2** = text-heavy or repetitive, **P3** = acceptable, restyle only.

| Slide | Title | Words | Cards | Visual | Buttons | Priority and note |
| --- | --- | ---: | ---: | --- | ---: | --- |
| S01 | Lumea digitală | 33 | 0 | image (SVG) | 0 | **Done (pilot).** Needs a real photo (see ASSET_TODO) |
| S02 | Crezi că ție nu ți s-ar putea întâmpla? | 33 | 3 | - | 3 | P2, 3 identical cards |
| S03 | Privește atent. Unde începe manipularea? | 41 | 3 | - | 0 | P1, should become an evidence slide |
| S04 | Promisiunea sesiunii | 31 | 0 | - | 0 | P3 |
| S05 | Două concepte. Aceeași responsabilitate. | 28 | 2 | - | 0 | P3, two-column comparison |
| S06 | Ce caută un atacator? | 17 | 0 | - | 5 | P2 |
| S07 | Uneori, cea mai vulnerabilă parte... | 77 | 5 | - | 5 | P2, text-heavy |
| S08 | Un atacator nu trebuie să spargă sistemul... | 44 | 0 | SVG diagram | 0 | P1, long title, small diagram |
| S09 | Același truc. Trei canale. | 20 | 3 | - | 0 | P2 |
| S10 | Anatomia unui mesaj fals de la bancă | 96 | 0 | - | 4 | **Done (pilot).** |
| S11 | Alte capcane digitale | 60 | 4 | - | 0 | P2 |
| S12 | Nu se întâmplă doar în alte țări. | 51 | 2 | - | 0 | P1, needs verified Moldovan examples |
| S13 | Nu verifica mesajul folosind datele din mesaj. | 33 | 0 | - | 0 | P1, key rule, should be a hero statement |
| S14 | AI nu mai este science-fiction... | 44 | 3 | - | 0 | P2 |
| S15 | Ce îi oferim AI fără să ne gândim? | 76 | 0 | - | 5 | P2, text-heavy |
| S16 | Când AI nu doar răspunde, ci și acționează. | 31 | 0 | SVG diagram | 0 | P2 |
| S17 | Cât acces are nevoie, de fapt, un AI? | 49 | 2 | - | 0 | P2 |
| S18 | Poate un document să încerce să dea ordine AI-ului? | 125 | 0 | SVG diagram | 3 | **Done (pilot).** |
| S19 | Dacă vocea pare reală... | 63 | 3 | - | 0 | P2 |
| S20 | AI poate suna convingător și totuși să greșească | 38 | 2 | - | 0 | P3 |
| S21 | Siguranța AI vs securitatea AI | 47 | 2 | - | 0 | P3 |
| S22 | Inteligența artificială poate genera idei... | 21 | 0 | - | 0 | P3 |
| S23 | Detectiv digital | 94 | 3 | - | 3 | P2, text-heavy activity |
| S24 | Joc de inginerie socială | 36 | 3 | - | 0 | P2 |
| S25 | Amprenta ta digitală | 44 | 3 | - | 0 | P2 |
| S26 | Poate AI să fie manipulată? | 33 | 1 | - | 0 | P2, contains a typo to check |
| S27 | Ai împărtăși asta cu AI? | 45 | 4 | - | 0 | P2 |
| S28 | Copiii cresc într-o lume conectată... | 42 | 3 | - | 0 | P2 |
| S29 | O fotografie publicată astăzi... | 25 | 0 | - | 0 | P3 |
| S30 | Tu ești profesorul | 43 | 1 | - | 0 | P3 |
| S31 | Chestionar final interactiv | 102 | 5 | - | 5 | P1, quiz answers need review |
| S32 | Șapte reguli de siguranță online | 45 | 0 | - | 0 | P2, list slide |
| S33 | Șapte reguli de siguranță AI | 64 | 0 | - | 0 | P2, list slide |
| S34 | OPREȘTE-TE. VERIFICĂ. CERE AJUTOR. | 45 | 3 | - | 0 | P2, closing, should be a hero statement |

## Limits of this audit

- Visual verdicts (P1/P2/P3) are the author's judgement, not measured.
- The quiz (S31) and the S12 / S26 content notes come from the content review, not from the automated scan, and need an editorial check before a final run.
- Only the three pilot slides (S01, S10, S18) were redesigned in this phase.
