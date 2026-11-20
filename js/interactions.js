(function () {
  function bindInteractions() {
    document.querySelectorAll('.reveal-trigger').forEach((trigger) => {
      const targetId = trigger.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;

      trigger.addEventListener('click', () => {
        const isOpen = target.classList.contains('is-open');
        const panel = trigger.closest('.slide')?.querySelectorAll('.reveal-panel');
        panel?.forEach((item) => item.classList.remove('is-open'));
        if (!isOpen) {
          target.classList.add('is-open');
        }
      });
    });

    document.querySelectorAll('.node-target').forEach((node) => {
      node.addEventListener('click', () => {
        node.classList.toggle('is-active');
      });
    });

    document.querySelectorAll('.quiz-option').forEach((option) => {
      option.addEventListener('click', () => {
        const card = option.closest('.slide')?.querySelectorAll('.quiz-option');
        card?.forEach((item) => item.classList.remove('is-correct', 'is-incorrect'));

        const isCorrect = option.dataset.correct === 'true';
        option.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');

        const scoreBadge = option.closest('.slide')?.querySelector('.score-badge');
        if (scoreBadge) {
          const score = isCorrect ? 1 : 0;
          const current = Number.parseInt(scoreBadge.textContent.match(/\d+/)?.[0] || '0', 10);
          const next = current + score;
          scoreBadge.textContent = `Scor: ${next} / 5`;
        }
      });
    });

    document.querySelectorAll('.message-fragment').forEach((fragment) => {
      fragment.addEventListener('click', () => {
        fragment.classList.toggle('is-active');
      });
    });

    bindPhishingHotspots();
    bindPolls();
    bindSelectGroups();
    bindFoundGroups();
    bindDecisions();
    bindQuiz();
    bindAnon();
  }

  // S10: clickable fragments of the simulated SMS. Reveal steps also mark fragments as found (1..step).
  function bindPhishingHotspots() {
    document.querySelectorAll('[data-module="phishing"]').forEach((root) => {
      const hotspots = Array.from(root.querySelectorAll('.hotspot'));
      const rows = Array.from(root.querySelectorAll('.flag-row'));
      const clicked = new Set();
      let stepFound = 0;
      let active = null;

      function render() {
        const isFound = (n) => n <= stepFound || clicked.has(n);
        hotspots.forEach((el) => {
          const n = Number(el.dataset.flag);
          el.classList.toggle('is-found', isFound(n));
          el.classList.toggle('is-active', active === n);
          el.setAttribute('aria-pressed', String(isFound(n)));
        });
        rows.forEach((el) => {
          const n = Number(el.dataset.flag);
          el.classList.toggle('is-found', isFound(n));
          el.classList.toggle('is-active', active === n);
        });
        root.classList.toggle('has-found', stepFound > 0 || clicked.size > 0);
      }

      hotspots.forEach((el) => {
        el.addEventListener('click', () => {
          const n = Number(el.dataset.flag);
          clicked.add(n);
          active = n;
          render();
        });
      });

      root.addEventListener('stepchange', (event) => {
        stepFound = event.detail.step;
        active = stepFound > 0 ? stepFound : null;
        render();
      });

      render();
    });
  }

  // Audience poll: one option highlighted at a time; the UI never reveals a right/wrong answer.
  function bindPolls() {
    document.querySelectorAll('[data-poll]').forEach((group) => {
      const options = Array.from(group.querySelectorAll('.poll-option'));
      options.forEach((option) => {
        option.addEventListener('click', () => {
          const wasSelected = option.getAttribute('aria-pressed') === 'true';
          options.forEach((item) => item.setAttribute('aria-pressed', 'false'));
          if (!wasSelected) option.setAttribute('aria-pressed', 'true');
        });
      });
    });
  }

  // Single selection: items [data-sel-item][data-key], panels [data-sel-panel][data-key] (key "none" = nothing selected),
  // marks [data-sel-mark][data-key] only receive .is-selected. With data-step-select, reveal step N selects key N.
  function bindSelectGroups() {
    document.querySelectorAll('[data-select]').forEach((group) => {
      const slide = group.closest('.slide');
      const items = Array.from(group.querySelectorAll('[data-sel-item]'));
      const panels = Array.from(group.querySelectorAll('[data-sel-panel]'));
      const marks = Array.from(group.querySelectorAll('[data-sel-mark]'));
      let current = null;

      function render() {
        const key = current === null ? 'none' : String(current);
        items.forEach((el) => {
          const on = el.dataset.key === String(current);
          el.classList.toggle('is-selected', on);
          el.setAttribute('aria-pressed', String(on));
        });
        marks.forEach((el) => el.classList.toggle('is-selected', el.dataset.key === String(current)));
        panels.forEach((el) => el.classList.toggle('is-selected', el.dataset.key === key));
        group.dataset.selected = current === null ? '' : String(current);
      }

      const pairs = group.getAttribute('data-step-select') === 'pairs';

      items.forEach((el) => {
        el.addEventListener('click', () => {
          current = el.dataset.key;
          group.dataset.phase = 'answers';
          render();
        });
      });

      if (group.hasAttribute('data-step-select') && slide) {
        slide.addEventListener('stepchange', (event) => {
          const step = event.detail.step;
          if (pairs) {
            const item = items[Math.ceil(step / 2) - 1];
            current = step > 0 && item ? item.dataset.key : null;
            group.dataset.phase = step > 0 && step % 2 === 0 ? 'answers' : 'message';
          } else {
            current = step > 0 ? String(step) : null;
          }
          render();
        });
      }

      render();
    });
  }

  // Accumulating discovery: clicking an item (or reaching reveal step N with data-step-found) marks keys 1..N as found.
  function bindFoundGroups() {
    document.querySelectorAll('[data-found]').forEach((group) => {
      const slide = group.closest('.slide');
      const items = Array.from(group.querySelectorAll('[data-found-item]'));
      const outs = Array.from(group.querySelectorAll('[data-found-out]'));
      const clicked = new Set();
      let stepFound = 0;
      let active = null;

      function render() {
        const isFound = (n) => n <= stepFound || clicked.has(n);
        items.forEach((el) => {
          const n = Number(el.dataset.key);
          el.classList.toggle('is-found', isFound(n));
          el.classList.toggle('is-active', active === n);
          el.setAttribute('aria-pressed', String(isFound(n)));
        });
        outs.forEach((el) => {
          const n = Number(el.dataset.key);
          el.classList.toggle('is-found', isFound(n));
          el.classList.toggle('is-active', active === n);
        });
        group.classList.toggle('has-all', items.every((el) => isFound(Number(el.dataset.key))));
      }

      items.forEach((el) => {
        el.addEventListener('click', () => {
          const n = Number(el.dataset.key);
          clicked.add(n);
          active = n;
          render();
        });
      });

      if (group.hasAttribute('data-step-found') && slide) {
        slide.addEventListener('stepchange', (event) => {
          stepFound = event.detail.step;
          active = stepFound > 0 ? stepFound : null;
          render();
        });
      }

      render();
    });
  }

  // Decision cards: choosing an option (or pressing the reveal button) shows the recommended answer and the explanation.
  function bindDecisions() {
    document.querySelectorAll('[data-decision]').forEach((root) => {
      const options = Array.from(root.querySelectorAll('.dec-option'));
      options.forEach((option) => {
        option.addEventListener('click', () => {
          options.forEach((item) => item.setAttribute('aria-pressed', 'false'));
          option.setAttribute('aria-pressed', 'true');
          root.classList.add('is-answered');
        });
      });
      const reveal = root.querySelector('[data-dec-reveal]');
      if (reveal) reveal.addEventListener('click', () => root.classList.add('is-answered'));
    });
  }

  // Final quiz: one question per reveal step, real correctness, local score only, reset available.
  function bindQuiz() {
    document.querySelectorAll('[data-quiz]').forEach((root) => {
      const questions = Array.from(root.querySelectorAll('.quiz-q'));
      const total = questions.length;
      let score = 0;

      function renderScore() {
        root.querySelectorAll('[data-quiz-score]').forEach((el) => { el.textContent = `Scor: ${score} / ${total}`; });
        root.querySelectorAll('[data-quiz-final]').forEach((el) => { el.textContent = `${score} / ${total}`; });
        const verdict = root.querySelector('[data-quiz-verdict]');
        if (verdict) {
          verdict.textContent = score >= total - 1
            ? 'Reflexele sunt la locul lor: oprește-te, verifică, cere ajutor.'
            : score >= 3
              ? 'Ești pe drumul bun. Reia regula care ți-a scăpat: verificarea prin alt canal.'
              : 'Nu contează scorul, ci obiceiul. Mai parcurge o dată regulile și încearcă din nou.';
        }
      }

      questions.forEach((question) => {
        const options = Array.from(question.querySelectorAll('.qopt'));
        options.forEach((option) => {
          option.addEventListener('click', () => {
            if (question.classList.contains('is-answered')) return;
            question.classList.add('is-answered');
            const correct = option.dataset.correct === 'true';
            if (correct) score += 1;
            options.forEach((item) => {
              item.disabled = true;
              if (item.dataset.correct === 'true') item.classList.add('is-correct');
            });
            if (!correct) option.classList.add('is-wrong');
            const verdict = question.querySelector('[data-quiz-result]');
            if (verdict) verdict.textContent = correct ? 'Corect.' : 'Nu chiar.';
            renderScore();
          });
        });
      });

      const reset = root.querySelector('[data-quiz-reset]');
      if (reset) {
        reset.addEventListener('click', () => {
          score = 0;
          questions.forEach((question) => {
            question.classList.remove('is-answered');
            question.querySelectorAll('.qopt').forEach((item) => {
              item.disabled = false;
              item.classList.remove('is-correct', 'is-wrong');
            });
          });
          renderScore();
          if (window.TheDigitalWorld.reveal) window.TheDigitalWorld.reveal.goTo(1);
        });
      }

      renderScore();
    });
  }

  // Anonymization toggle for the sensitive-data document (S15): button, or reveal step data-anon-step.
  function bindAnon() {
    document.querySelectorAll('[data-anon-root]').forEach((root) => {
      const slide = root.closest('.slide');
      const button = root.querySelector('[data-anon-toggle]');
      const atStep = Number(root.dataset.anonStep || 0);

      function set(on) {
        root.classList.toggle('is-anon', on);
        if (button) {
          button.setAttribute('aria-pressed', String(on));
          button.textContent = on ? 'Arată originalul' : 'Anonimizează';
        }
      }

      if (button) button.addEventListener('click', () => set(!root.classList.contains('is-anon')));
      if (atStep && slide) {
        slide.addEventListener('stepchange', (event) => set(event.detail.step >= atStep));
      }
    });
  }

  window.TheDigitalWorld = window.TheDigitalWorld || {};
  window.TheDigitalWorld.bindInteractions = bindInteractions;
})();
