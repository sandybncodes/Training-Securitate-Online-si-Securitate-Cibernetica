export function animateNodes(selector, activeClass = 'is-active') {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      const isActive = node.classList.contains(activeClass);
      nodes.forEach((item) => item.classList.remove(activeClass));
      if (!isActive) {
        node.classList.add(activeClass);
      }
    });
  });
}

export function resetQuizState() {
  document.querySelectorAll('.quiz-card').forEach((card) => {
    card.classList.remove('is-correct', 'is-incorrect');
    card.setAttribute('aria-pressed', 'false');
  });
}
