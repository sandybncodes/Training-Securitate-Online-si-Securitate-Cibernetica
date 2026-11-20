# PRESENTATION_DESIGN_REDESIGN_GUIDE.md

# Creative Direction & Redesign Specification
## Premium keynote redesign — „Lumea digitală: cât de sigur ești?”

**Document destinat GitHub Copilot / agentului de dezvoltare.** Acesta este un brief de **redesign al proiectului existent**, nu o cerere de creare a unei alte prezentări de la zero. Citește codul și `PRESENTATION_REQUIREMENTS.md` înainte de modificări. Păstrează conținutul educațional, funcționalitățile și structura de bază; îmbunătățește radical calitatea vizuală, copywritingul și experiența de prezentare. Videoclipul introductiv va fi prezentat **separat**: nu adăuga player, thumbnail sau embed video.

---

## 0. Rezultatul dorit — definiția succesului

Prezentarea trebuie să pară concepută de o echipă formată dintr-un **creative director, presentation designer, motion designer, editorial designer și frontend engineer**. Nu trebuie să pară un dashboard Bootstrap, un template de startup, un landing page SaaS sau o colecție de slide-uri generate automat.

**Referințe de principiu, nu de copiere:**
- **Apple:** economie de cuvinte, ierarhie impecabilă, un singur punct focal, imagini puternice, reveal bine temporizat, detalii rafinate.
- **Samsung:** vizualuri tehnologice clare, compoziții îndrăznețe, alternanță între slide-uri spectaculoase și demonstrații concrete.
- **Meta:** explicații vizuale accesibile, oameni și contexte autentice, sistem de design coerent, interacțiuni naturale.

Nu copia layout-uri exacte, logo-uri, fonturi proprietare, fotografii sau animații distinctive. Creează o identitate originală pentru training.

**Testul de calitate:** în primele 3 secunde, publicul trebuie să înțeleagă că asistă la o prezentare serioasă, actuală și atent regizată. După 20 de minute, nu trebuie să simtă că a văzut de 20 de ori aceeași structură.

---

## 1. Mai întâi: auditul prezentării existente (OBLIGATORIU)

Nu începe prin rescrierea tuturor fișierelor. Rulează proiectul existent și inventariază slide-urile, componentele, imaginile, animațiile, textele și interacțiunile. Creează `docs/DESIGN_AUDIT.md` cu un tabel pentru **fiecare slide**:

| Câmp | Ce trebuie documentat |
|---|---|
| Slide ID / titlu | Identificatorul și mesajul actual |
| Rol narativ | Hook, explicație, dovadă, demo, participare, tranziție, concluzie |
| Problemă | Text excesiv, layout repetitiv, imagine slabă, icon generic, animație decorativă etc. |
| Prioritate | P0 critic, P1 important, P2 rafinament |
| Direcție de redesign | Compoziția nouă, tipul de imagine, ritmul, interacțiunea |
| Criteriu de acceptare | Cum se verifică obiectiv îmbunătățirea |

Verifică în special:
1. Numărul de slide-uri cu **același layout** (titlu sus + 3 carduri jos).
2. Frecvența gradienturilor albastre/mov, efectelor glow și glassmorphism.
3. Câte titluri folosesc formule generice („Descoperă…”, „În era digitală…”, „Revoluția…” fără mesaj concret).
4. Câte imagini sunt doar decorative și ar putea fi eliminate fără pierdere de sens.
5. Câte slide-uri conțin paragrafe imposibil de citit de la distanță.
6. Câte interacțiuni au un rezultat educațional real versus simple efecte hover.
7. Dacă toate slide-urile au aceeași densitate și același ritm.
8. Dacă prezentarea funcționează la 1920×1080 și 1366×768, pe proiector.

**Nu declara că auditul a fost efectuat fără să fi inspectat proiectul.** Dacă nu poți vedea anumite fișiere sau nu poți rula aplicația, consemnează limitarea.

---

## 2. Anti-patterns: elimină aspectul „AI-generated”

### 2.1 Ce trebuie eliminat sau redus drastic

- Grid-uri de 3 sau 4 carduri identice pe majoritatea slide-urilor.
- Carduri cu colțuri foarte rotunjite, border luminos și umbră pe fiecare element.
- Gradienturi saturate albastru-violet în toate fundalurile.
- Iconuri de tip robot/creier/circuit pentru orice mențiune a AI.
- Emoji în titluri și iconuri fără legătură cu mesajul.
- Text în exces: subtitlu + descriere + 4 bullets + concluzie pe același slide.
- Headline-uri vagi, pompoase, nefirești: „Bine ai venit în viitorul digital!”, „O călătorie fascinantă…”, „Explorează puterea…”.
- Animații repetate identic la fiecare slide; bouncing, rotating, zoom agresiv, particles inutile.
- Stock photos clișeice: hacker cu glugă verde, cod Matrix, roboți umanoizi, lacăte 3D fără context.
- Ilustrații amestecate cu fotografii în stiluri incompatibile.
- Texte centrate automat indiferent de conținut.
- Sute de elemente mici care concurează pentru atenție.
- Numere, procente, grafice sau testimoniale inventate pentru impact.

### 2.2 Cu ce le înlocuiești

- Compoziții editoriale asimetrice și slide-uri cu un singur mesaj.
- Fotografie full-bleed sau decupaj editorial cu spațiu negativ.
- Tipografie puternică și aliniere precisă.
- Diagrame construite special pentru explicația respectivă.
- Capturi și simulări de interfețe credibile, marcate clar ca fictive.
- Variație intenționată între „moment de impact”, „demonstrație”, „dovadă”, „întrebare” și „recapitulare”.
- Microcopy natural, română corectă, fără sloganuri goale.
- Motion design care controlează **când** publicul vede o informație.

---

## 3. Sistem de design nou

### 3.1 Concept creativ

**Concept:** `SIGNAL / NOISE` — într-o lume plină de notificări, apeluri, conținut AI și mesaje credibile, diferența dintre semnal și zgomot devine o abilitate de viață.

Identitatea vizuală este construită în jurul a trei elemente: **lumină**, **informație** și **decizie**. Folosește liniile de conexiune și cadrele de focalizare doar când au semnificație narativă, nu ca ornament.

### 3.2 Paletă

```css
:root {
  --ink: #080B11;
  --ink-soft: #111722;
  --paper: #F6F7F9;
  --white: #FFFFFF;
  --text-on-dark: #F5F7FA;
  --text-muted: #A5ADBA;
  --electric: #4F8BFF;
  --cyan: #66D9E8;
  --alert: #F2A65A;
  --danger: #E45E65;
  --safe: #4BAF8B;
  --line-dark: rgba(255,255,255,.14);
  --line-light: rgba(10,20,35,.14);
}
```

**Regulă:** aproximativ 70–80% din slide-uri folosesc o bază neutră; accentul cromatic este rezervat punctului focal. Introdu slide-uri deschise (light mode) în capitolele explicative pentru a evita monotonia. Nu alterna mecanic dark/light la fiecare slide.

### 3.3 Tipografie

- Folosește fonturi cu licență permisivă, de exemplu **Inter**, **Manrope**, **IBM Plex Sans** sau **DM Sans**; alege maximum două familii, ideal una singură cu greutăți diferite.
- Nu utiliza fonturi proprietare Apple/Samsung fără licență.
- Titluri de impact: aproximativ **clamp(3.2rem, 6.5vw, 7rem)**.
- Titluri explicative: **clamp(2.3rem, 4vw, 4.5rem)**.
- Corp text proiectat: de regulă **24–32 px** la 1920×1080; evită sub 20 px pentru informații esențiale.
- Labels/surse pot fi mai mici, dar trebuie să rămână lizibile.
- Max. 2–3 rânduri pentru un headline major.
- Controlează manual lungimea rândului și întreruperile de linie; nu lăsa browserul să rupă aleatoriu titlurile-cheie.
- Folosește `font-weight`, spațiere și aliniere în loc de culori multiple pentru a crea ierarhie.
- Evită ALL CAPS pentru paragrafe; rezervă-le pentru etichete scurte.

### 3.4 Grilă și spațiere

- Safe area recomandată: 5–7% din lățimea ecranului, adaptivă.
- Grilă internă de 12 coloane; aliniază titlurile, imaginile și notele la repere consistente.
- Ritm de spațiere bazat pe multipli de 8 px.
- Păstrează un singur punct focal dominant pe slide.
- Compozițiile full-bleed pot încălca grila intenționat, dar textul rămâne în safe area.
- Nu forța conținutul să încapă prin micșorarea fontului: **împarte slide-ul**.

### 3.5 Iconografie

- Un singur set coerent: **Lucide** sau **Bootstrap Icons**, cu aceeași grosime de linie.
- Iconurile trebuie să explice sau să semnalizeze, nu să umple spațiul.
- Dimensiuni și stroke consistente; evită amestecul de iconuri filled, outline și 3D.
- Pentru concepte importante, preferă o diagramă simplă în locul unui icon mare și generic.
- Nu folosi emoji ca substitut pentru iconuri profesionale.

---

## 4. Biblioteca de layout-uri — varietate controlată

Creează componente reutilizabile pentru **minimum 9 tipuri de slide**. Nu repeta același tip de mai mult de 3 ori consecutiv.

| Tip | Compoziție | Utilizare |
|---|---|---|
| Hero statement | O propoziție mare, fundal dramatic, mult spațiu | Hook, revelație, final |
| Cinematic image | Imagine full-bleed + text scurt cu overlay controlat | Identitate, deepfake, copii |
| Editorial split | Text 40% / imagine 60%, alternare stânga-dreapta | Explicații și exemple |
| Evidence slide | Captură/simulare mare + marcaje precise | Phishing, SMS, deepfake |
| Diagram reveal | Diagramă minimalistă construită etapizat | Social engineering, agent AI |
| Contrast slide | Două stări, „greșit vs sigur” | Permisiuni, verificare |
| Interactive challenge | O întrebare și 2–4 răspunsuri mari | Vot, quiz, decizie |
| Timeline / sequence | Pași revelați unul câte unul | Escrocherie, reacție |
| Human story | Fotografie contextuală + o situație reală/fictivă clar etichetată | Protecția copiilor |
| Recap / chapter break | Număr de capitol și un headline scurt | Tranziții, recapitulare |

**Regulă:** nu converti orice subiect în carduri. Cardurile sunt potrivite doar pentru comparații reale sau opțiuni interactive.

---

## 5. Storytelling și copywriting: rescriere editorială

### 5.1 Vocea prezentării

- Vorbește cu publicul, nu despre public.
- Folosește română naturală, scurtă și precisă.
- Înlocuiește conceptele abstracte cu situații recognoscibile.
- Un slide de impact poate avea **3–12 cuvinte**; un slide explicativ poate avea mai mult, dar evită paragrafe lungi.
- Mută explicațiile detaliate în **speaker notes**.
- Nu dramatiza prin afirmații neverificate.
- Nu învinovăți victimele fraudelor.
- Nu folosi titluri englezești doar pentru a părea premium; capitolele pot avea etichete englezești discrete, dar mesajele către public rămân în română.

### 5.2 Exemple concrete de rescriere

| Evită | Preferă |
|---|---|
| „Descoperă lumea fascinantă a securității cibernetice” | „Un singur mesaj. O decizie. Uneori, toate economiile.” |
| „Inteligența artificială revoluționează viitorul” | „Dacă AI îți poate imita vocea, cum mai verifici cine sună?” |
| „Află mai multe despre phishing” | „Ai apăsa pe acest link?” |
| „Protejează-ți identitatea digitală” | „Câte lucruri poate afla un străin din profilul tău?” |
| „AI are numeroase riscuri și beneficii” | „Ce nu ar trebui să încarci într-un chatbot?” |
| „Să explorăm social engineering” | „Nu ți-a spart contul. Te-a convins să-i dai codul.” |
| „Copiii trebuie să fie în siguranță online” | „Ce faci dacă un elev îți spune: «Mi-a cerut o poză și mi-a spus să nu spun nimănui»?” |

Acestea sunt **propuneri de copy**, nu fapte documentare. Revizuiește toate titlurile pentru naturalețe și corectitudine.

### 5.3 Structura de tensiune narativă

Pentru fiecare subiect important:
1. **Întrebare:** ce ar face publicul?
2. **Exemplu:** un mesaj, apel, ecran sau scenariu concret.
3. **Reveal:** indiciul ascuns ori mecanismul de manipulare.
4. **Explicație:** o singură idee clară.
5. **Acțiune:** ce face participantul data viitoare?

Nu dezvălui soluția înaintea întrebării. Folosește pauze deliberate, nu animații excesive.

---

## 6. Motion design — sistem, nu efecte disparate

### 6.1 Principii

- Animația ghidează privirea și ordinea explicației.
- Un singur element principal se mișcă la un moment dat.
- Tranzițiile sunt aproape invizibile când informația trebuie să primeze.
- Folosește easing natural și durate coerente.
- Evită mișcările care seamănă cu un template de marketing.

### 6.2 Motion tokens

```css
:root {
  --motion-fast: 180ms;
  --motion-base: 360ms;
  --motion-slow: 650ms;
  --motion-hero: 900ms;
  --ease-standard: cubic-bezier(.22, 1, .36, 1);
  --ease-exit: cubic-bezier(.4, 0, 1, 1);
}
```

### 6.3 Rețete de animație

**A. Hero:** fundalul apare printr-un fade subtil; headline-ul intră cu translatare verticală de 16–28 px și blur minim sau deloc. Pauză înaintea subtitlului.

**B. Diagramă:** afișează nodul 1 → conexiunea → nodul 2. Fiecare etapă la click, nu toate simultan. Folosește SVG pentru linii și săgeți.

**C. Anatomia phishing:** mesajul apare întreg; la click, un spotlight/outline evidențiază câte un indiciu. Restul rămâne lizibil.

**D. Contrast:** starea riscantă se arată întâi; apoi tranziție laterală calmă spre varianta sigură. Nu folosi shake roșu agresiv.

**E. Deepfake:** schimbare subtilă între „ce auzi” și „ce poți verifica”, fără a simula fals dovezi tehnice de detectare.

**F. Quiz:** după răspuns, evidențiază opțiunea aleasă, arată verdictul și explicația; păstrează controlul prezentatorului asupra avansării.

### 6.4 Reguli de implementare

- Preferă CSS transforms/opacity; evită animarea proprietăților care provoacă layout thrashing.
- GSAP este permis pentru secvențe complexe; nu îl folosi pentru orice fade.
- `prefers-reduced-motion: reduce` trebuie să elimine animațiile neesențiale.
- Slide-urile nu trebuie să aștepte animații lungi pentru a deveni utilizabile.
- Controlează starea `initial / entering / active / exiting` și curăță animațiile la schimbarea slide-ului.
- La navigare înapoi, starea trebuie să fie predictibilă.
- Nu declanșa automat sunete.

---

## 7. Imagery: strategie de art direction

### 7.1 Principii

Fiecare imagine trebuie să răspundă la întrebarea: **„Ce înțelege sau simte publicul datorită acestei imagini?”** Dacă nu există un răspuns, elimin-o.

- Folosește fotografii cu subiect clar și compoziție potrivită pentru overlay.
- Păstrează stilul de color grading coerent.
- Alternează cadre largi și detalii (mână cu telefon, ecran, expresie umană).
- Evită imagini generice de „hacker cu glugă”, roboți și holograme gratuite.
- Pentru teme sensibile, preferă cadre simbolice sau simulări, nu fotografii dramatizate ale unor victime reale.
- Optimizează imaginile în AVIF/WebP, cu fallback unde este necesar.
- Încarcă anticipat imaginea slide-ului următor; evită apariția cu întârziere.

### 7.2 Brief-uri vizuale pe capitole

| Capitol | Direcție de imagine |
|---|---|
| Hook | Telefon izolat într-un cadru întunecat; mesajul devine punctul focal |
| Pericole invizibile | Portret uman, expresie de ezitare, lumină naturală; nu „hacker” |
| Capcane digitale | UI fictiv realist de SMS, e-mail și pagină de autentificare |
| AI | Interfață de lucru, documente, permisiuni, voce reprezentată abstract |
| Experimente | Interfețe curate, indicii marcate, simulări credibile |
| Copii | Context educațional respectuos, fără identificarea copiilor reali |
| Final | Imagine simplă, umană, optimistă, cu spațiu negativ pentru mesaj |

### 7.3 Proveniență

- Utilizează doar imagini cu licență corespunzătoare sau create pentru proiect.
- Notează URL-ul sursei, autorul, licența și eventualele condiții în `ASSET_SOURCES.md`.
- Nu inventa licențe sau linkuri.
- Nu folosi logo-urile Apple, Meta, Samsung pentru a sugera afiliere.
- Dacă nu poți procura o imagine bună, folosește temporar un placeholder local explicit și adaugă o sarcină în `docs/ASSET_TODO.md`.

---

## 8. Redesign pas cu pas pentru fiecare capitol

### Capitolul 1 — Hook, slide-urile 1–4

**Obiectiv:** câștigă atenția în primele secunde, fără „Bine ați venit”, fără aglomerație.

1. **Slide 1:** full-bleed fotografie cu telefon într-o încăpere întunecată; headline uriaș „Cât de sigur ești?”; al doilea rând „că nu poți fi păcălit?” apare după o pauză. Elimină toate iconurile și cardurile. Subsolul conține discret tema trainingului.
2. **Slide 2:** fundal aproape negru, o singură întrebare; cele trei răspunsuri apar pe rând, cu un indicator vizual clar. Vot prin ridicarea mâinii; fără procente inventate.
3. **Slide 3:** slide de tranziție **fără video integrat**. După prezentarea separată a videoclipului, afișează întrebările una câte una: „Ce a convins-o?”, „Când putea opri?”, „Ai fi recunoscut?” Nu pune toate întrebările simultan.
4. **Slide 4:** un singur statement pe fundal neutru: „Nu învățăm să devenim hackeri. Învățăm să nu devenim victime.” Lasă pauză, apoi tranziție spre mecanismul manipulării.

**Evita:** animații spectaculoase pe fiecare cuvânt, numărătoare falsă, efecte Matrix.

### Capitolul 2 — Pericole invizibile, slide-urile 5–8

5. **Slide 5:** comparație editorială simplă, nu două carduri cu iconuri. În stânga „Omul”; în dreapta „Sistemul”. Sub fiecare: o definiție scurtă. Un accent vizual arată că protecția reală le include pe ambele.
6. **Slide 6:** diagramă radială discretă cu „Ce urmărește atacatorul?” în centru și 5 obiective. Dezvăluie nodurile progresiv; fără iconuri redundante.
7. **Slide 7:** o singură simulare de mesaj în prim-plan; schimbă textul pentru frică, urgență, încredere, curiozitate, câștig. Publicul observă că aceeași structură poate exploata emoții diferite.
8. **Slide 8:** o secvență animată: mesaj → emoție → acțiune → consecință. Păstrează un singur rând de explicație pe ecran la fiecare pas.

### Capitolul 3 — Capcane digitale, slide-urile 9–13

9. **Slide 9:** trei interfețe realiste, nu trei carduri decorative: e-mail, SMS, ecran de apel. O etichetă scurtă pentru phishing/smishing/vishing.
10. **Slide 10:** mesaj bancar **fictiv**, construit ca o captură credibilă; hotspot-uri accesibile evidențiază urgența, amenințarea, linkul și solicitarea de date. Răspunsurile nu se arată înaintea votului.
11. **Slide 11:** colaj editorial cu 3–4 scenarii de fraudă; folosește mini-narațiuni de o propoziție, nu o listă lungă.
12. **Slide 12:** **un exemplu real verificat** din Republica Moldova ocupă majoritatea slide-ului: instituție, data avertizării, descriere factuală de maximum 35–50 cuvinte, sursa oficială. Dacă sunt mai multe exemple, creează slide-uri separate. Nu inventa sume sau victime.
13. **Slide 13:** secvență de 4–5 pași „Oprește / Nu apăsa / Verifică separat / Contactează oficial / Raportează”. Design luminos, calm, pentru a semnala trecerea de la risc la soluție.

### Capitolul 4 — AI, slide-urile 14–22

14. **Slide 14:** colaj rafinat cu trei activități AI obișnuite (text, imagine, rezumat); fără robot. Headline: „AI e deja în rutina noastră.”
15. **Slide 15:** un document fictiv mare; câmpurile personale se evidențiază la click (nume, telefon, adresă, informații despre copii). Apoi arată versiunea anonimizată.
16. **Slide 16:** diagramă clară „Tu → AI → Instrumente → Acțiune”, cu diferența între răspuns și execuție. Fără afirmația că toate modelele au acces la instrumente.
17. **Slide 17:** contrast full-screen: „Acces la un folder” versus „Acces la tot calculatorul”; folosește indicator de permisiuni și explicație despre privilegiul minim.
18. **Slide 18:** document fictiv cu o instrucțiune malițioasă vizibilă; la reveal, separă vizual „cererea utilizatorului” de „textul din document”. Explică faptul că un sistem bine protejat nu trebuie să trateze documentul ca instrucțiune autorizată.
19. **Slide 19:** vizual de voce/identitate, nu față AI generică. Întrebarea centrală: „Dacă sună exact ca cineva cunoscut, cum verifici?” Urmează un flux practic de verificare independentă.
20. **Slide 20:** o afirmație AI convingătoare dar fictivă; publicul trebuie să identifice ce ar verifica înainte de a o folosi la clasă. Nu inventa citate reale.
21. **Slide 21:** diagramă de comparație AI Safety / AI Security cu exemple simple, fără definiții academice lungi.
22. **Slide 22:** slide de pauză vizuală, un singur mesaj: „AI poate ajuta. Decizia rămâne a ta.”

### Capitolul 5 — Experimente, slide-urile 23–27

23. **Slide 23:** „Digital Detective” cu trei mesaje fictive; afișează unul câte unul, colectează răspunsuri în sală, apoi reveal al indiciilor. Interacțiunea trebuie să funcționeze offline.
24. **Slide 24:** rolurile „Apelant” / „Client” pe o compoziție split, cu o bandă discretă de tactici ce se poate dezvălui la final. Fără înregistrare audio.
25. **Slide 25:** profilul fictiv al Mariei în centru; la click pe postări, apar legături către informațiile ce pot fi deduse. Nu folosi profiluri reale.
26. **Slide 26:** demonstrație de prompt injection controlată. Dacă este simulată, afișează clar **SIMULARE EDUCAȚIONALĂ**. Nu conecta la date sau instrumente sensibile.
27. **Slide 27:** patru decizii despre încărcarea datelor în AI, fiecare cu răspuns contextual și explicație. Nu simplifica toate situațiile la „da/nu”; folosește „verifică mai întâi” când răspunsul depinde de permisiuni.

### Capitolul 6 — Viitorii învățători, slide-urile 28–30

28. **Slide 28:** schimbă tonul vizual: fotografie umană, caldă, fără dramatizare. Riscurile pentru copii apar pe rând, ca etichete scurte în jurul unui scenariu educațional.
29. **Slide 29:** arată un exemplu fictiv de fotografie școlară și metadate contextuale; explică ce informații nu trebuie publicate fără verificarea cadrului legal și a regulilor instituției.
30. **Slide 30:** ecran de decizie: „Un elev îți spune că un necunoscut i-a cerut o fotografie și i-a spus să păstreze secretul.” Dezvăluie pe rând răspunsurile corecte: ascultă, protejează, nu învinovăți, urmează procedurile instituției.

### Capitolul 7 — Final, slide-urile 31–34

31. **Slide 31:** quiz cu o singură întrebare vizibilă la un moment dat; butoane mari, contrast bun, explicație după răspuns, scor local fără colectare de date.
32. **Slide 32:** cele 7 reguli de siguranță online prezentate în două etape sau pe două slide-uri dacă sunt prea dense; folosește tipografie și iconuri funcționale, nu 7 carduri identice.
33. **Slide 33:** cele 7 reguli AI, într-un sistem vizual complementar, cu 1–2 exemple concrete.
34. **Slide 34:** revino la minimalismul începutului: „Oprește-te. Verifică. Cere ajutor.” Apoi mesajul despre responsabilitatea viitorilor învățători. Fără confetti, fireworks, badge-uri de „success” sau animații de final triumfaliste.

**Notă:** dacă împărțirea unor slide-uri dense crește numărul total, actualizează navigarea, notițele și estimarea de timp. Nu elimina informații esențiale doar pentru a păstra exact 34 de slide-uri.

---

## 9. Exemple reale și credibilitate

Prezentarea trebuie să conțină exemple documentate, nu doar scenarii fictive. Pentru fiecare exemplu real, folosește un **Evidence Card editorial**, nu un card decorativ:

- Titlu factual (fără clickbait).
- Instituția/sursa.
- Data exactă a avertizării sau incidentului.
- Ce s-a întâmplat / ce a fost avertizat (2–3 propoziții).
- Ce lecție practică rezultă.
- Link verificabil către sursa originală.

**Surse de verificat înainte de includere:** Poliția Republicii Moldova, Agenția de Guvernare Electronică, Poșta Moldovei, STISC; OWASP pentru prompt injection/excessive agency; surse primare pentru vulnerabilități AI documentate. Dacă nu există acces la internet sau verificarea nu reușește, marchează exemplul ca **NECESITĂ VERIFICARE** în notițele interne și nu îl prezenta drept fapt confirmat.

Nu confunda o demonstrație fictivă cu un incident real. Nu folosi statistici fără sursă și metodologie. Nu inventa citate, nume de victime, sume sau date.

---

## 10. Experiență de prezentare în sală

- Format 16:9, full-screen; optimizează pentru proiector, nu doar laptop.
- Controale discrete, ascunse după câteva secunde de inactivitate doar dacă pot fi recuperate intuitiv.
- Navigare: săgeți, Space, PageUp/PageDown, butoane; Esc pentru ieșire din fullscreen.
- Indicator discret de progres, fără a ocupa mult din slide.
- Presenter notes cu mesajul oral, durata și momentul interacțiunii.
- Funcție de **step reveal**: primul click dezvăluie următoarea informație; doar după ultimul pas se avansează la slide-ul următor.
- Buton „Reveal answer” la exerciții, controlat de prezentator.
- Pentru întrebări în sală, nu inventa rezultate de vot; afișează doar opțiunile.
- Nu utiliza autoplay audio/video; videoclipul introductiv rămâne separat.
- Păstrează toate exercițiile funcționale offline, fără backend și fără colectare de date personale.

---

## 11. Cerințe tehnice de implementare

**Stack existent:** HTML5 + CSS3 + JavaScript ES6+ + Bootstrap 5.3+. Nu migra la React/Vue/Angular doar pentru redesign.

### CSS architecture

Organizează stilurile în:
- `tokens.css` — culori, tipografie, spațiere, motion.
- `base.css` — reset, fonturi, accesibilitate.
- `layouts.css` — cele 9+ tipuri de slide.
- `components.css` — controale, simulări, diagrame, quiz.
- `motion.css` — animații și reduced motion.
- `responsive.css` — adaptări la viewport/proiector.

Poți păstra structura existentă dacă separarea logică este deja bună. Evită CSS duplicat, `!important` excesiv și stiluri inline generate aleatoriu.

### JavaScript architecture

- `presentationController` — navigare, progres, fullscreen.
- `slideRenderer` — layout și conținut.
- `revealController` — pașii de dezvăluire.
- `interactionController` — hotspot-uri, voturi, exerciții.
- `quizController` — răspunsuri și feedback local.
- `motionController` — intrare/ieșire și cleanup.
- `presenterNotes` — notițe și durate.

Folosește date structurate pentru slide-uri, nu HTML duplicat pentru fiecare interacțiune. Nu compromite accesibilitatea pentru efecte vizuale.

### Performance

- Animații pe `transform` și `opacity` unde este posibil.
- Lazy-load pentru imagini îndepărtate; preload pentru slide-ul curent și următorul.
- Comprimă imaginile; nu încărca fotografii de 10 MB pentru un slide.
- Evită filtre blur costisitoare pe suprafețe foarte mari.
- Țintește interacțiuni fluide la 60 FPS pe laptop de prezentare obișnuit; testează, nu presupune.
- Fără erori în consolă și fără layout shifts vizibile.

### Accesibilitate

- Contrast suficient; text esențial vizibil la distanță.
- Focus vizibil, controale utilizabile cu tastatura.
- `prefers-reduced-motion` respectat.
- Nu transmite informația exclusiv prin culoare.
- Fără flash-uri, efecte stroboscopice sau autoplay audio.
- Elemente interactive cu etichete accesibile și arii de click suficient de mari.

---

## 12. Plan de execuție pe faze — NU modifica totul într-un singur pas

### Faza 1 — Audit și direcție (fără redesign complet)
1. Citește `PRESENTATION_REQUIREMENTS.md` și codul existent.
2. Rulează proiectul și inspectează fiecare slide.
3. Creează `docs/DESIGN_AUDIT.md`.
4. Identifică 5–8 probleme recurente care dau aspectul de template/AI.
5. Definește design tokens, tipografie, paletă și biblioteca de layout-uri.
6. Prezintă un plan clar cu fișierele ce vor fi modificate.

### Faza 2 — Trei slide-uri pilot
Implementează și validează **doar**:
- Slide 1 (hero cinematic),
- Slide 10 (anatomia phishing cu hotspot-uri),
- Slide 18 (prompt injection cu diagramă și reveal).

Acestea verifică trei nevoi diferite: impact vizual, interacțiune și explicație tehnică accesibilă. Nu extinde redesignul înainte de verificarea lor.

### Faza 3 — Sistemul de componente
1. Generalizează layout-urile validate.
2. Creează animații și reveal reutilizabile.
3. Implementează navigarea și notițele fără regresii.
4. Creează componentele de evidență/sursă și simulările fictive.

### Faza 4 — Redesign integral
1. Parcurge slide-urile capitol cu capitol.
2. Rescrie titlurile în stil editorial, fără a schimba sensul factual.
3. Înlocuiește imaginile slabe și layout-urile repetitive.
4. Adaugă interacțiunile relevante și diagramele specifice.
5. Verifică ritmul: alternează impact → explicație → exemplu → participare.

### Faza 5 — QA vizual și funcțional
1. Testează la 1920×1080, 1366×768, 1280×720 și tabletă.
2. Verifică fiecare slide la 100% zoom și în fullscreen.
3. Testează navigarea înainte/înapoi, reveal, quiz, reset și mod prezentator.
4. Verifică toate imaginile, sursele și licențele.
5. Verifică reducerea animațiilor și accesibilitatea tastaturii.
6. Verifică timpii și împărțirea între prezentatori.
7. Creează `docs/REDESIGN_QA_REPORT.md` cu probleme și remedieri.

---

## 13. Checklist de acceptare — criterii verificabile

### Visual quality
- [ ] Primele 3 secunde au un punct focal puternic și un headline clar.
- [ ] Nu există 4 slide-uri consecutive cu același layout.
- [ ] Nu există gradienturi/glow-uri decorative omniprezente.
- [ ] Nu există iconuri generice repetate fără sens.
- [ ] Titlurile sunt naturale și specifice, nu clișee AI.
- [ ] Textul esențial se poate citi de la distanță.
- [ ] Fiecare imagine are rol narativ și proveniență documentată.
- [ ] Sunt prezente slide-uri dark și light folosite intenționat.
- [ ] Alinierea și spațierea sunt consistente.

### Storytelling
- [ ] Fiecare capitol începe cu o întrebare, o tensiune sau o situație relevantă.
- [ ] Explicațiile apar după întrebare/reveal, nu înainte.
- [ ] Există exemple practice relevante pentru studenți și viitori învățători.
- [ ] Exemplele reale sunt verificate și citate.
- [ ] Nu există statistici sau incidente inventate.
- [ ] Videoclipul de deschidere NU este încorporat.

### Interactivity & motion
- [ ] Diagramele sunt animate etapizat, cu scop pedagogic.
- [ ] Hotspot-urile phishing funcționează cu mouse și tastatură.
- [ ] Quiz-ul oferă feedback corect și reset.
- [ ] Reveal-urile nu se pierd sau dublează la navigare.
- [ ] Animațiile pot fi reduse/dezactivate.
- [ ] Nu există efecte care distrag atenția de la mesaj.

### Technical QA
- [ ] Fără erori JavaScript.
- [ ] Fără overflow sau elemente tăiate la rezoluțiile-țintă.
- [ ] Funcționează offline pentru conținutul și interacțiunile esențiale.
- [ ] Fără date personale colectate/transmise.
- [ ] Fără regresii în navigare și mod prezentator.
- [ ] Documentația și lista de asset-uri sunt actualizate.

---

## 14. Livrabile finale

1. Codul existent actualizat, nu un proiect paralel inutil.
2. `docs/DESIGN_AUDIT.md` — probleme identificate pe slide.
3. `docs/DESIGN_SYSTEM.md` — culori, tipografie, layout-uri, motion, exemple de utilizare.
4. `docs/CONTENT_EDIT_LOG.md` — titluri/texte rescrise și motivul modificării.
5. `ASSET_SOURCES.md` actualizat — surse/licențe pentru imagini și iconuri.
6. `docs/CONTENT_AND_SOURCES.md` actualizat — surse pentru exemple reale.
7. `docs/REDESIGN_QA_REPORT.md` — verificări și probleme rămase.
8. `README.md` actualizat cu rulare, navigare, fullscreen, reveal, mod prezentator și personalizare.

---

## 15. Prompt de execuție pentru GitHub Copilot

> Read `PRESENTATION_REQUIREMENTS.md` and `PRESENTATION_DESIGN_REDESIGN_GUIDE.md` completely. Act as a senior creative director, editorial presentation designer, motion designer, accessibility specialist, and frontend engineer. This is a redesign of an existing presentation, not a new generic template. First audit the current implementation slide by slide and create `docs/DESIGN_AUDIT.md`. Then define the design system and implement only three pilot slides: slide 1 (cinematic hero), slide 10 (interactive phishing anatomy), and slide 18 (prompt-injection explanation). Preserve all educational content and existing working functionality. Eliminate repetitive cards, generic AI-looking gradients, robotic copy, irrelevant icons, and decorative animation. Use original corporate-keynote design principles inspired by the restraint, hierarchy, precision, and human-centered storytelling of leading technology companies, without copying their branding. Do not fabricate real cases or statistics. The opening video is presented separately and must not be embedded. After the pilot, report what changed, what remains, and how to validate the visual quality before proceeding to the full redesign.

**Prioritatea supremă:** o prezentare care pare regizată de un profesionist, cu conținut verificabil și ritm uman — nu o demonstrație de efecte CSS.
