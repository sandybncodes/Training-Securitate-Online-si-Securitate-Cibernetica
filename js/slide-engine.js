(function () {
  const CANVAS_W = 1920;
  const CANVAS_H = 1080;

  // Slides are authored on a fixed 1920x1080 canvas. The stage is sized to the largest 16:9 box
  // that fits the available area and the canvas is scaled to it, so content never scrolls or reflows.
  function fitStage() {
    const wrap = document.querySelector('.deck-wrap');
    const stage = document.getElementById('slide-stage');
    if (!wrap || !stage) return;

    const scale = Math.min(wrap.clientWidth / CANVAS_W, wrap.clientHeight / CANVAS_H);
    if (!(scale > 0)) return;
    stage.style.width = `${Math.floor(CANVAS_W * scale)}px`;
    stage.style.height = `${Math.floor(CANVAS_H * scale)}px`;
    stage.style.setProperty('--stage-scale', String(scale));
  }

  const deckWrap = document.querySelector('.deck-wrap');
  if (deckWrap && typeof ResizeObserver === 'function') {
    new ResizeObserver(fitStage).observe(deckWrap);
  }
  window.addEventListener('resize', fitStage);
  document.addEventListener('fullscreenchange', fitStage);

  function renderSlide(slide, currentIndex, totalSlides) {
    const stage = document.getElementById('slide-stage');
    const chapterLabel = document.getElementById('chapter-label');
    const counter = document.getElementById('slide-counter');
    const progressBar = document.getElementById('progress-bar');
    const notesPanel = document.getElementById('notes-panel');

    if (!stage || !chapterLabel || !counter || !progressBar || !notesPanel) return;

    stage.innerHTML = slide.html;
    stage.querySelectorAll('.slide').forEach((el) => el.classList.add('active'));
    fitStage();

    chapterLabel.textContent = `Capitol ${slide.chapter.match(/\d+/)?.[0] || 1}`;
    counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
    progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;

    const notes = slide.notes || [];
    notesPanel.innerHTML = `
      <h3>${slide.id} • ${slide.title}</h3>
      <p class="text-muted" style="margin-top: 8px; font-weight: 600;">Presenter: ${slide.owner}</p>
      <p class="text-muted" style="margin-top: 4px;">Durată estimată: ${slide.time}</p>
      <ul>
        ${notes.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  function renderCurrentSlide(state, slides) {
    const slide = slides[state.currentIndex];
    renderSlide(slide, state.currentIndex, slides.length);
  }

  window.TheDigitalWorld = window.TheDigitalWorld || {};
  window.TheDigitalWorld.fitStage = fitStage;
  window.TheDigitalWorld.renderSlide = renderSlide;
  window.TheDigitalWorld.renderCurrentSlide = renderCurrentSlide;
})();
