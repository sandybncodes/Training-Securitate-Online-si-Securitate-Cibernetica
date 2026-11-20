(function () {
  const C = window.TheDigitalWorldContent;

  // S01 – hero (pilot, unchanged structure)
  C.add({
    id: 'S01',
    chapter: '1. The Hook',
    owner: 'Presenter 1',
    time: '8 min',
    title: 'LUMEA DIGITALĂ',
    subtitle: 'Cât de sigur ești că nu poți fi păcălit?',
    kicker: 'Siguranță online • Securitate cibernetică • Inteligență artificială',
    notes: [
      'Rămâi pe slide 20–30 de secunde fără să vorbești. Animația se joacă singură: titlul, apoi a doua linie, apoi notificarea pe telefon.',
      'Nu începe cu biografie sau definiții. Întreabă: „Câți dintre voi au primit azi o notificare care a cerut ceva urgent?”',
      'Mesajul de pe ecran este fictiv („Banca Exemplu”). Îl vei dezmembra pe slide-ul S10.',
      'Fără pași de dezvăluire pe acest slide. Tranziție: „Hai să vedem de ce funcționează astfel de mesaje și pe oameni inteligenți.”'
    ],
    html: `
      <section class="slide slide-v2 theme-ink layout-hero" data-slide="S01">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="hero-phone phone phone--lock" role="img" aria-label="Un telefon luminează camera întunecată; pe ecran apare o notificare fictivă de la „Banca Exemplu”: contul tău va fi blocat în 10 minute.">
          <div class="phone-screen">
            <div class="lock-time">02:14</div>
            <div class="notification">
              <div class="app-icon">B</div>
              <div>
                <div class="n-top"><span>Banca Exemplu</span><span>acum</span></div>
                <p class="n-body">Contul tău va fi blocat în 10 minute. Confirmă acum.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="v2-frame hero-frame">
          <header class="v2-header">
            <span>Lumea digitală</span>
          </header>
          <div class="hero-copy">
            <h1 class="display-xl">
              <span class="line line-1">Cât de sigur ești?</span>
              <span class="line line-2">…că nu poți fi păcălit?</span>
            </h1>
          </div>
          <p class="hero-foot">Siguranță online • Securitate cibernetică • Inteligență artificială</p>
        </div>
      </section>
    `
  });

  // S01A – video, played inside the deck right after the hero
  C.add(C.slide({
    id: 'S01A',
    ch: 1,
    theme: 'ink',
    layout: 'video',
    title: 'Escrocherie online cu investiții',
    subtitle: 'Videoclip redat direct în prezentare.',
    notes: [
      'Videoclipul pornește automat când ajungi pe slide; dacă browserul blochează pornirea automată, apasă Play.',
      'Dacă ai dat click pe video, Spațiu pornește/oprește videoclipul; săgețile rămân pentru navigarea între slide-uri.',
      'După vizionare, lasă 10 secunde de liniște, apoi continuă.'
    ],
    body: `
      <div class="video-wrap">
        <video class="slide-video" src="Escrocherie_Online_Investitii.mp4" controls autoplay playsinline preload="auto" aria-label="Videoclip: escrocherie online cu investiții"></video>
      </div>
    `
  }));

  // S02 – audience vote, answer only after the options
  C.add(C.slide({
    id: 'S02',
    ch: 1,
    theme: 'ink',
    layout: 'challenge',
    steps: 4,
    title: 'Crezi că ție nu ți s-ar putea întâmpla?',
    subtitle: 'Încrederea în propria atenție nu este o metodă de protecție.',
    notes: [
      'Pas 0: pune întrebarea și nu spune nimic mai mult. Cere publicului să se gândească ce variantă ar alege.',
      'Pașii 1–3: apar pe rând cele trei variante. După fiecare, cere ridicarea mâinii. Nu afișa și nu inventa procente; poți spune doar „multe mâini” sau „câteva”.',
      'Pas 4: abia acum apare concluzia: încrederea în propria atenție nu este o metodă de protecție. Atacul începe cu o emoție, nu cu un expert.',
      'Răspuns așteptat: oricare dintre variante este legitimă; scopul este ca publicul să observe cum se simte. Nimeni nu este judecat.',
      'Tranziție spre S03: „Hai să vedem cum arată asta când se întâmplă cuiva.”'
    ],
    body: `
      <div class="split">
        <div class="col col--center">
          <h2 class="display-l">Crezi că ție<br />nu ți s-ar putea<br />întâmpla?</h2>
          <p class="body-m">Ridică mâna pentru varianta ta.</p>
        </div>
        <div class="rows">
          <div class="row-item rv" data-step="1"><span class="row-key">A</span><span>Sunt sigur că aș observa</span></div>
          <div class="row-item rv" data-step="2"><span class="row-key">B</span><span>Nu sunt sigur</span></div>
          <div class="row-item rv" data-step="3"><span class="row-key">C</span><span>Oricine poate fi păcălit</span></div>
        </div>
      </div>
      <p class="verdict-line rv" data-step="4">Încrederea în propria atenție nu este o metodă de protecție.</p>
    `
  }));

  // S03 – external video moment, three non-blaming questions
  C.add(C.slide({
    id: 'S03',
    ch: 1,
    theme: 'ink',
    layout: 'questions',
    steps: 3,
    title: 'Privește atent. Unde începe manipularea?',
    subtitle: 'Videoclip extern, prezentat separat de aplicație.',
    notes: [
      'Slide-ul nu conține player, miniatură sau fișier video. Videoclipul se rulează separat, pe alt ecran sau în alt program, înainte de a continua.',
      'Pas 0: după vizionare, lasă 10 secunde de liniște. Nu începe cu un monolog.',
      'Pașii 1–3: o întrebare pe rând. Cere răspunsuri scurte și fără vinovăție: „Ce emoție au exploatat escrocii?”, „Când ar fi putut opri situația?”, „Tu ai fi recunoscut manipularea?”',
      'Mesaj-cheie: presiunea și emoțiile afectează și oamenii instruiți; nu căutăm „cine a greșit”.',
      'Notă editorială: întrebarea originală „Unde a greșit această persoană?” a fost reformulată ca să nu pună vina pe victimă.',
      'Tranziție spre S04: „Ce vom face în următoarele minute nu este despre a ataca, ci despre a nu fi victime.”'
    ],
    body: `
      <div class="split">
        <div class="col col--center">
          <h2 class="display-l">Privește atent.<br />Unde începe<br />manipularea?</h2>
          <p><span class="pill">Videoclip extern · prezentat separat</span></p>
        </div>
        <div class="q-list">
          <div class="q-item rv" data-step="1"><span class="q-num">1</span><span class="q-text">Ce emoție au exploatat escrocii?</span></div>
          <div class="q-item rv" data-step="2"><span class="q-num">2</span><span class="q-text">Când ar fi putut opri situația?</span></div>
          <div class="q-item rv" data-step="3"><span class="q-num">3</span><span class="q-text">Tu ai fi recunoscut manipularea?</span></div>
        </div>
      </div>
    `
  }));

  // S04 – session promise
  C.add(C.slide({
    id: 'S04',
    ch: 1,
    theme: 'paper',
    layout: 'statement',
    steps: 1,
    title: 'Promisiunea sesiunii',
    subtitle: 'Uneori, un atac începe cu o emoție și o decizie luată în grabă.',
    notes: [
      'Pas 0: lasă fraza să stea o clipă. Ritm lent, fără explicații.',
      'Pas 1: apare fraza de sprijin: un atac începe adesea cu o emoție și o decizie luată în grabă.',
      'Cadrul moral: scopul sesiunii este educațional, nu criminal. Nu învățăm să atacăm; învățăm să ne protejăm pe noi și pe copiii de care răspundem.',
      'Acțiunea sigură pe care o vom exersa: oprire, verificare, ajutor.',
      'Tranziție spre S05: „Haideți să punem de acord vocabularul: două concepte care se confundă des.”'
    ],
    body: `
      <div class="statement-wrap">
        <h2 class="statement">Nu învățăm să devenim hackeri.<br />Învățăm să nu devenim <span class="mark">victime</span>.</h2>
        <p class="statement-sub rv" data-step="1">Uneori, un atac începe cu o emoție și o decizie luată în grabă.</p>
      </div>
    `
  }));
})();
