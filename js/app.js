// Phase data from CLAUDE.md
const PHASE_DATA = {
  1: { element: 'VAND', startAge: 0, endAge: 7, name: 'Livets begyndelse' },
  2: { element: 'VAND', startAge: 7, endAge: 14, name: 'Udforskning' },
  3: { element: 'TRÆ', startAge: 14, endAge: 21, name: 'Forvandling' },
  4: { element: 'TRÆ', startAge: 21, endAge: 28, name: 'Blomstring' },
  5: { element: 'ILD', startAge: 28, endAge: 35, name: 'Ansvar' },
  6: { element: 'JORD', startAge: 35, endAge: 42, name: 'Modning' },
  7: { element: 'JORD', startAge: 42, endAge: 49, name: 'Høst' },
  8: { element: 'METAL', startAge: 49, endAge: 56, name: 'Frigørelse' },
  9: { element: 'VAND', startAge: 56, endAge: 63, name: 'Visdom' }
};

// Men's 8-year cycle
const MALE_PHASE_DATA = {
  1: { element: 'VAND',  startAge: 0,  endAge: 8,  name: 'Den lille dreng' },
  2: { element: 'VAND',  startAge: 8,  endAge: 16, name: 'Opdageren' },
  3: { element: 'TRÆ',   startAge: 16, endAge: 24, name: 'Den unge mand' },
  4: { element: 'TRÆ',   startAge: 24, endAge: 32, name: 'Bygherren' },
  5: { element: 'ILD',   startAge: 32, endAge: 40, name: 'Krigeren' },
  6: { element: 'JORD',  startAge: 40, endAge: 48, name: 'Kongen' },
  7: { element: 'METAL', startAge: 48, endAge: 56, name: 'Vismanden' },
  8: { element: 'VAND',  startAge: 56, endAge: 64, name: 'Den frie' }
};

const ELEMENT_COLORS = {
  'VAND': '#8B9A9D',
  'TRÆ': '#8B9A9D',
  'ILD': '#8B9A9D',
  'JORD': '#8B9A9D',
  'METAL': '#8B9A9D'
};

const APP_COLORS = {
  morkebla: '#244382',
  blaa: '#7690C1',
  lilla: '#B8A6C0',
  graaGroen: '#8B9A9D'
};

const RING_COLORS = {
  0: '#244382',
  1: '#3A5A9A',
  2: '#5070AD',
  3: '#6D88BF',
  4: '#8BA0D1',
  center: '#244382'
};

const ELEMENT_LABELS = {
  'VAND': 'Vand',
  'TRÆ': 'Træ',
  'ILD': 'Ild',
  'JORD': 'Jord',
  'METAL': 'Metal'
};

const WEEKDAY_DATA = {
  0: { day: 'Søndag', element: 'VAND' },
  1: { day: 'Mandag', element: 'VAND' },
  2: { day: 'Tirsdag', element: 'TRÆ' },
  3: { day: 'Onsdag', element: 'ILD' },
  4: { day: 'Torsdag', element: 'JORD' },
  5: { day: 'Fredag', element: 'METAL' },
  6: { day: 'Lørdag', element: 'JORD' }
};

const ORGAN_CLOCK = [
  { startHour: 1, organ: 'Lever', element: 'TRÆ', hours: '01\u201303' },
  { startHour: 3, organ: 'Lunger', element: 'METAL', hours: '03\u201305' },
  { startHour: 5, organ: 'Tyktarm', element: 'METAL', hours: '05\u201307' },
  { startHour: 7, organ: 'Mave', element: 'JORD', hours: '07\u201309' },
  { startHour: 9, organ: 'Milt', element: 'JORD', hours: '09\u201311' },
  { startHour: 11, organ: 'Hjerte', element: 'ILD', hours: '11\u201313' },
  { startHour: 13, organ: 'Tyndtarm', element: 'ILD', hours: '13\u201315' },
  { startHour: 15, organ: 'Bl\u00E6re', element: 'VAND', hours: '15\u201317' },
  { startHour: 17, organ: 'Nyrer', element: 'VAND', hours: '17\u201319' },
  { startHour: 19, organ: 'Perikardium', element: 'ILD', hours: '19\u201321' },
  { startHour: 21, organ: 'Tredobbelt varmer', element: 'ILD', hours: '21\u201323' },
  { startHour: 23, organ: 'Galdebl\u00E6re', element: 'TR\u00C6', hours: '23\u201301' }
];

const MONTH_DATA = {
  1:  { name: 'Januar', element: 'VAND' },
  2:  { name: 'Februar', element: 'VAND' },
  3:  { name: 'Marts', element: 'TR\u00C6' },
  4:  { name: 'April', element: 'TR\u00C6' },
  5:  { name: 'Maj', element: 'TR\u00C6' },
  6:  { name: 'Juni', element: 'ILD' },
  7:  { name: 'Juli', element: 'ILD' },
  8:  { name: 'August', element: 'JORD' },
  9:  { name: 'September', element: 'JORD' },
  10: { name: 'Oktober', element: 'METAL' },
  11: { name: 'November', element: 'METAL' },
  12: { name: 'December', element: 'VAND' }
};

// ---- Cycle Calculations ----

function calculateAge(birthdate) {
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function calculateLifePhase(age) {
  const phaseNumber = Math.min(Math.floor(age / 7) + 1, 9);
  return { phase: phaseNumber, ...PHASE_DATA[phaseNumber] };
}

function calculateMalePhase(age) {
  var phaseNumber = Math.min(Math.floor(age / 8) + 1, 8);
  return { phase: phaseNumber, ...MALE_PHASE_DATA[phaseNumber] };
}

function calculateSeason(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 12 && day >= 21) || month === 1 || month === 2 || (month === 3 && day < 21)) {
    return { season: 'Vinter', element: 'VAND' };
  }
  if ((month === 3 && day >= 21) || month === 4 || month === 5 || (month === 6 && day < 21)) {
    return { season: 'Forår', element: 'TRÆ' };
  }
  if ((month === 6 && day >= 21) || month === 7 || (month === 8 && day < 23)) {
    return { season: 'Sommer', element: 'ILD' };
  }
  if ((month === 8 && day >= 23) || month === 9 || (month === 9 && day < 23)) {
    return { season: 'Sensommer', element: 'JORD' };
  }
  return { season: 'Efterår', element: 'METAL' };
}

function calculateWeekday(date) {
  return WEEKDAY_DATA[date.getDay()];
}

function calculateOrganClock(date) {
  const hour = date.getHours();
  // Find the 2-hour window: 23-01, 01-03, 03-05, ...
  for (let i = ORGAN_CLOCK.length - 1; i >= 0; i--) {
    if (hour >= ORGAN_CLOCK[i].startHour) {
      return ORGAN_CLOCK[i];
    }
  }
  // hour 0 = Galdeblære (23-01)
  return ORGAN_CLOCK[ORGAN_CLOCK.length - 1];
}

function calculateMenstrualDay(lastPeriodDate, currentDate) {
  var start = new Date(lastPeriodDate);
  start.setHours(0, 0, 0, 0);
  var now = new Date(currentDate);
  now.setHours(0, 0, 0, 0);
  var diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  var cycleDay = (diffDays % 28) + 1;
  if (cycleDay <= 0) cycleDay += 28;

  if (cycleDay <= 5) {
    return { day: cycleDay, element: 'VAND', phase: 'Menstruation', range: 'Dag 1\u20135' };
  } else if (cycleDay <= 13) {
    return { day: cycleDay, element: 'TR\u00C6', phase: 'Follikul\u00E6r', range: 'Dag 6\u201313' };
  } else if (cycleDay === 14) {
    return { day: cycleDay, element: 'ILD', phase: '\u00C6gl\u00F8sning', range: 'Dag 14' };
  } else {
    return { day: cycleDay, element: 'JORD', phase: 'Luteal', range: 'Dag 15\u201328' };
  }
}

function calculateCalendarMonth(date) {
  var monthNum = date.getMonth() + 1;
  return MONTH_DATA[monthNum];
}

// ---- Tidsrejse helpers ----

function calculateAgeAtDate(birthdate, atDate) {
  var birth = new Date(birthdate);
  var at = new Date(atDate);
  var age = at.getFullYear() - birth.getFullYear();
  var m = at.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && at.getDate() < birth.getDate())) age--;
  return Math.max(0, age);
}

function calculateCyclesForDate(birthdate, targetDate, opts) {
  var date = new Date(targetDate);
  var age = calculateAgeAtDate(birthdate, date);
  var gender = (opts && opts.gender) || 'kvinde';
  var lifePhase = (gender === 'mand') ? calculateMalePhase(age) : calculateLifePhase(age);
  var season = calculateSeason(date);
  var weekday = calculateWeekday(date);
  var organ = calculateOrganClock(date);
  var monthCycle;
  if (opts && opts.tracksMenstruation && opts.lastPeriodDate) {
    monthCycle = { type: 'menstrual', data: calculateMenstrualDay(opts.lastPeriodDate, date) };
  } else {
    monthCycle = { type: 'calendar', data: calculateCalendarMonth(date) };
  }
  var elements = [lifePhase.element, season.element, monthCycle.data.element, weekday.element, organ.element];
  return { age: age, lifePhase: lifePhase, season: season, weekday: weekday, organ: organ, monthCycle: monthCycle, elements: elements, date: date };
}

// ---- Onboarding ----

const Onboarding = {
  goToStep(step) {
    document.querySelectorAll('.onboarding__step').forEach(el => {
      el.classList.remove('active');
    });
    const target = document.querySelector(`.onboarding__step[data-step="${step}"]`);
    if (target) target.classList.add('active');
  },

  submitBirthdate() {
    var input = document.getElementById('onboarding-birthdate');
    var error = document.getElementById('onboarding-error');
    var value = input.value;

    if (!value) {
      error.textContent = 'Indtast venligst din f\u00F8dselsdato';
      return;
    }

    var birthdate = new Date(value);
    var today = new Date();
    if (birthdate >= today) {
      error.textContent = 'F\u00F8dselsdato skal v\u00E6re i fortiden';
      return;
    }

    error.textContent = '';
    this._birthdate = value;
    this._age = calculateAge(value);
    this._phase = calculateLifePhase(this._age);

    this.goToStep(3);
  },

  setMenstruation(tracks) {
    this._tracksMenstruation = tracks;
    if (tracks) {
      this.goToStep(4);
    } else {
      this._lastPeriodDate = null;
      this._showResult();
    }
  },

  submitPeriodDate() {
    var input = document.getElementById('onboarding-period-date');
    var error = document.getElementById('onboarding-period-error');
    var value = input.value;

    if (!value) {
      error.textContent = 'Indtast venligst en dato';
      return;
    }

    var periodDate = new Date(value);
    var today = new Date();
    if (periodDate > today) {
      error.textContent = 'Datoen kan ikke v\u00E6re i fremtiden';
      return;
    }

    error.textContent = '';
    this._lastPeriodDate = value;
    this._showResult();
  },

  _showResult() {
    var result = this._phase;
    var badge = document.getElementById('onboarding-badge');
    badge.textContent = ELEMENT_LABELS[result.element].charAt(0);
    badge.style.backgroundColor = ELEMENT_COLORS[result.element];

    document.getElementById('onboarding-phase-title').textContent =
      'Du er i Fase ' + result.phase + ': ' + result.name;

    document.getElementById('onboarding-phase-range').textContent =
      result.startAge + '\u2013' + result.endAge + ' \u00E5r';

    document.getElementById('onboarding-element-text').textContent =
      'Dit element er ' + ELEMENT_LABELS[result.element];

    this.goToStep(5);
  },

  finish() {
    var userData = {
      birthdate: this._birthdate,
      age: this._age,
      phase: this._phase.phase,
      element: this._phase.element,
      tracksMenstruation: this._tracksMenstruation || false,
      lastPeriodDate: this._lastPeriodDate || null,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log('[Livsfaser] User data gemt:', userData);
    console.log('[Livsfaser] Verificeret fra localStorage:', localStorage.getItem('user'));
    App.loadScreen('idag');
  }
};

window.Onboarding = Onboarding;

// ---- Detail Content Data ----

const PHASE_DESCRIPTIONS = {
  1: 'Den helt nye sjæl ankommer. Alt er sanseligt, alt er nyt. Barnet lever i vandets element \u2013 flydende, modtagelig, uden grænser. Her grundlægges tillid til livet.',
  2: 'Verden udvider sig. Barnet udforsker med hele kroppen, hele sindet. Stadig i vandets flow, men nu med retning. Fantasien er virkelig, og leg er det vigtigste arbejde.',
  3: 'Den store forvandling begynder. Træets energi skyder op som en kraft der ikke kan stoppes. Kroppen ændrer sig, identiteten søger form. Alt det gamle dør, noget nyt fødes.',
  4: 'Træet blomstrer. Den unge kvinde træder frem med sin egen kraft. Uddannelse, første kærlighed, drømme om fremtiden. Energien er ekspansiv og fuld af muligheder.',
  5: 'Ildens fase. Ansvar for karriere, måske børn, måske parforhold. Energien er intens og handlingsorienteret. Her brænder kvinden for det hun tror på.',
  6: 'Jordens modning. Kvinden finder dybde og substans. Det der ikke længere tjener hende, falder væk. Erfaring bliver til visdom, og rødder vokser dybere.',
  7: 'Høstens tid. Jordens andet kapitel handler om at samle frugterne af alt det levede. Kvinden ved hvad hun vil, og hvad hun ikke vil. En stille styrke vokser.',
  8: 'Metallets klarhed. Det essentielle viser sig. Kvinden frigør sig fra det overflødige \u2013 roller, forventninger, ting. En ny lethed og skarphed opstår.',
  9: 'Vandets tilbagevenden. Cirklen sluttes. Den vise kvinde bærer alle fasers erfaring i sig. Hun flyder igen, men nu med dyb indsigt. Alt er forbundet.'
};

const SEASON_DESCRIPTIONS = {
  'Vinter': 'Vandets tid. Naturen hviler og samler energi i dybet. En tid for indadvendthed, drømme og stille regeneration. Nyrerne og livskraften næres bedst nu.',
  'For\u00E5r': 'Træets tid. Ny energi bryder frem overalt. En tid for nye begyndelser, planlægning og kreativ udfoldelse. Leveren og galdeblæren aktiveres.',
  'Sommer': 'Ildens tid. Alt er i fuld blomst. Energien er på sit højeste \u2013 glæde, forbindelse og ekspressivitet. Hjertet og tyndtarmen er i fokus.',
  'Sensommer': 'Jordens tid. En overgangsperiode hvor vi fordøjer sommerens oplevelser. Tid for næring, omsorg og stabilitet. Milten og maven næres.',
  'Efter\u00E5r': 'Metallets tid. Vi begynder at slippe det overflødige. Klarhed, struktur og essens. Lungerne og tyktarmen er aktive.'
};

const WEEKDAY_DESCRIPTIONS = {
  'S\u00F8ndag': 'Vandets dag. Hvile og refleksion. Lad dig flyde og vær modtagelig for det der kommer. En dag for drømme og indre rejser.',
  'Mandag': 'Vandets dag. M\u00E5nens dag \u2013 emotionel og intuitiv. Lytte indad, mærke efter. Start ugen med blødhed frem for kraft.',
  'Tirsdag': 'Træets dag. Mars\u2019 dag \u2013 handlekraft og mod. Energien er fremadrettet. God dag for nye initiativer og fysisk aktivitet.',
  'Onsdag': 'Ildens dag. Merkurs dag \u2013 kommunikation og forbindelse. Energien er hurtig og social. God dag for samtaler og formidling.',
  'Torsdag': 'Jordens dag. Jupiters dag \u2013 ekspansion og overflod. En dag for vækst, læring og generøsitet. Stabil og nærende energi.',
  'Fredag': 'Metallets dag. Venus\u2019 dag \u2013 skønhed og kærlighed. En dag for at samle ind, nyde og slippe ugens anspændthed.',
  'L\u00F8rdag': 'Jordens dag. Saturns dag \u2013 struktur og ansvar. En dag for at ordne, rydde op og skabe fundament for den kommende uge.'
};

const ORGAN_DESCRIPTIONS = {
  'Lever': 'Leveren styrer kroppens frie flow af energi (Qi). N\u00E5r leveren er i balance, flyder f\u00F8lelser og kreativitet frit. Ubalance kan give frustration og anspændthed.',
  'Lunger': 'Lungerne modtager ren energi og slipper det gamle. De handler om at tage ind og give slip \u2013 b\u00E5de \u00E5nde og f\u00F8lelser. Forbundet med sorg og klarhed.',
  'Tyktarm': 'Tyktarmen handler om at slippe det der ikke l\u00E6ngere tjener os. B\u00E5de fysisk og emotionelt. Evnen til at give slip og bevæge sig videre.',
  'Mave': 'Maven modtager og nedbryder \u2013 b\u00E5de f\u00F8de og indtryk. N\u00E5r maven er stærk, kan vi fordøje livets oplevelser. Forbundet med omsorg og n\u00E6ring.',
  'Milt': 'Milten transformerer n\u00E6ring til energi. Den holder os jordforbundne og giver klarhed i tanken. Ubalance kan give bekymring og grublerier.',
  'Hjerte': 'Hjertet er kejseren \u2013 det styrer bevidsthed, gl\u00E6de og forbindelse. N\u00E5r hjertet er i balance, str\u00E5ler vi. Forbundet med k\u00E6rlighed og tilstedevær.',
  'Tyndtarm': 'Tyndtarmen sorterer det rene fra det urene \u2013 b\u00E5de i f\u00F8de og i tanker. Evnen til at skelne og træffe klare valg.',
  'Blære': 'Bl\u00E6ren lagrer og frigiver. Den giver os mod og viljestyrke. Forbundet med evnen til at handle beslutsomt og holde kursen.',
  'Nyrer': 'Nyrerne er livskraftens rod. De rummer vores essens og dybeste energi. Forbundet med viljestyrke, frygt og livets grundlæggende kraft.',
  'Perikardium': 'Hjertebeskytteren v\u00E6rner om vores emotionelle grænser. Den \u00E5bner og lukker for intimitet. Forbundet med gl\u00E6de og n\u00E6re relationer.',
  'Tredobbelt varmer': 'Den tredobbelte varmer regulerer varme og energi mellem kroppens tre zoner. Den sikrer harmonisk flow mellem alle organer.',
  'Galdeblære': 'Galdeblæren giver os mod til at træffe beslutninger. Den arbejder sammen med leveren om at skabe retning og handlekraft.'
};

const ELEMENT_QUALITIES = {
  'VAND': 'Flydende, dyb, intuitiv, modtagelig',
  'TR\u00C6': 'V\u00E6kst, retning, kreativitet, fornyelse',
  'ILD': 'Varme, gl\u00E6de, forbindelse, transformation',
  'JORD': 'Stabilitet, n\u00E6ring, omsorg, fundament',
  'METAL': 'Klarhed, essens, struktur, slip'
};

// Element interactions — {pron} = hendes/hans, {navn} = personens navn
const ELEMENT_INTERACTIONS = {
  // Nærende cyklus (sheng)
  'VAND_TRÆ':   { type: 'nærer',     text: 'Vand nærer Træ. Din dybde giver plads til {pron} vækst.' },
  'TRÆ_ILD':    { type: 'nærer',     text: 'Træ føder Ild. {navn}s energi tændes af din retning.' },
  'ILD_JORD':   { type: 'nærer',     text: 'Ild varmer Jord. Din passion modnes i {pron} stabilitet.' },
  'JORD_METAL': { type: 'nærer',     text: 'Jord skaber Metal. Din omsorg bærer {pron} klarhed.' },
  'METAL_VAND': { type: 'nærer',     text: 'Metal beriger Vand. {pron} visdom frigør din intuition.' },
  // Omvendt nærende
  'TRÆ_VAND':   { type: 'modtager',  text: 'Træ modtager fra Vand. {pron} dybde nærer din vækst.' },
  'ILD_TRÆ':    { type: 'modtager',  text: 'Ild modtager fra Træ. Din varme vokser i {pron} retning.' },
  'JORD_ILD':   { type: 'modtager',  text: 'Jord modtager fra Ild. {pron} passion nærer din stabilitet.' },
  'METAL_JORD': { type: 'modtager',  text: 'Metal modtager fra Jord. Din klarhed bæres af {pron} omsorg.' },
  'VAND_METAL': { type: 'modtager',  text: 'Vand modtager fra Metal. {pron} skarphed frigør din intuition.' },
  // Kontrollerende cyklus (ke)
  'VAND_ILD':   { type: 'udfordrer', text: 'Vand møder Ild. Din ro kan dæmpe {pron} flamme \u2014 men også beskytte den.' },
  'TRÆ_JORD':   { type: 'udfordrer', text: 'Træ møder Jord. Din vækst kan ryste {pron} fundament \u2014 men også berige det.' },
  'ILD_METAL':  { type: 'udfordrer', text: 'Ild møder Metal. Din varme kan smelte {pron} struktur \u2014 men også forløse den.' },
  'JORD_VAND':  { type: 'udfordrer', text: 'Jord møder Vand. Din omsorg kan blokere {pron} flow \u2014 men også give det retning.' },
  'METAL_TRÆ':  { type: 'udfordrer', text: 'Metal møder Træ. Din klarhed kan beskære {pron} vækst \u2014 men også forme den.' },
  // Omvendt kontrollerende
  'ILD_VAND':   { type: 'udfordres', text: 'Ild møder Vand. {pron} dybde udfordrer din flamme \u2014 men kan også beskytte den.' },
  'JORD_TRÆ':   { type: 'udfordres', text: 'Jord møder Træ. {pron} vækst udfordrer dit fundament \u2014 men beriger det.' },
  'METAL_ILD':  { type: 'udfordres', text: 'Metal møder Ild. {pron} varme udfordrer din struktur \u2014 men forløser den.' },
  'VAND_JORD':  { type: 'udfordres', text: 'Vand møder Jord. {pron} omsorg udfordrer dit flow \u2014 men giver det retning.' },
  'TRÆ_METAL':  { type: 'udfordres', text: 'Træ møder Metal. {pron} klarhed udfordrer din vækst \u2014 men former den.' },
  // Samme element
  'VAND_VAND':  { type: 'spejler',   text: 'Vand møder Vand. I deler den samme dybde \u2014 en stille forståelse uden ord.' },
  'TRÆ_TRÆ':   { type: 'spejler',   text: 'Træ møder Træ. I vokser side om side \u2014 to kræfter med samme retning.' },
  'ILD_ILD':    { type: 'spejler',   text: 'Ild møder Ild. Dobbelt flamme \u2014 dobbelt varme, men pas på udbrændthed.' },
  'JORD_JORD':  { type: 'spejler',   text: 'Jord møder Jord. Dobbelt fundament \u2014 dyb tryghed, men husk bevægelse.' },
  'METAL_METAL':{ type: 'spejler',   text: 'Metal møder Metal. Dobbelt klarhed \u2014 essentielt, men husk varmen.' }
};

function getElementInteraction(yourElement, theirElement, theirName, theirGender) {
  var key = yourElement + '_' + theirElement;
  var interaction = ELEMENT_INTERACTIONS[key] || { type: 'mødes', text: 'Jeres elementer mødes i en unik konstellation.' };
  var pron = (theirGender === 'mand') ? 'hans' : 'hendes';
  var name = theirName || 'den anden';
  var safeName = escapeHtml(name);
  var text = interaction.text.replace(/\{pron\}/g, pron).replace(/\{navn\}/g, safeName);
  return { type: interaction.type, text: text };
}

// ---- Cyklusser i Cyklusser: Cyklus-til-cyklus interaktioner ----

var CYCLE_PAIR_TEXTS = {
  naerer: {
    'VAND_TRÆ': 'Dit indre vand nærer væksten stille. Der er en strøm under overfladen der gør det muligt for noget nyt at spire.',
    'TRÆ_ILD': 'Væksten tænder en flamme. Din fremadrettede kraft gør det muligt at forbinde dig med glæde og varme.',
    'ILD_JORD': 'Ildens varme modner jorden i dig. Din passion skaber substans, og det flygtige bliver til noget der kan bære.',
    'JORD_METAL': 'Fra dit fundament kan du se klart. Jordens omsorg giver dig modet til at slippe det der ikke længere tjener dig.',
    'METAL_VAND': 'Når klarheden siver ned i dybden, finder du ro. Det du har sluppet gør plads til stille visdom.'
  },
  udfordrer: {
    'VAND_ILD': 'Dybden møder flammen. En del af dig søger stilhed mens en anden vil stråle. Begge har ret.',
    'TRÆ_JORD': 'Væksten rusker i dit fundament. Noget nyt vil frem, men noget andet vil holde fast. Lyt til begge.',
    'ILD_METAL': 'Din varme udfordrer din klarhed. Passionen vil mere end strukturen kan rumme \u2014 men måske er det netop det der skal til.',
    'JORD_VAND': 'Din omsorg vil holde fast, men strømmen vil videre. Spændingen mellem tryghed og flow er din læring i dag.',
    'METAL_TRÆ': 'Klarheden beskærer det nye. Du kan se hvad der er vigtigt \u2014 men måske også hvad der må gives slip på for at vokse.'
  },
  spejler: {
    'VAND': 'Dobbelt dybde. Intuitionen er stærk, drømme og fornemmelser flyder frit. Giv dig selv lov til at være i det uden retning.',
    'TRÆ': 'Dobbelt vækst. En kraftig fremadrettet energi \u2014 grib den, men find også øjeblikke af stilhed.',
    'ILD': 'Dobbelt flamme. Du stråler og varmer alt omkring dig. Mærk hvornår det er nok \u2014 også ild har brug for brændstof.',
    'JORD': 'Dobbelt fundament. Dyb tryghed og næring. Mærk fødderne. Men husk at også jord har brug for vand og lys.',
    'METAL': 'Dobbelt klarhed. Alt det uesssentielle falder væk. Det kan føles ensomt, men det er også en gave at se så klart.'
  }
};

var INNER_CLIMATE = {
  fuld_resonans: {
    label: 'Fuld resonans',
    text: 'Tre eller flere af dine cyklusser deler samme element. Det er som en dyb akkord der klinger \u2014 alt i dig peger i samme retning.'
  },
  naerende_flow: {
    label: 'Nærende flow',
    text: 'Dine cyklusser nærer hinanden i en naturlig strøm. Energien flyder let mellem dine lag. En god dag at følge impulsen.'
  },
  stille_balance: {
    label: 'Stille balance',
    text: 'Dine cyklusser holder hinanden i en rolig ligevægt. Ingen kraft dominerer. Brug det til at mærke efter hvad der virkelig kalder.'
  },
  kreativ_spaending: {
    label: 'Kreativ spænding',
    text: 'Der er spænding mellem dine cyklusser. Det er ikke konflikt \u2014 det er kreativ friktion. Noget i dig trækker i forskellige retninger, og netop det kan skabe noget nyt.'
  },
  indre_storm: {
    label: 'Indre storm',
    text: 'Flere af dine cyklusser udfordrer hinanden i dag. Det kan føles uroligt indeni. Mærk det uden at dømme det \u2014 stormen bærer altid en gave med sig.'
  }
};

var CYCLE_LABELS = {
  livsfase: 'Livsfase',
  aarstid: 'Årstid',
  maaned: 'Månedscyklus',
  ugedag: 'Ugedag',
  organur: 'Organur'
};

// TCM nærende cyklus: A → B
var NOURISH_MAP = { 'VAND': 'TRÆ', 'TRÆ': 'ILD', 'ILD': 'JORD', 'JORD': 'METAL', 'METAL': 'VAND' };
// TCM kontrollerende cyklus: A → B
var CONTROL_MAP = { 'VAND': 'ILD', 'TRÆ': 'JORD', 'ILD': 'METAL', 'JORD': 'VAND', 'METAL': 'TRÆ' };

function analyzePair(cycleA, cycleB) {
  var elA = cycleA.element;
  var elB = cycleB.element;

  if (elA === elB) {
    return {
      type: 'spejler', typeLabel: 'Spejler',
      cycleA: cycleA, cycleB: cycleB,
      text: CYCLE_PAIR_TEXTS.spejler[elA]
    };
  }

  if (NOURISH_MAP[elA] === elB) {
    return {
      type: 'naerer', typeLabel: 'Nærer',
      cycleA: cycleA, cycleB: cycleB,
      text: CYCLE_PAIR_TEXTS.naerer[elA + '_' + elB]
    };
  }
  if (NOURISH_MAP[elB] === elA) {
    return {
      type: 'modtager', typeLabel: 'Modtager næring',
      cycleA: cycleA, cycleB: cycleB,
      text: CYCLE_PAIR_TEXTS.naerer[elB + '_' + elA]
    };
  }

  if (CONTROL_MAP[elA] === elB) {
    return {
      type: 'udfordrer', typeLabel: 'Udfordrer',
      cycleA: cycleA, cycleB: cycleB,
      text: CYCLE_PAIR_TEXTS.udfordrer[elA + '_' + elB]
    };
  }
  if (CONTROL_MAP[elB] === elA) {
    return {
      type: 'udfordres', typeLabel: 'Udfordres af',
      cycleA: cycleA, cycleB: cycleB,
      text: CYCLE_PAIR_TEXTS.udfordrer[elB + '_' + elA]
    };
  }

  return {
    type: 'moedes', typeLabel: 'Mødes',
    cycleA: cycleA, cycleB: cycleB,
    text: 'Dine cyklusser mødes i en unik konstellation.'
  };
}

function isPriorityPair(pair) {
  var a = pair.cycleA.name;
  var b = pair.cycleB.name;
  return (
    (a === 'livsfase' && b === 'aarstid') ||
    (a === 'livsfase' && b === 'maaned') ||
    (a === 'aarstid' && b === 'maaned')
  );
}

function determineClimate(counts, elements) {
  var elCounts = {};
  for (var i = 0; i < elements.length; i++) {
    elCounts[elements[i]] = (elCounts[elements[i]] || 0) + 1;
  }
  var maxElCount = 0;
  var keys = Object.keys(elCounts);
  for (var j = 0; j < keys.length; j++) {
    if (elCounts[keys[j]] > maxElCount) maxElCount = elCounts[keys[j]];
  }

  if (maxElCount >= 3) return INNER_CLIMATE.fuld_resonans;

  var nourishing = counts.naerer + counts.modtager;
  var controlling = counts.udfordrer + counts.udfordres;

  if (controlling >= 4) return INNER_CLIMATE.indre_storm;
  if (controlling >= 3 && nourishing <= 2) return INNER_CLIMATE.kreativ_spaending;
  if (nourishing >= 4) return INNER_CLIMATE.naerende_flow;
  if (nourishing >= 3 && controlling <= 1) return INNER_CLIMATE.naerende_flow;
  return INNER_CLIMATE.stille_balance;
}

function analyzeCycleInteractions(data) {
  var cycles = [
    { name: 'livsfase', label: 'Livsfase', element: data.lifePhase.element },
    { name: 'aarstid', label: 'Årstid', element: data.season.element },
    { name: 'maaned', label: 'Månedscyklus', element: data.monthCycle.data.element },
    { name: 'ugedag', label: 'Ugedag', element: data.weekday.element },
    { name: 'organur', label: 'Organur', element: data.organ.element }
  ];

  var pairs = [];
  for (var i = 0; i < cycles.length; i++) {
    for (var j = i + 1; j < cycles.length; j++) {
      pairs.push(analyzePair(cycles[i], cycles[j]));
    }
  }

  var counts = { naerer: 0, modtager: 0, udfordrer: 0, udfordres: 0, spejler: 0, moedes: 0 };
  for (var p = 0; p < pairs.length; p++) {
    counts[pairs[p].type]++;
  }

  var elements = [
    data.lifePhase.element, data.season.element,
    data.monthCycle.data.element, data.weekday.element, data.organ.element
  ];
  var climate = determineClimate(counts, elements);

  var priorityPairs = [];
  var otherPairs = [];
  for (var k = 0; k < pairs.length; k++) {
    if (isPriorityPair(pairs[k])) {
      priorityPairs.push(pairs[k]);
    } else {
      otherPairs.push(pairs[k]);
    }
  }

  return {
    climate: climate,
    priorityPairs: priorityPairs,
    otherPairs: otherPairs,
    allPairs: pairs,
    counts: counts
  };
}

function calculateNextShift(data) {
  var now = new Date();
  var currentHour = now.getHours();

  // Find next organ clock shift
  var nextOrganHour = null;
  var nextOrganName = '';
  var nextOrganElement = '';
  for (var i = 0; i < ORGAN_CLOCK.length; i++) {
    if (ORGAN_CLOCK[i].startHour > currentHour) {
      nextOrganHour = ORGAN_CLOCK[i].startHour;
      nextOrganName = ORGAN_CLOCK[i].organ;
      nextOrganElement = ORGAN_CLOCK[i].element;
      break;
    }
  }
  if (nextOrganHour === null) {
    nextOrganHour = ORGAN_CLOCK[0].startHour;
    nextOrganName = ORGAN_CLOCK[0].organ;
    nextOrganElement = ORGAN_CLOCK[0].element;
  }

  var hoursUntilShift = nextOrganHour - currentHour;
  if (hoursUntilShift <= 0) hoursUntilShift += 24;

  // Tomorrow's weekday
  var tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  var tomorrowWeekday = WEEKDAY_DATA[tomorrow.getDay()];

  return {
    organHoursUntil: hoursUntilShift,
    organName: nextOrganName,
    organElement: ELEMENT_LABELS[nextOrganElement],
    tomorrowDay: tomorrowWeekday.day,
    tomorrowElement: ELEMENT_LABELS[tomorrowWeekday.element]
  };
}

// ---- Dynamisk tekst generation (6 regler) ----

var DYNAMISK_TEKST = {
  'VAND': {
    dominant: 'Fire af dine cyklusser peger mod Vand. Det er måske derfor du mærker en trang til at trække dig. Det er ikke svaghed \u2014 det er {cyklusser} der taler med én stemme.',
    strong: 'Vandet er tydeligt i dig lige nu. {konkret} Mærk det \u2014 det er din intuition der har noget at sige.',
    present: 'Vandet flyder stille med dig i dag. {konkret} En invitation til at lytte indad.'
  },
  'TRÆ': {
    dominant: 'Træets kraft fylder i dig lige nu. {cyklusser} peger alle mod vækst. Følg den retning \u2014 noget vil frem.',
    strong: 'Der er vækstenergi i dig i dag. {konkret} Din krop og dine cyklusser vil fremad.',
    present: 'Træet spirer stille i baggrunden. {konkret} Selv en lille impuls mod noget nyt er værd at følge.'
  },
  'ILD': {
    dominant: 'Ilden brænder! {cyklusser} peger mod forbindelse og varme. Din udstråling er stærk \u2014 brug den.',
    strong: 'Ildens varme er tydelig i dag. {konkret} En god dag for vigtige samtaler og kreativt arbejde.',
    present: 'En stille varme ulmer i dig. {konkret} Nok til at minde dig om at glæde er tilgængelig.'
  },
  'JORD': {
    dominant: 'Jorden bærer dig dybt i dag. {cyklusser} samler sig om næring og fundament. Brug det til at skabe orden.',
    strong: 'Jordens stabilitet er tydelig. {konkret} Din omsorg rækker langt i dag \u2014 start med dig selv.',
    present: 'Jorden er med dig som et stille fundament. {konkret} Du står mere solidt end du tror.'
  },
  'METAL': {
    dominant: 'Metallets klarhed gennemsyrer dig. {cyklusser} peger mod essens. Du ser tingene som de er \u2014 skarpt og rent.',
    strong: 'Klarheden er tilgængelig i dag. {konkret} En god dag for at give slip på det overflødige.',
    present: 'Metallet minder dig stille om det essentielle. {konkret} Hvad er det egentlig der betyder noget?'
  }
};

function generateDynamiskTekst(data, elements) {
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }

  var maxCount = 0;
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) {
    if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
  }

  var dominant = [];
  for (var k = 0; k < keys.length; k++) {
    if (counts[keys[k]] === maxCount) dominant.push(keys[k]);
  }

  var primaryEl = dominant[0];
  var level = 'present';
  if (dominant.length === 1 && maxCount >= 3) level = 'dominant';
  else if (dominant.length === 1 && maxCount === 2) level = 'strong';

  // Byg konkret navngivning (regel 2)
  var parts = [];
  parts.push('Det er ' + data.season.season.toLowerCase());
  if (data.monthCycle.type === 'menstrual') {
    parts.push('dag ' + data.monthCycle.data.day + ' i din cyklus');
  }
  parts.push(data.weekday.day.toLowerCase());
  var konkret = parts.join(', ') + '.';

  // Byg cyklus-navne (regel 1)
  var cyklusNavne = [];
  if (data.lifePhase.element === primaryEl) cyklusNavne.push('din livsfase');
  if (data.season.element === primaryEl) cyklusNavne.push(data.season.season.toLowerCase());
  if (data.monthCycle.data.element === primaryEl) {
    cyklusNavne.push(data.monthCycle.type === 'menstrual' ? 'din månedscyklus' : data.monthCycle.data.name.toLowerCase());
  }
  if (data.weekday.element === primaryEl) cyklusNavne.push(data.weekday.day.toLowerCase());
  if (data.organ.element === primaryEl) cyklusNavne.push('organur (' + data.organ.organ + ')');

  var cyklusStr = '';
  if (cyklusNavne.length > 1) {
    cyklusStr = cyklusNavne.slice(0, -1).join(', ') + ' og ' + cyklusNavne[cyklusNavne.length - 1];
  } else if (cyklusNavne.length === 1) {
    cyklusStr = cyklusNavne[0];
  }

  var template = DYNAMISK_TEKST[primaryEl][level];
  var text = template.replace(/\{konkret\}/g, konkret).replace(/\{cyklusser\}/g, cyklusStr);

  // Tidsdynamik (regel 5)
  var shift = calculateNextShift(data);
  var tidsTekst = 'Om ' + shift.organHoursUntil + ' time' + (shift.organHoursUntil > 1 ? 'r' : '') +
    ' skifter organur til ' + shift.organElement + '. I morgen er det ' +
    shift.tomorrowDay + ' (' + shift.tomorrowElement + ').';

  return {
    text: text,
    tidsdynamik: tidsTekst,
    primaryElement: primaryEl,
    level: level
  };
}

const RELATION_TYPES = [
  { value: 'datter',    label: 'Datter',    gender: 'kvinde' },
  { value: 's\u00F8n',  label: 'S\u00F8n',  gender: 'mand'   },
  { value: 'mor',       label: 'Mor',       gender: 'kvinde' },
  { value: 'far',       label: 'Far',       gender: 'mand'   },
  { value: 'partner',   label: 'Partner',   gender: null      },
  { value: 'veninde',   label: 'Veninde',   gender: 'kvinde' },
  { value: 's\u00F8ster', label: 'S\u00F8ster', gender: 'kvinde' },
  { value: 'bedstemor', label: 'Bedstemor', gender: 'kvinde' },
  { value: 'bedstefar', label: 'Bedstefar', gender: 'mand'   },
  { value: 'anden',     label: 'Anden',     gender: null      }
];

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function getRelationTypeLabel(typeValue) {
  for (var i = 0; i < RELATION_TYPES.length; i++) {
    if (RELATION_TYPES[i].value === typeValue) return RELATION_TYPES[i].label;
  }
  return typeValue || 'Relation';
}

const MENSTRUAL_DESCRIPTIONS = {
  'Menstruation': 'Vandets fase i din m\u00E5nedlige cyklus. Kroppen renser og fornyer sig. En tid for hvile, indadvendthed og at lytte til kroppens behov. Lad dig flyde.',
  'Follikul\u00E6r': 'Tr\u00E6ets fase. Ny energi vokser frem. Kreativiteten v\u00E5gner, og du m\u00E6rker en stigende lyst til at planl\u00E6gge og starte nyt. F\u00F8lg impulsen.',
  '\u00C6gl\u00F8sning': 'Ildens fase. Energien er p\u00E5 sit h\u00F8jeste. Du str\u00E5ler, kommunikerer og forbinder dig med andre. Den mest udadvendte tid i cyklussen.',
  'Luteal': 'Jordens fase. Energien vender indad igen. En tid for at f\u00E6rdigg\u00F8re, rydde op og n\u00E6re dig selv. Kroppen forbereder sig p\u00E5 en ny cyklus.'
};

const MONTH_DESCRIPTIONS = {
  'Januar': 'Vandets m\u00E5ned. \u00C5ret begynder i stilhed og dvale. En tid for at s\u00E6tte intentioner og lade kraften samle sig i dybet.',
  'Februar': 'Vandets m\u00E5ned. Stadig vinterens ro, men det f\u00F8rste lys anes. Drømmene begynder at tage form under overfladen.',
  'Marts': 'Tr\u00E6ets m\u00E5ned. Forårets første tegn bryder frem. Ny energi og nye muligheder. Tiden er til at plante fr\u00F8.',
  'April': 'Tr\u00E6ets m\u00E5ned. V\u00E6ksten accelererer. Alt spirer og udfolder sig. F\u00F8lg tr\u00E6ets kraft opad og udad.',
  'Maj': 'Tr\u00E6ets m\u00E5ned. Naturen er i fuld udfoldelse. Kreativitet, sensualitet og livskraft blomstrer.',
  'Juni': 'Ildens m\u00E5ned. Lyset er p\u00E5 sit l\u00E6ngste. Gl\u00E6de, forbindelse og fejring. Hjertet er \u00E5bent.',
  'Juli': 'Ildens m\u00E5ned. Sommerens h\u00F8jdepunkt. Alt er varmt, levende og ekspressivt. Nyd det fulde liv.',
  'August': 'Jordens m\u00E5ned. Sensommerens modning begynder. Vi h\u00F8ster de f\u00F8rste frugter og n\u00E6rer os af sommerens fylde.',
  'September': 'Jordens m\u00E5ned. Overgang fra sommer til ef\u00E5r. Tid for at samle ind, fordøje og finde stabilitet.',
  'Oktober': 'Metallets m\u00E5ned. Ef\u00E5rets klarhed s\u00E6tter ind. Vi sorterer og slipper det overfl\u00F8dige. Essensen tr\u00E6der frem.',
  'November': 'Metallets m\u00E5ned. M\u00F8rket vokser. En tid for at g\u00E5 indad, finde ro og forbinde sig med det v\u00E6sentlige.',
  'December': 'Vandets m\u00E5ned. \u00C5rets m\u00F8rkeste tid. Dyb hvile og regeneration. Cirklen sluttes, og noget nyt forberedes i stilheden.'
};

// ---- Dagens Indsigt ----

var INSIGHT_TEXTS = {
  'VAND': {
    dominant: 'I dag hviler noget dybt i dig. Vandet kalder \u2013 ikke til handling, men til at lytte indad. M\u00E5ske m\u00E6rker du en stille str\u00F8m under overfladen, en intuition der hvisker. Lad den tale.',
    strong: 'Vandets energi er tydelig i dag. Der er en blødhed tilgængelig for dig, en evne til at flyde med det der kommer. Du beh\u00F8ver ikke styre alt.',
    present: 'Vandet er med dig i dag \u2013 stille, men n\u00E6rv\u00E6rende. Det minder dig om at ikke alt beh\u00F8ver ord.'
  },
  'TR\u00C6': {
    dominant: 'Tr\u00E6ets kraft skyder op gennem dig i dag. Der er en retning i din energi, en l\u00E6ngsel efter at skabe, starte nyt, bevæge dig fremad. F\u00F8lg den impuls \u2013 den ved noget.',
    strong: 'Tr\u00E6ets v\u00E6kstenergi er tydelig. Der er noget der vil spire i dig \u2013 en id\u00E9, et projekt, en samtale. Giv det plads.',
    present: 'Træet minder dig om at vækst sker hele tiden, ogs\u00E5 n\u00E5r du ikke kan se det.'
  },
  'ILD': {
    dominant: 'Ilden brænder i dig i dag! Din udstr\u00E5ling er stærk, din kommunikation skarp. Det er en dag for forbindelse \u2013 r\u00E6k ud, del, v\u00E6r synlig. Din varme smitter.',
    strong: 'Ildens energi varmer dig indefra. Der er gl\u00E6de tilg\u00E6ngelig, en lyst til at m\u00F8de andre. Lad dig ikke holde tilbage af dovenskab.',
    present: 'Ilden flakker stille i baggrunden \u2013 nok til at varme, ikke nok til at br\u00E6nde. N\u00E6r den med n\u00E6rv\u00E6r.'
  },
  'JORD': {
    dominant: 'Jorden b\u00E6rer dig i dag. Der er en dybde og stabilitet tilg\u00E6ngelig \u2013 brug den til at n\u00E6re det vigtige. Lav god mad, ryd op, v\u00E6r grundig. Din omsorg rækker langt.',
    strong: 'Jordens n\u00E6ring str\u00F8mmer. Du kan m\u00E6rke hvad der har substans og hvad der er overfl\u00F8digt. Stol p\u00E5 den fornemmelse.',
    present: 'Jorden er med dig som et stille fundament. Du st\u00E5r mere solidt end du tror.'
  },
  'METAL': {
    dominant: 'Metallets klarhed gennemsyrer dagen. Du ser tingene som de er \u2013 skarpt, rent, uden pynt. Det kan f\u00F8les intenst, men det er en gave. Brug det til at sortere i det v\u00E6sentlige.',
    strong: 'Metallets essens er tydelig. En god dag for at give slip p\u00E5 det der ikke l\u00E6ngere tjener dig \u2013 ting, tanker, vaner.',
    present: 'Metallet minder dig om at det essentielle altid er enklere end vi tror.'
  }
};

// ---- Tidsrejse data ----

var TIDSREJSE_SHORTCUTS = {
  'fortid-selv': [
    { label: 'For 3 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 3); return d; } },
    { label: 'Da jeg var 14', resolve: function(u) { var d = new Date(u.birthdate); d.setFullYear(d.getFullYear() + 14); return d; } },
    { label: 'Da jeg var 21', resolve: function(u) { var d = new Date(u.birthdate); d.setFullYear(d.getFullYear() + 21); return d; } },
    { label: 'For 1 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 1); return d; } }
  ],
  'fortid-relation': [
    { label: 'For 3 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 3); return d; } },
    { label: 'For 5 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 5); return d; } },
    { label: 'For 10 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 10); return d; } }
  ],
  'fremtid-selv': [
    { label: 'Om 1 uge', resolve: function() { var d = new Date(); d.setDate(d.getDate() + 7); return d; } },
    { label: 'Om 3 m\u00e5neder', resolve: function() { var d = new Date(); d.setMonth(d.getMonth() + 3); return d; } },
    { label: 'N\u00e6ste sommer', resolve: function() { var y = new Date().getFullYear(); var d = new Date(y, 5, 21); if (d <= new Date()) d.setFullYear(y + 1); return d; } },
    { label: 'N\u00e5r jeg bliver 50', resolve: function(u) { var d = new Date(u.birthdate); d.setFullYear(d.getFullYear() + 50); return d; } }
  ],
  'fremtid-relation': [
    { label: 'Om 6 m\u00e5neder', resolve: function() { var d = new Date(); d.setMonth(d.getMonth() + 6); return d; } },
    { label: 'Om 1 \u00e5r', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() + 1); return d; } },
    { label: 'Om 5 \u00e5r', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() + 5); return d; } }
  ]
};

var TIDSREJSE_INSIGHT_PAST = {
  'VAND': 'Vandet bar dig dengang. M\u00e5ske m\u00e6rkede du en stille ro, eller m\u00e5ske en dyb uro under overfladen. Begge dele h\u00f8rer til vandets tid.',
  'TR\u00c6': 'Tr\u00e6ets kraft voksede i dig. Der var retning, bev\u00e6gelse, m\u00e5ske en rastl\u00f8shed. Noget ville frem.',
  'ILD': 'Ilden br\u00e6ndte. Du var synlig, varm, forbundet. Eller m\u00e5ske br\u00e6ndte du bare \u2014 for hurtigt, for meget.',
  'JORD': 'Jorden holdt dig. Stabilitet, omsorg, n\u00e6ring. Eller m\u00e5ske f\u00f8ltes det som stilstand. Begge er jordens ansigt.',
  'METAL': 'Metallets klarhed var med dig. Du sorterede, skar fra, fandt essensen. Eller f\u00f8lte savnet af det du havde sluppet.'
};

var TIDSREJSE_INSIGHT_FUTURE = {
  'VAND': 'Vandet vil b\u00e6re dig. En tid for indadvendthed, intuition og stille kraft. Forbered dig ved at skabe rum for ro.',
  'TR\u00c6': 'Tr\u00e6ets v\u00e6kst venter. Ny energi, nye muligheder. Forbered dig ved at plante fr\u00f8ene nu \u2014 de vil spire.',
  'ILD': 'Ilden vil kalde. Forbindelse, gl\u00e6de, kreativitet. Forbered dig ved at samle din energi, s\u00e5 du kan str\u00e5le.',
  'JORD': 'Jorden vil n\u00e6re. Stabilitet og omsorg. Forbered dig ved at styrke dit fundament \u2014 krop, hjem, rutiner.',
  'METAL': 'Metallets klarhed n\u00e6rmer sig. Tid for at give slip og finde essensen. Forbered dig ved allerede nu at sp\u00f8rge: hvad er vigtigt?'
};

var INSIGHT_SUGGESTIONS = {
  'VAND': [
    'Priorit\u00E9r hvile og stille tid',
    'Skriv dine dr\u00F8mme ned',
    'Tag et varmt bad eller g\u00E5 ved vandet'
  ],
  'TR\u00C6': [
    'God dag for nye initiativer',
    'Bev\u00E6g kroppen \u2013 g\u00E5tur, dans, yoga',
    'Start det projekt du har udskudt'
  ],
  'ILD': [
    'God dag for vigtige samtaler',
    'Ring til en du holder af',
    'Del noget kreativt med andre'
  ],
  'JORD': [
    'Lav n\u00E6rende mad til dig selv',
    'Ryd op i \u00E9t rum eller \u00E9n skuffe',
    'V\u00E6r ekstra omsorgsfuld mod dig selv'
  ],
  'METAL': [
    'Giv slip p\u00E5 \u00E9n ting du ikke l\u00E6ngere har brug for',
    '\u00D8v dig i at sige nej med k\u00E6rlighed',
    'Skriv en kort liste over det v\u00E6sentlige'
  ]
};

var BALANCE_TEXTS = [
  'I dag m\u00F8des flere energier i dig p\u00E5 \u00E9n gang. Det kan f\u00F8les som en mild forvirring \u2013 men det er faktisk en rigdom. Du har adgang til flere kvaliteter end normalt. Brug det.',
  'Dine cyklusser peger i forskellige retninger i dag. Det er som at st\u00E5 i et kryds \u2013 alle veje er \u00E5bne. Lyt efter hvilken der kalder st\u00E6rkest.',
  'N\u00E5r elementerne er i balance, er det som en stille s\u00F8. Overfladen er rolig, men dybet rummer alt. En dag for at v\u00E6re \u2013 ikke for at g\u00F8re.'
];

// ---- Expanded Insight: Long Analysis Texts ----

var INSIGHT_ANALYSIS = {
  'VAND': {
    dominant: [
      'Vandet str\u00F8mmer st\u00E6rkt igennem dig i dag. Det er en af de dage hvor din intuition taler h\u00F8jere end din logik \u2013 og det er helt rigtigt. M\u00E5ske m\u00E6rker du en tr\u00E6thed der ikke handler om s\u00F8vn, men om at din krop beder dig om at lytte indad.',
      'N\u00E5r vandet dominerer, \u00E5bner der sig en port til det dybe. Dr\u00F8mme, minder og fornemmelser kan dukke op uden varsel. M\u00E5ske bearbejder din krop og sjæl noget vigtigt lige nu. Giv det plads.',
      'Vandets energi n\u00E6rer dine nyrer og din livskraft. Det er i dag du kan genoplade p\u00E5 det dybeste niveau. T\u00E6nk p\u00E5 det som en indre vinter \u2013 en tid hvor frøene hviler i jorden og samler kraft til det n\u00E6ste spring.',
      'Lad i dag handle om at modtage frem for at give. Du beh\u00F8ver ikke producere noget, bevise noget eller v\u00E6re \u201Dp\u00E5\u201D. I vandets energi kan stilhed nemlig v\u00E6re en form for handling, og hvile en form for styrke.'
    ],
    strong: [
      'Vandets energi er tydeligt til stede i dag. Ikke overvældende, men mærkbart. Du har en blødhed tilgængelig som gør dig mere intuitiv og modtagelig end normalt.',
      'Det er en god dag for at lytte \u2013 til din krop, til andre, til det der ligger mellem ordene. Vandet inviterer til refleksion og indre ro. Brug det til at mærke efter hvad der virkelig betyder noget.',
      'Nyrerne og blæren arbejder for dig. Drik rigeligt vand, og giv dig selv pauser. Din energi kan komme i bølger \u2013 det er naturligt når vandet flyder.'
    ],
    present: [
      'Vandet er med dig som en stille underton i dag. Det minder dig om at ikke alt behøver tempo og retning. Nogle gange er det nok bare at flyde.',
      'Selv en lille dosis vand-energi kan gøre en forskel. Mærk efter om der er noget du har brug for at slippe, drømme om, eller bare lade være.'
    ]
  },
  'TR\u00C6': {
    dominant: [
      'Tr\u00E6ets kraft skyder op igennem dig i dag med en næsten fysisk styrke. Du mærker det som en trang til at bevæge dig, starte nyt, skabe noget. Det er livets v\u00E6kstkraft der banker p\u00E5 \u2013 og m\u00E5ske vil den f\u00F8lges.',
      'N\u00E5r tr\u00E6et dominerer, er det fordi din lever-energi er aktiv. Leveren styrer det frie flow af Qi i kroppen, og n\u00E5r den er st\u00E6rk, f\u00F8ler du dig fri, kreativ og retningsbestemt. Frustration kan ogs\u00E5 dukke op \u2013 det er bare blokeret v\u00E6kstenergi.',
      'M\u00E5ske er det en dag for handling frem for analyse. Start det projekt du har g\u00E5et og t\u00E6nkt p\u00E5. Skriv den f\u00F8rste linje. Tag det f\u00F8rste skridt. Tr\u00E6et vokser ikke ved at vente p\u00E5 perfekte forhold.',
      'Din krop har brug for bev\u00E6gelse i dag. G\u00E5 en lang tur, dans i k\u00F8kkenet, stræk dig. Træets energi er fysisk \u2013 den skal ud gennem kroppen for at blomstre fuldt.'
    ],
    strong: [
      'Tr\u00E6ets energi er tydelig i dag. Der er noget der vil spire i dig \u2013 m\u00E5ske en id\u00E9, m\u00E5ske en samtale, m\u00E5ske et skridt du har udskudt. Giv det plads.',
      'Leveren og galdeblæren arbejder for dig. Det er en god dag for at rydde mentalt op og finde retning. Hvad vil du egentlig?',
      'V\u00E6ksten sker allerede \u2013 ogs\u00E5 selvom du ikke kan se resultatet endnu. Stol p\u00E5 processen og f\u00F8lg den gr\u00F8nne energi fremad.'
    ],
    present: [
      'Tr\u00E6et minder dig stille om at v\u00E6kst er din naturlige tilstand. Selv på de stille dage sker der noget under overfladen.',
      'En lille impuls mod noget nyt \u2013 f\u00F8lg den, ogs\u00E5 selvom den er svag. Tr\u00E6et begynder altid med en lille spire.'
    ]
  },
  'ILD': {
    dominant: [
      'Ilden br\u00E6nder i dig i dag! Det er en af de sjældne dage hvor din udstr\u00E5ling er n\u00E6sten h\u00E5ndgribelig. Andre m\u00E6rker det \u2013 din varme, din energi, din tilstedev\u00E6relse. Brug det til at forbinde dig med de mennesker der betyder noget.',
      'N\u00E5r ilden dominerer, er hjertet i centrum. Gl\u00E6de, latter, dyb forbindelse \u2013 alt dette er tilg\u00E6ngeligt for dig nu. Men ild kan ogs\u00E5 br\u00E6nde \u2013 s\u00E5 m\u00E6rk efter hvorn\u00E5r det er nok.',
      'Det er en dag for vigtige samtaler, kreativt arbejde og at dele det du b\u00E6rer p\u00E5. Ildens energi handler om transformation \u2013 at tage noget r\u00E5t og g\u00F8re det til noget str\u00E5lende.',
      'Din hjerte-energi er p\u00E5 sit h\u00F8jeste. M\u00E6rk gl\u00E6den \u2013 ogs\u00E5 den stille slags. Det beh\u00F8ver ikke v\u00E6re en eksplosion. Ildens dybeste form er den varme der n\u00E6rer uden at fortære.'
    ],
    strong: [
      'Ildens energi varmer dig indefra i dag. Der er en lethed og en lyst til at m\u00F8de verden. F\u00F8lg den impuls \u2013 ring til nogen, g\u00E5 ud, v\u00E6r synlig.',
      'Hjertet og tyndtarmen er aktive. Det er en god dag for at sortere i dine f\u00F8lelser og handle p\u00E5 det der giver gl\u00E6de. Lad resten ligge.',
      'Forbindelse er jo et grundl\u00E6ggende behov. Du beh\u00F8ver faktisk ikke v\u00E6re alene med det hele.'
    ],
    present: [
      'En stille varme ulmer i baggrunden. Nok til at minde dig om at glæde er tilgængelig \u2013 ogs\u00E5 i det sm\u00E5. Et smil, en god kop te, en solstråle.',
      'N\u00E6r ilden med n\u00E6rv\u00E6r og taknemmelighed. Selv en lille flamme kan lyse et helt rum op.'
    ]
  },
  'JORD': {
    dominant: [
      'Jorden b\u00E6rer dig i dag med en stille styrke. Du m\u00E6rker det som en trang til at n\u00E6re \u2013 dig selv, dine n\u00E6rmeste, dit hjem. Den trang er faktisk en dyb form for kraft.',
      'N\u00E5r jorden dominerer, er milten og maven i centrum. Det handler om at fordøje \u2013 b\u00E5de mad og oplevelser. Hvad har du brug for at bearbejde? Hvad har du brug for at slippe igennem systemet?',
      'Det er en god dag for at lave mad med omhu, rydde op i et rum, eller tage sig af noget praktisk du har udskudt. Jordens energi elsker at skabe orden og n\u00E6ring ud af kaos.',
      'Din omsorg r\u00E6kker langt i dag. Og m\u00E5ske kan du starte med dig selv. Hvad har du egentlig brug for lige nu?'
    ],
    strong: [
      'Jordens n\u00E6ring str\u00F8mmer tydeligt. Du kan m\u00E6rke hvad der har substans og hvad der er overfladisk. Stol p\u00E5 den fornemmelse.',
      'Milten og maven kalder p\u00E5 opm\u00E6rksomhed. Spis varmt, spis n\u00E6rende, spis roligt. Din fordøjelse \u2013 b\u00E5de den fysiske og den emotionelle \u2013 er vigtig i dag.',
      'Brug dagen til at skabe fundament. Hvad er det vigtigste du kan g\u00F8re for din stabilitet?'
    ],
    present: [
      'Jorden er med dig som et stille fundament. Du st\u00E5r mere solidt end du tror. M\u00E6rk f\u00F8dderne mod gulvet \u2013 bogstaveligt.',
      'En lille invitation til omsorg og n\u00E6ring. Det beh\u00F8ver ikke v\u00E6re stort \u2013 en god frokost, et øjeblik i stilhed.'
    ]
  },
  'METAL': {
    dominant: [
      'Metallets klarhed gennemsyrer din dag. Du ser tingene som de er \u2013 skarpt, rent, uden pynt. Det kan f\u00F8les intenst, m\u00E5ske lidt ensomt, men det er en gave. Det er det essentielle der tr\u00E6der frem.',
      'N\u00E5r metallet dominerer, er lungerne og tyktarmen aktive. Det handler om at tage det gode ind og slippe det overfl\u00F8dige. B\u00E5de fysisk og emotionelt. Hvad fylder i dit liv som ikke l\u00E6ngere tjener dig?',
      'Metallets energi er forbundet med sorg og slip. Ikke som noget negativt, men som en naturlig del af livets kredsløb. At give slip er at skabe plads til det nye. Det kr\u00E6ver mod \u2013 og m\u00E5ske er det netop tilg\u00E6ngeligt i dag.',
      'Det er en dag for ærlighed \u2013 med dig selv og med andre. Sig det du mener. Skær ind til benet. Metallets gave er at vise hvad der virkelig t\u00E6ller, n\u00E5r alt det un\u00F8dvendige er skr\u00E6llet v\u00E6k.'
    ],
    strong: [
      'Metallets essens er tydelig i dag. En god dag for at give slip p\u00E5 det der ikke l\u00E6ngere tjener dig \u2013 ting, tanker, vaner, m\u00E5ske endda relationer.',
      'Lungerne beder dig om at tr\u00E6kke vejret dybt. Rigtig dybt. Giv dig selv plads til at puste ud \u2013 lade det gamle g\u00E5.',
      'Klarhed er tilg\u00E6ngelig i dag. Brug den til at se hvad der er v\u00E6sentligt. Listen er kortere end du tror.'
    ],
    present: [
      'Metallet minder dig stille om at det essentielle altid er enklere end vi tror. Hvad er det egentlig der betyder noget?',
      'En lille invitation til at forenkle. \u00C9n ting mindre. \u00C9t nej med k\u00E6rlighed. \u00C9t skridt mod klarhed.'
    ]
  }
};

// ---- Expanded Insight: Yin Yoga per Element ----

var INSIGHT_YOGA = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: 'Åbner hofterne og stimulerer nyremeridianen. Sid 3\u20135 min og lad kroppen synke.' },
    { pose: 'Sleeping Swan', desc: 'Dyb hofteåbner der arbejder med nyrer og blære. Hold 3 min per side.' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Fold fremad og lad tyngdekraften g\u00F8re arbejdet. Stimulerer blæremeridianen langs ryggen.' }
  ],
  'TR\u00C6': [
    { pose: 'Dragonfly (Upavistha Konasana)', desc: '\u00C5bner inderlårene og stimulerer levermeridianen. Sid bredt og fold stille frem.' },
    { pose: 'Twisted Roots', desc: 'Lig på ryggen med ben i kryds, lad knæene falde til \u00E9n side. Vrider leveren blidt.' },
    { pose: 'Shoelace (Gomukhasana)', desc: 'Dyb hofteåbner der rammer galdeblæremeridianen langs ydersiden af benet.' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: 'Kn\u00E6l og lad brystkassen synke mod gulvet. \u00C5bner hjerteomr\u00E5det dybt.' },
    { pose: 'Sphinx', desc: 'Blid rygb\u00F8jning der \u00E5bner hjertet og stimulerer hjerte- og tyndtarmsmeridianen.' },
    { pose: 'Open Wings', desc: 'Lig på maven med \u00E9n arm ud til siden. Dyb åbning af bryst og skuldre.' }
  ],
  'JORD': [
    { pose: 'Child\u2019s Pose (Balasana)', desc: 'Den ultimative yin-stilling for jord. Giver tryghed, ro og stimulerer mave-miltmeridianen.' },
    { pose: 'Sphinx med bolster', desc: 'L\u00E6g en bolster under maven og hvil. Stimulerer maven og milten blidt.' },
    { pose: 'Reclining Twist', desc: 'Lig p\u00E5 ryggen, tr\u00E6k et kn\u00E6 over. Masserer mave og milt og giver dyb afslapning.' }
  ],
  'METAL': [
    { pose: 'Seal Pose', desc: 'Dybere udgave af Sphinx. \u00C5bner brystet og stimulerer lungerne. Hold 3\u20135 min.' },
    { pose: 'Banana Pose', desc: 'Lig p\u00E5 ryggen og kurv kroppen som en banan. Åbner siden af kroppen og lungemeridianen.' },
    { pose: 'Savasana med fokus p\u00E5 \u00E5ndedræt', desc: 'Dyb hvile med bevidst ind- og ud\u00E5nding. Lungernes ultimative n\u00E6ring.' }
  ]
};

// ---- Expanded Insight: Food & Herbs per Element ----

var INSIGHT_FOOD = {
  'VAND': [
    { item: 'Sort sesam & valnødder', desc: 'N\u00E6rer nyreessensen og styrker livskraften.' },
    { item: 'Misosuppe', desc: 'Varm, salt og dybt nærende for nyrerne.' },
    { item: 'Ingef\u00E6rte med honning', desc: 'Varmer nyreomr\u00E5det og st\u00F8tter fordøjelsen.' },
    { item: 'Tang og søgr\u00E6s', desc: 'Salt smag n\u00E6rer vandelelementet direkte.' }
  ],
  'TR\u00C6': [
    { item: 'Gr\u00F8nne bladgr\u00F8ntsager', desc: 'Spinat, gr\u00F8nk\u00E5l, rucola \u2013 st\u00F8tter leverens rensning.' },
    { item: 'Citron i varmt vand', desc: 'Den sure smag stimulerer leveren og galdebl\u00E6ren.' },
    { item: 'M\u00E6lkebøttete', desc: 'Klassisk leverurt der renser og styrker.' },
    { item: 'Spirer og kimchi', desc: 'Fermenteret mad st\u00F8tter leverens arbejde og fordøjelsen.' }
  ],
  'ILD': [
    { item: 'R\u00F8de bær (hindbær, jordbær)', desc: 'N\u00E6rer hjertet og blodet. Den bitre smag st\u00F8tter ilden.' },
    { item: 'Kakao (ren)', desc: 'Hjertemedicin i naturlig form. Åbner og varmer.' },
    { item: 'Hibiscuste', desc: 'K\u00F8lende og hjertestyrkende. Perfekt n\u00E5r ilden er intens.' },
    { item: 'Granatæble', desc: 'Forbundet med hjertet i mange traditioner. Antioxidantrig.' }
  ],
  'JORD': [
    { item: 'S\u00F8de rodfrugter (s\u00F8de kartofler, gulerødder)', desc: 'Den søde smag n\u00E6rer milten og maven.' },
    { item: 'Havregrød', desc: 'Varm, blød, n\u00E6rende \u2013 perfekt jordmad.' },
    { item: 'Kamillte', desc: 'Beroligende for maven og nervesystemet.' },
    { item: 'Supper og gryderetter', desc: 'Langsomt kogt mad n\u00E6rer jordelementet dybt.' }
  ],
  'METAL': [
    { item: 'P\u00E6rer', desc: 'Den klassiske lungefrugt i kinesisk medicin. Fugter og n\u00E6rer.' },
    { item: 'Ris (hvid eller jasmin)', desc: 'Den skærende, hvide energi st\u00F8tter metalelementet.' },
    { item: 'Timian- og salvite', desc: 'Urter der st\u00F8tter lungerne og åndedrætsystemet.' },
    { item: 'Hvid r\u00E6ddike (daikon)', desc: 'Renser lungerne og tyktarmen. Skarp smag st\u00F8tter metal.' }
  ]
};

// ---- Expanded Insight: Focus Areas per Element ----

var INSIGHT_FOCUS = {
  'VAND': [
    'Hvile og regeneration \u2013 priorit\u00E9r s\u00F8vn og stille tid',
    'Lyt til din intuition \u2013 den taler tydeligt i dag',
    'V\u00E6r t\u00E5lmodig med dig selv \u2013 ikke alt beh\u00F8ver svar nu'
  ],
  'TR\u00C6': [
    'Handling og retning \u2013 tag det første skridt',
    'Kreativitet \u2013 giv dine idéer form',
    'Bevægelse \u2013 din krop har brug for at udtrykke træets energi'
  ],
  'ILD': [
    'Forbindelse \u2013 r\u00E6k ud til nogen du holder af',
    'Glæde \u2013 gør noget der tænder dig op indeni',
    'Kommunikation \u2013 sig det du mener, med varme'
  ],
  'JORD': [
    'N\u00E6ring \u2013 start med at n\u00E6re dig selv f\u00F8rst',
    'Stabilitet \u2013 skab orden i ét lille område',
    'Omsorg \u2013 din omsorgsevne er din superkraft i dag'
  ],
  'METAL': [
    'Klarhed \u2013 se p\u00E5 dit liv med ærlige øjne',
    'Slip \u2013 giv slip p\u00E5 \u00E9n ting der tynger',
    'Essens \u2013 hvad er det absolut vigtigste lige nu?'
  ]
};

function generateInsight(elements) {
  // Count element occurrences
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    counts[el] = (counts[el] || 0) + 1;
  }

  // Find max count
  var maxCount = 0;
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) {
    if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
  }

  // Find all elements with max count
  var dominant = [];
  for (var k = 0; k < keys.length; k++) {
    if (counts[keys[k]] === maxCount) dominant.push(keys[k]);
  }

  var text = '';
  var suggestionElement = '';

  if (dominant.length === 1 && maxCount >= 3) {
    // Clear dominant element
    text = INSIGHT_TEXTS[dominant[0]].dominant;
    suggestionElement = dominant[0];
  } else if (dominant.length === 1 && maxCount === 2) {
    text = INSIGHT_TEXTS[dominant[0]].strong;
    suggestionElement = dominant[0];
  } else {
    // Balance / tie — pick a random balance text based on day
    var dayIndex = new Date().getDate() % BALANCE_TEXTS.length;
    text = BALANCE_TEXTS[dayIndex];
    suggestionElement = dominant[0];
  }

  // Pick 2 suggestions
  var allSuggestions = INSIGHT_SUGGESTIONS[suggestionElement];
  var s1 = allSuggestions[0];
  var s2 = allSuggestions[1];
  // If there's a secondary element, mix in one of its suggestions
  if (dominant.length > 1) {
    s2 = INSIGHT_SUGGESTIONS[dominant[1]][0];
  }

  // Element dots
  var dotHtml = '';
  for (var d = 0; d < keys.length; d++) {
    var elKey = keys[d];
    for (var n = 0; n < counts[elKey]; n++) {
      dotHtml += '<span class="indsigt__dot" style="background-color:' + ELEMENT_COLORS[elKey] + '" title="' + ELEMENT_LABELS[elKey] + '"></span>';
    }
  }

  return {
    text: text,
    suggestions: [s1, s2],
    dotHtml: dotHtml,
    dominantElement: suggestionElement,
    dominantColor: ELEMENT_COLORS[suggestionElement]
  };
}

// ---- Concentric Circles SVG ----

// SVG hit-testing helpers
function isInsideEllipse(x, y, cx, cy, rx, ry) {
  return ((x - cx) * (x - cx)) / (rx * rx) + ((y - cy) * (y - cy)) / (ry * ry) <= 1;
}

function hitTestRing(x, y) {
  // Test from innermost to outermost (first match wins)
  if (isInsideEllipse(x, y, 200, 292, 50, 35)) return 'dig';
  if (isInsideEllipse(x, y, 200, 276, 80, 55)) return 'organur';
  if (isInsideEllipse(x, y, 200, 260, 105, 70)) return 'ugedag';
  if (isInsideEllipse(x, y, 200, 241, 140, 93)) return 'maaned';
  if (isInsideEllipse(x, y, 200, 220, 180, 120)) return 'aarstid';
  if (isInsideEllipse(x, y, 200, 199, 220, 147)) return 'livsfase';
  return null;
}

function handleRingClick(ring) {
  if (ring === 'dig') {
    App.loadScreen('relationer');
  } else {
    showDetail(ring);
  }
}

function renderConcentricCircles(container, data) {
  var lifePhase = data.lifePhase;
  var season = data.season;
  var weekday = data.weekday;
  var organ = data.organ;
  var monthCycle = data.monthCycle;

  // Build dynamic text values with element names
  var livsfaseText = 'Fase ' + lifePhase.phase + ' \u2013 ' + ELEMENT_LABELS[lifePhase.element];
  var aarstidText = season.season + ' \u2013 ' + ELEMENT_LABELS[season.element];
  var maanedText = '';
  if (monthCycle.type === 'menstrual') {
    maanedText = 'Dag ' + monthCycle.data.day + ' \u2013 ' + monthCycle.data.phase;
  } else {
    maanedText = monthCycle.data.name + ' \u2013 ' + ELEMENT_LABELS[monthCycle.data.element];
  }
  var ugedagText = weekday.day + ' \u2013 ' + ELEMENT_LABELS[weekday.element];
  var organurText = organ.hours + ' \u2013 ' + organ.organ;

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 0 450 440" class="koncentriske-svg">';

  // Defs - curved paths for textPath
  svg += '<defs>';
  svg += '<path id="curve0" d="M 0 183 A 220 147 0 0 1 400 183"/>';
  svg += '<path id="curve1" d="M 40 200 A 180 120 0 0 1 360 200"/>';
  svg += '<path id="curve2" d="M 75 231 A 140 93 0 0 1 325 231"/>';
  svg += '<path id="curve3" d="M 105 260 A 105 70 0 0 1 295 260"/>';
  svg += '<path id="curve4" d="M 135 284 A 75 50 0 0 1 265 284"/>';
  svg += '</defs>';

  // Ring 0 - LIVSFASE (yderst) — mørkeblå
  svg += '<ellipse cx="200" cy="199" rx="220" ry="147" fill="' + RING_COLORS[0] + '"/>';
  svg += '<text x="200" y="74" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">LIVSFASE</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve0" startOffset="50%">' + livsfaseText + '</textPath></text>';

  // Ring 1 - ÅRSTID
  svg += '<ellipse cx="200" cy="220" rx="180" ry="120" fill="' + RING_COLORS[1] + '"/>';
  svg += '<text x="200" y="120" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">\u00C5RSTID</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve1" startOffset="50%">' + aarstidText + '</textPath></text>';

  // Ring 2 - MÅNED
  svg += '<ellipse cx="200" cy="241" rx="140" ry="93" fill="' + RING_COLORS[2] + '"/>';
  svg += '<text x="200" y="166" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">M\u00C5NED</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve2" startOffset="50%">' + maanedText + '</textPath></text>';

  // Ring 3 - UGEDAG
  svg += '<ellipse cx="200" cy="260" rx="105" ry="70" fill="' + RING_COLORS[3] + '"/>';
  svg += '<text x="200" y="207" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#244382" letter-spacing="1">UGEDAG</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#244382" text-anchor="middle">';
  svg += '<textPath href="#curve3" startOffset="50%">' + ugedagText + '</textPath></text>';

  // Ring 4 - ORGANUR (inderst)
  svg += '<ellipse cx="200" cy="276" rx="75" ry="50" fill="' + RING_COLORS[4] + '"/>';
  svg += '<text x="200" y="245" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#244382" letter-spacing="1">ORGANUR</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#244382" text-anchor="middle">';
  svg += '<textPath href="#curve4" startOffset="50%">' + organurText + '</textPath></text>';

  // Centrum - DIG
  svg += '<ellipse cx="200" cy="292" rx="45" ry="30" fill="' + RING_COLORS.center + '"/>';
  svg += '<text x="200" y="289" text-anchor="middle" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="#FFFFFF">DIG</text>';
  svg += '<text x="200" y="304" text-anchor="middle" font-family="Times New Roman, serif" font-size="10" fill="rgba(255,255,255,0.8)">Tryk for relationer</text>';

  svg += '</svg>';

  container.innerHTML = svg;

  // Attach click handler for ring navigation
  var svgEl = container.querySelector('.koncentriske-svg');
  if (svgEl) {
    svgEl.addEventListener('click', function(e) {
      var pt = svgEl.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      var svgPt = pt.matrixTransform(svgEl.getScreenCTM().inverse());
      var ring = hitTestRing(svgPt.x, svgPt.y);
      if (ring) {
        handleRingClick(ring);
      }
    });
  }
}

// ---- I dag Screen ----

function initIdagScreen() {
  var userData = localStorage.getItem('user');
  if (!userData) return;

  var user = JSON.parse(userData);
  var now = new Date();

  // Calculate all cycles
  var age = calculateAge(user.birthdate);
  var lifePhase = calculateLifePhase(age);
  var season = calculateSeason(now);
  var weekday = calculateWeekday(now);
  var organ = calculateOrganClock(now);

  // 5th cycle: menstrual or calendar month
  var monthCycle = null;
  if (user.tracksMenstruation && user.lastPeriodDate) {
    monthCycle = { type: 'menstrual', data: calculateMenstrualDay(user.lastPeriodDate, now) };
  } else {
    monthCycle = { type: 'calendar', data: calculateCalendarMonth(now) };
  }

  // Store for detail views and insight page
  window._idagData = {
    lifePhase: lifePhase, season: season, weekday: weekday,
    organ: organ, age: age, monthCycle: monthCycle
  };

  // Store active elements for insight page
  window._activeElements = [
    lifePhase.element,
    season.element,
    monthCycle.data.element,
    weekday.element,
    organ.element
  ];

  // Render concentric circles visualization
  var vizContainer = document.getElementById('idag-viz');
  if (vizContainer) {
    renderConcentricCircles(vizContainer, window._idagData);
  }

  // Render Venn diagram
  renderIdagVenn();

  // Render new home sections
  renderDynamiskTekst();
  renderKontekstuelleForslag();
  renderIdagCheckin();
  renderHovedkort();
}

function renderIdagVenn() {
  var el = document.getElementById('idag-venn');
  if (!el || !window._idagData) return;
  var d = window._idagData;
  var cycleAnalysis = analyzeCycleInteractions(d);
  // Count elements
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  var maxEl = elements[0]; var maxC = 0;
  var ks = Object.keys(counts);
  for (var j = 0; j < ks.length; j++) { if (counts[ks[j]] > maxC) { maxC = counts[ks[j]]; maxEl = ks[j]; } }

  el.innerHTML = renderVennTwo({
    leftTitle: 'DINE CYKLUSSER',
    leftLines: [
      'Fase ' + d.lifePhase.phase + ' \u00B7 ' + d.season.season,
      ELEMENT_LABELS[maxEl] + ' dominerer'
    ],
    rightTitle: 'DIN KROP',
    rightLines: [
      d.organ.organ + ' (' + d.organ.hours + ')',
      d.weekday.day + ' \u00B7 ' + ELEMENT_LABELS[d.weekday.element]
    ],
    overlapTitle: 'LIGE NU',
    overlapLines: [
      '*' + cycleAnalysis.climate.label
    ],
    leftElement: d.lifePhase.element,
    rightElement: d.organ.element
  });
}

function renderIdagCheckin() {
  var el = document.getElementById('idag-checkin');
  if (!el) return;

  var today = getLocalDateStr(new Date());
  var checkins = getCheckins();
  var done = checkins.some(function(c) { return c.date && c.date.substring(0, 10) === today; });

  if (done) {
    el.innerHTML = '<button class="idag__checkin-btn" onclick="App.loadScreen(\'min-udvikling\')" style="opacity:0.6;">\u2713 Tjekket ind i dag \u00B7 Se din udvikling</button>';
  } else {
    el.innerHTML = '<button class="idag__checkin-btn" onclick="App.loadScreen(\'min-udvikling\')">\uD83C\uDF3F Dagens check-in \u2014 hvordan f\u00F8les din energi?</button>';
  }
}

// ---- Home Screen Sections (ny navigation) ----

function renderDynamiskTekst() {
  var el = document.getElementById('idag-dynamisk');
  if (!el || !window._activeElements || !window._idagData) return;

  var dynamisk = generateDynamiskTekst(window._idagData, window._activeElements);
  var cycleAnalysis = analyzeCycleInteractions(window._idagData);

  var html = '<h3 class="idag__section-title">Lige nu</h3>';
  html += '<p class="idag__climate-label">' + cycleAnalysis.climate.label + '</p>';
  html += '<p class="idag__section-text">' + dynamisk.text + '</p>';
  html += '<p class="idag__tidsdynamik">' + dynamisk.tidsdynamik + '</p>';
  html += '<button class="idag__link-btn" onclick="App.loadScreen(\'mine-cyklusser\')">Se din samlede indsigt \u2192</button>';
  el.innerHTML = html;
}

function renderKontekstuelleForslag() {
  var el = document.getElementById('idag-forslag');
  if (!el || !window._activeElements || !window._idagData) return;

  var insight = generateInsight(window._activeElements);
  var data = window._idagData;
  var primaryEl = insight.dominantElement;

  var html = '<h3 class="idag__section-title">Forslag til dig</h3>';
  html += '<div class="idag__forslag-kort">';

  // Kort 1: Øvelse baseret på element
  var yogaPoses = INSIGHT_YOGA[primaryEl];
  if (yogaPoses && yogaPoses.length > 0) {
    var pose = yogaPoses[0];
    html += '<div class="forslag-kort" onclick="App.loadScreen(\'min-praksis\')">';
    html += '<p class="forslag-kort__label">' + ELEMENT_LABELS[primaryEl] + '-element øvelse</p>';
    html += '<p class="forslag-kort__text">' + pose.pose + ' passer til din energi i dag</p>';
    html += '<span class="forslag-kort__arrow">\u2192</span>';
    html += '</div>';
  }

  // Kort 2: Kost baseret på årstid + element
  var foodItems = INSIGHT_FOOD[primaryEl];
  if (foodItems && foodItems.length > 0) {
    var food = foodItems[0];
    html += '<div class="forslag-kort" onclick="App.loadScreen(\'min-praksis\')">';
    html += '<p class="forslag-kort__label">' + data.season.season + 'kost</p>';
    html += '<p class="forslag-kort__text">' + food.item + ' \u2014 ' + food.desc.split('.')[0] + '</p>';
    html += '<span class="forslag-kort__arrow">\u2192</span>';
    html += '</div>';
  }

  // Kort 3: Relation (hvis oprettet)
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  if (relations.length > 0) {
    var r = relations[0];
    var rAge = calculateAge(r.birthdate);
    var rPhase = (r.gender === 'mand') ? calculateMalePhase(rAge) : calculateLifePhase(rAge);
    html += '<div class="forslag-kort" onclick="navigateToRelationDetail(0)">';
    html += '<p class="forslag-kort__label">' + escapeHtml(r.name) + ' er i ' + ELEMENT_LABELS[rPhase.element] + '</p>';
    html += '<p class="forslag-kort__text">Se hvordan jeres faser mødes lige nu</p>';
    html += '<span class="forslag-kort__arrow">\u2192</span>';
    html += '</div>';
  }

  html += '</div>';
  el.innerHTML = html;
}

function renderHovedkort() {
  var el = document.getElementById('idag-kort');
  if (!el) return;

  var data = window._idagData;
  var elements = window._activeElements;

  // Generer dynamisk undertekst for hvert kort
  var cyklusserSub = generateCyklusserSubtitle(elements);
  var relationerSub = generateRelationerSubtitle();
  var praksisSub = generatePraksisSubtitle(elements);
  var rejseSub = generateRejseSubtitle();

  var kort = [
    { screen: 'mine-cyklusser', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="none" stroke="#244382" stroke-width="1.5"/><circle cx="16" cy="16" r="10" fill="none" stroke="#3A5A9A" stroke-width="1.5"/><circle cx="16" cy="16" r="6" fill="none" stroke="#5070AD" stroke-width="1.5"/><circle cx="16" cy="16" r="2.5" fill="#244382"/></svg>', title: 'Mine Cyklusser', subtitle: cyklusserSub },
    { screen: 'mine-relationer', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="12" cy="16" r="9" fill="none" stroke="#B8A6C0" stroke-width="1.5"/><circle cx="20" cy="16" r="9" fill="none" stroke="#B8A6C0" stroke-width="1.5"/></svg>', title: 'Mine Relationer', subtitle: relationerSub },
    { screen: 'min-praksis', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M16 4c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" fill="none" stroke="#8B9A9D" stroke-width="1.5"/><path d="M16 18v6M12 28h8" stroke="#8B9A9D" stroke-width="1.5" stroke-linecap="round"/></svg>', title: 'Min Praksis', subtitle: praksisSub },
    { screen: 'min-rejse', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M8 28C8 28 10 4 16 4s8 24 8 24" fill="none" stroke="#7690C1" stroke-width="1.5"/><circle cx="16" cy="16" r="2" fill="#7690C1"/></svg>', title: 'Min Rejse', subtitle: rejseSub }
  ];

  var html = '';
  for (var i = 0; i < kort.length; i++) {
    var k = kort[i];
    html += '<div class="hoved-kort" onclick="App.loadScreen(\'' + k.screen + '\')">';
    html += '<div class="hoved-kort__icon">' + k.icon + '</div>';
    html += '<div class="hoved-kort__content">';
    html += '<h3 class="hoved-kort__title">' + k.title + '</h3>';
    html += '<p class="hoved-kort__subtitle">' + k.subtitle + '</p>';
    html += '</div>';
    html += '<span class="hoved-kort__arrow">\u203A</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

function generateCyklusserSubtitle(elements) {
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var parts = [];
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) {
    var label = ELEMENT_LABELS[keys[j]];
    var count = counts[keys[j]];
    if (count > 1) {
      parts.unshift(count + ' lag i ' + label);
    } else {
      parts.push('\u00C9t i ' + label);
    }
  }
  return parts.slice(0, 3).join(' \u00B7 ') + ' \u00B7 Se hvad det betyder';
}

function generateRelationerSubtitle() {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  if (relations.length === 0) return 'Tilf\u00F8j en relation for at se jeres faser';
  var r = relations[0];
  var rAge = calculateAge(r.birthdate);
  var rPhase = (r.gender === 'mand') ? calculateMalePhase(rAge) : calculateLifePhase(rAge);
  return escapeHtml(r.name) + ' er i Fase ' + rPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[rPhase.element];
}

function generatePraksisSubtitle(elements) {
  var insight = generateInsight(elements);
  return ELEMENT_LABELS[insight.dominantElement] + '-\u00F8velser passer til din energi i dag';
}

function generateRejseSubtitle() {
  // Placeholder - kan udvides med tracking data
  return 'Dit personlige bibliotek og din udvikling';
}

// ---- Detail Views ----

function showDetail(type) {
  var d = window._idagData;
  if (!d) return;

  var title = '';
  var html = '';

  if (type === 'livsfase') {
    var lp = d.lifePhase;
    var color = ELEMENT_COLORS[lp.element];
    title = 'Fase ' + lp.phase + ': ' + lp.name;
    html =
      '<div class="detail__badge" style="background-color:' + color + '">' + ELEMENT_LABELS[lp.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + lp.startAge + '\u2013' + lp.endAge + ' \u00E5r \u00B7 ' + ELEMENT_LABELS[lp.element] + '</p>' +
      '<p class="detail__qualities">' + ELEMENT_QUALITIES[lp.element] + '</p>' +
      '<p class="detail__text">' + PHASE_DESCRIPTIONS[lp.phase] + '</p>';

  } else if (type === 'aarstid') {
    var s = d.season;
    var color2 = ELEMENT_COLORS[s.element];
    title = s.season;
    html =
      '<div class="detail__badge" style="background-color:' + color2 + '">' + ELEMENT_LABELS[s.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + ELEMENT_LABELS[s.element] + '</p>' +
      '<p class="detail__text">' + SEASON_DESCRIPTIONS[s.season] + '</p>';

  } else if (type === 'ugedag') {
    var w = d.weekday;
    var color3 = ELEMENT_COLORS[w.element];
    title = w.day;
    html =
      '<div class="detail__badge" style="background-color:' + color3 + '">' + ELEMENT_LABELS[w.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + ELEMENT_LABELS[w.element] + '</p>' +
      '<p class="detail__text">' + WEEKDAY_DESCRIPTIONS[w.day] + '</p>';

  } else if (type === 'organur') {
    var o = d.organ;
    var color4 = ELEMENT_COLORS[o.element];
    title = o.organ;
    html =
      '<div class="detail__badge" style="background-color:' + color4 + '">' + ELEMENT_LABELS[o.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + o.hours + ' \u00B7 ' + ELEMENT_LABELS[o.element] + '</p>' +
      '<p class="detail__text">' + ORGAN_DESCRIPTIONS[o.organ] + '</p>';

  } else if (type === 'maaned') {
    var mc = d.monthCycle;
    if (mc.type === 'menstrual') {
      var m = mc.data;
      var color5 = ELEMENT_COLORS[m.element];
      title = m.phase;
      html =
        '<div class="detail__badge" style="background-color:' + color5 + '">' + ELEMENT_LABELS[m.element].charAt(0) + '</div>' +
        '<p class="detail__meta">Dag ' + m.day + ' \u00B7 ' + m.range + ' \u00B7 ' + ELEMENT_LABELS[m.element] + '</p>' +
        '<p class="detail__text">' + MENSTRUAL_DESCRIPTIONS[m.phase] + '</p>';
    } else {
      var cm = mc.data;
      var color6 = ELEMENT_COLORS[cm.element];
      title = cm.name;
      html =
        '<div class="detail__badge" style="background-color:' + color6 + '">' + ELEMENT_LABELS[cm.element].charAt(0) + '</div>' +
        '<p class="detail__meta">' + ELEMENT_LABELS[cm.element] + '</p>' +
        '<p class="detail__text">' + MONTH_DESCRIPTIONS[cm.name] + '</p>';
    }
  }

  // Build detail view
  var container = document.getElementById('idag-detail');
  if (!container) return;

  container.innerHTML =
    '<h2 class="detail__title">' + title + '</h2>' +
    '<div class="detail__body">' + html + '</div>';

  // Show detail, hide home sections
  var homeEl = document.getElementById('idag-home');
  if (homeEl) homeEl.classList.add('idag--hidden');
  container.classList.add('idag-detail--visible');
  App.detailVisible = true;

  // Show back button
  var backBtn = document.getElementById('back-button');
  if (backBtn) backBtn.classList.add('header__back--visible');
}

function hideDetail() {
  var homeEl = document.getElementById('idag-home');
  if (homeEl) homeEl.classList.remove('idag--hidden');
  document.getElementById('idag-detail').classList.remove('idag-detail--visible');
  App.detailVisible = false;

  // Hide back button (we're back on home)
  var backBtn = document.getElementById('back-button');
  if (backBtn) backBtn.classList.remove('header__back--visible');
}

window.showDetail = showDetail;
window.hideDetail = hideDetail;

// ---- Samlede Indsigt Page ----

function initSamledeIndsigtScreen() {
  var elements = window._activeElements;
  if (!elements) {
    // Recalculate if navigated directly
    var userData = localStorage.getItem('user');
    if (!userData) return;
    var user = JSON.parse(userData);
    var now = new Date();
    var age = calculateAge(user.birthdate);
    var lifePhase = calculateLifePhase(age);
    var season = calculateSeason(now);
    var weekday = calculateWeekday(now);
    var organ = calculateOrganClock(now);
    var monthCycle = null;
    if (user.tracksMenstruation && user.lastPeriodDate) {
      monthCycle = { type: 'menstrual', data: calculateMenstrualDay(user.lastPeriodDate, now) };
    } else {
      monthCycle = { type: 'calendar', data: calculateCalendarMonth(now) };
    }
    elements = [
      lifePhase.element,
      season.element,
      monthCycle.data.element,
      weekday.element,
      organ.element
    ];
    window._activeElements = elements;
  }

  var insight = generateInsight(elements);

  // Count elements for display
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }

  // Find dominant
  var maxCount = 0;
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) {
    if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
  }
  var dominant = [];
  for (var k = 0; k < keys.length; k++) {
    if (counts[keys[k]] === maxCount) dominant.push(keys[k]);
  }

  var primaryElement = insight.dominantElement;

  // 0. Render Venn diagram
  var vennEl = document.getElementById('indsigt-venn');
  if (vennEl) {
    vennEl.innerHTML = renderVennThree({
      topTitle: '\u00d8VELSER',
      topLines: ['Yoga \u00B7 Bev\u00e6gelse'],
      bottomLeftTitle: 'KOST',
      bottomLeftLines: ['Mad \u00B7 Urter'],
      bottomRightTitle: 'FOKUS',
      bottomRightLines: ['Sind \u00B7 Retning'],
      overlapAB: 'n\u00e6ring',
      overlapAC: 'intentioner',
      overlapBC: 'opm\u00e6rksomhed',
      centerTitle: ELEMENT_LABELS[primaryElement],
      centerLines: ['*din indsigt i dag']
    });
  }

  // 1. Render dots
  var dotsEl = document.getElementById('indsigt-dots');
  if (dotsEl) {
    // Show element summary: dots grouped by element
    var dotsHtml = '';
    for (var d = 0; d < keys.length; d++) {
      var elKey = keys[d];
      dotsHtml += '<div class="indsigt-page__dot-group">';
      dotsHtml += '<span class="indsigt-page__dot-label">' + ELEMENT_LABELS[elKey] + '</span>';
      dotsHtml += '<div class="indsigt-page__dot-row">';
      for (var n = 0; n < counts[elKey]; n++) {
        dotsHtml += '<span class="indsigt__dot" style="background-color:' + ELEMENT_COLORS[elKey] + '"></span>';
      }
      dotsHtml += '</div></div>';
    }
    dotsEl.innerHTML = dotsHtml;
  }

  // 2. Render analysis (3-4 paragraphs)
  var analyseEl = document.getElementById('indsigt-analyse');
  if (analyseEl) {
    var level = 'present';
    if (dominant.length === 1 && maxCount >= 3) level = 'dominant';
    else if (dominant.length === 1 && maxCount === 2) level = 'strong';

    var analysisTexts = INSIGHT_ANALYSIS[primaryElement][level];
    var html = '';
    for (var a = 0; a < analysisTexts.length; a++) {
      html += '<p class="indsigt-page__paragraph">' + analysisTexts[a] + '</p>';
    }
    analyseEl.innerHTML = html;
  }

  // 3. Render Yin Yoga
  var yogaEl = document.getElementById('indsigt-yoga');
  if (yogaEl) {
    var yogaPoses = INSIGHT_YOGA[primaryElement];
    var yogaHtml = '';
    for (var y = 0; y < yogaPoses.length; y++) {
      yogaHtml += '<div class="indsigt-page__list-item">' +
        '<p class="indsigt-page__item-title" style="--accent-color:' + ELEMENT_COLORS[primaryElement] + '">' + yogaPoses[y].pose + '</p>' +
        '<p class="indsigt-page__item-desc">' + yogaPoses[y].desc + '</p>' +
      '</div>';
    }
    yogaEl.innerHTML = yogaHtml;
  }

  // 4. Render Food & Herbs
  var foodEl = document.getElementById('indsigt-food');
  if (foodEl) {
    var foodItems = INSIGHT_FOOD[primaryElement];
    var foodHtml = '';
    for (var f = 0; f < foodItems.length; f++) {
      foodHtml += '<div class="indsigt-page__list-item">' +
        '<p class="indsigt-page__item-title" style="--accent-color:' + ELEMENT_COLORS[primaryElement] + '">' + foodItems[f].item + '</p>' +
        '<p class="indsigt-page__item-desc">' + foodItems[f].desc + '</p>' +
      '</div>';
    }
    foodEl.innerHTML = foodHtml;
  }

  // 5. Render Focus Areas
  var focusEl = document.getElementById('indsigt-focus');
  if (focusEl) {
    var focusItems = INSIGHT_FOCUS[primaryElement];
    var focusHtml = '';
    for (var fc = 0; fc < focusItems.length; fc++) {
      focusHtml += '<p class="indsigt-page__focus-item" style="--dot-color:' + ELEMENT_COLORS[primaryElement] + '">' + focusItems[fc] + '</p>';
    }
    focusEl.innerHTML = focusHtml;
  }

  // 6. Render Suggestions
  var suggestionsEl = document.getElementById('indsigt-suggestions');
  if (suggestionsEl) {
    var allSugg = INSIGHT_SUGGESTIONS[primaryElement];
    // If secondary element, mix in
    var suggestions = allSugg.slice();
    if (dominant.length > 1) {
      var secSugg = INSIGHT_SUGGESTIONS[dominant[1]];
      if (secSugg && secSugg.length > 0) {
        suggestions.push(secSugg[0]);
      }
    }
    var suggHtml = '';
    for (var sg = 0; sg < suggestions.length; sg++) {
      suggHtml += '<p class="indsigt-page__focus-item" style="--dot-color:' + ELEMENT_COLORS[primaryElement] + '">' + suggestions[sg] + '</p>';
    }
    suggestionsEl.innerHTML = suggHtml;
  }

  // Action bar
  var screenEl = document.querySelector('.screen--indsigt');
  if (screenEl) {
    screenEl.insertAdjacentHTML('beforeend', renderActionBar('samlede-indsigt'));
  }
}

// ---- Relationer Screen ----

var RelationerState = {
  view: 'overview',      // overview | add | detail
  detailIndex: -1,
  addStep: 1,
  addData: {}
};

function initRelationerScreen() {
  console.log('[Livsfaser] initRelationerScreen called');
  RelationerState.view = 'overview';
  RelationerState.detailIndex = -1;
  renderRelationerOverview();
}

function toggleRelationerView(view) {
  console.log('[Livsfaser] toggleRelationerView →', view);
  RelationerState.view = view;
  var overview = document.getElementById('relationer-overview');
  var add = document.getElementById('relationer-add');
  var detail = document.getElementById('relationer-detail');
  if (!overview || !add || !detail) {
    console.warn('[Livsfaser] toggleRelationerView: DOM elements missing!', { overview: !!overview, add: !!add, detail: !!detail });
    return;
  }

  overview.classList.toggle('relationer__view--hidden', view !== 'overview');
  add.classList.toggle('relationer__view--hidden', view !== 'add');
  detail.classList.toggle('relationer__view--hidden', view !== 'detail');
  window.scrollTo(0, 0);
}

function renderRelationerOverview() {
  console.log('[Livsfaser] renderRelationerOverview');
  toggleRelationerView('overview');
  var el = document.getElementById('relationer-list');
  if (!el) { console.warn('[Livsfaser] relationer-list not found!'); return; }

  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var userData = localStorage.getItem('user');
  var html = '';

  html += '<div class="relationer__header">';
  html += '<h2 class="relationer__title">Relationer</h2>';
  html += '<p class="relationer__subtitle">Se hvordan jeres faser mødes</p>';
  html += '</div>';

  if (relations.length === 0) {
    html += '<div class="relationer__empty">';
    html += '<div class="relationer__empty-icon">\u2661</div>';
    html += '<p class="relationer__empty-text">Tilføj en person for at se hvordan jeres livsfaser og elementer mødes.</p>';
    html += '<button class="relationer__add-btn" onclick="showAddRelation()">+ Tilføj person</button>';
    html += '</div>';
  } else {
    html += '<div class="relationer__list">';
    for (var i = 0; i < relations.length; i++) {
      var r = relations[i];
      var age = calculateAge(r.birthdate);
      var phase = (r.gender === 'mand') ? calculateMalePhase(age) : calculateLifePhase(age);
      var initial = r.name ? r.name.charAt(0).toUpperCase() : '?';
      var typeLabel = getRelationTypeLabel(r.relationType);
      html += '<div class="relationer__item" onclick="showRelationDetail(' + i + ')">';
      html += '<div class="relationer__item-circle">' + escapeHtml(initial) + '</div>';
      html += '<div class="relationer__item-info">';
      html += '<div class="relationer__item-name">' + escapeHtml(r.name) + '</div>';
      html += '<div class="relationer__item-meta">' + age + ' år · ' + phase.name + ' · ' + ELEMENT_LABELS[phase.element] + ' · ' + escapeHtml(typeLabel) + '</div>';
      html += '</div>';
      html += '<span class="relationer__item-arrow">\u203A</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '<button class="relationer__add-btn" onclick="showAddRelation()">+ Tilføj person</button>';
  }
  el.innerHTML = html;
}

// ---- Add relation flow ----

function showAddRelation() {
  RelationerState.addStep = 1;
  RelationerState.addData = { name: '', birthdate: '', gender: '', relationType: '' };
  toggleRelationerView('add');
  renderAddRelationStep();
}

function renderAddRelationStep() {
  var el = document.getElementById('relationer-add-content');
  if (!el) return;
  var step = RelationerState.addStep;
  var d = RelationerState.addData;
  var html = '<div class="relationer__add-step">';
  html += '<div class="relationer__add-content">';

  if (step === 1) {
    // Name
    html += '<label class="relationer__add-label">Hvad hedder personen?</label>';
    html += '<input type="text" class="relationer__add-input" id="relation-name-input" placeholder="Navn" value="' + escapeHtml(d.name) + '" autocomplete="off">';
    html += '<div class="relationer__add-error" id="relation-error"></div>';
  } else if (step === 2) {
    // Birthdate
    html += '<label class="relationer__add-label">Hvornår er ' + escapeHtml(d.name) + ' født?</label>';
    html += '<input type="date" class="relationer__add-input" id="relation-date-input" value="' + (d.birthdate || '') + '">';
    html += '<div class="relationer__add-error" id="relation-error"></div>';
  } else if (step === 3) {
    // Gender
    html += '<label class="relationer__add-label">Køn</label>';
    html += '<p class="relationer__add-hint">Kvinder følger en 7-års cyklus, mænd en 8-års cyklus</p>';
    html += '<div class="relationer__pills">';
    html += '<button class="relationer__pill' + (d.gender === 'kvinde' ? ' relationer__pill--selected' : '') + '" onclick="setRelationGender(\'kvinde\')">Kvinde</button>';
    html += '<button class="relationer__pill' + (d.gender === 'mand' ? ' relationer__pill--selected' : '') + '" onclick="setRelationGender(\'mand\')">Mand</button>';
    html += '</div>';
    html += '<div class="relationer__add-error" id="relation-error"></div>';
  } else if (step === 4) {
    // Relation type
    html += '<label class="relationer__add-label">Relation til dig</label>';
    var filtered = [];
    for (var i = 0; i < RELATION_TYPES.length; i++) {
      var rt = RELATION_TYPES[i];
      if (rt.gender === null || rt.gender === d.gender) {
        filtered.push(rt);
      }
    }
    html += '<div class="relationer__type-grid">';
    for (var j = 0; j < filtered.length; j++) {
      var isSelected = (d.relationType === filtered[j].value);
      html += '<button class="relationer__type-btn' + (isSelected ? ' relationer__type-btn--selected' : '') + '" onclick="setRelationType(\'' + filtered[j].value + '\')">' + escapeHtml(filtered[j].label) + '</button>';
    }
    html += '</div>';
    html += '<div class="relationer__add-error" id="relation-error"></div>';
  } else if (step === 5) {
    // Confirm
    var age = calculateAge(d.birthdate);
    var phase = (d.gender === 'mand') ? calculateMalePhase(age) : calculateLifePhase(age);
    var initial = d.name ? d.name.charAt(0).toUpperCase() : '?';
    html += '<div class="relationer__confirm">';
    html += '<div class="relationer__confirm-circle">' + escapeHtml(initial) + '</div>';
    html += '<div class="relationer__confirm-name">' + escapeHtml(d.name) + '</div>';
    html += '<div class="relationer__confirm-meta">' + age + ' år · ' + phase.name + '</div>';
    html += '<div class="relationer__confirm-meta">' + ELEMENT_LABELS[phase.element] + ' · ' + escapeHtml(getRelationTypeLabel(d.relationType)) + '</div>';
    html += '</div>';
  }

  html += '</div>'; // close add-content

  // Navigation buttons
  html += '<div class="relationer__nav">';
  if (step > 1) {
    html += '<button class="relationer__nav-btn relationer__nav-btn--secondary" onclick="addRelationBack()">Tilbage</button>';
  }
  if (step < 5) {
    html += '<button class="relationer__nav-btn relationer__nav-btn--primary" onclick="addRelationNext()">Næste</button>';
  } else {
    html += '<button class="relationer__nav-btn relationer__nav-btn--primary" onclick="saveRelation()">Gem</button>';
  }
  html += '</div>';
  html += '</div>'; // close add-step
  el.innerHTML = html;

  // Focus input if step 1 or 2
  if (step === 1) {
    var inp = document.getElementById('relation-name-input');
    if (inp) setTimeout(function() { inp.focus(); }, 100);
  } else if (step === 2) {
    var dinp = document.getElementById('relation-date-input');
    if (dinp) setTimeout(function() { dinp.focus(); }, 100);
  }
}

function addRelationNext() {
  var d = RelationerState.addData;
  var step = RelationerState.addStep;
  var errorEl = document.getElementById('relation-error');

  if (step === 1) {
    var inp = document.getElementById('relation-name-input');
    d.name = inp ? inp.value.trim() : '';
    if (!d.name) {
      if (errorEl) errorEl.textContent = 'Skriv venligst et navn';
      return;
    }
  } else if (step === 2) {
    var dinp = document.getElementById('relation-date-input');
    d.birthdate = dinp ? dinp.value : '';
    if (!d.birthdate) {
      if (errorEl) errorEl.textContent = 'Vælg venligst en fødselsdato';
      return;
    }
    var bdate = new Date(d.birthdate);
    if (bdate >= new Date()) {
      if (errorEl) errorEl.textContent = 'Fødselsdato skal være i fortiden';
      return;
    }
  } else if (step === 3) {
    if (!d.gender) {
      if (errorEl) errorEl.textContent = 'Vælg venligst køn';
      return;
    }
  } else if (step === 4) {
    if (!d.relationType) {
      if (errorEl) errorEl.textContent = 'Vælg venligst relationstype';
      return;
    }
  }

  RelationerState.addStep = step + 1;
  renderAddRelationStep();
}

function addRelationBack() {
  if (RelationerState.addStep > 1) {
    RelationerState.addStep--;
    renderAddRelationStep();
  }
}

function setRelationGender(gender) {
  RelationerState.addData.gender = gender;
  // Reset relation type when gender changes
  RelationerState.addData.relationType = '';
  renderAddRelationStep();
}

function setRelationType(type) {
  RelationerState.addData.relationType = type;
  renderAddRelationStep();
}

function saveRelation() {
  var d = RelationerState.addData;
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  relations.push({
    name: d.name,
    birthdate: d.birthdate,
    gender: d.gender,
    relationType: d.relationType,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem('relations', JSON.stringify(relations));
  renderRelationerOverview();
}

// ---- Relation detail ----

function showRelationDetail(index) {
  console.log('[Livsfaser] showRelationDetail →', index);
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  if (index < 0 || index >= relations.length) { console.warn('[Livsfaser] Invalid relation index:', index, 'total:', relations.length); return; }
  RelationerState.detailIndex = index;
  toggleRelationerView('detail');

  var r = relations[index];
  var el = document.getElementById('relationer-detail-content');
  if (!el) { console.warn('[Livsfaser] relationer-detail-content not found!'); return; }

  // User data
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  if (!userData.birthdate) return;
  var userAge = calculateAge(userData.birthdate);
  var userPhase = calculateLifePhase(userAge);
  var userName = userData.name || 'Dig';

  // Relation data
  var theirAge = calculateAge(r.birthdate);
  var theirPhase = (r.gender === 'mand') ? calculateMalePhase(theirAge) : calculateLifePhase(theirAge);

  // Element interaction
  var interaction = getElementInteraction(userPhase.element, theirPhase.element, r.name, r.gender);

  // Determine the cycle info for overlap description
  var userCycleLabel = (r.gender === 'mand') ? 'Hendes 7-års cyklus' : '7-års cyklus';
  var theirCycleLabel = (r.gender === 'mand') ? 'Hans 8-års cyklus' : '7-års cyklus';

  var html = '';

  // Venn diagram with rich text
  html += renderVennTwo({
    leftTitle: escapeHtml(userName).toUpperCase(),
    leftLines: [
      'Fase ' + userPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[userPhase.element],
      userPhase.name,
      userAge + ' \u00E5r'
    ],
    rightTitle: escapeHtml(r.name).toUpperCase(),
    rightLines: [
      'Fase ' + theirPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[theirPhase.element],
      theirPhase.name,
      theirAge + ' \u00E5r'
    ],
    overlapTitle: interaction.type.toUpperCase(),
    overlapLines: [
      ELEMENT_LABELS[userPhase.element] + ' \u2194 ' + ELEMENT_LABELS[theirPhase.element]
    ],
    leftElement: userPhase.element,
    rightElement: theirPhase.element
  });

  // Interaction insight (below Venn)
  html += '<div class="relationer__interaction">';
  html += '<div class="relationer__interaction-type">' + escapeHtml(interaction.type) + '</div>';
  html += '<div class="relationer__interaction-text">' + escapeHtml(interaction.text) + '</div>';
  html += '</div>';

  // Delete button
  html += '<button class="relationer__delete-btn" onclick="deleteRelation(' + index + ')">Slet ' + escapeHtml(r.name) + '</button>';

  el.innerHTML = html;
}

// Legacy function — kept for any other callers
function renderMeetingCircles(userPhase, theirPhase, userName, theirName) {
  return renderVennTwo({
    leftTitle: (userName || 'Dig').toUpperCase(),
    leftLines: [ELEMENT_LABELS[userPhase.element] || ''],
    rightTitle: (theirName || '?').toUpperCase(),
    rightLines: [ELEMENT_LABELS[theirPhase.element] || ''],
    overlapTitle: 'M\u00D8DES',
    overlapLines: [],
    leftElement: userPhase.element,
    rightElement: theirPhase.element,
    compact: true
  });
}

function deleteRelation(index) {
  if (!confirm('Er du sikker på, at du vil slette denne relation?')) return;
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  relations.splice(index, 1);
  localStorage.setItem('relations', JSON.stringify(relations));
  renderRelationerOverview();
}

function navigateToRelationDetail(index) {
  App.loadScreen('relationer').then(function() {
    // Double rAF ensures DOM is painted before we switch view
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        showRelationDetail(index);
      });
    });
  });
}

// Export relationer functions
window.showAddRelation = showAddRelation;
window.addRelationNext = addRelationNext;
window.addRelationBack = addRelationBack;
window.setRelationGender = setRelationGender;
window.setRelationType = setRelationType;
window.saveRelation = saveRelation;
window.showRelationDetail = showRelationDetail;
window.deleteRelation = deleteRelation;
window.navigateToRelationDetail = navigateToRelationDetail;

// ---- Tidsrejse Screen ----

var TidsrejseState = {
  view: 'overview',
  type: null,
  subView: 'input',
  selectedDate: null,
  selectedRelations: [],
  results: null
};

function initTidsrejseScreen() {
  console.log('[Livsfaser] initTidsrejseScreen called');
  TidsrejseState.view = 'overview';
  TidsrejseState.type = null;
  TidsrejseState.subView = 'input';
  TidsrejseState.selectedDate = null;
  TidsrejseState.selectedRelations = [];
  TidsrejseState.results = null;
  renderTidsrejseOverview();
}

function toggleTidsrejseView(view) {
  TidsrejseState.view = view;
  var overview = document.getElementById('tidsrejse-overview');
  var active = document.getElementById('tidsrejse-active');
  if (!overview || !active) return;
  overview.classList.toggle('tidsrejse__view--hidden', view !== 'overview');
  active.classList.toggle('tidsrejse__view--hidden', view !== 'active');
  window.scrollTo(0, 0);
}

function renderTidsrejseOverview() {
  toggleTidsrejseView('overview');
  var el = document.getElementById('tidsrejse-cards');
  if (!el) return;

  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var hasRelations = relations.length > 0;

  var cards = [
    { type: 'fortid-selv', icon: '\u25C0', title: 'Forst\u00e5 din fortid', subtitle: 'Se tilbage p\u00e5 en bestemt dag eller periode i dit liv. M\u00e5ske var der et \u00e5r, hvor alt f\u00f8ltes tungt \u2014 eller en tid med uforklarlig energi. Dine cyklusser kan vise dig hvorfor.', needsRelations: false },
    { type: 'fortid-relation', icon: '\u25C0\u2661', title: 'Forst\u00e5 relationer i fortiden', subtitle: 'De konflikter, der aldrig blev l\u00f8st. De samtaler, der gik sk\u00e6vt. M\u00e5ske handlede det ikke om jer \u2014 men om to livsfaser, der trak i hver sin retning. Se det her.', needsRelations: true },
    { type: 'fremtid-selv', icon: '\u25B6', title: 'Forbered din fremtid', subtitle: 'Hvilke cyklusser venter dig om et halvt \u00e5r, om fem \u00e5r, n\u00e5r du fylder 50? Din krop ved allerede hvad der kommer. Her kan du m\u00f8de det p\u00e5 forh\u00e5nd.', needsRelations: false },
    { type: 'fremtid-relation', icon: '\u25B6\u2661', title: 'Forbered relationer i fremtiden', subtitle: 'En ferie med familien. Jul med tre generationer. Dit barns n\u00e6ste store overgang. Se hvilke elementer I m\u00f8des i \u2014 og hvorn\u00e5r timingen er bedst.', needsRelations: true }
  ];

  var html = '<div class="tidsrejse__header">';
  html += '<h2 class="tidsrejse__title">Tidsrejse</h2>';
  html += '<p class="tidsrejse__subtitle">Dine cyklusser var aktive l\u00e6nge f\u00f8r du kendte til dem. Og de forts\u00e6tter ud i fremtiden. Her kan du rejse tilbage og forst\u00e5 \u2014 eller frem og forberede dig.</p>';
  html += '</div>';

  // Venn diagram: FORTID / FREMTID / DIN FORSTÅELSE
  html += renderVennTwo({
    leftTitle: 'FORTID',
    leftLines: ['Hvad skete der?', 'Hvilke faser var aktive?'],
    rightTitle: 'FREMTID',
    rightLines: ['Hvad venter?', 'Hvilke cyklusser skifter?'],
    overlapTitle: 'DIN FORST\u00c5ELSE',
    overlapLines: ['*M\u00f8nstrene gentager sig', '*\u2014 nu kan du se dem']
  });

  html += '<div class="tidsrejse__grid">';
  for (var i = 0; i < cards.length; i++) {
    var c = cards[i];
    var disabled = c.needsRelations && !hasRelations;
    html += '<div class="tidsrejse__card' + (disabled ? ' tidsrejse__card--disabled' : '') + '"' + (disabled ? '' : ' onclick="openTidsrejse(\'' + c.type + '\')"') + '>';
    html += '<h3 class="tidsrejse__card-title">' + c.title + '</h3>';
    html += '<p class="tidsrejse__card-subtitle">' + c.subtitle + '</p>';
    if (disabled) html += '<p class="tidsrejse__card-hint">Tilf\u00f8j en relation f\u00f8rst</p>';
    html += '</div>';
  }
  html += '</div>';
  el.innerHTML = html;
}

function openTidsrejse(type) {
  TidsrejseState.type = type;
  TidsrejseState.subView = 'input';
  TidsrejseState.selectedDate = null;
  TidsrejseState.selectedRelations = [];
  TidsrejseState.results = null;
  toggleTidsrejseView('active');
  renderTidsrejseInput();
}

function renderTidsrejseInput() {
  var el = document.getElementById('tidsrejse-content');
  if (!el) return;
  var type = TidsrejseState.type;
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var isPast = type.indexOf('fortid') !== -1;
  var isRelation = type.indexOf('relation') !== -1;

  var titles = {
    'fortid-selv': 'Forst\u00e5 din fortid',
    'fortid-relation': 'Forst\u00e5 relationer i fortiden',
    'fremtid-selv': 'Forbered din fremtid',
    'fremtid-relation': 'Forbered relationer i fremtiden'
  };

  var html = '<h2 class="tidsrejse__input-title">' + titles[type] + '</h2>';

  // Relation selection for B/D
  if (isRelation) {
    var relations = JSON.parse(localStorage.getItem('relations') || '[]');
    var maxSelect = (type === 'fremtid-relation') ? 3 : 1;
    html += '<div class="tidsrejse__section">';
    html += '<label class="tidsrejse__label">V\u00e6lg person' + (maxSelect > 1 ? 'er (maks ' + maxSelect + ')' : '') + '</label>';
    html += '<div class="tidsrejse__relation-pills">';
    for (var i = 0; i < relations.length; i++) {
      var isSelected = TidsrejseState.selectedRelations.indexOf(i) !== -1;
      html += '<button class="tidsrejse__relation-pill' + (isSelected ? ' tidsrejse__relation-pill--selected' : '') + '" onclick="toggleTidsrejseRelation(' + i + ')">' + escapeHtml(relations[i].name) + '</button>';
    }
    html += '</div></div>';
  }

  // Date picker
  var today = getLocalDateStr(new Date());
  html += '<div class="tidsrejse__section">';
  html += '<label class="tidsrejse__label">V\u00e6lg dato</label>';
  html += '<input type="date" class="tidsrejse__date-input" id="tidsrejse-date"' + (isPast ? ' max="' + today + '"' : ' min="' + today + '"') + ' value="' + (TidsrejseState.selectedDate || '') + '">';
  html += '</div>';

  // Quick shortcuts
  var shortcuts = TIDSREJSE_SHORTCUTS[type] || [];
  if (shortcuts.length > 0) {
    html += '<div class="tidsrejse__section">';
    html += '<label class="tidsrejse__label">Eller v\u00e6lg hurtig</label>';
    html += '<div class="tidsrejse__shortcut-grid">';
    for (var s = 0; s < shortcuts.length; s++) {
      html += '<button class="tidsrejse__shortcut-btn" onclick="applyTidsrejseShortcut(' + s + ')">' + shortcuts[s].label + '</button>';
    }
    html += '</div></div>';
  }

  // Calculate button
  html += '<button class="tidsrejse__calculate-btn" onclick="executeTidsrejse()">Se resultater</button>';

  el.innerHTML = html;
}

function toggleTidsrejseRelation(index) {
  var idx = TidsrejseState.selectedRelations.indexOf(index);
  if (idx === -1) {
    var max = (TidsrejseState.type === 'fremtid-relation') ? 3 : 1;
    if (TidsrejseState.selectedRelations.length >= max) {
      // Deselect first, then add new
      TidsrejseState.selectedRelations.shift();
    }
    TidsrejseState.selectedRelations.push(index);
  } else {
    TidsrejseState.selectedRelations.splice(idx, 1);
  }
  renderTidsrejseInput();
}

function applyTidsrejseShortcut(index) {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var shortcuts = TIDSREJSE_SHORTCUTS[TidsrejseState.type] || [];
  var shortcut = shortcuts[index];
  if (!shortcut) return;
  var date = shortcut.resolve(user);
  TidsrejseState.selectedDate = date.toISOString().split('T')[0];
  renderTidsrejseInput();
}

function executeTidsrejse() {
  var dateInput = document.getElementById('tidsrejse-date');
  var dateStr = (dateInput && dateInput.value) || TidsrejseState.selectedDate;
  if (!dateStr) { alert('V\u00e6lg venligst en dato'); return; }

  var isRelation = TidsrejseState.type.indexOf('relation') !== -1;
  if (isRelation && TidsrejseState.selectedRelations.length === 0) {
    alert('V\u00e6lg mindst \u00e9n person'); return;
  }

  TidsrejseState.selectedDate = dateStr;
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  var userResult = calculateCyclesForDate(user.birthdate, dateStr, {
    gender: 'kvinde',
    tracksMenstruation: user.tracksMenstruation,
    lastPeriodDate: user.lastPeriodDate
  });

  var results = { user: userResult, relations: [] };

  for (var i = 0; i < TidsrejseState.selectedRelations.length; i++) {
    var ri = TidsrejseState.selectedRelations[i];
    var r = relations[ri];
    if (!r) continue;
    var rResult = calculateCyclesForDate(r.birthdate, dateStr, { gender: r.gender || 'kvinde' });
    rResult.name = r.name;
    rResult.gender = r.gender;
    rResult.relationType = r.relationType;
    results.relations.push(rResult);
  }

  TidsrejseState.results = results;
  TidsrejseState.subView = 'result';
  renderTidsrejseResult();
}

function renderTidsrejseResult() {
  var el = document.getElementById('tidsrejse-content');
  if (!el) return;
  var results = TidsrejseState.results;
  if (!results) return;

  var isPast = TidsrejseState.type.indexOf('fortid') !== -1;
  var isRelation = TidsrejseState.type.indexOf('relation') !== -1;
  var dateStr = TidsrejseState.selectedDate;
  var formattedDate = new Date(dateStr).toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });

  var html = '<h2 class="tidsrejse__result-title">' + formattedDate + '</h2>';

  // User cycle grid
  html += renderCycleGrid(results.user, 'Dig');

  if (!isRelation) {
    // Insight for self
    var insight = generateInsight(results.user.elements);
    var insightTexts = isPast ? TIDSREJSE_INSIGHT_PAST : TIDSREJSE_INSIGHT_FUTURE;
    var dominantEl = insight.dominantElement;
    html += '<div class="tidsrejse__insight">';
    html += '<p class="tidsrejse__insight-text">' + (insightTexts[dominantEl] || '') + '</p>';
    if (insight.suggestions && insight.suggestions.length > 0) {
      html += '<div class="tidsrejse__insight-suggestions">';
      for (var s = 0; s < insight.suggestions.length; s++) {
        html += '<p class="tidsrejse__insight-suggestion">\u2022 ' + insight.suggestions[s] + '</p>';
      }
      html += '</div>';
    }
    html += '</div>';
  } else {
    // Relation grids + interactions
    for (var i = 0; i < results.relations.length; i++) {
      var rr = results.relations[i];
      html += renderCycleGrid(rr, escapeHtml(rr.name));

      var interaction = getElementInteraction(
        results.user.lifePhase.element,
        rr.lifePhase.element,
        rr.name,
        rr.gender
      );
      html += '<div class="tidsrejse__interaction">';
      html += '<div class="tidsrejse__interaction-type">' + escapeHtml(interaction.type) + '</div>';
      html += '<p class="tidsrejse__interaction-text">' + escapeHtml(interaction.text) + '</p>';
      html += '</div>';
    }

    // Group insight
    var allElements = results.user.elements.slice();
    for (var j = 0; j < results.relations.length; j++) {
      allElements = allElements.concat(results.relations[j].elements);
    }
    var groupInsight = generateInsight(allElements);
    var gTexts = isPast ? TIDSREJSE_INSIGHT_PAST : TIDSREJSE_INSIGHT_FUTURE;
    html += '<div class="tidsrejse__insight">';
    html += '<h3 class="tidsrejse__insight-label">Samlet energi</h3>';
    html += '<p class="tidsrejse__insight-text">' + (gTexts[groupInsight.dominantElement] || '') + '</p>';
    html += '</div>';
  }

  // Back button
  html += '<button class="tidsrejse__back-btn" onclick="tidsrejseBackToInput()">V\u00e6lg ny dato</button>';

  el.innerHTML = html;
}

function renderCycleGrid(cycleData, label) {
  var lp = cycleData.lifePhase;
  var season = cycleData.season;
  var mc = cycleData.monthCycle;
  var insight = generateInsight(cycleData.elements);

  var html = '<div class="tidsrejse__person-label">' + label + ' \u00b7 ' + cycleData.age + ' \u00e5r</div>';
  html += '<div class="tidsrejse__cycle-grid">';

  // Livsfase
  html += '<div class="tidsrejse__cycle-card">';
  html += '<div class="tidsrejse__cycle-label">Livsfase</div>';
  html += '<div class="tidsrejse__cycle-value">Fase ' + lp.phase + '</div>';
  html += '<div class="tidsrejse__cycle-name">' + lp.name + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[lp.element] + '</div>';
  html += '</div>';

  // \u00c5rstid
  html += '<div class="tidsrejse__cycle-card">';
  html += '<div class="tidsrejse__cycle-label">\u00c5rstid</div>';
  html += '<div class="tidsrejse__cycle-value">' + season.season + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[season.element] + '</div>';
  html += '</div>';

  // M\u00e5ned/Cyklus
  html += '<div class="tidsrejse__cycle-card">';
  html += '<div class="tidsrejse__cycle-label">' + (mc.type === 'menstrual' ? 'Cyklus' : 'M\u00e5ned') + '</div>';
  html += '<div class="tidsrejse__cycle-value">' + (mc.type === 'menstrual' ? mc.data.phase : mc.data.name) + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[mc.data.element] + '</div>';
  html += '</div>';

  // Dominant element
  html += '<div class="tidsrejse__cycle-card tidsrejse__cycle-card--dominant">';
  html += '<div class="tidsrejse__cycle-label">Dominant</div>';
  html += '<div class="tidsrejse__cycle-value">' + ELEMENT_LABELS[insight.dominantElement] + '</div>';
  html += '<div class="tidsrejse__cycle-qualities">' + ELEMENT_QUALITIES[insight.dominantElement] + '</div>';
  html += '</div>';

  html += '</div>';
  return html;
}

function tidsrejseBackToInput() {
  TidsrejseState.subView = 'input';
  renderTidsrejseInput();
}

function navigateToTidsrejse(type) {
  App.loadScreen('tidsrejse').then(function() {
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        openTidsrejse(type);
      });
    });
  });
}

// Export tidsrejse functions
window.openTidsrejse = openTidsrejse;
window.toggleTidsrejseRelation = toggleTidsrejseRelation;
window.applyTidsrejseShortcut = applyTidsrejseShortcut;
window.executeTidsrejse = executeTidsrejse;
window.renderTidsrejseInput = renderTidsrejseInput;
window.tidsrejseBackToInput = tidsrejseBackToInput;
window.navigateToTidsrejse = navigateToTidsrejse;

// ---- Main App ----

const App = {
  currentScreen: 'idag',
  detailVisible: false,

  screens: {
    'idag': 'screens/idag.html',
    'relationer': 'screens/relationer.html',
    'favoritter': 'screens/favoritter.html',
    'onboarding': 'screens/onboarding.html',
    'samlede-indsigt': 'screens/samlede-indsigt.html',
    'alle-faser': 'screens/alle-faser.html',
    'tidsrejse': 'screens/tidsrejse.html',
    'mine-cyklusser': 'screens/mine-cyklusser.html',
    'mine-relationer': 'screens/mine-relationer.html',
    'min-praksis': 'screens/min-praksis.html',
    'min-rejse': 'screens/min-rejse.html',
    'cyklusser-i-cyklusser': 'screens/cyklusser-i-cyklusser.html',
    'min-udvikling': 'screens/min-udvikling.html'
  },

  // Niveau 1 skærme (tema-overblik)
  niveau1: ['mine-cyklusser', 'mine-relationer', 'min-praksis', 'min-rejse'],
  // Niveau 2 skærme (specifikt indhold)
  niveau2: ['cyklusser-i-cyklusser', 'samlede-indsigt', 'alle-faser', 'tidsrejse', 'relationer', 'favoritter', 'min-udvikling'],

  init() {
    const user = localStorage.getItem('user');
    console.log('[Livsfaser] Init - user data:', user ? JSON.parse(user) : 'INGEN (starter onboarding)');
    if (!user) {
      this.loadScreen('onboarding');
    } else {
      const saved = localStorage.getItem('currentScreen');
      this.loadScreen(saved || 'idag');
    }
  },

  // Map niveau 2 → parent niveau 1
  parentScreen: {
    'cyklusser-i-cyklusser': 'mine-cyklusser',
    'samlede-indsigt': 'mine-cyklusser',
    'alle-faser': 'mine-cyklusser',
    'tidsrejse': 'mine-cyklusser',
    'relationer': 'mine-relationer',
    'favoritter': 'min-rejse',
    'min-udvikling': 'min-rejse'
  },

  goBack() {
    if (this.detailVisible) {
      hideDetail();
    } else if (this.currentScreen === 'tidsrejse' && TidsrejseState.view !== 'overview') {
      if (TidsrejseState.subView === 'result') {
        tidsrejseBackToInput();
      } else {
        renderTidsrejseOverview();
      }
    } else if (this.currentScreen === 'relationer' && RelationerState.view !== 'overview') {
      if (RelationerState.view === 'add' && RelationerState.addStep > 1) {
        addRelationBack();
      } else {
        renderRelationerOverview();
      }
    } else if (this.niveau2.indexOf(this.currentScreen) !== -1) {
      // Niveau 2 → gå til parent niveau 1
      var parent = this.parentScreen[this.currentScreen] || 'idag';
      this.loadScreen(parent);
    } else if (this.niveau1.indexOf(this.currentScreen) !== -1) {
      // Niveau 1 → gå til idag
      this.loadScreen('idag');
    } else {
      this.loadScreen('idag');
    }
  },

  async loadScreen(screenName) {
    if (!this.screens[screenName]) return;

    this.currentScreen = screenName;
    this.detailVisible = false;

    if (screenName !== 'onboarding') {
      localStorage.setItem('currentScreen', screenName);
    }

    window.scrollTo(0, 0);

    // Show/hide back button
    const backBtn = document.getElementById('back-button');
    if (backBtn) {
      const showBack = (screenName !== 'idag' && screenName !== 'onboarding');
      backBtn.classList.toggle('header__back--visible', showBack);
    }

    // Load screen content
    const content = document.getElementById('screen-content');
    if (!content) return;

    try {
      const response = await fetch(this.screens[screenName] + '?v=' + Date.now());
      if (response.ok) {
        content.innerHTML = await response.text();
        if (screenName === 'idag') {
          initIdagScreen();
        } else if (screenName === 'samlede-indsigt') {
          initSamledeIndsigtScreen();
        } else if (screenName === 'alle-faser') {
          initAlleFaserScreen();
        } else if (screenName === 'relationer') {
          initRelationerScreen();
        } else if (screenName === 'tidsrejse') {
          initTidsrejseScreen();
        } else if (screenName === 'mine-cyklusser') {
          initMineCyklusserScreen();
        } else if (screenName === 'mine-relationer') {
          initMineRelationerScreen();
        } else if (screenName === 'min-praksis') {
          initMinPraksisScreen();
        } else if (screenName === 'min-rejse') {
          initMinRejseScreen();
        } else if (screenName === 'cyklusser-i-cyklusser') {
          initCyklusserICyklusserScreen();
        } else if (screenName === 'min-udvikling') {
          initMinUdviklingScreen();
        }
      } else {
        content.innerHTML = '<p>Indhold ikke tilg\u00E6ngeligt.</p>';
      }
    } catch (e) {
      content.innerHTML = '<p>Indhold ikke tilg\u00E6ngeligt.</p>';
    }
  }
};

// ---- Alle 9 Faser Screen ----

function initAlleFaserScreen() {
  var el = document.getElementById('alle-faser-list');
  if (!el) return;

  var userData = localStorage.getItem('user');
  var currentPhase = 0;
  if (userData) {
    var user = JSON.parse(userData);
    var age = calculateAge(user.birthdate);
    currentPhase = Math.min(Math.floor(age / 7) + 1, 9);
  }

  var html = '';
  for (var i = 1; i <= 9; i++) {
    var p = PHASE_DATA[i];
    var isCurrent = (i === currentPhase);
    html += '<div class="alle-faser__item' + (isCurrent ? ' alle-faser__item--current' : '') + '" onclick="showFaseDetail(' + i + ')">';
    html += '<div class="alle-faser__number">' + i + '</div>';
    html += '<div class="alle-faser__info">';
    html += '<h3 class="alle-faser__name">' + p.name + '</h3>';
    html += '<p class="alle-faser__meta">' + p.startAge + '\u2013' + p.endAge + ' \u00E5r \u00B7 ' + ELEMENT_LABELS[p.element] + '</p>';
    if (isCurrent) html += '<span class="alle-faser__badge">Din fase</span>';
    html += '</div></div>';
  }
  el.innerHTML = html;

  // Action bar
  var screenEl = document.querySelector('.screen--alle-faser');
  if (screenEl) {
    screenEl.insertAdjacentHTML('beforeend', renderActionBar('alle-faser'));
  }
}

function showFaseDetail(phaseNum) {
  var p = PHASE_DATA[phaseNum];
  if (!p) return;

  // Reuse the detail system — temporarily set data and call showDetail approach
  var container = document.getElementById('alle-faser-list');
  if (!container) return;

  container.innerHTML =
    '<div class="detail__body">' +
      '<div class="detail__badge" style="background-color:' + APP_COLORS.morkebla + '">' + phaseNum + '</div>' +
      '<h2 class="detail__title">Fase ' + phaseNum + ': ' + p.name + '</h2>' +
      '<p class="detail__meta">' + p.startAge + '\u2013' + p.endAge + ' \u00E5r \u00B7 ' + ELEMENT_LABELS[p.element] + '</p>' +
      '<p class="detail__qualities">' + ELEMENT_QUALITIES[p.element] + '</p>' +
      '<p class="detail__text">' + PHASE_DESCRIPTIONS[phaseNum] + '</p>' +
    '</div>' +
    '<button class="idag__link-btn" onclick="initAlleFaserScreen()">\u2190 Alle faser</button>';
}

window.showFaseDetail = showFaseDetail;

// ---- Niveau 1: Mine Cyklusser ----

function initMineCyklusserScreen() {
  var el = document.getElementById('mine-cyklusser-list');
  if (!el) return;

  // Ensure we have cycle data
  ensureIdagData();
  var elements = window._activeElements || [];
  var cycleAnalysis = window._idagData ? analyzeCycleInteractions(window._idagData) : null;
  var climateLabel = cycleAnalysis ? cycleAnalysis.climate.label : '';

  // Venn diagram: LIVSFASE / ÅRSTID / CYKLUS
  var vennEl = document.getElementById('mine-cyklusser-venn');
  if (vennEl && window._idagData) {
    var d = window._idagData;
    vennEl.innerHTML = renderVennThree({
      topTitle: 'LIVSFASE',
      topLines: ['Fase ' + d.lifePhase.phase, d.lifePhase.name],
      bottomLeftTitle: '\u00c5RSTID',
      bottomLeftLines: [d.season.season, ELEMENT_LABELS[d.season.element]],
      bottomRightTitle: 'CYKLUS',
      bottomRightLines: [(d.monthCycle.data.name || d.monthCycle.data.phase || ''), ELEMENT_LABELS[d.monthCycle.data.element]],
      overlapAB: 'tid \u00B7 natur',
      overlapAC: 'tid \u00B7 krop',
      overlapBC: 'natur \u00B7 krop',
      centerTitle: 'DIT',
      centerLines: ['KRYDSFELT'],
      elementA: d.lifePhase.element,
      elementB: d.season.element,
      elementC: d.monthCycle.data.element
    });
  }

  var kort = [
    { screen: 'cyklusser-i-cyklusser', title: 'Cyklusser i Cyklusser', subtitle: climateLabel ? climateLabel + ' \u2014 livsfase, \u00e5rstid, m\u00e5ned, uge og d\u00f8gn. Nogle gange tr\u00e6kker de samme vej, andre gange kolliderer de. Udforsk samspillet her.' : 'Fem lag af energi der hele tiden bev\u00e6ger sig. Nogle gange tr\u00e6kker de samme vej, andre gange kolliderer de. Udforsk samspillet her.' },
    { screen: 'tidsrejse', title: 'Forst\u00e5 din fortid', subtitle: 'Se tilbage p\u00e5 en bestemt dag eller periode i dit liv. M\u00e5ske var der et \u00e5r, hvor alt f\u00f8ltes tungt \u2014 eller en tid med uforklarlig energi. Dine cyklusser kan vise dig hvorfor.', onclick: "navigateToTidsrejse('fortid-selv')" },
    { screen: 'tidsrejse', title: 'Forbered din fremtid', subtitle: 'Hvilke cyklusser venter dig om et halvt \u00e5r, om fem \u00e5r? Din krop ved allerede hvad der kommer. Her kan du m\u00f8de det p\u00e5 forh\u00e5nd.', onclick: "navigateToTidsrejse('fremtid-selv')" },
    { screen: 'alle-faser', title: 'Kroppens store overgange', subtitle: 'Fra pubertetens Tr\u00e6-energi til overgangsalderens Metal \u2014 din krop gennemg\u00e5r vendepunkter, der \u00e6ndrer alt. Se dem i sammenh\u00e6ng med dine cyklusser.' },
    { screen: 'samlede-indsigt', title: 'Samlet indsigt for i dag', subtitle: 'Yoga, kost, fokusomr\u00e5der og konkrete forslag tilpasset netop din energi i dag.' }
  ];

  var html = '';
  for (var i = 0; i < kort.length; i++) {
    var k = kort[i];
    var clickAction = k.onclick || "App.loadScreen('" + k.screen + "')";
    html += '<div class="tema__kort" onclick="' + clickAction + '">';
    html += '<div class="tema__kort-content">';
    html += '<h3 class="tema__kort-title">' + k.title + '</h3>';
    html += '<p class="tema__kort-subtitle">' + k.subtitle + '</p>';
    html += '</div>';
    html += '<span class="tema__kort-arrow">\u203A</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

// ---- Niveau 1: Mine Relationer ----

function initMineRelationerScreen() {
  var profilEl = document.getElementById('mine-relationer-profiler');
  var listEl = document.getElementById('mine-relationer-list');
  if (!listEl) return;

  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  // Render profiler øverst
  if (profilEl) {
    var profilHtml = '<div class="tema__profil-row">';
    for (var i = 0; i < relations.length; i++) {
      var r = relations[i];
      var initial = r.name ? r.name.charAt(0).toUpperCase() : '?';
      var rAge = calculateAge(r.birthdate);
      var rPhase = (r.gender === 'mand') ? calculateMalePhase(rAge) : calculateLifePhase(rAge);
      profilHtml += '<div class="tema__profil" onclick="navigateToRelationDetail(' + i + ')">';
      profilHtml += '<div class="tema__profil-circle">' + initial + '</div>';
      profilHtml += '<p class="tema__profil-name">' + escapeHtml(r.name) + '</p>';
      profilHtml += '<p class="tema__profil-meta">' + ELEMENT_LABELS[rPhase.element] + '</p>';
      profilHtml += '</div>';
    }
    profilHtml += '<div class="tema__profil" onclick="App.loadScreen(\'relationer\')">';
    profilHtml += '<div class="tema__profil-circle tema__profil-circle--add">+</div>';
    profilHtml += '<p class="tema__profil-name">Tilføj</p>';
    profilHtml += '</div>';
    profilHtml += '</div>';
    profilEl.innerHTML = profilHtml;
  }

  // Venn diagram at top: DIG / DIN NÆRMESTE / JERES CYKLUSSER
  var vennEl = document.getElementById('mine-relationer-venn');
  if (vennEl) {
    ensureIdagData();
    var d = window._idagData;
    var userEl = d ? d.lifePhase.element : 'VAND';
    var nearestEl = 'default';
    var nearestName = 'din n\u00e6rmeste';
    if (relations.length > 0) {
      var nr = relations[0];
      var nrAge = calculateAge(nr.birthdate);
      var nrPhase = (nr.gender === 'mand') ? calculateMalePhase(nrAge) : calculateLifePhase(nrAge);
      nearestEl = nrPhase.element;
      nearestName = nr.name || 'din n\u00e6rmeste';
    }
    vennEl.innerHTML = renderVennThree({
      topTitle: 'DIG',
      topLines: [d ? 'Fase ' + d.lifePhase.phase : '', d ? ELEMENT_LABELS[userEl] : ''],
      bottomLeftTitle: nearestName.toUpperCase(),
      bottomLeftLines: [nearestEl !== 'default' ? ELEMENT_LABELS[nearestEl] : 'Tilf\u00f8j en relation'],
      bottomRightTitle: 'JERES CYKLUSSER',
      bottomRightLines: ['Hvor m\u00f8des I?', 'Hvor kolliderer I?'],
      overlapAB: 'faser',
      overlapAC: 'tid',
      overlapBC: 'rytme',
      centerTitle: 'M\u00d8DET',
      centerLines: ['*i midten'],
      elementA: userEl,
      elementB: nearestEl !== 'default' ? nearestEl : undefined,
      elementC: undefined
    });
  }

  var kort = [
    { screen: 'relationer', title: 'Relationer lige nu', subtitle: 'Se hvordan dine fem cyklusser m\u00f8der en andens lige nu. Hvor mange lag tr\u00e6kker jer sammen? Hvor kolliderer I? Og hvorn\u00e5r skifter det.' },
    { screen: 'tidsrejse', title: 'Forst\u00e5 relationer i fortiden', subtitle: 'De konflikter, der aldrig blev l\u00f8st. De samtaler, der gik sk\u00e6vt. M\u00e5ske handlede det ikke om jer \u2014 men om to livsfaser, der trak i hver sin retning.', onclick: "navigateToTidsrejse('fortid-relation')" },
    { screen: 'tidsrejse', title: 'Forbered relationer i fremtiden', subtitle: 'En ferie med familien. Jul med tre generationer. Dit barns n\u00e6ste store overgang. Se hvilke elementer I m\u00f8des i \u2014 og hvorn\u00e5r timingen er bedst.', onclick: "navigateToTidsrejse('fremtid-relation')" }
  ];

  var html = '';
  for (var j = 0; j < kort.length; j++) {
    var k = kort[j];
    var clickAction = k.onclick || "App.loadScreen('" + k.screen + "')";
    html += '<div class="tema__kort" onclick="' + clickAction + '">';
    html += '<div class="tema__kort-content">';
    html += '<h3 class="tema__kort-title">' + k.title + '</h3>';
    html += '<p class="tema__kort-subtitle">' + k.subtitle + '</p>';
    html += '</div>';
    html += '<span class="tema__kort-arrow">\u203A</span>';
    html += '</div>';
  }

  listEl.innerHTML = html;
}

// ---- Niveau 1: Min Praksis ----

function initMinPraksisScreen() {
  var kontekstEl = document.getElementById('min-praksis-kontekst');
  var listEl = document.getElementById('min-praksis-list');
  if (!listEl) return;

  ensureIdagData();
  var elements = window._activeElements || [];
  var insight = generateInsight(elements);
  var primaryEl = insight.dominantElement;

  // Venn diagram at top: KROP / NÆRING / SIND
  var vennEl = document.getElementById('min-praksis-venn');
  if (vennEl) {
    vennEl.innerHTML = renderVennThree({
      topTitle: 'KROP',
      topLines: ['Bev\u00e6gelse', '\u00d8velser \u00B7 Yoga'],
      bottomLeftTitle: 'N\u00c6RING',
      bottomLeftLines: ['Mad \u00B7 Urter', ELEMENT_LABELS[primaryEl] + '-st\u00f8tte'],
      bottomRightTitle: 'SIND',
      bottomRightLines: ['Fokus \u00B7 Ro', 'Refleksion'],
      overlapAB: 'styrke',
      overlapAC: 'klarhed',
      overlapBC: 'n\u00e6rv\u00e6r',
      centerTitle: 'DIN',
      centerLines: ['PRAKSIS']
    });
  }

  // Kontekstboks
  if (kontekstEl) {
    var counts = {};
    for (var i = 0; i < elements.length; i++) {
      counts[elements[i]] = (counts[elements[i]] || 0) + 1;
    }
    var maxCount = 0;
    var keys = Object.keys(counts);
    for (var j = 0; j < keys.length; j++) {
      if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
    }
    kontekstEl.innerHTML =
      '<p class="tema__kontekst-label">Dit dominerende element lige nu</p>' +
      '<p class="tema__kontekst-value">' + ELEMENT_LABELS[primaryEl] + ' (' + maxCount + '/5 cyklusser)</p>' +
      '<p class="tema__kontekst-text">Disse \u00f8velser og denne kost er valgt ud fra dit krydsfelt i dag \u2014 s\u00e5 du n\u00e6rer hele dit system, ikke kun \u00e9n del.</p>';
  }

  var kort = [
    { screen: 'samlede-indsigt', title: '\u00d8velser \u2014 Forskellige indgange', subtitle: 'Seks veje ind i kroppen \u2014 fra yin yogas dybe str\u00e6k til EFT-tappingens lette banker. Nogle dage kalder p\u00e5 bev\u00e6gelse, andre p\u00e5 stilhed. Find den indgang der passer til dig.' },
    { screen: 'samlede-indsigt', title: 'Kost & N\u00e6ring', subtitle: 'B\u00e5de kinesisk medicin og ayurveda ved, at mad er medicin. Her finder du f\u00f8devarer, urter og tilberedning der st\u00f8tter dit ' + ELEMENT_LABELS[primaryEl] + '-element.' },
    { screen: 'samlede-indsigt', title: 'Fokusomr\u00e5der', subtitle: 'Hvad kan du rette opm\u00e6rksomheden mod i dag? M\u00e5ske er det stilhed, m\u00e5ske bev\u00e6gelse. Dine cyklusser peger i en retning \u2014 her kan du f\u00f8lge den.' }
  ];

  var html = '';
  for (var k = 0; k < kort.length; k++) {
    var item = kort[k];
    html += '<div class="tema__kort" onclick="App.loadScreen(\'' + item.screen + '\')">';
    html += '<div class="tema__kort-content">';
    html += '<h3 class="tema__kort-title">' + item.title + '</h3>';
    html += '<p class="tema__kort-subtitle">' + item.subtitle + '</p>';
    html += '</div>';
    html += '<span class="tema__kort-arrow">\u203A</span>';
    html += '</div>';
  }

  listEl.innerHTML = html;
}

// ---- Niveau 1: Min Rejse ----

function initMinRejseScreen() {
  var el = document.getElementById('min-rejse-list');
  if (!el) return;

  // Venn diagram: DIN PRAKSIS / DINE MØNSTRE / DIN VISDOM
  var vennEl = document.getElementById('min-rejse-venn');
  if (vennEl) {
    vennEl.innerHTML = renderVennTwo({
      leftTitle: 'DIN PRAKSIS',
      leftLines: ['Check-ins \u00B7 \u00d8velser', 'Kost \u00B7 Refleksion'],
      rightTitle: 'DINE M\u00d8NSTRE',
      rightLines: ['Energikurver', 'Elementbalance'],
      overlapTitle: 'DIN VISDOM',
      overlapLines: ['*Det du l\u00e6rer', '*over tid']
    });
  }

  var checkinCount = getCheckins().length;
  var trackingSub = checkinCount > 0
    ? checkinCount + ' check-ins registreret. Se dine m\u00F8nstre, din energikurve og elementbalance over tid \u2014 din krop ved mere end du tror.'
    : 'Registr\u00E9r din energi, dine aktiviteter og dine refleksioner dag for dag. Over tid tegner der sig m\u00F8nstre, du ikke kunne se i \u00F8jeblikket.';

  var kort = [
    { screen: 'min-udvikling', title: 'Min udvikling', subtitle: trackingSub },
    { screen: 'favoritter', title: 'Mine favoritter', subtitle: 'Alt det du har gemt undervejs \u2014 \u00f8velser, kostvejledning, indsigter og faser der betyder noget for dig. Dit personlige bibliotek, samlet \u00e9t sted.' },
    { screen: 'alle-faser', title: 'Alle 9 faser', subtitle: 'Fra livets begyndelse til visdom \u2014 de ni syv-\u00e5rs cyklusser. Se dem alle og forst\u00e5 den rejse, du allerede er p\u00e5.' },
    { screen: 'samlede-indsigt', title: 'Baggrundsviden', subtitle: 'Ni forskellige kulturer har opdaget det samme: livet bev\u00e6ger sig i cyklusser og overgange. Udforsk den viden, appen bygger p\u00e5 \u2014 fra kinesisk medicin til vedisk filosofi.' }
  ];

  var html = '';
  for (var i = 0; i < kort.length; i++) {
    var k = kort[i];
    html += '<div class="tema__kort" onclick="App.loadScreen(\'' + k.screen + '\')">';
    html += '<div class="tema__kort-content">';
    html += '<h3 class="tema__kort-title">' + k.title + '</h3>';
    html += '<p class="tema__kort-subtitle">' + k.subtitle + '</p>';
    html += '</div>';
    html += '<span class="tema__kort-arrow">\u203A</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

// ---- Niveau 2: Cyklusser i Cyklusser ----

function initCyklusserICyklusserScreen() {
  ensureIdagData();
  if (!window._idagData) return;

  var analysis = analyzeCycleInteractions(window._idagData);

  // 1. Render klima
  var climateEl = document.getElementById('cic-climate');
  if (climateEl) {
    climateEl.innerHTML =
      '<p class="cic__climate-label">' + analysis.climate.label + '</p>' +
      '<p class="cic__climate-text">' + analysis.climate.text + '</p>';
  }

  // 1b. Render VennFour for 4 fast cycles (årstid, måned, uge, døgn)
  var vennEl = document.getElementById('cic-venn');
  if (vennEl && window._idagData) {
    var d = window._idagData;
    // Analyze key pairwise relationships
    var pSeason_Month = analyzePair(
      { name: 'aarstid', label: '\u00c5rstid', element: d.season.element },
      { name: 'maaned', label: 'Cyklus', element: d.monthCycle.data.element }
    );
    var pSeason_Week = analyzePair(
      { name: 'aarstid', label: '\u00c5rstid', element: d.season.element },
      { name: 'ugedag', label: 'Ugedag', element: d.weekday.element }
    );
    var pMonth_Organ = analyzePair(
      { name: 'maaned', label: 'Cyklus', element: d.monthCycle.data.element },
      { name: 'organur', label: 'Organur', element: d.organ.element }
    );
    var pWeek_Organ = analyzePair(
      { name: 'ugedag', label: 'Ugedag', element: d.weekday.element },
      { name: 'organur', label: 'Organur', element: d.organ.element }
    );

    vennEl.innerHTML = renderVennFour({
      topTitle: '\u00c5RSTID',
      topLines: [d.season.season, ELEMENT_LABELS[d.season.element]],
      leftTitle: 'M\u00c5NED',
      leftLines: [(d.monthCycle.data.name || d.monthCycle.data.phase || '')],
      rightTitle: 'UGE',
      rightLines: [d.weekday.day],
      bottomTitle: 'D\u00d8GN',
      bottomLines: [d.organ.organ, d.organ.hours],
      highlights: [
        { pair: 'AB', text: pSeason_Month.typeLabel },
        { pair: 'AC', text: pSeason_Week.typeLabel },
        { pair: 'BD', text: pMonth_Organ.typeLabel },
        { pair: 'CD', text: pWeek_Organ.typeLabel }
      ],
      centerTitle: 'NU',
      centerLines: ['*dit krydsfelt'],
      elementA: d.season.element,
      elementB: d.monthCycle.data.element,
      elementC: d.weekday.element,
      elementD: d.organ.element
    });
  }

  // 2. Render prioritets-par (3 kort)
  var pairsEl = document.getElementById('cic-pairs');
  if (pairsEl) {
    var html = '';
    for (var i = 0; i < analysis.priorityPairs.length; i++) {
      html += renderPairCard(analysis.priorityPairs[i]);
    }
    pairsEl.innerHTML = html;
  }

  // 3. Render expand-knap og ekstra par
  var expandBtn = document.getElementById('cic-expand-btn');
  var extraEl = document.getElementById('cic-pairs-extra');
  if (expandBtn && extraEl && analysis.otherPairs.length > 0) {
    expandBtn.style.display = 'block';
    var extraHtml = '';
    for (var j = 0; j < analysis.otherPairs.length; j++) {
      extraHtml += renderPairCard(analysis.otherPairs[j]);
    }
    extraEl.innerHTML = extraHtml;

    expandBtn.onclick = function() {
      var showing = extraEl.style.display !== 'none';
      extraEl.style.display = showing ? 'none' : 'flex';
      expandBtn.textContent = showing ? 'Se alle 10 par' : 'Skjul';
    };
  }

  // Action bar
  var screenEl = document.querySelector('.screen--cyklusser-i-cyklusser');
  if (screenEl) {
    screenEl.insertAdjacentHTML('beforeend', renderActionBar('cyklusser-i-cyklusser'));
  }
}

function renderPairCard(pair) {
  var typeClass = '';
  var typeBadgeClass = '';
  if (pair.type === 'udfordrer' || pair.type === 'udfordres') {
    typeClass = ' cic__pair--udfordrer';
    typeBadgeClass = ' cic__pair-type--udfordrer';
  } else if (pair.type === 'spejler') {
    typeClass = ' cic__pair--spejler';
    typeBadgeClass = ' cic__pair-type--spejler';
  }

  return '<div class="cic__pair' + typeClass + '">' +
    '<div class="cic__pair-header">' +
      '<span class="cic__pair-names">' + pair.cycleA.label + ' & ' + pair.cycleB.label + '</span>' +
      '<span class="cic__pair-type' + typeBadgeClass + '">' + pair.typeLabel + '</span>' +
    '</div>' +
    '<p class="cic__pair-elements">' + ELEMENT_LABELS[pair.cycleA.element] + ' \u2192 ' + ELEMENT_LABELS[pair.cycleB.element] + '</p>' +
    '<p class="cic__pair-text">' + pair.text + '</p>' +
  '</div>';
}

// ---- Helper: Ensure idag data exists ----

function ensureIdagData() {
  if (window._idagData && window._activeElements) return;

  var userData = localStorage.getItem('user');
  if (!userData) return;
  var user = JSON.parse(userData);
  var now = new Date();
  var age = calculateAge(user.birthdate);
  var lifePhase = calculateLifePhase(age);
  var season = calculateSeason(now);
  var weekday = calculateWeekday(now);
  var organ = calculateOrganClock(now);
  var monthCycle = null;
  if (user.tracksMenstruation && user.lastPeriodDate) {
    monthCycle = { type: 'menstrual', data: calculateMenstrualDay(user.lastPeriodDate, now) };
  } else {
    monthCycle = { type: 'calendar', data: calculateCalendarMonth(now) };
  }
  window._idagData = {
    lifePhase: lifePhase, season: season, weekday: weekday,
    organ: organ, age: age, monthCycle: monthCycle
  };
  window._activeElements = [
    lifePhase.element, season.element,
    monthCycle.data.element, weekday.element, organ.element
  ];
}

// ---- Søgefunktion ----

// ---- Tracking: Min Udvikling ----

var TrackingState = {
  period: '7d',   // 7d | 30d | 90d | all
  checkinMood: null,
  checkinTags: [],
  checkinNote: ''
};

var MOOD_OPTIONS = [
  { id: 'vand', icon: '\uD83C\uDF0A', name: 'Stille', element: 'VAND' },
  { id: 'trae', icon: '\uD83C\uDF31', name: 'Voksende', element: 'TR\u00C6' },
  { id: 'ild',  icon: '\uD83D\uDD25', name: 'Intens', element: 'ILD' },
  { id: 'jord', icon: '\uD83C\uDF3F', name: 'Rodfæstet', element: 'JORD' },
  { id: 'metal', icon: '\u2728', name: 'Klar', element: 'METAL' }
];

var ACTIVITY_TAGS = [
  'Yoga', 'Meditation', 'Gåtur', 'Kreativitet', 'Hvile',
  'Socialt', 'Arbejde', 'Natur', 'Kostvejledning', 'Åndedræt',
  'Journaling', 'Dans'
];

function getLocalDateStr(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function getCheckins() {
  return JSON.parse(localStorage.getItem('checkins') || '[]');
}

function saveCheckin(entry) {
  var checkins = getCheckins();
  checkins.unshift(entry); // newest first
  localStorage.setItem('checkins', JSON.stringify(checkins));
}

function getCheckinsForPeriod(period) {
  var checkins = getCheckins();
  if (period === 'all') return checkins;

  var days = period === '7d' ? 7 : period === '30d' ? 30 : 90;
  var cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  cutoff.setHours(0, 0, 0, 0);

  return checkins.filter(function(c) {
    return new Date(c.date) >= cutoff;
  });
}

function initMinUdviklingScreen() {
  ensureIdagData();

  // Venn diagram: KROP / FØLELSER / CYKLUSSER
  var vennEl = document.getElementById('min-udvikling-venn');
  if (vennEl) {
    var checkins = getCheckins();
    var moodLabel = checkins.length > 0 && checkins[0].mood ? checkins[0].mood : 'Endnu ingen';
    vennEl.innerHTML = renderVennThree({
      topTitle: 'KROP',
      topLines: ['Energi \u00B7 Aktivitet'],
      bottomLeftTitle: 'F\u00d8LELSER',
      bottomLeftLines: [moodLabel],
      bottomRightTitle: 'CYKLUSSER',
      bottomRightLines: ['Element \u00B7 Fase'],
      overlapAB: 'indre klima',
      overlapAC: 'rytme',
      overlapBC: 'm\u00f8nstre',
      centerTitle: 'DIN',
      centerLines: ['UDVIKLING']
    });
  }

  renderTrackingPeriod();
  renderTrackingContent();
  renderCheckinForm();
  renderTimeline();

  // Action bar
  var screenEl = document.querySelector('.screen--tracking');
  if (screenEl) {
    screenEl.insertAdjacentHTML('beforeend', renderActionBar('min-udvikling'));
  }
}

function renderTrackingPeriod() {
  var el = document.getElementById('tracking-period');
  if (!el) return;

  var periods = [
    { id: '7d', label: '7 dage' },
    { id: '30d', label: '30 dage' },
    { id: '90d', label: '3 mdr' },
    { id: 'all', label: 'Alle' }
  ];

  var html = '';
  for (var i = 0; i < periods.length; i++) {
    var p = periods[i];
    var active = p.id === TrackingState.period ? ' tracking__period-btn--active' : '';
    html += '<button class="tracking__period-btn' + active + '" onclick="setTrackingPeriod(\'' + p.id + '\')">' + p.label + '</button>';
  }
  el.innerHTML = html;
}

function setTrackingPeriod(period) {
  TrackingState.period = period;
  renderTrackingPeriod();
  renderTrackingContent();
  renderTimeline();
}

function renderTrackingContent() {
  var checkins = getCheckinsForPeriod(TrackingState.period);
  renderPatterns(checkins);
  renderStats(checkins);
  renderEnergyGraph(checkins);
  renderElementBalance(checkins);
}

function renderPatterns(checkins) {
  var el = document.getElementById('tracking-patterns');
  if (!el) return;

  if (checkins.length < 3) {
    el.innerHTML = '<div class="tracking__pattern"><p class="tracking__pattern-label">Dine m\u00F8nstre</p><p class="tracking__pattern-text">Registr\u00E9r mindst tre check-ins, s\u00E5 begynder m\u00F8nstrene at vise sig. Din krop ved allerede \u2014 ord beh\u00F8ver tid.</p></div>';
    return;
  }

  // Analyze moods
  var moodCounts = {};
  var tagCounts = {};
  for (var i = 0; i < checkins.length; i++) {
    var c = checkins[i];
    if (c.mood) moodCounts[c.mood] = (moodCounts[c.mood] || 0) + 1;
    if (c.tags) {
      for (var t = 0; t < c.tags.length; t++) {
        tagCounts[c.tags[t]] = (tagCounts[c.tags[t]] || 0) + 1;
      }
    }
  }

  // Find dominant mood
  var topMood = null;
  var topMoodCount = 0;
  var moodKeys = Object.keys(moodCounts);
  for (var m = 0; m < moodKeys.length; m++) {
    if (moodCounts[moodKeys[m]] > topMoodCount) {
      topMoodCount = moodCounts[moodKeys[m]];
      topMood = moodKeys[m];
    }
  }

  // Find top activity
  var topTag = null;
  var topTagCount = 0;
  var tagKeys = Object.keys(tagCounts);
  for (var tk = 0; tk < tagKeys.length; tk++) {
    if (tagCounts[tagKeys[tk]] > topTagCount) {
      topTagCount = tagCounts[tagKeys[tk]];
      topTag = tagKeys[tk];
    }
  }

  var moodInfo = MOOD_OPTIONS.find(function(mo) { return mo.id === topMood; });
  var moodName = moodInfo ? moodInfo.name.toLowerCase() : 'varierende';
  var moodElement = moodInfo ? ELEMENT_LABELS[moodInfo.element] : '';

  var html = '';
  html += '<div class="tracking__pattern">';
  html += '<p class="tracking__pattern-label">Energim\u00F8nster</p>';
  html += '<p class="tracking__pattern-text">Din energi har v\u00E6ret mest ' + moodName + ' i denne periode' + (moodElement ? ' \u2014 det peger mod ' + moodElement + '-elementet' : '') + '. M\u00E5ske er det din krop, der viser dig hvad den har brug for lige nu.</p>';
  html += '</div>';

  if (topTag) {
    html += '<div class="tracking__pattern">';
    html += '<p class="tracking__pattern-label">Aktivitetsm\u00F8nster</p>';
    html += '<p class="tracking__pattern-text">' + topTag + ' har v\u00E6ret din hyppigste aktivitet (' + topTagCount + ' gange). Det siger noget om hvad din krop s\u00F8ger — fors\u00E6t med at lytte.</p>';
    html += '</div>';
  }

  el.innerHTML = html;
}

function renderStats(checkins) {
  var el = document.getElementById('tracking-stats');
  if (!el) return;

  var total = checkins.length;

  // Streak: consecutive days from today (using local dates)
  var streak = 0;
  if (total > 0) {
    var checkDay = new Date();
    checkDay.setHours(12, 0, 0, 0); // noon to avoid DST issues
    for (var s = 0; s < 365; s++) {
      var dayStr = checkDay.getFullYear() + '-' + String(checkDay.getMonth() + 1).padStart(2, '0') + '-' + String(checkDay.getDate()).padStart(2, '0');
      var found = checkins.some(function(c) {
        var cLocal = new Date(c.date);
        var cStr = cLocal.getFullYear() + '-' + String(cLocal.getMonth() + 1).padStart(2, '0') + '-' + String(cLocal.getDate()).padStart(2, '0');
        return cStr === dayStr;
      });
      if (found) {
        streak++;
        checkDay.setDate(checkDay.getDate() - 1);
      } else {
        break;
      }
    }
  }

  // Unique elements logged
  var elements = {};
  for (var i = 0; i < checkins.length; i++) {
    if (checkins[i].mood) {
      var mo = MOOD_OPTIONS.find(function(m) { return m.id === checkins[i].mood; });
      if (mo) elements[mo.element] = true;
    }
  }
  var uniqueElements = Object.keys(elements).length;

  var html = '';
  html += '<div class="tracking__stat"><p class="tracking__stat-value">' + total + '</p><p class="tracking__stat-label">Check-ins</p></div>';
  html += '<div class="tracking__stat"><p class="tracking__stat-value">' + streak + '</p><p class="tracking__stat-label">Dages str\u00E6k</p></div>';
  html += '<div class="tracking__stat"><p class="tracking__stat-value">' + uniqueElements + '/5</p><p class="tracking__stat-label">Elementer m\u00E6rket</p></div>';

  // Average tags per entry
  var totalTags = 0;
  for (var j = 0; j < checkins.length; j++) {
    totalTags += (checkins[j].tags || []).length;
  }
  var avgTags = total > 0 ? (totalTags / total).toFixed(1) : '0';
  html += '<div class="tracking__stat"><p class="tracking__stat-value">' + avgTags + '</p><p class="tracking__stat-label">Gns. aktiviteter</p></div>';

  el.innerHTML = html;
}

function renderEnergyGraph(checkins) {
  var canvas = document.getElementById('energy-canvas');
  var labelsEl = document.getElementById('energy-labels');
  if (!canvas || !labelsEl) return;

  var ctx = canvas.getContext('2d');
  var W = canvas.parentElement.clientWidth - 48;
  var H = 140;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  if (checkins.length < 2) {
    ctx.fillStyle = '#999';
    ctx.font = '13px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('Registr\u00E9r et par check-ins for at se din energikurve', W / 2, H / 2);
    labelsEl.innerHTML = '';
    return;
  }

  // Map moods to numeric values
  var moodValues = { 'vand': 1, 'metal': 2, 'jord': 3, 'trae': 4, 'ild': 5 };
  var sorted = checkins.slice().reverse(); // oldest first
  var points = [];
  for (var i = 0; i < sorted.length; i++) {
    var val = moodValues[sorted[i].mood] || 3;
    points.push(val);
  }

  // Draw
  var padding = 10;
  var graphW = W - padding * 2;
  var graphH = H - padding * 2 - 10;
  var stepX = points.length > 1 ? graphW / (points.length - 1) : graphW;

  // Grid lines
  ctx.strokeStyle = 'rgba(118, 144, 193, 0.1)';
  ctx.lineWidth = 1;
  for (var g = 1; g <= 5; g++) {
    var gy = padding + graphH - ((g - 1) / 4) * graphH;
    ctx.beginPath();
    ctx.moveTo(padding, gy);
    ctx.lineTo(W - padding, gy);
    ctx.stroke();
  }

  // Line
  ctx.beginPath();
  ctx.strokeStyle = '#7690C1';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  for (var p = 0; p < points.length; p++) {
    var x = padding + p * stepX;
    var y = padding + graphH - ((points[p] - 1) / 4) * graphH;
    if (p === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Dots
  for (var d = 0; d < points.length; d++) {
    var dx = padding + d * stepX;
    var dy = padding + graphH - ((points[d] - 1) / 4) * graphH;
    ctx.beginPath();
    ctx.arc(dx, dy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#7690C1';
    ctx.fill();
  }

  // Labels
  var firstDate = sorted[0].date ? sorted[0].date.substring(5, 10).replace('-', '/') : '';
  var lastDate = sorted[sorted.length - 1].date ? sorted[sorted.length - 1].date.substring(5, 10).replace('-', '/') : '';
  labelsEl.innerHTML = '<span class="tracking__graph-label">' + firstDate + '</span><span class="tracking__graph-label">' + lastDate + '</span>';
}

function renderElementBalance(checkins) {
  var el = document.getElementById('balance-bars');
  if (!el) return;

  // Count elements from moods
  var counts = { 'VAND': 0, 'TR\u00C6': 0, 'ILD': 0, 'JORD': 0, 'METAL': 0 };
  var total = 0;
  for (var i = 0; i < checkins.length; i++) {
    var mo = MOOD_OPTIONS.find(function(m) { return m.id === checkins[i].mood; });
    if (mo) {
      counts[mo.element]++;
      total++;
    }
  }

  var elOrder = ['VAND', 'TR\u00C6', 'ILD', 'JORD', 'METAL'];
  var html = '';
  for (var j = 0; j < elOrder.length; j++) {
    var elem = elOrder[j];
    var pct = total > 0 ? Math.round((counts[elem] / total) * 100) : 0;
    html += '<div class="tracking__balance-row">';
    html += '<span class="tracking__balance-label">' + ELEMENT_LABELS[elem] + '</span>';
    html += '<div class="tracking__balance-bar"><div class="tracking__balance-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="tracking__balance-pct">' + pct + '%</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

function renderCheckinForm() {
  var el = document.getElementById('tracking-checkin');
  if (!el) return;

  // Check if already checked in today
  var today = getLocalDateStr(new Date());
  var checkins = getCheckins();
  var todayCheckin = checkins.find(function(c) { return c.date && c.date.substring(0, 10) === today; });

  if (todayCheckin) {
    var moodInfo = MOOD_OPTIONS.find(function(m) { return m.id === todayCheckin.mood; });
    el.innerHTML =
      '<p class="tracking__checkin-label">\u2713 Du har allerede tjekket ind i dag</p>' +
      '<p style="font-size:24px; text-align:center; margin-bottom:8px;">' + (moodInfo ? moodInfo.icon : '') + '</p>' +
      '<p style="font-family:var(--font-serif); font-style:italic; color:var(--text-secondary); text-align:center;">' + (todayCheckin.note || 'Ingen noter') + '</p>';
    return;
  }

  var html = '';

  // Mood selection
  html += '<p class="tracking__checkin-label">Hvordan f\u00F8les din energi lige nu?</p>';
  html += '<div class="tracking__mood-grid">';
  for (var i = 0; i < MOOD_OPTIONS.length; i++) {
    var m = MOOD_OPTIONS[i];
    var sel = TrackingState.checkinMood === m.id ? ' tracking__mood-btn--selected' : '';
    html += '<button class="tracking__mood-btn' + sel + '" onclick="selectMood(\'' + m.id + '\')">';
    html += '<span class="tracking__mood-icon">' + m.icon + '</span>';
    html += '<span class="tracking__mood-name">' + m.name + '</span>';
    html += '</button>';
  }
  html += '</div>';

  // Activity tags
  html += '<p class="tracking__checkin-label">Hvad har du gjort i dag?</p>';
  html += '<div class="tracking__tags">';
  for (var t = 0; t < ACTIVITY_TAGS.length; t++) {
    var tag = ACTIVITY_TAGS[t];
    var tagSel = TrackingState.checkinTags.indexOf(tag) !== -1 ? ' tracking__tag--selected' : '';
    html += '<button class="tracking__tag' + tagSel + '" onclick="toggleCheckinTag(\'' + tag + '\')">' + tag + '</button>';
  }
  html += '</div>';

  // Notes
  html += '<p class="tracking__checkin-label">Noget du vil huske?</p>';
  html += '<textarea class="tracking__notes" id="checkin-note" placeholder="Skriv frit \u2014 det er kun for dig selv\u2026" oninput="TrackingState.checkinNote=this.value">' + escapeHtml(TrackingState.checkinNote) + '</textarea>';

  // Save button
  html += '<button class="tracking__save-btn" onclick="submitCheckin()">Gem check-in</button>';

  el.innerHTML = html;
}

function selectMood(moodId) {
  TrackingState.checkinMood = moodId;
  renderCheckinForm();
}

function toggleCheckinTag(tag) {
  var idx = TrackingState.checkinTags.indexOf(tag);
  if (idx !== -1) {
    TrackingState.checkinTags.splice(idx, 1);
  } else {
    TrackingState.checkinTags.push(tag);
  }
  renderCheckinForm();
}

function submitCheckin() {
  if (!TrackingState.checkinMood) {
    showActionToast('V\u00E6lg din energi f\u00F8rst');
    return;
  }

  // Capture current cycles
  ensureIdagData();
  var cycleInfo = '';
  if (window._idagData) {
    var d = window._idagData;
    var parts = [];
    if (d.lifePhase) parts.push('Fase ' + d.lifePhase.phase);
    if (d.season) parts.push(d.season.season);
    if (d.weekday) parts.push(d.weekday.day);
    if (d.organClock) parts.push(d.organClock.organ);
    cycleInfo = parts.join(' \u00B7 ');
  }

  var now = new Date();
  var entry = {
    date: getLocalDateStr(now) + 'T' + String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':00',
    mood: TrackingState.checkinMood,
    tags: TrackingState.checkinTags.slice(),
    note: TrackingState.checkinNote,
    cycles: cycleInfo
  };

  saveCheckin(entry);

  // Reset state
  TrackingState.checkinMood = null;
  TrackingState.checkinTags = [];
  TrackingState.checkinNote = '';

  showActionToast('Check-in gemt \u2713');

  // Re-render
  renderTrackingContent();
  renderCheckinForm();
  renderTimeline();
}

function renderTimeline() {
  var el = document.getElementById('tracking-timeline');
  if (!el) return;

  var checkins = getCheckinsForPeriod(TrackingState.period);

  if (checkins.length === 0) {
    el.innerHTML = '<h3 class="tracking__timeline-title">Tidslinje</h3><p class="tracking__empty">Ingen check-ins endnu. Start med din f\u00F8rste ovenfor.</p>';
    return;
  }

  var html = '<h3 class="tracking__timeline-title">Tidslinje</h3>';
  html += '<div class="tracking__timeline">';

  var max = Math.min(checkins.length, 20);
  for (var i = 0; i < max; i++) {
    var c = checkins[i];
    var moodInfo = MOOD_OPTIONS.find(function(m) { return m.id === c.mood; });
    var dateObj = new Date(c.date);
    var dateStr = dateObj.toLocaleDateString('da-DK', { weekday: 'short', day: 'numeric', month: 'short' });
    var timeStr = dateObj.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

    html += '<div class="tracking__entry">';
    html += '<p class="tracking__entry-date">' + dateStr + ' \u00B7 ' + timeStr + '</p>';
    if (moodInfo) {
      html += '<p class="tracking__entry-mood">' + moodInfo.icon + ' ' + moodInfo.name + '</p>';
    }
    if (c.tags && c.tags.length > 0) {
      html += '<div class="tracking__entry-tags">';
      for (var t = 0; t < c.tags.length; t++) {
        html += '<span class="tracking__entry-tag">' + c.tags[t] + '</span>';
      }
      html += '</div>';
    }
    if (c.note) {
      html += '<p class="tracking__entry-note">' + escapeHtml(c.note) + '</p>';
    }
    if (c.cycles) {
      html += '<p class="tracking__entry-cycles">' + c.cycles + '</p>';
    }
    html += '</div>';
  }

  html += '</div>';
  el.innerHTML = html;
}

window.setTrackingPeriod = setTrackingPeriod;
window.selectMood = selectMood;
window.toggleCheckinTag = toggleCheckinTag;
window.submitCheckin = submitCheckin;

// ---- Venn Diagram Components ----

var VENN_FONT = '"Times New Roman", Times, Georgia, serif';

// Element-specific fill colors with transparency for Venn circles
var VENN_ELEMENT_COLORS = {
  'VAND':  'rgba(30, 60, 90, 0.18)',
  'TRÆ':  'rgba(60, 120, 60, 0.18)',
  'ILD':   'rgba(180, 60, 60, 0.18)',
  'JORD':  'rgba(180, 140, 60, 0.18)',
  'METAL': 'rgba(160, 165, 175, 0.22)',
  'default': 'rgba(91, 107, 138, 0.20)'
};

var VENN_ELEMENT_STROKES = {
  'VAND':  'rgba(30, 60, 90, 0.30)',
  'TRÆ':  'rgba(60, 120, 60, 0.30)',
  'ILD':   'rgba(180, 60, 60, 0.30)',
  'JORD':  'rgba(180, 140, 60, 0.30)',
  'METAL': 'rgba(160, 165, 175, 0.38)',
  'default': 'rgba(91, 107, 138, 0.30)'
};

/**
 * VennTwo — Two overlapping circles with 3 text zones
 * Circles overlap ~40% of diameter for spacious overlap zone
 */
function renderVennTwo(opts) {
  var id = 'venn2-' + Math.random().toString(36).substr(2, 6);
  var compact = opts.compact || false;
  var W = compact ? 340 : 400;
  var H = compact ? 230 : 270;
  var R = compact ? 90 : 105;
  // ~40% overlap: distance between centers = R * 1.2 (so overlap width ≈ 0.8R)
  var cx1 = W / 2 - R * 0.6;
  var cx2 = W / 2 + R * 0.6;
  var cy = H / 2;

  var leftFill = (opts.leftElement && VENN_ELEMENT_COLORS[opts.leftElement]) || VENN_ELEMENT_COLORS['default'];
  var rightFill = (opts.rightElement && VENN_ELEMENT_COLORS[opts.rightElement]) || VENN_ELEMENT_COLORS['default'];
  var leftStroke = (opts.leftElement && VENN_ELEMENT_STROKES[opts.leftElement]) || VENN_ELEMENT_STROKES['default'];
  var rightStroke = (opts.rightElement && VENN_ELEMENT_STROKES[opts.rightElement]) || VENN_ELEMENT_STROKES['default'];

  // Overlap x-range
  var overlapXL = cx2 - R;
  var overlapXR = cx1 + R;
  var overlapW = overlapXR - overlapXL;

  // Text zone centers
  var leftCX = (cx1 - R + overlapXL) / 2;
  var rightCX = (overlapXR + cx2 + R) / 2;
  var overlapCX = (cx1 + cx2) / 2;

  // Font sizes
  var ts = compact ? 12 : 13.5;
  var ls = compact ? 10 : 11;
  var ots = compact ? 12 : 13;
  var ols = compact ? 10 : 11;

  // Helper to render text block
  function textBlock(cx, startY, title, lines, titleFill, lineFill, tSize, lSize) {
    var s = '';
    s += '<text x="' + cx + '" y="' + startY + '" text-anchor="middle" font-family=' + VENN_FONT + ' font-size="' + tSize + '" font-weight="bold" fill="' + titleFill + '">' + escapeHtml(title || '') + '</text>';
    for (var i = 0; i < lines.length; i++) {
      var yy = startY + (i + 1) * (lSize + 3);
      var italic = lines[i].charAt(0) === '*';
      var txt = italic ? lines[i].substring(1) : lines[i];
      s += '<text x="' + cx + '" y="' + yy + '" text-anchor="middle" font-family=' + VENN_FONT + ' font-size="' + lSize + '"' + (italic ? ' font-style="italic"' : '') + ' fill="' + lineFill + '">' + escapeHtml(txt) + '</text>';
    }
    return s;
  }

  var svg = '<div class="venn venn--two' + (compact ? ' venn--compact' : '') + '" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';
  svg += '<circle cx="' + cx1 + '" cy="' + cy + '" r="' + R + '" fill="' + leftFill + '" stroke="' + leftStroke + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cx2 + '" cy="' + cy + '" r="' + R + '" fill="' + rightFill + '" stroke="' + rightStroke + '" stroke-width="1.5"/>';

  // Left text
  var ll = opts.leftLines || [];
  var lsy = cy - ((1 + ll.length) * (ls + 3)) / 2 + ts / 2;
  svg += textBlock(leftCX, lsy, opts.leftTitle, ll, '#5B6B8A', '#555', ts, ls);

  // Right text
  var rl = opts.rightLines || [];
  var rsy = cy - ((1 + rl.length) * (ls + 3)) / 2 + ts / 2;
  svg += textBlock(rightCX, rsy, opts.rightTitle, rl, '#5B6B8A', '#555', ts, ls);

  // Overlap text
  var ol = opts.overlapLines || [];
  var osy = cy - ((1 + ol.length) * (ols + 3)) / 2 + ots / 2;
  svg += textBlock(overlapCX, osy, opts.overlapTitle, ol, '#244382', '#333', ots, ols);

  // Hit zones
  if (opts.onLeftClick) svg += '<circle cx="' + leftCX + '" cy="' + cy + '" r="' + (R * 0.45) + '" fill="transparent" class="venn__zone" onclick="' + opts.onLeftClick + '" style="cursor:pointer"/>';
  if (opts.onRightClick) svg += '<circle cx="' + rightCX + '" cy="' + cy + '" r="' + (R * 0.45) + '" fill="transparent" class="venn__zone" onclick="' + opts.onRightClick + '" style="cursor:pointer"/>';
  if (opts.onOverlapClick) svg += '<rect x="' + overlapXL + '" y="' + (cy - R * 0.5) + '" width="' + overlapW + '" height="' + R + '" fill="transparent" class="venn__zone" onclick="' + opts.onOverlapClick + '" style="cursor:pointer"/>';

  svg += '</svg></div>';
  return svg;
}

/**
 * VennThree — Three overlapping circles with 7 text zones
 * Circles pulled tightly toward center for large overlap regions
 */
function renderVennThree(opts) {
  var id = 'venn3-' + Math.random().toString(36).substr(2, 6);
  var W = 400;
  var H = 360;
  var R = 100;

  // Tight triangle: distance from center to each circle ≈ R * 0.58
  // This gives ~45% overlap between pairs and a roomy center
  var spread = R * 0.58;
  var centroidX = W / 2;
  var centroidY = H / 2 + 5;
  // A top, B bottom-left, C bottom-right (equilateral-ish)
  var cxA = centroidX;
  var cyA = centroidY - spread * 1.0;
  var cxB = centroidX - spread * 0.87;
  var cyB = centroidY + spread * 0.52;
  var cxC = centroidX + spread * 0.87;
  var cyC = centroidY + spread * 0.52;

  var fillA = (opts.elementA && VENN_ELEMENT_COLORS[opts.elementA]) || VENN_ELEMENT_COLORS['default'];
  var fillB = (opts.elementB && VENN_ELEMENT_COLORS[opts.elementB]) || VENN_ELEMENT_COLORS['default'];
  var fillC = (opts.elementC && VENN_ELEMENT_COLORS[opts.elementC]) || VENN_ELEMENT_COLORS['default'];
  var strokeA = (opts.elementA && VENN_ELEMENT_STROKES[opts.elementA]) || VENN_ELEMENT_STROKES['default'];
  var strokeB = (opts.elementB && VENN_ELEMENT_STROKES[opts.elementB]) || VENN_ELEMENT_STROKES['default'];
  var strokeC = (opts.elementC && VENN_ELEMENT_STROKES[opts.elementC]) || VENN_ELEMENT_STROKES['default'];

  var ts = 12; var ls = 10; var os = 10; var cts = 13; var cls = 10.5;

  // Exclusive zone text positions (pushed outward from center)
  var tAx = cxA, tAy = cyA - R * 0.42;
  var tBx = cxB - R * 0.30, tBy = cyB + R * 0.35;
  var tCx = cxC + R * 0.30, tCy = cyC + R * 0.35;

  // Pairwise overlap midpoints
  var abX = (cxA + cxB) / 2, abY = (cyA + cyB) / 2;
  var acX = (cxA + cxC) / 2, acY = (cyA + cyC) / 2;
  var bcX = (cxB + cxC) / 2, bcY = (cyB + cyC) / 2;

  // True centroid
  var cX = (cxA + cxB + cxC) / 3, cY = (cyA + cyB + cyC) / 3;

  var svg = '<div class="venn venn--three" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';
  svg += '<circle cx="' + cxA + '" cy="' + cyA + '" r="' + R + '" fill="' + fillA + '" stroke="' + strokeA + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cxB + '" cy="' + cyB + '" r="' + R + '" fill="' + fillB + '" stroke="' + strokeB + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cxC + '" cy="' + cyC + '" r="' + R + '" fill="' + fillC + '" stroke="' + strokeC + '" stroke-width="1.5"/>';

  // Helper
  function t(x, y, text, size, weight, fill, italic) {
    return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family=' + VENN_FONT + ' font-size="' + size + '"' + (weight ? ' font-weight="bold"' : '') + (italic ? ' font-style="italic"' : '') + ' fill="' + fill + '">' + escapeHtml(text) + '</text>';
  }

  // Zone A (top)
  var tl = opts.topLines || [];
  svg += t(tAx, tAy, opts.topTitle || '', ts, true, '#5B6B8A');
  for (var i = 0; i < Math.min(tl.length, 2); i++) svg += t(tAx, tAy + (i+1)*(ls+3), tl[i], ls, false, '#555');

  // Zone B (bottom-left)
  var bl = opts.bottomLeftLines || [];
  svg += t(tBx, tBy, opts.bottomLeftTitle || '', ts, true, '#5B6B8A');
  for (var j = 0; j < Math.min(bl.length, 2); j++) svg += t(tBx, tBy + (j+1)*(ls+3), bl[j], ls, false, '#555');

  // Zone C (bottom-right)
  var br = opts.bottomRightLines || [];
  svg += t(tCx, tCy, opts.bottomRightTitle || '', ts, true, '#5B6B8A');
  for (var k = 0; k < Math.min(br.length, 2); k++) svg += t(tCx, tCy + (k+1)*(ls+3), br[k], ls, false, '#555');

  // Pairwise overlaps
  svg += t(abX, abY, opts.overlapAB || '', os, false, '#444', true);
  svg += t(acX, acY, opts.overlapAC || '', os, false, '#444', true);
  svg += t(bcX, bcY + 4, opts.overlapBC || '', os, false, '#444', true);

  // Center
  var cl = opts.centerLines || [];
  var csY = cY - (cl.length * (cls + 2)) / 2;
  svg += t(cX, csY, opts.centerTitle || '', cts, true, '#244382');
  for (var m = 0; m < Math.min(cl.length, 2); m++) {
    var cItalic = cl[m].charAt(0) === '*';
    var cTxt = cItalic ? cl[m].substring(1) : cl[m];
    svg += t(cX, csY + (m+1)*(cls+3), cTxt, cls, false, '#333', cItalic);
  }

  // Hit zones
  if (opts.onZoneClick) {
    var zr = R * 0.3;
    svg += '<circle cx="' + tAx + '" cy="' + (tAy+5) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','A') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + tBx + '" cy="' + (tBy+5) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','B') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + tCx + '" cy="' + (tCy+5) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','C') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + cX + '" cy="' + cY + '" r="' + (zr*0.8) + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','center') + '" style="cursor:pointer"/>';
  }

  svg += '</svg></div>';
  return svg;
}

/**
 * VennFour — Four overlapping circles in diamond formation
 * Shows the most important pairwise overlaps + center
 */
function renderVennFour(opts) {
  var id = 'venn4-' + Math.random().toString(36).substr(2, 6);
  var W = 420;
  var H = 400;
  var R = 88;

  // Diamond: top, left, right, bottom — all pulled tight toward center
  var spread = R * 0.62;
  var midX = W / 2, midY = H / 2;
  var cxA = midX,             cyA = midY - spread;          // top
  var cxB = midX - spread,    cyB = midY;                   // left
  var cxC = midX + spread,    cyC = midY;                   // right
  var cxD = midX,             cyD = midY + spread;          // bottom

  var fillA = (opts.elementA && VENN_ELEMENT_COLORS[opts.elementA]) || VENN_ELEMENT_COLORS['default'];
  var fillB = (opts.elementB && VENN_ELEMENT_COLORS[opts.elementB]) || VENN_ELEMENT_COLORS['default'];
  var fillC = (opts.elementC && VENN_ELEMENT_COLORS[opts.elementC]) || VENN_ELEMENT_COLORS['default'];
  var fillD = (opts.elementD && VENN_ELEMENT_COLORS[opts.elementD]) || VENN_ELEMENT_COLORS['default'];
  var strokeA = (opts.elementA && VENN_ELEMENT_STROKES[opts.elementA]) || VENN_ELEMENT_STROKES['default'];
  var strokeB = (opts.elementB && VENN_ELEMENT_STROKES[opts.elementB]) || VENN_ELEMENT_STROKES['default'];
  var strokeC = (opts.elementC && VENN_ELEMENT_STROKES[opts.elementC]) || VENN_ELEMENT_STROKES['default'];
  var strokeD = (opts.elementD && VENN_ELEMENT_STROKES[opts.elementD]) || VENN_ELEMENT_STROKES['default'];

  var ts = 11.5; var ls = 9.5; var os = 9; var cts = 13; var cls = 10.5;

  // Exclusive zone text positions (pushed outward)
  var tAx = cxA, tAy = cyA - R * 0.40;
  var tBx = cxB - R * 0.35, tBy = cyB;
  var tCx = cxC + R * 0.35, tCy = cyC;
  var tDx = cxD, tDy = cyD + R * 0.45;

  // Helper
  function t(x, y, text, size, weight, fill, italic) {
    return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family=' + VENN_FONT + ' font-size="' + size + '"' + (weight ? ' font-weight="bold"' : '') + (italic ? ' font-style="italic"' : '') + ' fill="' + fill + '">' + escapeHtml(text || '') + '</text>';
  }

  var svg = '<div class="venn venn--four" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';

  // Draw circles
  svg += '<circle cx="' + cxA + '" cy="' + cyA + '" r="' + R + '" fill="' + fillA + '" stroke="' + strokeA + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cxB + '" cy="' + cyB + '" r="' + R + '" fill="' + fillB + '" stroke="' + strokeB + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cxC + '" cy="' + cyC + '" r="' + R + '" fill="' + fillC + '" stroke="' + strokeC + '" stroke-width="1.5"/>';
  svg += '<circle cx="' + cxD + '" cy="' + cyD + '" r="' + R + '" fill="' + fillD + '" stroke="' + strokeD + '" stroke-width="1.5"/>';

  // Zone labels
  var al = opts.topLines || [];
  svg += t(tAx, tAy, opts.topTitle, ts, true, '#5B6B8A');
  for (var i = 0; i < Math.min(al.length, 2); i++) svg += t(tAx, tAy + (i+1)*(ls+2), al[i], ls, false, '#555');

  var bll = opts.leftLines || [];
  svg += t(tBx, tBy, opts.leftTitle, ts, true, '#5B6B8A');
  for (var j = 0; j < Math.min(bll.length, 1); j++) svg += t(tBx, tBy + (j+1)*(ls+2), bll[j], ls, false, '#555');

  var crl = opts.rightLines || [];
  svg += t(tCx, tCy, opts.rightTitle, ts, true, '#5B6B8A');
  for (var k = 0; k < Math.min(crl.length, 1); k++) svg += t(tCx, tCy + (k+1)*(ls+2), crl[k], ls, false, '#555');

  var dl = opts.bottomLines || [];
  svg += t(tDx, tDy, opts.bottomTitle, ts, true, '#5B6B8A');
  for (var l = 0; l < Math.min(dl.length, 2); l++) svg += t(tDx, tDy + (l+1)*(ls+2), dl[l], ls, false, '#555');

  // Show highlighted pairwise overlaps (max 4 most important)
  var hl = opts.highlights || [];
  for (var h = 0; h < hl.length; h++) {
    var hi = hl[h];
    // Calculate midpoint of the two circles
    var pairs = { AB: [cxA,cyA,cxB,cyB], AC: [cxA,cyA,cxC,cyC], AD: [cxA,cyA,cxD,cyD], BC: [cxB,cyB,cxC,cyC], BD: [cxB,cyB,cxD,cyD], CD: [cxC,cyC,cxD,cyD] };
    var p = pairs[hi.pair];
    if (p) {
      var mx = (p[0]+p[2])/2, my = (p[1]+p[3])/2;
      svg += t(mx, my, hi.text, os, false, '#444', true);
    }
  }

  // Center text
  var cll = opts.centerLines || [];
  var csY = midY - (cll.length * (cls + 2)) / 2;
  svg += t(midX, csY, opts.centerTitle, cts, true, '#244382');
  for (var m = 0; m < Math.min(cll.length, 2); m++) {
    var cItalic = cll[m].charAt(0) === '*';
    var cTxt = cItalic ? cll[m].substring(1) : cll[m];
    svg += t(midX, csY + (m+1)*(cls+3), cTxt, cls, false, '#333', cItalic);
  }

  svg += '</svg></div>';
  return svg;
}

// Expose Venn functions globally
window.renderVennTwo = renderVennTwo;
window.renderVennThree = renderVennThree;
window.renderVennFour = renderVennFour;

// ---- Del / Gem / Kopier — Global Action Bar ----

function renderActionBar(screenName) {
  // Create action bar HTML
  var isSaved = isScreenFavorited(screenName);
  var html = '<div class="action-bar" id="action-bar">';

  // Del (Share)
  html += '<button class="action-bar__btn" onclick="actionShare()">';
  html += '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></span>';
  html += '<span class="action-bar__label">Del</span>';
  html += '</button>';

  // Kopiér link
  html += '<button class="action-bar__btn" onclick="actionCopyLink()">';
  html += '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></span>';
  html += '<span class="action-bar__label">Kopiér</span>';
  html += '</button>';

  // Gem (Save/Favorite)
  html += '<button class="action-bar__btn' + (isSaved ? ' action-bar__btn--saved' : '') + '" id="action-save-btn" onclick="actionToggleSave(\'' + screenName + '\')">';
  if (isSaved) {
    html += '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="#7690C1" stroke="#7690C1" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></span>';
    html += '<span class="action-bar__label">Gemt</span>';
  } else {
    html += '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></span>';
    html += '<span class="action-bar__label">Gem</span>';
  }
  html += '</button>';

  html += '</div>';
  return html;
}

function isScreenFavorited(screenName) {
  var favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  var screens = favs.screens || [];
  return screens.indexOf(screenName) !== -1;
}

function actionShare() {
  var title = document.querySelector('.screen h2, .screen .tema__title, .cic__title, .tracking__title');
  var titleText = title ? title.textContent : 'De 9 Livsfasers Energi';

  if (navigator.share) {
    navigator.share({
      title: titleText,
      text: titleText + ' — fra De 9 Livsfasers Energi',
      url: window.location.href
    }).catch(function() {});
  } else {
    // Fallback: copy link
    actionCopyLink();
  }
}

function actionCopyLink() {
  var url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function() {
      showActionToast('Link kopieret \u2713');
    }).catch(function() {
      showActionToast('Kunne ikke kopiere');
    });
  } else {
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showActionToast('Link kopieret \u2713');
    } catch(e) {
      showActionToast('Kunne ikke kopiere');
    }
    document.body.removeChild(ta);
  }
}

function actionToggleSave(screenName) {
  var favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  if (!favs.screens) favs.screens = [];

  var idx = favs.screens.indexOf(screenName);
  if (idx !== -1) {
    favs.screens.splice(idx, 1);
    showActionToast('Fjernet fra favoritter');
  } else {
    favs.screens.push(screenName);
    showActionToast('Gemt som favorit \u2713');
  }
  localStorage.setItem('favorites', JSON.stringify(favs));

  // Update button state
  var btn = document.getElementById('action-save-btn');
  if (btn) {
    var isSaved = favs.screens.indexOf(screenName) !== -1;
    btn.className = 'action-bar__btn' + (isSaved ? ' action-bar__btn--saved' : '');
    if (isSaved) {
      btn.innerHTML = '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="#7690C1" stroke="#7690C1" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></span><span class="action-bar__label">Gemt</span>';
    } else {
      btn.innerHTML = '<span class="action-bar__icon"><svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></span><span class="action-bar__label">Gem</span>';
    }
  }
}

function showActionToast(msg) {
  var existing = document.querySelector('.action-toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'action-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(function() {
    toast.classList.add('action-toast--visible');
  });

  setTimeout(function() {
    toast.classList.remove('action-toast--visible');
    setTimeout(function() { toast.remove(); }, 300);
  }, 2000);
}

window.actionShare = actionShare;
window.actionCopyLink = actionCopyLink;
window.actionToggleSave = actionToggleSave;
window.showActionToast = showActionToast;

// ---- Search Categories (12 categories with icons & descriptions) ----

var SEARCH_CATEGORIES = [
  {
    id: 'oevelser', title: 'Øvelser',
    desc: 'Yin yoga, åndearbejde, EFT-tapping, meditation og bevægelse — tilpasset det element, dine cyklusser kalder på i dag. Forskellige indgange til samme mål: balance.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="5" r="2.5"/><path d="M8 22l1-7H6l4-8h4l-2 5h3l-5 10"/></svg>'
  },
  {
    id: 'foelelser', title: 'Følelser',
    desc: 'Vrede, frygt, bekymring, sorg og glæde — hver følelse hører til et element. Forstå hvad din krop prøver at fortælle dig, og find veje til at møde det med omsorg.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
  },
  {
    id: 'livsfaser', title: 'Livsfaser',
    desc: 'Ni syv-års cyklusser fra fødsel til visdom. Hver fase bærer sit eget element og sin egen energi — se dem alle, og forstå den rejse du allerede er på.',
    screen: 'alle-faser',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6.5 3.5"/></svg>'
  },
  {
    id: 'elementer', title: 'Elementer',
    desc: 'Vand, Træ, Ild, Jord og Metal — de fem kræfter, der styrer alt fra årstider til organer. Lær dem at kende og se hvordan de bevæger sig gennem dig.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M12 2L2 19h20L12 2z"/><circle cx="12" cy="14" r="3"/></svg>'
  },
  {
    id: 'relationer', title: 'Relationer',
    desc: 'Når to mennesker mødes, mødes to cyklus-systemer. Se hvordan jeres livsfaser, elementer og energier interagerer — og hvornår timingen støtter jer.',
    screen: 'mine-relationer',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="4"/><path d="M2 20c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6"/></svg>'
  },
  {
    id: 'kost', title: 'Kost & Næring',
    desc: 'Mad er medicin — det vidste kinesisk medicin for tusind år siden. Find fødevarer, urter og tilberedning der nærer dit dominerende element lige nu.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>'
  },
  {
    id: 'tidsrejse', title: 'Tidsrejse',
    desc: 'Rejse i tid — bagud for at forstå, fremad for at forberede. Se hvilke cyklusser der var aktive ved vigtige tidspunkter i dit liv, og hvad der venter forude.',
    screen: 'tidsrejse',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,15"/><path d="M3 12h2M19 12h2"/></svg>'
  },
  {
    id: 'overgange', title: 'Kroppens overgange',
    desc: 'Pubertet, graviditet, overgangsalder — de store vendepunkter, hvor ét element afløser et andet. Forstå dem som overgange, ikke sammenbrud.',
    screen: 'alle-faser',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M4 14.9A7 7 0 1118 9"/><polyline points="15,9 18,9 18,12"/></svg>'
  },
  {
    id: 'tracking', title: 'Tracking & Mønstre',
    desc: 'Over tid vokser din egen visdom. Registrér din energi, dine mønstre og dine indsigter — og se dem i sammenhæng med dine cyklusser.',
    screen: 'min-rejse',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><polyline points="3,18 7,12 11,15 15,8 21,4"/><polyline points="17,4 21,4 21,8"/></svg>'
  },
  {
    id: 'epigenetik', title: 'Epigenetik & Arv',
    desc: 'Din mors livsfase da hun fødte dig påvirkede dit udgangspunkt. Udforsk den forskning der viser, hvordan cyklusser nedarves og formes på tværs af generationer.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/><circle cx="12" cy="12" r="1.5"/></svg>'
  },
  {
    id: 'baggrund', title: 'Baggrundsviden',
    desc: 'Ni forskellige kulturer har opdaget det samme: livet bevæger sig i cyklusser. Fra kinesisk medicin til vedisk filosofi — udforsk den viden, appen bygger på.',
    screen: 'samlede-indsigt',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M8 7h8M8 11h6"/></svg>'
  },
  {
    id: 'kollektiv', title: 'Kollektiv visdom',
    desc: 'Hvad sker der, når mange kvinder samler deres erfaringer? Anonyme mønstre, fælles indsigter og den visdom, der vokser frem når vi deler — uden at dele for meget.',
    screen: 'min-rejse',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M3 20c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5"/><path d="M15 15c2.8 0 5 2.2 5 5"/></svg>'
  }
];

// Emotion → Element mapping for search
var EMOTION_ELEMENTS = {
  'vrede': { element: 'TRÆ', desc: 'Vrede hører til Træ-elementet — leveren og galdeblæren. Når energien er blokeret, kan vrede opstå som et signal om behov for bevægelse og retning.' },
  'frustration': { element: 'TRÆ', desc: 'Frustration er Træ-energi der ikke kan flyde. Din lever prøver at sige noget — giv den plads til bevægelse.' },
  'irritation': { element: 'TRÆ', desc: 'Irritation er ofte Træ-energi der vil frem. Prøv at kanalisere den gennem kreativitet eller fysisk aktivitet.' },
  'frygt': { element: 'VAND', desc: 'Frygt hører til Vand-elementet — nyrerne og blæren. Det er kroppens dybeste alarm. Mød den med ro, varme og tid.' },
  'angst': { element: 'VAND', desc: 'Angst er Vand-elementet i ubalance. Nyrerne bærer din livskraft — de har brug for hvile og tryghed.' },
  'bekymring': { element: 'JORD', desc: 'Bekymring hører til Jord-elementet — milten og maven. Tankerne kører i ring. Prøv at komme ned i kroppen og finde jordforbindelse.' },
  'overtænkning': { element: 'JORD', desc: 'Overtænkning er Jord-energi i ubalance. Din milt kalder på næring — ikke mere information, men ro og varme.' },
  'sorg': { element: 'METAL', desc: 'Sorg hører til Metal-elementet — lungerne og tyktarmen. Sorg handler om at give slip. Tillad dig selv at mærke det, og ånd dybt.' },
  'tomhed': { element: 'METAL', desc: 'Tomhed er Metals skyggeside. Lungerne kalder på frisk luft og forbindelse til det essentielle.' },
  'glæde': { element: 'ILD', desc: 'Glæde hører til Ild-elementet — hjertet. Det er livets grundtone. Glæde der flyder frit nærer hele dit system.' },
  'rastløshed': { element: 'ILD', desc: 'Rastløshed er Ild-energi der spreder sig. Dit hjerte har brug for at finde ro — prøv at forbinde dig med én ting ad gangen.' },
  'uro': { element: 'ILD', desc: 'Indre uro kan skyldes for meget Ild. Dit nervesystem kalder på køling, stilhed og langsomme åndedrag.' }
};

function renderSearchCategories() {
  var el = document.getElementById('search-categories');
  if (!el) return;
  var html = '';
  for (var i = 0; i < SEARCH_CATEGORIES.length; i++) {
    var cat = SEARCH_CATEGORIES[i];
    html += '<div class="search-cat" onclick="handleSearchCategory(\'' + cat.id + '\')">';
    html += '<div class="search-cat__icon">' + cat.icon + '</div>';
    html += '<div class="search-cat__body">';
    html += '<h3 class="search-cat__title">' + cat.title + '</h3>';
    html += '<p class="search-cat__desc">' + cat.desc + '</p>';
    html += '</div>';
    html += '<span class="search-cat__arrow">\u203A</span>';
    html += '</div>';
  }
  el.innerHTML = html;
}

function handleSearchCategory(catId) {
  var cat = null;
  for (var i = 0; i < SEARCH_CATEGORIES.length; i++) {
    if (SEARCH_CATEGORIES[i].id === catId) { cat = SEARCH_CATEGORIES[i]; break; }
  }
  if (!cat) return;
  toggleSearch();
  App.loadScreen(cat.screen);
}

function toggleSearch() {
  var overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  var isOpen = overlay.classList.contains('search-overlay--open');
  overlay.classList.toggle('search-overlay--open', !isOpen);
  if (!isOpen) {
    var input = document.getElementById('search-input');
    if (input) { input.value = ''; input.focus(); }
    var results = document.getElementById('search-results');
    if (results) results.innerHTML = '';
    var tags = document.getElementById('search-tags');
    if (tags) tags.style.display = '';
    var cats = document.getElementById('search-categories');
    if (cats) cats.style.display = '';
    renderSearchCategories();
  }
}

function handleSearch(query) {
  var results = document.getElementById('search-results');
  var tags = document.getElementById('search-tags');
  var cats = document.getElementById('search-categories');
  if (!results) return;

  if (!query || query.length < 2) {
    results.innerHTML = '';
    if (tags) tags.style.display = '';
    if (cats) cats.style.display = '';
    renderSearchCategories();
    return;
  }
  if (tags) tags.style.display = 'none';
  if (cats) cats.style.display = 'none';

  var q = query.toLowerCase();
  var matches = [];

  // 1. Søg i følelser
  var emotionKeys = Object.keys(EMOTION_ELEMENTS);
  for (var e = 0; e < emotionKeys.length; e++) {
    if (emotionKeys[e].indexOf(q) !== -1) {
      var em = EMOTION_ELEMENTS[emotionKeys[e]];
      matches.push({ title: emotionKeys[e].charAt(0).toUpperCase() + emotionKeys[e].slice(1), subtitle: ELEMENT_LABELS[em.element] + '-element \u00B7 ' + em.desc.substring(0, 60) + '\u2026', action: "App.loadScreen('samlede-indsigt')" });
    }
  }

  // 2. Søg i faser
  for (var i = 1; i <= 9; i++) {
    var p = PHASE_DATA[i];
    var pSearch = ('fase ' + i + ' ' + p.name + ' ' + ELEMENT_LABELS[p.element]).toLowerCase();
    if (pSearch.indexOf(q) !== -1) {
      matches.push({ title: 'Fase ' + i + ': ' + p.name, subtitle: ELEMENT_LABELS[p.element] + ' \u00B7 ' + p.startAge + '\u2013' + p.endAge + ' \u00E5r', action: "App.loadScreen('alle-faser')" });
    }
  }

  // 3. Søg i elementer
  var elKeys = Object.keys(ELEMENT_LABELS);
  for (var j = 0; j < elKeys.length; j++) {
    var elName = ELEMENT_LABELS[elKeys[j]].toLowerCase();
    if (elName.indexOf(q) !== -1 || (q.indexOf(elName) !== -1)) {
      matches.push({ title: ELEMENT_LABELS[elKeys[j]] + '-element', subtitle: 'Se din samlede indsigt for ' + ELEMENT_LABELS[elKeys[j]], action: "App.loadScreen('samlede-indsigt')" });
    }
  }

  // 4. Søg i yoga
  var yogaKeys = Object.keys(INSIGHT_YOGA);
  for (var y = 0; y < yogaKeys.length; y++) {
    var poses = INSIGHT_YOGA[yogaKeys[y]];
    for (var yp = 0; yp < poses.length; yp++) {
      if (poses[yp].pose.toLowerCase().indexOf(q) !== -1 || poses[yp].desc.toLowerCase().indexOf(q) !== -1) {
        matches.push({ title: poses[yp].pose, subtitle: ELEMENT_LABELS[yogaKeys[y]] + '-element \u00B7 Yin Yoga', action: "App.loadScreen('samlede-indsigt')" });
      }
    }
  }

  // 5. Søg i mad
  var foodKeys = Object.keys(INSIGHT_FOOD);
  for (var f = 0; f < foodKeys.length; f++) {
    var foods = INSIGHT_FOOD[foodKeys[f]];
    for (var fi = 0; fi < foods.length; fi++) {
      if (foods[fi].item.toLowerCase().indexOf(q) !== -1 || foods[fi].desc.toLowerCase().indexOf(q) !== -1) {
        matches.push({ title: foods[fi].item, subtitle: ELEMENT_LABELS[foodKeys[f]] + '-element \u00B7 Kost & N\u00E6ring', action: "App.loadScreen('samlede-indsigt')" });
      }
    }
  }

  // 6. Søg i fokusområder
  var focusKeys = Object.keys(INSIGHT_FOCUS);
  for (var fk = 0; fk < focusKeys.length; fk++) {
    var focusItems = INSIGHT_FOCUS[focusKeys[fk]];
    for (var fx = 0; fx < focusItems.length; fx++) {
      if (focusItems[fx].toLowerCase().indexOf(q) !== -1) {
        matches.push({ title: focusItems[fx].split(' \u2013 ')[0], subtitle: ELEMENT_LABELS[focusKeys[fk]] + '-element \u00B7 Fokusomr\u00E5de', action: "App.loadScreen('samlede-indsigt')" });
      }
    }
  }

  // 7. Søg i kategorier
  for (var c = 0; c < SEARCH_CATEGORIES.length; c++) {
    var cat = SEARCH_CATEGORIES[c];
    if (cat.title.toLowerCase().indexOf(q) !== -1 || cat.desc.toLowerCase().indexOf(q) !== -1) {
      matches.push({ title: cat.title, subtitle: cat.desc.substring(0, 70) + '\u2026', action: "App.loadScreen('" + cat.screen + "')" });
    }
  }

  // 8. Generelle søgetermer
  if ('overgangsalder'.indexOf(q) !== -1 || q.indexOf('overgang') !== -1) {
    matches.push({ title: 'Overgangsalder', subtitle: 'Fase 7\u20138 \u00B7 Jord & Metal \u2014 en af kroppens store overgange', action: "App.loadScreen('alle-faser')" });
  }
  if ('relationer'.indexOf(q) !== -1 || 'partner'.indexOf(q) !== -1 || 'parforhold'.indexOf(q) !== -1) {
    matches.push({ title: 'Relationer', subtitle: 'Se hvordan to cyklus-systemer m\u00F8des', action: "App.loadScreen('mine-relationer')" });
  }
  if ('cyklusser'.indexOf(q) !== -1) {
    matches.push({ title: 'Cyklusser i Cyklusser', subtitle: 'Dine fem lag af energi i dag', action: "App.loadScreen('cyklusser-i-cyklusser')" });
  }
  if ('epigenetik'.indexOf(q) !== -1 || 'arv'.indexOf(q) !== -1) {
    matches.push({ title: 'Epigenetik & Arv', subtitle: 'Hvordan cyklusser nedarves p\u00E5 tv\u00E6rs af generationer', action: "App.loadScreen('samlede-indsigt')" });
  }
  if ('tracking'.indexOf(q) !== -1 || 'mønster'.indexOf(q) !== -1 || q.indexOf('m\u00F8nster') !== -1) {
    matches.push({ title: 'Tracking & M\u00F8nstre', subtitle: 'F\u00F8lg din energi over tid', action: "App.loadScreen('min-rejse')" });
  }
  if ('vinter'.indexOf(q) !== -1 && q.indexOf('vinter') !== -1) {
    matches.push({ title: 'Vinter\u00F8velser', subtitle: 'Vand-element \u00B7 \u00D8velser der n\u00E6rer nyrer og ro', action: "App.loadScreen('samlede-indsigt')" });
  }

  // Deduplikér baseret på titel
  var seen = {};
  var unique = [];
  for (var u = 0; u < matches.length; u++) {
    if (!seen[matches[u].title]) {
      seen[matches[u].title] = true;
      unique.push(matches[u]);
    }
  }
  matches = unique.slice(0, 10);

  if (matches.length === 0) {
    results.innerHTML = '<p class="search-overlay__empty">Ingen resultater for \u201C' + escapeHtml(query) + '\u201D</p>';
    return;
  }

  var html = '';
  for (var m = 0; m < matches.length; m++) {
    var match = matches[m];
    html += '<div class="search-overlay__result" onclick="toggleSearch(); ' + match.action + '">';
    html += '<p class="search-overlay__result-title">' + match.title + '</p>';
    html += '<p class="search-overlay__result-subtitle">' + match.subtitle + '</p>';
    html += '</div>';
  }
  results.innerHTML = html;
}

function handleSearchTag(tag) {
  var input = document.getElementById('search-input');
  if (input) { input.value = tag; }
  handleSearch(tag);
}

window.toggleSearch = toggleSearch;
window.handleSearch = handleSearch;
window.handleSearchTag = handleSearchTag;
window.handleSearchCategory = handleSearchCategory;
window.renderSearchCategories = renderSearchCategories;

// Register Service Worker - force update
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    // Clear old caches to prevent stale content
    if (window.caches) {
      const names = await caches.keys();
      await Promise.all(names.map(name => caches.delete(name)));
    }
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
      reg.update();
      console.log('SW registered:', reg.scope);
    } catch (err) {
      console.log('SW registration failed:', err);
    }
  });
}

// Start app
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
