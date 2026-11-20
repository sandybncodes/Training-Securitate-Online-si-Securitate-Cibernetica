(function () {
  // Content helpers shared by the chapter files (js/content/ro/ch*.js).
  // Each chapter file registers slides with C.add(C.slide({...})); js/content/ro.js publishes the final list.
  const C = (window.TheDigitalWorldContent = window.TheDigitalWorldContent || {});
  C.slides = [];

  C.chapters = {
    1: { name: 'The Hook', label: 'Capitolul 1 · Începutul', owner: 'Presenter 1', time: '8 min' },
    2: { name: 'The Invisible Threat', label: 'Capitolul 2 · Amenințarea invizibilă', owner: 'Presenter 1', time: '12 min' },
    3: { name: 'The Digital Trap', label: 'Capitolul 3 · Capcana digitală', owner: 'Presenter 1', time: '15 min' },
    4: { name: 'The AI Revolution', label: 'Capitolul 4 · Inteligența artificială', owner: 'Presenter 2', time: '25 min' },
    5: { name: 'The Experiments', label: 'Capitolul 5 · Experimentele', owner: 'Both', time: '20 min' },
    6: { name: 'The Future — Protecting the Next Generation', label: 'Capitolul 6 · Generația următoare', owner: 'Presenter 2', time: '15 min' },
    7: { name: 'The Final Challenge', label: 'Capitolul 7 · Provocarea finală', owner: 'Both', time: '10 min' }
  };

  // Builds a v2 slide: section + safe-area frame + header. `body` is the markup inside the frame after the header.
  C.slide = function (cfg) {
    const ch = C.chapters[cfg.ch];
    const theme = cfg.theme || 'ink';
    const attrs = [
      `class="slide slide-v2 theme-${theme} layout-${cfg.layout}"`,
      `data-slide="${cfg.id}"`,
      cfg.steps ? `data-steps="${cfg.steps}"` : '',
      cfg.attrs || ''
    ].filter(Boolean).join(' ');
    const tag = cfg.tag ? `<span class="sim-tag">${cfg.tag}</span>` : '';
    const header = cfg.noHeader ? '' : `<header class="v2-header"><span>${ch.label}</span>${tag}</header>`;
    return {
      id: cfg.id,
      chapter: `${cfg.ch}. ${ch.name}`,
      owner: cfg.owner || ch.owner,
      time: cfg.time || ch.time,
      title: cfg.title,
      subtitle: cfg.subtitle,
      notes: cfg.notes,
      html: `<section ${attrs}>${cfg.bg || ''}<div class="v2-frame">${header}${cfg.body}</div></section>`
    };
  };

  C.add = function () {
    Array.prototype.push.apply(C.slides, arguments);
  };

  // Static decorative waveform for the voice-cloning slide (deterministic, no randomness).
  C.waveform = function (count) {
    const bars = [];
    for (let i = 0; i < count; i += 1) {
      const h = 18 + Math.round(Math.abs(Math.sin(i * 0.52) * 64 + Math.sin(i * 1.37) * 30));
      bars.push(`<rect x="${i * 14}" y="${60 - h / 2}" width="8" height="${h}" rx="4"></rect>`);
    }
    return `<svg class="waveform" viewBox="0 0 ${count * 14} 120" aria-hidden="true">${bars.join('')}</svg>`;
  };
})();
