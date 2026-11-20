(function () {
  const C = window.TheDigitalWorldContent;

  // S09 – same trick, three channels
  C.add(C.slide({
    id: 'S09',
    ch: 3,
    theme: 'ink',
    layout: 'trio',
    steps: 4,
    tag: 'Simulare educațională · bancă și adrese fictive',
    title: 'Același truc. Trei canale.',
    notes: [
      'Pasul 1: phishing (e-mail). Pasul 2: smishing (SMS). Pasul 3: vishing (apel telefonic). Fiecare mock-up este fictiv; nu folosim branduri reale.',
      'Cere publicului să spună ce au în comun cele trei: urgență + încredere + lipsa verificării.',
      'Pas 4: formula comună. Canalul se schimbă, mecanismul nu.',
      'Subliniază că numărul afișat la un apel și numele expeditorului pot fi falsificate; nu sunt dovezi.',
      'Tranziție spre S10: „Să disecăm un mesaj, cuvânt cu cuvânt.”'
    ],
    body: `
      <h2 class="display-m">Același truc. Trei canale.</h2>
      <div class="trio">
        <div class="trio-item rv" data-step="1">
          <div class="trio-cap"><strong>Phishing</strong><span>E-mail</span></div>
          <div class="mock on-paper">
            <p class="mk-from">De la: Serviciu clienți · Banca Exemplu</p>
            <p class="mk-subject">Cont suspendat: acțiune necesară</p>
            <p>Pentru a evita blocarea contului, confirmă datele în 24 de ore.</p>
            <span class="mk-btn">Confirmă datele</span>
          </div>
        </div>
        <div class="trio-item rv" data-step="2">
          <div class="trio-cap"><strong>Smishing</strong><span>SMS</span></div>
          <div class="mock on-paper">
            <p class="mk-meta">SMS · număr necunoscut</p>
            <p class="mk-bubble">Coletul tău nu poate fi livrat. Actualizează adresa:<span class="mk-link">https://colet.example</span></p>
          </div>
        </div>
        <div class="trio-item rv" data-step="3">
          <div class="trio-cap"><strong>Vishing</strong><span>Apel</span></div>
          <div class="mock mock--call">
            <p class="call-label">Apel de intrare</p>
            <p class="call-name">Banca Exemplu</p>
            <p class="call-label">număr afișat</p>
            <p class="call-quote">„Sunt de la securitate. Spuneți-mi codul primit prin SMS.”</p>
            <div class="call-btns">
              <span class="call-btn call-btn--no"><i></i>Respinge</span>
              <span class="call-btn call-btn--yes"><i></i>Răspunde</span>
            </div>
          </div>
        </div>
      </div>
      <p class="keyline rv" data-step="4">Aceeași formulă: încredere, presiune și o acțiune imediată.</p>
    `
  }));

  // S10 – message anatomy (pilot, unchanged)
  C.add({
    id: 'S10',
    chapter: '3. The Digital Trap',
    owner: 'Presenter 1',
    time: '15 min',
    title: 'Anatomia unui mesaj fals de la bancă',
    notes: [
      'Pas 0 (ecranul inițial): nu arăta explicațiile. Cere publicului să ridice mâna: „Ai apăsa pe acest link? Ce te-ar face să te oprești?” Poți apăsa chiar tu fragmentele indicate de public.',
      'Pas 1 → Frică: „Am detectat o tranzacție suspectă” te sperie ca să nu te mai gândești.',
      'Pas 2 → Urgență: „în 10 minute” reduce timpul de reflecție.',
      'Pas 3 → Cerere de date: solicitarea datelor sensibile este un semn major de alarmă.',
      'Pas 4 → Link: nu poate fi verificat din mesaj. Intră separat în aplicația oficială a băncii.',
      'Răspuns așteptat de la public: „Nu apăs, intru direct în aplicație sau sun la numărul oficial.” Banca și adresa sunt fictive; simularea este educațională.',
      'Tranziție spre S11: „Dacă nu apeși, ce faci în schimb? Și ce alte capcane mai există?”'
    ],
    html: `
      <section class="slide slide-v2 theme-paper layout-evidence" data-slide="S10" data-steps="4" data-module="phishing">
        <div class="v2-frame">
          <header class="v2-header">
            <span>Capitolul 3 · Capcana digitală</span>
            <span class="sim-tag">Simulare educațională · bancă și adresă fictive</span>
          </header>
          <div class="evidence-grid">
            <div class="evidence-copy">
              <h2 class="display-m">Ai apăsa<br />pe acest link?</h2>
              <p class="body-l prompt">Ridică mâna. Ce te-ar face să te oprești?</p>
              <div class="flag-list" aria-live="polite">
                <article class="flag-row" data-flag="1">
                  <span class="flag-num" aria-hidden="true">1</span>
                  <div>
                    <h3 class="flag-label">Frică</h3>
                    <div class="flag-text-wrap"><p class="flag-text">„Tranzacție suspectă” te sperie ca să nu te mai gândești.</p></div>
                  </div>
                </article>
                <article class="flag-row" data-flag="2">
                  <span class="flag-num" aria-hidden="true">2</span>
                  <div>
                    <h3 class="flag-label">Urgență</h3>
                    <div class="flag-text-wrap"><p class="flag-text">„În 10 minute” reduce timpul de reflecție.</p></div>
                  </div>
                </article>
                <article class="flag-row" data-flag="3">
                  <span class="flag-num" aria-hidden="true">3</span>
                  <div>
                    <h3 class="flag-label">Cerere de date</h3>
                    <div class="flag-text-wrap"><p class="flag-text">Solicitarea datelor sensibile este un semn major de alarmă.</p></div>
                  </div>
                </article>
                <article class="flag-row" data-flag="4">
                  <span class="flag-num" aria-hidden="true">4</span>
                  <div>
                    <h3 class="flag-label">Link neverificat</h3>
                    <div class="flag-text-wrap"><p class="flag-text">Nu îl poți verifica din mesaj. Intră separat, din aplicația oficială.</p></div>
                  </div>
                </article>
              </div>
            </div>
            <div class="evidence-device">
              <div class="phone phone--messages">
                <div class="phone-screen">
                  <div class="msg-bar">
                    <div class="msg-avatar" aria-hidden="true">B</div>
                    <div class="msg-name">Banca Exemplu</div>
                  </div>
                  <div class="msg-thread">
                    <p class="msg-meta">SMS · azi, 02:14</p>
                    <p class="bubble">
                      <button type="button" class="hotspot" data-flag="1" data-n="1" aria-pressed="false">Am detectat o tranzacție suspectă.</button>
                      <button type="button" class="hotspot" data-flag="2" data-n="2" aria-pressed="false">Contul va fi blocat în 10 minute.</button>
                      <button type="button" class="hotspot" data-flag="3" data-n="3" aria-pressed="false">Confirmă-ți datele</button>
                      prin link:
                      <button type="button" class="hotspot" data-flag="4" data-n="4" aria-pressed="false">https://verificare.example</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  });

  // S11 – other traps, collage of fictional artefacts
  C.add(C.slide({
    id: 'S11',
    ch: 3,
    theme: 'ink',
    layout: 'collage',
    steps: 6,
    tag: 'Simulare educațională · exemple fictive',
    title: 'Alte capcane digitale',
    notes: [
      'Pașii 1–5 aduc pe rând: site-uri instituționale false, romance scam, scamuri de investiții, parcel scams și impersonarea unui cunoscut sau a unei autorități. Toate exemplele sunt fictive; nu cita cazuri reale.',
      'Pentru fiecare, întreabă publicul: „Ce semn de alarmă ai observa?”',
      'Pas 6: un logo corect, un număr afișat sau un mesaj fără greșeli nu garantează autenticitatea.',
      'Tonul: fără panică. Scopul este să recunoaștem tiparul, nu să ne temem de tot.',
      'Tranziție spre S12: „Nu sunt povești de departe. Hai să vedem un avertisment oficial din Moldova.”'
    ],
    body: `
      <div class="collage">
        <div class="col span-5">
          <h2 class="display-s">Aceleași trucuri,<br />alte costume.</h2>
          <p class="keyline rv" data-step="6">Un logo corect, un număr afișat sau un mesaj fără greșeli nu garantează autenticitatea.</p>
        </div>
        <div class="tile span-7 rv" data-step="1">
          <div class="tile-mock on-paper">
            <span class="mk-url">institutie-oficiala.example</span>
            <p class="mk-site-h">Portal oficial · Servicii pentru cetățeni</p>
            <span class="mk-btn">Autentificare</span>
          </div>
          <p class="tile-cap">Site fals: arată oficial, adresa nu este.</p>
        </div>
        <div class="tile span-3 rv" data-step="2">
          <div class="tile-mock on-paper mk-chat">
            <p class="mk-bubble">Nu am mai vorbit cu cineva ca tine.</p>
            <p class="mk-bubble mk-bubble--me">Nici eu.</p>
            <p class="mk-bubble">Mă poți ajuta cu un transfer?</p>
          </div>
          <p class="tile-cap">Romance scam: întâi încredere, apoi o cerere de bani sau informații.</p>
        </div>
        <div class="tile span-3 rv" data-step="3">
          <div class="tile-mock on-paper">
            <p class="mk-banner">Randament garantat.<small>Fără risc. Doar azi.</small></p>
          </div>
          <p class="tile-cap">Investiții: promisiunile prea bune sunt semnul de alarmă.</p>
        </div>
        <div class="tile span-3 rv" data-step="4">
          <div class="tile-mock on-paper">
            <p class="mk-site-h">Livrare eșuată</p>
            <p>Actualizează datele coletului.</p>
            <span class="mk-link">colet-livrare.example</span>
          </div>
          <p class="tile-cap">Parcel scam: un colet pe care nu l-ai comandat.</p>
        </div>
        <div class="tile span-3 rv" data-step="5">
          <div class="tile-mock on-paper mk-chat">
            <p class="mk-bubble">Mamă, mi-am schimbat numărul. Poți face un transfer?</p>
          </div>
          <p class="tile-cap">Impersonare: un cunoscut sau o autoritate, dar de pe alt număr.</p>
        </div>
      </div>
    `
  }));

  // S12 – verified official warning (Poșta Moldovei)
  C.add(C.slide({
    id: 'S12',
    ch: 3,
    theme: 'paper',
    layout: 'evidencecard',
    steps: 2,
    title: 'Nu se întâmplă doar în alte țări.',
    notes: [
      'Slide-ul prezintă UN avertisment oficial, verificat pe pagina instituției (Poșta Moldovei, „Atenție! Escroci!”, data afișată pe pagină: 26 octombrie 2026). Descrierea este o parafrazare, nu o citare. Redeschide pagina înainte de prezentare; dacă nu mai este disponibilă, mută slide-ul în anexă.',
      'Pas 0: citește cardul. Spune clar că sursa este o instituție din Republica Moldova și că exemplul este real și public.',
      'Pas 1: regula oficială: Poșta Moldovei nu cere coduri SMS, date personale sau bancare și nici transferuri de bani prin apel, SMS, e-mail sau rețele sociale.',
      'Pas 2: semnele din avertisment (te grăbesc, te sperie, îți cer să nu spui nimănui) și unde se poate raporta: 112 sau cybercrime.mai.gov.md.',
      'Alte surse de verificat înainte de prezentare, dacă vrei exemple suplimentare: Poliția Republicii Moldova, Agenția de Guvernare Electronică, STISC. Nu adăuga nimic nevalidat; nu inventa statistici, date sau victime.',
      'Tranziție spre S13: „Dacă mesajul vine ca să te grăbească, regula este una singură.”'
    ],
    body: `
      <h2 class="display-m">Nu se întâmplă doar în alte țări.</h2>
      <article class="ev-card" aria-label="Avertisment oficial Poșta Moldovei">
        <div>
          <p class="ev-src">Sursă oficială · Î.S. „Poșta Moldovei”</p>
          <h3 class="ev-title">Atenție! Escroci!</h3>
          <p class="ev-date">Avertisment din 26 octombrie 2026</p>
          <p class="ev-desc">Poșta Moldovei atenționează asupra intensificării escrocheriilor prin apeluri telefonice, rețele sociale și pagini web. Escrocii se dau drept angajați ai Poștei, anunță un colet de primit sau taxe suplimentare și cer coduri SMS, date personale ori bani.</p>
        </div>
        <div class="ev-side">
          <p class="ev-lesson rv" data-step="1">Poșta Moldovei nu cere coduri primite prin SMS, date personale sau bancare, nici bani prin apel, SMS, e-mail sau rețele sociale.</p>
          <p class="ev-foot rv" data-step="2">Te grăbesc, te sperie sau îți cer să nu spui nimănui? Cel mai probabil este o escrocherie. Raportează: 112 sau cybercrime.mai.gov.md</p>
          <p class="ev-foot">Sursă: posta.md/ro/news/atentie-escroci-hg4rzjvdfp</p>
        </div>
      </article>
    `
  }));

  // S13 – the safety rule
  C.add(C.slide({
    id: 'S13',
    ch: 3,
    theme: 'ink',
    layout: 'sequence',
    steps: 5,
    title: 'Nu verifica mesajul folosind datele din mesaj.',
    notes: [
      'Slide-ul este o regulă de siguranță, nu o listă de date. Rostește regula, apoi parcurge pașii unul câte unul.',
      'Pașii 1–5: oprește conversația; nu divulga coduri și nu apăsa linkuri; deschide separat aplicația sau site-ul oficial; sună la un număr oficial cunoscut; raportează dacă este cazul.',
      'Pas 5 adaugă ideea-cheie: tu alegi canalul de verificare, nu mesajul.',
      'Exercițiu rapid: ia mesajul de la S10 și întreabă publicul ce ar face la fiecare pas.',
      'Nu folosi aceste informații pentru a împinge publicul spre acțiuni reale necontrolate.',
      'Tranziție spre S14: „Acum, să vedem cum se schimbă lumea când intră inteligența artificială.”'
    ],
    body: `
      <h2 class="display-m">Nu verifica mesajul<br />folosind datele din mesaj.</h2>
      <div class="seq-body">
        <div class="path">
          <div class="path-step rv" data-step="1"><div class="path-dot">1</div><p class="path-text">Oprește conversația</p></div>
          <div class="path-step rv" data-step="2"><div class="path-dot">2</div><p class="path-text">Nu divulga coduri și nu apăsa linkuri</p></div>
          <div class="path-step rv" data-step="3"><div class="path-dot">3</div><p class="path-text">Deschide separat aplicația sau site-ul oficial</p></div>
          <div class="path-step rv" data-step="4"><div class="path-dot">4</div><p class="path-text">Sună la un număr oficial cunoscut</p></div>
          <div class="path-step rv" data-step="5"><div class="path-dot">5</div><p class="path-text">Raportează, dacă este cazul</p></div>
        </div>
        <p class="keyline rv" data-step="5">Tu alegi canalul de verificare, nu mesajul.</p>
      </div>
    `
  }));
})();
