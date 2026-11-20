(function () {
  function bindNavigation({ state, renderCurrentSlide, isFullscreenSupported }) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const presenterBtn = document.getElementById('presenter-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    const reveal = window.TheDigitalWorld.reveal;

    // Forward/back first consume reveal steps on the current slide, then change slide.
    // Going back lands on the previous slide fully revealed.
    function advance() {
      if (reveal && reveal.next()) return;
      if (state.currentIndex >= state.totalSlides - 1) return;
      state.currentIndex += 1;
      state.startAtEnd = false;
      renderCurrentSlide();
    }

    function retreat() {
      if (reveal && reveal.prev()) return;
      if (state.currentIndex <= 0) return;
      state.currentIndex -= 1;
      state.startAtEnd = true;
      renderCurrentSlide();
    }

    function jumpTo(index, atEnd) {
      state.currentIndex = index;
      state.startAtEnd = atEnd;
      renderCurrentSlide();
    }

    prevBtn?.addEventListener('click', retreat);
    nextBtn?.addEventListener('click', advance);

    // Fullscreen: controls hide when idle and return on pointer activity or Tab.
    let chromeTimer = null;
    function wakeChrome() {
      if (!document.fullscreenElement) return;
      document.body.classList.add('chrome-active');
      clearTimeout(chromeTimer);
      chromeTimer = setTimeout(() => document.body.classList.remove('chrome-active'), 3000);
    }

    document.addEventListener('fullscreenchange', () => {
      const active = Boolean(document.fullscreenElement);
      document.body.classList.toggle('is-fullscreen', active);
      document.body.classList.remove('chrome-active');
      if (active) wakeChrome();
    });
    ['mousemove', 'pointerdown', 'touchstart'].forEach((name) => {
      document.addEventListener(name, wakeChrome, { passive: true });
    });

    presenterBtn?.addEventListener('click', () => {
      const notesPanel = document.getElementById('notes-panel');
      if (!notesPanel) return;

      const isHidden = notesPanel.classList.contains('is-hidden');
      notesPanel.classList.toggle('is-hidden', !isHidden);
      presenterBtn.setAttribute('aria-pressed', String(!isHidden));
    });

    fullscreenBtn?.addEventListener('click', async () => {
      if (!isFullscreenSupported()) return;

      try {
        const root = document.documentElement;
        if (!document.fullscreenElement) {
          await root.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      } catch (error) {
        console.warn('Fullscreen is unavailable in this browser context:', error);
      }
    });

    document.addEventListener('keydown', (event) => {
      const tag = event.target && event.target.tagName;
      const isTypingField = tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable;

      if (isTypingField) return;
      if (event.key === 'Tab') wakeChrome();
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      // Space/Enter on a focused control must activate that control, not advance the deck.
      const onInteractive = Boolean(event.target?.closest?.('button, a, summary, video, [role="button"]'));

      if (event.key === 'ArrowRight' || event.key === 'PageDown' || (event.key === ' ' && !onInteractive)) {
        event.preventDefault();
        advance();
      }

      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        retreat();
      }

      if (event.key === 'Home') {
        event.preventDefault();
        jumpTo(0, false);
      }

      if (event.key === 'End') {
        event.preventDefault();
        jumpTo(state.totalSlides - 1, true);
      }

      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen?.();
        } else {
          document.documentElement.requestFullscreen?.();
        }
      }
    });
  }

  function isFullscreenSupported() {
    return Boolean(document.documentElement && document.documentElement.requestFullscreen);
  }

  window.TheDigitalWorld = window.TheDigitalWorld || {};
  window.TheDigitalWorld.bindNavigation = bindNavigation;
  window.TheDigitalWorld.isFullscreenSupported = isFullscreenSupported;
})();
