# PREVIEW-DESIGNSYSTEM — De 9 Livsfasers Energi

*Komplet stilguide for preview-komplet.html*
*Opdateret: 21. februar 2026 · v31*

> **Dette dokument er den eneste kilde til sandhed for preview-designet.**
> Læs det FØR du redigerer preview-komplet.html. Ingen undtagelser.

---

## INDHOLD

1. [Fonts](#1-fonts)
2. [Farver & Tone-familier](#2-farver--tone-familier)
3. [Sidestruktur & Navigation](#3-sidestruktur--navigation)
4. [Sektionens Anatomi](#4-sektionens-anatomi)
5. [Komponent-katalog](#5-komponent-katalog)
6. [Figurer & Illustrationer](#6-figurer--illustrationer)
7. [Typografi-skala](#7-typografi-skala)
8. [Spacing & Layout](#8-spacing--layout)
9. [Gennemgående Mønstre](#9-gennemgående-mønstre)
10. [Forskelle fra Gammel App](#10-forskelle-fra-gammel-app)

---

## 1. FONTS

### Kun 2 fonts — ingen andre

```
Playfair Display  — serif, poetisk, Isabelles stemme
DM Sans           — sans-serif, funktionel, labels og brødtekst
```

### Google Fonts import (præcise vægte)

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### Hvornår bruger vi hvad?

| Playfair Display (serif) | DM Sans (sans-serif) |
|--------------------------|----------------------|
| Alle titler og overskrifter | Labels (UPPERCASE) |
| Featured-tekst (hvid på gradient) | Brødtekst / beskrivelser |
| Pull-quotes (Isabelle-citater) | Metadata (datoer, årstal) |
| Feeling-box tekst | Knaptekst |
| Figur-captions | Figur-labels (UPPERCASE) |
| Insight-box tekst | Navigation |
| Card-titler | Card-beskrivelser |
| Quick-action titler | Quick-action beskrivelser |
| SVG-tekst (poetisk) | SVG-labels (UPPERCASE) |

### Kursiv vs normal

| Kursiv (italic) | Normal (non-italic) |
|-----------------|---------------------|
| ALLE Playfair Display tekster er italic | DM Sans er ALDRIG italic... |
| (Eneste undtagelse: header-title er italic 400) | ...undtagen: featured-sub, cross-link, sp-caption, date-preview-hint |

### Vægte

```
DM Sans 300  — brødtekst, beskrivelser, metadata (det meste)
DM Sans 400  — labels, navigation, knapper, breath-steps
DM Sans 500  — fremhævet tekst (strong i profil-fold, feelings)

Playfair 400 — alle titler, featured, quotes, captions
Playfair 500 — ikke brugt i praksis (importeret som reserve)
```

### VIGTIG REGEL
> Playfair Display = altid italic, altid poetisk
> DM Sans = altid weight 300 medmindre det er en label (400) eller fremhævet (500)

---

## 2. FARVER & TONE-FAMILIER

### Baggrund

```css
body { background: #FDFCFB; }  /* Varm off-white — IKKE rent hvid */
```

### Global tekstfarve-skala

```
#2a2520  — mørkeste tekst (header-title, visse card-titles)
#3a3530  — card-titles inden for tone-sektioner
#555     — medium tekst (knapper, question-box)
#666     — profil-fold værdier
#777     — feelings brødtekst, intro-callout tekst
#888     — primær brødtekst (section-intro, card-desc, body-text)
#999     — sekundær beskrivelser (card-desc, quick-action-desc)
#aaa     — tertiær metadata (profil-meta, time-shift-when, birth-sub)
#bbb     — svag tekst (section-num, page-label, stat-label, profil-meta)
#ccc     — svagest tekst (pull-quote-attr, cross-links-label, card-arrow)
```

### De 5 tone-familier

Hver sektion har sin egen farvefamilie med 3 hovedfarver + RGBA-variationer:

#### MINE CYKLUSSER (blå)

```
Mørk (titler):     #6c82a9
Medium (gradient):  #889ec3
Lys (labels):       #9cabc3
RGBA-base:          108, 130, 169

Featured gradient:  linear-gradient(135deg, #6c82a9, #889ec3)
```

#### MINE RELATIONER (lilla-blå)

```
Mørk (titler):     #7b7a9e
Medium (gradient):  #9e9db8
Lys (labels):       #a8a3be
RGBA-base:          123, 122, 158

Featured gradient:  linear-gradient(135deg, #7b7a9e, #9e9db8)
```

#### MIN PRAKSIS (grøn-grå)

```
Mørk (titler):     #7a908b
Medium (gradient):  #9db3ad
Lys (labels):       #a3b3ae
RGBA-base:          122, 144, 139

Featured gradient:  linear-gradient(135deg, #7a908b, #9db3ad)
```

#### MIN REJSE (blå-grå)

```
Mørk (titler):     #8a96a9
Medium (gradient):  #a8b2c1
Lys (labels):       #adb5c1
RGBA-base:          138, 150, 169

Featured gradient:  linear-gradient(135deg, #8a96a9, #a8b2c1)
```

#### MINE VINDUER (mørk lilla)

```
Mørk (titler):     #6B5F7B
Medium (gradient):  #8B7D9B
Lys (labels):       #a89bb3
RGBA-base:          107, 95, 123

Featured gradient:  linear-gradient(135deg, #6B5F7B, #8B7D9B)
```

### RGBA-opacitets-skala (gælder ALLE 5 toner)

Erstat `{r,g,b}` med sektionens RGBA-base:

```
rgba({r,g,b}, 0.02)  — person-pill baggrund, subtileste lag
rgba({r,g,b}, 0.03)  — wave-timeline/figur-boks baggrund, phase-block bg
rgba({r,g,b}, 0.04)  — profil-fold, feelings, insight-box, moment-card bg, stat-box bg
rgba({r,g,b}, 0.05)  — question-box, reveal-box, element-analysis, social-proof bg
rgba({r,g,b}, 0.06)  — quick-action baggrund (start), phase-block.current bg
rgba({r,g,b}, 0.07)  — wave-timeline kant, intro-callout bg (start)
rgba({r,g,b}, 0.08)  — profil-fold kant, feelings kant, stat-box kant, time-shift kant
rgba({r,g,b}, 0.10)  — card kant, quick-action kant, moment-card kant
rgba({r,g,b}, 0.12)  — cross-link kant
rgba({r,g,b}, 0.14)  — vinduer-card kant
rgba({r,g,b}, 0.15)  — phase-block.current kant, date-chip kant, page-divider linje
rgba({r,g,b}, 0.18)  — profil-fold indre border, arc-nav border
rgba({r,g,b}, 0.20)  — breath-circle border
rgba({r,g,b}, 0.22)  — person-pill.active kant, bottom-nav icon aktiv bg
rgba({r,g,b}, 0.25)  — knap-kanter, person-pill-dot
rgba({r,g,b}, 0.28)  — accent-line
```

### Andre specifikke farver

```
#5A74A5   — Forsiden: eyebrow, card-label, card-link (kun Side 3)
#6B8273   — Praksis-card label (kun forsiden)
#c0b5cc   — Phase-block svag tekst (Vinduer)
#b5adc0   — Moment-elements, phase-block-num svag (Vinduer)
#c5cfc9   — Breath-dots, sp-caption (Praksis)
#c0c8d4   — Milestone-range tekst (Rejse)
#b5bcc8   — Stat-label-text (Rejse)
#FAF9F6   — Checkin-knap baggrund
```

### Farver i featured cards (hvid tekst på gradient)

```
Label:      rgba(255,255,255, 0.70)   — DM Sans 9px uppercase
Brødtekst:  rgba(255,255,255, 1.00)   — Playfair 16px italic
Sub-tekst:  rgba(255,255,255, 0.85)   — DM Sans 12px italic light
```

---

## 3. SIDESTRUKTUR & NAVIGATION

### Overordnet siderækkefølge

```
HEADER (global)
├── De 9 Livsfaser (logo, 28px "9", accent-line)

SIDE 1: VELKOMST
├── Spørgsmål, afsløring, billede, fødselsdato-input, knap
├── Lotus + Tilbage til toppen

PAGE-DIVIDER

SIDE 2: DIT LIV LIGE NU (Åbenbaring)
├── Kanji-tegn, livsfase-resultat, profil-fold, feelings, alive-section, vinduer-teaser
├── Lotus + Tilbage til toppen

PAGE-DIVIDER

SIDE 3: DIN FORSIDE
├── Eyebrow, titel, brødtekst, circles-billede, forside-cards, checkin
├── Lotus + Tilbage til toppen

PAGE-DIVIDER

5 SEKTIONER (med page-divider + header mellem hver):
├── Sektion 1: MINE CYKLUSSER   (tone-cyklusser)
├── Sektion 2: MINE RELATIONER  (tone-relationer)
├── Sektion 3: MIN PRAKSIS      (tone-praksis)
├── Sektion 4: MIN REJSE        (tone-rejse)
├── Sektion 5: MINE VINDUER     (tone-vinduer)

2 UNDERSIDER (efter sektion 5):
├── Underside 5A: MIT LIVS TIDSLINJE  (tone-vinduer)
├── Underside 5B: VIGTIGE ØJEBLIKKE   (tone-vinduer)

ARC NAV (fixed, synlig kun på sektionerne)
```

### Header-mønster (gentages mellem sektioner)

```html
<div class="header">
  <div class="header-title">De&ensp;<span style="color:#6B5F7B;font-size:28px">9</span>&ensp;Livsfaser</div>
</div>
<div class="accent-line"></div>
```

- Header-title: Playfair Display, 16px, italic, #2a2520
- "9"-tallet: 28px, farve #6B5F7B (vinduer-mørk)
- `&ensp;` (en-space) på begge sider af 9-tallet
- Accent-line: 1px gradient der fader ind/ud fra siderne

### Arc Navigation (fixed, kurvet bue)

Navigation er en SVG-baseret kurvet bue (`position: fixed; bottom: 0`) med 6 items på en cirkulær arc:

```
Items (venstre→højre): Hjem · Vinduer · Cyklusser · Relationer · Praksis · Rejse
```

**Geometri:**
```
Chord endpoints:    x1=15, x2=360 (bredde=345px)
Sagitta:            32px (buens højde)
Radius:             R ≈ 480.9px (cirkulær arc via R = c²/(8s) + s/2)
Border radius:      R_border = R + 26 (11px gap + 15px standardradius)
Synlig højde:       ~92px
```

**Design:**
- Tynd blå borderlinje (`rgba(108,130,169,0.18)`, 0.7px) langs buens top — edge-to-edge
- Solid baggrund `#FDFCFB` under buen
- 6 cirkler (r=15px, aktiv r=19px) med individuelle tone-farver
- SVG-ikoner i hver cirkel (hus, vinduesgitter, koncentriske cirkler, hjerte, ur, kompas)
- Aktiv indikator-prik under aktiv cirkel (`#6c82a9`, opacity 0.45)
- Tekstlabels med let tangent-rotation (±9.6° ved kanterne)
- Equal perpendicular gap (11px) fra alle circle-tops til border
- Equal gap (10px) fra circle-bottom til text label

**Scroll-adfærd:**
- Skjult under onboarding/forside (Side 1-3)
- Vises automatisk når brugeren når sektionerne
- Scroll ned = gjem, scroll op = vis
- Aktiv item skifter automatisk baseret på synlig sektion:
  - Sektion 1 → Cyklusser aktiv
  - Sektion 2 → Relationer aktiv
  - Sektion 3 → Praksis aktiv
  - Sektion 4 → Rejse aktiv
  - Sektion 5 + undersider → Vinduer aktiv

```css
.arc-nav { position: fixed; bottom: 0; left: 0; right: 0; z-index: 200; }
.arc-nav svg { display: block; width: 100%; }
.arc-nav.hide { transform: translateY(100%); }
```

### Section-num (sektionsnummer)

```html
<div class="section-num">Sektion 1 af 5</div>        <!-- Hovedsektion -->
<div class="section-num">Underside · Mine Vinduer</div> <!-- Underside -->
```

- 9px DM Sans, uppercase, #bbb, 2px letter-spacing

---

## 4. SEKTIONENS ANATOMI

### Fast rækkefølge for HOVEDSEKTIONER (sektion 1-5)

```
┌─────────────────────────────────────┐
│  section-num                        │  "Sektion X af 5"
│  HEADER + accent-line               │
│                                     │
│  ┌─ .section .tone-{navn} ────────┐ │
│  │                                │ │
│  │  section-eyebrow               │ │  UPPERCASE label
│  │  section-title                 │ │  Stort italic serif
│  │  section-sub                   │ │  Italic sans undertitel
│  │  section-intro                 │ │  Brødtekst (valgfri)
│  │                                │ │
│  │  ── FIGUR #1 (billede) ──     │ │  PNG/JPG med mix-blend-mode
│  │                                │ │
│  │  ★ feeling-box                 │ │  Poetisk smerte-adressering
│  │                                │ │
│  │  ★ featured                    │ │  Gradient-kort (hvid tekst)
│  │                                │ │
│  │  · · ·                         │ │  dots separator
│  │                                │ │
│  │  INDHOLD (kort, bokse, etc.)   │ │  Tone-specifikke kort
│  │                                │ │
│  │  ── FIGUR #2 (SVG) ──         │ │  Håndlavet inline SVG
│  │                                │ │
│  │  · · ·                         │ │  dots separator
│  │                                │ │
│  │  MERE INDHOLD                  │ │
│  │                                │ │
│  │  ★ quick-action                │ │  Call-to-action boks
│  │  ★ time-shift                  │ │  To tidsperspektiv-bokse
│  │  ★ pull-quote                  │ │  Isabelle-citat
│  │  ★ cross-links                 │ │  3 navigationslinks
│  │                                │ │
│  │  lotus + Tilbage til toppen    │ │  Sektion-closer
│  └────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Fast rækkefølge for UNDERSIDER

Identisk mønster, men:
- section-num siger "Underside · [parent]" i stedet for "Sektion X af 5"
- cross-links peger tilbage til parent + søskende

### Vigtige regler

1. **ALTID 2 figurer per skærm** — Figur #1 øverst (billede ELLER SVG), Figur #2 længere nede (altid SVG)
2. **ALTID feeling-box** — placeret lige efter figur #1
3. **ALTID featured card** — gradient-kort lige efter feeling-box
4. **ALTID pull-quote** — Isabelle-citat som næstsidste element
5. **ALTID cross-links** — 3 links til andre sektioner
6. **ALTID lotus + Tilbage til toppen** — sidste element i ALLE sektioner

---

## 5. KOMPONENT-KATALOG

### A. SECTION HEADER

```css
.section-eyebrow {
  /* DM Sans · 10px · UPPERCASE · letter-spacing: 3px · 0.85 opacity */
  /* Farve: sektionens mørke farve */
}
.section-title {
  /* Playfair · 26px · italic · weight 400 · line-height 1.3 */
  /* Farve: sektionens mørke farve */
  /* Kan indeholde <br> for linjebrud */
}
.section-sub {
  /* DM Sans · 13.5px · italic · weight 300 · line-height 1.5 */
  /* Farve: sektionens lyse farve */
  /* Bruger · (middot) som separator */
}
.section-intro {
  /* DM Sans · 13px · weight 300 · #888 · line-height 1.65 · centreret */
  /* Valgfri — bruges ikke i alle sektioner */
}
```

### B. FIGUR-BOKS (.wave-timeline)

Container til alle SVG-figurer og billeder:

```css
.wave-timeline {
  margin: 28px 0 8px;
  text-align: center;
  background: rgba({r,g,b}, 0.03);   /* sektionens RGBA-base */
  border: 1px solid rgba({r,g,b}, 0.07);
  border-radius: 14px;
  padding: 20px 14px 16px;
}
.wave-label {
  /* DM Sans · 9px · UPPERCASE · letter-spacing: 2.5px */
  /* Farve: sektionens lyse farve */
}
.wave-caption {
  /* Playfair · 13px · italic · line-height 1.5 */
  /* Farve: sektionens medium farve */
}
```

Figur-boks for billeder (uden wave-timeline container):
```html
<div style="text-align:center;margin:10px auto 4px;max-width:370px">
  <img src="assets/images/xxx.png" alt="..."
       style="width:100%;max-width:300px;mix-blend-mode:multiply;filter:saturate(0.7)">
</div>
```

### C. FEELING-BOX

Poetisk boks der adresserer brugerens smerte/bekymring:

```css
.feeling-box {
  border-radius: 14px;
  padding: 24px 22px;
  margin: 22px 0;
  text-align: center;
  border: 1px solid rgba({r,g,b}, 0.08);
  background: linear-gradient(135deg, rgba({r,g,b}, 0.04), rgba(184,166,192,0.04));
}
.feeling-label {
  /* DM Sans · 9px · UPPERCASE · letter-spacing: 2.5px · 0.6 opacity */
  /* Farve: sektionens lyse farve */
}
.feeling-text {
  /* Playfair · 15px · italic · line-height 1.65 */
  /* Farve: sektionens mørke farve (let variation) */
}
```

**Indholdsregler:**
- Label: kort poetisk overskrift (5-8 ord), ALDRIG klinisk
- Tekst: 2-4 sætninger i Isabelles stemme — personlig, tentativ, validerende
- Bruger "måske", "kan", "det er ikke noget galt med dig"
- ALDRIG "du skal", "husk at", "det er vigtigt"

### D. FEATURED CARD

Gradient-kort med hvid tekst — det vigtigste budskab i sektionen:

```css
.featured {
  border-radius: 14px;
  padding: 22px 20px;
  margin-bottom: 10px;
  color: white;
  background: linear-gradient(135deg, {mørk}, {medium});  /* sektionens farver */
}
.featured-label {
  /* DM Sans · 9px · UPPERCASE · letter-spacing: 2.5px · rgba(255,255,255,0.7) */
}
.featured-text {
  /* Playfair · 16px · italic · line-height 1.55 · white */
}
.featured-sub {
  /* DM Sans · 12px · italic · weight 300 · rgba(255,255,255,0.85) · line-height 1.5 */
}
```

Tone-specifikke klasser: `.feat-cyklusser`, `.feat-relationer`, `.feat-praksis`, `.feat-rejse`, `.feat-vinduer`

### E. STANDARD KORT (.card)

```css
.card {
  background: white;
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  border: 1px solid rgba({r,g,b}, 0.10);  /* tone-klasse sætter dette */
}
.card-label   { /* DM Sans · 9px · UPPERCASE · 2.5px spacing · 0.85 opacity · sektionens mørke */ }
.card-title   { /* Playfair · 16px · italic · #3a3530 · line-height 1.35 */ }
.card-desc    { /* DM Sans · 12.5px · #999 · weight 300 · line-height 1.55 */ }
.card-arrow   { /* 13px · #ccc · padding-left 10px */ }
```

Card-row variant (titel + pil side om side):
```html
<div class="card-row">
  <div>
    <div class="card-label">...</div>
    <div class="card-title">...</div>
    <div class="card-desc">...</div>
  </div>
  <div class="card-arrow">→</div>
</div>
```

### F. QUICK-ACTION

Call-to-action boks med knap:

```css
.quick-action {
  border-radius: 14px;
  padding: 22px 20px;
  margin: 16px 0 8px;
  text-align: center;
  background: linear-gradient(135deg, rgba({r,g,b}, 0.06), rgba({r,g,b}, 0.02));
  border: 1px solid rgba({r,g,b}, 0.10);
}
.quick-action-label  { /* DM Sans · 9px · UPPERCASE · 2.5px spacing · sektionens lyse */ }
.quick-action-title  { /* Playfair · 18px · italic · sektionens mørke */ }
.quick-action-desc   { /* DM Sans · 12.5px · #999 · weight 300 · line-height 1.5 */ }
.quick-action-btn    { /* inline-block · 10px 28px padding · 24px radius · 1px solid kant · white bg · DM Sans 12.5px · sektionens mørke */ }
```

### G. TIME-SHIFT

To side-om-side tidsperspektiv-bokse:

```css
.time-shift { display: flex; gap: 10px; margin: 16px 0 22px; }
.time-shift-item {
  flex: 1;
  border-radius: 12px;
  padding: 14px 16px;
  background: rgba({r,g,b}, 0.04);
  border: 1px solid rgba({r,g,b}, 0.08);
}
.time-shift-when  { /* DM Sans · 10px · UPPERCASE · 1.5px spacing · #aaa */ }
.time-shift-what  { /* Playfair · 13px · italic · sektionens mørke · line-height 1.4 */ }
```

### H. PULL-QUOTE

Stort centreret Isabelle-citat:

```css
.pull-quote { text-align: center; padding: 28px 16px; margin: 8px 0; }
.pull-quote-text {
  /* Playfair · 18px · italic · line-height 1.6 */
  /* Farve: sektionens medium farve (eller #8a96a9 som default) */
  /* Indrammet af « » (french quotes med thinsp) */
}
.pull-quote-attr {
  /* DM Sans · 10px · #ccc · weight 300 · 1px letter-spacing */
  /* Altid: "— Isabelle" */
}
```

Format:
```html
<div class="pull-quote-text" style="color:#8B7D9B">
  &laquo;&thinsp;Citat her.&thinsp;&raquo;
</div>
<div class="pull-quote-attr">&mdash; Isabelle</div>
```

### I. CROSS-LINKS

3 navigationslinks i bunden af sektionen:

```css
.cross-links { margin: 28px 0 8px; text-align: center; }
.cross-links-label {
  /* DM Sans · 9px · UPPERCASE · 2.5px spacing · #ccc */
  /* Altid: "Udforsk også" */
}
.cross-links-row { display: flex; gap: 8px; justify-content: center; }
.cross-link {
  /* DM Sans · 11.5px · italic · weight 300 · 8px 16px padding */
  /* border-radius: 20px · 1px solid rgba({r,g,b}, 0.12) */
  /* Farve: sektionens lyse farve */
}
```

Altid 3 links — typisk de nærmeste sektioner.

### J. SECTION CLOSER (lotus + tilbage)

```html
<div class="section-closer">
  <div class="lotus-fill">
    <img src="assets/images/rosa-lotus.png" alt="">
  </div>
</div>
<div class="back-to-top">
  <a href="#" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">
    Tilbage til toppen &uarr;
  </a>
</div>
```

- Lotus: 83px bred, `mix-blend-mode: multiply`, `filter: saturate(0) contrast(3) brightness(1.15)` — kun sorte streger, ingen farve
- Tilbage-link: DM Sans, 11.5px, #bbb, weight 300
- Padding: 32px top, 20px bottom
- ALTID det allersidste element i en sektion

### K. DOTS SEPARATOR

```html
<div class="dots">&middot; &middot; &middot;</div>
```

- Farve: #ccc9c3
- Font-size: 8px
- Letter-spacing: 10px
- Margin: 24px top og bund
- Bruges mellem visuelt adskilte indholdsblokke

### L. INSIGHT-BOX

Fremhævet indsigt med label:

```css
.insight-box {
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 22px;
  background: rgba({r,g,b}, 0.05);
  border: 1px solid rgba({r,g,b}, 0.10);
}
.insight-label  { /* DM Sans · 9px · UPPERCASE · 2.5px spacing · sektionens lyse */ }
.insight-text   { /* Playfair · 14px · italic · line-height 1.55 · sektionens mørke */ }
```

### M. SOCIAL-PROOF (procent-bjælker)

```css
.social-proof {
  border-radius: 14px;
  padding: 20px 20px 14px;
  margin: 18px 0;
  background: rgba({r,g,b}, 0.04);
  border: 1px solid rgba({r,g,b}, 0.08);
}
.sp-label   { /* DM Sans · 9px · UPPERCASE · 2.5px spacing · centreret */ }
.sp-name    { /* DM Sans · 11.5px · #888 · weight 300 · width 82px */ }
.sp-track   { /* flex: 1 · height 5px · radius 3px */ }
.sp-fill    { /* gradient 90deg fra mørk til medium */ }
.sp-pct     { /* DM Sans · 11px · weight 300 · width 32px · text-right */ }
.sp-caption { /* DM Sans · 10px · italic · weight 300 · centreret · top-border */ }
```

### N. BREATH-BOX (åndedrætsøvelse)

```css
.breath-box {
  border-radius: 14px;
  padding: 24px 20px;
  margin: 18px 0;
  text-align: center;
  background: linear-gradient(135deg, rgba({r,g,b}, 0.05), rgba({r,g,b}, 0.03));
  border: 1px solid rgba({r,g,b}, 0.08);
}
/* Indeholder: breath-label, breath-circle (90px), breath-steps (trin), breath-text */
```

### O. MILESTONE-BOX (faseprogression)

```css
.milestone-box {
  border-radius: 14px;
  padding: 22px 20px;
  margin: 18px 0;
  text-align: center;
  background: rgba({r,g,b}, 0.04);
  border: 1px solid rgba({r,g,b}, 0.08);
}
/* Indeholder: milestone-phase, milestone-years, milestone-bar + fill + marker, milestone-range, milestone-text */
```

### P. STAT-ROW (4 tal-bokse)

```css
.stat-row { display: flex; gap: 8px; margin: 18px 0; }
.stat-box {
  flex: 1;
  text-align: center;
  padding: 14px 6px;
  border-radius: 12px;
  background: rgba({r,g,b}, 0.04);
  border: 1px solid rgba({r,g,b}, 0.08);
}
.stat-number     { /* Playfair · 22px · italic · sektionens mørke · line-height 1.2 */ }
.stat-label-text { /* DM Sans · 9px · weight 300 · sektionens lyse */ }
```

### Q. ELEMENT-ANALYSIS (5-element bjælker)

```css
.element-analysis {
  background: rgba({r,g,b}, 0.05);
  border: 1px solid rgba({r,g,b}, 0.1);
  border-radius: 14px;
  padding: 20px 20px 16px;
  margin-bottom: 22px;
}
/* 5 rækker: ea-name (48px), ea-bar (gradient fill), ea-count */
/* ea-text (Playfair italic) med top-border */
```

### R. PROFIL-FOLD (sammenfoldeligt profilkort)

```css
.profil-fold {
  background: rgba({r,g,b}, 0.04);
  border: 1px solid rgba({r,g,b}, 0.08);
  border-radius: 14px;
  padding: 16px 18px;
  margin-bottom: 22px;
}
/* .ph: header (label + pil) */
/* .pe: expanderet (key/value rækker med border-top) */
```

### S. PROFIL-ROW (profilcirkler)

```css
.profil-row { display: flex; justify-content: center; gap: 22px; margin-bottom: 24px; }
.profil-circle {
  width: 46px; height: 46px; border-radius: 50%;
  /* Playfair · 15px · italic · centreret */
}
.profil-name { /* DM Sans · 11px · #777 */ }
.profil-meta { /* DM Sans · 9px · #bbb · weight 300 */ }
```

### T. SPECIALISEREDE KORT

**Forside-card** (kun Side 3):
```css
.forside-card {
  background: white; border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px; padding: 16px 18px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
/* card-label (#5A74A5), card-text (Playfair 15px), card-sub, card-link */
```

**Praksis-card** (kun Side 3):
```css
.praksis-card {
  background: white; border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px; padding: 14px 16px;
  display: flex; justify-content: space-between;
}
/* pk-label (#6B8273), pk-name (Playfair 16px), pk-desc, pk-arrow */
```

**Vinduer-card** (kun Mine Vinduer):
```css
.vinduer-card {
  background: white; border: 1px solid rgba(107,95,123,0.14);
  border-radius: 14px; overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
/* vinduer-body (titel/tekst), vinduer-footer (gradient med hvid tekst + pil) */
```

**Moment-card** (kun Vigtige Øjeblikke):
```css
.moment-card {
  background: rgba(107,95,123,0.04);
  border: 1px solid rgba(107,95,123,0.10);
  border-radius: 14px; padding: 18px 20px;
}
/* moment-date, moment-title, moment-elements, moment-text, moment-actions */
```

**Phase-block** (kun Mit Livs Tidslinje):
```css
.phase-block {
  display: flex; gap: 14px; padding: 14px 16px;
  border-radius: 12px;
  background: rgba(107,95,123,0.03); border: 1px solid rgba(107,95,123,0.06);
}
/* .current = gradient bg + stærkere farver */
/* .future = opacity 0.5 */
```

**Scenario-card** (kun Mine Vinduer overview):
```css
.scenario {
  border-radius: 14px; padding: 20px;
}
/* scenario-label, scenario-title, scenario-text */
```

**Checkin-card** (kun Side 3):
```css
.checkin-card {
  background: white; border: 1px solid rgba(90,116,165,0.1);
  border-radius: 14px; padding: 18px;
}
/* ci-q (Playfair spørgsmål), ci-hint, ci-btns (flex wrap pills) */
```

---

## 6. FIGURER & ILLUSTRATIONER

### Regel: 2 figurer per skærm

| # | Figur #1 (øverst) | Figur #2 (midtvejs) |
|---|-------------------|---------------------|
| Mine Cyklusser | Billede: krydsfelt-final.png | SVG: Bølge-tidslinje (5 parallelle bølger) |
| Mine Relationer | Billede: relationer_blad_liberation_HQ.png | SVG: Dråbeformer (to overlappende dråber) |
| Min Praksis | Billede: din-krop.jpg | SVG: Vanddråbe (3 lag: overfladen→praksis→stilheden) |
| Min Rejse | Billede: min-rejse-ikigai.png (TODO) | SVG: Diamant (4 retninger af rejsen) |
| Mine Vinduer | Billede: vinduer-tid-lilla.png + krydsfelt | SVG: Tidsspiral (spiral fra fortid→nutid) |
| Mit Livs Tidslinje | SVG: Livsbue (9 fasecirkler i parabolbue) | SVG: Lagdelte ellipser (3 lag af forståelse) |
| Vigtige Øjeblikke | SVG: Konstellation (øjeblikke forbundet af linjer) | SVG: Blomsterkronblade (5 dimensioner) |

### SVG-designregler (fra FIGUR-KATALOG.md)

1. **Monokrom** — brug sektionens tone-farve i variationer
2. **Max 3 farvetoner** i én figur (mørk, medium, lys af samme)
3. **Streger: 0.7-1.5px** — tynde, elegante
4. **Ingen skygger** — kun opacity for dybde
5. **Serif italic** for poetisk tekst (Playfair Display)
6. **Sans uppercase** for labels (DM Sans)
7. **Max 5-7 tekstfelter** per figur
8. **ViewBox** tilpasset indhold (typisk 280-400 bred, 180-320 høj)
9. **Max-width** på SVG: 260-360px (aldrig fuld bredde)

### SVG font-erklæringer (inde i SVG)

```svg
<!-- Labels (uppercase) -->
<text font-family="'DM Sans',sans-serif" font-size="6-7" letter-spacing="1.5-2" fill="#{lys}" font-weight="300">LABEL</text>

<!-- Poetisk tekst -->
<text font-family="'Playfair Display',serif" font-size="8-11" font-style="italic" fill="#{medium}">Tekst</text>

<!-- Aktiv/fremhævet tekst -->
<text font-family="'Playfair Display',serif" font-size="9-11" font-style="italic" fill="#{mørk}">Vigtig</text>
```

### Billede-regler (Figur #1)

```css
mix-blend-mode: multiply;     /* ALTID — fjerner hvid baggrund */
filter: saturate(0.62-0.70);  /* Dæmper farver til at matche paletten (indhold-billeder) */
/* Lotus-specifik: filter: saturate(0) contrast(3) brightness(1.15) — kun sorte streger */
max-width: 200-370px;         /* Aldrig fuld bredde */
border-radius: 14px;          /* Kun på fotos, ikke illustrationer */
```

---

## 7. TYPOGRAFI-SKALA

### Komplet font-size oversigt

```
PLAYFAIR DISPLAY (serif, italic):
  26px  — section-title (hovesektioner)
  24px  — title (side-titler: Side 1-3)
  22px  — birth h2, stat-number
  20px  — vinduer-title, phase-block-num
  18px  — quick-action-title, pull-quote-text, milestone-phase
  17px  — res .rt (resultat-titel), btn
  16px  — featured-text, card-title, forside-card text, pk-name, ci-q, moment-title
  15px  — feeling-text, forside-card text, ac .at, breath-inner
  14px  — insight-text, wave-caption, motor-text, vinduer-footer-text, wg p, ea-text
  13px  — section-sub (via DM Sans italic!), res-more link, prak .pe, milestone-text, breath-text
  12.5px — date-preview-hint

DM SANS (sans-serif):
  16px  — birth-field input, question-box p (undtagelse: serif her)
  13.5px — section-sub, body-text, feelings .ft, intro-callout p, reveal-box p, question-box p
  13px  — section-intro, ac .ax, wm .wp, birth .bs, vinduer-text, breath-step
  12.5px — card-desc, featured-sub, quick-action-desc/btn, pk-desc, ci-hint/btn, scenario-text
  12px  — forside-card sub, res .rd, profil-fold .pa, subtle
  11.5px — forside-card sub, sp-name, cross-link, back-to-top
  11px  — profil-name, moment-elements, sp-pct, ea-count, person-pill
  10.5px — alive-section .sl, win .wl, milestone-years
  10px  — section-eyebrow, eyebrow, profil-fold .pl, sp-caption, feelings .fl, intro-callout .mb-label, time-shift-when, moment-date
  9.5px — forside-card label, ni (nav)
  9px   — section-num, page-label, card-label, featured-label, wave-label, quick-action-label, insight-label, sp-label, breath-label, group-label, milestone-range, stat-label-text, scenario-label, moment-date, phase-block-element, pk-label, ea-label
  8px   — dots, vinduer-label
```

### Letter-spacing oversigt

```
3px    — section-eyebrow, eyebrow (øverste labels)
2.5px  — card-label, featured-label, wave-label, quick-action-label, sp-label, insight-label, group-label, profil-fold .pl, feelings .fl, alive-section .sl, win .wl, breath-label, ea-label, intro-callout .mb-label, vinduer-label, date-preview-label, scenario-label
2px    — section-num, page-label, pk-label
1.5px  — time-shift-when, moment-date, phase-block-element
1px    — pull-quote-attr, page-label (alt)
0.5px  — quick-action-btn, back-to-top
0.3px  — ni (nav), breath-step, stat-label-text
```

---

## 8. SPACING & LAYOUT

### Border-radius

```
14px  — STANDARD for alle kort, bokse, featured, input-felter
12px  — time-shift-item, stat-box, phase-block (lidt mindre)
20px  — pills: cross-link, date-chip, person-pill, ci-btn, quick-action-btn
24px  — quick-action-btn (alternativ)
50%   — cirkler: profil-circle, breath-circle, ni-icon, person-pill-dot
```

### Box-shadow

```
0 2px 10px rgba(0,0,0,0.04)  — standard (cards, featured, forside, vinduer, checkin)
0 2px 8px rgba(0,0,0,0.04)   — praksis-card (lidt lettere)
```

> INGEN andre skygger bruges. Aldrig spread, aldrig blur over 10px.

### Vigtige spacing-værdier

```
SEKTIONS-PADDING:
  36px 24px 44px  — .section (indholdsområde)
  30px 24px 0     — .s (Side 3 intro)
  0 24px 44px     — .content (Side 1)

MELLEM ELEMENTER:
  28px  — margin før cross-links, margin før wave-timeline, section-intro margin-bottom
  24px  — margin før group-label, profil-row margin-bottom, dots margin
  22px  — margin efter profil-fold, insight-box, element-analysis, win, btn-outline margin, section-sub margin-bottom
  18px  — margin for milestone-box, social-proof, stat-row, breath-box
  16px  — margin for time-shift, quick-action
  14px  — gap mellem alive-section cards
  10px  — margin mellem standard cards
  8px   — margin for time-shift, phase-timeline gap

INTERNAL PADDING:
  24px 22px       — feeling-box
  22px 20px       — featured, quick-action, milestone-box, motor-box, scenario
  20px 14px 16px  — wave-timeline
  18px 20px       — insight-box, moment-card
  18px            — card, checkin-card
  16px 18px       — profil-fold, feelings, vinduer-body
  14px 16px       — praksis-card, time-shift-item, phase-block
```

### Gradient-mønstre

```
FEATURED (135deg):   tone-mørk → tone-medium
FEELING-BOX (135deg): rgba(tone, 0.04) → rgba(lilla, 0.04)
QUICK-ACTION (135deg): rgba(tone, 0.06) → rgba(tone, 0.02)
BREATH-BOX (135deg):  rgba(tone, 0.05) → rgba(tone, 0.03)
BAR-FILL (90deg):    tone-mørk → tone-medium
PAGE-DIVIDER (180deg): rgba(tone, 0.06) → rgba(tone, 0.02)
ACCENT-LINE (90deg):  transparent → rgba(tone, 0.28) 25% → 75% → transparent
```

---

## 9. GENNEMGÅENDE MØNSTRE

### Isabelles stemme

| Gør | Gør IKKE |
|-----|----------|
| "Måske mærker du..." | "Det er vigtigt at..." |
| "Det kan føles som..." | "Husk at..." |
| "Jeg har selv oplevet..." | "Man skal..." |
| Poetisk, personlig, tentativ | Klinisk, belærende, generisk |
| "nemlig", "jo", "faktisk" | "du bør", "det anbefales" |
| 15-30 ord per sætning | Lange tekniske forklaringer |

### HTML-entities for dansk

```
æ = &aelig;    Æ = &AElig;
ø = &oslash;   Ø = &Oslash;
å = &aring;    Å = &Aring;

Specielle:
— = &mdash;    (lang tankestreg)
· = &middot;   (midterprik)
→ = &rarr;     (højrepil)
↑ = &uarr;     (oppil)
« = &laquo;    (venstre guillemet)
» = &raquo;    (højre guillemet)
  = &thinsp;   (tynd mellemrum — bruges i citater)
  = &ensp;     (en-space — bruges i header)
é = &eacute;   (bruges i "én")
```

### Separatorer mellem sektioner

Rækkefølgen mellem to sektioner:

```html
<!-- Afslutning af forrige sektion: -->
  <div class="section-closer"><div class="lotus-fill"><img src="assets/images/rosa-lotus.png" alt=""></div></div>
  <div class="back-to-top"><a href="#" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Tilbage til toppen &uarr;</a></div>
</div>

<div class="page-divider"></div>

<!-- NY SEKTION: -->
<div class="section-num">Sektion X af 5</div>
<div class="header">
  <div class="header-title">De&ensp;<span style="color:#6B5F7B;font-size:28px">9</span>&ensp;Livsfaser</div>
</div>
<div class="accent-line"></div>
<div class="section tone-{navn}">
```

> **Note:** Arc nav er `position: fixed` og flyder automatisk over sektionerne — den tilføjes IKKE manuelt mellem sektioner.

### Inline styles

Mange komponenter bruger inline styles for tone-specifikke farver:

```html
<!-- Eksempel: feeling-box i Vinduer -->
<div class="feeling-box" style="border-color:rgba(107,95,123,0.08);background:linear-gradient(135deg,rgba(107,95,123,0.04),rgba(139,125,155,0.04))">
  <div class="feeling-label" style="color:#a89bb3">Label her</div>
  <div class="feeling-text" style="color:#6e5f7a">Tekst her</div>
</div>
```

CSS-klasserne definerer struktur (padding, font, layout).
Inline styles definerer farver (tone-specifikke).

### Cache-busting

```javascript
const V = '20260221-v31';
if (localStorage.getItem('pk-v') && localStorage.getItem('pk-v') !== V) {
  localStorage.setItem('pk-v', V);
  location.reload(true);
} else {
  localStorage.setItem('pk-v', V);
}
```

Bump version ved HVER ændring. Format: `YYYYMMDD-vNN`

---

## 10. FORSKELLE FRA GAMMEL APP

| Aspekt | Gammel App (app.js) | Preview (preview-komplet.html) |
|--------|---------------------|-------------------------------|
| **Fonts** | `-apple-system` + `Georgia` | `Playfair Display` + `DM Sans` |
| **Font-import** | System-fonts (ingen import) | Google Fonts CDN |
| **Farver** | 4 faste: `#244382`, `#7690C1`, `#B8A6C0`, `#8B9A9D` | 5 tone-familier med 3+ nuancer hver |
| **Baggrund** | `#FFFFFF` | `#FDFCFB` (varm off-white) |
| **Kort** | `--bg-card` gradient, 20px radius | Hvid bg, 14px radius, tone-kant |
| **Skygger** | `--shadow-card` (variabel) | Fast: `0 2px 10px rgba(0,0,0,0.04)` |
| **Labels** | 12px, `#7A9080` | 9px, UPPERCASE, 2.5px spacing, tone-farve |
| **Klasse-navne** | `praksis__dots`, `rejse__t1` | `.dots`, `.section-title`, `.card` |
| **CSS-variabler** | Ja (`--morkebla`, `--blaa` etc.) | Nej — alt er direkte værdier |
| **Spacing** | Kompakt (8-16px) | Luftigt (22-36px) |
| **Stemme** | Funktionel, app-agtig | Isabelle: poetisk, personlig |
| **Figurer** | JS-renderet SVG (funktioner) | Inline SVG (håndlavet per sted) |
| **Navigation** | JS-baseret `App.loadScreen()` | Scroll-baseret (alt på én side) |
| **Billeder** | `<img>` direkte | `mix-blend-mode: multiply` + `saturate(0.6-0.7)` |
| **Sektioner** | HTML-templates + JS init | Fast HTML med inline tone-styles |
| **Responsiv** | CSS-variabler + media queries | Én kolonne, 600px max-width implicit |

---

## TJEKLISTE VED NY SEKTION / UNDERSIDE

1. ☐ Tilføj `section-num` (sektionsnummer eller "Underside · [parent]")
2. ☐ Tilføj header + accent-line
3. ☐ Opret `.section .tone-{navn}` container
4. ☐ section-eyebrow → section-title → section-sub → (section-intro)
5. ☐ **Figur #1** — billede ELLER SVG i wave-timeline
6. ☐ **Feeling-box** — poetisk smerte-tekst i Isabelles stemme
7. ☐ **Featured card** — gradient-kort med hvid tekst
8. ☐ Dots separator
9. ☐ Indhold (kort, bokse, analyse) i sektionens tone
10. ☐ **Figur #2** — SVG i wave-timeline (UNIK type, ikke brugt andetsteds)
11. ☐ Dots separator
12. ☐ quick-action ELLER mere indhold
13. ☐ time-shift (2 tidsperspektiv-bokse)
14. ☐ **Pull-quote** (Isabelle-citat med « » og — Isabelle)
15. ☐ **Cross-links** (3 links til andre sektioner)
16. ☐ **Lotus + Tilbage til toppen**
17. ☐ Page-divider mellem sektioner (arc nav er automatisk via fixed position)
18. ☐ Bump cache version i `const V`
19. ☐ Alle danske tegn som HTML-entities

---

*Brug dette dokument som lov. Følg det nøjagtigt. Spørg hvis noget er uklart.*
