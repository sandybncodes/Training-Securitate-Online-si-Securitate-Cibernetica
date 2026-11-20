(function () {
  const C = window.TheDigitalWorldContent;

  // S05 – two concepts, one responsibility
  C.add(C.slide({
    id: 'S05',
    ch: 2,
    theme: 'ink',
    layout: 'contrast',
    steps: 3,
    title: 'Două concepte. Aceeași responsabilitate.',
    subtitle: 'Siguranță online și securitate cibernetică se completează.',
    notes: [
      'Pas 1: stânga, „Omul”. Siguranță online = cum ne comportăm și ce decizii luăm.',
      'Pas 2: dreapta, „Sistemul”. Securitate cibernetică = cum sunt apărate dispozitivele, aplicațiile, rețelele și sistemele.',
      'Pas 3: ideea de legătură: protecția reală le include pe ambele. Exemplu: o persoană poate fi păcălită chiar dacă dispozitivul este protejat.',
      'Nu separa prea radical conceptele; ele se suprapun. Responsabilitatea nu poate fi lăsată doar tehnologiei.',
      'Întrebare pentru public: „Dacă telefonul tău are cel mai bun antivirus și tu dai codul SMS cuiva, ce s-a protejat?”',
      'Tranziție spre S06: „Ca să ne protejăm, să înțelegem ce caută de fapt cei care ne atacă.”'
    ],
    body: `
      <div class="contrast">
        <div class="c-panel on-ink rv" data-step="1">
          <span class="eyebrow">Omul</span>
          <h2 class="c-title">Siguranță online</h2>
          <p class="c-def">Protejarea oamenilor, comportamentelor, informațiilor și conturilor în mediul online.</p>
          <div class="c-keys">
            <span class="c-key">parole</span><span class="c-key">prudență</span><span class="c-key">verificare</span><span class="c-key">consimțământ</span>
          </div>
        </div>
        <div class="c-panel on-paper rv" data-step="2">
          <span class="eyebrow">Sistemul</span>
          <h2 class="c-title">Securitate cibernetică</h2>
          <p class="c-def">Protejarea dispozitivelor, aplicațiilor, rețelelor și sistemelor împotriva atacurilor.</p>
          <div class="c-keys">
            <span class="c-key">actualizări</span><span class="c-key">MFA</span><span class="c-key">criptare</span><span class="c-key">monitorizare</span>
          </div>
        </div>
      </div>
      <p class="bridge rv" data-step="3">Protecția reală le include pe ambele.</p>
    `
  }));

  // S06 – what attackers look for (radial, selectable)
  C.add(C.slide({
    id: 'S06',
    ch: 2,
    theme: 'paper',
    layout: 'radial',
    steps: 5,
    attrs: '',
    title: 'Ce caută un atacator?',
    notes: [
      'Pașii 1–5 aduc pe rând o țintă și o evidențiază: bani, date personale, acces la conturi, identitate, acces la sisteme. Poți și să atingi direct o țintă ca să o explici.',
      'Pas 0: întreabă publicul ce crede că vrea un atacator; nu presupune că toți au același scop.',
      'Obiectivul poate fi financiar, de acces sau de manipulare. Pune accent pe identitate și acces: ele deschid alte uși.',
      'Nu inventa statistici despre frecvența fiecărui scop.',
      'Tranziție spre S07: „Cum ajung ei la aceste ținte? De multe ori, prin decizia noastră.”'
    ],
    body: `
      <div class="split split--5-7" data-select data-step-select>
        <div class="col col--center">
          <h2 class="display-m">Ce caută<br />un atacator?</h2>
          <div class="sel-panels">
            <div data-sel-panel data-key="none"><p class="sel-hint">Nu toți atacatorii caută același lucru.</p></div>
            <div data-sel-panel data-key="1"><h3 class="sel-title">Bani</h3><p class="sel-text">Transferuri, plăți, carduri: cea mai directă țintă.</p></div>
            <div data-sel-panel data-key="2"><h3 class="sel-title">Date personale</h3><p class="sel-text">Nume, adrese, documente, fotografii. Pot fi folosite pentru alte atacuri.</p></div>
            <div data-sel-panel data-key="3"><h3 class="sel-title">Acces la conturi</h3><p class="sel-text">E-mail, rețele sociale, aplicații bancare. Un cont preluat deschide alte uși.</p></div>
            <div data-sel-panel data-key="4"><h3 class="sel-title">Identitate</h3><p class="sel-text">Cineva se dă drept tine sau drept o persoană de încredere.</p></div>
            <div data-sel-panel data-key="5"><h3 class="sel-title">Acces la sisteme</h3><p class="sel-text">Rețele, dispozitive și documente interne ale unei organizații.</p></div>
          </div>
        </div>
        <div class="radial" role="group" aria-label="Ce caută un atacator">
          <svg class="r-lines" viewBox="0 0 860 800" aria-hidden="true">
            <line class="r-line rv" data-sel-mark data-key="1" data-step="1" x1="430" y1="410" x2="430" y2="110" />
            <line class="r-line rv" data-sel-mark data-key="2" data-step="2" x1="430" y1="410" x2="715" y2="317" />
            <line class="r-line rv" data-sel-mark data-key="3" data-step="3" x1="430" y1="410" x2="606" y2="653" />
            <line class="r-line rv" data-sel-mark data-key="4" data-step="4" x1="430" y1="410" x2="254" y2="653" />
            <line class="r-line rv" data-sel-mark data-key="5" data-step="5" x1="430" y1="410" x2="145" y2="317" />
          </svg>
          <div class="r-core">Ținta<br />atacului</div>
          <button type="button" class="r-node rv" data-sel-item data-key="1" data-step="1" aria-pressed="false" style="left:430px;top:110px">Bani</button>
          <button type="button" class="r-node rv" data-sel-item data-key="2" data-step="2" aria-pressed="false" style="left:715px;top:317px">Date personale</button>
          <button type="button" class="r-node rv" data-sel-item data-key="3" data-step="3" aria-pressed="false" style="left:606px;top:653px">Acces la conturi</button>
          <button type="button" class="r-node rv" data-sel-item data-key="4" data-step="4" aria-pressed="false" style="left:254px;top:653px">Identitate</button>
          <button type="button" class="r-node rv" data-sel-item data-key="5" data-step="5" aria-pressed="false" style="left:145px;top:317px">Acces la sisteme</button>
        </div>
      </div>
    `
  }));

  // S07 – emotions change the message, the mechanism stays the same
  C.add(C.slide({
    id: 'S07',
    ch: 2,
    theme: 'ink',
    layout: 'tabs',
    steps: 5,
    tag: 'Simulare educațională · mesaje fictive',
    title: 'Uneori, cea mai vulnerabilă parte a sistemului este decizia noastră.',
    notes: [
      'Pas 0: întreabă „Ce emoție te face să acționezi fără să verifici?” Lasă 2–3 răspunsuri.',
      'Pașii 1–5: frică, urgență, câștig, autoritate, curiozitate. La fiecare pas mesajul se schimbă; mecanismul explicat dedesubt este emoția folosită. Poți și să atingi o emoție direct.',
      'Niciun mesaj singur nu dovedește o fraudă; combinațiile contează. Un ton oficial sau o recompensă nu sunt dovezi.',
      'Regula de aur: verifică prin alt canal, nu folosind datele din mesaj.',
      'Mesajele sunt fictive; nu conțin branduri sau sume reale.',
      'Tranziție spre S08: „Dacă emoția este cheia, atacatorul nu mai are nevoie să spargă nimic.”'
    ],
    body: `
      <h2 class="display-s">Uneori, cea mai vulnerabilă parte a sistemului<br />este decizia noastră.</h2>
      <div class="tabs-grid" data-select data-step-select>
        <div class="tab-list">
          <button type="button" class="tab" data-sel-item data-key="1" aria-pressed="false"><span class="tab-n">1</span>Frică</button>
          <button type="button" class="tab" data-sel-item data-key="2" aria-pressed="false"><span class="tab-n">2</span>Urgență</button>
          <button type="button" class="tab" data-sel-item data-key="3" aria-pressed="false"><span class="tab-n">3</span>Câștig</button>
          <button type="button" class="tab" data-sel-item data-key="4" aria-pressed="false"><span class="tab-n">4</span>Autoritate</button>
          <button type="button" class="tab" data-sel-item data-key="5" aria-pressed="false"><span class="tab-n">5</span>Curiozitate</button>
        </div>
        <div class="sel-panels">
          <div data-sel-panel data-key="none"><p class="sel-hint">Alege o emoție. Mesajul se schimbă, mecanismul rămâne același.</p></div>
          <div data-sel-panel data-key="1">
            <div class="msg-card on-paper"><span class="msg-src">Mesaj fictiv · frică</span>„Contul tău a fost compromis. Acționează acum!”</div>
            <p class="mech">Frica scurtează gândirea: te face să acționezi, nu să verifici.</p>
          </div>
          <div data-sel-panel data-key="2">
            <div class="msg-card on-paper"><span class="msg-src">Mesaj fictiv · urgență</span>„Ai 10 minute să confirmi datele. Apoi contul se blochează.”</div>
            <p class="mech">Timpul limitat nu lasă loc pentru verificare.</p>
          </div>
          <div data-sel-panel data-key="3">
            <div class="msg-card on-paper"><span class="msg-src">Mesaj fictiv · câștig</span>„Felicitări! Ai câștigat un premiu. Revendică-l acum.”</div>
            <p class="mech">Speranța unei recompense ne face să trecem peste semnele de alarmă.</p>
          </div>
          <div data-sel-panel data-key="4">
            <div class="msg-card on-paper"><span class="msg-src">Mesaj fictiv · autoritate</span>„Suntem de la departamentul de securitate. Urmează instrucțiunile noastre.”</div>
            <p class="mech">Un ton oficial pare autentic, dar nu este o dovadă.</p>
          </div>
          <div data-sel-panel data-key="5">
            <div class="msg-card on-paper"><span class="msg-src">Mesaj fictiv · curiozitate</span>„Ai fost menționat într-o fotografie. Vezi cine a postat-o.”</div>
            <p class="mech">Curiozitatea ne împinge să deschidem exact ce nu ar trebui.</p>
          </div>
        </div>
      </div>
    `
  }));

  // S08 – social engineering chain
  C.add(C.slide({
    id: 'S08',
    ch: 2,
    theme: 'paper',
    layout: 'sequence',
    steps: 5,
    title: 'Un atacator nu trebuie să spargă sistemul.',
    notes: [
      'Pașii 1–5 construiesc lanțul: atacator → mesaj credibil → emoție/presiune → acțiune grăbită → bani, date sau acces. Sub lanț apare câte o frază pentru fiecare verigă.',
      'Pas 5: definiția ingineriei sociale: manipularea unei persoane pentru a obține informații, bani sau acces.',
      'Accent: nu este vorba despre o persoană „proastă”, ci despre vulnerabilitatea umană pe care o avem toți.',
      'Verigile pe care le putem rupe sunt cele din mijloc: emoția și acțiunea grăbită. Aici intervine regula „oprește-te, verifică”.',
      'Tranziție spre S09: „Același lanț funcționează prin e-mail, SMS și apel telefonic.”'
    ],
    body: `
      <h2 class="display-s">Un atacator nu trebuie să spargă sistemul.<br />Uneori îl convinge pe utilizator să deschidă ușa.</h2>
      <div class="seq-body">
        <div class="chain">
          <div class="chain-node rv" data-step="1"><span class="chain-n">01</span><span class="chain-label">Atacator</span></div>
          <span class="chain-arrow rv" data-step="2" aria-hidden="true"></span>
          <div class="chain-node rv" data-step="2"><span class="chain-n">02</span><span class="chain-label">Mesaj credibil</span></div>
          <span class="chain-arrow rv" data-step="3" aria-hidden="true"></span>
          <div class="chain-node rv" data-step="3"><span class="chain-n">03</span><span class="chain-label">Emoție și presiune</span></div>
          <span class="chain-arrow rv" data-step="4" aria-hidden="true"></span>
          <div class="chain-node rv" data-step="4"><span class="chain-n">04</span><span class="chain-label">Acțiune grăbită</span></div>
          <span class="chain-arrow rv" data-step="5" aria-hidden="true"></span>
          <div class="chain-node is-end rv" data-step="5"><span class="chain-n">05</span><span class="chain-label">Bani, date sau acces</span></div>
        </div>
        <div class="stack-cell" aria-live="polite">
          <p class="chain-caption rv" data-step="1" data-step-until="2">Nu forțează nicio parolă. Observă oameni.</p>
          <p class="chain-caption rv" data-step="2" data-step-until="3">Arată oficial, cunoscut sau util.</p>
          <p class="chain-caption rv" data-step="3" data-step-until="4">Frică, grabă, curiozitate sau speranță.</p>
          <p class="chain-caption rv" data-step="4" data-step-until="5">Un clic, un cod, un transfer.</p>
          <p class="chain-caption is-def rv" data-step="5">Ingineria socială: manipularea unei persoane pentru a obține informații, bani sau acces.</p>
        </div>
      </div>
    `
  }));
})();
