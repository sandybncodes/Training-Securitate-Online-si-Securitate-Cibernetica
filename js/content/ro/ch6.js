(function () {
  const C = window.TheDigitalWorldContent;

  // S28 – children in a connected world
  C.add(C.slide({
    id: 'S28',
    ch: 6,
    theme: 'warm',
    layout: 'split',
    steps: 6,
    title: 'Copiii cresc într-o lume conectată.',
    notes: [
      'Pas 0: spune doar titlul: „Copiii cresc într-o lume conectată. Cine îi învață să se protejeze?” Nu răspunde; lasă întrebarea să atârne.',
      'Pașii 1–6: apar, pe rând, riscurile: cyberbullying, străini online, conținut nepotrivit, chat-uri din jocuri, fotografii personale, AI (dezinformare și deepfake). Nu detalia fiecare; este o hartă, nu o prelegere.',
      'Echilibru: tehnologia aduce și mari beneficii (învățare, creativitate, comunicare). Riscurile apar când lipsesc ghidarea și regulile.',
      'Nu folosi statistici dacă nu le ai verificate; nu inventa procente.',
      'Imaginea este o ilustrație stilizată, fără chipuri; nu sunt copii reali.',
      'Tranziție spre S29: „Să vedem cum o fotografie obișnuită devine un risc.”'
    ],
    body: `
      <h2 class="display-s">Copiii cresc într-o lume conectată.<br /><span class="accent">Cine îi învață să se protejeze?</span></h2>
      <div class="split split--5-7">
        <div class="col">
          <p class="body-m">Tehnologia aduce și beneficii mari. Riscurile apar când lipsesc ghidarea și regulile.</p>
          <div class="risk-tags">
            <span class="risk-tag rv" data-step="1">Cyberbullying</span>
            <span class="risk-tag rv" data-step="2">Străini online</span>
            <span class="risk-tag rv" data-step="3">Conținut nepotrivit</span>
            <span class="risk-tag rv" data-step="4">Chat-uri din jocuri</span>
            <span class="risk-tag rv" data-step="5">Fotografii personale</span>
            <span class="risk-tag rv" data-step="6">AI: dezinformare și deepfake</span>
          </div>
        </div>
        <div class="col col--end">
          <img class="scene" src="assets/images/school-scene.svg" alt="Ilustrație stilizată, fără chipuri: o profesoară lângă tablă și patru elevi la bănci, unul cu o tabletă." />
          <p class="scene-note">Ilustrație fictivă</p>
        </div>
      </div>
    `
  }));

  // S29 – what a school photo can reveal
  C.add(C.slide({
    id: 'S29',
    ch: 6,
    theme: 'ink',
    layout: 'photosplit',
    steps: 5,
    tag: 'Ilustrație fictivă · fără copii reali',
    title: 'O fotografie publicată azi poate rămâne online mult timp.',
    notes: [
      'Imaginea este o ilustrație fictivă, fără chipuri reale. Nu proiecta niciodată o fotografie reală cu elevi.',
      'Pas 0: întreabă „Ce informații vedeți în această fotografie?” Lasă publicul să găsească singur.',
      'Pașii 1–4 apar markerii: 1 data și ora, 2 locația, 3 numele școlii, 4 chipurile. Mesaj: o fotografie obișnuită spune mai mult decât pare.',
      'Pas 5: lista de verificare înainte de publicare: consimțământ, bază legală, politica școlii, fără nume și locații.',
      'Nu spune că „orice fotografie cu copii este interzisă”. Spune că publicarea trebuie să respecte consimțământul, baza legală și politica instituției. Pentru detalii legale, urmează legislația aplicabilă și consilierea instituției.',
      'Tranziție spre S30: „Ce faci tu, ca profesor, când un copil îți spune ceva îngrijorător?”'
    ],
    body: `
      <h2 class="display-s">O fotografie publicată azi<br />poate rămâne online mult timp.</h2>
      <div class="split split--7-5">
        <div class="col">
          <div class="photo-frame">
            <img src="assets/images/school-photo.svg" alt="Fotografie fictivă: elevi în fața unei școli, cu pancartă, indicator de stradă și marcaj cu data și ora." />
            <span class="marker rv" data-step="1" style="left:81%;top:82%">1</span>
            <span class="marker rv" data-step="2" style="left:86%;top:42%">2</span>
            <span class="marker rv" data-step="3" style="left:40%;top:27%">3</span>
            <span class="marker rv" data-step="4" style="left:48%;top:63%">4</span>
          </div>
          <p class="scene-note">Ilustrație fictivă</p>
        </div>
        <div class="stack-cell">
          <div class="rv" data-step-until="5">
            <div class="legend-item rv" data-step="1"><span class="legend-n">1</span><span>Data și ora</span></div>
            <div class="legend-item rv" data-step="2"><span class="legend-n">2</span><span>Locația</span></div>
            <div class="legend-item rv" data-step="3"><span class="legend-n">3</span><span>Numele școlii</span></div>
            <div class="legend-item rv" data-step="4"><span class="legend-n">4</span><span>Chipurile</span></div>
          </div>
          <div class="rv" data-step="5">
            <h3 class="sel-title">Înainte să publici:</h3>
            <ul class="check-list">
              <li>Consimțământ</li>
              <li>Bază legală</li>
              <li>Politica școlii</li>
              <li>Fără nume și locații</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }));

  // S30 – teacher scenario
  C.add(C.slide({
    id: 'S30',
    ch: 6,
    theme: 'warm',
    layout: 'qa',
    steps: 4,
    title: 'Tu ești profesorul',
    notes: [
      'Citește scenariul rar. Întreabă publicul ce ar spune ei înainte de a apăsa pe pași.',
      'Pașii 1–4: ce spui; ce eviți; pe cine informezi; cum îl susții.',
      '1. Ce spui: „Mulțumesc că mi-ai spus. Ai făcut bine. Nu ești în pericol cu mine.” Copilul trebuie să audă că nu a greșit.',
      '2. Ce eviți: să-l certi, să-l faci vinovat sau să-i interzici jocul fără explicații; atunci nu va mai spune.',
      '3. Pe cine informezi: urmează procedura instituției; conducerea și părinții sau tutorii; la nevoie, autoritățile competente. De verificat înainte de prezentare: procedura exactă din instituția ta și serviciile naționale pentru copii (inclusiv linia de ajutor).',
      '4. Cum îl susții: păstrează calmul, nu redistribui conținutul, rămâi disponibil, implică psihologul școlar dacă există.',
      'Aceasta nu este consiliere juridică sau psihologică; este un punct de pornire. Pentru situații reale, urmează procedura instituției și legislația în vigoare.',
      'Tranziție spre S31: „Să vedem ce rămâne după această oră.” (Capitolul 7, provocarea finală.)'
    ],
    body: `
      <h2 class="display-m">Tu ești profesorul</h2>
      <div class="split split--5-7">
        <div class="col">
          <p class="scenario">Un elev din clasa a III-a îți spune că un străin, pe un joc online, i-a cerut o fotografie și i-a zis să păstreze secretul.</p>
          <p class="scene-note">Scenariu fictiv · urmează procedura instituției</p>
        </div>
        <div class="col">
          <div class="qa rv" data-step="1"><p class="qa-q">Ce spui?</p><p class="qa-a">„Mulțumesc că mi-ai spus. Ai făcut bine.”</p></div>
          <div class="qa rv" data-step="2"><p class="qa-q">Ce eviți?</p><p class="qa-a">Să-l certi sau să-l faci vinovat.</p></div>
          <div class="qa rv" data-step="3"><p class="qa-q">Pe cine informezi?</p><p class="qa-a">Conducerea și părinții, conform procedurii școlii.</p></div>
          <div class="qa rv" data-step="4"><p class="qa-q">Cum îl susții?</p><p class="qa-a">Rămâi calm, nu redistribui conținutul, rămâi disponibil.</p></div>
        </div>
      </div>
    `
  }));
})();
