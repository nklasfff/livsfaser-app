# PREVIEW-KAPITEL-LOG — De 9 Livsfasers Energi

*Komplet inventar over alle skærme, komponenter og indhold i preview-komplet.html*
*Opdateret: 21. februar 2026 · v36*

---

## OVERBLIK

| Kategori | Antal | Status |
|----------|-------|--------|
| Forsider (Side 1-3) | 3 | ✅ Bygget |
| Hovedsektioner (1-5) | 5 | ✅ Bygget |
| Undersider (Vinduer) | 2 | ✅ Bygget |
| Undersider (Cyklusser) | 4 | ✅ Bygget |
| Undersider (Relationer) | 4 | ✅ Bygget |
| Undersider (Praksis) | 7 | ✅ Bygget |
| Undersider (Rejse) | 5 | ✅ Bygget |
| Cirkel-detail-overlays | 6 | ✅ Bygget |
| **Total i preview nu** | **36** | |
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

## UNDERSIDE 1A: CYKLUSSER I CYKLUSSER

| Felt | Indhold |
|------|---------|
| **Tone** | tone-cyklusser (#6c82a9 / #889ec3 / #9cabc3) |
| **Parent** | Mine Cyklusser (Sektion 1) |
| **Formål** | Vise hvordan 5 samtidige cyklusser interagerer indbyrdes (TCM-par) |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Cyklusser i Cyklusser" | ✅ |
| section-title | "N&aring;r fem rytmer m&oslash;des i dig" | ✅ |
| section-sub | "Ti par &middot; Tre typer &middot; &Eacute;t krydsfelt" | ✅ |
| section-intro | Poetisk intro om at b&aelig;re fem rytmer | ✅ |
| Figur #1 (SVG) | **5-blads blomst** (roterede ellipser, ét for hvert cykluspar) | ✅ |
| **feeling-box** | **"Den uro ingen kan forklare"** — n&aring;r cyklusser tr&aelig;kker i forskellige retninger | ✅ |
| **featured** | **"Dit indre klima"** — Fuld resonans, 4 Vand + 1 Træ | ✅ |
| klima-diagram | Tre kategorier: n&aelig;rer (5), udfordrer (3), spejler (2) med bjælker | ✅ |
| 3 grupper kort | "Det der n&aelig;rer" (5 par), "Det der udfordrer" (3 par), "Det der spejler" (2 par) | ✅ |
| **quick-action** | **"M&aelig;rk efter lige nu"** — krop-scanning | ✅ |
| insight-box | "Dit krydsfelt" — forklaring af resonans | ✅ |
| Figur #2 (SVG) | **Str&oslash;mmende vandstr&oslash;mme** (5 parallelle streams med m&oslash;depunkter) | ✅ |
| **time-shift** | N&aelig;ste cyklusskift + S&aelig;sonskift | ✅ |
| **pull-quote** | "N&aring;r dine cyklusser m&oslash;des i stilhed..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Min Praksis, Mine Relationer | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter

- klima-diagram (3 bjælker: nærer/udfordrer/spejler)
- 10 par-kort fordelt i 3 grupper

---

## UNDERSIDE 1B: KROPPENS STORE OVERGANGE

| Felt | Indhold |
|------|---------|
| **Tone** | tone-cyklusser (#6c82a9 / #889ec3 / #9cabc3) |
| **Parent** | Mine Cyklusser (Sektion 1) |
| **Formål** | Vise livets store overgange mellem faser — vendepunkter, transformationer |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "Kroppens Store Overgange" | ✅ |
| section-title | "De &aring;r hvor alt forandres" | ✅ |
| section-sub | "Vendepunkter &middot; Forvandling &middot; Nye begyndelser" | ✅ |
| section-intro | Poetisk intro om kroppens vendepunkter | ✅ |
| Figur #1 (SVG) | **Overgangs-bue** (9 cirkler i bue med 4 forstørrede overgangspunkter) | ✅ |
| **feeling-box** | **"Det &aring;r hvor kroppen &aelig;ndrede sig"** — pubertet, moderskab, overgangsalder | ✅ |
| **featured** | **"Din overgang lige nu"** — Fase 8→9, Metal til Vand, 56 &aring;r | ✅ |
| 4 overgangs-kort | Pubertet (7→14), Modning (28→35), Overgangsalder (42→49), Visdommen (56→63) | ✅ |
| **quick-action** | **"Hvad er din krops st&oslash;rste forandring?"** — refleksion | ✅ |
| insight-box | "Den overgang du er i nu" — Metal→Vand transformation | ✅ |
| Figur #2 (SVG) | **Chrysalis** (metamorfose-figur: kokon der åbner sig) | ✅ |
| **time-shift** | N&aelig;ste overgang + Tilbageblik | ✅ |
| **pull-quote** | "Overgangene er ikke det der g&aring;r i stykker..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, De Ni Livsfaser, Min Praksis | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter

- 4 overgangs-kort (specifikt for livets vendepunkter)
- Chrysalis-figur (unik metamorfose-illustration)

---

## UNDERSIDE 1C: DE NI LIVSFASER

| Felt | Indhold |
|------|---------|
| **Tone** | tone-cyklusser (#6c82a9 / #889ec3 / #9cabc3) |
| **Parent** | Mine Cyklusser (Sektion 1) |
| **Formål** | Overblik over alle 9 livsfaser — narrativ rejse fra fødsel til visdom |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "De Ni Livsfaser" | ✅ |
| section-title | "Ni kapitler &middot; &Eacute;n historie" | ✅ |
| section-sub | "Fra f&oslash;dsel til visdom" | ✅ |
| section-intro | Poetisk intro om livets ni kapitler | ✅ |
| Figur #1 (SVG) | **Fasehjulet** (9 cirkler i ring med elementer og fasenavne) | ✅ |
| **feeling-box** | **"Kapitlet du ikke selv valgte"** — vi v&aelig;lger ikke vores fase | ✅ |
| **featured** | **"Dit kapitel"** — Fase 9 · Visdom · Vand | ✅ |
| 3 narrative grupper | De tidlige &aring;r (1-3), Livets midte (4-6), Den modne rejse (7-9) | ✅ |
| 9 fase-kort | Alle 9 faser med element, &aring;rstal, beskrivelse | ✅ |
| Figur #2 (SVG) | **Elementernes vandring** (vertikal zigzag gennem 5 elementer) | ✅ |
| insight-box | "Cirklen der slutter sig" — Vand åbner og lukker | ✅ |
| **pull-quote** | "Hvert kapitel bærer sin egen gave..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Kroppens Store Overgange, Min Rejse | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter

- 3 narrative grupper (tidlige/midte/modne) med group-labels
- 9 fase-kort med "Du er her"-badge på Fase 9
- Elementernes vandring (zigzag SVG)

---

## UNDERSIDE 1D: DE FIRE UGER

| Felt | Indhold |
|------|---------|
| **Tone** | tone-cyklusser (#6c82a9 / #889ec3 / #9cabc3) |
| **Parent** | Mine Cyklusser (Sektion 1) |
| **Formål** | Den månedlige cyklus — menstruation eller måne-cyklus |

### Komponenter brugt

| Komponent | Indhold | ✓ |
|-----------|---------|---|
| section-eyebrow | "De Fire Uger" | ✅ |
| section-title | "M&aring;nens fire ansigter" | ✅ |
| section-sub | "Nym&aring;ne · Tiltagende · Fuldm&aring;ne · Aftagende" | ✅ |
| section-intro | Poetisk intro om den månedlige cyklus som indre årstid | ✅ |
| Figur #1 (SVG) | **4-sektors cirkel** (månedens 4 faser i cirkel) | ✅ |
| **feeling-box** | **"Den rytme du m&aring;ske har glemt"** — efter menopausen, månecyklus | ✅ |
| **featured** | **"Din uge"** — Nymåne · Vand · Stilhed og indadvendthed | ✅ |
| 4 ugekort | Nymåne/Tiltagende/Fuldmåne/Aftagende med element og kvalitet | ✅ |
| dual-cycle box | Anerkendelse af både menstruation og månecyklus | ✅ |
| Figur #2 (SVG) | **Energi-kurven** (parabolisk bue fra stilhed til intensitet og tilbage) | ✅ |
| insight-box | "To cyklusser, ét sprog" — menstruation og måne | ✅ |
| **pull-quote** | "Uanset om du bløder eller ej..." — Isabelle | ✅ |
| **cross-links** | Mine Cyklusser, Cyklusser i Cyklusser, Min Praksis | ✅ |
| Lotus + Tilbage | ✅ | ✅ |

### Unikke komponenter

- 4 månefase-kort (persona er 60, post-menopause → månecyklus)
- Energi-kurven (parabolisk bue)
- Dual-cycle anerkendelse

---

## DE 6 CIRKEL-DETAIL-OVERLAYS (fra forsiden)

Vises når man trykker på de koncentriske cirkler på forsiden. Placeret mellem Side 3 (Forside) og BIG DIVIDER.

### 0B. DIT LIV (centrum-cirklen)

| Felt | Indhold |
|------|---------|
| **Titel** | "Dit samlede billede" |
| **Undertitel** | Alt det du bærer — samlet i ét øjeblik |
| **Kanji** | 水 (Vand — dominant element) |
| **Info-boks** | DOMINERENDE ELEMENT: Vand. Flydende, dyb, intuitiv, modtagelig |
| **Brødtekst** | 4/5 cyklusser peger mod Vand — resonans |
| **5 cyklus-kort** | Livsfase/Årstid/Måned/Ugedag/Organur |
| **4 anbefalinger** | Butterfly / Sort sesam / Chuiii / Refleksion |
| **Status** | ✅ Bygget |

### 0C. LIVSFASE (ydre ring)

| Felt | Indhold |
|------|---------|
| **Titel** | "Fase 9: Visdom" |
| **Undertitel** | 56–63 år · Vandets tilbagevenden |
| **Kanji** | 水 (Vand) |
| **Beskrivelse** | PHASE_DESCRIPTIONS[9] — exact tekst bevaret |
| **Feeling-box** | "I den niende fase kan det føles som om alt falder på plads..." |
| **3 info-kort** | Alder / Element / Organpar |
| **4 anbefalinger** | Butterfly / Sort sesam / Chuiii / Refleksion |
| **Status** | ✅ Bygget |

### 0D. ÅRSTID (ring 1)

| Felt | Indhold |
|------|---------|
| **Titel** | "Vinter" |
| **Undertitel** | Vandets årstid · December–marts |
| **Kanji** | 水 (Vand) |
| **Beskrivelse** | SEASON_DESCRIPTIONS['Vinter'] — exact tekst bevaret |
| **Måned-tekst** | MONTH_DESCRIPTIONS['Februar'] — exact tekst bevaret |
| **3 info-kort** | Periode / Element / Organer |
| **4 anbefalinger** | Butterfly / Sort sesam / Chuiii / Refleksion |
| **Status** | ✅ Bygget |

### 0E. MÅNED (ring 2)

| Felt | Indhold |
|------|---------|
| **Titel** | "Februar · Nymåne" |
| **Undertitel** | Vandets måned · Månecyklussens uge 1 |
| **Kanji** | 水 (Vand) |
| **Måned-beskrivelse** | MONTH_DESCRIPTIONS['Februar'] — exact tekst bevaret |
| **Månecyklus-tekst** | Nymåne: Indre vinter, stilhed og fornyelse |
| **3 info-kort** | Måned / Månefase / Kvalitet |
| **4 anbefalinger** | Sleeping Swan / Misosuppe / Chuiii / Refleksion |
| **Status** | ✅ Bygget |

### 0F. UGEDAG (ring 3)

| Felt | Indhold |
|------|---------|
| **Titel** | "Lørdag" |
| **Undertitel** | Jordens dag · Saturns dag |
| **Kanji** | 土 (Jord) |
| **Beskrivelse** | WEEKDAY_DESCRIPTIONS['Lørdag'] — exact tekst bevaret |
| **3 info-kort** | I dag / I morgen / Kvalitet |
| **4 anbefalinger** | Child's Pose / Søde rodfrugter / Huuuuu / Refleksion (JORD) |
| **Status** | ✅ Bygget |

### 0G. ORGANUR (inderste ring)

| Felt | Indhold |
|------|---------|
| **Titel** | "Nyrer" |
| **Undertitel** | 17–19 · Vandets organ |
| **Kanji** | 水 (Vand) |
| **Beskrivelse** | ORGAN_DESCRIPTIONS['Nyrer'] — exact tekst bevaret |
| **12 organur-grid** | Alle 12 organer i 2-kolonne grid, "NU" markeret |
| **3 info-kort** | Tidsvindue / Element / Næste skift |
| **4 anbefalinger** | Caterpillar / Ingefærte / Chuiii / Refleksion |
| **Status** | ✅ Bygget |

### Fælles for alle 6 overlays

- Kanji (element-tegn) som visuel hero i SVG-cirkel
- Element-infoboks med kvalitetsbeskrivelse
- Feeling-box (smerte-adressering)
- 4 anbefalingskort: Øvelse / Næring / Healinglyd / Refleksion
- Alle tekster fra gammel app bevaret ordret (HTML-entities for æøå)
- Lotus + Tilbage til toppen

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
| 1A | Cyklusser i Cyklusser | 5-blads blomst | SVG: Roterede ellipser | Strømmende vandstrømme | SVG: 5 parallelle streams |
| 1B | Kroppens Store Overgange | Overgangs-bue | SVG: 9 cirkler + 4 highlights | Chrysalis | SVG: Metamorfose-figur |
| 1C | De Ni Livsfaser | Fasehjulet | SVG: 9 cirkler i ring | Elementernes vandring | SVG: Vertikal zigzag |
| 1D | De Fire Uger | 4-sektors cirkel | SVG: Månens 4 faser | Energi-kurven | SVG: Parabolisk bue |
| 2A | Relationer lige nu | Forbindelsesfelt | SVG: DIG + 2 relationer radialt | To-søjle sammenligning | SVG: Nærer vs Udfordrer |
| 2B | To Rytmer | Forskydningstidslinje | SVG: Dual-track faseblokke | Møde-kompas | SVG: 2 cirkler med progress |
| 2C | Tre Generationer | Stammertræ | SVG: 3 cirkler vertikalt | Generationsbølger | SVG: 3 lagdelte bølger |
| 2D | Jeres Energi | Pentagon | SVG: 5 elementer + pile | Tidsvindue | SVG: Portal med dato |
| 3A | Yin Yoga | Meridian-silhuet | SVG: Kropsform + energilinjer | Element-lotus | SVG: 5 kronblade i ring |
| 3B | Følelsernes Hjul | Følelseshjul | SVG: 5 zoner (frygt/vrede/glæde/bekymring/sorg) | Krop-element-kort | SVG: Kropsfigur med 5 zoner |
| 3C | EFT Tapping | Tapping-punkter | SVG: Ansigt/krop med 9 nummererede punkter | Beroligelses-bølge | SVG: Urolig→rolig kurve |
| 3D | Mindfulness | Åndedræts-cirkler | SVG: Koncentriske pulserende ringe | Bevidsthedslag | SVG: 3 horisontale lag (tanker/krop/stilhed) |
| 3E | Refleksion | Spejl-figur | SVG: To halvdele (ydre selv/indre selv) | Stilhedens spiral | SVG: Indadgående spiral med spørgsmål |
| 3F | Kost & Urter | Elementernes tallerken | SVG: Cirkel delt i 5 sektorer | Sæson-næring | SVG: 4 årstids-kolonner med madvarer |
| 3G | Hvad har hjulpet andre | Fællesskabs-cirkler | SVG: Overlappende fase-bobler | Erfarings-strøm | SVG: Vertikal flow med citater |
| 4A | Min Udvikling | Bølgeform (energirytme) | SVG: Sinuskurve med DIG NU-markør | Energi-søjler (bar chart) | HTML/CSS: 8 bars + note |
| 4B | Min Journal | Sider der folder sig ud | SVG: Lagvise ellipser (tid) | Bog-billede | Billede: min-journal-bog.jpeg |
| 4C | Mine Favoritter | Samlede sten | SVG: 5 organiske former | Blad-billede | Billede: favoritter_blad_HQ.png |
| 4D | Mine Opdagelser | Konstellationer | SVG: Prikker forbundet til mønstre | Cirkler-billede | Billede: opdagelser_cirkler_HQ.png |
| 4E | Baggrundsviden | Vidensstrømme | SVG: 5 floder samlet i ét punkt | Kontrolcyklus-billede | Billede: kontrolcyklus_lilla.svg |

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
| Cyklusser i Cyklusser | Climate box + 10 par-kort (TCM) | ✅ Underside 1A |
| De Ni Livsfaser | Cirkulær figur + 9 fasekort | ✅ Underside 1C |
| Livsfase-detail | Fuld fasedetalje (krop, sind, øvelse, kost) | ❌ Mangler |
| De Fire Uger | 4-sektors cirkel + ugekort | ✅ Underside 1D |
| Kontrolcyklussen | TCM-pentagon + elementtekster | ❌ Mangler |
| Samlede Indsigt | Daglig dyb cyklus-indsigt | ❌ Mangler |
| Kroppens Store Overgange | Overgange mellem faser | ✅ Underside 1B (ny) |

### Niveau 2 under Mine Relationer (5 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Relationer lige nu | Forbindelsesfelt + to-søjle sammenligning | ✅ Underside 2A |
| To Rytmer | Forskydningstidslinje + møde-kompas | ✅ Underside 2B |
| Tre Generationer | Stammertræ + generationsbølger | ✅ Underside 2C |
| Jeres Energi | Pentagon + tidsvindue | ✅ Underside 2D |
| Epigenetik & Arv | Nedarvede mønstre | ❌ Mangler |

### Niveau 2 under Min Praksis (8 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Yin Yoga | Meridian-silhuet + element-lotus + 3 poser VAND + 4 andre elementer | ✅ Underside 3A |
| Følelsernes Hjul | Følelseshjul + krop-element-kort + 5 følelsesfelter + anbefalinger | ✅ Underside 3B |
| EFT Tapping | Tapping-punkter + beroligelses-bølge + 9 punkter + 5 element-sætninger | ✅ Underside 3C |
| Mindfulness | Åndedræts-cirkler + bevidsthedslag + 5 element-meditationer + årstider | ✅ Underside 3D |
| Refleksion | Spejl-figur + stilhedens spiral + 3 fase-spørgsmål + 5 element-spørgsmål + skriveøvelser | ✅ Underside 3E |
| Kost & Urter + Healinglyd | Elementernes tallerken + sæson-næring + 4 VAND-madvarer + 5 healinglyde | ✅ Underside 3F |
| Hvad har hjulpet andre | Fællesskabs-cirkler + erfarings-strøm + social proof bars + anonyme citater | ✅ Underside 3G |

### Niveau 2 under Min Rejse (5 skærme)

| Skærm | Indhold i gammel app | Preview-status |
|-------|---------------------|----------------|
| Min Udvikling | Tracking + graf + check-in | ✅ Underside 4A |
| Min Journal | Journal-indlæg | ✅ Underside 4B |
| Mine Favoritter | Gemte favoritter | ✅ Underside 4C |
| Mine Opdagelser | Bruger-indsigter | ✅ Underside 4D |
| Baggrundsviden | Uddannelsesindhold | ✅ Underside 4E |

### Andre skærme

| Skærm | Preview-status |
|-------|----------------|
| 6 cirkel-detail-overlays | ✅ Bygget (0B-0G) |
| Søg | ❌ Mangler |
| Indstillinger (6 sub-routes) | ❌ Mangler |
| Om Isabelle | ❌ Mangler |

---

## NÆSTE SKRIDT — PRIORITERET

### Høj prioritet (kerneindhold)
1. ~~6 cirkel-detail-overlays (brugeren møder dem først)~~ ✅ DONE (0B-0G)
2. ~~Undersider for Sektion 1 (Mine Cyklusser)~~ ✅ DONE (4 undersider)
3. ~~Undersider for Sektion 2 (Mine Relationer)~~ ✅ DONE (4 undersider)

### Medium prioritet
4. ~~Undersider for Sektion 3 (Min Praksis)~~ ✅ DONE (7 undersider)
5. ~~Undersider for Sektion 4 (Min Rejse)~~ ✅ DONE (5 undersider)

### Lav prioritet (utility-skærme)
6. Søg
7. Indstillinger
8. Om Isabelle

---

## ÆNDRINGSLOG

### v36 — 21. februar 2026

- **6 cirkel-detail-overlays bygget (0B-0G):**
  - 0B: Dit Liv (centrum — samlede billede, 5 cyklus-kort, Vand-dominant)
  - 0C: Livsfase (Fase 9: Visdom, PHASE_DESCRIPTIONS[9] exact tekst)
  - 0D: Årstid (Vinter, SEASON_DESCRIPTIONS + MONTH_DESCRIPTIONS exact tekst)
  - 0E: Måned (Februar + Nymåne, måne-cyklus, dobbelt Vand)
  - 0F: Ugedag (Lørdag, JORD-element, WEEKDAY_DESCRIPTIONS exact tekst)
  - 0G: Organur (Nyrer 17-19, ORGAN_DESCRIPTIONS exact tekst + 12-organ grid)
- **Alle tekster fra gammel app bevaret ordret** — PHASE/SEASON/WEEKDAY/ORGAN/MONTH_DESCRIPTIONS
- **Kanji-tegn som visuel hero:** 水 (Vand), 土 (Jord) i SVG-cirkler
- **Element-specifikke anbefalinger:** INSIGHT_YOGA, INSIGHT_FOOD, HEALING_SOUNDS — varieret per overlay
- **Organur-overlay har 12-organ grid** med "NU"-markør på Nyrer 17-19
- **Feeling-boxes på alle overlays** — smerte-adressering tilpasset hvert emne
- **tone-rejse farvebjælke tilføjet** til alle 5 Min Rejse undersider (4A-4E) — var glemt
- **Total i preview nu: 36 sider** (var 30)

### v35 — 21. februar 2026

- **5 undersider til Min Rejse bygget:**
  - 4A: Min Udvikling (bølgeform + energi-søjler + stat-bokse + elementbalance + check-in form)
  - 4B: Min Journal (sider-figur + bog-billede + refleksions-boks + 3 journal-indlæg + mønstre)
  - 4C: Mine Favoritter (samlede-sten + blad-billede + tab-filter + 13 favoritkort med hjerter)
  - 4D: Mine Opdagelser (konstellationer + cirkler-billede + 6 opdagelses-indlæg i tidslinje)
  - 4E: Baggrundsviden (vidensstrømme + kontrolcyklus-billede + 3 traditioner + 5 tradKort + 3 videnskab)
- **Alle 5 beholder gammel figur + får ny SVG-figur** — per brugerens instruktion
- **Alt indhold fra gammel app tilpasset ny stil** — chips, insight-boxes, time-shifts, pull-quotes, cross-links
- **10 nye figurer:** bølgeform, sider-der-folder-sig-ud, samlede-sten, konstellationer, vidensstrømme + 5 gamle billeder beholdt
- **Persona-data genbrugt:** 60-årig kvinde i Fase 9, 47 check-ins, 8 refleksioner, 14d streak, Vand-dominans
- **FIGUR-INVENTAR opdateret** med 10 nye figurer (2 per underside)
- **GAMMEL APP sektion opdateret** — 5 Rejse-undersider markeret som bygget
- **Total i preview nu: 30 sider** (var 25)

### v34 — 21. februar 2026

- **7 undersider til Min Praksis bygget:**
  - 3A: Yin Yoga (meridian-silhuet + element-lotus)
  - 3B: Følelsernes Hjul (følelseshjul + krop-element-kort)
  - 3C: EFT Tapping (tapping-punkter + beroligelses-bølge)
  - 3D: Mindfulness (åndedræts-cirkler + bevidsthedslag)
  - 3E: Refleksion (spejl-figur + stilhedens spiral)
  - 3F: Kost & Urter + Healinglyd (elementernes tallerken + sæson-næring)
  - 3G: Hvad har hjulpet andre (fællesskabs-cirkler + erfarings-strøm)
- **Alle 7 har unikt design** — 14 nye unikke figurer, ingen gentagelser
- **Healinglyd integreret i 3F** (Kost & Urter) da den ikke har selvstændig underside
- **Fuld volumen på alle sider** — også de der var korte i den gamle app
- **Nye figurtyper:** meridian-silhuet, element-lotus, følelseshjul, krop-element-kort, tapping-punkter, beroligelses-bølge, åndedræts-cirkler, bevidsthedslag, spejl, stilhedens spiral, elementernes tallerken, sæson-næring, fællesskabs-cirkler, erfarings-strøm
- **FIGUR-INVENTAR opdateret** med 14 nye figurer (2 per underside)
- **GAMMEL APP sektion opdateret** — 7 Praksis-undersider markeret som bygget
- **Total i preview nu: 25 sider** (var 18)

### v33 — 21. februar 2026

- **4 undersider til Mine Relationer bygget:**
  - 2A: Relationer lige nu (forbindelsesfelt + to-søjle sammenligning)
  - 2B: To Rytmer (forskydningstidslinje + møde-kompas)
  - 2C: Tre Generationer (stammertræ + generationsbølger)
  - 2D: Jeres Energi (pentagon + tidsvindue/portal)
- **Alle 4 har unikt design** — nye figurtyper: forbindelsesfelt, to-søjle, dual-track, stammertræ, bølge-overlay, pentagon, tidsportal
- **Persona-data:** Dig (60, Vand), Martin (43, Jord), Inge (85, Vand), Clara (32, Ild)
- **Samtaleåbnere fra TCM** integreret i To Rytmer (3 VAND-baserede samtaleåbnere)
- **FIGUR-INVENTAR opdateret** med 8 nye figurer (2 per underside)
- **GAMMEL APP sektion opdateret** — 4 Relationer-undersider markeret som bygget

### v32 — 21. februar 2026

- **4 undersider til Mine Cyklusser bygget:**
  - 1A: Cyklusser i Cyklusser (5-blads blomst + strømmende vandstrømme)
  - 1B: Kroppens Store Overgange (overgangs-bue + chrysalis)
  - 1C: De Ni Livsfaser (fasehjulet + elementernes vandring)
  - 1D: De Fire Uger (4-sektors cirkel + energi-kurven)
- **Alle 4 har unikt design** — forskellige figurtyper, narrativ tilgang, og stemning
- **FIGUR-INVENTAR opdateret** med 8 nye figurer (2 per underside)
- **GAMMEL APP sektion opdateret** — 3 Cyklusser-undersider markeret som bygget + 1 ny (KSO)

### v31 — 21. februar 2026

- **Arc Navigation tilføjet:** Flad cirkulær SVG-bue med 6 items (Hjem, Vinduer, Cyklusser, Relationer, Praksis, Rejse). Fixed position, synlig kun på de 5 sektioner + undersider (skjult under onboarding/forside). Aktiv item skifter automatisk baseret på scroll-position. Scroll ned=gjem, scroll op=vis.
- **Gammel bottom-nav fjernet:** Den flade 4-item nav (Lige nu/Vinduer/Søg/Profil) er erstattet af arc nav.
- **Lotus ændret:** Farve fjernet — nu kun sorte streger. CSS filter: `saturate(0) contrast(3) brightness(1.15)` + `mix-blend-mode: multiply`. Hvid baggrund usynlig pga. multiply blend mode mod `#FDFCFB`.
- **Sektions-IDs tilføjet:** `sek-cyklusser`, `sek-relationer`, `sek-praksis`, `sek-rejse`, `sek-vinduer`, `sections-start` — bruges til scroll-baseret navigation.

---

*Brug dette dokument til at tracke hvad der er bygget og hvad der mangler.*
*Se også: PREVIEW-DESIGNSYSTEM.md (stilguide) og FIGUR-KATALOG.md (figur-reference).*
