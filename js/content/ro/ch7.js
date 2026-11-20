(function () {
  const T = window.TheDigitalWorldContent;
  const Q = (n, prompt, options, why) => `
    <div class="quiz-q rv" data-step="${n}" data-step-until="${n + 1}">
      <p class="quiz-count">Întrebarea ${n} din 5</p>
      <p class="quiz-prompt">${prompt}</p>
      ${options.map((o, i) => `<button type="button" class="qopt" data-correct="${o.ok ? 'true' : 'false'}"><span class="poll-key">${'ABC'[i]}</span><span>${o.t}</span><span class="qopt-tag">${o.ok ? 'Răspuns corect' : 'Nu chiar'}</span></button>`).join('')}
      <p class="quiz-feedback"><strong data-quiz-result></strong> ${why}</p>
    </div>`;

  // S31 – final quiz with real correctness, local score only
  T.add(T.slide({
    id: 'S31',
    ch: 7,
    theme: 'ink',
    layout: 'quiz',
    steps: 6,
    title: 'Test rapid',
    notes: [
      'Cinci întrebări, câte una la fiecare pas. Publicul votează prin mâini ridicate (sau alegi tu opțiunea pe ecran). Scorul este doar local; nu se stochează și nu se trimite nicăieri.',
      'Răspunsuri corecte: 1 – B (închid și sun banca pe numărul oficial); 2 – C (nu apăs, verific separat); 3 – A (verific prin alt canal); 4 – C (consimțământ, bază legală, politica instituției); 5 – B (schimb parola de pe un dispozitiv de încredere, activez MFA și verific sesiunile active).',
      'După fiecare răspuns apare explicația; citește-o scurt și treci mai departe.',
      'Pas 6: scorul și un mesaj. Butonul „Reia testul” șterge scorul și revine la prima întrebare, pentru a doua rundă sau pentru publicul care a ratat ceva.',
      'Tonul: nu este o notă; este o verificare a reflexelor. Nimeni nu este expus.',
      'Tranziție spre S32: „Haideți să păstrăm șapte reguli simple.”'
    ],
    body: `
      <div class="quiz" data-quiz>
        <div class="quiz-head">
          <h2 class="display-m">Test rapid</h2>
          <span class="quiz-score rv" data-step="1" data-step-until="6" data-quiz-score>Scor: 0 / 5</span>
        </div>
        <div class="stack-cell">
          <p class="body-m rv" data-step-until="1">Cinci situații. Alege varianta cea mai sigură.</p>
          ${Q(1, 'Un apelant spune că este de la bancă și îți cere codul primit prin SMS. Ce faci?', [
            { t: 'Îi spun codul, ca să-mi protejeze contul.' },
            { t: 'Închid și sun banca pe numărul oficial.', ok: true },
            { t: 'Îl rog să-mi trimită mai întâi un e-mail.' }
          ], 'Băncile nu cer codurile de unică folosință. Verifică prin număr oficial, ales de tine.')}
          ${Q(2, 'Primești un link pentru un colet pe care nu l-ai comandat. Ce faci?', [
            { t: 'Apăs, ca să văd ce conține.' },
            { t: 'Îl trimit prietenilor, să fie atenți.' },
            { t: 'Nu apăs și verific separat, în aplicația curierului.', ok: true }
          ], 'Linkul poate duce la o pagină falsă. Verifică separat, în aplicația sau pe site-ul oficial.')}
          ${Q(3, 'Un prieten îți cere urgent bani, de pe un număr nou. Ce faci?', [
            { t: 'Verific prin alt canal, pe numărul pe care îl știu.', ok: true },
            { t: 'Trimit o sumă mică, să nu pierd timp.' },
            { t: 'Îi cer să-mi trimită o fotografie.' }
          ], 'O fotografie sau o voce pot fi falsificate. Verificarea prin alt canal rămâne soluția.')}
          ${Q(4, 'Vrei să publici fotografii cu elevi. Ce verifici mai întâi?', [
            { t: 'Dacă fotografiile arată bine.' },
            { t: 'Dacă și alți profesori publică la fel.' },
            { t: 'Consimțământul, baza legală și politica instituției.', ok: true }
          ], 'Fotografiile cu copii sunt date personale. Nu publica fără aceste verificări.')}
          ${Q(5, 'Ai introdus parola pe un site suspect. Ce faci?', [
            { t: 'Aștept să văd dacă se întâmplă ceva.' },
            { t: 'Schimb parola de pe un dispozitiv de încredere, activez MFA și verific sesiunile active.', ok: true },
            { t: 'Șterg istoricul browserului.' }
          ], 'Acționează imediat: parolă nouă, MFA și verificarea sesiunilor active.')}
          <div class="quiz-final rv" data-step="6">
            <p class="quiz-count">Rezultatul tău</p>
            <p class="quiz-final-score" data-quiz-final>0 / 5</p>
            <p class="body-m" data-quiz-verdict></p>
            <p><button type="button" class="btn-line" data-quiz-reset>Reia testul</button></p>
          </div>
        </div>
      </div>
    `
  }));

  // S32 – seven online safety rules
  T.add(T.slide({
    id: 'S32',
    ch: 7,
    theme: 'paper',
    layout: 'list',
    steps: 7,
    title: 'Șapte reguli de siguranță online',
    notes: [
      'Pașii 1–7: câte o regulă, rostită clar. Nu reciti slide-urile anterioare; reamintește scurt exemplul din cursul prezentării.',
      '1 Nu divulga parole, PIN sau OTP (S07, S13, S24). 2 Nu deschide linkuri suspecte (S10). 3 Verifică identitatea separat (S13, S19). 4 Folosește parole unice și MFA. 5 Nu publica excesiv date personale (S25). 6 Nu crede automat tot ce vezi, auzi sau citești (S19, S20). 7 Oprește-te, verifică și cere ajutor.',
      'Regula 7 este cea pe care o vor aplica în practică. Dacă publicul are timp, cere fiecăruia să aleagă o regulă pe care o va aplica săptămâna aceasta.',
      'Tranziție spre S33: „Pentru AI mai avem șapte reguli, cu exemple.”'
    ],
    body: `
      <div class="split split--5-7">
        <div class="col col--center">
          <h2 class="display-m">Șapte reguli<br />de siguranță<br />online</h2>
        </div>
        <div class="col rules-col">
          <div class="rule-row rv" data-step="1"><span class="rule-n">1</span><span>Nu divulga parole, PIN sau OTP.</span></div>
          <div class="rule-row rv" data-step="2"><span class="rule-n">2</span><span>Nu deschide linkuri suspecte.</span></div>
          <div class="rule-row rv" data-step="3"><span class="rule-n">3</span><span>Verifică identitatea separat.</span></div>
          <div class="rule-row rv" data-step="4"><span class="rule-n">4</span><span>Folosește parole unice și MFA.</span></div>
          <div class="rule-row rv" data-step="5"><span class="rule-n">5</span><span>Nu publica excesiv date personale.</span></div>
          <div class="rule-row rv" data-step="6"><span class="rule-n">6</span><span>Nu crede automat tot ce vezi, auzi sau citești.</span></div>
          <div class="rule-row rv" data-step="7"><span class="rule-n">7</span><span>Oprește-te, verifică și cere ajutor.</span></div>
        </div>
      </div>
    `
  }));

  // S33 – seven AI safety rules (select, with example)
  T.add(T.slide({
    id: 'S33',
    ch: 7,
    theme: 'ink',
    layout: 'rules',
    steps: 7,
    title: 'Șapte reguli de siguranță AI',
    notes: [
      'Pașii 1–7 selectează regulile pe rând; poți apăsa direct pe oricare. Panoul din dreapta arată regula completă și un exemplu.',
      '1 Date personale, doar cu nevoie și permisiune. 2 Agenților AI doar permisiunile necesare. 3 Verifică rezultatele. 4 Voce, foto și video nu sunt dovadă automată. 5 Nu aproba automat acțiuni cu efect important. 6 Verifică sursele, termenii și confidențialitatea. 7 AI este asistent, nu înlocuitor al gândirii critice.',
      'Nu trece prin toate dacă timpul este scurt; alege 3 și lasă restul în materialele de curs.',
      'Tranziție spre S34: „Să încheiem cu ce contează cel mai mult.”'
    ],
    body: `
      <h2 class="display-m">Șapte reguli de siguranță AI</h2>
      <div class="split split--5-7" data-select data-step-select>
        <div class="col rules-col">
          <button type="button" class="rule-btn" data-sel-item data-key="1" aria-pressed="false"><span class="rule-n">1</span><span>Date personale</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="2" aria-pressed="false"><span class="rule-n">2</span><span>Permisiuni pentru agenți</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="3" aria-pressed="false"><span class="rule-n">3</span><span>Verifică rezultatele</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="4" aria-pressed="false"><span class="rule-n">4</span><span>Voce, foto, video</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="5" aria-pressed="false"><span class="rule-n">5</span><span>Acțiuni importante</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="6" aria-pressed="false"><span class="rule-n">6</span><span>Surse și termeni</span></button>
          <button type="button" class="rule-btn" data-sel-item data-key="7" aria-pressed="false"><span class="rule-n">7</span><span>Gândire critică</span></button>
        </div>
        <div class="sel-panels">
          <div data-sel-panel data-key="none"><p class="sel-hint">Alege o regulă din listă.</p></div>
          <div data-sel-panel data-key="1"><h3 class="sel-title">Dă AI doar datele personale de care are nevoie și pentru care ai permisiune.</h3><p class="rule-example"><strong>Exemplu</strong>Anonimizează un CV înainte de a cere o corectură.</p></div>
          <div data-sel-panel data-key="2"><h3 class="sel-title">Dă agenților AI doar permisiunile necesare.</h3><p class="rule-example"><strong>Exemplu</strong>Un agent care organizează documente primește un folder, nu tot discul.</p></div>
          <div data-sel-panel data-key="3"><h3 class="sel-title">Verifică rezultatele: AI poate greși, chiar și când sună sigur.</h3><p class="rule-example"><strong>Exemplu</strong>Caută sursa originală a unui studiu citat de AI.</p></div>
          <div data-sel-panel data-key="4"><h3 class="sel-title">O voce, o fotografie sau un video nu sunt dovadă automată.</h3><p class="rule-example"><strong>Exemplu</strong>Un apel cu vocea unei rude: verifică pe alt canal.</p></div>
          <div data-sel-panel data-key="5"><h3 class="sel-title">Nu aproba automat acțiunile cu efect important.</h3><p class="rule-example"><strong>Exemplu</strong>Plăți, ștergeri, e-mailuri în numele tău: citește și confirmă.</p></div>
          <div data-sel-panel data-key="6"><h3 class="sel-title">Verifică sursele, termenii și politica de confidențialitate.</h3><p class="rule-example"><strong>Exemplu</strong>Înainte de a încărca un document, vezi ce face serviciul cu datele.</p></div>
          <div data-sel-panel data-key="7"><h3 class="sel-title">AI este asistent, nu înlocuitor al gândirii critice.</h3><p class="rule-example"><strong>Exemplu</strong>Folosește AI pentru idei, apoi decide tu.</p></div>
        </div>
      </div>
    `
  }));

  // S34 – closing; remains on screen during Q&A
  T.add(T.slide({
    id: 'S34',
    ch: 7,
    theme: 'ink',
    layout: 'closing',
    steps: 3,
    title: 'Oprește-te. Verifică. Cere ajutor.',
    notes: [
      'Pas 0: spune cele trei verbe rar: Oprește-te. Verifică. Cere ajutor.',
      'Pas 1: ideea finală: securitatea cibernetică nu înseamnă să cunoști toate atacurile; înseamnă să știi cum să reacționezi când ceva nu pare în regulă.',
      'Pas 2: trei idei de păstrat: Internetul – oprește-te înainte de a apăsa; AI – verifică înainte să ai încredere; Educația digitală – cere ajutor și învață-i și pe alții.',
      'Pas 3: „Mâine, un copil poate veni la tine pentru ajutor.” Lasă liniște. Apoi trece la întrebări.',
      'Slide-ul rămâne pe ecran în timpul sesiunii de întrebări.',
      'Pregătește răspunsuri pentru: „Ce fac dacă am dat deja datele?” (schimbă parola, contactează banca, raportează la 112 sau cybercrime.mai.gov.md) și „Ce fac dacă un copil spune că a fost contactat de un străin?” (S30).'
    ],
    body: `
      <div class="split split--7-5">
        <div class="col col--center">
          <h2 class="closing-title">Oprește-te.<br />Verifică.<br /><span class="accent">Cere ajutor.</span></h2>
        </div>
        <div class="col col--center">
          <p class="body-m rv" data-step="1">Securitatea cibernetică nu înseamnă să cunoști toate atacurile. Înseamnă să știi cum să reacționezi când ceva nu pare în regulă.</p>
          <div class="rv" data-step="2">
            <p class="takeaway"><strong>Internetul</strong>Oprește-te înainte de a apăsa.</p>
            <p class="takeaway"><strong>AI</strong>Verifică înainte să ai încredere.</p>
            <p class="takeaway"><strong>Educația digitală</strong>Cere ajutor și învață-i și pe alții.</p>
          </div>
        </div>
      </div>
      <p class="keyline rv" data-step="3">Mâine, un copil poate veni la tine pentru ajutor.</p>
    `
  }));
})();
