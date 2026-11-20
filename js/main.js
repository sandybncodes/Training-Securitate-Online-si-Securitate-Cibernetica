(function () {
  const slides = window.TheDigitalWorldSlides || [];
  const renderCurrentSlide = window.TheDigitalWorld && window.TheDigitalWorld.renderCurrentSlide;
  const bindNavigation = window.TheDigitalWorld && window.TheDigitalWorld.bindNavigation;
  const bindInteractions = window.TheDigitalWorld && window.TheDigitalWorld.bindInteractions;
  const isFullscreenSupported = window.TheDigitalWorld && window.TheDigitalWorld.isFullscreenSupported;

  if (!slides.length || !renderCurrentSlide || !bindNavigation || !bindInteractions || !isFullscreenSupported) {
    console.error('Presentation runtime failed to initialize: required globals are missing.');
    return;
  }

  const reveal = window.TheDigitalWorld.reveal;

  const state = {
    currentIndex: 0,
    totalSlides: slides.length,
    startAtEnd: false
  };

  // Interactions are bound before the reveal controller starts so they receive the first `stepchange`.
  function refreshView() {
    renderCurrentSlide(state, slides);
    bindInteractions();
    if (reveal) reveal.init(state.startAtEnd);
    state.startAtEnd = false;
  }

  bindNavigation({
    state,
    renderCurrentSlide: refreshView,
    isFullscreenSupported
  });

  refreshView();
})();
