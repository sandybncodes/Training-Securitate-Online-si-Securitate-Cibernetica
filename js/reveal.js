(function () {
  const root = window.TheDigitalWorld = window.TheDigitalWorld || {};

  // Step reveal controller for the active slide.
  // Slides declare `data-steps="N"` and mark elements with `data-step="k"` (appear at step k)
  // or `data-step-until="k"` (disappear at step k).
  const state = { slide: null, step: 0, max: 0 };

  function announce(text) {
    const live = state.slide && state.slide.querySelector('.step-live');
    if (live) live.textContent = text;
  }

  function buildPips() {
    if (!state.slide || state.max < 1) return;
    const pips = document.createElement('div');
    pips.className = 'step-pips';
    pips.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < state.max; i += 1) pips.appendChild(document.createElement('i'));
    state.slide.appendChild(pips);

    const live = document.createElement('p');
    live.className = 'sr-only step-live';
    live.setAttribute('aria-live', 'polite');
    state.slide.appendChild(live);
  }

  function apply() {
    const slide = state.slide;
    if (!slide) return;
    slide.dataset.currentStep = String(state.step);

    slide.querySelectorAll('[data-step]').forEach((el) => {
      el.classList.toggle('is-revealed', state.step >= Number(el.dataset.step));
      el.classList.toggle('is-current', state.step === Number(el.dataset.step));
    });
    slide.querySelectorAll('[data-step-until]').forEach((el) => {
      el.classList.toggle('is-gone', state.step >= Number(el.dataset.stepUntil));
    });
    slide.querySelectorAll('.step-pips i').forEach((pip, index) => {
      pip.classList.toggle('is-on', index < state.step);
    });

    if (state.max > 0) announce(`Pasul ${state.step} din ${state.max}`);
    slide.dispatchEvent(new CustomEvent('stepchange', { bubbles: true, detail: { step: state.step, max: state.max } }));
  }

  function init(startAtEnd) {
    state.slide = document.querySelector('.slide.active');
    state.max = state.slide ? Number(state.slide.dataset.steps || 0) : 0;
    state.step = startAtEnd ? state.max : 0;
    buildPips();
    apply();
  }

  function next() {
    if (state.step >= state.max) return false;
    state.step += 1;
    apply();
    return true;
  }

  function prev() {
    if (state.step <= 0) return false;
    state.step -= 1;
    apply();
    return true;
  }

  function goTo(target) {
    state.step = Math.max(0, Math.min(state.max, target));
    apply();
  }

  root.reveal = {
    init,
    next,
    prev,
    goTo,
    hasNext: () => state.step < state.max,
    hasPrev: () => state.step > 0,
    get step() { return state.step; },
    get max() { return state.max; }
  };
})();
