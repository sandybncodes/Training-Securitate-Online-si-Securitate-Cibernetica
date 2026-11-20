# Redesign QA report (pilot: S01, S10, S18)

Tested in the integrated browser (Chromium) with `file://` loading, so the offline setup is covered. Not tested: a physical projector, other browsers, touch devices, real fullscreen on a second display.

## Passed

| Check | Result |
| --- | --- |
| Console errors across all 34 slides | none |
| Text contrast (4.5:1) on all 34 slides, final reveal state | 0 failures (automated scan) |
| Page scroll at 1920x1080 (`scrollHeight` = window height) | yes |
| Content outside the 1920x1080 canvas | only the intentional phone crop on S01 and S10 |
| Stage scaling at small and large windows | stage always fits, 16:9 |
| Step reveal on S10 and S18 (4 steps each) | forward and back work; going back from S11 lands on S10 at step 4 |
| S10 hotspots with keyboard (Tab, Space) | found state, number badge, explanation row shown |
| Space on a focused button | activates the button; deck does not advance |
| `prefers-reduced-motion` | S01 animations off, content visible immediately |
| Fullscreen chrome (class-based check) | bars hidden at rest, visible when active; stage fills 1920x1080 |
| Legacy slides (31) via compatibility shim | render inside the canvas, no overflow, contrast passes |
| Offline | Bootstrap and Inter loaded from `assets/vendor/` |

## Known limits and remaining work

- Phases 3-5 of the guide (redesign of the other 31 slides) are not done. They currently look like the old design, scaled.
- The legacy shim fixes title size at 3rem inside the 1280x720 box; some long titles (e.g. S08) wrap to three lines.
- S01 uses a CSS phone, not a photograph (see `ASSET_TODO.md`).
- Real browser fullscreen was checked through the CSS state, not on a physical screen.
- Quiz content (S31), S12 local examples and a possible S26 typo still need editorial review.

## How to validate

1. Open `index.html` and press F for fullscreen. The bars should hide after about 3 seconds and return on mouse movement.
2. On S10, press Right four times, then Left. Click or Tab to the highlighted fragments in the message.
3. On S18, vote A/B/C, then press Right four times. The step dots at the bottom left should fill.
4. Enable "Reduce motion" in the operating system and reload: no entrance animation on S01.
5. Resize the window: content scales, nothing scrolls.
