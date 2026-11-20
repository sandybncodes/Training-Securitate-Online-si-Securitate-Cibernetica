/* Assembler: collects the slides registered by js/content/ro/ch1.js ... ch7.js, in slide order. */
(function () {
  const C = window.TheDigitalWorldContent;
  window.TheDigitalWorldSlides = C.slides.slice().sort((a, b) => parseFloat(a.id.slice(1)) - parseFloat(b.id.slice(1)));
})();
