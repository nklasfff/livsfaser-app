# PREVIEW-KAPITEL-LOG — De 9 Livsfasers Energi

*Komplet inventar over alle skærme, komponenter og indhold i preview-komplet.html*
*Opdateret: 21. februar 2026 · v31*

---

## OVERBLIK

| Kategori | Antal | Status |
|----------|-------|--------|
| Forsider (Side 1-3) | 3 | ✅ Bygget |
| Hovedsektioner (1-5) | 5 | ✅ Bygget |
| Undersider | 2 | ✅ Bygget (kun Vinduer) |
| Cirkel-detail-overlays | 6 | ❌ Mangler i preview |
| Undersider sekt. 1-4 | 0 | ⏳ Ikke planlagt endnu |
| **Total i preview nu** | **10** | |
| **Total i gammel app** | **~46** | |

---

## SIDE 1: VELKOMST

| Felt | Indhold |
|------|---------|
| **Linjer** | 773-814 |
| **Tone** | Neutral (cyklusser-blå accenter) |
| **Formål** | Første møde — fang interessen, fødselsdato-input |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| s1-title | "De 9 Livsfasers Energi" | ✅ |
| s1-sub | "En rejse gennem livets årstider" | ✅ |
| question-box | "Har du nogensinde undret dig over, hvorfor nogle perioder bare flyder..." | ✅ |
| reveal-box | "Fem rytmer løber gennem dit liv på én gang..." (2 afsnit) | ✅ |
| Billede | 9-cirkler.png (mix-blend-mode) | ✅ |
| intro-callout | "Og der er mere" — tidsrejse-teaser | ✅ |
| birth (input) | "Hvornår er du født?" + dato-felt + knap | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Komponenter IKKE brugt

| Komponent | Grund |
|-----------|-------|
| feeling-box | Ikke relevant — dette er intro, ikke sektion |
| featured | Ikke relevant |
| quick-action | Ikke relevant |
| pull-quote | Ikke relevant |
| cross-links | Ikke relevant — dette er flow, ikke navigation |
| Figur #2 | Ikke relevant — kun én side med intro-flow |

---

## SIDE 2: DIT LIV LIGE NU (Åbenbaring)

| Felt | Indhold |
|------|---------|
| **Linjer** | 819-905 |
| **Tone** | Cyklusser-blå + Vinduer-lilla |
| **Formål** | Resultat efter fødselsdato — vise livsfase, cyklusser, relationer |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| Kanji (水) | Stort vandsymbol (120px) | ✅ |
| p-title | "Dit liv lige nu" | ✅ |
| res (resultat-kort) | "DIN LIVSFASE" — Fase 9, Visdom, Vand | ✅ |
| res-more | "Se alle ni faser →" link | ✅ |
| profil-fold | Brugerens profil (alder, fase, element, cyklus, årstid, ugedag, organur) | ✅ |
| feelings | "HVAD DET BETYDER" — dominerende element-analyse | ✅ |
| alive-section | "LEVENDE LIGE NU" — 3 kort (Krop, Åndedræt, Næring) | ✅ |
| win (vinduer-teaser) | "MINE VINDUER" — motor-forklaring + gradient-boks | ✅ |
| prak | "Udforsk din praksis →" link | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Komponenter IKKE brugt

| Komponent | Grund |
|-----------|-------|
| feeling-box | Erstattet af "feelings"-boks (specifik for denne side) |
| Figur #1/#2 | Kanji fungerer som visuel hero |
| cross-links | Erstattet af win-teaser + prak-link |

---

## SIDE 3: DIN FORSIDE

| Felt | Indhold |
|------|---------|
| **Linjer** | 908-1012 |
| **Tone** | Neutral med #5A74A5 accent |
| **Formål** | Hovednavigation — adgang til alle 5 sektioner |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| eyebrow | "DE 9 LIVSFASERS ENERGI" | ✅ |
| title | "Hvad mærker du lige nu?" | ✅ |
| body-text | "Du er i Fase 9 — Visdom..." | ✅ |
| circles (billede) | Koncentriske cirkler illustration | ✅ |
| 5 forside-cards | Mine Cyklusser / Mine Relationer / Min Praksis / Min Rejse / Mine Vinduer | ✅ |
| vinduer-card | "Tidsrejsen" — kort med gradient-footer | ✅ |
| checkin-card | "Hvordan føles din energi?" + 5 mood-pills | ✅ |
| 4 praksis-cards | Yin Yoga / Refleksion / Følelsernes Hjul / Kost & Næring | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Komponenter IKKE brugt

| Komponent | Grund |
|-----------|-------|
| feeling-box | Forsiden er navigation, ikke indhold |
| featured | Erstattet af vinduer-card |
| quick-action | Erstattet af checkin-card |
| pull-quote | Forsiden skal være funktionel, ikke poetisk |
| Figur #2 | Forsiden har sit eget layout |

---

## SEKTION 1: MINE CYKLUSSER

| Felt | Indhold |
|------|---------|
| **Linjer** | 1020-1175 |
| **Tone** | tone-cyklusser (#6c82a9 / #889ec3 / #9cabc3) |
| **RGBA-base** | 108, 130, 169 |
| **Formål** | Vise de 5 samtidige cyklusser + TCM-elementer |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Mine Cyklusser" | ✅ |
| section-title | "Fem rytmer · Ét liv" | ✅ |
| section-sub | "Livsfase · Årstid · Måned · Uge · Time" | ✅ |
| Figur #1 (billede) | krydsfelt-final.png (dit krydsfelt) | ✅ |
| **feeling-box** | **"Det du måske mærker"** — Vand-dominans, uro, stilhed | ✅ |
| **featured** | **"Lige nu"** — "4 af dine fem cyklusser peger mod Vand" | ✅ |
| element-analysis | 5-element bjælker (Vand 4, Træ 1, Ild 0, Jord 0, Metal 0) | ✅ |
| 5 kort | Livsfase / Årstid / Måned / Ugedag / Organur (hver med cycle-data) | ✅ |
| **quick-action** | **"Chuiii — Vandets healinglyd"** | ✅ |
| insight-box | "Dit krydsfelt" — forklaring af elementinteraktioner | ✅ |
| Figur #2 (SVG) | **Bølge-tidslinje** (5 parallelle sinuskurver med NU-markør) | ✅ |
| **time-shift** | "Næste skift" (onsdag → Ild) + "Sæsonskift" (forår → Træ) | ✅ |
| **pull-quote** | "Dine cyklusser er ikke noget du skal mestre..." — Isabelle | ✅ |
| **cross-links** | Min Praksis, Mine Relationer, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne sektion)

- element-analysis (5-element bjælker)

---

## SEKTION 2: MINE RELATIONER

| Felt | Indhold |
|------|---------|
| **Linjer** | 1176-1325 |
| **Tone** | tone-relationer (#7b7a9e / #9e9db8 / #a8a3be) |
| **RGBA-base** | 123, 122, 158 |
| **Formål** | Relations-dynamik — hvordan cyklusser mødes mellem mennesker |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Mine Relationer" | ✅ |
| section-title | "De mennesker du bærer med dig" | ✅ |
| section-sub | "Jeres cyklusser · Jeres møde · Jeres energi" | ✅ |
| Figur #1 (billede) | relationer_blad_liberation_HQ.png | ✅ |
| profil-row | 4 profiler: Dig (V, Vand), Martin (J, Jord), Mor (V, Vand), Clara (T, Træ) | ✅ |
| **feeling-box** | **"Det I måske mærker"** — tale forbi hinanden, forskudt, Vand vs Jord | ✅ |
| **featured** | **"Lige nu mellem jer"** — Vand nærer Træ, Jord kontrollerer Vand | ✅ |
| 3 kort | Jeres Cyklusser / To Rytmer / Tre Generationer | ✅ |
| group-label | "SAMTALEÅBNERE" | ✅ |
| 2 quick-actions | Samtaleåbner ("Hvad fylder mest...") + Aktivitet ("Gå en stille tur...") | ✅ |
| Figur #2 (SVG) | **Dråbeformer** (to overlappende dråber: "DIG" + "DEM" → "MØDET") | ✅ |
| insight-box | "Jeres energi lige nu" — Vand+Jord interaktion | ✅ |
| **time-shift** | "Næste møde" (om 3 år, same element) + "Jeres historie" (26 år sammen) | ✅ |
| **pull-quote** | "De mennesker der udfordrer dig mest..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Min Praksis, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne sektion)

- profil-row (4 profilcirkler med elementer)
- Dobbelt quick-action (samtaleåbner + aktivitet)
- group-label "SAMTALEÅBNERE"

---

## SEKTION 3: MIN PRAKSIS

| Felt | Indhold |
|------|---------|
| **Linjer** | 1326-1482 |
| **Tone** | tone-praksis (#7a908b / #9db3ad / #a3b3ae) |
| **RGBA-base** | 122, 144, 139 |
| **Formål** | Konkret krop, åndedræt, kost — hvad du kan gøre i dag |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Min Praksis" | ✅ |
| section-title | "Det kroppen ved" | ✅ |
| section-sub | "Krop · Åndedræt · Næring · Stilhed" | ✅ |
| Figur #1 (billede) | din-krop.jpg (border-radius:14px) | ✅ |
| **feeling-box** | **"Det kroppen prøver at fortælle dig"** — træthed, øm lænd, uro i knoglerne | ✅ |
| **featured** | **"I dag · Vand"** — Vand beder om stilhed og dybde | ✅ |
| **quick-action** | **"Butterfly · Yin Yoga"** — pose med instruktion | ✅ |
| social-proof | "Hvad har hjulpet andre" — 3 bjælker (Yin Yoga 73%, Stille gåture 68%, Varm suppe 61%) | ✅ |
| breath-box | "ÅNDEDRÆT" — Cirkel "Pust ud" + 4-7-8 trin | ✅ |
| 4 kort | Yin Yoga / Refleksion / Følelsernes Hjul / Kost & Næring | ✅ |
| Figur #2 (SVG) | **Vanddråbe** (3 lag: OVERFLADEN → PRAKSIS → STILHEDEN) | ✅ |
| group-label | "MÅ JEG ANBEFALE" | ✅ |
| 2 kort | Healing-lyd (Chuiii) / Kost (Suppe med rod, tang, bønner) | ✅ |
| **time-shift** | "I morgen" (tirsdag → Træ) + "Denne uge" (Vand-dominans) | ✅ |
| **pull-quote** | "Kroppen lyver aldrig..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Mine Relationer, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne sektion)

- social-proof (3 procent-bjælker)
- breath-box (åndedrætsøvelse med cirkel + trin)
- group-label "MÅ JEG ANBEFALE"

---

## SEKTION 4: MIN REJSE

| Felt | Indhold |
|------|---------|
| **Linjer** | 1483-1657 |
| **Tone** | tone-rejse (#8a96a9 / #a8b2c1 / #adb5c1) |
| **RGBA-base** | 138, 150, 169 |
| **Formål** | Tracking, mønstre, personlig udvikling over tid |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Min Rejse" | ✅ |
| section-title | "Det du har lært undervejs" | ✅ |
| section-sub | "Mønstre · Indsigter · Favoritter · Baggrund" | ✅ |
| Figur #1 (billede) | (planlagt: min-rejse-ikigai.png — TODO) | ⚠️ |
| **feeling-box** | **"Det der er svært at se"** — umuligt at forstå sin rejse mens man er midt i den | ✅ |
| milestone-box | "Fase 9 · Visdom" + progressbar (år 4 af 7) + range (56-63 år) | ✅ |
| **featured** | **"Din udvikling"** — 12 check-ins, dominerende Vand | ✅ |
| stat-row | 4 tal: 12 check-ins / 8 dage streak / 3 elementer / 2.4 gns. aktiviteter | ✅ |
| 3 kort (gruppe 1) | Min Udvikling / Mine Favoritter / Mine Opdagelser | ✅ |
| Figur #2 (SVG) | **Diamant** (4 retninger: FORTIDEN / NUTIDEN / DRØMMENE / FRYGTEN → "DIG") | ✅ |
| 3 kort (gruppe 2) | Alle Faser / Baggrundsviden / Om Isabelle | ✅ |
| **quick-action** | **"Hvordan føles din energi lige nu?"** — check-in opfordring | ✅ |
| insight-box | "Dit mønster" — Vand-dominans i check-ins | ✅ |
| **time-shift** | "Dit næste kapitel" (om 3 år, Fase 9 slutter) + "Historien" (56 år, 8 kapitler) | ✅ |
| **pull-quote** | "Du behøver ikke forstå hele din rejse..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Mine Relationer, Min Praksis | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne sektion)

- milestone-box (progressbar med faseprogression)
- stat-row (4 statistik-bokse)

### Bemærkninger

- ⚠️ Figur #1 billede mangler muligvis (min-rejse-ikigai.png — skal verificeres)

---

## SEKTION 5: MINE VINDUER (overblik)

| Felt | Indhold |
|------|---------|
| **Linjer** | 1658-1808 |
| **Tone** | tone-vinduer (#6B5F7B / #8B7D9B / #a89bb3) |
| **RGBA-base** | 107, 95, 123 |
| **Formål** | Tidsrejse-motoren — vælg dato, se cyklusser |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Mine Vinduer" | ✅ |
| section-title | "Det øjeblik du vælger" | ✅ |
| section-sub | "Fortid · Nutid · Fremtid" | ✅ |
| section-intro | "Vælg en dato — fortid eller fremtid — og se..." | ✅ |
| Figur #1 (2 billeder) | vinduer-tid-lilla.png + krydsfelt-final.png (stacked) | ✅ |
| **feeling-box** | **"Det der ikke har et sprog endnu"** — år vi bærer, datoer der gør ondt | ✅ |
| motor-box | "Hvad er Mine Vinduer?" — forklaring af tidsrejse-funktionen | ✅ |
| **featured** | **"Tidsrejsen"** — datteren fylder 14, Træ-energi | ✅ |
| date-preview | "Prøv det — vælg en dato" + 7 date-chips + 3 person-pills | ✅ |
| Figur #2 (SVG) | **Tidsspiral** (spiral fra FORTID → NUTID med prikker + "DIG NU") | ✅ |
| 3 scenario-kort | Dig alene / Dig og én anden / Et vigtigt øjeblik | ✅ |
| 2 vinduer-cards | Mit Livs Tidslinje / Vigtige Øjeblikke (undersider) | ✅ |
| **time-shift** | "Næste milepæl" (datter 14 → Træ) + "Tilbageblik" (mor døde, 2019 → Metal) | ✅ |
| **pull-quote** | "Tiden er ikke en linje. Den er en spiral..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Mine Relationer, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne sektion)

- motor-box (forklaring af tidsrejse-motor)
- date-preview (interaktiv dato-chips + person-pills)
- scenario-kort (3 use cases)
- vinduer-cards (links til undersider med gradient-footer)

---

## UNDERSIDE 5A: MIT LIVS TIDSLINJE

| Felt | Indhold |
|------|---------|
| **Linjer** | 1809-2025 |
| **Tone** | tone-vinduer (#6B5F7B / #8B7D9B / #a89bb3) |
| **Parent** | Mine Vinduer (Sektion 5) |
| **Formål** | 9 livsfaser i overblik — retrospektiv tidslinje |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Mit Livs Tidslinje" | ✅ |
| section-title | "Fra fødsel til visdom" | ✅ |
| section-sub | "Ni faser · Én sammenhængende historie" | ✅ |
| section-intro | "Dit liv er ikke en række tilfældige år..." | ✅ |
| Figur #1 (SVG) | **Livsbue** (9 fasecirkler i parabolbue, "DU ER HER" på fase 9) | ✅ |
| **feeling-box** | **"Det er svært at se sin egen historie"** — kapitler der føles endelige | ✅ |
| **featured** | **"Dit nuværende kapitel"** — Fase 9, Visdom, Vand, år 4 | ✅ |
| 9 phase-blocks | Fase 1-8 (normal) + Fase 9 (.current) — med element og årstal | ✅ |
| **quick-action** | **"Var der et øjeblik der ændrede noget?"** — tilføj til tidslinje | ✅ |
| insight-box | "Hvad tidslinjen viser" — Vand åbner og lukker rejsen (spiral) | ✅ |
| Figur #2 (SVG) | **Lagdelte ellipser** (DET DER SKETE → Det du husker → Det du forstår nu) | ✅ |
| **time-shift** | "Næste kapitel" (om 3 år) + "Din rejse" (56 år, 8 kapitler levet) | ✅ |
| **pull-quote** | "Hvert kapitel føltes uendeligt mens du levede det..." — Isabelle | ✅ |
| **cross-links** | Mine Vinduer, De ni livsfaser, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne underside)

- phase-blocks (9 rækker med fase-info, .current og .future states)

---

## UNDERSIDE 5B: VIGTIGE ØJEBLIKKE

| Felt | Indhold |
|------|---------|
| **Linjer** | 2027-2196 |
| **Tone** | tone-vinduer (#6B5F7B / #8B7D9B / #a89bb3) |
| **Parent** | Mine Vinduer (Sektion 5) |
| **Formål** | Gemte øjeblikke — journal over livets vigtige datoer |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Vigtige Øjeblikke" | ✅ |
| section-title | "De datoer der betyder noget" | ✅ |
| section-sub | "Gem · Forstå · Del" | ✅ |
| section-intro | "Nogle øjeblikke bærer mere end vi tror..." | ✅ |
| Figur #1 (SVG) | **Konstellation** (7 øjeblikke som prikker forbundet af linjer) | ✅ |
| **feeling-box** | **"Nogle datoer bærer mere end man tror"** — år vi ikke taler om, datoer vi undgår | ✅ |
| **featured** | **"Et gemt øjeblik"** — "Den dag mor døde" 14. marts 2019, Fase 8 Metal | ✅ |
| 4 moment-cards | Clara født (2004) / Vi mødtes (1998) / Mor døde (2019) / Karriereskift (2022) | ✅ |
| Figur #2 (SVG) | **Blomsterkronblade** (5 cirkler: Dato/Element/Fase/Følelse/Mening → ØJEBLIKKET) | ✅ |
| **quick-action** | **"Er der en dato du bærer med dig?"** — gem et øjeblik | ✅ |
| social-proof | "Hvad andre gemmer" — Børns fødsel 78%, Tab af nære 64%, Parforhold 59% | ✅ |
| **pull-quote** | "De øjeblikke vi bærer med os er ikke tilfældige..." — Isabelle | ✅ |
| **cross-links** | Mine Vinduer, Mit Livs Tidslinje, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter (kun denne underside)

- moment-cards (dato + titel + elementer + tekst + actions)
- social-proof i Vinduer-tone (ikke Praksis-tone)

---

## DE 6 CIRKEL-DETAIL-OVERLAYS (fra gammel app — MANGLER i preview)

Disse vises i den gamle app når man trykker på de koncentriske cirkler på forsiden (I dag). De er **ikke med i preview'en endnu**.

### 1. "DIG" (centrum-cirkel)

| Felt | Indhold |
|------|---------|
| **Titel** | "Dit liv — lige nu" |
| **Undertitel** | "Fem cyklusser løber gennem dig i dette øjeblik..." |
| **Info-boks** | DOMINERENDE ELEMENT: Vand. 4/5 cyklusser. |
| **Brødtekst** | 3 afsnit om at se sine cyklusser, forstå sig selv, ingen rigtig/forkert fase |
| **Anbefalinger** | 4 kort: Øvelse / Næring / Healinglyd / Refleksion |
| **Kanji** | Element-specifikt kinesisk tegn |
| **Status** | ❌ Mangler i preview |

### 2. LIVSFASE (ydre ring)

| Felt | Indhold |
|------|---------|
| **Titel** | "Fase 9: Visdom" |
| **Undertitel** | "Din livsfase former det dybeste lag i din energi..." |
| **Info-boks** | DIT ELEMENT: Vand. 56-63 år. |
| **Brødtekst** | Fase-specifik beskrivelse fra PHASE_DESCRIPTIONS |
| **Anbefalinger** | 4 kort: Øvelse / Næring / Healinglyd / Refleksion |
| **Status** | ❌ Mangler i preview |

### 3. ÅRSTID (ring 1)

| Felt | Indhold |
|------|---------|
| **Titel** | "Vinter" |
| **Undertitel** | "Naturen omkring dig bærer sit eget element..." |
| **Info-boks** | ÅRSTIDENS ELEMENT: Vand. |
| **Brødtekst** | Sæson-specifik fra SEASON_DESCRIPTIONS |
| **Anbefalinger** | 4 kort |
| **Status** | ❌ Mangler i preview |

### 4. MÅNED (ring 2)

| Felt | Indhold |
|------|---------|
| **Titel** | "Menstruation" ELLER "Februar" (afhængig af tracking) |
| **Undertitel** | "Din månedlige cyklus er en indre årstid..." ELLER "Månens cyklus spejler..." |
| **Info-boks** | CYKLUS-ELEMENT / MÅNENS ELEMENT |
| **Brødtekst** | Menstrual- eller måne-specifik beskrivelse |
| **Anbefalinger** | 4 kort |
| **Status** | ❌ Mangler i preview |

### 5. UGEDAG (ring 3)

| Felt | Indhold |
|------|---------|
| **Titel** | "Torsdag" (dynamisk) |
| **Undertitel** | "Hver dag i ugen bærer sin egen energi..." |
| **Info-boks** | DAGENS ELEMENT: Jord. |
| **Brødtekst** | Ugedags-specifik fra WEEKDAY_DESCRIPTIONS |
| **Anbefalinger** | 4 kort |
| **Status** | ❌ Mangler i preview |

### 6. ORGANUR (inderste ring)

| Felt | Indhold |
|------|---------|
| **Titel** | "Nyrer" (dynamisk) |
| **Undertitel** | "Kroppens organer følger døgnets rytme..." |
| **Info-boks** | AKTIVT ELEMENT: Vand. Kl. 17-19. |
| **Brødtekst** | Organ-specifik fra ORGAN_DESCRIPTIONS |
| **Anbefalinger** | 4 kort |
| **Status** | ❌ Mangler i preview |

### Fælles for alle 6 overlays

- Kanji (element-tegn) som visuel hero
- Back-knap "‹ Forside"
- Action bar (Del/Kopiér/Gem)
- Alle bruger `getDetailRecommendations(element)` for 4 anbefalingskort

---

## KOMPONENT-TRACKER — HVOR ER HVAD BRUGT?

### Kernekomponenter (★ = skal være i ALLE sektioner)

| Komponent | S1 | S2 | S3 | Sek1 | Sek2 | Sek3 | Sek4 | Sek5 | 5A | 5B |
|-----------|----|----|----|----|----|----|----|----|----|----|
| ★ feeling-box | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ★ featured | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ★ pull-quote | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ★ cross-links | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ★ lotus+tilbage | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | *(lotus: kun sorte streger, ingen farve)* |
| ★ figur #1 | — | — | — | ✅ | ✅ | ✅ | ⚠️ | ✅ | ✅ | ✅ |
| ★ figur #2 | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| quick-action | — | — | — | ✅ | ✅✅ | ✅ | ✅ | — | ✅ | ✅ |
| time-shift | — | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| insight-box | — | — | — | ✅ | ✅ | — | ✅ | — | ✅ | — |

### Specialkomponenter — hvor de optræder

| Komponent | Skærm(e) |
|-----------|----------|
| question-box | Side 1 |
| reveal-box | Side 1 |
| intro-callout | Side 1 |
| birth (input) | Side 1 |
| kanji | Side 2 |
| res (resultat) | Side 2 |
| profil-fold | Side 2 |
| alive-section | Side 2 |
| win (vinduer-teaser) | Side 2 |
| forside-card | Side 3 |
| praksis-card | Side 3 |
| vinduer-card | Side 3, Sektion 5 |
| checkin-card | Side 3 |
| element-analysis | Sektion 1 |
| profil-row | Sektion 2 |
| social-proof | Sektion 3, Underside 5B |
| breath-box | Sektion 3 |
| milestone-box | Sektion 4 |
| stat-row | Sektion 4 |
| motor-box | Sektion 5 |
| date-preview | Sektion 5 |
| scenario-kort | Sektion 5 |
| phase-blocks | Underside 5A |
| moment-cards | Underside 5B |

---

## FIGUR-INVENTAR

| # | Sektion | Figur #1 (øverst) | Type | Figur #2 (midtvejs) | Type |
|---|---------|-------------------|------|---------------------|------|
| 1 | Mine Cyklusser | krydsfelt-final.png | Billede | Bølge-tidslinje | SVG: 5 parallelle sinuskurver |
| 2 | Mine Relationer | relationer_blad_liberation_HQ.png | Billede | Dråbeformer (Jeres Møde) | SVG: 2 overlappende dråber |
| 3 | Min Praksis | din-krop.jpg | Billede/foto | Vanddråbe (3 lag) | SVG: Lagdelt dråbe |
| 4 | Min Rejse | (min-rejse-ikigai.png — TODO?) | Billede | Diamant (4 retninger) | SVG: 4-punkt stjerne |
| 5 | Mine Vinduer | vinduer-tid-lilla.png + krydsfelt | 2 billeder | Tidsspiral | SVG: Spiral med prikker |
| 5A | Mit Livs Tidslinje | Livsbue | SVG: 9 cirkler i bue | Lagdelte ellipser | SVG: 3 koncentriske ovaler |
| 5B | Vigtige Øjeblikke | Konstellation | SVG: Prikker + linjer | Blomsterkronblade | SVG: 5 overlappende cirkler |

---

## ISABELLE-CITATER (PULL-QUOTES)

| Sektion | Citat |
|---------|-------|
| Mine Cyklusser | "Dine cyklusser er ikke noget du skal mestre. De er noget du kan lytte til — som en melodi der allerede spiller." |
| Mine Relationer | "De mennesker der udfordrer dig mest, er ofte dem der bærer den energi du selv har brug for at møde." |
| Min Praksis | "Kroppen lyver aldrig. Den taler bare et sprog vi har glemt at lytte til." |
| Min Rejse | "Du behøver ikke forstå hele din rejse. Bare det næste skridt. Resten viser sig, når du er klar." |
| Mine Vinduer | "Tiden er ikke en linje. Den er en spiral — og de steder der gør ondt, er de steder der vil forstås." |
| Mit Livs Tidslinje | "Hvert kapitel føltes uendeligt mens du levede det. Men se — du er kommet videre. Hver gang." |
| Vigtige Øjeblikke | "De øjeblikke vi bærer med os er ikke tilfældige. De er de steder hvor livet insisterede på at blive mærket." |

---

## FEELING-BOX TEKSTER

| Sektion | Label | Smerte-emne |
|---------|-------|-------------|
| Mine Cyklusser | "Det du måske mærker" | Uro uden ord, trække sig ind, savne noget udefinerbart |
| Mine Relationer | "Det I måske mærker" | Tale forbi hinanden, noget forskudt, forskellige elementer |
| Min Praksis | "Det kroppen prøver at fortælle dig" | Træthed, øm lænd, uro i knoglerne |
| Min Rejse | "Det der er svært at se" | Kan ikke se mønsteret midt i det |
| Mine Vinduer | "Det der ikke har et sprog endnu" | År vi bærer, datoer der gør ondt |
| Mit Livs Tidslinje | "Det er svært at se sin egen historie" | Kapitler der føles endelige |
| Vigtige Øjeblikke | "Nogle datoer bærer mere end man tror" | Datoer vi undgår, hjertet slår hurtigere |

---

## CROSS-LINKS MØNSTER

| Sektion | Link 1 | Link 2 | Link 3 |
|---------|--------|--------|--------|
| Mine Cyklusser | Min Praksis | Mine Relationer | Min Rejse |
| Mine Relationer | Mine Cyklusser | Min Praksis | Min Rejse |
| Min Praksis | Mine Cyklusser | Mine Relationer | Min Rejse |
| Min Rejse | Mine Cyklusser | Mine Relationer | Min Praksis |
| Mine Vinduer | Mine Cyklusser | Mine Relationer | Min Rejse |
| Mit Livs Tidslinje | Mine Vinduer | De ni livsfaser | Min Rejse |
| Vigtige Øjeblikke | Mine Vinduer | Mit Livs Tidslinje | Min Rejse |

**Mønster:** Hovedsektioner linker til de 3 andre (aldrig til sig selv). Undersider linker til parent + søskende/relateret.

---

## GAMMEL APP — SKÆRME DER ENDNU IKKE HAR PREVIEW-VERSION

### Niveau 2 under Mine Cyklusser (6 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Cyklusser i Cyklusser | Climate box + 10 par-kort (TCM) | ❌ Mangler |
| De Ni Livsfaser | Cirkulær figur + 9 fasekort | ❌ Mangler |
| Livsfase-detail | Fuld fasedetalje (krop, sind, øvelse, kost) | ❌ Mangler |
| De Fire Uger | 4-sektors cirkel + ugekort | ❌ Mangler |
| Kontrolcyklussen | TCM-pentagon + elementtekster | ❌ Mangler |
| Samlede Indsigt | Daglig dyb cyklus-indsigt | ❌ Mangler |

### Niveau 2 under Mine Relationer (5 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Relationer (oversigt/tilføj/detalje) | VennFour + person-kort + tilføj-flow | ❌ Mangler |
| To Rytmer | 7-år vs 8-år sammenligning | ❌ Mangler |
| Tre Generationer | 3-generations VennThree | ❌ Mangler |
| Jeres Energi | Dato-baseret energi-sammenligning | ❌ Mangler |
| Epigenetik & Arv | Nedarvede mønstre | ❌ Mangler |

### Niveau 2 under Min Praksis (8 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Yin Yoga | Element-vælger + 3 poser per element | ❌ Mangler |
| Følelsernes Hjul | 5-zone hjul + detalje | ❌ Mangler |
| EFT Tapping | Tapping-meridian øvelse | ❌ Mangler |
| Mindfulness | Guidet mindfulness | ❌ Mangler |
| Refleksion | Venn + spørgsmål + noter | ❌ Mangler |
| Kost & Urter | Mad-anbefalinger per element | ❌ Mangler |
| Hvad har hjulpet andre | Community-data | ❌ Mangler |

### Niveau 2 under Min Rejse (5 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Min Udvikling | Tracking + graf + check-in | ❌ Mangler |
| Min Journal | Journal-indlæg | ❌ Mangler |
| Mine Favoritter | Gemte favoritter | ❌ Mangler |
| Mine Opdagelser | Bruger-indsigter | ❌ Mangler |
| Baggrundsviden | Uddannelsesindhold | ❌ Mangler |

### Andre skærme

| Skærm | Preview-status |
|-------|----------------|
| 6 cirkel-detail-overlays | ❌ Mangler |
| Søg | ❌ Mangler |
| Indstillinger (6 sub-routes) | ❌ Mangler |
| Om Isabelle | ❌ Mangler |

---

## NÆSTE SKRIDT — PRIORITERET

### Høj prioritet (kerneindhold)
1. 6 cirkel-detail-overlays (brugeren møder dem først)
2. Undersider for Sektion 1 (Mine Cyklusser) — mest indhold
3. Undersider for Sektion 2 (Mine Relationer) — mest unikt

### Medium prioritet
4. Undersider for Sektion 3 (Min Praksis)
5. Undersider for Sektion 4 (Min Rejse)

### Lav prioritet (utility-skærme)
6. Søg
7. Indstillinger
8. Om Isabelle

---

## ÆNDRINGSLOG

### v31 — 21. februar 2026

- **Arc Navigation tilføjet:** Flad cirkulær SVG-bue med 6 items (Hjem, Vinduer, Cyklusser, Relationer, Praksis, Rejse). Fixed position, synlig kun på de 5 sektioner + undersider (skjult under onboarding/forside). Aktiv item skifter automatisk baseret på scroll-position. Scroll ned=gjem, scroll op=vis.
- **Gammel bottom-nav fjernet:** Den flade 4-item nav (Lige nu/Vinduer/Søg/Profil) er erstattet af arc nav.
- **Lotus ændret:** Farve fjernet — nu kun sorte streger. CSS filter: `saturate(0) contrast(3) brightness(1.15)` + `mix-blend-mode: multiply`. Hvid baggrund usynlig pga. multiply blend mode mod `#FDFCFB`.
- **Sektions-IDs tilføjet:** `sek-cyklusser`, `sek-relationer`, `sek-praksis`, `sek-rejse`, `sek-vinduer`, `sections-start` — bruges til scroll-baseret navigation.

---

*Brug dette dokument til at tracke hvad der er bygget og hvad der mangler.*
*Se også: PREVIEW-DESIGNSYSTEM.md (stilguide) og FIGUR-KATALOG.md (figur-reference).*
