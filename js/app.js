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

/* BACKUP — old RING_COLORS:
  { 0: '#2E4A88', 1: '#3A5A9A', 2: '#5070AD', 3: '#6D88BF', 4: '#8BA0D1', center: '#2E4A88' }
*/
const RING_COLORS = {
  0: '#526999',
  1: '#5d72a8',
  2: '#7690c1',
  3: '#8ea8cf',
  4: '#a7bfdd',
  center: '#526999'
};

const ELEMENT_BLUES = {
  'VAND':  '#244382',
  'TRÆ':  '#3A5A9A',
  'ILD':   '#6D88BF',
  'JORD':  '#5070AD',
  'METAL': '#8BA0D1'
};

function blendHex(c1, c2, t) {
  var r1 = parseInt(c1.slice(1,3),16), g1 = parseInt(c1.slice(3,5),16), b1 = parseInt(c1.slice(5,7),16);
  var r2 = parseInt(c2.slice(1,3),16), g2 = parseInt(c2.slice(3,5),16), b2 = parseInt(c2.slice(5,7),16);
  var r = Math.round(r1 + (r2 - r1) * t), g = Math.round(g1 + (g2 - g1) * t), b = Math.round(b1 + (b2 - b1) * t);
  return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

function hexToRgba(hex, alpha) {
  var r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}


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

// Safeguard: some browsers parse "1969-05-15" as year 69 instead of 1969
function safeParseBirth(birthdate) {
  var d = new Date(birthdate);
  if (d.getFullYear() < 1900) {
    var m = String(birthdate).match(/(\d{4})/);
    if (m) d.setFullYear(parseInt(m[1], 10));
  }
  return d;
}

// Sanitize birthdate STRING before saving — fixes "0069-05-19" → "1969-05-19"
function sanitizeBirthdate(dateStr) {
  if (!dateStr) return dateStr;
  var parts = dateStr.split('-');
  if (parts.length === 3) {
    var year = parseInt(parts[0], 10);
    if (year > 0 && year < 100) {
      year += 1900;
      return year + '-' + parts[1] + '-' + parts[2];
    }
  }
  return dateStr;
}

// Repair corrupted birthdate in localStorage (run once at startup)
function repairStoredBirthdate() {
  var raw = localStorage.getItem('user');
  if (!raw) return;
  try {
    var user = JSON.parse(raw);
    if (user && user.birthdate) {
      var fixed = sanitizeBirthdate(user.birthdate);
      if (fixed !== user.birthdate) {
        user.birthdate = fixed;
        user.age = calculateAge(fixed);
        var ph = calculateLifePhase(user.age);
        user.phase = ph.phase;
        user.element = ph.element;
        localStorage.setItem('user', JSON.stringify(user));
        console.log('[Livsfaser] Repareret fødselsdato:', fixed, '| alder:', user.age);
      }
    }
  } catch(e) {}
  // Also repair relations
  try {
    var rels = JSON.parse(localStorage.getItem('relations') || '[]');
    var changed = false;
    for (var i = 0; i < rels.length; i++) {
      if (rels[i] && rels[i].birthdate) {
        var f = sanitizeBirthdate(rels[i].birthdate);
        if (f !== rels[i].birthdate) { rels[i].birthdate = f; changed = true; }
      }
    }
    if (changed) localStorage.setItem('relations', JSON.stringify(rels));
  } catch(e) {}
}

function calculateAge(birthdate) {
  const today = new Date();
  const birth = safeParseBirth(birthdate);
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
  var birth = safeParseBirth(birthdate);
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
  return { age: age, lifePhase: lifePhase, season: season, weekday: weekday, organ: organ, monthCycle: monthCycle, elements: elements, date: date, birthdate: birthdate };
}

// ---- Onboarding ----

// Lotus leaf phase data for onboarding step 2
const LOTUS_LEAF_DATA = {
  1: { fasenavn: 'Livets Begyndelse', alder: '0\u20137 \u00e5r', element: 'Vand', tegn: '\u6c34', organ: 'Nyrer', organTegn: '\u814e', aarstid: 'Vinter', aarstidTegn: '\u51ac', balance: 'Tillid, nysgerrighed, tryghed', ubalance: 'Frygt, usikkerhed', temaer: 'Tilknytning, tryghed, rod', gave: 'Alt begynder i dig' },
  2: { fasenavn: 'Udforskning', alder: '7\u201314 \u00e5r', element: 'Vand/Tr\u00e6', tegn: '\u6c34\u6728', organ: 'Nyrer, Lever', organTegn: '\u814e\u809d', aarstid: 'Sen vinter', aarstidTegn: '\u51ac', balance: 'Mod, nysgerrighed, leg', ubalance: 'Tilbageholdelse, overforsigtighed', temaer: 'Gr\u00e6nser, identitet, leg', gave: 'Modet til at pr\u00f8ve' },
  3: { fasenavn: 'Forvandling', alder: '14\u201321 \u00e5r', element: 'Tr\u00e6', tegn: '\u6728', organ: 'Lever', organTegn: '\u809d', aarstid: 'For\u00e5r', aarstidTegn: '\u6625', balance: 'Kreativitet, retning, mod', ubalance: 'Vrede, frustration, retningsl\u00f8shed', temaer: 'Opr\u00f8r, retning, seksualitet', gave: 'Kraften til at bryde fri' },
  4: { fasenavn: 'Blomstring', alder: '21\u201328 \u00e5r', element: 'Tr\u00e6/Ild', tegn: '\u6728\u706b', organ: 'Lever, Hjerte', organTegn: '\u809d\u5fc3', aarstid: 'Sen for\u00e5r', aarstidTegn: '\u6625', balance: 'Vitalitet, \u00e5benhed, eventyrlyst', ubalance: 'Rastl\u00f8shed, overmod', temaer: 'Frihed, valg, udfoldelse', gave: 'Livet ligger \u00e5bent foran dig' },
  5: { fasenavn: 'Ansvar', alder: '28\u201335 \u00e5r', element: 'Ild', tegn: '\u706b', organ: 'Hjerte', organTegn: '\u5fc3', aarstid: 'Sommer', aarstidTegn: '\u590f', balance: 'Gl\u00e6de, varme, forbindelse', ubalance: 'Udbr\u00e6ndthed, utilstr\u00e6kkelighed', temaer: 'Gr\u00e6nser, omsorg, identitet', gave: 'Du kan rumme andre' },
  6: { fasenavn: 'Modning', alder: '35\u201342 \u00e5r', element: 'Ild/Jord', tegn: '\u706b\u571f', organ: 'Hjerte, Milt', organTegn: '\u5fc3\u813e', aarstid: 'Sen sommer', aarstidTegn: '\u590f', balance: 'Dybde, selvindsigt, n\u00e6rv\u00e6r', ubalance: 'Bekymring, tvivl, overansvar', temaer: 'Dybde, prioritering, sandhed', gave: 'Du ved hvad der er \u00e6gte' },
  7: { fasenavn: 'H\u00f8st', alder: '42\u201349 \u00e5r', element: 'Jord/Metal', tegn: '\u571f\u91d1', organ: 'Milt, Lunger', organTegn: '\u813e\u80ba', aarstid: 'Efter\u00e5r', aarstidTegn: '\u79cb', balance: 'Klarhed, taknemmelighed, at slippe', ubalance: 'Sorg, tab, holde fast', temaer: 'Tab, frihed, essens', gave: 'Klarhed over hvad der t\u00e6ller' },
  8: { fasenavn: 'Frig\u00f8relse', alder: '49\u201356 \u00e5r', element: 'Metal', tegn: '\u91d1', organ: 'Lunger', organTegn: '\u80ba', aarstid: 'Sen efter\u00e5r', aarstidTegn: '\u79cb', balance: 'Frihed, essens, autenticitet', ubalance: 'Sorg, tomhed, identitetstab', temaer: 'Identitet, stilhed, mod', gave: 'Du tilh\u00f8rer kun dig selv' },
  9: { fasenavn: 'Visdom', alder: '56\u201363+ \u00e5r', element: 'Vand', tegn: '\u6c34', organ: 'Nyrer', organTegn: '\u814e', aarstid: 'Vinter', aarstidTegn: '\u51ac', balance: 'Visdom, ro, forbundethed', ubalance: 'Frygt, tilbagetr\u00e6kning, stagnation', temaer: 'Mening, arv, forbundethed', gave: 'Hele kredsl\u00f8bet lever i dig' }
};

function renderLotusLeafSVG(phaseNum) {
  var d = LOTUS_LEAF_DATA[phaseNum];
  if (!d) return '';
  var esc = function(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  return '<svg viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;height:auto;display:block;margin:0 auto">' +
    '<path d="M300,750 C150,700 80,580 110,430 C140,280 240,180 300,150 C360,180 460,280 490,430 C520,580 450,700 300,750 Z" fill="#7690C1" stroke="#7690C1" stroke-width="3"/>' +
    '<text x="300" y="280" text-anchor="middle" font-family="Times New Roman, serif" font-size="28" font-weight="bold" fill="#1A1A1A">' + esc(d.fasenavn) + '</text>' +
    '<text x="300" y="315" text-anchor="middle" font-family="Times New Roman, serif" font-size="20" fill="#2A2A2A">(' + esc(d.alder) + ')</text>' +
    '<text x="300" y="355" text-anchor="middle" font-family="Times New Roman, serif" font-size="16" font-style="italic" fill="#3A3A3A"><tspan font-weight="bold">Element:</tspan> ' + esc(d.element) + ' <tspan font-weight="bold">' + d.tegn + '</tspan></text>' +
    '<text x="300" y="380" text-anchor="middle" font-family="Times New Roman, serif" font-size="16" font-style="italic" fill="#3A3A3A"><tspan font-weight="bold">Organ:</tspan> ' + esc(d.organ) + ' <tspan font-weight="bold">' + d.organTegn + '</tspan></text>' +
    '<text x="300" y="405" text-anchor="middle" font-family="Times New Roman, serif" font-size="16" font-style="italic" fill="#3A3A3A"><tspan font-weight="bold">\u00c5rstid:</tspan> ' + esc(d.aarstid) + ' <tspan font-weight="bold">' + d.aarstidTegn + '</tspan></text>' +
    '<line x1="150" y1="425" x2="450" y2="425" stroke="#3A3A3A" stroke-width="1.5"/>' +
    '<text x="300" y="455" text-anchor="middle" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#2A2A2A">F\u00f8lelser i balance:</text>' +
    '<text x="300" y="480" text-anchor="middle" font-family="Times New Roman, serif" font-size="14" fill="#3A3A3A">' + esc(d.balance) + '</text>' +
    '<text x="300" y="520" text-anchor="middle" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#2A2A2A">F\u00f8lelser i ubalance:</text>' +
    '<text x="300" y="545" text-anchor="middle" font-family="Times New Roman, serif" font-size="14" fill="#3A3A3A">' + esc(d.ubalance) + '</text>' +
    '<text x="300" y="585" text-anchor="middle" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#2A2A2A">Typiske temaer:</text>' +
    '<text x="300" y="610" text-anchor="middle" font-family="Times New Roman, serif" font-size="14" fill="#3A3A3A">' + esc(d.temaer) + '</text>' +
    '<text x="300" y="650" text-anchor="middle" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#2A2A2A">Din gave:</text>' +
    '<text x="300" y="675" text-anchor="middle" font-family="Times New Roman, serif" font-size="14" fill="#3A3A3A">' + esc(d.gave) + '</text>' +
    '</svg>';
}

function renderOnboardingPhaseFigure() {
  var el = document.getElementById('onboarding-phase-figure');
  if (!el) return;
  var sf = "'Cormorant Garamond','Times New Roman',Georgia,serif";
  var phases = [
    { num: 1, label: 'Livets\nbegyndelse' },
    { num: 2, label: 'Udforskning' },
    { num: 3, label: 'Forvandling' },
    { num: 4, label: 'Blomstring' },
    { num: 5, label: 'Ansvar' },
    { num: 6, label: 'Modning' },
    { num: 7, label: 'H\u00f8st' },
    { num: 8, label: 'Frig\u00f8relse' },
    { num: 9, label: 'Visdom' }
  ];
  var W = 320, H = 320, CX = 160, CY = 160, R = 110, r = 30;
  var html = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto">';
  // Center circle
  html += '<circle cx="' + CX + '" cy="' + CY + '" r="44" fill="rgba(90,116,165,0.15)" stroke="rgba(90,116,165,0.25)" stroke-width="1"/>';
  html += '<text x="' + CX + '" y="' + (CY - 6) + '" font-family="' + sf + '" font-size="14" fill="#5A74A5" font-weight="600" font-style="italic" text-anchor="middle">De 9</text>';
  html += '<text x="' + CX + '" y="' + (CY + 12) + '" font-family="' + sf + '" font-size="14" fill="#5A74A5" font-weight="600" font-style="italic" text-anchor="middle">Livsfaser</text>';
  // 9 phase circles
  for (var i = 0; i < 9; i++) {
    var angle = (-Math.PI / 2) + (i * 2 * Math.PI / 9);
    var cx = CX + R * Math.cos(angle);
    var cy = CY + R * Math.sin(angle);
    var opacity = (0.06 + i * 0.007).toFixed(3);
    var borderOp = (0.15 + i * 0.006).toFixed(3);
    html += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + r + '" fill="rgba(90,116,165,' + opacity + ')" stroke="rgba(90,116,165,' + borderOp + ')" stroke-width="1"/>';
    html += '<text x="' + cx.toFixed(1) + '" y="' + (cy - 4).toFixed(1) + '" font-family="' + sf + '" font-size="13" fill="#5A74A5" font-weight="600" text-anchor="middle">' + phases[i].num + '</text>';
    var lines = phases[i].label.split('\n');
    for (var j = 0; j < lines.length; j++) {
      html += '<text x="' + cx.toFixed(1) + '" y="' + (cy + 8 + j * 11).toFixed(1) + '" font-family="' + sf + '" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">' + lines[j] + '</text>';
    }
  }
  html += '</svg>';
  el.innerHTML = html;
}

function renderMellemstation(userData) {
  var el = document.getElementById('onboarding-mellemstation');
  if (!el) return;

  var now = new Date();
  var age = calculateAge(userData.birthdate);
  var phase = calculateLifePhase(age);
  var season = calculateSeason(now);
  var weekday = calculateWeekday(now);
  var organClock = calculateOrganClock(now);

  // M\u00e5nedscyklus element (default: \u00e5rstid-baseret)
  var monthElement = season.element;

  // Samle alle elementer og t\u00e6lle
  var elements = [phase.element, season.element, monthElement, weekday.element, organClock.element];
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var dominant = elements[0];
  var maxCount = 0;
  for (var key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      dominant = key;
    }
  }

  // Element tegn
  var ELEMENT_TEGN = { 'VAND': '\u6c34', 'TR\u00c6': '\u6728', 'ILD': '\u706b', 'JORD': '\u571f', 'METAL': '\u91d1' };
  var tegn = ELEMENT_TEGN[phase.element] || '';

  // Resonans-label og tekst
  var resonansLabel = '';
  var resonansTekst = '';
  if (maxCount >= 4) {
    resonansLabel = 'FULD RESONANS';
    resonansTekst = maxCount + ' af dine fem cyklusser peger mod ' + ELEMENT_LABELS[dominant] + '. Det er sj\u00e6ldent \u2014 og det betyder at din livsfase, \u00e5rstiden og de andre matchende taler med \u00e9n stemme. Du m\u00e6rker det m\u00e5ske som en dyb ro, eller som en stille kraft der b\u00e6rer dig.';
  } else if (maxCount === 3) {
    resonansLabel = 'MEDVIND';
    resonansTekst = maxCount + ' af dine fem cyklusser peger mod ' + ELEMENT_LABELS[dominant] + '. Der er retning i din energi \u2014 tre cyklusser samler sig, og det giver en str\u00f8m du kan f\u00f8lge.';
  } else if (maxCount === 2) {
    resonansLabel = 'MODVIND';
    // Find alle unikke elementer
    var unikke = [];
    for (var ek in counts) { unikke.push(ELEMENT_LABELS[ek]); }
    resonansTekst = 'Dine cyklusser peger i forskellige retninger lige nu \u2014 ' + unikke.join(', ') + '. Det kan f\u00f8les uroligt \u2014 som at blive trukket flere veje. Det er der ingenting galt med. Det er bare cyklusserne, der endnu ikke har fundet hinanden.';
  } else {
    resonansLabel = 'MODVIND';
    resonansTekst = 'Alle fem cyklusser peger i hver sin retning. Det kan f\u00f8les uroligt \u2014 som at blive trukket flere veje. Det er der ingenting galt med. Det er bare cyklusserne, der endnu ikke har fundet hinanden.';
  }

  var maaned = now.toLocaleDateString('da-DK', { month: 'long' });
  var sf = "'Cormorant Garamond','Times New Roman',Georgia,serif";

  var html = '';

  // Lille figur \u00f8verst \u2014 dr\u00e5be/lotus med element-tegn
  html += '<div class="mellem__symbol">';
  html += '<svg width="60" height="72" viewBox="0 0 60 72" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto">';
  html += '<path d="M30 8 C22 22 10 34 10 46 C10 58 19 66 30 66 C41 66 50 58 50 46 C50 34 38 22 30 8Z" fill="rgba(90,116,165,0.08)" stroke="rgba(90,116,165,0.15)" stroke-width="1"/>';
  html += '<text x="30" y="46" font-family="' + sf + '" font-size="20" fill="#5A74A5" text-anchor="middle">' + tegn + '</text>';
  html += '</svg></div>';

  // Overskrift
  html += '<h1 class="mellem__title">Dit liv lige nu</h1>';

  // F\u00f8rste boks \u2014 Din profil
  html += '<div class="mellem__boks">';
  html += '<div class="mellem__boks-label">DIN PROFIL</div>';
  html += '<p class="mellem__boks-tekst">Du er i <strong>Fase ' + phase.phase + ': ' + phase.name + '</strong>. Dit element er <strong>' + ELEMENT_LABELS[phase.element] + '</strong>.</p>';
  html += '<p class="mellem__boks-tekst">Det er ' + season.season + ' \u2014 ' + ELEMENT_LABELS[season.element] + '-energi. Det er ' + maaned + ' \u2014 ' + ELEMENT_LABELS[monthElement] + '.</p>';
  html += '<p class="mellem__boks-tekst">I dag er det ' + weekday.day + ' \u2014 ' + ELEMENT_LABELS[weekday.element] + '.</p>';
  html += '<p class="mellem__boks-tekst">Lige nu arbejder <strong>' + organClock.organ + '</strong> i din krop.</p>';
  html += '</div>';

  // Anden boks \u2014 Resonans (gradient)
  html += '<div class="mellem__resonans-boks">';
  html += '<div class="mellem__resonans-label">' + resonansLabel + '</div>';
  html += '<p class="mellem__resonans-tekst">' + resonansTekst + '</p>';
  html += '</div>';

  // Lotus-dots
  html += '<div class="mellem__lotus-dots">\u00B7 \u00B7 \u00B7</div>';

  // Tredje boks \u2014 Hvad kan denne app?
  html += '<div class="mellem__boks">';
  html += '<div class="mellem__boks-label">HVAD KAN DENNE APP?</div>';
  html += '<p class="mellem__boks-tekst">Denne app viser dig det her \u2014 hver dag, i realtid. N\u00e5r du \u00e5bner den i morgen, har billedet \u00e6ndret sig. Et nyt organur, m\u00e5ske en ny ugedag med et andet element.</p>';
  html += '<p class="mellem__boks-tekst">Du kan ogs\u00e5 rejse i tid. V\u00e6lg en dag fra din fortid \u2014 en f\u00f8dselsdag, en skilsmisse, en ferie der \u00e6ndrede noget \u2014 og se hvilke cyklusser der var aktive. Eller kig fremad: n\u00e6ste jul, dit barns konfirmation, om fem \u00e5r.</p>';
  html += '<p class="mellem__boks-tekst">Og du kan se det sammen med nogen. Tilf\u00f8j din partner, din datter, din mor \u2014 og se hvordan jeres cyklusser m\u00f8des. Hvad der forst\u00e6rker hinanden, og hvad der skaber friktion.</p>';
  html += '</div>';

  // Fjerde sektion \u2014 Praksis
  html += '<h3 class="mellem__praksis-title">Hvad kan du g\u00f8re?</h3>';
  html += '<p class="mellem__praksis-hint">Appen foresl\u00e5r \u00f8velser, kost og \u00e5ndedr\u00e6t tilpasset dit element \u2014 hver dag.</p>';
  html += '<div class="mellem__praksis-row">';
  html += '<span class="mellem__praksis-tag">KROP</span>';
  html += '<span class="mellem__praksis-dot">\u00B7</span>';
  html += '<span class="mellem__praksis-tag">\u00c5NDEDR\u00c6T</span>';
  html += '<span class="mellem__praksis-dot">\u00B7</span>';
  html += '<span class="mellem__praksis-tag">N\u00c6RING</span>';
  html += '</div>';

  // Lotus-dots
  html += '<div class="mellem__lotus-dots">\u00B7 \u00B7 \u00B7</div>';

  // To knapper
  html += '<div class="mellem__buttons">';
  html += '<button class="mellem__btn mellem__btn--primary" onclick="Onboarding.finish()">G\u00e5 til din forside \u2192</button>';
  html += '<button class="mellem__btn mellem__btn--secondary" onclick="Onboarding.goToVinduer()">Pr\u00f8v Mine Vinduer \u2192</button>';
  html += '<p class="mellem__vinduer-hint">Rejse i tid \u2014 alene eller med nogen</p>';
  html += '</div>';

  el.innerHTML = html;
}

const Onboarding = {

  init() {
    // Render ni-cirkel figuren
    renderOnboardingPhaseFigure();

    var input = document.getElementById('onboarding-birthdate');
    if (input && !input._bound) {
      input._bound = true;
      input.addEventListener('change', function() {
        Onboarding._onBirthdateChange();
      });
    }
  },

  _onBirthdateChange() {
    var input = document.getElementById('onboarding-birthdate');
    var error = document.getElementById('onboarding-error');
    if (!input || !input.value) return;

    var birthdate = safeParseBirth(input.value);
    var today = new Date();
    if (birthdate >= today) {
      error.textContent = 'F\u00f8dselsdato skal v\u00e6re i fortiden';
      return;
    }
    error.textContent = '';

    this._birthdate = sanitizeBirthdate(input.value);
    this._age = calculateAge(this._birthdate);
    this._phase = calculateLifePhase(this._age);

    // Show phase confirmation with fade
    var resultEl = document.getElementById('onboarding-phase-result');
    if (resultEl) {
      resultEl.innerHTML = '<p class="onboarding__phase-highlight">Du er i <strong>Fase ' + this._phase.phase + ': ' + this._phase.name + '</strong> (' + this._phase.startAge + '\u2013' + this._phase.endAge + ' \u00e5r)</p>';
      resultEl.style.display = '';
      resultEl.style.opacity = '0';
      requestAnimationFrame(function() {
        resultEl.style.transition = 'opacity 0.4s ease';
        resultEl.style.opacity = '1';
      });
    }

    // Show button with fade
    var nextBtn = document.getElementById('onboarding-next-btn');
    if (nextBtn) {
      nextBtn.style.display = '';
      nextBtn.style.opacity = '0';
      requestAnimationFrame(function() {
        nextBtn.style.transition = 'opacity 0.4s ease';
        nextBtn.style.opacity = '1';
      });
    }
  },

  goToStep2() {
    if (!this._birthdate || !this._phase) return;

    // Save user data
    var userData = {
      birthdate: this._birthdate,
      age: this._age,
      phase: this._phase.phase,
      element: this._phase.element,
      tracksMenstruation: false,
      lastPeriodDate: null,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(userData));

    // Hide step 1, show step 2
    var step1 = document.getElementById('onboarding-step-1');
    var step2 = document.getElementById('onboarding-step-2');
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = '';

    // Render mellemstation
    renderMellemstation(userData);

    // Scroll to top
    var content = document.getElementById('screen-content');
    if (content) content.scrollTop = 0;
  },

  finish() {
    console.log('[Livsfaser] Onboarding fuldf\u00f8rt');
    App.loadScreen('idag');
  },

  goToVinduer() {
    console.log('[Livsfaser] Onboarding \u2192 Mine Vinduer');
    App.loadScreen('mine-vinduer');
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

// ---- De Ni Livsfaser: Detaljedata per fase ----

var LIVSFASE_DETAIL = {
  1: {
    introText: 'Den spæde begyndelse. Barnet lever i ren sansning, uden filtre, uden grænser. Alt er flydende som vand — tillid, berøring, lyd. Her lægges grundstenen for alt det, der kommer.',
    organPar: 'Nyrer og Blære',
    smag: 'Salt',
    aarstid: 'Vinter',
    folelser: { balance: 'Tillid, tryghed, ro', ubalance: 'Frygt, utryghed, tilbagetrækning' },
    vediskKobling: 'Brahmacharya — den tidlige læringsperiode',
    livstemaer: ['Grundlæggende tillid', 'Sanselig udforskning', 'Tilknytning'],
    psykOpgaver: ['Opbygge basal tillid', 'Kropslig sikkerhed', 'Emotionel tilknytning'],
    kropTekst: 'Kroppen i denne fase er ren vækst og modtagelighed. Nyrerne — livskraftens rod i kinesisk medicin — etablerer sig. Knoglerne dannes, tænderne bryder frem. Alt er blødt og formbart. Barnets krop er som vand: den tilpasser sig, optager, flyder.',
    sindTekst: 'Sindet er åbent som en stille sø. Barnet lever i nuet uden fortid eller fremtid. Fantasien er virkelig, drømmene er levende. Emotionelt handler alt om sikkerhed — at blive set, holdt, trøstet. Her grundlægges evnen til at mærke sig selv.',
    oevelse: { title: 'Butterfly (Yin Yoga)', desc: 'Åbner hofterne og stimulerer nyremeridianen. Velegnet til at finde indre ro.' },
    kost: { title: 'Sort sesam og valnødder', desc: 'Nærer nyreessensen og styrker livskraften. Varme supper med tang og bønner.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'En lang, blød udånding med lyden "chuiii" — frigør frygt og nærer vandets energi.' },
    refleksioner: ['Hvad føler du dig tryg ved i dit liv lige nu?', 'Hvornår mærkede du sidst en dyb ro i kroppen?', 'Hvad ville det betyde at give slip på en frygt?']
  },
  2: {
    introText: 'Verden åbner sig. Barnet udforsker med hele kroppen, hele sindet. Vandets flow har nu fået retning — nysgerrigheden driver fremad, og leg er det vigtigste arbejde der findes.',
    organPar: 'Nyrer og Blære',
    smag: 'Salt',
    aarstid: 'Vinter',
    folelser: { balance: 'Nysgerrighed, mod, glæde', ubalance: 'Frygt, usikkerhed, uro' },
    vediskKobling: 'Brahmacharya — den legende læringsperiode',
    livstemaer: ['Udforskning', 'Fantasi og leg', 'Social forståelse'],
    psykOpgaver: ['Udvikle selvstændighed', 'Lære at navigere i verden', 'Opbygge mod'],
    kropTekst: 'Kroppen vokser hurtigt nu. Muskler og koordination udvikles gennem leg og bevægelse. Nyrernes energi driver stadig — vitaliteten er enorm. Immunforsvaret modnes. Kroppen lærer grænser gennem fald, skrammer og genrejsning.',
    sindTekst: 'Sindet er en eksplosion af fantasi. Barnet begynder at forstå forskellen mellem sig selv og andre. Leg er ikke tidsfordriv — det er den vigtigste måde at forstå verden på. Emotionelt vokser evnen til empati, men også frustrationen over begrænsninger.',
    oevelse: { title: 'Caterpillar (Yin Yoga)', desc: 'Dyb foroverbøjning der beroer nervesystemet og nærer nyrerne.' },
    kost: { title: 'Varme supper med tang', desc: 'Tang er rig på mineraler der støtter nyrernes udvikling. Sorte bønner og ris.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Samme vandlyd som fase 1 — styrker den grundlæggende livskraft.' },
    refleksioner: ['Hvad gør dig nysgerrig i dit liv lige nu?', 'Hvor i dit liv kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis du ikke var bange?']
  },
  3: {
    introText: 'Forvandlingens tid. Træets energi skyder op med en kraft der ikke kan stoppes. Kroppen ændrer sig, identiteten søger form — alt det gamle dør langsomt, mens noget nyt bryder igennem.',
    organPar: 'Lever og Galdeblære',
    smag: 'Sur',
    aarstid: 'Forår',
    folelser: { balance: 'Kreativitet, handlekraft, mod', ubalance: 'Vrede, frustration, rastløshed' },
    vediskKobling: 'Brahmacharya — den transformative overgang',
    livstemaer: ['Pubertet og forvandling', 'Identitetssøgen', 'Løsrivelse'],
    psykOpgaver: ['Forme egen identitet', 'Navigere kroppens forandring', 'Etablere indre kompas'],
    kropTekst: 'Puberteten er træets fulde kraft. Hormoner eksploderer, kroppen ændrer form. Menstruationen begynder — den første kontakt med den cykliske kvindekrop. Leveren arbejder intenst for at processere alle de nye hormoner. Energien er enorm men ofte kaotisk.',
    sindTekst: 'Sindet søger desperat efter svar på spørgsmålet: hvem er jeg? Følelserne er intense og skiftende. Vrede er en naturlig del — den er træets kraft der søger retning. Den unge kvinde begynder at se verden med egne øjne, og det kan være både befriende og skræmmende.',
    oevelse: { title: 'Dragefly (Yin Yoga)', desc: 'Åbner inderlår og stimulerer levermeridianen. Frigør stagneret energi.' },
    kost: { title: 'Grønne bladgrøntsager', desc: 'Lever elsker grønt. Spirende korn, artiskokker, citronsaft om morgenen.' },
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'En lang "shhh"-udånding med let åben mund — frigør vrede og giver plads til kreativitet.' },
    refleksioner: ['Hvilke dele af dig selv opdagede du i teenageårene?', 'Hvad ønsker du stadig at forvandle i dit liv?', 'Hvor mærker du træets drivkraft — behovet for at vokse — lige nu?']
  },
  4: {
    introText: 'Blomstringens tid. Den unge kvinde træder frem med sin egen kraft og sine egne drømme. Uddannelse, de første store valg, kærlighed. Energien er ekspansiv — alt synes muligt.',
    organPar: 'Lever og Galdeblære',
    smag: 'Sur',
    aarstid: 'Forår',
    folelser: { balance: 'Selvtillid, passion, retning', ubalance: 'Utålmodighed, perfektionisme, overambitiøsitet' },
    vediskKobling: 'Grihastha — den unge voksnes indtræden',
    livstemaer: ['Blomstring', 'Karriere og drømme', 'Partnerskab'],
    psykOpgaver: ['Realisere potentiale', 'Navigere voksenlivets valg', 'Opbygge fundamenter'],
    kropTekst: 'Kroppen er i sin fulde kraft. Fertiliteten er høj, musklerne stærke, restitutionen hurtig. Leveren arbejder stabilt. Det er en tid hvor kroppen sjældent klager — den bærer, bygger, blomstrer. Men det er også her, de mønstre grundlægges som viser sig senere.',
    sindTekst: 'Sindet er fokuseret og ambitiøst. Der er mod til at tage chancer, starte uddannelser, flytte, forelske sig. Identiteten tager form — ikke længere søgende men handlende. Skyggesiden er stress og følelsen af aldrig at være nok. Træets energi kan blive til pres.',
    oevelse: { title: 'Twisted Roots (Yin Yoga)', desc: 'Drejning der stimulerer lever og galdeblære. Skaber flow og løsner stagnation.' },
    kost: { title: 'Spirende korn og artiskokker', desc: 'Forårets mad der matcher træets energi. Fermenterede grøntsager, eddike, citronsaft.' },
    healingLyd: { title: 'Leverlyd: Shhhhh', desc: 'Samme befriende lyd som fase 3 — slip frustration og find retning.' },
    refleksioner: ['Hvilke drømme fra din ungdom lever stadig i dig?', 'Hvor blomstrer du i dit liv lige nu?', 'Hvad ville du gøre anderledes, hvis du vidste det var godt nok?']
  },
  5: {
    introText: 'Ildens fase. Ansvar for karriere, måske børn, måske parforhold. Energien er intens og handlingsorienteret — kvinden brænder for det hun tror på, men flammen kræver brændstof.',
    organPar: 'Hjerte og Tyndtarm',
    smag: 'Bitter',
    aarstid: 'Sommer',
    folelser: { balance: 'Glæde, forbindelse, passion', ubalance: 'Rastløshed, angst, udbrændthed' },
    vediskKobling: 'Grihastha — husholderfasen',
    livstemaer: ['Ansvar og moderskab', 'Karrierens intensitet', 'Parforholdets prøvelser'],
    psykOpgaver: ['Balancere ild og hvile', 'Navigere andres behov', 'Bevare kontakt med sig selv'],
    kropTekst: 'Hjertet og kredsløbet er i centrum. Mange kvinder føder i denne fase — kroppen gennemgår en af sine mest transformerende oplevelser. Energien er høj men kan brænde ud. Hjertet arbejder hårdt, både fysisk og emotionelt. Søvnmangel og stress kan tære.',
    sindTekst: 'Sindet jonglerer mange bolde. Karriere, børn, parforhold, identitet — alt kræver opmærksomhed. Glæden er stor men også sårbar. Ildens fælde er at brænde for alt og glemme sig selv. Mange kvinder opdager her, at de har mistet kontakten til deres egne behov.',
    oevelse: { title: 'Melting Heart (Yin Yoga)', desc: 'Åbner bryst og hjertemeridian. En position der minder om at give slip og modtage.' },
    kost: { title: 'Bitter salat og grøn te', desc: 'Bitter smag køler hjertet. Vandmelon, hibiscuste, røde bær der nærer blodet.' },
    healingLyd: { title: 'Hjertelyd: Haaaa', desc: 'En åben, varm "haaaa"-udånding — åbner hjertet og frigør rastløshed.' },
    refleksioner: ['Hvilke mønstre gentager du fra din mor?', 'Hvad ville du gøre anderledes, hvis du kun havde ansvar for dig selv?', 'Hvornår brændte du sidst for noget uden at brænde ud?']
  },
  6: {
    introText: 'Modningens tid. Kvinden finder dybde og substans. Det der ikke længere tjener hende, begynder at falde væk. Erfaring bliver til visdom, og rødder vokser dybere end nogensinde.',
    organPar: 'Milt og Mave',
    smag: 'Sød',
    aarstid: 'Sensommer',
    folelser: { balance: 'Omsorg, stabilitet, medfølelse', ubalance: 'Bekymring, overtænkning, kontrol' },
    vediskKobling: 'Vanaprastha — den reflektive overgang',
    livstemaer: ['Modning', 'Selvindsigt', 'At finde sin plads'],
    psykOpgaver: ['Acceptere det levede', 'Slippe det overflødige', 'Finde indre fundament'],
    kropTekst: 'Kroppens stofskifte begynder at ændre sig. Fordøjelsen bliver vigtigere — milten og maven kræver mere opmærksomhed. Hormonniveauer begynder langsomt at skifte. Kroppen taler tydeligere nu: den belønner god næring og hvile, og den protesterer mod det der ikke passer.',
    sindTekst: 'Sindet begynder den store sortering. Hvad er ægte, hvad er overtaget? Mange kvinder oplever en identitetskrise — ikke destruktiv men transformativ. Bekymring er jordens skygge, men dens gave er ægte omsorg. Der er en stille styrke i at vide hvad man vil.',
    oevelse: { title: 'Childs Pose (Yin Yoga)', desc: 'Barnets stilling nærer milten og giver dyb tryghed. En position for tilbagevenden til det enkle.' },
    kost: { title: 'Rodfrugter og varme gryder', desc: 'Jord elsker sødt fra naturen: søde kartofler, græskar, hirse. Varm, nærende mad.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'En dyb "huuuu" fra maven — forankrer bekymring og nærer jordens stabilitet.' },
    refleksioner: ['Hvad har du lært om dig selv de sidste ti år?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, når alt andet vakler?']
  },
  7: {
    introText: 'Høstens tid. Alt det levede bærer nu frugt. Kvinden ved hvad hun vil og hvad hun ikke vil. En stille styrke vokser — ikke af ambition, men af erfaring og accept.',
    organPar: 'Milt og Mave',
    smag: 'Sød',
    aarstid: 'Sensommer',
    folelser: { balance: 'Vished, taknemmelighed, ro', ubalance: 'Tab, tomhed, bekymring for fremtiden' },
    vediskKobling: 'Vanaprastha — den modne tilbagetrækning',
    livstemaer: ['Overgangsalder', 'Høst af livserfaring', 'Ny frihed'],
    psykOpgaver: ['Omfavne forandring', 'Transformere tab til visdom', 'Genfinde sig selv'],
    kropTekst: 'Overgangsalderen er jordens store omvæltning. Hormonerne ændrer sig markant — hedeture, søvnforstyrrelser, humørsvingninger. Kroppen beder om at blive lyttet til. Milten og maven er nøgler til stabilitet. Den kvinde der nærer sin jord-energi, navigerer overgangen med mere ro.',
    sindTekst: 'Sindet oplever en frihed der kan være både skræmmende og befriende. Roller falder — mor, karrierekvinde, partner — og spørgsmålet melder sig: hvem er jeg, når rollerne er væk? Det er et vendepunkt. De kvinder der tør se indad, finder en visdom de ikke vidste de havde.',
    oevelse: { title: 'Reclining Twist (Yin Yoga)', desc: 'Liggende drejning der masserer indre organer og støtter fordøjelsen.' },
    kost: { title: 'Varm hirse og græskar', desc: 'Miltnærende kost. Undgå rå, kold mad. Ingefær, kanel, kardemomme.' },
    healingLyd: { title: 'Miltlyd: Huuuuu', desc: 'Samme jordlyd som fase 6 — rodfæster og giver tryghed i overgangen.' },
    refleksioner: ['Hvad er du mest taknemlig for i dit liv?', 'Hvad er du klar til at slippe — og hvad holder du fast i af vane?', 'Hvis du ikke skulle leve op til nogens forventninger, hvad ville du så gøre?']
  },
  8: {
    introText: 'Frigørelsens tid. Det essentielle viser sig med klar tydelighed. Kvinden frigør sig fra det overflødige — roller, forventninger, ting — og en ny lethed opstår.',
    organPar: 'Lunger og Tyktarm',
    smag: 'Skarp',
    aarstid: 'Efterår',
    folelser: { balance: 'Klarhed, lethed, accept', ubalance: 'Sorg, tomhed, isolation' },
    vediskKobling: 'Sannyasa — den frie fase',
    livstemaer: ['Frigørelse', 'Essens', 'Ny begyndelse'],
    psykOpgaver: ['Give slip med kærlighed', 'Finde det essentielle', 'Definere frihed'],
    kropTekst: 'Lungerne og tyktarmen er i fokus. Åndedrættet bliver en nøgle — dyb vejrtrækning nærer kroppen og sindet. Kroppen beder om renhed: ren luft, enkel mad, gode vaner. Immunforsvaret kræver opmærksomhed. Det er en tid for at rydde ud — fysisk og energetisk.',
    sindTekst: 'Sindet finder klarhed. Det overflødige falder som blade fra et træ — ikke med smerte, men med lethed. Sorg kan melde sig, men den er metallets gave: evnen til at slippe det der var, og se det der er. Mange kvinder oplever en ny skarphed og ærlighed.',
    oevelse: { title: 'Open Wings (Yin Yoga)', desc: 'Åbner brystkassen og lungemeridianerne. En position for at give slip og modtage luft.' },
    kost: { title: 'Hvide fødevarer og ingefær', desc: 'Lunger elsker hvidt: pærer, radiser, ris. Skarp smag der åbner luftvejene.' },
    healingLyd: { title: 'Lungelyd: Sssss', desc: 'En lang, kontrolleret "sssss" — frigør sorg og åbner brystet.' },
    refleksioner: ['Hvad kan du give slip på med kærlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvornår føler du dig mest fri?']
  },
  9: {
    introText: 'Visdommens tid. Vandets tilbagevenden. Cirklen sluttes — den vise kvinde bærer alle fasers erfaring i sig. Hun flyder igen, men nu med en dybde der kun kommer af at have levet fuldt.',
    organPar: 'Nyrer og Blære',
    smag: 'Salt',
    aarstid: 'Vinter',
    folelser: { balance: 'Visdom, accept, dyb ro', ubalance: 'Frygt for afslutning, isolation, stivhed' },
    vediskKobling: 'Sannyasa — den vise kvinde',
    livstemaer: ['Visdom og integration', 'Arv og videregivelse', 'Tilbagevenden til essensen'],
    psykOpgaver: ['Integrere alle faser', 'Videregive erfaring', 'Finde fred med helheden'],
    kropTekst: 'Nyrerne lukker cirklen. Livskraften er roligere men dybere. Knoglerne kræver omsorg, leddene beder om blød bevægelse. Vand-energien er nu visdomsvand — ikke barnets åbne sø, men en dyb brønd af erfaring. Kroppen belønner mildhed, varme og regelmæssighed.',
    sindTekst: 'Sindet er som en stille flod. Den vise kvinde har været ild, jord og metal — og nu vender hun tilbage til vandet med alt det, hun har lært. Der er en frihed i at have gennemlevet det meste. Intuition og indsigt smelter sammen. Hun ser mønstre, hun forstår cyklusser.',
    oevelse: { title: 'Sleeping Swan (Yin Yoga)', desc: 'Dyb hofteåbner der stimulerer nyrerne. En stilling for integration og ro.' },
    kost: { title: 'Varme supper med tang og sort sesam', desc: 'Tilbage til vandets mad. Valnødder, bønner, varm mad der nærer essensen.' },
    healingLyd: { title: 'Nyrelyd: Chuiii', desc: 'Cirklen sluttes med den samme lyd som begyndte — men nu med hele livets resonans.' },
    refleksioner: ['Hvad er den vigtigste ting du har lært om dig selv?', 'Hvad vil du videregive til de kvinder der kommer efter dig?', 'Hvis du kunne sige én ting til din yngre jeg, hvad ville det være?']
  }
};

// ---- De Fire Uger: Menstrual cycle data ----

var MENSTRUAL_WEEK_DATA = {
  1: { name: 'Uge 1 \u2014 Menstruation', element: 'VAND', dagRange: 'Dag 1\u20137', kvalitet: 'Indadvendt energi',
    bodyText: 'Kroppen renser og fornyer sig. Livmoderen frigiver det gamle slimhinde. Energien er lav, og kroppen beder om hvile. Nyrerne og blæren er aktive — vand-elementet dominerer.',
    feelingsText: 'Følelserne trækker indad. Det er en naturlig tid for refleksion og stilhed. Intuition er stærk, men socialt overskud kan være lavt. Lyt til behovet for at trække dig tilbage.',
    recommendations: ['Hvile og varme', 'Yin yoga med hofteåbnere', 'Varme supper og te', 'Journalskrivning og refleksion'] },
  2: { name: 'Uge 2 \u2014 Opbygning', element: 'TR\u00C6', dagRange: 'Dag 8\u201314', kvalitet: 'Stigende energi',
    bodyText: 'Follikelfasen begynder. En ny æg modnes, østrogen stiger. Energien vokser gradvist — kroppen føler sig stærkere dag for dag. Leveren arbejder aktivt med at processere hormoner.',
    feelingsText: 'Optimisme og kreativitet vokser. Det er en god tid for nye projekter, planlægning og social aktivitet. Selvtilliden stiger, og der er mod til at tage initiativer.',
    recommendations: ['Dynamisk bevægelse', 'Kreative projekter', 'Grønne grøntsager og spirende mad', 'Nye initiativer og planlægning'] },
  3: { name: 'Uge 3 \u2014 \u00C6gløsning', element: 'ILD', dagRange: 'Dag 15\u201321', kvalitet: 'Udadvendt energi',
    bodyText: 'Ægløsning sker, og østrogen er på sit højeste. Kroppen stråler — huden lyser, energien er på toppen. Hjertet og kredsløbet er i flow. Det er kroppens sommer.',
    feelingsText: 'Følelserne er varme og åbne. Social energi er høj, kommunikation flyder. Det er en tid for forbindelse, intimitet og glæde. Pas på rastløshed og overaktivitet.',
    recommendations: ['Intens bevægelse og social aktivitet', 'Rå salater og frisk frugt', 'Forbindelse og samtaler', 'Kreativt udtryk'] },
  4: { name: 'Uge 4 \u2014 Luteal', element: 'JORD', dagRange: 'Dag 22\u201328', kvalitet: 'Faldende energi',
    bodyText: 'Progesteron dominerer. Kroppen forbereder sig på menstruation. Fordøjelsen kan være følsom, kroppen beder om næring og regelmæssighed. Milten og maven er aktive.',
    feelingsText: 'Følelserne kan svinge — bekymring, irritation eller sårbarhed. Det er kroppens måde at sige: sænk tempoet. Det er en tid for at runde af, rydde op og forberede sig.',
    recommendations: ['Rolige aktiviteter og tidlig sengetid', 'Varm, nærende mad', 'Undgå store beslutninger', 'Selvomsorgsritualer'] }
};

var MOON_CYCLE_DATA = {
  1: { name: 'Nymåne', element: 'VAND', kvalitet: 'Indadvendt energi',
    text: 'Nymånen er vandets tid — stille, mørk, reflekterende. En tid for nye intentioner, indre lytning og hvile. Energien er på sit laveste, og det er en gave.' },
  2: { name: 'Tiltagende måne', element: 'TR\u00C6', kvalitet: 'Stigende energi',
    text: 'Månen vokser, og med den din energi. Træets fase — vækst, planlægning, handling. En god tid for at sætte ting i gang og følge dine intentioner.' },
  3: { name: 'Fuldmåne', element: 'ILD', kvalitet: 'Udadvendt energi',
    text: 'Alt er i fuld blomst. Ildens kulminationspunkt — følelser, drømme og energi er på sit højeste. En tid for forbindelse, fejring og kulminationer.' },
  4: { name: 'Aftagende måne', element: 'JORD', kvalitet: 'Faldende energi',
    text: 'Månen mindskes, og vi samler ind. Jordens fase — sortering, eftertanke, taknemmelighed. Slip det der ikke tjener dig, og forbered en ny cyklus.' }
};

// ---- Refleksion: Fasespecifikke spørgsmål ----

var REFLEKSION_DATA = {
  1: ['Hvad føler du dig tryg ved i dit liv lige nu?', 'Hvor i kroppen mærker du stilhed — og hvor mærker du uro?', 'Hvis du kunne give slip på én frygt, hvad ville det være?'],
  2: ['Hvad gør dig nysgerrig i dit liv lige nu?', 'Hvor kunne du tillade dig at lege mere?', 'Hvad ville du udforske, hvis ingen så på?'],
  3: ['Hvad forvandler sig i dit liv lige nu?', 'Hvilken del af dig selv er ved at bryde igennem?', 'Hvad er du vred over — og hvad gemmer sig bag vreden?'],
  4: ['Hvilke drømme lever stadig i dig?', 'Hvor blomstrer du allerede — uden at bemærke det?', 'Hvad ville du gøre, hvis du vidste det var godt nok?'],
  5: ['Hvilke mønstre gentager du fra din mor?', 'Hvad ville du gøre anderledes, hvis du kun havde ansvar for dig selv?', 'Hvornår brændte du sidst for noget uden at brænde ud?'],
  6: ['Hvad har du lært om dig selv de sidste ti år?', 'Hvad er du klar til at slippe?', 'Hvor finder du dit fundament, når alt andet vakler?'],
  7: ['Hvad er du mest taknemlig for?', 'Hvad holder du fast i af vane — og hvad holder du fast i af kærlighed?', 'Hvem er du, når rollerne er væk?'],
  8: ['Hvad kan du give slip på med kærlighed?', 'Hvad er det essentielle i dit liv lige nu?', 'Hvornår føler du dig mest fri?'],
  9: ['Hvad er den vigtigste ting du har lært om dig selv?', 'Hvad vil du videregive?', 'Hvis du kunne sige én ting til din yngre jeg, hvad ville det være?']
};

// ---- Kontrolcyklus: TCM element texts ----

var KONTROL_TEKST = {
  'VAND': { naerer: 'Dit Vand nærer Træ — din dybde og intuition giver vækst og retning til ny energi.', kontrollerer: 'Vand kontrollerer Ild — din ro kan dæmpe overaktivitet og bringe balance til flammerne.', naeret_af: 'Metal nærer dit Vand — klarhed og evnen til at slippe beriger din dybde.', kontrolleret_af: 'Jord kontrollerer dit Vand — omsorgens fundament giver dit flow retning og grænser.' },
  'TR\u00C6': { naerer: 'Dit Træ nærer Ild — din vækst og kreativitet tænder glæde og forbindelse.', kontrollerer: 'Træ kontrollerer Jord — din fremadrettede energi bryder igennem stagnation.', naeret_af: 'Vand nærer dit Træ — dybde og intuition giver din vækst rod og retning.', kontrolleret_af: 'Metal kontrollerer dit Træ — klarhed beskærer overflødige grene og giver form.' },
  'ILD': { naerer: 'Din Ild nærer Jord — din varme og passion skaber fundament og omsorg.', kontrollerer: 'Ild kontrollerer Metal — din varme smelter stivhed og åbner for flow.', naeret_af: 'Træ nærer din Ild — vækst og retning giver dine flammer brændstof.', kontrolleret_af: 'Vand kontrollerer din Ild — dybde og ro forhindrer udbrændthed.' },
  'JORD': { naerer: 'Din Jord nærer Metal — din stabilitet og omsorg skaber grundlag for klarhed.', kontrollerer: 'Jord kontrollerer Vand — dit fundament giver det flydende retning og form.', naeret_af: 'Ild nærer din Jord — passion og varme gør dit fundament levende.', kontrolleret_af: 'Træ kontrollerer din Jord — vækst og forandring forhindrer stagnation.' },
  'METAL': { naerer: 'Dit Metal nærer Vand — din klarhed og evne til at slippe beriger dybden.', kontrollerer: 'Metal kontrollerer Træ — din præcision giver ukontrolleret vækst form.', naeret_af: 'Jord nærer dit Metal — stabilitet og omsorg giver din klarhed varme.', kontrolleret_af: 'Ild kontrollerer dit Metal — varme og forbindelse forhindrer isolation.' }
};

// ---- Forløb: Sæsonbaserede eksterne links ----

var FORLOB_DATA = {
  'Vinter': { title: 'Vinterforl\u00f8bet', subtitle: 'F\u00f8lg \u00e5rets energi sammen med andre kvinder. Yin yoga, vejrtr\u00e6kning, refleksion \u2014 og et f\u00e6llesskab tilpasset vinterens stille energi.', url: 'https://isabelleeita.dk' },
  'For\u00e5r': { title: 'For\u00e5rsforl\u00f8bet', subtitle: 'Ny energi bryder frem. \u00d8velser, kost og f\u00e6llesskab der matcher for\u00e5rets Tr\u00e6-energi og nye begyndelser.', url: 'https://isabelleeita.dk' },
  'Sommer': { title: 'Sommerforl\u00f8bet', subtitle: 'Ildens \u00e5rstid. Bevægelse, forbindelse og glæde \u2014 et forl\u00f8b der fejrer sommerens fulde energi.', url: 'https://isabelleeita.dk' },
  'Sensommer': { title: 'Sensommerforl\u00f8bet', subtitle: 'Jordens tid. N\u00e6ring, omsorg og fordøjelse af sommerens oplevelser \u2014 sammen med andre kvinder.', url: 'https://isabelleeita.dk' },
  'Efter\u00e5r': { title: 'Efter\u00e5rsforl\u00f8bet', subtitle: 'Metallets \u00e5rstid. Slip det overfl\u00f8dige og find det essentielle \u2014 guidet af Isabelle.', url: 'https://isabelleeita.dk' }
};

// ---- Healing Sounds (per element, from LIVSFASE_DETAIL) ----

var HEALING_SOUNDS = {
  'VAND': { lyd: 'Chuiii', organ: 'Nyrer', desc: 'Lad lyden vibrere dybt i lænden. Chuiii beroer nyrerne og nærer din grundlæggende livsenergi.' },
  'TRÆ': { lyd: 'Shhhhh', organ: 'Lever', desc: 'En blid udånding som letter leveren. Shhhhh hjælper med at frigøre ophobede frustrationer.' },
  'ILD': { lyd: 'Haaaa', organ: 'Hjerte', desc: 'Åbn munden og lad Haaaa strømme ud. Lyden køler hjertet og giver indre ro.' },
  'JORD': { lyd: 'Huuuuu', organ: 'Milt', desc: 'Huuuuu masserer milten indefra. Lyden forankrer dig og styrker din evne til at fordøje — både mad og oplevelser.' },
  'METAL': { lyd: 'Sssss', organ: 'Lunger', desc: 'Sssss renser lungerne med en hvislende udånding. Giv slip på det der ikke længere tjener dig.' }
};

// ---- Relation Recommendations (per element) ----

var RELATION_RECOMMENDATIONS = {
  'VAND': {
    forDig: 'Vand-energien inviterer til stilhed og lytning. Giv dig selv lov til at trække dig lidt tilbage — det er ikke afvisning, det er opladning.',
    forAnden: '{navn}s krop kalder på stilhed og ro lige nu. Giv {pron} plads til at trække sig — det er ikke afvisning, men opladning. Vand-energien har brug for hvile.',
    sammen: 'Måske kan I mødes i ro. En gåtur ved vandet, en stille aften. Vand har ikke brug for ord, men for tilstedeværelse.'
  },
  'TRÆ': {
    forDig: 'Træ-energien giver dig drivkraft og retning. Pas på ikke at lade utålmodighed styre. Din vækst behøver ikke andres tempo.',
    forAnden: '{navn} er i Træ-energi — alt i {pron_obj} vil vokse og bevæge sig fremad. Det er ikke utålmodighed, det er biologi. Mød {pron_obj} med bevægelse, ikke modstand.',
    sammen: 'I kan dele visioner og planer. Træ trives med bevægelse — gør noget aktivt sammen, måske en udflugt eller et nyt projekt.'
  },
  'ILD': {
    forDig: 'Ild-energien gør dig varm og nærværende. Nyd forbindelsen, men husk at glæden ikke afhænger af andres bekræftelse.',
    forAnden: '{navn} brænder med Ild-energi lige nu — {pron} er varm, nærværende og søger forbindelse. Mød {pron_obj} der. Det kræver ikke store ord, bare tilstedeværelse.',
    sammen: 'Det er tid til fest, latter og nærvær. Ild elsker samvær — invitér til noget spontant, lad hjertet lede.'
  },
  'JORD': {
    forDig: 'Jord-energien nærer din omsorg. Du mærker måske en trang til at tage vare på andre. Husk også at nære dig selv.',
    forAnden: '{navn} er i Jord-energi — {pron} har brug for tryghed og stabilitet. Mød {pron_obj} med omsorg, og lad {pron_obj} nære dig tilbage. Jord giver mest, når den selv får ro.',
    sammen: 'I kan mødes over mad, samtale og tryghed. Jord finder hvile i det kendte — lav noget hjemme sammen.'
  },
  'METAL': {
    forDig: 'Metal-energien skærper din skelneevne. Du ser klarere hvad der tjener dig. Slip det overflødige med kærlighed, ikke dom.',
    forAnden: '{navn} er i Metal-energi — {pron} ser klarere og sorterer i det overflødige. Det kan føles som afstand, men det er klarhed. Giv {pron_obj} rum til det.',
    sammen: 'I kan mødes i ærlighed og klarhed. Metal tåler sandhed — måske er det tid til en oprigtig samtale om det der betyder noget.'
  }
};

// ---- Share Templates (per relation type) ----

var SHARE_TEMPLATES = {
  'partner': { tone: 'direkte, kærlig', intro: 'Jeg har kigget på noget spændende om vores livscyklusser.' },
  'datter': { tone: 'varm, anerkendende', intro: 'Der er noget, jeg gerne vil dele med dig om livets faser.' },
  'søn': { tone: 'varm, respektfuld', intro: 'Jeg faldt over noget om livsfaser, som jeg tænkte, du måske ville finde interessant.' },
  'mor': { tone: 'respektfuld, reflekterende', intro: 'Mor, jeg har opdaget noget om vores livsfaser, som sætter vores relation i et nyt lys.' },
  'veninde': { tone: 'åben, nysgerrig', intro: 'Jeg fandt noget om livsfaser, som fik mig til at tænke på os.' },
  'anden': { tone: 'neutral, imødekommende', intro: 'Jeg vil gerne dele noget med dig om livsfaser og vores energier.' }
};

// ---- Extended Yin Yoga data (5 elements × full poses) ----

var YIN_YOGA_FULL = {
  'VAND': [
    { pose: 'Butterfly (Baddha Konasana)', desc: '\u00c5bner hofterne og stimulerer nyremeridianen. Sid med fodsåler mod hinanden, fold fremover.', tid: '3\u20135 min', meridian: 'Nyre \u00B7 Bl\u00e6re' },
    { pose: 'Liggende Butterfly (Supta Baddha Konasana)', desc: 'Samme position men liggende p\u00e5 ryggen. \u00c5bner bryst og hofte. Dyb afslapning.', tid: '5\u201310 min', meridian: 'Nyre \u00B7 Hjerte' },
    { pose: 'Caterpillar (Paschimottanasana)', desc: 'Foroverbøjning med strakte ben. Beroer nervesystemet og n\u00e6rer nyrerne.', tid: '3\u20135 min', meridian: 'Bl\u00e6re \u00B7 Nyre' }
  ],
  'TR\u00C6': [
    { pose: 'Dragonfly (Straddle)', desc: 'Bredt spreddede ben med foroverbøjning. \u00c5bner inderlår og lever/galdeblære.', tid: '3\u20135 min', meridian: 'Lever \u00B7 Galdeblære' },
    { pose: 'Sleeping Swan (Pigeon)', desc: 'Dyb hofteåbner med \u00e9t ben bøjet foran. Frigør stagneret energi i hoften.', tid: '3\u20135 min pr side', meridian: 'Galdeblære \u00B7 Lever' },
    { pose: 'Firben (Lizard)', desc: 'Dybt lungeudstræk. Intens hofteåbner der stimulerer levermeridianen.', tid: '3\u20135 min pr side', meridian: 'Lever \u00B7 Milt' }
  ],
  'ILD': [
    { pose: 'Melting Heart (Anahatasana)', desc: '\u00c5bner bryst og hjertemeridian. Armene strakt frem, brystet synker mod gulvet.', tid: '3\u20135 min', meridian: 'Hjerte \u00B7 Tyndtarm' },
    { pose: '\u00d8rnens Vinger (Eagle Arms)', desc: 'Armene krydset i \u00f8rneposition. \u00c5bner skuldrene og rummet mellem skulderbladene.', tid: '2\u20133 min pr side', meridian: 'Hjerte \u00B7 Perikardium' },
    { pose: 'Sphinx (Salamba Bhujangasana)', desc: 'Mild rygbøjning på underarmene. \u00c5bner brystet og stimulerer hjertet.', tid: '3\u20135 min', meridian: 'Hjerte \u00B7 Mave' }
  ],
  'JORD': [
    { pose: 'Barnet (Balasana)', desc: 'Hvileposition med panden mod gulvet. N\u00e6rer milten og giver dyb tryghed.', tid: '3\u20135 min', meridian: 'Milt \u00B7 Mave' },
    { pose: 'Square (Firkantet Pigeon)', desc: 'Begge skinneben parallelle i firkant foran kroppen. Dyb hofteåbner.', tid: '3\u20135 min pr side', meridian: 'Milt \u00B7 Galdeblære' },
    { pose: 'Liggende Drejning (Supine Twist)', desc: 'Liggende p\u00e5 ryggen med knæene til siden. Masserer indre organer.', tid: '3\u20135 min pr side', meridian: 'Mave \u00B7 Milt' }
  ],
  'METAL': [
    { pose: '\u00c5ben Vinge (Open Wing)', desc: 'Liggende p\u00e5 maven med \u00e9n arm strakt ud. \u00c5bner brystkassen og lungerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00B7 Tyktarm' },
    { pose: 'Bananform (Banana Pose)', desc: 'Liggende p\u00e5 ryggen i en bue. Str\u00e6kker hele siden og åbner lungemeridianerne.', tid: '3\u20135 min pr side', meridian: 'Lunger \u00B7 Galdeblære' },
    { pose: 'Fisk (Matsyasana)', desc: 'Rygb\u00f8jning med åbent bryst. Stimulerer lungerne og frigør sorg.', tid: '2\u20134 min', meridian: 'Lunger \u00B7 Hjerte' }
  ]
};

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

// Section divider (removed — spacing handled by CSS)
function sectionDivider() {
  return '';
}

// Scroll-to-top footer
function scrollTopFooter() {
  return '<div class="scroll-top-footer" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">\u2191 Tilbage til toppen</div>';
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
    { label: 'Da jeg var 14', resolve: function(u) { var d = safeParseBirth(u.birthdate); d.setFullYear(d.getFullYear() + 14); return d; } },
    { label: 'Da jeg var 21', resolve: function(u) { var d = safeParseBirth(u.birthdate); d.setFullYear(d.getFullYear() + 21); return d; } },
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
    { label: 'N\u00e5r jeg bliver 50', resolve: function(u) { var d = safeParseBirth(u.birthdate); d.setFullYear(d.getFullYear() + 50); return d; } }
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

// ---- Tidsvinduet data ----

// Dynamiske shortcuts baseret på brugerens fase og alder
function getDynamicShortcutsSelf(user) {
  var shortcuts = [];
  if (!user || !user.birthdate) {
    return [
      { label: 'For et \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 1); return d; } },
      { label: 'Om 6 m\u00e5neder', resolve: function() { var d = new Date(); d.setMonth(d.getMonth() + 6); return d; } }
    ];
  }
  var bd = safeParseBirth(user.birthdate);
  var now = new Date();
  var age = now.getFullYear() - bd.getFullYear();
  var m = now.getMonth() - bd.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < bd.getDate())) age--;

  // Beregn fasestart (kvinders 7-\u00e5rs cyklus)
  var currentPhase = Math.min(Math.floor(age / 7) + 1, 9);
  var phaseStartAge = (currentPhase - 1) * 7;
  var phaseStartDate = new Date(bd.getTime()); phaseStartDate.setFullYear(bd.getFullYear() + phaseStartAge);

  // Knap 1: Da din fase begyndte
  shortcuts.push({ label: 'Da din fase begyndte', resolve: function() { return phaseStartDate; } });

  // Knap 2: Vendepunkt / vigtig alder
  if (currentPhase >= 6) {
    var d35 = new Date(bd.getTime()); d35.setFullYear(bd.getFullYear() + 35);
    shortcuts.push({ label: 'Da du var 35', resolve: function() { return d35; } });
  } else if (currentPhase >= 4) {
    var d21 = new Date(bd.getTime()); d21.setFullYear(bd.getFullYear() + 21);
    shortcuts.push({ label: 'Da du var 21', resolve: function() { return d21; } });
  } else {
    var d1y = new Date(); d1y.setFullYear(d1y.getFullYear() - 1);
    shortcuts.push({ label: 'For et \u00e5r siden', resolve: function() { return d1y; } });
  }

  // Knap 3: N\u00e6ste faseskift
  var nextPhaseAge = currentPhase * 7;
  if (nextPhaseAge <= 63) {
    var nextPhaseDate = new Date(bd.getTime()); nextPhaseDate.setFullYear(bd.getFullYear() + nextPhaseAge);
    shortcuts.push({ label: 'N\u00e6ste faseskift', resolve: function() { return nextPhaseDate; } });
  } else {
    var d6m = new Date(); d6m.setMonth(d6m.getMonth() + 6);
    shortcuts.push({ label: 'Om 6 m\u00e5neder', resolve: function() { return d6m; } });
  }

  // Knap 4: Sæsonbetonet
  var month = now.getMonth() + 1;
  if (month >= 9 || month <= 2) {
    var summerYear = month >= 9 ? now.getFullYear() + 1 : now.getFullYear();
    var summer = new Date(summerYear, 5, 21);
    shortcuts.push({ label: 'Til sommer', resolve: function() { return summer; } });
  } else {
    var winterYear = now.getFullYear();
    var winter = new Date(winterYear, 11, 21);
    shortcuts.push({ label: 'Til vinter', resolve: function() { return winter; } });
  }

  return shortcuts;
}

function getDynamicShortcutsRelation(user, selectedRelations) {
  var shortcuts = [];
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var selRels = [];
  for (var i = 0; i < selectedRelations.length; i++) {
    if (relations[selectedRelations[i]]) selRels.push(relations[selectedRelations[i]]);
  }
  var firstRel = selRels.length > 0 ? selRels[0] : null;
  var now = new Date();

  if (firstRel && firstRel.birthdate) {
    var rBd = safeParseBirth(firstRel.birthdate);
    var rAge = now.getFullYear() - rBd.getFullYear();
    var rm = now.getMonth() - rBd.getMonth();
    if (rm < 0 || (rm === 0 && now.getDate() < rBd.getDate())) rAge--;
    var rGender = firstRel.gender || 'kvinde';
    var rCycleLen = rGender === 'mand' ? 8 : 7;
    var rPhase = Math.min(Math.floor(rAge / rCycleLen) + 1, 9);
    var rPhaseStartAge = (rPhase - 1) * rCycleLen;

    // Knap 1: Da fasen begyndte for relationen
    var rPhaseStart = new Date(rBd.getTime()); rPhaseStart.setFullYear(rBd.getFullYear() + rPhaseStartAge);
    var rName = firstRel.name || 'den anden';
    shortcuts.push({ label: rName.split(' ')[0] + 's fase begyndte', resolve: function() { return rPhaseStart; } });

    // Knap 2: N\u00e6ste faseskift for relationen
    var rNextAge = rPhase * rCycleLen;
    var rNextDate = new Date(rBd.getTime()); rNextDate.setFullYear(rBd.getFullYear() + rNextAge);
    shortcuts.push({ label: rName.split(' ')[0] + 's n\u00e6ste fase', resolve: function() { return rNextDate; } });
  } else {
    shortcuts.push({ label: 'For 5 \u00e5r siden', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() - 5); return d; } });
    shortcuts.push({ label: 'Om et \u00e5r', resolve: function() { var d = new Date(); d.setFullYear(d.getFullYear() + 1); return d; } });
  }

  // Knap 3: N\u00e6ste jul
  var jy = now.getFullYear();
  var jul = new Date(jy, 11, 24);
  if (jul <= now) jul.setFullYear(jy + 1);
  shortcuts.push({ label: 'N\u00e6ste jul', resolve: function() { return jul; } });

  // Knap 4: Om 5 \u00e5r
  var om5 = new Date(); om5.setFullYear(om5.getFullYear() + 5);
  shortcuts.push({ label: 'Om 5 \u00e5r', resolve: function() { return om5; } });

  return shortcuts;
}

// Fallbacks (bruges af applyDinEnergiShortcut/applyJeresEnergiShortcut)
var TIDSVINDUE_SHORTCUTS_SELV = [];
var TIDSVINDUE_SHORTCUTS_RELATION = [];

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
  showDetail(ring);
}

function renderConcentricCircles(container, data) {
  var lifePhase = data.lifePhase;
  var season = data.season;
  var weekday = data.weekday;
  var organ = data.organ;
  var monthCycle = data.monthCycle;

  // Fixed ring colors (dark blue gradient)
  var rc = [RING_COLORS[0], RING_COLORS[1], RING_COLORS[2], RING_COLORS[3], RING_COLORS[4]];
  var centerBlue = RING_COLORS.center;

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
  svg += '<path id="curve0" d="M 40 120 A 210 90 0 0 1 360 120"/>';
  svg += '<path id="curve1" d="M 40 200 A 180 120 0 0 1 360 200"/>';
  svg += '<path id="curve2" d="M 75 231 A 140 93 0 0 1 325 231"/>';
  svg += '<path id="curve3" d="M 105 260 A 105 70 0 0 1 295 260"/>';
  svg += '<path id="curve4" d="M 135 284 A 75 50 0 0 1 265 284"/>';
  svg += '</defs>';

  // Ring 0 - LIVSFASE (yderst) — mørkeblå, hvid tekst
  svg += '<ellipse cx="200" cy="199" rx="220" ry="147" fill="' + rc[0] + '"/>';
  svg += '<text x="200" y="74" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">LIVSFASE</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve0" startOffset="50%">' + livsfaseText + '</textPath></text>';

  // Ring 1 - ÅRSTID — hvid tekst
  svg += '<ellipse cx="200" cy="220" rx="180" ry="120" fill="' + rc[1] + '"/>';
  svg += '<text x="200" y="120" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">\u00C5RSTID</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve1" startOffset="50%">' + aarstidText + '</textPath></text>';

  // Ring 2 - MÅNED — hvid tekst
  svg += '<ellipse cx="200" cy="241" rx="140" ry="93" fill="' + rc[2] + '"/>';
  svg += '<text x="200" y="166" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#FFFFFF" letter-spacing="1">M\u00C5NED</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#FFFFFF" text-anchor="middle">';
  svg += '<textPath href="#curve2" startOffset="50%">' + maanedText + '</textPath></text>';

  // Ring 3 - UGEDAG — mørkeblå tekst (lysere ring)
  svg += '<ellipse cx="200" cy="260" rx="105" ry="70" fill="' + rc[3] + '"/>';
  svg += '<text x="200" y="207" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#244382" letter-spacing="1">UGEDAG</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#244382" text-anchor="middle">';
  svg += '<textPath href="#curve3" startOffset="50%">' + ugedagText + '</textPath></text>';

  // Ring 4 - ORGANUR (inderst) — mørkeblå tekst (lysere ring)
  svg += '<ellipse cx="200" cy="276" rx="75" ry="50" fill="' + rc[4] + '"/>';
  svg += '<text x="200" y="245" text-anchor="middle" font-family="Times New Roman, serif" font-size="11" font-weight="bold" fill="#244382" letter-spacing="1">ORGANUR</text>';
  svg += '<text font-family="Times New Roman, serif" font-size="11" fill="#244382" text-anchor="middle">';
  svg += '<textPath href="#curve4" startOffset="50%">' + organurText + '</textPath></text>';

  // Centrum - DIT LIV
  svg += '<ellipse cx="200" cy="294" rx="38" ry="25" fill="' + centerBlue + '"/>';
  svg += '<text x="200" y="289" text-anchor="middle" font-family="Times New Roman, serif" font-size="13" font-weight="bold" fill="#FFFFFF">DIT</text>';
  svg += '<text x="200" y="304" text-anchor="middle" font-family="Times New Roman, serif" font-size="13" font-weight="bold" fill="#FFFFFF">LIV</text>';

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

  // Render 6 sections
  renderDynamiskTekst();       // 2. Lige nu — resonans
  renderIdagVinduer();          // 3. Mine Vinduer — lavendel-sektion
  renderHvadKanDu();            // 4. Hvad kan du gøre lige nu
  renderIdagCheckin();           // 5. Mærk efter — check-in
  renderHovedkort();             // 6. Dine fem verdener
}

function renderStatusBubbles() {
  var el = document.getElementById('idag-status-bubbles');
  if (!el || !window._idagData) return;
  var d = window._idagData;
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) counts[elements[i]] = (counts[elements[i]] || 0) + 1;

  // Build element summary (e.g. "4 Vand · 1 Jord")
  var parts = [];
  var ks = Object.keys(counts);
  // Sort by count descending
  ks.sort(function(a, b) { return counts[b] - counts[a]; });
  for (var j = 0; j < ks.length; j++) {
    parts.push(counts[ks[j]] + ' ' + ELEMENT_LABELS[ks[j]]);
  }
  var cyklusserText = parts.join(' \u00B7 ');

  // Date
  var now = new Date();
  var months = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
  var dateText = now.getDate() + '. ' + months[now.getMonth()] + ' ' + now.getFullYear();

  // Body
  var kropText = d.organ.organ + ' \u00B7 ' + ELEMENT_LABELS[d.organ.element];

  var html = '<div class="status-bubbles">';
  html += '<div class="status-bubble">';
  html += '<div class="status-bubble__label">DINE CYKLUSSER</div>';
  html += '<div class="status-bubble__value">' + cyklusserText + '</div>';
  html += '</div>';
  html += '<div class="status-bubble">';
  html += '<div class="status-bubble__label">LIGE NU</div>';
  html += '<div class="status-bubble__value">' + dateText + '</div>';
  html += '</div>';
  html += '<div class="status-bubble">';
  html += '<div class="status-bubble__label">DIN KROP</div>';
  html += '<div class="status-bubble__value">' + kropText + '</div>';
  html += '</div>';
  html += '</div>';
  el.innerHTML = html;
}

function renderVennIndsigt() {
  var el = document.getElementById('idag-venn-indsigt');
  if (!el || !window._idagData) return;
  var d = window._idagData;

  var phaseLabel = ELEMENT_LABELS[d.lifePhase.element] + ' \u00B7 ' + d.lifePhase.name;
  var seasonLabel = d.season.season + ' \u00B7 ' + ELEMENT_LABELS[d.season.element];

  var serifFont = "'Cormorant Garamond','Times New Roman',Georgia,serif";
  var svg = '<svg width="280" height="240" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg">';

  // Tre overlappende cirkler
  svg += '<circle cx="140" cy="80" r="72" fill="rgba(118,144,193,0.08)" stroke="rgba(118,144,193,0.2)" stroke-width="1"/>';
  svg += '<circle cx="85" cy="168" r="72" fill="rgba(118,144,193,0.06)" stroke="rgba(118,144,193,0.18)" stroke-width="1"/>';
  svg += '<circle cx="195" cy="168" r="72" fill="rgba(118,144,193,0.06)" stroke="rgba(118,144,193,0.18)" stroke-width="1"/>';

  // Zone labels
  svg += '<text x="140" y="50" font-family="' + serifFont + '" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">LIVSFASE</text>';
  svg += '<text x="140" y="66" font-family="' + serifFont + '" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">' + phaseLabel + '</text>';

  svg += '<text x="60" y="190" font-family="' + serifFont + '" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">\u00C5RSTID</text>';
  svg += '<text x="60" y="206" font-family="' + serifFont + '" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">' + seasonLabel + '</text>';

  svg += '<text x="220" y="190" font-family="' + serifFont + '" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">RELATIONER</text>';
  svg += '<text x="220" y="206" font-family="' + serifFont + '" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">Dine n\u00e6rmeste</text>';

  // Overlap labels
  svg += '<text x="100" y="112" font-family="' + serifFont + '" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">forst\u00e6rkning</text>';
  svg += '<text x="180" y="112" font-family="' + serifFont + '" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">forskydning</text>';
  svg += '<text x="140" y="192" font-family="' + serifFont + '" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">timing</text>';

  // Center label
  svg += '<text x="140" y="132" font-family="' + serifFont + '" font-size="13" fill="#5A74A5" font-weight="600" text-anchor="middle">DIN</text>';
  svg += '<text x="140" y="148" font-family="' + serifFont + '" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1">INDSIGT</text>';

  svg += '</svg>';

  el.innerHTML = '<div class="idag__venn-indsigt">' + svg + '</div>';
}

function renderIdagCheckin() {
  var el = document.getElementById('idag-checkin');
  if (!el) return;

  var today = getLocalDateStr(new Date());
  var checkins = getCheckins();
  var done = checkins.some(function(c) { return c.date && c.date.substring(0, 10) === today; });

  var headerEl = document.getElementById('idag-checkin-header');
  if (headerEl) {
    headerEl.innerHTML = '<h3 class="idag__section-title">M\u00e6rk efter</h3>' +
      '<p class="idag__section-subtitle">Dine cyklusser sender en invitation lige nu. M\u00e6rk efter i kroppen og se om energien stemmer \u2014 m\u00e5ske kender du allerede svaret, f\u00f8r du t\u00e6nker det.</p>';
  }

  var html = '';
  if (done) {
    html += '<div class="idag__gradient-box" onclick="App.loadScreen(\'min-udvikling\')" style="opacity:0.7; cursor:pointer;">';
    html += '<p class="idag__gradient-label">DAGENS CHECK-IN</p>';
    html += '<p class="idag__gradient-text">\u2713 Tjekket ind i dag</p>';
    html += '<p class="idag__gradient-sub">Se din udvikling</p>';
    html += '</div>';
  } else {
    html += '<div class="idag__gradient-box">';
    html += '<p class="idag__gradient-label">DAGENS CHECK-IN</p>';
    html += '<p class="idag__gradient-text">Hvordan f\u00f8les din energi lige nu?</p>';
    html += '<p class="idag__gradient-sub">Stille \u00b7 Voksende \u00b7 Intens \u00b7 Rodf\u00e6stet \u00b7 Klar</p>';
    html += '</div>';

    // Mood pills
    var moods = [
      { emoji: '\uD83C\uDF0A', label: 'Stille', element: 'VAND' },
      { emoji: '\uD83C\uDF31', label: 'Voksende', element: 'TRAE' },
      { emoji: '\uD83D\uDD25', label: 'Intens', element: 'ILD' },
      { emoji: '\uD83E\uDEA8', label: 'Rodf\u00e6stet', element: 'JORD' },
      { emoji: '\uD83D\uDCA8', label: 'Klar', element: 'METAL' }
    ];
    html += '<div class="idag__mood-pills">';
    for (var i = 0; i < moods.length; i++) {
      var m = moods[i];
      html += '<button class="idag__mood-pill" onclick="quickCheckin(\'' + m.element + '\', \'' + m.label + '\')">' + m.emoji + ' ' + m.label + '</button>';
    }
    html += '</div>';
  }
  el.innerHTML = html;
}

function quickCheckin(element, moodLabel) {
  var entry = {
    date: getLocalDateStr(new Date()),
    mood: moodLabel,
    tags: [],
    note: '',
    element: element
  };
  saveCheckin(entry);
  renderIdagCheckin();
}
window.quickCheckin = quickCheckin;

// ---- Home Screen Sections (ny navigation) ----

function renderDynamiskTekst() {
  var el = document.getElementById('idag-dynamisk');
  var headerEl = document.getElementById('idag-dynamisk-header');
  if (!el || !window._activeElements || !window._idagData) return;

  var dynamisk = generateDynamiskTekst(window._idagData, window._activeElements);
  var cycleAnalysis = analyzeCycleInteractions(window._idagData);
  var data = window._idagData;

  // Header OUTSIDE box — mockup: kursiv overskrift + intro
  if (headerEl) {
    headerEl.innerHTML = '<h3 class="idag__section-title">Lige nu</h3>' +
      '<p class="idag__section-subtitle">Livsfasen, \u00e5rstiden, m\u00e5neden, ugen og dit organur \u2014 disse rytmer danner det krydsfelt du lever i. Her kan du se hvad der er aktivt for dig i dag.</p>';
  }

  // Gradient-boks (mockup: linear-gradient 135deg #5A74A5 → #7690C1)
  var html = '<div class="idag__gradient-box" onclick="toggleClimateExpand()" role="button" tabindex="0">';
  html += '<p class="idag__gradient-label">' + cycleAnalysis.climate.label.toUpperCase() + '</p>';
  html += '<p class="idag__gradient-text">' + dynamisk.text + '</p>';
  html += '<p class="idag__gradient-sub">' + dynamisk.tidsdynamik + '</p>';

  // Udvidet visning (skjult som standard)
  html += '<div id="idag-climate-expand" class="idag__climate-expand idag__climate-expand--gradient" style="display:none">';
  html += '<p class="idag__climate-detail idag__climate-detail--white">LIVSFASE: Fase ' + (data.lifePhase.phaseNumber || '') + ' \u00B7 ' + (data.lifePhase.name || '') + ' \u00B7 ' + data.lifePhase.element + '</p>';
  html += '<p class="idag__climate-detail idag__climate-detail--white">\u00c5RSTID: ' + data.season.name + ' \u00B7 ' + data.season.element + '</p>';
  if (data.monthCycle && data.monthCycle.data) {
    var mcLabel = data.monthCycle.type === 'menstrual' ? 'M\u00c5NEDSCYKLUS' : 'M\u00c5NED';
    var mcName = data.monthCycle.data.phaseName || data.monthCycle.data.name || '';
    html += '<p class="idag__climate-detail idag__climate-detail--white">' + mcLabel + ': ' + mcName + ' \u00B7 ' + data.monthCycle.data.element + '</p>';
  }
  html += '<p class="idag__climate-detail idag__climate-detail--white">UGEDAG: ' + data.weekday.name + ' \u00B7 ' + data.weekday.element + '</p>';
  html += '<p class="idag__climate-detail idag__climate-detail--white">ORGANUR: ' + (data.organ.organ || '') + ' \u00B7 ' + data.organ.element + '</p>';
  html += '</div>';
  html += '</div>';

  // Link under gradient-boks (mockup: "Se den mest detaljerede analyse →")
  html += '<a class="idag__forside-link" onclick="App.loadScreen(\'samlede-indsigt\')">Se den mest detaljerede analyse \u2192</a>';
  el.innerHTML = html;
}

function toggleClimateExpand() {
  var expand = document.getElementById('idag-climate-expand');
  var hint = document.querySelector('.idag__climate-hint');
  if (!expand) return;
  if (expand.style.display === 'none') {
    expand.style.display = 'block';
    if (hint) hint.textContent = 'Tryk for at skjule \u2191';
  } else {
    expand.style.display = 'none';
    if (hint) hint.textContent = 'Tryk for at se hvorfor \u2193';
  }
}
window.toggleClimateExpand = toggleClimateExpand;

function renderIdagVinduer() {
  var el = document.getElementById('idag-vinduer');
  if (!el) return;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var activePhase = 9;
  if (user.birthdate) {
    var age = calculateAge(user.birthdate);
    var lp = calculateLifePhase(age);
    activePhase = lp.phase || 9;
  }

  var sf = "'Cormorant Garamond','Times New Roman',Georgia,serif";
  var html = '<div class="idag__vinduer-zone">';

  // ---- TIDSVINDUET ----
  html += '<div class="idag__vinduer-label">TIDSVINDUET</div>';

  // Tidsbue SVG (kompakt ~280x130)
  var arcPos = [
    {cx:22,cy:68,r:11}, {cx:50,cy:48,r:11}, {cx:80,cy:34,r:11},
    {cx:112,cy:26,r:11}, {cx:144,cy:26,r:11}, {cx:174,cy:34,r:11},
    {cx:202,cy:48,r:11}, {cx:228,cy:68,r:11}, {cx:244,cy:90,r:13}
  ];
  html += '<div class="idag__vinduer-fig">';
  html += '<svg width="280" height="130" xmlns="http://www.w3.org/2000/svg">';
  for (var i = 0; i < arcPos.length; i++) {
    var p = arcPos[i];
    var isActive = (i + 1) === activePhase;
    if (isActive) {
      html += '<circle cx="' + p.cx + '" cy="' + p.cy + '" r="' + p.r + '" fill="rgba(107,95,123,0.15)" stroke="#6B5F7B" stroke-width="1.5"/>';
    } else {
      html += '<circle cx="' + p.cx + '" cy="' + p.cy + '" r="' + p.r + '" fill="rgba(139,125,155,' + (0.07 + i*0.01).toFixed(2) + ')" stroke="rgba(139,125,155,' + (0.18 + i*0.02).toFixed(2) + ')" stroke-width="1"/>';
    }
    html += '<text x="' + p.cx + '" y="' + (p.cy + 4) + '" font-family="' + sf + '" font-size="9" fill="' + (isActive ? '#6B5F7B' : '#8B7D9B') + '"' + (isActive ? ' font-weight="600"' : '') + ' text-anchor="middle">' + (i+1) + '</text>';
  }
  // Tidslinje
  html += '<line x1="30" y1="112" x2="230" y2="112" stroke="rgba(139,125,155,0.2)" stroke-width="1"/>';
  html += '<circle cx="65" cy="112" r="3" fill="rgba(139,125,155,0.2)"/>';
  html += '<circle cx="130" cy="112" r="4" fill="#6B5F7B"/>';
  html += '<circle cx="195" cy="112" r="3" fill="rgba(139,125,155,0.2)" stroke="rgba(139,125,155,0.3)" stroke-width="1" stroke-dasharray="2,2"/>';
  html += '<text x="65" y="126" font-family="' + sf + '" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">fortid</text>';
  html += '<text x="130" y="126" font-family="' + sf + '" font-size="8" fill="#6B5F7B" font-weight="600" text-anchor="middle">nu</text>';
  html += '<text x="195" y="126" font-family="' + sf + '" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">fremtid</text>';
  html += '<path d="M 35 112 L 27 109 M 35 112 L 27 115" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  html += '<path d="M 225 112 L 233 109 M 225 112 L 233 115" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  html += '</svg></div>';

  html += '<h3 class="idag__vinduer-t2">Rejse i tid \u2014 alene eller med nogen</h3>';
  html += '<p class="idag__vinduer-intr">V\u00e6lg en dato der betyder noget \u2014 og se hvilke cyklusser og elementer der var aktive. Eller kig fremad.</p>';

  // Lotus dots
  html += '<div class="idag__vinduer-dots">\u00B7 \u00B7 \u00B7</div>';

  // ---- RELATIONSVINDUET ----
  html += '<div class="idag__vinduer-label">RELATIONSVINDUET</div>';

  // Fire-cirkel SVG (kompakt ~240x240)
  html += '<div class="idag__vinduer-fig">';
  html += '<svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">';
  html += '<ellipse cx="120" cy="42" rx="40" ry="60" fill="rgba(139,125,155,0.06)" stroke="rgba(139,125,155,0.15)" stroke-width="1" transform="rotate(0,120,120)"/>';
  html += '<ellipse cx="120" cy="42" rx="40" ry="60" fill="rgba(139,125,155,0.05)" stroke="rgba(139,125,155,0.13)" stroke-width="1" transform="rotate(90,120,120)"/>';
  html += '<ellipse cx="120" cy="42" rx="40" ry="60" fill="rgba(139,125,155,0.06)" stroke="rgba(139,125,155,0.15)" stroke-width="1" transform="rotate(180,120,120)"/>';
  html += '<ellipse cx="120" cy="42" rx="40" ry="60" fill="rgba(139,125,155,0.05)" stroke="rgba(139,125,155,0.13)" stroke-width="1" transform="rotate(270,120,120)"/>';
  html += '<circle cx="120" cy="120" r="32" fill="rgba(107,95,123,0.1)" stroke="rgba(139,125,155,0.25)" stroke-width="1"/>';
  html += '<text x="120" y="117" font-family="' + sf + '" font-size="11" fill="#6B5F7B" font-weight="600" text-anchor="middle">DIG</text>';
  html += '<text x="120" y="131" font-family="' + sf + '" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">i alle b\u00e5nd</text>';
  html += '<text x="120" y="16" font-family="' + sf + '" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1">PARTNER</text>';
  html += '<text x="230" y="118" font-family="' + sf + '" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1">B\u00d8RN</text>';
  html += '<text x="120" y="232" font-family="' + sf + '" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1">FOR\u00c6LDRE</text>';
  html += '<text x="12" y="118" font-family="' + sf + '" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1">VENNER</text>';
  html += '</svg></div>';

  html += '<h3 class="idag__vinduer-t2">Se med nogen</h3>';
  html += '<p class="idag__vinduer-intr">V\u00e6lg en person fra dit liv \u2014 og se hvordan jeres cyklusser og livsfaser m\u00f8des.</p>';

  // Gradient-boks
  html += '<div class="idag__vinduer-grd">';
  html += '<div class="idag__vinduer-grd-label">DIN TIDSMOTOR</div>';
  html += '<div class="idag__vinduer-grd-text">Rejse i tid. Se med nogen. Forst\u00e5 hvad der skete \u2014 eller forbered det der kommer.</div>';
  html += '</div>';

  // Link
  html += '<a class="idag__vinduer-link" onclick="App.loadScreen(\'mine-vinduer\')">\u00c5bn Mine Vinduer \u2192</a>';

  html += '</div>'; // close zone
  el.innerHTML = html;
}

function renderIdagTidsvinduetLink_OLD() {
  var el = document.getElementById('idag-vinduer');
  if (!el) return;

  var html = '';

  // Overskrift: Livets Vinduer
  html += '<h1 class="rejse__t1" style="color:#6B5F7B">Livets Vinduer</h1>';
  html += '<p class="rejse__intr">Fem slags tid l\u00f8ber gennem dig p\u00e5 \u00e9n gang, og flere relationer m\u00f8des i dig samtidigt. Her \u00e5bner du de vinduer der viser hvad der sker \u2014 i tiden og mellem mennesker.</p>';

  // ============================================
  // TIDSVINDUET \u2014 lavendel zone
  // ============================================
  html += '<div class="idag__window-zone">';
  html += '<div class="idag__window-label">TIDSVINDUET</div>';

  // Billede: Ni livsfaser i bue (transparent, symmetrisk)
  html += '<div class="idag__window-fig">';
  html += '<img src="assets/images/bue_forside_livsfaser.png" alt="De 9 livsfaser i bue" class="idag__window-img idag__window-img--bue">';
  html += '</div>';
  // Tidslinje under buen (fase 5 centreret over "nu")
  var sf = "'Cormorant Garamond','Times New Roman',Georgia,serif";
  html += '<div class="idag__window-fig" style="margin-top:-8px">';
  html += '<svg width="310" height="36" xmlns="http://www.w3.org/2000/svg">';
  html += '<line x1="40" y1="14" x2="270" y2="14" stroke="rgba(139,125,155,0.2)" stroke-width="1"/>';
  html += '<circle cx="80" cy="14" r="4" fill="rgba(139,125,155,0.25)"/>';
  html += '<circle cx="155" cy="14" r="5" fill="#6B5F7B"/>';
  html += '<circle cx="230" cy="14" r="4" fill="rgba(139,125,155,0.2)" stroke="rgba(139,125,155,0.3)" stroke-width="1" stroke-dasharray="2,2"/>';
  html += '<text x="80" y="32" font-family="' + sf + '" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">fortid</text>';
  html += '<text x="155" y="32" font-family="' + sf + '" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle">nu</text>';
  html += '<text x="230" y="32" font-family="' + sf + '" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">fremtid</text>';
  html += '<path d="M 45 14 L 35 10 M 45 14 L 35 18" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  html += '<path d="M 265 14 L 275 10 M 265 14 L 275 18" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  html += '</svg>';
  html += '</div>';

  // Overskrift + undertekst
  html += '<h3 class="idag__window-t2">Rejser i tid</h3>';
  html += '<p class="idag__window-intr">V\u00e6lg en dato der betyder noget for dig \u2014 og se hvilke cyklusser og elementer der var aktive. Eller kig fremad og forbered dig p\u00e5 det der kommer.</p>';

  // Gradient-boks (lavendel)
  html += '<div class="idag__window-grd">';
  html += '<div class="idag__window-grd-label">HVAD SKETE DER DENGANG?</div>';
  html += '<div class="idag__window-grd-text">M\u00e5ske den dag noget \u00e6ndrede sig. En samtale der ramte. En periode du t\u00e6nker tilbage p\u00e5.</div>';
  html += '<div class="idag__window-grd-sub">Motoren viser dine cyklusser og elementer \u2014 dengang eller i fremtiden.</div>';
  html += '</div>';

  // Link
  html += '<a class="idag__window-link" onclick="App.loadScreen(\'din-energi\')">\u00c5bn Tidsvinduet \u2192</a>';
  html += '</div>';

  // Lavendel dots
  html += '<div class="idag__dots-lav">\u00B7 \u00B7 \u00B7</div>';

  // ============================================
  // RELATIONSVINDUET \u2014 lavendel zone
  // ============================================
  html += '<div class="idag__window-zone">';
  html += '<div class="idag__window-label">RELATIONSVINDUET</div>';

  // Billede: 4-cirkel Venn-figur
  html += '<div class="idag__window-fig">';
  html += '<img src="assets/images/relationer_forside.png" alt="Relationsvinduet: Partner, Venner, B\u00f8rn, For\u00e6ldre \u2014 DIG i centrum" class="idag__window-img">';
  html += '</div>';

  // Overskrift + undertekst
  html += '<h3 class="idag__window-t2">At opleve sammen</h3>';
  html += '<p class="idag__window-intr">V\u00e6lg en person fra dit liv \u2014 og se hvordan jeres cyklusser, elementer og livsfaser m\u00f8des. Forst\u00e6rkning, forskydning, friktion. Og hvad det f\u00f8les som.</p>';

  // Gradient-boks (lavendel)
  html += '<div class="idag__window-grd">';
  html += '<div class="idag__window-grd-label">HVEM VIL DU SE MED?</div>';
  html += '<div class="idag__window-grd-text">Partner, barn, mor, veninde \u2014 v\u00e6lg en relation, og motoren viser hvad der sker, n\u00e5r jeres cyklusser m\u00f8des.</div>';
  html += '<div class="idag__window-grd-sub">Du kan ogs\u00e5 rejse i tid sammen \u2014 se hvordan I m\u00f8dte hinanden dengang, eller hvad der venter forude.</div>';
  html += '</div>';

  // Link
  html += '<a class="idag__window-link" onclick="App.loadScreen(\'mine-relationer\')">\u00c5bn Relationsvinduet \u2192</a>';
  html += '</div>';

  el.innerHTML = html;
}


function renderHvadKanDu() {
  var el = document.getElementById('idag-hvadkandu');
  if (!el || !window._activeElements || !window._idagData) return;

  var insight = generateInsight(window._activeElements);
  var dominantEl = insight.dominantElement;
  var elLabel = ELEMENT_LABELS[dominantEl];

  // Get data from existing constants
  var yogaPose = YIN_YOGA_FULL[dominantEl] ? YIN_YOGA_FULL[dominantEl][0] : null;
  var healingSound = HEALING_SOUNDS[dominantEl];
  var foodItem = INSIGHT_FOOD[dominantEl] ? INSIGHT_FOOD[dominantEl][0] : null;

  var html = '<h3 class="idag__section-title">Hvad kan du g\u00f8re lige nu?</h3>';
  html += '<p class="idag__section-subtitle">Dine elementer viser tre veje ind. Alle er tilpasset det du m\u00f8der i dag \u2014 v\u00e6lg den der kalder p\u00e5 dig, eller lad v\u00e6re.</p>';

  // Card 1: Krop (yoga)
  if (yogaPose) {
    html += '<div class="idag__praksis-kort" onclick="navigateToYogaWithElement(\'' + dominantEl + '\')">';
    html += '<div class="idag__praksis-tag">KROP \u00b7 ' + elLabel.toUpperCase() + '-ELEMENT</div>';
    html += '<h3 class="idag__praksis-titel">' + yogaPose.pose.split('(')[0].trim() + '</h3>';
    html += '<p class="idag__praksis-tekst">' + yogaPose.desc.split('.')[0] + '. ' + yogaPose.tid + '.</p>';
    html += '<div class="idag__praksis-pil">Pr\u00f8v den \u2192</div>';
    html += '</div>';
  }

  // Card 2: Åndedræt (healing sound)
  if (healingSound) {
    html += '<div class="idag__praksis-kort" onclick="App.loadScreen(\'samlede-indsigt\')">';
    html += '<div class="idag__praksis-tag">\u00c5NDEDR\u00c6T \u00b7 ' + elLabel.toUpperCase() + '</div>';
    html += '<h3 class="idag__praksis-titel">Healinglyd: ' + healingSound.lyd + '</h3>';
    html += '<p class="idag__praksis-tekst">' + healingSound.desc + '</p>';
    html += '<div class="idag__praksis-pil">Pr\u00f8v den \u2192</div>';
    html += '</div>';
  }

  // Card 3: Næring (food)
  if (foodItem) {
    html += '<div class="idag__praksis-kort" onclick="App.loadScreen(\'samlede-indsigt\')">';
    html += '<div class="idag__praksis-tag">N\u00c6RING \u00b7 ' + elLabel.toUpperCase() + '</div>';
    html += '<h3 class="idag__praksis-titel">' + foodItem.item + '</h3>';
    html += '<p class="idag__praksis-tekst">' + foodItem.desc + '</p>';
    html += '<div class="idag__praksis-pil">Se opskrift \u2192</div>';
    html += '</div>';
  }

  el.innerHTML = html;
}

function renderKontekstuelleForslag() {
  var el = document.getElementById('idag-forslag');
  if (!el || !window._activeElements || !window._idagData) return;

  var insight = generateInsight(window._activeElements);
  var data = window._idagData;
  var primaryEl = insight.dominantElement;

  var elLabel = ELEMENT_LABELS[primaryEl];
  var html = '<h3 class="idag__section-title">Forslag til dig</h3>';
  html += '<p class="idag__section-subtitle">Udvalgt med afs\u00e6t i dine cyklusser og det du har brugt f\u00f8r. Ignor\u00e9r det der ikke kalder \u2014 det er ogs\u00e5 en slags klogskab.</p>';

  // Kort 1: Øvelse baseret på sæsonens element (nav-kort / blå)
  var yogaPoses = INSIGHT_YOGA[primaryEl];
  if (yogaPoses && yogaPoses.length > 0) {
    var pose = yogaPoses[0];
    html += '<div class="idag__nav-kort" onclick="navigateToYogaWithElement(\'' + primaryEl + '\')">';
    html += '<div class="idag__nav-tag">S\u00c6SONENS ELEMENT \u00b7 ' + elLabel.toUpperCase() + '</div>';
    html += '<h3 class="idag__nav-titel">' + pose.pose.split('(')[0].trim() + '</h3>';
    html += '<p class="idag__nav-tekst">' + pose.desc + '</p>';
    html += '<div class="idag__nav-pil">Se \u00f8velsen \u2192</div>';
    html += '</div>';
  }

  // Kort 2: Kost baseret på årstid + element (nav-kort / blå)
  var foodItems = INSIGHT_FOOD[primaryEl];
  if (foodItems && foodItems.length > 0) {
    var food = foodItems[0];
    html += '<div class="idag__nav-kort" onclick="App.loadScreen(\'samlede-indsigt\')">';
    html += '<div class="idag__nav-tag">' + data.season.season.toUpperCase() + 'KOST \u00b7 ' + elLabel.toUpperCase() + '</div>';
    html += '<h3 class="idag__nav-titel">' + food.item + '</h3>';
    html += '<p class="idag__nav-tekst">' + food.desc + '</p>';
    html += '<div class="idag__nav-pil">Se opskrift \u2192</div>';
    html += '</div>';
  }

  // Kort 3: Fællesskab (lilla)
  var hjData = HJULPET_DATA[primaryEl] || HJULPET_DATA['VAND'];
  html += '<div class="idag__lilla-kort" onclick="App.loadScreen(\'hvad-har-hjulpet\')">';
  html += '<div class="idag__lilla-tag">F\u00c6LLESSKAB</div>';
  html += '<h3 class="idag__lilla-titel">Hvad andre i Fase ' + data.lifePhase.phase + ' g\u00f8r</h3>';
  html += '<p class="idag__lilla-tekst">De fleste i din livsfase v\u00e6lger Yin Yoga og vejrtr\u00e6knings\u00f8velser. ' + hjData.yoga.pct + '% foretr\u00e6kker \u00f8velser om morgenen.</p>';
  html += '<div class="idag__lilla-pil">Se mere \u2192</div>';
  html += '</div>';

  // Kort 4: Relationer (lilla)
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  html += '<div class="idag__lilla-kort" onclick="App.loadScreen(\'' + (relations.length > 0 ? 'mine-vinduer' : 'relationer') + '\')">';
  html += '<div class="idag__lilla-tag">RELATIONER</div>';
  html += '<h3 class="idag__lilla-titel">Tilf\u00f8j dine n\u00e6rmeste og se hvordan jeres energi m\u00f8des</h3>';
  html += '<p class="idag__lilla-tekst">Se hvad der sker, n\u00e5r dine cyklusser m\u00f8der andres \u2014 forst\u00e6rkning, forskydning eller friktion.</p>';
  html += '<div class="idag__lilla-pil">G\u00e5 til Mine Relationer \u2192</div>';
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
    { screen: 'mine-cyklusser', colorClass: 'hoved-kort--cyklusser', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="none" stroke="#244382" stroke-width="1.5"/><circle cx="16" cy="16" r="10" fill="none" stroke="#3A5A9A" stroke-width="1.5"/><circle cx="16" cy="16" r="6" fill="none" stroke="#5070AD" stroke-width="1.5"/><circle cx="16" cy="16" r="2.5" fill="#244382"/></svg>', title: 'Mine Cyklusser', subtitle: cyklusserSub },
    { screen: 'mine-relationer', colorClass: 'hoved-kort--relationer', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="12" cy="16" r="9" fill="none" stroke="#B8A6C0" stroke-width="1.5"/><circle cx="20" cy="16" r="9" fill="none" stroke="#B8A6C0" stroke-width="1.5"/></svg>', title: 'Mine Relationer', subtitle: relationerSub },
    { screen: 'min-praksis', colorClass: 'hoved-kort--praksis', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M16 4c-2 4-6 6-6 10a6 6 0 0012 0c0-4-4-6-6-10z" fill="none" stroke="#8B9A9D" stroke-width="1.5"/><path d="M16 18v6M12 28h8" stroke="#8B9A9D" stroke-width="1.5" stroke-linecap="round"/></svg>', title: 'Min Praksis', subtitle: praksisSub },
    { screen: 'min-rejse', colorClass: 'hoved-kort--rejse', icon: '<svg width="32" height="32" viewBox="0 0 32 32"><path d="M8 28C8 28 10 4 16 4s8 24 8 24" fill="none" stroke="#7690C1" stroke-width="1.5"/><circle cx="16" cy="16" r="2" fill="#7690C1"/></svg>', title: 'Min Rejse', subtitle: rejseSub }
  ];

  var headerEl = document.getElementById('idag-kort-header');
  if (headerEl) {
    headerEl.innerHTML = '<h3 class="idag__section-title">Dine fem verdener</h3>' +
      '<p class="idag__section-subtitle">Fem indgange til at forst\u00e5 dig selv. Dine cyklusser viser hvad der sker i dig. Dine relationer viser hvad der sker mellem dig og andre. Din praksis giver dig redskaber. Din rejse samler det hele over tid. Dine vinduer \u00e5bner for tid og m\u00f8der.</p>';
  }

  // Mockup: 4 kort med ikonboks + titel + undertekst, hver med sin farveprofil
  var verdener = [
    {
      screen: 'mine-cyklusser',
      color: 'blaa',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="#5A74A5" stroke-width="1.5"/><circle cx="8" cy="8" r="3" fill="#5A74A5" opacity="0.3"/></svg>',
      title: 'Mine Cyklusser',
      subtitle: cyklusserSub
    },
    {
      screen: 'mine-relationer',
      color: 'lilla',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="6" cy="8" r="5" fill="none" stroke="#B8A6C0" stroke-width="1.2"/><circle cx="10" cy="8" r="5" fill="none" stroke="#B8A6C0" stroke-width="1.2"/></svg>',
      title: 'Mine Relationer',
      subtitle: relationerSub
    },
    {
      screen: 'min-praksis',
      color: 'groen',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="#6B8273" stroke-width="1.2"/><path d="M8 4 L8 12 M4 8 L12 8" stroke="#6B8273" stroke-width="1.2"/></svg>',
      title: 'Min Praksis',
      subtitle: praksisSub
    },
    {
      screen: 'min-rejse',
      color: 'lavendel',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 13 Q8 2 13 13" fill="none" stroke="#6B5F7B" stroke-width="1.2"/></svg>',
      title: 'Min Rejse',
      subtitle: rejseSub
    },
    {
      screen: 'mine-vinduer',
      color: 'dyb-lavendel',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="5" cy="8" r="4" fill="none" stroke="#6B5F7B" stroke-width="1.2"/><circle cx="11" cy="8" r="4" fill="none" stroke="#6B5F7B" stroke-width="1.2"/><line x1="2" y1="14" x2="14" y2="14" stroke="#6B5F7B" stroke-width="1" opacity="0.5"/></svg>',
      title: 'Mine Vinduer',
      subtitle: 'Rejse i tid \u2014 alene eller med nogen du holder af'
    }
  ];

  var html = '';
  for (var i = 0; i < verdener.length; i++) {
    var v = verdener[i];
    html += '<div class="idag__verden-kort idag__verden-kort--' + v.color + '" onclick="App.loadScreen(\'' + v.screen + '\')">';
    html += '<div class="idag__verden-row">';
    html += '<div class="idag__verden-ikon idag__verden-ikon--' + v.color + '">' + v.icon + '</div>';
    html += '<div class="idag__verden-info">';
    html += '<h3 class="idag__verden-titel">' + v.title + '</h3>';
    html += '<p class="idag__verden-sub">' + v.subtitle + '</p>';
    html += '</div>';
    html += '</div>';
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

function getDetailRecommendations(element) {
  var html = '<div class="detail__recs">';
  html += '<p class="detail__recs-title">Hvad kan du gøre?</p>';

  // 1. Øvelse
  var yoga = INSIGHT_YOGA[element];
  if (yoga && yoga.length > 0) {
    html += '<div class="detail__rec-item">';
    html += '<span class="detail__rec-label">Øvelse</span>';
    html += '<span class="detail__rec-text">' + yoga[0].pose + ' — ' + yoga[0].desc + '</span>';
    html += '</div>';
  }

  // 2. Næring
  var food = INSIGHT_FOOD[element];
  if (food && food.length > 0) {
    html += '<div class="detail__rec-item">';
    html += '<span class="detail__rec-label">Næring</span>';
    html += '<span class="detail__rec-text">' + food[0].item + ' — ' + food[0].desc + '</span>';
    html += '</div>';
  }

  // 3. Healinglyd
  var sound = HEALING_SOUNDS[element];
  if (sound) {
    html += '<div class="detail__rec-item">';
    html += '<span class="detail__rec-label">Healinglyd</span>';
    html += '<span class="detail__rec-text">' + sound.lyd + ' (' + sound.organ + ') — ' + sound.desc + '</span>';
    html += '</div>';
  }

  // 4. Refleksion
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var age = user.birthdate ? calculateAge(user.birthdate) : 35;
  var phase = calculateLifePhase(age);
  var questions = REFLEKSION_DATA[phase.phase];
  if (questions && questions.length > 0) {
    html += '<div class="detail__rec-item">';
    html += '<span class="detail__rec-label">Refleksion</span>';
    html += '<span class="detail__rec-text">' + questions[0] + '</span>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function showDetail(type) {
  var d = window._idagData;
  if (!d) return;

  var title = '';
  var html = '';
  var detailElement = '';

  if (type === 'livsfase') {
    var lp = d.lifePhase;
    var color = ELEMENT_COLORS[lp.element];
    detailElement = lp.element;
    title = 'Fase ' + lp.phase + ': ' + lp.name;
    html =
      '<div class="detail__badge" style="background-color:' + color + '">' + ELEMENT_LABELS[lp.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + lp.startAge + '\u2013' + lp.endAge + ' \u00E5r \u00B7 ' + ELEMENT_LABELS[lp.element] + '</p>' +
      '<p class="detail__qualities">' + ELEMENT_QUALITIES[lp.element] + '</p>' +
      '<p class="detail__text">' + PHASE_DESCRIPTIONS[lp.phase] + '</p>';

  } else if (type === 'aarstid') {
    var s = d.season;
    var color2 = ELEMENT_COLORS[s.element];
    detailElement = s.element;
    title = s.season;
    html =
      '<div class="detail__badge" style="background-color:' + color2 + '">' + ELEMENT_LABELS[s.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + ELEMENT_LABELS[s.element] + '</p>' +
      '<p class="detail__text">' + SEASON_DESCRIPTIONS[s.season] + '</p>';

  } else if (type === 'ugedag') {
    var w = d.weekday;
    var color3 = ELEMENT_COLORS[w.element];
    detailElement = w.element;
    title = w.day;
    html =
      '<div class="detail__badge" style="background-color:' + color3 + '">' + ELEMENT_LABELS[w.element].charAt(0) + '</div>' +
      '<p class="detail__meta">' + ELEMENT_LABELS[w.element] + '</p>' +
      '<p class="detail__text">' + WEEKDAY_DESCRIPTIONS[w.day] + '</p>';

  } else if (type === 'organur') {
    var o = d.organ;
    var color4 = ELEMENT_COLORS[o.element];
    detailElement = o.element;
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
      detailElement = m.element;
      title = m.phase;
      html =
        '<div class="detail__badge" style="background-color:' + color5 + '">' + ELEMENT_LABELS[m.element].charAt(0) + '</div>' +
        '<p class="detail__meta">Dag ' + m.day + ' \u00B7 ' + m.range + ' \u00B7 ' + ELEMENT_LABELS[m.element] + '</p>' +
        '<p class="detail__text">' + MENSTRUAL_DESCRIPTIONS[m.phase] + '</p>';
    } else {
      var cm = mc.data;
      var color6 = ELEMENT_COLORS[cm.element];
      detailElement = cm.element;
      title = cm.name;
      html =
        '<div class="detail__badge" style="background-color:' + color6 + '">' + ELEMENT_LABELS[cm.element].charAt(0) + '</div>' +
        '<p class="detail__meta">' + ELEMENT_LABELS[cm.element] + '</p>' +
        '<p class="detail__text">' + MONTH_DESCRIPTIONS[cm.name] + '</p>';
    }

  } else if (type === 'dig') {
    // Count elements
    var elCounts = {};
    var els = window._activeElements || [];
    for (var ei = 0; ei < els.length; ei++) elCounts[els[ei]] = (elCounts[els[ei]] || 0) + 1;
    var domEl = els[0] || 'VAND';
    var domC = 0;
    var ks = Object.keys(elCounts);
    for (var ki = 0; ki < ks.length; ki++) { if (elCounts[ks[ki]] > domC) { domC = elCounts[ks[ki]]; domEl = ks[ki]; } }
    var domColor = ELEMENT_COLORS[domEl];
    detailElement = domEl;
    title = 'Dit liv \u2014 lige nu';

    // Count unique and matching elements
    var uniqueCount = ks.length;
    var matchCount = domC;

    html =
      '<div class="detail__badge" style="background-color:' + domColor + '">\u2299</div>' +
      '<p class="detail__meta">' + ELEMENT_LABELS[domEl] + ' dominerer (' + matchCount + '/5 cyklusser)</p>' +
      '<p class="detail__text" style="font-style:italic;line-height:1.8">' +
      'Du er altid i bev\u00e6gelse \u2014 ogs\u00e5 n\u00e5r du st\u00e5r stille. ' +
      'Fem cyklusser l\u00f8ber gennem dig i dette \u00f8jeblik: din livsfase, \u00e5rstiden, din m\u00e5nedlige rytme, ugedagen og det organ der arbejder lige nu. ' +
      'Nogle gange tr\u00e6kker de i samme retning \u2014 s\u00e5 m\u00e6rker du klarhed og flow. ' +
      'Andre gange peger de forskellige veje \u2014 og s\u00e5 kan det f\u00f8les uroligt, uden at der er noget galt.</p>' +
      '<p class="detail__text" style="line-height:1.8;margin-top:12px">' +
      'Denne app viser dig ikke hvad du <em>skal</em> g\u00f8re. ' +
      'Den viser dig hvor du <em>er</em>. ' +
      'N\u00e5r du kan se dine cyklusser, kan du m\u00e6rke forskellen p\u00e5 hvad der kommer udefra og hvad der kommer indefra. ' +
      'Du kan ogs\u00e5 se hvordan dine n\u00e6rmeste befinder sig i deres egne cyklusser \u2014 og forst\u00e5 hvorfor m\u00f8det mellem jer f\u00f8les let nogle dage og tungt andre.</p>' +
      '<p class="detail__text" style="line-height:1.8;margin-top:12px">' +
      'Der er ingen rigtig eller forkert fase. ' +
      'Der er kun det sted du st\u00e5r lige nu \u2014 og den visdom der f\u00f8lger med, n\u00e5r du t\u00f8r se det.</p>';
  }

  // Append element-specific recommendations
  if (detailElement) {
    html += getDetailRecommendations(detailElement);
  }

  // Build detail view
  var container = document.getElementById('idag-detail');
  if (!container) return;

  container.innerHTML =
    '<button class="breadcrumb-home" onclick="hideDetail()">\u2039 Forside</button>' +
    '<h2 class="detail__title">' + title + '</h2>' +
    '<div class="detail__body">' + html + '</div>';

  // Show detail, hide home sections
  var homeEl = document.getElementById('idag-home');
  if (homeEl) homeEl.classList.add('idag--hidden');
  container.classList.add('idag-detail--visible');
  App.detailVisible = true;
}

function hideDetail() {
  var homeEl = document.getElementById('idag-home');
  if (homeEl) homeEl.classList.remove('idag--hidden');
  document.getElementById('idag-detail').classList.remove('idag-detail--visible');
  App.detailVisible = false;
}

window.showDetail = showDetail;
window.hideDetail = hideDetail;

// ---- Samlede Indsigt Page ----

function initSamledeIndsigtScreen() {
  ensureIdagData();
  var elements = window._activeElements;
  if (!elements) {
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

  var figurEl = document.getElementById('samlede-figur');
  var contentEl = document.getElementById('samlede-content');
  if (!contentEl) return;

  var d = window._idagData;
  var insight = generateInsight(elements);
  var primaryEl = insight.dominantElement;

  // Count elements
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var keys = Object.keys(counts);
  var maxCount = 0;
  for (var j = 0; j < keys.length; j++) {
    if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
  }
  var dominant = [];
  for (var k = 0; k < keys.length; k++) {
    if (counts[keys[k]] === maxCount) dominant.push(keys[k]);
  }

  // 1. VennThree figur
  if (figurEl) {
    figurEl.innerHTML = '<div class="praksis__figur">' + renderVennThree({
      topTitle: 'CYKLUSSER',
      topLines: ['Fase \u00B7 \u00c5rstider'],
      bottomLeftTitle: 'KOST',
      bottomLeftLines: ['Mad \u00B7 Urter'],
      bottomRightTitle: 'KROPPEN',
      bottomRightLines: ['Sind \u00B7 Bev\u00e6gelse'],
      overlapAB: 'n\u00e6ring',
      overlapAC: '\u00f8velse',
      overlapBC: 'opm\u00e6rksomhed',
      centerTitle: ELEMENT_LABELS[primaryEl],
      centerLines: ['*sammenfaldet']
    }) + '</div>';
  }

  // Element-dots tekst
  var dotsText = '';
  for (var dt = 0; dt < keys.length; dt++) {
    if (dt > 0) dotsText += ' ';
    dotsText += ELEMENT_LABELS[keys[dt]] + ' ';
    for (var dn = 0; dn < counts[keys[dt]]; dn++) dotsText += '\u25CF';
  }

  var html = '<div style="text-align:center;font-size:13px;color:#aaa;margin:8px 0 20px">' + dotsText + '</div>';

  // Dynamisk tekst (2 afsnit)
  var level = 'present';
  if (dominant.length === 1 && maxCount >= 3) level = 'dominant';
  else if (dominant.length === 1 && maxCount === 2) level = 'strong';
  var analysisTexts = INSIGHT_ANALYSIS[primaryEl][level];
  for (var a = 0; a < Math.min(analysisTexts.length, 2); a++) {
    html += '<p class="yin-yoga__intro-text" style="margin-bottom:20px">' + analysisTexts[a] + '</p>';
  }

  // Yin Yoga
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Yin Yoga</h3>';
  html += '<p class="praksis__section-intro">Dybe str\u00e6k der \u00e5bner meridianerne og st\u00f8tter dit element. Hold stillingerne l\u00e6nge nok til at m\u00e6rke hvordan sp\u00e6ndingen slipper og energien begynder at flyde.</p>';
  var yogaPoses = INSIGHT_YOGA[primaryEl] || [];
  for (var yp = 0; yp < yogaPoses.length; yp++) {
    html += '<div class="praksis__card" onclick="navigateToYogaWithElement(\'' + primaryEl + '\')">';
    html += '<h3 class="praksis__card-title">' + yogaPoses[yp].pose + '</h3>';
    html += '<p class="praksis__card-desc">' + yogaPoses[yp].desc + '</p>';
    html += '</div>';
  }

  // Mad & Urter
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Mad & Urter</h3>';
  html += '<p class="praksis__section-intro">F\u00f8devarer og urter der n\u00e6rer dit dominerende element indefra. Kinesisk medicin har i tusind \u00e5r vidst at den rette mad kan genoprette balance i kroppen.</p>';
  var foodItems = INSIGHT_FOOD[primaryEl] || [];
  for (var fi = 0; fi < foodItems.length; fi++) {
    html += '<div class="praksis__card" onclick="App.loadScreen(\'kost-urter\')">';
    html += '<h3 class="praksis__card-title">' + foodItems[fi].item + '</h3>';
    html += '<p class="praksis__card-desc">' + foodItems[fi].desc + '</p>';
    html += '</div>';
  }

  // Fokusområder
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Fokusomr\u00e5der</h3>';
  html += '<p class="praksis__section-intro">Hvor du kan rette din opm\u00e6rksomhed i dag. Dine cyklusser peger mod bestemte temaer \u2014 m\u00e5ske genkender du dem allerede som det din krop beder om.</p>';
  var focusItems = INSIGHT_FOCUS[primaryEl] || [];
  html += '<div style="font-size:14px;color:#555;line-height:1.8;font-style:italic;font-family:var(--font-serif);padding:0 4px">';
  for (var fc = 0; fc < focusItems.length; fc++) {
    html += '\u25CB ' + focusItems[fc] + '<br>';
  }
  html += '</div>';

  // I dag kan du
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">I dag kan du</h3>';
  html += '<p class="praksis__section-intro">Konkrete handlinger tilpasset dine cyklusser lige nu. Ikke alt beh\u00f8ver g\u00f8res \u2014 v\u00e6lg det der kalder p\u00e5 dig, og lad resten hvile til en anden dag.</p>';
  var suggestions = (INSIGHT_SUGGESTIONS[primaryEl] || []).slice();
  if (dominant.length > 1 && INSIGHT_SUGGESTIONS[dominant[1]]) {
    suggestions.push(INSIGHT_SUGGESTIONS[dominant[1]][0]);
  }
  html += '<div style="font-size:14px;color:#555;line-height:1.8;font-style:italic;font-family:var(--font-serif);padding:0 4px">';
  for (var sg = 0; sg < suggestions.length; sg++) {
    html += '\u25CB ' + suggestions[sg] + '<br>';
  }
  html += '</div>';

  // Tidsperspektiv
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Tidsperspektiv</h3>';
  html += '<p class="praksis__section-intro">Hvor du er i din livsfase og hvad der langsomt tr\u00e6kker n\u00e6rmere. Tid er ikke bare \u00e5r der g\u00e5r \u2014 det er elementer der skifter og nye kvaliteter der vokser frem.</p>';
  if (d) {
    var yearsIn = Math.round((d.age - d.lifePhase.startAge) * 10) / 10;
    var yearsLeft = Math.max(0, d.lifePhase.endAge - d.age);
    if (yearsLeft > 0) {
      html += '<p class="yin-yoga__intro-text">Du er ' + yearsIn + ' \u00e5r inde i din ' + d.lifePhase.name + '-fase. Om ca. ' + (yearsLeft < 1 ? 'under et \u00e5r' : Math.round(yearsLeft) + ' \u00e5r') + ' bev\u00e6ger du dig videre.</p>';
    } else {
      html += '<p class="yin-yoga__intro-text">Du er i slutningen af din ' + d.lifePhase.name + '-fase. En ny fase venter forude.</p>';
    }
    var dynamisk = generateDynamiskTekst(d, elements);
    if (dynamisk.tidsdynamik) {
      html += '<p style="font-size:13px;color:#aaa;margin-top:8px;font-style:italic;font-family:var(--font-serif)">' + dynamisk.tidsdynamik + '</p>';
    }
  }

  // Actionbar
  html += renderActionBar('samlede-indsigt');

  contentEl.innerHTML = html;
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

  html += '<h1 class="rejse__t1">Relationer lige nu</h1>';
  html += '<p class="rejse__intr">Hvordan jeres faser og elementer m\u00f8des i dag. Nogle dage flyder I sammen, andre dage tr\u00e6kker I i hver sin retning \u2014 begge dele er naturligt.</p>';

  // Arv/Valg/Gave Venn-diagram
  html += renderVennFour({
    topTitle: 'ARVEN',
    topLines: ['Mønstre fra', 'generationerne før dig'],
    leftTitle: 'AT SE',
    leftLines: ['Ærlighed om', 'hvad der er'],
    rightTitle: 'AT VÆLGE',
    rightLines: ['Bevidst handling,', 'bryde kæden'],
    bottomTitle: 'GAVEN',
    bottomLines: ['Hvad du giver videre'],
    highlights: [],
    centerTitle: 'DIG',
    centerLines: [],
    extraLabels: [
      { x: 300, y: 235, text: 'forsoning', italic: true },
      { x: 230, y: 300, text: 'erkendelse', italic: true },
      { x: 370, y: 300, text: 'mod', italic: true },
      { x: 300, y: 370, text: 'frihed', italic: true }
    ]
  });

  // Lotus separator
  html += '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<p class="rel-body-text">V\u00e6lg en person nedenfor og se hvad jeres cyklusser fort\u00e6ller om jeres relation \u2014 lige nu, i dag.</p>';

  if (relations.length === 0) {
    html += '<div class="relationer__empty">';
    html += '<div class="relationer__empty-icon">\u2661</div>';
    html += '<p class="relationer__empty-text">Tilf\u00f8j en person for at se hvordan jeres livsfaser og elementer m\u00f8des.</p>';
    html += '<button class="relationer__add-btn" onclick="showAddRelation()">+ Tilf\u00f8j person</button>';
    html += '</div>';
  } else {
    // Dynamic person cards with element interaction text
    var userDataObj = JSON.parse(localStorage.getItem('user') || '{}');
    var userAgeRel = userDataObj.birthdate ? calculateAge(userDataObj.birthdate) : 0;
    var userPhaseRel = calculateLifePhase(userAgeRel);

    for (var i = 0; i < relations.length; i++) {
      var r = relations[i];
      var age = calculateAge(r.birthdate);
      var phase = (r.gender === 'mand') ? calculateMalePhase(age) : calculateLifePhase(age);
      var phaseLabel = (r.gender === 'mand') ? phase.phase + '. cyklus' : 'Fase ' + phase.phase;
      var interaction = getElementInteraction(userPhaseRel.element, phase.element, r.name, r.gender);

      var relLabel = getRelationTypeLabel(r.relationType);
      var nameDisplay = escapeHtml(r.name);
      if (r.relationType && r.relationType !== 'partner' && r.relationType !== 'mand' && r.relationType !== 'k\u00e6reste') {
        nameDisplay += ' (din ' + escapeHtml(relLabel.toLowerCase()) + ')';
      }

      html += '<div class="rel-dyn-card" onclick="showRelationDetail(' + i + ')">';
      html += '<div class="rel-dyn-card__top">';
      html += '<div class="rel-dyn-card__dot">' + (r.gender === 'mand' ? phase.phase + '.' : 'F' + phase.phase) + '</div>';
      html += '<div class="rel-dyn-card__info">';
      html += '<div class="rel-dyn-card__name">' + nameDisplay + '</div>';
      html += '<div class="rel-dyn-card__phase">' + phaseLabel + ' \u00B7 ' + ELEMENT_LABELS[phase.element] + ' \u00B7 ' + age + ' \u00e5r</div>';
      html += '</div>';
      html += '</div>';
      html += '<div class="rel-dyn-card__body">' + interaction.text + '</div>';
      html += '<div class="rel-dyn-card__link">Se hele jeres dynamik \u2192</div>';
      html += '</div>';
    }
    html += '<div style="height:12px;"></div>';
    html += '<div class="rel-add-person" onclick="showAddRelation()">';
    html += '<div class="rel-add-person__main">+ Tilf\u00f8j person</div>';
    html += '<div class="rel-add-person__sub">Partner, barn, for\u00e6lder, veninde...</div>';
    html += '</div>';
  }
  // Generic footer adds "Tilbage til toppen"
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
    d.birthdate = dinp ? sanitizeBirthdate(dinp.value) : '';
    if (!d.birthdate) {
      if (errorEl) errorEl.textContent = 'Vælg venligst en fødselsdato';
      return;
    }
    var bdate = safeParseBirth(d.birthdate);
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

// ---- Cycle Timeline (for all relations) ----

function renderPartnerTimeline(userAge, theirAge, theirGender) {
  var isMale = (theirGender === 'mand');
  var theirPhaseData = isMale ? MALE_PHASE_DATA : PHASE_DATA;
  var theirPhaseCount = isMale ? 8 : 9;
  var W = 340, H = 180;
  var padL = 30, padR = 10, padT = 30, padB = 25;
  var trackW = W - padL - padR;
  var trackH = 22;
  var gap = 16;

  // Timeline range: from youngest start age to oldest end age (max 64)
  var minAge = Math.max(0, Math.min(userAge, theirAge) - 7);
  var maxAge = Math.min(64, Math.max(userAge, theirAge) + 10);
  var ageSpan = maxAge - minAge;

  function xForAge(age) {
    return padL + ((age - minAge) / ageSpan) * trackW;
  }

  // Element colors (subtle, distinct)
  var elColors = {
    'VAND': 'rgba(74,144,164,0.35)',
    'TRÆ': 'rgba(91,140,90,0.35)',
    'ILD': 'rgba(200,90,84,0.35)',
    'JORD': 'rgba(184,149,106,0.35)',
    'METAL': 'rgba(139,154,157,0.35)'
  };

  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">';
  svg += '<style>text{font-family:-apple-system,sans-serif;}</style>';

  // Track labels
  var y1 = padT;
  var y2 = padT + trackH + gap;
  svg += '<text x="' + (padL - 4) + '" y="' + (y1 + 14) + '" text-anchor="end" font-size="9" fill="#666">Dig</text>';
  var theirLabel = isMale ? 'Han' : 'Hun';
  svg += '<text x="' + (padL - 4) + '" y="' + (y2 + 14) + '" text-anchor="end" font-size="9" fill="#666">' + theirLabel + '</text>';

  // Draw user's 7-year phases (top track)
  for (var i = 1; i <= 9; i++) {
    var p = PHASE_DATA[i];
    if (p.endAge <= minAge || p.startAge >= maxAge) continue;
    var x1 = xForAge(Math.max(p.startAge, minAge));
    var x2 = xForAge(Math.min(p.endAge, maxAge));
    svg += '<rect x="' + x1 + '" y="' + y1 + '" width="' + (x2 - x1) + '" height="' + trackH + '" rx="4" fill="' + elColors[p.element] + '" stroke="#ddd" stroke-width="0.5"/>';
    if (x2 - x1 > 25) {
      svg += '<text x="' + ((x1 + x2) / 2) + '" y="' + (y1 + 14) + '" text-anchor="middle" font-size="8" fill="#333">' + ELEMENT_LABELS[p.element].substring(0, 4) + '</text>';
    }
  }

  // Draw their phases (bottom track)
  for (var j = 1; j <= theirPhaseCount; j++) {
    var mp = theirPhaseData[j];
    if (mp.endAge <= minAge || mp.startAge >= maxAge) continue;
    var mx1 = xForAge(Math.max(mp.startAge, minAge));
    var mx2 = xForAge(Math.min(mp.endAge, maxAge));
    svg += '<rect x="' + mx1 + '" y="' + y2 + '" width="' + (mx2 - mx1) + '" height="' + trackH + '" rx="4" fill="' + elColors[mp.element] + '" stroke="#ddd" stroke-width="0.5"/>';
    if (mx2 - mx1 > 25) {
      svg += '<text x="' + ((mx1 + mx2) / 2) + '" y="' + (y2 + 14) + '" text-anchor="middle" font-size="8" fill="#333">' + ELEMENT_LABELS[mp.element].substring(0, 4) + '</text>';
    }
  }

  // "NU" vertical line
  var nowX = xForAge(userAge);
  svg += '<line x1="' + nowX + '" y1="' + (padT - 12) + '" x2="' + nowX + '" y2="' + (y2 + trackH + 4) + '" stroke="#244382" stroke-width="1.5" stroke-dasharray="3,2"/>';
  svg += '<text x="' + nowX + '" y="' + (padT - 14) + '" text-anchor="middle" font-size="9" font-weight="600" fill="#244382">NU</text>';

  // Age markers
  var step = ageSpan > 30 ? 10 : (ageSpan > 15 ? 5 : 3);
  var startMarker = Math.ceil(minAge / step) * step;
  for (var a = startMarker; a <= maxAge; a += step) {
    var ax = xForAge(a);
    svg += '<text x="' + ax + '" y="' + (H - 5) + '" text-anchor="middle" font-size="8" fill="#999">' + a + ' år</text>';
  }

  // Highlight overlapping same-element periods (green highlight)
  for (var fi = 1; fi <= 9; fi++) {
    var fp = PHASE_DATA[fi];
    for (var mi = 1; mi <= theirPhaseCount; mi++) {
      var mmp = theirPhaseData[mi];
      if (fp.element === mmp.element) {
        var overlapStart = Math.max(fp.startAge, mmp.startAge, minAge);
        var overlapEnd = Math.min(fp.endAge, mmp.endAge, maxAge);
        if (overlapStart < overlapEnd) {
          var ox1 = xForAge(overlapStart);
          var ox2 = xForAge(overlapEnd);
          svg += '<rect x="' + ox1 + '" y="' + (y1 - 3) + '" width="' + (ox2 - ox1) + '" height="' + (y2 + trackH - y1 + 6) + '" rx="4" fill="rgba(91,140,90,0.08)" stroke="rgba(91,140,90,0.25)" stroke-width="0.5" stroke-dasharray="2,2"/>';
        }
      }
    }
  }

  svg += '</svg>';
  return svg;
}

function getPartnerTimelineText(userPhase, theirPhase, userAge, theirAge, theirGender) {
  var isMale = (theirGender === 'mand');
  var pron = isMale ? 'han' : 'hun';
  var userEl = ELEMENT_LABELS[userPhase.element];
  var theirEl = ELEMENT_LABELS[theirPhase.element];

  var text = 'Du er i ' + userEl + ' (fase ' + userPhase.phase + '), ' + pron + ' er i ' + theirEl + ' (fase ' + theirPhase.phase + '). ';

  // Find next meeting point (same element)
  var calcTheirPhase = isMale ? calculateMalePhase : calculateLifePhase;
  var found = false;
  for (var futureYears = 1; futureYears <= 20; futureYears++) {
    var futureUserAge = userAge + futureYears;
    var futureTheirAge = theirAge + futureYears;
    var futureUserPhase = calculateLifePhase(futureUserAge);
    var futureTheirPhase = calcTheirPhase(futureTheirAge);
    if (futureUserPhase.element === futureTheirPhase.element && (userPhase.element !== theirPhase.element || futureUserPhase.phase !== userPhase.phase)) {
      text += 'Om ca. ' + futureYears + ' år mødes I begge i ' + ELEMENT_LABELS[futureUserPhase.element] + '.';
      found = true;
      break;
    }
  }

  if (!found && userPhase.element === theirPhase.element) {
    text += 'I er begge i ' + userEl + ' lige nu — en periode med fælles resonans.';
  } else if (!found) {
    text += 'Jeres cyklusser bevæger sig i forskellige rytmer. Det kan skabe komplementaritet.';
  }

  return text;
}

// ---- "Del med person" Sharing ----

function generateShareText(userPhase, theirPhase, interaction, relation) {
  var template = SHARE_TEMPLATES[relation.relationType] || SHARE_TEMPLATES['anden'];
  var userEl = ELEMENT_LABELS[userPhase.element];
  var theirEl = ELEMENT_LABELS[theirPhase.element];
  var name = relation.name;

  var text = template.intro + '\n\n';
  text += 'Lige nu er jeg i min ' + userPhase.name + '-fase (' + userEl + '-elementet), og du er i din ' + theirPhase.name + '-fase (' + theirEl + '). ';
  text += interaction.text + '\n\n';

  // Element-specific advice
  var rec = RELATION_RECOMMENDATIONS[userPhase.element];
  if (rec) {
    text += rec.sammen + '\n\n';
  }

  text += 'Kærlig hilsen fra De 9 Livsfasers Energi ✨';
  return text;
}

function shareWithRelation(index) {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  if (index < 0 || index >= relations.length) return;
  var r = relations[index];

  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  if (!userData.birthdate) return;
  var userAge = calculateAge(userData.birthdate);
  var userPhase = calculateLifePhase(userAge);

  var theirAge = calculateAge(r.birthdate);
  var theirPhase = (r.gender === 'mand') ? calculateMalePhase(theirAge) : calculateLifePhase(theirAge);
  var interaction = getElementInteraction(userPhase.element, theirPhase.element, r.name, r.gender);

  var text = generateShareText(userPhase, theirPhase, interaction, r);
  showSharePreview(text, r.name);
}
window.shareWithRelation = shareWithRelation;

function showSharePreview(text, name) {
  var overlay = document.createElement('div');
  overlay.className = 'share-preview-overlay';
  overlay.id = 'share-preview-overlay';

  var html = '<div class="share-preview">';
  html += '<p class="share-preview__title">Del med ' + escapeHtml(name) + '</p>';
  html += '<textarea class="share-preview__text" id="share-preview-text">' + escapeHtml(text) + '</textarea>';
  html += '<div class="share-preview__actions">';
  html += '<button class="share-preview__btn share-preview__btn--secondary" onclick="closeSharePreview()">Annullér</button>';
  html += '<button class="share-preview__btn share-preview__btn--primary" onclick="executeShare()">Del \u2192</button>';
  html += '</div>';
  html += '</div>';

  overlay.innerHTML = html;
  document.body.appendChild(overlay);
  requestAnimationFrame(function() { overlay.classList.add('share-preview-overlay--visible'); });
}

function closeSharePreview() {
  var overlay = document.getElementById('share-preview-overlay');
  if (overlay) {
    overlay.classList.remove('share-preview-overlay--visible');
    setTimeout(function() { overlay.remove(); }, 300);
  }
}
window.closeSharePreview = closeSharePreview;

function executeShare() {
  var textEl = document.getElementById('share-preview-text');
  if (!textEl) return;
  var text = textEl.value;

  if (navigator.share) {
    navigator.share({ title: 'De 9 Livsfasers Energi', text: text })
      .then(function() { closeSharePreview(); })
      .catch(function() { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
}
window.executeShare = executeShare;

function fallbackCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      closeSharePreview();
      showActionToast('Tekst kopieret — indsæt i en besked ✓');
    });
  }
}

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

  // Relation recommendations
  var userRec = RELATION_RECOMMENDATIONS[userPhase.element];
  var theirRec = RELATION_RECOMMENDATIONS[theirPhase.element];

  if (userRec || theirRec) {
    html += '<div class="relation-recs">';
    html += '<p class="relation-recs__title">Hvad kan I gøre?</p>';

    // For dig
    if (userRec) {
      html += '<div class="relation-recs__card">';
      html += '<p class="relation-recs__label">For dig</p>';
      html += '<p class="relation-recs__text">' + userRec.forDig + '</p>';
      html += '</div>';
    }

    // For den anden
    if (theirRec && theirRec.forAnden) {
      var pronoun = r.gender === 'mand' ? 'han' : 'hun';
      var pronObj = r.gender === 'mand' ? 'ham' : 'hende';
      html += '<div class="relation-recs__card">';
      html += '<p class="relation-recs__label">For ' + escapeHtml(r.name) + '</p>';
      html += '<p class="relation-recs__text">' + theirRec.forAnden.replace(/\{navn\}/g, escapeHtml(r.name)).replace(/\{pron\}/g, pronoun).replace(/\{pron_obj\}/g, pronObj) + '</p>';
      html += '</div>';
    }

    // Sammen
    var sammenRec = userRec ? userRec.sammen : theirRec.sammen;
    html += '<div class="relation-recs__card">';
    html += '<p class="relation-recs__label">Sammen</p>';
    html += '<p class="relation-recs__text">' + sammenRec + '</p>';
    html += '</div>';

    // Tidsperspektiv
    var userYearsLeft = Math.max(0, userPhase.endAge - userAge);
    var theirYearsLeft = Math.max(0, theirPhase.endAge - theirAge);
    var nextShiftYears = Math.min(userYearsLeft, theirYearsLeft);
    var tidText = '';
    if (nextShiftYears <= 0) {
      tidText = 'En af jer er tæt på et faseskift. Vær opmærksom på, at dynamikken mellem jer kan ændre sig.';
    } else if (nextShiftYears <= 2) {
      tidText = 'Om ca. ' + (nextShiftYears < 1 ? 'under et år' : Math.round(nextShiftYears) + ' år') + ' skifter en af jer fase. Det kan bringe ny energi — og nye udfordringer — ind i jeres relation.';
    } else {
      tidText = 'I har ca. ' + Math.round(nextShiftYears) + ' år i jeres nuværende konstellation. Brug dem bevidst — denne dynamik er midlertidig.';
    }

    html += '<div class="relation-recs__card">';
    html += '<p class="relation-recs__label">Tidsperspektiv</p>';
    html += '<p class="relation-recs__text">' + tidText + '</p>';
    html += '</div>';

    html += '</div>';
  }

  // Cycle timeline (for all relations)
  html += '<div class="partner-timeline">';
  html += '<p class="partner-timeline__title">Jeres livscyklusser</p>';
  html += renderPartnerTimeline(userAge, theirAge, r.gender);
  html += '<p class="partner-timeline__text">' + getPartnerTimelineText(userPhase, theirPhase, userAge, theirAge, r.gender) + '</p>';
  html += '</div>';

  // Share button
  html += '<button class="relationer__share-btn" onclick="shareWithRelation(' + index + ')">Del med ' + escapeHtml(r.name) + ' \u2192</button>';

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
  html += '<h1 class="rejse__t1">Tidsrejse</h1>';
  html += '<p class="rejse__intr">Dine cyklusser var aktive l\u00e6nge f\u00f8r du kendte til dem, og de forts\u00e6tter ud i fremtiden. Her kan du rejse tilbage og forst\u00e5 — eller frem og forberede dig.</p>';
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
    var needsRelation = c.needsRelations && !hasRelations;
    var onclick = needsRelation ? "App.loadScreen('relationer')" : "openTidsrejse('" + c.type + "')";
    html += '<div class="tidsrejse__card" onclick="' + onclick + '">';
    html += '<h3 class="tidsrejse__card-title">' + c.title + '</h3>';
    html += '<p class="tidsrejse__card-subtitle">' + c.subtitle + '</p>';
    if (needsRelation) html += '<p class="tidsrejse__card-hint">Tryk for at tilf\u00f8je en relation \u2192</p>';
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

  if (type === 'fremtid-relation') {
    html += '<p class="tidsrejse__input-subtitle">Vælg en dato og de mennesker, du vil møde \u2014 så beregner vi hvilke livsfaser, elementer og energier I hver især befinder jer i. Måske er timingen perfekt. Måske kræver den lidt ekstra opmærksomhed.</p>';
    html += '<img src="relationer_fremtid_cirkel.png" alt="Forbered relationer i fremtiden" class="tidsrejse__hero-img">';
  }

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

  // Venn: Nu vs Fortid/Fremtid
  var travelInsight = generateInsight(results.user.elements);
  var travelEl = travelInsight.dominantElement;
  if (isPast) {
    html += renderVennTwo({
      leftTitle: 'DENGANG',
      leftLines: [ELEMENT_LABELS[travelEl] + ' dominerede', results.user.lifePhase.name],
      rightTitle: 'NU',
      rightLines: window._idagData ? [ELEMENT_LABELS[generateInsight(window._activeElements || []).dominantElement] + ' dominerer'] : ['Dit liv i dag'],
      overlapTitle: 'FORST\u00c5ELSE',
      overlapLines: ['*M\u00f8nstrene viser sig'],
      leftElement: travelEl,
      rightElement: window._idagData ? generateInsight(window._activeElements || []).dominantElement : null
    });
  } else {
    html += renderVennTwo({
      leftTitle: 'NU',
      leftLines: window._idagData ? [ELEMENT_LABELS[generateInsight(window._activeElements || []).dominantElement] + ' dominerer'] : ['Dit liv i dag'],
      rightTitle: 'DER',
      rightLines: [ELEMENT_LABELS[travelEl] + ' venter', results.user.lifePhase.name],
      overlapTitle: 'FORBEREDELSE',
      overlapLines: ['*Du kan m\u00f8de det p\u00e5 forh\u00e5nd'],
      leftElement: window._idagData ? generateInsight(window._activeElements || []).dominantElement : null,
      rightElement: travelEl
    });
  }

  // User cycle grid
  html += renderCycleGrid(results.user, 'Dig', isPast);

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
      html += renderCycleGrid(rr, escapeHtml(rr.name), isPast);

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

  // Recommendations
  html += renderTidsrejseRecommendations(results, isRelation, isPast);

  // Action bar
  html += sectionDivider();
  html += renderActionBar('tidsrejse');

  // Back button
  html += '<button class="tidsrejse__back-btn" onclick="tidsrejseBackToInput()">V\u00e6lg ny dato</button>';

  el.innerHTML = html;
}

function renderTidsrejseRecommendations(results, isRelation, isPast) {
  var insight = generateInsight(results.user.elements);
  var el = insight.dominantElement;
  var framePrefix = isPast ? 'Dengang prægede ' + ELEMENT_LABELS[el].toLowerCase() + ' din krop. ' : 'Begynd allerede nu at forberede dig. ';

  var html = '<div class="tidsrejse__recs">';
  html += '<p class="tidsrejse__recs-title">' + (isPast ? 'Hvad prægede dig?' : 'Sådan kan du forberede dig') + '</p>';

  // For future mode: show phase transition info
  if (!isPast) {
    var user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.birthdate) {
      var currentAge = calculateAge(user.birthdate);
      var currentPhase = calculateLifePhase(currentAge);
      var futurePhase = results.user.lifePhase;
      if (futurePhase.phase !== currentPhase.phase) {
        var fromEl = ELEMENT_LABELS[currentPhase.element];
        var toEl = ELEMENT_LABELS[futurePhase.element];
        html += '<div class="tidsrejse__rec-item tidsrejse__rec-item--transition">';
        html += '<span class="tidsrejse__rec-label">Faseskift</span>';
        html += '<span class="tidsrejse__rec-text">Du går fra ' + currentPhase.name + ' (' + fromEl + ') til ' + futurePhase.name + ' (' + toEl + '). ';
        if (currentPhase.element !== futurePhase.element) {
          html += 'Det er et skift i element — din krop og psyke vil gradvist bevæge sig mod ' + toEl.toLowerCase() + '-kvaliteterne.';
        } else {
          html += 'I deler element, men fasens fokus skifter. Mærk forskellen i livstemaerne.';
        }
        html += '</span>';
        html += '</div>';

        // Kost transition advice
        if (currentPhase.element !== futurePhase.element) {
          var futureFood = INSIGHT_FOOD[futurePhase.element];
          if (futureFood && futureFood.length > 0) {
            html += '<div class="tidsrejse__rec-item">';
            html += '<span class="tidsrejse__rec-label">Kost-overgang</span>';
            html += '<span class="tidsrejse__rec-text">Begynd at tilføje ' + futureFood[0].item.toLowerCase() + ' — ' + futureFood[0].desc + '</span>';
            html += '</div>';
          }
        }
      }
    }
  }

  // Øvelse
  var yoga = INSIGHT_YOGA[el];
  if (yoga && yoga.length > 0) {
    html += '<div class="tidsrejse__rec-item" onclick="navigateToYogaWithElement(\'' + el + '\')" style="cursor:pointer">';
    html += '<span class="tidsrejse__rec-label">Øvelse</span>';
    html += '<span class="tidsrejse__rec-text">' + yoga[0].pose + ' — ' + yoga[0].desc + ' \u2192</span>';
    html += '</div>';
  }

  // Næring
  var food = INSIGHT_FOOD[el];
  if (food && food.length > 0) {
    html += '<div class="tidsrejse__rec-item" onclick="App.loadScreen(\'samlede-indsigt\')" style="cursor:pointer">';
    html += '<span class="tidsrejse__rec-label">Næring</span>';
    html += '<span class="tidsrejse__rec-text">' + food[0].item + ' — ' + food[0].desc + ' \u2192</span>';
    html += '</div>';
  }

  // Bevidsthed
  var focus = INSIGHT_FOCUS[el];
  if (focus && focus.length > 0) {
    html += '<div class="tidsrejse__rec-item">';
    html += '<span class="tidsrejse__rec-label">Bevidsthed</span>';
    html += '<span class="tidsrejse__rec-text">' + framePrefix + focus[0] + '</span>';
    html += '</div>';
  }

  // For relation mode: add "sammen" tip
  if (isRelation && results.relations && results.relations.length > 0) {
    var rr = results.relations[0];
    var theirInsight = generateInsight(rr.elements);
    var sammenRec = RELATION_RECOMMENDATIONS[theirInsight.dominantElement];
    if (sammenRec) {
      html += '<div class="tidsrejse__rec-item">';
      html += '<span class="tidsrejse__rec-label">Sammen</span>';
      html += '<span class="tidsrejse__rec-text">' + sammenRec.sammen + '</span>';
      html += '</div>';
    }
  }

  html += '</div>';
  return html;
}

var _cycleGridCounter = 0;

function toggleCycleDetail(id) {
  var el = document.getElementById(id);
  if (!el) return;
  if (el.style.display === 'none' || !el.style.display) {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}
window.toggleCycleDetail = toggleCycleDetail;

function renderCycleGrid(cycleData, label, isPast) {
  var lp = cycleData.lifePhase;
  var season = cycleData.season;
  var mc = cycleData.monthCycle;
  var insight = generateInsight(cycleData.elements);
  var uid = ++_cycleGridCounter;

  // Alder kommer direkte fra calculateCyclesForDate (som bruger localStorage birthdate)
  var displayAge = cycleData.age;

  // Hent detaljetekster
  var phaseKey = lp.phase || 1;
  var phaseData = CM_PHASES[phaseKey] || {};
  var seasonKey = cmGetSeason(cycleData.date || new Date());
  var seasonData = CM_SEASONS[seasonKey] || {};
  var mcWeek = (mc.type === 'menstrual' && mc.data.week) ? mc.data.week : null;
  var mcData = mcWeek ? CM_MENSTRUATION[mcWeek] : null;

  // Tid-kontekst for expand-tekster
  var varBefandt = isPast ? 'var' : 'er';
  var duVarEr = isPast ? 'Du var' : 'Du er';

  var html = '<div class="tidsrejse__person-label">' + label + ' \u00b7 ' + displayAge + ' \u00e5r</div>';
  html += '<div class="tidsrejse__cycle-grid">';

  // Livsfase
  var lpId = 'cycle-detail-lp-' + uid;
  html += '<div class="tidsrejse__cycle-card tidsrejse__cycle-card--clickable" onclick="toggleCycleDetail(\'' + lpId + '\')">';
  html += '<div class="tidsrejse__cycle-label">Livsfase</div>';
  html += '<div class="tidsrejse__cycle-value">Fase ' + lp.phase + '</div>';
  html += '<div class="tidsrejse__cycle-name">' + lp.name + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[lp.element] + '</div>';
  html += '</div>';

  // \u00c5rstid
  var sId = 'cycle-detail-s-' + uid;
  html += '<div class="tidsrejse__cycle-card tidsrejse__cycle-card--clickable" onclick="toggleCycleDetail(\'' + sId + '\')">';
  html += '<div class="tidsrejse__cycle-label">\u00c5rstid</div>';
  html += '<div class="tidsrejse__cycle-value">' + season.season + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[season.element] + '</div>';
  html += '</div>';

  // M\u00e5ned/Cyklus
  var mcId = 'cycle-detail-mc-' + uid;
  html += '<div class="tidsrejse__cycle-card tidsrejse__cycle-card--clickable" onclick="toggleCycleDetail(\'' + mcId + '\')">';
  html += '<div class="tidsrejse__cycle-label">' + (mc.type === 'menstrual' ? 'Cyklus' : 'M\u00e5ned') + '</div>';
  html += '<div class="tidsrejse__cycle-value">' + (mc.type === 'menstrual' ? mc.data.phase : mc.data.name) + '</div>';
  html += '<div class="tidsrejse__cycle-element">' + ELEMENT_LABELS[mc.data.element] + '</div>';
  html += '</div>';

  // Dominant element
  var domId = 'cycle-detail-dom-' + uid;
  html += '<div class="tidsrejse__cycle-card tidsrejse__cycle-card--dominant tidsrejse__cycle-card--clickable" onclick="toggleCycleDetail(\'' + domId + '\')">';
  html += '<div class="tidsrejse__cycle-label">Dominant</div>';
  html += '<div class="tidsrejse__cycle-value">' + ELEMENT_LABELS[insight.dominantElement] + '</div>';
  html += '<div class="tidsrejse__cycle-qualities">' + ELEMENT_QUALITIES[insight.dominantElement] + '</div>';
  html += '</div>';

  html += '</div>'; // end cycle-grid

  // === Detalje-bokse: KUN indsigt, INGEN \u00f8velser/praksis ===

  // Livsfase: short + energy + emotion
  html += '<div id="' + lpId + '" class="tidsrejse__cycle-expand" style="display:none">';
  html += '<p class="tidsrejse__expand-label">' + (phaseData.name || lp.name).toUpperCase() + ' \u2014 ' + (phaseData.age || '') + '</p>';
  if (phaseData.short) html += '<p class="tidsrejse__expand-text">' + phaseData.short + '</p>';
  if (phaseData.energy) html += '<p class="tidsrejse__expand-text">' + phaseData.energy + '</p>';
  if (phaseData.emotion) html += '<p class="tidsrejse__expand-text"><em>' + phaseData.emotion + '</em></p>';
  html += '</div>';

  // \u00c5rstid: short + energy (ingen r\u00e5d/advice)
  html += '<div id="' + sId + '" class="tidsrejse__cycle-expand" style="display:none">';
  html += '<p class="tidsrejse__expand-label">' + (seasonData.name || season.season).toUpperCase() + ' \u2014 ' + ELEMENT_LABELS[season.element] + '</p>';
  if (seasonData.short) html += '<p class="tidsrejse__expand-text">' + seasonData.short + '</p>';
  if (seasonData.energy) html += '<p class="tidsrejse__expand-text">' + seasonData.energy + '</p>';
  html += '</div>';

  // M\u00e5nedscyklus: menstruationstekst (indsigt, ikke instruktion)
  html += '<div id="' + mcId + '" class="tidsrejse__cycle-expand" style="display:none">';
  if (mcData) {
    html += '<p class="tidsrejse__expand-label">' + mcData.name.toUpperCase() + ' \u2014 ' + mcData.season + '</p>';
    html += '<p class="tidsrejse__expand-text">' + mcData.text + '</p>';
  } else {
    // M\u00e5ne-cyklus eller ikke-menstruel: vis element-kvaliteter (tidl\u00f8st)
    html += '<p class="tidsrejse__expand-label">' + ELEMENT_LABELS[mc.data.element] + '-ENERGI</p>';
    html += '<p class="tidsrejse__expand-text">' + ELEMENT_LABELS[mc.data.element] + '-elementet ' + varBefandt + ' aktivt denne m\u00e5ned. ' + (ELEMENT_QUALITIES[mc.data.element] || '') + '.</p>';
  }
  html += '</div>';

  // Dominant element: KUN bevidsthed/indsigt, INGEN \u00f8velser
  html += '<div id="' + domId + '" class="tidsrejse__cycle-expand" style="display:none">';
  html += '<p class="tidsrejse__expand-label">DOMINANT: ' + ELEMENT_LABELS[insight.dominantElement] + '</p>';
  html += '<p class="tidsrejse__expand-text">' + ELEMENT_QUALITIES[insight.dominantElement] + '.</p>';
  html += '<p class="tidsrejse__expand-text"><em>' + ELEMENT_LABELS[insight.dominantElement] + '-elementet ' + varBefandt + ' det st\u00e6rkeste tr\u00e6k i din energi p\u00e5 dette tidspunkt.</em></p>';
  html += '</div>';

  return html;
}

function tidsrejseBackToInput() {
  TidsrejseState.subView = 'input';
  renderTidsrejseInput();
}

function navigateToTidsrejse(type) {
  App.loadScreen('mine-vinduer');
}

// Export tidsrejse functions
window.openTidsrejse = openTidsrejse;
window.toggleTidsrejseRelation = toggleTidsrejseRelation;
window.applyTidsrejseShortcut = applyTidsrejseShortcut;
window.executeTidsrejse = executeTidsrejse;
window.renderTidsrejseInput = renderTidsrejseInput;
window.tidsrejseBackToInput = tidsrejseBackToInput;
window.navigateToTidsrejse = navigateToTidsrejse;

// ---- Tidsvinduet: Din energi på en anden dag (NYT DESIGN) ----

var DinEnergiState = {
  selectedDate: null,
  results: null,
  isPast: null
};

var DE_DANISH_MONTHS = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// Dynamiske tekster per cyklus for valgt dato
var DE_CYCLE_TEXTS = {
  'VAND': {
    livsfase: function(d, isPast) { return (isPast ? 'Vand-fasen trak' : 'Vand-fasen trækker') + ' dig indad — mod stilhed, drømme og det usynlige. En tid for at lytte til det, der ikke kan siges.'; },
    aarstid: function(d, isPast) { return 'Vinter, Vand-energi. Naturen hviler, og kroppen ' + (isPast ? 'søgte' : 'søger') + ' det samme — langsomhed, varme, indre ro.'; },
    ugedag: function(d, isPast) { return 'En Vand-dag. Energien ' + (isPast ? 'var' : 'er') + ' stille og indadvendt — god til refleksion og hvile.'; }
  },
  'TR\u00C6': {
    livsfase: function(d, isPast) { return (isPast ? 'Træ-fasen drev' : 'Træ-fasen driver') + ' dig fremad — mod vækst, retning og forandring. En tid for at bryde igennem.'; },
    aarstid: function(d, isPast) { return 'Forår, Træ-energi. Vækst og udadvendthed — kroppen ' + (isPast ? 'ville' : 'vil') + ' bevæge sig, skabe, vokse.'; },
    ugedag: function(d, isPast) { return 'En Træ-dag. Energien ' + (isPast ? 'var' : 'er') + ' fremadrettet — god til nye initiativer og kreativitet.'; }
  },
  'ILD': {
    livsfase: function(d, isPast) { return (isPast ? 'Ild-fasen brændte' : 'Ild-fasen brænder') + ' med intensitet — forbindelse, glæde og varme. En tid for at dele dig selv med verden.'; },
    aarstid: function(d, isPast) { return 'Sommer, Ild-energi. Højeste intensitet — kroppen ' + (isPast ? 'var' : 'er') + ' varm, åben, udadvendt.'; },
    ugedag: function(d, isPast) { return 'En Ild-dag. Energien ' + (isPast ? 'var' : 'er') + ' intens og udadvendt — god til forbindelse og udfoldelse.'; }
  },
  'JORD': {
    livsfase: function(d, isPast) { return (isPast ? 'Jord-fasen gav' : 'Jord-fasen giver') + ' dig rodfæste — næring, omsorg og stabilitet. En tid for at samle og fordøje.'; },
    aarstid: function(d, isPast) { return 'Sensommer, Jord-energi. Modning og fylde — kroppen ' + (isPast ? 'søgte' : 'søger') + ' næring, tryghed, jordforbindelse.'; },
    ugedag: function(d, isPast) { return 'En Jord-dag. Energien ' + (isPast ? 'var' : 'er') + ' rodfæstet og nærende — god til omsorg og stabilitet.'; }
  },
  'METAL': {
    livsfase: function(d, isPast) { return (isPast ? 'Metal-fasen skar' : 'Metal-fasen skærer') + ' ind til benet — klarhed, essens og det der virkelig tæller. En tid for at give slip.'; },
    aarstid: function(d, isPast) { return 'Efterår, Metal-energi. Naturen slipper — kroppen ' + (isPast ? 'søgte' : 'søger') + ' klarhed, ro, det essentielle.'; },
    ugedag: function(d, isPast) { return 'En Metal-dag. Energien ' + (isPast ? 'var' : 'er') + ' klar og skarp — god til rengøring, sortering og overblik.'; }
  }
};

function initDinEnergiScreen() {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user.birthdate) return;

  // Brug preload-dato eller i dag
  if (window._preloadDinEnergiDate) {
    DinEnergiState.selectedDate = window._preloadDinEnergiDate;
    window._preloadDinEnergiDate = null;
  } else {
    DinEnergiState.selectedDate = getLocalDateStr(new Date());
  }

  renderDinEnergiDatePicker();
  executeDinEnergiNew();
}

function renderDinEnergiDatePicker() {
  var el = document.getElementById('de-datepicker');
  if (!el) return;
  var dateStr = DinEnergiState.selectedDate || getLocalDateStr(new Date());
  var d = new Date(dateStr + 'T12:00:00');
  var day = d.getDate();
  var month = DE_DANISH_MONTHS[d.getMonth()];
  var year = d.getFullYear();
  var formatted = day + '. ' + month + ' ' + year;

  // Beregn relativ tid
  var now = new Date();
  var relText = deRelativeTime(d, now);

  var html = '<div class="mc__dp">';
  html += '<div class="mc__dp-label">V\u00c6LG EN DAG</div>';
  html += '<div class="mc__dp-date" onclick="deOpenDatePicker()">' + formatted + '</div>';
  html += '<input type="date" id="de-date-input" value="' + dateStr + '" onchange="deOnDateChange(this.value)" style="opacity:0;position:absolute;width:0;height:0;pointer-events:none;">';
  html += '<div class="mc__dp-sub">' + relText + '</div>';
  html += '<div class="mc__dp-nav">';
  html += '<span onclick="deChangeMonth(-1)">\u2190 m\u00e5ned</span>';
  html += '<span onclick="deChangeMonth(1)">m\u00e5ned \u2192</span>';
  html += '</div>';
  html += '</div>';
  el.innerHTML = html;
}

function deRelativeTime(target, now) {
  var diff = target.getTime() - now.getTime();
  var absDiff = Math.abs(diff);
  var days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
  var isPast = diff < 0;

  if (days === 0) return 'I dag';
  if (days === 1) return isPast ? 'I g\u00e5r' : 'I morgen';

  var years = Math.floor(days / 365);
  var remainDays = days - (years * 365);
  var months = Math.floor(remainDays / 30);

  var parts = [];
  if (years > 0) parts.push(years + ' \u00e5r');
  if (months > 0) parts.push(months + ' m\u00e5ned' + (months > 1 ? 'er' : ''));
  if (parts.length === 0) parts.push(days + ' dag' + (days > 1 ? 'e' : ''));

  var timeStr = parts.join(' og ');
  return isPast ? ('For ' + timeStr + ' siden') : ('Om ' + timeStr);
}

function deOpenDatePicker() {
  var input = document.getElementById('de-date-input');
  if (input) {
    input.showPicker ? input.showPicker() : input.click();
  }
}

function deOnDateChange(val) {
  if (!val) return;
  DinEnergiState.selectedDate = val;
  renderDinEnergiDatePicker();
  executeDinEnergiNew();
}

function deChangeMonth(dir) {
  var dateStr = DinEnergiState.selectedDate;
  var d = new Date(dateStr + 'T12:00:00');
  d.setMonth(d.getMonth() + dir);
  DinEnergiState.selectedDate = getLocalDateStr(d);
  renderDinEnergiDatePicker();
  executeDinEnergiNew();
}

function executeDinEnergiNew() {
  var dateStr = DinEnergiState.selectedDate;
  if (!dateStr) return;

  var todayStr = getLocalDateStr(new Date());
  var isPast = dateStr < todayStr;
  var isToday = dateStr === todayStr;
  DinEnergiState.isPast = isPast;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user.birthdate) return;

  var result = calculateCyclesForDate(user.birthdate, dateStr, {
    gender: 'kvinde',
    tracksMenstruation: user.tracksMenstruation,
    lastPeriodDate: user.lastPeriodDate
  });
  DinEnergiState.results = result;

  // Beregn i dag for sammenligning
  var todayResult = calculateCyclesForDate(user.birthdate, todayStr, {
    gender: 'kvinde',
    tracksMenstruation: user.tracksMenstruation,
    lastPeriodDate: user.lastPeriodDate
  });

  renderDinEnergiGradient(result, isPast, isToday);
  renderDinEnergiCyklusser(result, isPast);
  renderDinEnergiSammenlign(result, todayResult, isPast, isToday);
  renderDinEnergiLinks();
  renderDinEnergiActions();
}

function renderDinEnergiGradient(r, isPast, isToday) {
  var el = document.getElementById('de-gradient');
  if (!el) return;

  if (isToday) {
    el.innerHTML = '';
    return;
  }

  var age = r.age;
  var phase = r.lifePhase;
  var season = r.season;
  var varEr = isPast ? 'var' : 'er';

  // Tæl elementer for resonans/modvind
  var counts = {};
  for (var i = 0; i < r.elements.length; i++) {
    counts[r.elements[i]] = (counts[r.elements[i]] || 0) + 1;
  }
  var maxCount = 0;
  var uniqueCount = Object.keys(counts).length;
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) {
    if (counts[keys[j]] > maxCount) maxCount = counts[keys[j]];
  }

  // Fase-position i 7-års cyklus
  var yearsInPhase = age - phase.startAge;

  var mainText = 'Du ' + varEr + ' ' + age + ' \u2014 ';
  if (yearsInPhase <= 1) {
    mainText += 'helt ny i Fase ' + phase.phase + ', ' + phase.name + '. ';
  } else if (yearsInPhase >= 5) {
    mainText += 'langt inde i Fase ' + phase.phase + ', ' + phase.name + '. ';
  } else {
    mainText += 'i Fase ' + phase.phase + ', ' + phase.name + '. ';
  }
  mainText += '\u00c5rstiden ' + varEr + ' ' + season.season.toLowerCase() + ', ' + ELEMENT_LABELS[season.element] + '-element.';

  var subText = '';
  if (maxCount >= 4) {
    subText = 'N\u00e6sten alle cyklusser ' + (isPast ? 'pegede' : 'peger') + ' i samme retning. Dyb resonans \u2014 en tid med indre ro.';
  } else if (maxCount >= 3) {
    subText = 'Tre cyklusser ' + (isPast ? 'delte' : 'deler') + ' element. ' + (isPast ? 'Du var' : 'Du er') + ' i st\u00e6rk str\u00f8m ' + (isPast ? '\u2014 m\u00e5ske husker du det som en klar tid.' : '\u2014 en klar retning.');
  } else if (uniqueCount >= 4) {
    subText = 'Mange retninger p\u00e5 \u00e9n gang. ' + (isPast ? 'Du var' : 'Du er') + ' i modvind \u2014 ' + (isPast ? 'm\u00e5ske husker du det som en urolig tid.' : 'v\u00e6r t\u00e5lmodig med dig selv.');
  } else {
    subText = 'To hovedelementer ' + (isPast ? 'trak' : 'tr\u00e6kker') + ' i dig. ' + (isPast ? 'En tid med kreativ sp\u00e6nding.' : 'Kreativ sp\u00e6nding \u2014 brug den.');
  }

  var html = '<div class="mc__gradient">';
  html += '<div class="mc__gradient-label">DEN DAG</div>';
  html += '<div class="mc__gradient-text">' + mainText + '</div>';
  html += '<div class="mc__gradient-sub">' + subText + '</div>';
  html += '</div>';
  el.innerHTML = html;
}

function renderDinEnergiCyklusser(r, isPast) {
  var el = document.getElementById('de-cyklusser');
  if (!el) return;

  var html = '<div class="mc__dots">\u00b7 \u00b7 \u00b7</div>';
  html += '<h3 class="mc__section-title">Dine cyklusser den dag</h3>';
  html += '<p class="mc__section-sub">Her ser du hvilke cyklusser der var aktive p\u00e5 den valgte dato. Hvert element fortæller noget om den energi du bar i dig dengang.</p>';

  // 1. Livsfase
  var lp = r.lifePhase;
  var lpTexts = DE_CYCLE_TEXTS[lp.element];
  var lpDesc = lpTexts ? lpTexts.livsfase(r, isPast) : '';
  html += '<div class="mc__tr">';
  html += '<div class="mc__tr-hd"><div class="mc__tr-nm">Livsfase</div><div class="mc__tr-el">' + ELEMENT_LABELS[lp.element] + ' \u00b7 FASE ' + lp.phase + '</div></div>';
  html += '<div class="mc__tr-dt">' + lpDesc + '</div>';
  html += '</div>';

  // 2. Årstid
  var s = r.season;
  var sTexts = DE_CYCLE_TEXTS[s.element];
  var sDesc = sTexts ? sTexts.aarstid(r, isPast) : '';
  html += '<div class="mc__tr">';
  html += '<div class="mc__tr-hd"><div class="mc__tr-nm">\u00c5rstid</div><div class="mc__tr-el">' + ELEMENT_LABELS[s.element] + ' \u00b7 ' + s.season.toUpperCase() + '</div></div>';
  html += '<div class="mc__tr-dt">' + sDesc + '</div>';
  html += '</div>';

  // 3. Ugedag
  var w = r.weekday;
  var wTexts = DE_CYCLE_TEXTS[w.element];
  var wDesc = wTexts ? wTexts.ugedag(r, isPast) : '';
  html += '<div class="mc__tr">';
  html += '<div class="mc__tr-hd"><div class="mc__tr-nm">Ugedag</div><div class="mc__tr-el">' + ELEMENT_LABELS[w.element] + ' \u00b7 ' + w.day.toUpperCase() + '</div></div>';
  html += '<div class="mc__tr-dt">' + wDesc + '</div>';
  html += '</div>';

  el.innerHTML = html;
}

function renderDinEnergiSammenlign(r, todayR, isPast, isToday) {
  var el = document.getElementById('de-sammenlign');
  if (!el) return;

  if (isToday) {
    el.innerHTML = '';
    return;
  }

  // Tæl elementer for valgt dato
  var thenCounts = {};
  for (var i = 0; i < r.elements.length; i++) {
    thenCounts[r.elements[i]] = (thenCounts[r.elements[i]] || 0) + 1;
  }
  var thenMax = 0, thenDom = '';
  var tk = Object.keys(thenCounts);
  for (var j = 0; j < tk.length; j++) {
    if (thenCounts[tk[j]] > thenMax) { thenMax = thenCounts[tk[j]]; thenDom = tk[j]; }
  }

  // Tæl elementer for i dag
  var nowCounts = {};
  for (var k = 0; k < todayR.elements.length; k++) {
    nowCounts[todayR.elements[k]] = (nowCounts[todayR.elements[k]] || 0) + 1;
  }
  var nowMax = 0, nowDom = '';
  var nk = Object.keys(nowCounts);
  for (var m = 0; m < nk.length; m++) {
    if (nowCounts[nk[m]] > nowMax) { nowMax = nowCounts[nk[m]]; nowDom = nk[m]; }
  }

  var thenUnique = Object.keys(thenCounts).length;
  var nowUnique = Object.keys(nowCounts).length;

  var text = '';
  if (isPast) {
    text += 'Dengang: ';
    if (thenMax >= 3) {
      text += ELEMENT_LABELS[thenDom] + ' dominerede med ' + thenMax + ' cyklusser, st\u00e6rk resonans. ';
    } else {
      text += thenUnique + ' elementer i spil, ' + (thenUnique >= 4 ? 'modvind' : 'kreativ sp\u00e6nding') + '. ';
    }
    text += 'Nu: ';
    if (nowMax >= 3) {
      text += ELEMENT_LABELS[nowDom] + ' dominerer med ' + nowMax + ' cyklusser, dyb resonans. ';
    } else {
      text += nowUnique + ' elementer i spil, ' + (nowUnique >= 4 ? 'mangfoldighed' : 'balance') + '. ';
    }
    if (nowMax > thenMax) {
      text += 'Du er mere samlet nu \u2014 cyklusserne har fundet ro.';
    } else if (nowMax < thenMax) {
      text += 'Dengang var du mere samlet \u2014 nu er der flere retninger.';
    } else {
      text += 'Samme grad af resonans \u2014 men med forskellige elementer.';
    }
  } else {
    text += 'I dag: ';
    if (nowMax >= 3) {
      text += ELEMENT_LABELS[nowDom] + ' dominerer med ' + nowMax + ' cyklusser. ';
    } else {
      text += nowUnique + ' elementer i spil. ';
    }
    text += 'Den dag: ';
    if (thenMax >= 3) {
      text += ELEMENT_LABELS[thenDom] + ' vil dominere med ' + thenMax + ' cyklusser \u2014 st\u00e6rk retning. ';
    } else {
      text += thenUnique + ' elementer i spil \u2014 ' + (thenUnique >= 4 ? 'mange retninger' : 'kreativ sp\u00e6nding') + '. ';
    }
    if (thenDom !== nowDom) {
      text += 'Energien skifter fra ' + ELEMENT_LABELS[nowDom] + ' til ' + ELEMENT_LABELS[thenDom] + '.';
    } else {
      text += 'Samme dominerende element \u2014 en stabil periode.';
    }
  }

  var html = '<div class="mc__dots">\u00b7 \u00b7 \u00b7</div>';
  html += '<div class="mc__ins">';
  html += '<div class="mc__ins-label">SAMMENLIGNET MED I DAG</div>';
  html += '<div class="mc__ins-text">' + text + '</div>';
  html += '</div>';
  el.innerHTML = html;
}

function renderDinEnergiLinks() {
  var el = document.getElementById('de-links');
  if (!el) return;
  var html = '<a class="mc__link" onclick="deResetDate()" style="cursor:pointer">Pr\u00f8v en anden dato \u2192</a>';
  html += '<a class="mc__link" onclick="App.loadScreen(\'jeres-energi\')" style="cursor:pointer;margin-top:6px;display:block">Se hvordan det ser ud for dig og en anden \u2192</a>';
  el.innerHTML = html;
}

function renderDinEnergiActions() {
  var el = document.getElementById('de-actions');
  if (!el) return;
  el.innerHTML = renderActionBar('din-energi');
}

function deResetDate() {
  var input = document.getElementById('de-date-input');
  if (input) {
    input.showPicker ? input.showPicker() : input.click();
  }
}

function navigateToDinEnergiWithDate(dateStr) {
  window._preloadDinEnergiDate = dateStr;
  App.loadScreen('din-energi');
}

// Export din-energi functions
window.deOpenDatePicker = deOpenDatePicker;
window.deOnDateChange = deOnDateChange;
window.deChangeMonth = deChangeMonth;
window.deResetDate = deResetDate;
window.navigateToDinEnergiWithDate = navigateToDinEnergiWithDate;

// ---- Kroppens store overgange (NYT DESIGN) ----

var KSO_TRANSITIONS = [
  { age: 7, label: 'OMKRING 7 \u00c5R', name: 'De f\u00f8rste t\u00e6nder og den f\u00f8rste bevidsthed', text: 'Nyre-Qi\u2019en viser sig for f\u00f8rste gang. Blivende t\u00e6nder, tykkere h\u00e5r, en begyndende selvbevidsthed. Vand \u2192 Tr\u00e6.' },
  { age: 14, label: 'OMKRING 14 \u00c5R', name: 'Puberteten og den m\u00e5nedlige cyklus', text: 'Menstruationen begynder. Kroppen er klar til at b\u00e6re liv. En ny rytme l\u00e6gges ovenp\u00e5 livets bue.' },
  { age: 28, label: 'OMKRING 28 \u00c5R', name: 'Kroppens toppunkt', text: 'Qi\u2019en er p\u00e5 sit st\u00e6rkeste. Knogler, muskler, fertilitet \u2014 alt p\u00e5 sit h\u00f8jeste. Ild-energi p\u00e5 sit mest intense.' },
  { age: 35, label: 'OMKRING 35 \u00c5R', name: 'Det stille vendepunkt', text: 'Det f\u00f8rste skift indad. Fertiliteten begynder at aftage. Yang vender langsomt mod Yin.' },
  { age: 49, label: 'OMKRING 49 \u00c5R', name: 'Overgangsalderen', text: 'Den m\u00e5nedlige cyklus stopper. En hel rytme forsvinder. Metal-energi \u2014 at give slip, at sortere det essentielle.' },
  { age: 63, label: '63+ \u00c5R', name: 'Vandets tilbagevenden', text: 'Energien runder cirklen. Du b\u00e6rer den samme essens som barnet \u2014 men med alt, livet har l\u00e6rt dig.' }
];

var KSO_ISABELLE = {
  'pre7': 'Alt begynder i stilhed. F\u00f8r de store overgange ligger barnets tid \u2014 ren, u\u00e5bnet, fuld af potentiale.',
  '7-14': 'De f\u00f8rste forandringer kommer stille. Kroppen v\u00e5gner, men sindet er stadig barn. Giv det tid.',
  '14-28': 'Puberteten er ikke en sygdom \u2014 det er en d\u00f8r. Du g\u00e5r igennem den langsomt, over \u00e5r, og hver skridt er rigtigt.',
  '28-35': 'Kroppens toppunkt er ogs\u00e5 begyndelsen p\u00e5 vendingen. Det f\u00f8les ikke som tab endnu \u2014 men noget skifter.',
  '35-49': 'Det stille vendepunkt er den mest underkendte overgang. Ingen fejrer den \u2014 men den \u00e6ndrer alt.',
  '49-63': 'Overgangsalderen er ikke en afslutning. Det er Metal-energi p\u00e5 sit stærkeste \u2014 at skære ind til benet, at finde det essentielle.',
  '63+': 'Hver overgang f\u00f8les som et tab, mens du er i den. Bagefter kan du se, at det var en d\u00f8r. Du har g\u00e5et gennem dem alle \u2014 og du er stadig her.'
};

// SVG: bue med 5 vendepunkter
function renderKsoArcSvg(age) {
  var points = [
    { x: 52, y: 70, age: 7, labelY: 90 },
    { x: 100, y: 35, age: 14, labelY: 55 },
    { x: 150, y: 14, age: 28, labelY: 8 },
    { x: 200, y: 35, age: 49, labelY: 55 },
    { x: 250, y: 70, age: 63, labelY: 90 }
  ];

  // Find n\u00e6rmeste vendepunkt baseret p\u00e5 alder
  var activeIdx = 0;
  if (age < 7) activeIdx = 0;
  else if (age < 14) activeIdx = 0;
  else if (age < 28) activeIdx = 1;
  else if (age < 49) activeIdx = 2;
  else if (age < 63) activeIdx = 3;
  else activeIdx = 4;

  var svg = '<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">';
  svg += '<path d="M 25 90 Q 150 5, 275 90" fill="none" stroke="rgba(118,144,193,0.3)" stroke-width="1.5"/>';

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var isActive = (i === activeIdx);
    if (isActive) {
      svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="7" fill="#5A74A5" stroke="#5A74A5" stroke-width="1"/>';
      var labelText = p.age === 63 ? '63+ \u00e5r' : p.age + ' \u00e5r';
      svg += '<text x="' + p.x + '" y="' + p.labelY + '" font-family="Georgia,\'Times New Roman\',serif" font-size="9" fill="#5A74A5" font-weight="600" font-style="italic" text-anchor="middle">' + labelText + '</text>';
    } else {
      svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="6" fill="rgba(118,144,193,0.15)" stroke="rgba(118,144,193,0.3)" stroke-width="1"/>';
      var labelText2 = p.age === 63 ? '63+ \u00e5r' : p.age + ' \u00e5r';
      svg += '<text x="' + p.x + '" y="' + p.labelY + '" font-family="Georgia,\'Times New Roman\',serif" font-size="9" fill="#7690C1" font-style="italic" text-anchor="middle">' + labelText2 + '</text>';
    }
  }

  svg += '</svg>';
  return svg;
}

function getKsoIsabelleKey(age) {
  if (age < 7) return 'pre7';
  if (age < 14) return '7-14';
  if (age < 28) return '14-28';
  if (age < 35) return '28-35';
  if (age < 49) return '35-49';
  if (age < 63) return '49-63';
  return '63+';
}

function getKsoPositionText(age) {
  if (age < 7) {
    return 'Du er f\u00f8r livets f\u00f8rste store overgang. Alt er endnu foran dig \u2014 stilheden f\u00f8r forandringen.';
  } else if (age < 14) {
    return 'Du har passeret den f\u00f8rste overgang. Kroppen v\u00e5gner langsomt. De n\u00e6ste store skift ligger stadig forude.';
  } else if (age < 28) {
    return 'Puberteten ligger bag dig, og kroppen er p\u00e5 vej mod sit toppunkt. Du er i v\u00e6kstens \u00e5r \u2014 fuld af kraft og retning.';
  } else if (age < 35) {
    return 'Du er t\u00e6t p\u00e5 kroppens toppunkt \u2014 eller lige forbi det. Energien er stærk, men det f\u00f8rste vendepunkt n\u00e6rmer sig.';
  } else if (age < 49) {
    return 'Du er midt i det stille vendepunkt. Yang vender mod Yin. Kroppen beder om at blive lyttet til p\u00e5 en ny m\u00e5de.';
  } else if (age < 63) {
    return 'Overgangsalderen er her \u2014 eller lige bag dig. En hel rytme forsvinder, og noget nyt tr\u00e6der frem. Metal-energien sorterer det essentielle.';
  } else {
    return 'Du er forbi livets store vendepunkter. Overgangsalderen ligger bag dig, og kroppen har fundet en ny ro. Den energi du har nu er roligere, dybere, mere samlet.';
  }
}

function initKroppensStoreOvergangeScreen() {
  ensureIdagData();
  var d = window._idagData;
  if (!d) return;
  var age = d.age;

  // Bue-billede
  var arcEl = document.getElementById('kso-arc');
  if (arcEl) {
    arcEl.innerHTML = '<img src="assets/images/nyre_qi_generel.png" alt="Nyre-Qi gennem livets faser" class="kso-arc-img">';
  }

  // DIN POSITION indsigt-boks
  var posEl = document.getElementById('kso-position');
  if (posEl) {
    var html = '<div class="mc__ins">';
    html += '<div class="mc__ins-label">DIN POSITION</div>';
    html += '<div class="mc__ins-text">' + getKsoPositionText(age) + '</div>';
    html += '</div>';
    posEl.innerHTML = html;
  }

  // Tidslinje
  var tlEl = document.getElementById('kso-tidslinje');
  if (tlEl) {
    var tlHtml = '<div class="mc__tl">';
    for (var i = 0; i < KSO_TRANSITIONS.length; i++) {
      var t = KSO_TRANSITIONS[i];
      // Aktiv: brugerens alder er >= denne overgangs alder OG (sidste ELLER brugerens alder < n\u00e6stes alder)
      var isActive = false;
      if (i === KSO_TRANSITIONS.length - 1) {
        isActive = (age >= t.age);
      } else {
        isActive = (age >= t.age && age < KSO_TRANSITIONS[i + 1].age);
      }
      // Sidste punkt (63+): aktiv hvis age >= 63
      if (i === KSO_TRANSITIONS.length - 1 && age >= 63) isActive = true;

      var dotClass = isActive ? 'mc__tl-dot on' : 'mc__tl-dot';
      var ageLabel = t.label;
      if (isActive && i === KSO_TRANSITIONS.length - 1) {
        ageLabel = '63+ \u00c5R \u00b7 DU ER HER';
      } else if (isActive) {
        ageLabel = t.label + ' \u00b7 DU ER HER';
      }

      tlHtml += '<div class="mc__tl-item">';
      tlHtml += '<div class="' + dotClass + '"></div>';
      tlHtml += '<div class="mc__tl-age">' + ageLabel + '</div>';
      tlHtml += '<div class="mc__tl-name">' + t.name + '</div>';
      tlHtml += '<div class="mc__tl-text">' + t.text + '</div>';
      tlHtml += '</div>';
    }
    tlHtml += '</div>';
    tlEl.innerHTML = tlHtml;
  }

  // ISABELLES ORD
  var isEl = document.getElementById('kso-isabelle');
  if (isEl) {
    var key = getKsoIsabelleKey(age);
    var isHtml = '<div class="mc__ins">';
    isHtml += '<div class="mc__ins-label">ISABELLES ORD</div>';
    isHtml += '<div class="mc__ins-text">' + KSO_ISABELLE[key] + '</div>';
    isHtml += '</div>';
    isEl.innerHTML = isHtml;
  }

  // Actions
  var actEl = document.getElementById('kso-actions');
  if (actEl) {
    actEl.innerHTML = renderActionBar('kroppens-store-overgange');
  }
}

// ---- Tidsvinduet: Jeres energi p\u00e5 en anden dag ----

var JeresEnergiState = {
  selectedDate: null,
  selectedRelations: [],
  results: null,
  isPast: null
};

function initJeresEnergiScreen() {
  JeresEnergiState.selectedDate = null;
  JeresEnergiState.selectedRelations = [];
  JeresEnergiState.results = null;
  JeresEnergiState.isPast = null;
  if (window._preloadJeresEnergiDate) {
    JeresEnergiState.selectedDate = window._preloadJeresEnergiDate;
    window._preloadJeresEnergiDate = null;
  }
  renderJeresEnergiStatic();
  renderJeresEnergiInput();
}

function renderJeresEnergiStatic() {
  // VennThree diagram
  var vennEl = document.getElementById('jeres-energi-venn');
  if (vennEl) {
    vennEl.innerHTML = renderVennThree({
      topTitle: 'FORTIDEN',
      topLines: ['*Forstå hvad der skete'],
      bottomLeftTitle: 'FREMTIDEN',
      bottomLeftLines: ['*Forbered det', '*der kommer'],
      bottomRightTitle: 'RELATIONER',
      bottomRightLines: ['*Se hvordan I', '*mødes over tid'],
      overlapAB: 'mønstre',
      overlapAC: 'genklang',
      overlapBC: 'retning',
      centerTitle: 'DIN',
      centerLines: ['ENERGI']
    });
  }

  var el = document.getElementById('jeres-energi-usebox');
  if (!el) return;
  var html = '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h2 class="rejse__t2">Du kan bruge det til</h2>';
  html += '<p class="rejse__intr">Tidsrejsen er ikke bare tal og faser \u2014 den er en n\u00f8gle til at forst\u00e5 de mennesker du elsker. V\u00e6lg en dato og se hvad der skete mellem jer, eller hvad der venter forude.</p>';
  html += '<div class="tidsvindue__box--lilla">';
  html += '<ul class="tidsvindue__box-list tidsvindue__box-list--lilla">';

  // Dynamiske eksempler baseret p\u00e5 brugerens relationer
  var rels = JSON.parse(localStorage.getItem('relations') || '[]');
  var hasPersonalExamples = false;
  var now = new Date();

  for (var ri = 0; ri < rels.length && ri < 3; ri++) {
    var r = rels[ri];
    if (!r.birthdate || !r.name) continue;
    var rBd = safeParseBirth(r.birthdate);
    var rAge = now.getFullYear() - rBd.getFullYear();
    var rm = now.getMonth() - rBd.getMonth();
    if (rm < 0 || (rm === 0 && now.getDate() < rBd.getDate())) rAge--;
    var rGender = r.gender || 'kvinde';
    var rCycle = rGender === 'mand' ? 8 : 7;
    var rPhaseNum = Math.min(Math.floor(rAge / rCycle) + 1, 9);
    var phaseNames = rGender === 'mand'
      ? ['', 'Fundament', 'Opv\u00e5gning', 'Udfoldelse', 'Toppunkt', 'Konsolidering', 'Vendepunkt', 'Forvandling', 'H\u00f8st', 'Visdom']
      : ['', 'Livets begyndelse', 'Udforskning', 'Forvandling', 'Blomstring', 'Ansvar', 'Modning', 'H\u00f8st', 'Frig\u00f8relse', 'Visdom'];
    var rPhaseName = phaseNames[rPhaseNum] || '';

    var relType = r.relationType || '';
    if (relType === 'partner' || relType === 'mand' || relType === 'k\u00e6reste') {
      html += '<li>Hvor I er synkrone \u2014 og hvor forskydningen presser med ' + escapeHtml(r.name) + '</li>';
      hasPersonalExamples = true;
    } else if (relType === 'mor') {
      html += '<li>Forst\u00e5 dit forhold til ' + escapeHtml(r.name) + ' \u2014 hun er i ' + rPhaseName + '</li>';
      hasPersonalExamples = true;
    } else if (relType === 'datter' || relType === 'barn') {
      if (rAge >= 13 && rAge <= 21) {
        html += '<li>Hvorfor ' + escapeHtml(r.name) + ' tr\u00e6kker sig lige nu \u2014 hun er i ' + rPhaseName + '</li>';
      } else {
        html += '<li>Forst\u00e5 ' + escapeHtml(r.name) + 's energi \u2014 ' + rAge + ' \u00e5r, i ' + rPhaseName + '</li>';
      }
      hasPersonalExamples = true;
    } else {
      html += '<li>Forst\u00e5 ' + escapeHtml(r.name) + 's fase \u2014 ' + rAge + ' \u00e5r, i ' + rPhaseName + '</li>';
      hasPersonalExamples = true;
    }
  }

  // Generiske eksempler som fallback
  if (!hasPersonalExamples) {
    html += '<li>Forst\u00e5 konflikter med din teenager dengang</li>';
    html += '<li>Dit forhold til din mor gennem \u00e5rene</li>';
    html += '<li>Weekend med veninder i forskellige faser</li>';
  }

  // Altid tilf\u00f8j et par generiske
  html += '<li>Forberede en ferie med hele familien</li>';
  html += '<li>Planl\u00e6gge vigtige samtaler</li>';

  html += '</ul></div>';
  el.innerHTML = html;
}

function renderJeresEnergiInput() {
  var el = document.getElementById('jeres-energi-input');
  if (!el) return;
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  var html = '';

  // Lotus separator
  html += '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>';

  // Person selection
  html += '<h2 class="tidsvindue__title tidsvindue__section-title">Hvem vil du se?</h2>';
  html += '<p class="tidsvindue__subtitle">V\u00e6lg de personer du vil sammenligne med. Hver relation b\u00e6rer sin egen kombination af cyklusser \u2014 og det er i m\u00f8det mellem jeres faser at forst\u00e5elsen vokser.</p>';
  html += '<div class="tidsvindue__box--lilla">';
  html += '<div class="tidsvindue__relation-pills">';
  html += '<span class="tidsvindue__user-pill">Dig</span>';
  if (relations.length === 0) {
    html += '<button class="tidsvindue__shortcut-btn tidsvindue__shortcut-btn--lilla" onclick="App.loadScreen(\'relationer\')">+ Tilf\u00f8j en relation f\u00f8rst</button>';
  } else {
    for (var i = 0; i < relations.length; i++) {
      var isSelected = JeresEnergiState.selectedRelations.indexOf(i) !== -1;
      html += '<button class="tidsvindue__relation-pill' + (isSelected ? ' tidsvindue__relation-pill--selected' : '') + '" onclick="toggleJeresRelation(' + i + ')">' + escapeHtml(relations[i].name) + '</button>';
    }
  }
  html += '</div></div>';

  // Lotus separator
  html += '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>';

  // Date selection
  html += '<h2 class="tidsvindue__title tidsvindue__section-title">Hvorn\u00e5r?</h2>';
  html += '<p class="tidsvindue__subtitle">V\u00e6lg en dato \u2014 fortid eller fremtid. Et f\u00f8dselsdag, en ferie der gik sk\u00e6vt, eller et tidspunkt I alle skal m\u00f8des. Cyklusserne var aktive dengang ogs\u00e5.</p>';
  html += '<div class="tidsvindue__box--lilla">';
  html += '<label class="tidsvindue__label">V\u00c6LG DATO</label>';
  var dateVal = JeresEnergiState.selectedDate || '';
  html += '<input type="date" id="jeres-energi-date" class="tidsvindue__date-input" value="' + dateVal + '" onchange="jeresEnergiDateChanged(this.value)">';
  html += '<div class="tidsvindue__shortcut-grid">';
  var relUser = JSON.parse(localStorage.getItem('user') || '{}');
  TIDSVINDUE_SHORTCUTS_RELATION = getDynamicShortcutsRelation(relUser, JeresEnergiState.selectedRelations);
  for (var j = 0; j < TIDSVINDUE_SHORTCUTS_RELATION.length; j++) {
    html += '<button class="tidsvindue__shortcut-btn tidsvindue__shortcut-btn--lilla" onclick="applyJeresEnergiShortcut(' + j + ')">' + TIDSVINDUE_SHORTCUTS_RELATION[j].label + '</button>';
  }
  html += '</div></div>';

  html += '<button class="tidsvindue__calculate-btn" onclick="executeJeresEnergi()">Se jeres energi</button>';
  el.innerHTML = html;
}

function jeresEnergiDateChanged(val) {
  JeresEnergiState.selectedDate = val;
}

function toggleJeresRelation(index) {
  var idx = JeresEnergiState.selectedRelations.indexOf(index);
  if (idx === -1) {
    if (JeresEnergiState.selectedRelations.length >= 3) {
      JeresEnergiState.selectedRelations.shift();
    }
    JeresEnergiState.selectedRelations.push(index);
  } else {
    JeresEnergiState.selectedRelations.splice(idx, 1);
  }
  renderJeresEnergiInput();
}

function applyJeresEnergiShortcut(index) {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var shortcut = TIDSVINDUE_SHORTCUTS_RELATION[index];
  if (!shortcut) return;
  var date = shortcut.resolve(user, relations);
  JeresEnergiState.selectedDate = getLocalDateStr(date);
  renderJeresEnergiInput();
  // Auto-eksekvér så resultatet vises med det samme
  executeJeresEnergi();
}

function executeJeresEnergi() {
  var dateInput = document.getElementById('jeres-energi-date');
  var dateStr = (dateInput && dateInput.value) || JeresEnergiState.selectedDate;
  if (!dateStr) { alert('V\u00e6lg venligst en dato'); return; }
  if (JeresEnergiState.selectedRelations.length === 0) { alert('V\u00e6lg mindst \u00e9n person'); return; }
  JeresEnergiState.selectedDate = dateStr;

  // Robust isPast: sammenlign som lokale datostrenge for at undg\u00e5 UTC-forskydning
  var todayStr = getLocalDateStr(new Date());
  JeresEnergiState.isPast = dateStr < todayStr;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  var userResult = calculateCyclesForDate(user.birthdate, dateStr, {
    gender: 'kvinde',
    tracksMenstruation: user.tracksMenstruation,
    lastPeriodDate: user.lastPeriodDate
  });

  var results = { user: userResult, relations: [] };

  for (var i = 0; i < JeresEnergiState.selectedRelations.length; i++) {
    var ri = JeresEnergiState.selectedRelations[i];
    var r = relations[ri];
    if (!r) continue;
    var rResult = calculateCyclesForDate(r.birthdate, dateStr, { gender: r.gender || 'kvinde' });
    rResult.name = r.name;
    rResult.gender = r.gender;
    rResult.relationType = r.relationType;
    rResult.birthdate = r.birthdate;
    results.relations.push(rResult);
  }

  JeresEnergiState.results = results;
  renderJeresEnergiResults();
  var resultsEl = document.getElementById('jeres-energi-results');
  if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth' });
}

function renderJeresEnergiResults() {
  var el = document.getElementById('jeres-energi-results');
  if (!el) return;
  var results = JeresEnergiState.results;
  if (!results) return;
  var isPast = JeresEnergiState.isPast;
  var dateStr = JeresEnergiState.selectedDate;
  var targetDate = new Date(dateStr);
  var formattedDate = targetDate.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });

  // Dynamisk indsigt via motoren
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var person1 = { birthDate: user.birthdate, gender: 'female', name: 'Du' };

  // Menstruation
  var menstruationWeek = null;
  if (results.user.monthCycle && results.user.monthCycle.type === 'menstrual') {
    menstruationWeek = results.user.monthCycle.data.week;
  }

  var html = '';

  // Section 1: Jeres cyklusser
  html += '<h2 class="tidsvindue__title tidsvindue__section-title">' + (isPast ? 'Jeres cyklusser dengang' : 'Jeres cyklusser på det tidspunkt') + '</h2>';
  html += '<p class="tidsvindue__subtitle">' + formattedDate + '</p>';

  // User cycle grid
  html += '<div class="tidsvindue__box--lilla">';
  html += renderCycleGrid(results.user, 'Dig', isPast);
  html += '</div>';

  // Relation cycle grids
  for (var i = 0; i < results.relations.length; i++) {
    var rel = results.relations[i];
    html += '<div class="tidsvindue__box--lilla" style="margin-top:12px">';
    html += renderCycleGrid(rel, escapeHtml(rel.name), isPast);
    html += '</div>';
  }

  // Section 2: Dynamik — dynamisk genereret
  html += '<h2 class="tidsvindue__title tidsvindue__section-title">' + (isPast ? 'Hvad der skete mellem jer' : 'Hvad I kan forvente') + '</h2>';
  html += '<p class="tidsvindue__subtitle">' + (isPast ? 'Baseret p\u00e5 jeres cyklusser dengang. M\u00e5ske handlede det ikke om jer \u2014 men om to livsfaser der trak i hver sin retning. Se det her.' : 'Baseret p\u00e5 jeres cyklusser p\u00e5 det tidspunkt. Forbered jer p\u00e5 hvad jeres elementer bringer \u2014 og brug det til n\u00e6rhed i stedet for afstand.') + '</p>';

  // Par-indsigt for hvert par (bruger + relation)
  for (var j = 0; j < results.relations.length; j++) {
    var relJ = results.relations[j];
    var relGender = (relJ.gender === 'mand') ? 'male' : 'female';
    var person2 = { birthDate: relJ.birthdate, gender: relGender, name: relJ.name };
    var pairInsight = generateRelationInsight(person1, person2, targetDate, isPast);

    html += '<div class="tidsvindue__box--lilla"' + (j > 0 ? ' style="margin-top:12px"' : '') + '>';
    html += '<p class="tidsvindue__insight-text" style="margin-bottom:4px"><span class="tidsvindue__label" style="display:inline;margin:0">DIG OG ' + escapeHtml(relJ.name).toUpperCase() + '</span></p>';
    html += '<p class="tidsvindue__insight-text" style="white-space:pre-line">' + pairInsight + '</p>';
    html += '</div>';
  }

  // Gruppe-indsigt (kun hvis 3+ personer i alt)
  if (results.relations.length >= 2) {
    var allPersons = [person1];
    for (var k = 0; k < results.relations.length; k++) {
      var relK = results.relations[k];
      var relKGender = (relK.gender === 'mand') ? 'male' : 'female';
      allPersons.push({ birthDate: relK.birthdate, gender: relKGender, name: relK.name });
    }
    var groupInsight = generateGroupInsight(allPersons, targetDate, isPast);
    html += '<div class="tidsvindue__box--lilla" style="margin-top:12px">';
    html += '<p class="tidsvindue__insight-text" style="margin-bottom:4px"><span class="tidsvindue__label" style="display:inline;margin:0">JERES FÆLLES DYNAMIK</span></p>';
    html += '<p class="tidsvindue__insight-text" style="white-space:pre-line">' + groupInsight + '</p>';
    html += '</div>';
  }

  // Section 3: Forskydning (kun for mand/kvinde par)
  var hasMale = false;
  var maleRel = null;
  for (var m = 0; m < results.relations.length; m++) {
    if (results.relations[m].gender === 'mand') {
      hasMale = true;
      maleRel = results.relations[m];
      break;
    }
  }
  if (hasMale && maleRel && user.birthdate && maleRel.birthdate) {
    var shift = getPhaseShift(user.birthdate, maleRel.birthdate, targetDate);
    html += '<h2 class="tidsvindue__title tidsvindue__section-title">Forskydningen mellem jer</h2>';
    html += '<p class="tidsvindue__subtitle">Hendes 7-\u00e5rs cyklus m\u00f8der hans 8-\u00e5rs cyklus. Forskydningen skaber b\u00e5de friktion og mulighed \u2014 og den \u00e6ndrer sig langsomt med tiden.</p>';
    html += '<div class="tidsvindue__box--lilla">';
    html += '<p class="tidsvindue__insight-text" style="white-space:pre-line">' + shift.description + '</p>';
    html += '</div>';
  }

  // Menstruation-tekst (hvis relevant for brugeren)
  if (menstruationWeek && CM_MENSTRUATION[menstruationWeek]) {
    html += '<div class="tidsvindue__box--lilla" style="margin-top:12px">';
    html += '<p class="tidsvindue__insight-text" style="margin-bottom:4px"><span class="tidsvindue__label" style="display:inline;margin:0">DIN MÅNEDSCYKLUS</span></p>';
    html += '<p class="tidsvindue__insight-text">' + CM_MENSTRUATION[menstruationWeek].text + '</p>';
    html += '</div>';
  }

  // Udforsk videre
  html += '<h2 class="tidsvindue__title tidsvindue__section-title">Udforsk videre</h2>';
  html += '<p class="tidsvindue__subtitle">Der er altid mere at forst\u00e5. Pr\u00f8v en anden dato, se kun dig selv, eller dyk ned i jeres elementer og faser fra en ny vinkel.</p>';
  html += '<div class="tidsvindue__box--lilla">';
  html += '<p class="tidsvindue__insight-text" style="cursor:pointer" onclick="jeresEnergiBackToInput()">Se en anden dato \u2192</p>';
  html += '<p class="tidsvindue__insight-text" style="cursor:pointer;margin-top:12px" onclick="navigateToDinEnergiWithDate(\'' + dateStr + '\')">Se kun dig selv denne dag \u2192</p>';

  // Hvornår er vi mest i harmoni? (kun for par med én relation)
  if (results.relations.length === 1 && results.relations[0].birthdate && !isPast) {
    var harmonyRel = results.relations[0];
    var harmonyGender = (harmonyRel.gender === 'mand') ? 'male' : 'female';
    var harmonyPerson2 = { birthDate: harmonyRel.birthdate, gender: harmonyGender, name: harmonyRel.name };
    var harmonyDates = findHarmonyDates(person1, harmonyPerson2, targetDate, 12);
    if (harmonyDates.length > 0) {
      html += '<p class="tidsvindue__insight-text" style="margin-top:12px;margin-bottom:4px"><span class="tidsvindue__label" style="display:inline;margin:0">HVORNÅR ER I MEST I HARMONI?</span></p>';
      for (var h = 0; h < Math.min(harmonyDates.length, 3); h++) {
        var hd = harmonyDates[h];
        var hdFormatted = hd.date.toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });
        html += '<p class="tidsvindue__insight-text" style="cursor:pointer;margin-top:4px" onclick="navigateToJeresEnergiWithDate(\'' + getLocalDateStr(hd.date) + '\')">' + hdFormatted + ' (score ' + hd.score + ') →</p>';
      }
    }
  }
  html += '</div>';

  // Action bar
  html += sectionDivider();
  html += renderActionBar('jeres-energi');

  // Back button
  html += '<button class="tidsvindue__back-btn" onclick="jeresEnergiBackToInput()">Vælg ny dato</button>';

  el.innerHTML = html;
}

function jeresEnergiBackToInput() {
  JeresEnergiState.results = null;
  var el = document.getElementById('jeres-energi-results');
  if (el) el.innerHTML = '';
  var inputEl = document.getElementById('jeres-energi-input');
  if (inputEl) inputEl.scrollIntoView({ behavior: 'smooth' });
}

function navigateToJeresEnergiWithDate(dateStr) {
  App.loadScreen('mine-vinduer');
}

// Export jeres-energi functions
window.executeJeresEnergi = executeJeresEnergi;
window.toggleJeresRelation = toggleJeresRelation;
window.applyJeresEnergiShortcut = applyJeresEnergiShortcut;
window.jeresEnergiBackToInput = jeresEnergiBackToInput;
window.jeresEnergiDateChanged = jeresEnergiDateChanged;
window.navigateToJeresEnergiWithDate = navigateToJeresEnergiWithDate;

// ---- Mine Vinduer ----

var MineVinduerState = {
  selectedDate: null,
  selectedRelations: [],
  results: null
};

function initMineVinduerScreen() {
  MineVinduerState.selectedDate = getLocalDateStr(new Date());
  MineVinduerState.selectedRelations = [];
  MineVinduerState.results = null;
  renderMineVinduerFigurer();
  renderMineVinduerInput();
}

function renderMineVinduerFigurer() {
  var el = document.getElementById('mine-vinduer-figurer');
  if (!el) return;
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var activePhase = 9;
  if (user.birthdate) {
    var age = calculateAge(user.birthdate);
    var lp = calculateLifePhase(age);
    activePhase = lp.phase || 9;
  }

  // Tidsbue SVG — ni faser i bue, aktiv fase fremhævet
  var arcPositions = [
    {cx:28,cy:88,r:14}, {cx:62,cy:62,r:14}, {cx:100,cy:44,r:14},
    {cx:140,cy:34,r:14}, {cx:180,cy:34,r:14}, {cx:218,cy:44,r:14},
    {cx:252,cy:62,r:14}, {cx:278,cy:88,r:14}, {cx:295,cy:116,r:16}
  ];
  var svg1 = '<svg width="310" height="190" xmlns="http://www.w3.org/2000/svg">';
  for (var i = 0; i < arcPositions.length; i++) {
    var p = arcPositions[i];
    var isActive = (i + 1) === activePhase;
    if (isActive) {
      svg1 += '<circle cx="' + p.cx + '" cy="' + p.cy + '" r="' + p.r + '" fill="rgba(107,95,123,0.15)" stroke="#6B5F7B" stroke-width="1.5"/>';
    } else {
      var op = (0.07 + i * 0.01).toFixed(2);
      var sop = (0.18 + i * 0.02).toFixed(2);
      svg1 += '<circle cx="' + p.cx + '" cy="' + p.cy + '" r="' + p.r + '" fill="rgba(139,125,155,' + op + ')" stroke="rgba(139,125,155,' + sop + ')" stroke-width="1"/>';
    }
    var textY = p.cy + 4;
    if (isActive) {
      svg1 += '<text x="' + p.cx + '" y="' + textY + '" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="11" fill="#6B5F7B" font-weight="600" text-anchor="middle">' + (i + 1) + '</text>';
    } else {
      svg1 += '<text x="' + p.cx + '" y="' + textY + '" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="11" fill="#8B7D9B" text-anchor="middle">' + (i + 1) + '</text>';
    }
  }
  // Tidslinje under buen
  svg1 += '<line x1="40" y1="150" x2="270" y2="150" stroke="rgba(139,125,155,0.2)" stroke-width="1"/>';
  svg1 += '<circle cx="80" cy="150" r="4" fill="rgba(139,125,155,0.2)"/>';
  svg1 += '<circle cx="155" cy="150" r="5" fill="#6B5F7B"/>';
  svg1 += '<circle cx="230" cy="150" r="4" fill="rgba(139,125,155,0.2)" stroke="rgba(139,125,155,0.3)" stroke-width="1" stroke-dasharray="2,2"/>';
  svg1 += '<text x="80" y="168" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">fortid</text>';
  svg1 += '<text x="155" y="168" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#6B5F7B" font-weight="600" text-anchor="middle">nu</text>';
  svg1 += '<text x="230" y="168" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">fremtid</text>';
  svg1 += '<path d="M 45 150 L 35 146 M 45 150 L 35 154" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  svg1 += '<path d="M 265 150 L 275 146 M 265 150 L 275 154" stroke="rgba(139,125,155,0.3)" stroke-width="1" fill="none"/>';
  svg1 += '</svg>';

  // Relationscirkler SVG — fire overlappende ellipser
  var svg2 = '<svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">';
  svg2 += '<ellipse cx="140" cy="50" rx="48" ry="72" fill="rgba(139,125,155,0.06)" stroke="rgba(139,125,155,0.15)" stroke-width="1" transform="rotate(0,140,140)"/>';
  svg2 += '<ellipse cx="140" cy="50" rx="48" ry="72" fill="rgba(139,125,155,0.05)" stroke="rgba(139,125,155,0.13)" stroke-width="1" transform="rotate(90,140,140)"/>';
  svg2 += '<ellipse cx="140" cy="50" rx="48" ry="72" fill="rgba(139,125,155,0.06)" stroke="rgba(139,125,155,0.15)" stroke-width="1" transform="rotate(180,140,140)"/>';
  svg2 += '<ellipse cx="140" cy="50" rx="48" ry="72" fill="rgba(139,125,155,0.05)" stroke="rgba(139,125,155,0.13)" stroke-width="1" transform="rotate(270,140,140)"/>';
  svg2 += '<circle cx="140" cy="140" r="38" fill="rgba(107,95,123,0.1)" stroke="rgba(139,125,155,0.25)" stroke-width="1"/>';
  svg2 += '<text x="140" y="136" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="13" fill="#6B5F7B" font-weight="600" text-anchor="middle">DIG</text>';
  svg2 += '<text x="140" y="152" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">i alle b\u00e5nd</text>';
  svg2 += '<text x="140" y="20" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="10" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1.5">PARFORHOLDET</text>';
  svg2 += '<text x="140" y="33" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">intimitet \u00B7 valg</text>';
  svg2 += '<text x="268" y="138" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="10" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1.5">B\u00d8RN</text>';
  svg2 += '<text x="268" y="151" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">omsorg \u00B7 fremtid</text>';
  svg2 += '<text x="140" y="262" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="10" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1.5">FOR\u00c6LDRE</text>';
  svg2 += '<text x="140" y="275" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">r\u00f8dder \u00B7 arv</text>';
  svg2 += '<text x="14" y="138" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="10" fill="#6B5F7B" font-weight="600" text-anchor="middle" letter-spacing="1.5">VENNER</text>';
  svg2 += '<text x="14" y="151" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="9" fill="#8B7D9B" font-style="italic" text-anchor="middle">frihed \u00B7 valgt</text>';
  // Krydsfelter
  svg2 += '<text x="93" y="88" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">k\u00e6rlighed</text>';
  svg2 += '<text x="93" y="98" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">du v\u00e6lger</text>';
  svg2 += '<text x="188" y="88" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">at v\u00e6re</text>';
  svg2 += '<text x="188" y="98" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">for\u00e6ldre</text>';
  svg2 += '<text x="93" y="192" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">de der</text>';
  svg2 += '<text x="93" y="202" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">kender dig</text>';
  svg2 += '<text x="188" y="192" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">tre</text>';
  svg2 += '<text x="188" y="202" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#8B7D9B" font-style="italic" text-anchor="middle">generationer</text>';
  svg2 += '<text x="140" y="104" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#6B5F7B" font-style="italic" text-anchor="middle">den nye familie</text>';
  svg2 += '<text x="108" y="144" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#6B5F7B" font-style="italic" text-anchor="middle">modenhed</text>';
  svg2 += '<text x="172" y="144" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#6B5F7B" font-style="italic" text-anchor="middle">sl\u00e6gten</text>';
  svg2 += '<text x="140" y="178" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="8" fill="#6B5F7B" font-style="italic" text-anchor="middle">livets vidner</text>';
  svg2 += '</svg>';

  var html = '<div class="mv__fig">' + svg1 + '</div>';
  html += '<div class="mv__fig">' + svg2 + '</div>';
  el.innerHTML = html;
}

function renderMineVinduerInput() {
  var el = document.getElementById('mine-vinduer-input');
  if (!el) return;
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  var html = '';

  // HVEM-boks
  html += '<div class="mv__input-box">';
  html += '<div class="mv__input-label">HVEM?</div>';
  html += '<div class="mv__chips">';
  html += '<span class="mv__chip mv__chip--filled">Dig</span>';
  if (relations.length === 0) {
    html += '<button class="mv__chip mv__chip--add" onclick="App.loadScreen(\'relationer\')">+ tilf\u00f8j en person</button>';
  } else {
    for (var i = 0; i < relations.length; i++) {
      var isSelected = MineVinduerState.selectedRelations.indexOf(i) !== -1;
      html += '<button class="mv__chip' + (isSelected ? ' mv__chip--selected' : ' mv__chip--person') + '" onclick="toggleMVRelation(' + i + ')">' + escapeHtml(relations[i].name) + '</button>';
    }
    html += '<button class="mv__chip mv__chip--add" onclick="App.loadScreen(\'relationer\')">+ tilf\u00f8j</button>';
  }
  html += '</div></div>';

  // HVORNÅR-boks
  html += '<div class="mv__input-box">';
  html += '<div class="mv__input-label">HVORN\u00c5R?</div>';

  // Datovælger
  var dateVal = MineVinduerState.selectedDate || getLocalDateStr(new Date());
  var dateObj = new Date(dateVal + 'T12:00:00');
  var dayNum = dateObj.getDate();
  var monthName = dateObj.toLocaleDateString('da-DK', { month: 'long', year: 'numeric' });
  var todayStr = getLocalDateStr(new Date());
  var relativeText = '';
  if (dateVal === todayStr) {
    relativeText = 'I dag';
  } else {
    var diffMs = dateObj.getTime() - new Date(todayStr + 'T12:00:00').getTime();
    var diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 0) {
      var absDays = Math.abs(diffDays);
      if (absDays < 30) relativeText = 'For ' + absDays + ' dage siden';
      else if (absDays < 365) relativeText = 'For ' + Math.round(absDays / 30) + ' m\u00e5neder siden';
      else relativeText = 'For ' + Math.round(absDays / 365) + ' \u00e5r siden';
    } else {
      if (diffDays < 30) relativeText = 'Om ' + diffDays + ' dage';
      else if (diffDays < 365) relativeText = 'Om ' + Math.round(diffDays / 30) + ' m\u00e5neder';
      else relativeText = 'Om ' + Math.round(diffDays / 365) + ' \u00e5r';
    }
  }

  html += '<div class="mv__date-display">';
  html += '<button class="mv__date-nav" onclick="mvDateStep(-30)">\u2190 m\u00e5ned</button>';
  html += '<div class="mv__date-center">';
  html += '<div class="mv__date-day">' + dayNum + '</div>';
  html += '<div class="mv__date-month">' + monthName + '</div>';
  html += '<div class="mv__date-relative">' + relativeText + '</div>';
  html += '</div>';
  html += '<button class="mv__date-nav" onclick="mvDateStep(1)">dag \u2192</button>';
  html += '</div>';
  html += '<input type="date" id="mv-date-input" class="mv__date-hidden" value="' + dateVal + '" onchange="mvDateChanged(this.value)">';
  html += '<button class="mv__date-pick-btn" onclick="document.getElementById(\'mv-date-input\').showPicker()">V\u00e6lg dato</button>';

  // Hurtigvalg-chips
  html += '<div class="mv__quick-chips">';
  var shortcuts = getMVShortcuts();
  for (var s = 0; s < shortcuts.length; s++) {
    html += '<button class="mv__quick-chip" onclick="applyMVShortcut(' + s + ')">' + shortcuts[s].label + '</button>';
  }
  html += '</div>';
  html += '</div>';

  // Se-knap
  html += '<button class="mv__se-btn" onclick="executeMineVinduer()">Se</button>';

  el.innerHTML = html;
}

function getMVShortcuts() {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var now = new Date();
  return [
    { label: 'For 5 \u00e5r', resolve: function() { var d = new Date(now); d.setFullYear(d.getFullYear() - 5); return d; } },
    { label: 'For 1 \u00e5r', resolve: function() { var d = new Date(now); d.setFullYear(d.getFullYear() - 1); return d; } },
    { label: 'Om 1 \u00e5r', resolve: function() { var d = new Date(now); d.setFullYear(d.getFullYear() + 1); return d; } },
    { label: 'Om 5 \u00e5r', resolve: function() { var d = new Date(now); d.setFullYear(d.getFullYear() + 5); return d; } },
    { label: 'N\u00e6ste jul', resolve: function() { var y = now.getMonth() >= 11 && now.getDate() >= 25 ? now.getFullYear() + 1 : now.getFullYear(); return new Date(y, 11, 24); } },
    { label: 'Min f\u00f8dselsdag', resolve: function() {
      if (!user.birthdate) return now;
      var bd = safeParseBirth(user.birthdate);
      var d = new Date(now.getFullYear(), bd.getMonth(), bd.getDate());
      if (d <= now) d.setFullYear(d.getFullYear() + 1);
      return d;
    }},
    { label: 'Sommerstart', resolve: function() { var y = now.getMonth() >= 5 && now.getDate() >= 21 ? now.getFullYear() + 1 : now.getFullYear(); return new Date(y, 5, 21); } }
  ];
}

function toggleMVRelation(index) {
  var idx = MineVinduerState.selectedRelations.indexOf(index);
  if (idx === -1) {
    if (MineVinduerState.selectedRelations.length >= 3) {
      MineVinduerState.selectedRelations.shift();
    }
    MineVinduerState.selectedRelations.push(index);
  } else {
    MineVinduerState.selectedRelations.splice(idx, 1);
  }
  renderMineVinduerInput();
}

function mvDateChanged(val) {
  MineVinduerState.selectedDate = val;
  renderMineVinduerInput();
}

function mvDateStep(days) {
  var current = MineVinduerState.selectedDate || getLocalDateStr(new Date());
  var d = new Date(current + 'T12:00:00');
  d.setDate(d.getDate() + days);
  MineVinduerState.selectedDate = getLocalDateStr(d);
  renderMineVinduerInput();
}

function applyMVShortcut(index) {
  var shortcuts = getMVShortcuts();
  var shortcut = shortcuts[index];
  if (!shortcut) return;
  var d = shortcut.resolve();
  MineVinduerState.selectedDate = getLocalDateStr(d);
  renderMineVinduerInput();
}

function executeMineVinduer() {
  var dateStr = MineVinduerState.selectedDate || getLocalDateStr(new Date());
  var todayStr = getLocalDateStr(new Date());
  var isPast = dateStr < todayStr;
  var isToday = dateStr === todayStr;
  var hasRelations = MineVinduerState.selectedRelations.length > 0;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');

  var userResult = calculateCyclesForDate(user.birthdate, dateStr, {
    gender: 'kvinde',
    tracksMenstruation: user.tracksMenstruation,
    lastPeriodDate: user.lastPeriodDate
  });

  var results = { user: userResult, relations: [] };

  for (var i = 0; i < MineVinduerState.selectedRelations.length; i++) {
    var ri = MineVinduerState.selectedRelations[i];
    var r = relations[ri];
    if (!r) continue;
    var rResult = calculateCyclesForDate(r.birthdate, dateStr, { gender: r.gender || 'kvinde' });
    rResult.name = r.name;
    rResult.gender = r.gender;
    rResult.relationType = r.relationType;
    results.relations.push(rResult);
  }

  MineVinduerState.results = results;
  renderMineVinduerResult(results, isPast, isToday, hasRelations, dateStr);
}

function renderMineVinduerResult(results, isPast, isToday, hasRelations, dateStr) {
  var el = document.getElementById('mine-vinduer-resultat');
  if (!el) return;

  var formattedDate = new Date(dateStr + 'T12:00:00').toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' });
  var userInsight = generateInsight(results.user.elements);
  var html = '';

  if (isToday && !hasRelations) {
    // Kun mig + I dag → mine cyklusser lige nu (kompakt)
    html += '<div class="mv__result-header">Dine cyklusser lige nu</div>';
    html += renderCycleGrid(results.user, 'Dig', false);
    html += renderMVResonans(userInsight);
    html += renderMVIsabelle(userInsight, isToday, isPast);

  } else if (!isToday && !hasRelations) {
    // Kun mig + anden dato → dengang vs. nu
    html += '<div class="mv__result-header">' + formattedDate + '</div>';

    // Dengang vs. nu sammenligning
    var nowResult = calculateCyclesForDate(
      JSON.parse(localStorage.getItem('user') || '{}').birthdate,
      getLocalDateStr(new Date()),
      { gender: 'kvinde', tracksMenstruation: JSON.parse(localStorage.getItem('user') || '{}').tracksMenstruation, lastPeriodDate: JSON.parse(localStorage.getItem('user') || '{}').lastPeriodDate }
    );
    var nowInsight = generateInsight(nowResult.elements);

    html += '<div class="mv__compare">';
    html += '<div class="mv__compare-col mv__compare-col--then">';
    html += '<div class="mv__compare-label">' + (isPast ? 'DENGANG' : 'DER') + '</div>';
    html += '<div class="mv__compare-phase">Fase ' + results.user.lifePhase.phase + ': ' + results.user.lifePhase.name + '</div>';
    html += '<div class="mv__compare-element">' + ELEMENT_LABELS[userInsight.dominantElement] + ' dominerede</div>';
    html += '<div class="mv__compare-age">' + results.user.age + ' \u00e5r</div>';
    html += '</div>';
    html += '<div class="mv__compare-col mv__compare-col--now">';
    html += '<div class="mv__compare-label">NU</div>';
    html += '<div class="mv__compare-phase">Fase ' + nowResult.lifePhase.phase + ': ' + nowResult.lifePhase.name + '</div>';
    html += '<div class="mv__compare-element">' + ELEMENT_LABELS[nowInsight.dominantElement] + ' dominerer</div>';
    html += '<div class="mv__compare-age">' + nowResult.age + ' \u00e5r</div>';
    html += '</div>';
    html += '</div>';

    html += renderCycleGrid(results.user, 'Dig \u00B7 ' + formattedDate, isPast);
    html += renderMVResonans(userInsight);
    html += renderMVIsabelle(userInsight, isToday, isPast);

  } else {
    // Mig + person(er) → begges cyklusser + mødet
    html += '<div class="mv__result-header">' + formattedDate + '</div>';

    // Brugerens cyklusser
    html += '<div class="mv__person-block mv__person-block--user">';
    html += renderCycleGrid(results.user, 'Dig', isPast);
    html += '</div>';

    // Hver relations cyklusser + interaktion
    for (var i = 0; i < results.relations.length; i++) {
      var rr = results.relations[i];
      html += '<div class="mv__person-block mv__person-block--relation">';
      html += renderCycleGrid(rr, escapeHtml(rr.name), isPast);
      html += '</div>';

      // Mødet
      var interaction = getElementInteraction(
        results.user.lifePhase.element,
        rr.lifePhase.element,
        rr.name,
        rr.gender
      );
      html += '<div class="mv__moedet">';
      html += '<div class="mv__moedet-label">M\u00d8DET</div>';
      html += '<div class="mv__moedet-type">' + escapeHtml(interaction.type) + '</div>';
      html += '<div class="mv__moedet-text">' + escapeHtml(interaction.text) + '</div>';
      html += '</div>';
    }

    html += renderMVIsabelle(userInsight, isToday, isPast);
  }

  // Links
  html += '<div class="mv__result-links">';
  html += '<button class="mv__result-link" onclick="mvReset()">Pr\u00f8v anden dato</button>';
  if (!hasRelations) {
    html += '<button class="mv__result-link" onclick="App.loadScreen(\'relationer\')">Tilf\u00f8j person</button>';
  }
  html += '</div>';

  html += sectionDivider();
  html += renderActionBar('mine-vinduer');

  el.innerHTML = html;
  el.scrollIntoView({ behavior: 'smooth' });
}

function renderMVResonans(insight) {
  var count = insight.maxCount || 0;
  var el = insight.dominantElement;
  var label = '';
  var text = '';
  if (count >= 4) {
    label = 'FULD RESONANS';
    text = count + ' af dine cyklusser peger mod ' + ELEMENT_LABELS[el] + ' \u2014 en sj\u00e6lden dybde.';
  } else if (count === 3) {
    label = 'MEDVIND';
    text = 'Tre cyklusser samler sig i ' + ELEMENT_LABELS[el] + '. Der er retning i din energi.';
  } else {
    label = 'MANGFOLDIGHED';
    text = 'Dine cyklusser peger i forskellige retninger. Der er bredde i din energi lige nu.';
  }
  var html = '<div class="mv__resonans">';
  html += '<div class="mv__resonans-label">' + label + '</div>';
  html += '<div class="mv__resonans-text">' + text + '</div>';
  html += '</div>';
  return html;
}

function renderMVIsabelle(insight, isToday, isPast) {
  var el = insight.dominantElement;
  var texts = {
    'VAND': 'Vand-energien inviterer til stilhed og fordybelse. N\u00e5r Vand st\u00e5r st\u00e6rkt, er det en tid for at lytte indad \u2014 ikke for handling, men for at m\u00e6rke hvad der r\u00f8rer sig under overfladen.',
    'TRAE': 'Tr\u00e6-energien driver v\u00e6kst og fornyelse. Der er en kraft i dig lige nu, der vil fremad. M\u00e5ske m\u00e6rker du den som uro, m\u00e5ske som inspiration \u2014 begge dele er Tr\u00e6ets stemme.',
    'ILD': 'Ilden lyser op og skaber forbindelse. N\u00e5r Ild st\u00e5r st\u00e6rkt, er gl\u00e6den t\u00e6ttere p\u00e5 \u2014 men ogs\u00e5 s\u00e5rbarheden. Det er en tid for \u00e6rlighed og n\u00e6rv\u00e6r.',
    'JORD': 'Jord-energien n\u00e6rer og stabiliserer. Du er i en tid, hvor det handler om at holde fast \u2014 i dig selv, i dem du elsker, i det der giver mening. Langsomt. T\u00e5lmodigt.',
    'METAL': 'Metal-energien renser og forenkler. N\u00e5r Metal st\u00e5r st\u00e6rkt, viser det essentielle sig. Giv slip p\u00e5 det overfl\u00f8dige \u2014 og mærk hvad der bliver tilbage.'
  };
  var html = '<div class="mv__isabelle">';
  html += '<div class="mv__isabelle-label">ISABELLE</div>';
  html += '<div class="mv__isabelle-text">' + (texts[el] || '') + '</div>';
  html += '</div>';
  return html;
}

function mvReset() {
  MineVinduerState.results = null;
  var el = document.getElementById('mine-vinduer-resultat');
  if (el) el.innerHTML = '';
  MineVinduerState.selectedDate = getLocalDateStr(new Date());
  renderMineVinduerInput();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export Mine Vinduer functions
window.toggleMVRelation = toggleMVRelation;
window.mvDateChanged = mvDateChanged;
window.mvDateStep = mvDateStep;
window.applyMVShortcut = applyMVShortcut;
window.executeMineVinduer = executeMineVinduer;
window.mvReset = mvReset;

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
    'min-udvikling': 'screens/min-udvikling.html',
    'de-ni-livsfaser': 'screens/de-ni-livsfaser.html',
    'livsfase-detail': 'screens/livsfase-detail.html',
    'de-fire-uger': 'screens/de-fire-uger.html',
    'refleksion': 'screens/refleksion.html',
    'kontrolcyklussen': 'screens/kontrolcyklussen.html',
    'foelelser': 'screens/foelelser.html',
    'yin-yoga': 'screens/yin-yoga.html',
    'indstillinger': 'screens/indstillinger.html',
    'hvad-har-hjulpet': 'screens/hvad-har-hjulpet.html',
    'din-energi': 'screens/din-energi.html',
    'kroppens-store-overgange': 'screens/kroppens-store-overgange.html',
    'jeres-energi': 'screens/jeres-energi.html',
    'to-rytmer': 'screens/to-rytmer.html',
    'tre-generationer': 'screens/tre-generationer.html',
    'kost-urter': 'screens/kost-urter.html',
    'min-journal': 'screens/min-journal.html',
    'mine-favoritter': 'screens/mine-favoritter.html',
    'mine-samlinger': 'screens/mine-samlinger.html',
    'baggrundsviden': 'screens/baggrundsviden.html',
    'dine-cyklusser-lige-nu': 'screens/dine-cyklusser-lige-nu.html',
    'soeg': 'screens/soeg.html',
    'mine-vinduer': 'screens/mine-vinduer.html'
  },

  // Niveau 1 skærme (tema-overblik)
  niveau1: ['mine-cyklusser', 'mine-relationer', 'min-praksis', 'min-rejse', 'mine-vinduer'],
  // Niveau 2 skærme (specifikt indhold)
  niveau2: ['cyklusser-i-cyklusser', 'samlede-indsigt', 'alle-faser', 'tidsrejse', 'relationer', 'favoritter', 'min-udvikling', 'de-ni-livsfaser', 'livsfase-detail', 'de-fire-uger', 'refleksion', 'kontrolcyklussen', 'foelelser', 'yin-yoga', 'indstillinger', 'hvad-har-hjulpet', 'din-energi', 'kroppens-store-overgange', 'jeres-energi', 'to-rytmer', 'tre-generationer', 'kost-urter', 'min-journal', 'mine-favoritter', 'mine-samlinger', 'baggrundsviden', 'dine-cyklusser-lige-nu', 'soeg'],

  init() {
    repairStoredBirthdate();
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
    'samlede-indsigt': 'min-praksis',
    'alle-faser': 'mine-cyklusser',
    'tidsrejse': 'mine-cyklusser',
    'relationer': 'mine-relationer',
    'favoritter': 'min-rejse',
    'min-udvikling': 'min-rejse',
    'de-ni-livsfaser': 'mine-cyklusser',
    'livsfase-detail': 'de-ni-livsfaser',
    'de-fire-uger': 'mine-cyklusser',
    'refleksion': 'min-praksis',
    'kontrolcyklussen': 'min-rejse',
    'foelelser': 'min-praksis',
    'yin-yoga': 'min-praksis',
    'hvad-har-hjulpet': 'min-praksis',
    'kost-urter': 'min-praksis',
    'indstillinger': 'min-rejse',
    'din-energi': 'mine-cyklusser',
    'kroppens-store-overgange': 'mine-cyklusser',
    'jeres-energi': 'mine-relationer',
    'to-rytmer': 'mine-relationer',
    'tre-generationer': 'mine-relationer',
    'min-journal': 'min-rejse',
    'mine-favoritter': 'min-rejse',
    'mine-samlinger': 'min-rejse',
    'baggrundsviden': 'min-rejse',
    'dine-cyklusser-lige-nu': 'mine-cyklusser',
    'soeg': 'idag',
    'mine-vinduer': 'idag'
  },

  goBack() {
    if (this.detailVisible) {
      hideDetail();
    } else if (this.currentScreen === 'din-energi' && DinEnergiState.results) {
      dinEnergiBackToInput();
    } else if (this.currentScreen === 'mine-vinduer' && MineVinduerState.results) {
      mvReset();
    } else if (this.currentScreen === 'jeres-energi' && JeresEnergiState.results) {
      jeresEnergiBackToInput();
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

    // Close menu if open
    var menuOverlay = document.getElementById('menu-overlay');
    if (menuOverlay && menuOverlay.classList.contains('menu-overlay--open')) {
      menuOverlay.classList.remove('menu-overlay--open');
      document.body.style.overflow = '';
    }

    // Load screen content
    const content = document.getElementById('screen-content');
    if (!content) return;

    try {
      const response = await fetch(this.screens[screenName] + '?v=' + Date.now());
      if (response.ok) {
        content.innerHTML = await response.text();

        // Add breadcrumb — navigates to parent (not always home)
        if (screenName !== 'idag' && screenName !== 'onboarding') {
          var SCREEN_LABELS = {
            'idag': 'Lige nu',
            'mine-cyklusser': 'Mine Cyklusser',
            'mine-relationer': 'Mine Relationer',
            'min-praksis': 'Min Praksis',
            'min-rejse': 'Min Rejse',
            'de-ni-livsfaser': 'De Ni Livsfaser',
            'din-energi': 'Mine Cyklusser',
            'jeres-energi': 'Mine Relationer',
            'to-rytmer': 'Mine Relationer',
            'tre-generationer': 'Mine Relationer',
            'mine-vinduer': 'Mine Vinduer'
          };
          var parentId = this.parentScreen[screenName] || 'idag';
          var parentLabel = SCREEN_LABELS[parentId] || 'Forside';
          var breadcrumb = document.createElement('button');
          breadcrumb.className = 'breadcrumb-home';
          breadcrumb.innerHTML = '\u2039 ' + parentLabel;
          breadcrumb.onclick = (function(pid) { return function() { App.loadScreen(pid); }; })(parentId);
          content.insertBefore(breadcrumb, content.firstChild);
        }

        if (screenName === 'onboarding') {
          Onboarding.init();
        } else if (screenName === 'idag') {
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
        } else if (screenName === 'de-ni-livsfaser') {
          initDeNiLivsfaserScreen();
        } else if (screenName === 'livsfase-detail') {
          initLivsfaseDetailScreen();
        } else if (screenName === 'de-fire-uger') {
          initDeFireUgerScreen();
        } else if (screenName === 'refleksion') {
          initRefleksionScreen();
        } else if (screenName === 'kontrolcyklussen') {
          initKontrolcyklussenScreen();
        } else if (screenName === 'foelelser') {
          initFoelelserScreen();
        } else if (screenName === 'yin-yoga') {
          initYinYogaScreen();
        } else if (screenName === 'favoritter') {
          initFavoritterScreen();
        } else if (screenName === 'hvad-har-hjulpet') {
          initHvadHarHjulpetScreen();
        } else if (screenName === 'kost-urter') {
          initKostUrterScreen();
        } else if (screenName === 'indstillinger') {
          initIndstillingerScreen(window._indstillingerSection || null);
          window._indstillingerSection = null;
        } else if (screenName === 'din-energi') {
          initDinEnergiScreen();
        } else if (screenName === 'kroppens-store-overgange') {
          initKroppensStoreOvergangeScreen();
        } else if (screenName === 'jeres-energi') {
          initJeresEnergiScreen();
        } else if (screenName === 'to-rytmer') {
          initToRytmerScreen();
        } else if (screenName === 'tre-generationer') {
          initTreGenerationerScreen();
        } else if (screenName === 'mine-favoritter') {
          initMineFavoritterScreen();
        } else if (screenName === 'min-journal') {
          initMinJournalScreen();
        } else if (screenName === 'mine-samlinger') {
          initMineSamlingerScreen();
        } else if (screenName === 'baggrundsviden') {
          initBaggrundsvidenScreen();
        } else if (screenName === 'dine-cyklusser-lige-nu') {
          initDineCyklusserLigeNuScreen();
        } else if (screenName === 'soeg') {
          initSoegScreen();
        } else if (screenName === 'mine-vinduer') {
          initMineVinduerScreen();
        }

        // Append "Tilbage til toppen" footer (skip on onboarding)
        if (screenName !== 'onboarding') {
          var footer = document.createElement('div');
          footer.className = 'scroll-top-footer';
          footer.textContent = '\u2191 Tilbage til toppen';
          footer.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            content.scrollTop = 0;
          };
          content.appendChild(footer);
        }

        // Scroll content to top
        content.scrollTop = 0;
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
    screenEl.insertAdjacentHTML('beforeend', sectionDivider() + renderActionBar('alle-faser'));
  }
}

function showFaseDetail(phaseNum) {
  var p = PHASE_DATA[phaseNum];
  if (!p) return;

  // Reuse the detail system — temporarily set data and call showDetail approach
  var container = document.getElementById('alle-faser-list');
  if (!container) return;

  var detail = LIVSFASE_DETAIL[phaseNum];
  var recsHtml = '';
  if (detail) {
    recsHtml += '<div class="fase-detail-recs">';
    recsHtml += '<p class="fase-detail-recs__title">Hvad kan du g\u00f8re?</p>';
    if (detail.oevelse) {
      recsHtml += '<div class="hvadkandu__card" onclick="navigateToYogaWithElement(\'' + p.element + '\')">';
      recsHtml += '<p class="hvadkandu__label">\u00d8velse</p>';
      recsHtml += '<p class="hvadkandu__title">' + detail.oevelse.title + '</p>';
      recsHtml += '<p class="hvadkandu__desc">' + detail.oevelse.desc.split('.')[0] + '.</p>';
      recsHtml += '<span class="hvadkandu__link">Pr\u00f8v nu \u2192</span>';
      recsHtml += '</div>';
    }
    if (detail.kost) {
      recsHtml += '<div class="hvadkandu__card" onclick="App.loadScreen(\'samlede-indsigt\')">';
      recsHtml += '<p class="hvadkandu__label">Kost</p>';
      recsHtml += '<p class="hvadkandu__title">' + detail.kost.title + '</p>';
      recsHtml += '<p class="hvadkandu__desc">' + detail.kost.desc.split('.')[0] + '.</p>';
      recsHtml += '<span class="hvadkandu__link">Se alle anbefalinger \u2192</span>';
      recsHtml += '</div>';
    }
    if (detail.healingLyd) {
      recsHtml += '<div class="hvadkandu__card" onclick="App.loadScreen(\'samlede-indsigt\')">';
      recsHtml += '<p class="hvadkandu__label">Healing-lyd</p>';
      recsHtml += '<p class="hvadkandu__title">' + detail.healingLyd.title + '</p>';
      recsHtml += '<p class="hvadkandu__desc">' + detail.healingLyd.desc.split('.')[0] + '.</p>';
      recsHtml += '<span class="hvadkandu__link">Se alle anbefalinger \u2192</span>';
      recsHtml += '</div>';
    }
    recsHtml += '</div>';
    recsHtml += '<button class="idag__link-btn" onclick="navigateToFaseDetail(' + phaseNum + ')">Se den fulde beskrivelse \u2192</button>';
  }

  container.innerHTML =
    '<div class="detail__body">' +
      '<div class="detail__badge" style="background-color:' + APP_COLORS.morkebla + '">' + phaseNum + '</div>' +
      '<h2 class="detail__title">Fase ' + phaseNum + ': ' + p.name + '</h2>' +
      '<p class="detail__meta">' + p.startAge + '\u2013' + p.endAge + ' \u00E5r \u00B7 ' + ELEMENT_LABELS[p.element] + '</p>' +
      '<p class="detail__qualities">' + ELEMENT_QUALITIES[p.element] + '</p>' +
      '<p class="detail__text">' + PHASE_DESCRIPTIONS[phaseNum] + '</p>' +
      recsHtml +
    '</div>' +
    '<button class="idag__link-btn" onclick="initAlleFaserScreen()">\u2190 Alle faser</button>';
}

window.showFaseDetail = showFaseDetail;

// ---- To Rytmer (Niveau 2 under Mine Relationer) ----

var TO_RYTMER_SAMTALE = {
  VAND: {
    spoerg: 'Hvad fylder mest for dig lige nu \u2014 og er der noget der presser, som du ikke har sagt h\u00f8jt?',
    sig: 'Jeg har v\u00e6ret der, hvor du er nu. Ikke pr\u00e6cis det samme sted, men i den slags sp\u00f8rgsm\u00e5l. Vil du h\u00f8re, hvad der hjalp mig?',
    sammen: 'Hvor er vi forskellige lige nu \u2014 og hvad kan vi l\u00e6re af det, i stedet for at k\u00e6mpe mod det?'
  },
  'TR\u00C6': {
    spoerg: 'Hvad dr\u00f8mmer du om at bygge lige nu \u2014 og f\u00f8ler du, at der er plads til det?',
    sig: 'Jeg kan m\u00e6rke, at du har brug for at bevæge dig. Lad os finde ud af, hvordan vi giver plads til det sammen.',
    sammen: 'Hvad ville vi skabe, hvis vi turde dr\u00f8mme h\u00f8jt sammen \u2014 uden at v\u00e6re praktiske?'
  },
  ILD: {
    spoerg: 'Hvorn\u00e5r f\u00f8lte du dig sidst virkelig levende \u2014 og hvad holdt dig v\u00e5gen?',
    sig: 'Din energi smitter. Jeg kan m\u00e6rke den, ogs\u00e5 n\u00e5r du ikke siger noget. Hvad kan vi t\u00e6nde sammen?',
    sammen: 'Hvad ville vi g\u00f8re, hvis vi havde al den energi i verden \u2014 bare for en weekend?'
  },
  JORD: {
    spoerg: 'Hvad f\u00e5r dig til at f\u00f8le dig tryg lige nu \u2014 og er der noget du savner?',
    sig: 'Jeg ved godt, at du holder mange ting sammen. Lad mig holde noget af det for dig en stund.',
    sammen: 'Hvad ville det betyde for os, hvis vi holdt pause fra det hele \u2014 bare \u00e9n dag?'
  },
  METAL: {
    spoerg: 'Hvad har du sagt farvel til for nylig \u2014 og savner du det, eller er det en befrielse?',
    sig: 'Jeg kan se, at du sorterer. Det er modigt. Og det er okay, at det g\u00f8r lidt ondt.',
    sammen: 'Hvad er vi blevet enige om at beholde, som m\u00e5ske ikke l\u00e6ngere tjener os?'
  }
};

function initToRytmerScreen() {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var userAge = userData.birthdate ? calculateAge(userData.birthdate) : 42;
  var userPhase = calculateLifePhase(userAge);

  // Find first male partner
  var partner = null;
  var partnerIndex = -1;
  for (var i = 0; i < relations.length; i++) {
    if (relations[i].gender === 'mand') {
      partner = relations[i];
      partnerIndex = i;
      break;
    }
  }

  // Use real partner data or example data
  var hasPartner = !!partner;
  var partnerAge = hasPartner ? calculateAge(partner.birthdate) : 43;
  var partnerPhase = hasPartner ? calculateMalePhase(partnerAge) : calculateMalePhase(43);
  var partnerName = hasPartner ? escapeHtml(partner.name) : 'din partner';

  // Intro
  var introEl = document.getElementById('to-rytmer-intro');
  if (introEl) {
    introEl.innerHTML = '<p class="rel-body-text">Kvinder f\u00f8lger syv-\u00e5rs cyklusser, m\u00e6nd f\u00f8lger otte-\u00e5rs cyklusser. Den lille forskel skaber en forskydning, der vokser med \u00e5rene \u2014 og rammer pr\u00e6cis de steder, hvor de store livsvalg skal tr\u00e6ffes.</p>';
  }

  // Two-column person info
  var persEl = document.getElementById('to-rytmer-persons');
  if (persEl) {
    var userCycleNum = userPhase.phase;
    var partnerCycleNum = partnerPhase.phase;
    if (!hasPartner) {
      persEl.innerHTML =
        '<div class="rel-insight" style="margin-bottom:20px;">' +
          '<div class="rel-insight__label">Eksempel</div>' +
          '<div class="rel-insight__text">Nedenfor ser du et eksempel p\u00e5 hvordan To Rytmer virker. Tilf\u00f8j din partner for at se jeres personlige forskydning.</div>' +
        '</div>' +
        '<div class="rel-twocol">' +
          '<div class="rel-twocol__box">' +
            '<div class="rel-twocol__sub">Dig</div>' +
            '<div class="rel-twocol__main">' + userAge + ' \u00e5r</div>' +
            '<div class="rel-twocol__phase">Fase ' + userCycleNum + ' \u00B7 ' + ELEMENT_LABELS[userPhase.element] + '</div>' +
            '<div class="rel-twocol__note">7 \u00D7 ' + userCycleNum + ' = ' + (7 * userCycleNum) + '</div>' +
          '</div>' +
          '<div class="rel-twocol__box">' +
            '<div class="rel-twocol__sub">Eksempel</div>' +
            '<div class="rel-twocol__main">' + partnerAge + ' \u00e5r</div>' +
            '<div class="rel-twocol__phase">' + partnerCycleNum + '. cyklus \u00B7 ' + ELEMENT_LABELS[partnerPhase.element] + '</div>' +
            '<div class="rel-twocol__note">8 \u00D7 ' + partnerCycleNum + ' = ' + (8 * partnerCycleNum) + '</div>' +
          '</div>' +
        '</div>';
    } else {
      persEl.innerHTML =
        '<div class="rel-twocol">' +
          '<div class="rel-twocol__box">' +
            '<div class="rel-twocol__sub">Dig</div>' +
            '<div class="rel-twocol__main">' + userAge + ' \u00e5r</div>' +
            '<div class="rel-twocol__phase">Fase ' + userCycleNum + ' \u00B7 ' + ELEMENT_LABELS[userPhase.element] + '</div>' +
            '<div class="rel-twocol__note">7 \u00D7 ' + userCycleNum + ' = ' + (7 * userCycleNum) + '</div>' +
          '</div>' +
          '<div class="rel-twocol__box">' +
            '<div class="rel-twocol__sub">' + partnerName + '</div>' +
            '<div class="rel-twocol__main">' + partnerAge + ' \u00e5r</div>' +
            '<div class="rel-twocol__phase">' + partnerCycleNum + '. cyklus \u00B7 ' + ELEMENT_LABELS[partnerPhase.element] + '</div>' +
            '<div class="rel-twocol__note">8 \u00D7 ' + partnerCycleNum + ' = ' + (8 * partnerCycleNum) + '</div>' +
          '</div>' +
        '</div>';
    }
  }

  // Forskydning
  var forskEl = document.getElementById('to-rytmer-forskydning');
  if (forskEl) {
    var userTurningPoint = userPhase.startAge;
    var partnerTurningPoint = partnerPhase.startAge;
    var forskydning = Math.abs(userTurningPoint - partnerTurningPoint);
    var forskydningText = generateForskydningText(userPhase, partnerPhase, userAge, partnerAge, partnerName);

    forskEl.innerHTML =
      '<div class="rel-forskydning">' +
        '<div class="rel-forskydning__num">' + forskydning + ' \u00e5r</div>' +
        '<div class="rel-forskydning__unit">forskydning lige nu</div>' +
        '<div class="rel-forskydning__text">' + forskydningText + '</div>' +
      '</div>';
  }

  // Timeline
  var tlEl = document.getElementById('to-rytmer-timeline');
  if (tlEl) {
    tlEl.innerHTML = '<div class="rel-timeline-box">' +
      renderPartnerTimeline(userAge, partnerAge, 'mand') +
      '</div>';
  }

  // Insight
  var insEl = document.getElementById('to-rytmer-insight');
  if (insEl) {
    var insightText = generateToRytmerInsight(userPhase, partnerPhase, userAge, partnerAge, partnerName);
    insEl.innerHTML =
      '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>' +
      '<h2 class="rejse__t2">Hvad forskydningen betyder lige nu</h2>' +
      '<p class="rejse__intr">Jeres to rytmer m\u00f8des aldrig helt synkront \u2014 og det er meningen. I forskydningen ligger b\u00e5de udfordringen og gaven. Her kan du se hvad det betyder for jer netop nu.</p>' +
      '<div class="rel-insight">' +
        '<div class="rel-insight__text">' + insightText + '</div>' +
      '</div>';
  }

  // Samtaleåbnere
  var samEl = document.getElementById('to-rytmer-samtale');
  if (samEl) {
    var dominantEl = userPhase.element;
    var samtaleData = TO_RYTMER_SAMTALE[dominantEl] || TO_RYTMER_SAMTALE['JORD'];
    samEl.innerHTML =
      '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>' +
      '<h3 class="rel-section-heading">Samtale\u00e5bnere</h3>' +
      '<p class="rel-section-subtitle">Ord der kan \u00e5bne det, der er sv\u00e6rt at sige</p>' +
      '<div class="rel-samtale">' +
        '<div class="rel-samtale__label">Sp\u00f8rg ham</div>' +
        '<div class="rel-samtale__text">\u201C' + samtaleData.spoerg + '\u201D</div>' +
      '</div>' +
      '<div class="rel-samtale">' +
        '<div class="rel-samtale__label">Sig til ham</div>' +
        '<div class="rel-samtale__text">\u201C' + samtaleData.sig + '\u201D</div>' +
      '</div>' +
      '<div class="rel-samtale">' +
        '<div class="rel-samtale__label">Sp\u00f8rg jer selv</div>' +
        '<div class="rel-samtale__text">\u201C' + samtaleData.sammen + '\u201D</div>' +
      '</div>';
  }

  // Actions
  var actEl = document.getElementById('to-rytmer-actions');
  if (actEl) {
    if (hasPartner) {
      actEl.innerHTML =
        '<div style="height:32px;"></div>' +
        '<button class="rel-btn" onclick="shareToRytmer(' + partnerIndex + ')">Del dette med ' + partnerName + '</button>' +
        '<div class="rel-soft-link" onclick="navigateToJeresEnergi()">Se jeres forskydning p\u00e5 en anden dato \u2192</div>';
    } else {
      actEl.innerHTML =
        '<div style="height:32px;"></div>' +
        '<div class="rel-add-person" onclick="App.loadScreen(\'relationer\')">' +
          '<div class="rel-add-person__main">+ Tilf\u00f8j din partner</div>' +
          '<div class="rel-add-person__sub">Se jeres personlige forskydning</div>' +
        '</div>';
    }
  }
}

function generateForskydningText(userPhase, partnerPhase, userAge, partnerAge, partnerName) {
  var userEl = ELEMENT_LABELS[userPhase.element];
  var partnerEl = ELEMENT_LABELS[partnerPhase.element];

  if (userPhase.element === partnerPhase.element) {
    return 'I er begge i ' + userEl + '-energi lige nu. Det er sj\u00e6ldent \u2014 I har f\u00e6lles grund under f\u00f8dderne. Brug det til de samtaler, der kr\u00e6ver ro.';
  }

  var userYearsIn = userAge - userPhase.startAge;
  var partnerYearsIn = partnerAge - partnerPhase.startAge;

  if (userYearsIn > partnerYearsIn + 2) {
    return 'Du gik ind i din ' + userEl + '-fase f\u00f8r ' + partnerName + ' n\u00e5ede sin ' + partnerEl + '-fase. Det kan betyde, at du f\u00f8ler dig mere afklaret, mens han stadig leder. T\u00e5lmodighed kan v\u00e6re n\u00f8glen.';
  } else if (partnerYearsIn > userYearsIn + 2) {
    return partnerName + ' har v\u00e6ret i sin ' + partnerEl + '-fase l\u00e6ngere end du i din ' + userEl + '-fase. Han kan m\u00e5ske vise vej i noget af det, du f\u00f8rst nu m\u00e6rker.';
  }

  return 'Jeres cyklusser l\u00f8ber t\u00e6t lige nu. ' + userEl + ' m\u00f8der ' + partnerEl + ' \u2014 m\u00e6rk efter, hvordan de to energier p\u00e5virker hverdagen mellem jer.';
}

function generateToRytmerInsight(userPhase, partnerPhase, userAge, partnerAge, partnerName) {
  var userEl = ELEMENT_LABELS[userPhase.element];
  var partnerEl = ELEMENT_LABELS[partnerPhase.element];
  var userYearsLeft = Math.max(0, userPhase.endAge - userAge);
  var partnerYearsLeft = Math.max(0, partnerPhase.endAge - partnerAge);
  var nextShift = Math.min(userYearsLeft, partnerYearsLeft);

  var text = '';
  if (userPhase.element === partnerPhase.element) {
    text = 'I er begge i en ' + userEl.toLowerCase() + 'n\u00e6r fase \u2014 det giver f\u00e6lles resonans. ';
  } else {
    text = 'Du er i ' + userEl + ', ' + partnerName + ' er i ' + partnerEl + '. ';
  }

  if (nextShift <= 1) {
    text += 'En af jer er t\u00e6t p\u00e5 et faseskift. V\u00e6r opm\u00e6rksom p\u00e5, at dynamikken mellem jer kan \u00e6ndre sig snart.';
  } else if (nextShift <= 3) {
    text += 'Om ca. ' + Math.round(nextShift) + ' \u00e5r skifter en af jer fase. Det kan bringe ny energi ind i jeres relation.';
  } else {
    text += 'I har ca. ' + Math.round(nextShift) + ' \u00e5r i jeres nuv\u00e6rende konstellation. Brug dem bevidst \u2014 denne dynamik er midlertidig.';
  }

  return text;
}

function shareToRytmer(partnerIndex) {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  if (partnerIndex < 0 || partnerIndex >= relations.length) return;
  shareWithRelation(partnerIndex);
}

function navigateToJeresEnergi() {
  App.loadScreen('mine-vinduer');
}

// ---- Tre Generationer (Niveau 2 under Mine Relationer) ----

var TRE_GEN_FORBINDELSE_TEKST = {
  // element pairs: user_element + '_' + other_element → text
  'default_arv': 'Der er en forbindelse mellem jer, som g\u00e5r dybere end ord. M\u00e6rk efter \u2014 hvad har du arvet, og hvad har du valgt selv?',
  'default_frihed': 'De to har en forbindelse, du ikke altid kan se. Lad dem m\u00f8des i deres eget tempo.',
  'default_fornyelse': 'Noget nyt vokser mellem jer. Det er hverken dit eller hendes \u2014 det er jeres.'
};

function initTreGenerationerScreen() {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var userAge = userData.birthdate ? calculateAge(userData.birthdate) : 42;
  var userPhase = calculateLifePhase(userAge);
  var userName = userData.name || 'Dig';

  // Find parent and child
  var realParent = null, realChild = null;
  for (var i = 0; i < relations.length; i++) {
    var rt = relations[i].relationType;
    if (!realParent && (rt === 'mor' || rt === 'far')) realParent = relations[i];
    if (!realChild && (rt === 'datter' || rt === 's\u00f8n')) realChild = relations[i];
  }

  var hasAll = !!(realParent && realChild);

  // Use real data or example data
  var parentAge, parentPhase, parentName, parentLabel, parentGender;
  if (realParent) {
    parentAge = calculateAge(realParent.birthdate);
    parentPhase = (realParent.gender === 'mand') ? calculateMalePhase(parentAge) : calculateLifePhase(parentAge);
    parentName = escapeHtml(realParent.name);
    parentLabel = realParent.relationType === 'mor' ? 'Din mor' : 'Din far';
    parentGender = realParent.gender;
  } else {
    parentAge = 68;
    parentPhase = calculateLifePhase(68);
    parentName = 'Din mor';
    parentLabel = 'Din mor';
    parentGender = 'kvinde';
  }

  var childAge, childPhase, childName, childLabel, childGender;
  if (realChild) {
    childAge = calculateAge(realChild.birthdate);
    childPhase = (realChild.gender === 'mand') ? calculateMalePhase(childAge) : calculateLifePhase(childAge);
    childName = escapeHtml(realChild.name);
    childLabel = realChild.relationType === 'datter' ? 'Din datter' : 'Din s\u00f8n';
    childGender = realChild.gender;
  } else {
    childAge = 18;
    childPhase = calculateLifePhase(18);
    childName = 'Din datter';
    childLabel = 'Din datter';
    childGender = 'kvinde';
  }

  // Persons column
  var persEl = document.getElementById('tre-gen-persons');
  if (persEl) {
    var exampleNotice = '';
    if (!hasAll) {
      exampleNotice = '<div class="rel-insight" style="margin-bottom:20px;">' +
        '<div class="rel-insight__label">Eksempel</div>' +
        '<div class="rel-insight__text">Nedenfor ser du et eksempel p\u00e5 Tre Generationer. Tilf\u00f8j din ' + (!realParent ? 'mor/far' : 'datter/s\u00f8n') + ' for at se jeres personlige dynamik.</div>' +
        '</div>';
    }

    var parentQuality = getElementQualityShort(parentPhase.element);
    var userQuality = getElementQualityShort(userPhase.element);
    var childQuality = getElementQualityShort(childPhase.element);

    persEl.innerHTML = exampleNotice +
      '<div class="rel-twocol rel-twocol--three">' +
        '<div class="rel-twocol__box">' +
          '<div class="rel-twocol__sub">' + parentLabel + '</div>' +
          '<div class="rel-twocol__main">' + parentName + '</div>' +
          '<div class="rel-twocol__phase">Fase ' + parentPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[parentPhase.element] + '</div>' +
          '<div class="rel-twocol__note">' + parentQuality + '</div>' +
        '</div>' +
        '<div class="rel-twocol__box">' +
          '<div class="rel-twocol__sub">Dig</div>' +
          '<div class="rel-twocol__main">' + escapeHtml(userName) + '</div>' +
          '<div class="rel-twocol__phase">Fase ' + userPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[userPhase.element] + '</div>' +
          '<div class="rel-twocol__note">' + userQuality + '</div>' +
        '</div>' +
        '<div class="rel-twocol__box">' +
          '<div class="rel-twocol__sub">' + childLabel + '</div>' +
          '<div class="rel-twocol__main">' + childName + '</div>' +
          '<div class="rel-twocol__phase">Fase ' + childPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[childPhase.element] + '</div>' +
          '<div class="rel-twocol__note">' + childQuality + '</div>' +
        '</div>' +
      '</div>';

    // Venn figure: three generations
    var vennEl = document.getElementById('tre-gen-venn');
    if (vennEl) {
      var arvText = generateForbindelseTekst(userPhase.element, parentPhase.element, 'arv', parentName);
      var frihedText = generateForbindelseTekst(parentPhase.element, childPhase.element, 'frihed', childName);
      var fornyText = generateForbindelseTekst(userPhase.element, childPhase.element, 'fornyelse', childName);

      vennEl.innerHTML = renderVennThree({
        topTitle: parentName.toUpperCase(),
        topLines: ['Fase ' + parentPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[parentPhase.element]],
        bottomLeftTitle: 'DIG',
        bottomLeftLines: ['Fase ' + userPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[userPhase.element]],
        bottomRightTitle: childName.toUpperCase(),
        bottomRightLines: ['Fase ' + childPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[childPhase.element]],
        overlapAB: 'arv',
        overlapAC: 'frihed',
        overlapBC: 'fornyelse',
        centerTitle: 'FAMILIEN',
        centerLines: [],
        elementA: parentPhase.element,
        elementB: userPhase.element,
        elementC: childPhase.element
      });
    }

    // Rolle
    var rolleEl = document.getElementById('tre-gen-rolle');
    if (rolleEl) {
      var rolleText = generateRolleText(userPhase.element, parentName, childName);
      rolleEl.innerHTML =
        '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>' +
        '<div class="rel-rolle">' +
          '<div class="rel-rolle__label">Din rolle</div>' +
          '<div class="rel-rolle__heading">Du er broen</div>' +
          '<div class="rel-rolle__text">' + rolleText + '</div>' +
        '</div>';
    }

    // De tre forbindelser
    var forbEl = document.getElementById('tre-gen-forbindelser');
    if (forbEl) {
      var forbHtml = '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>';
      forbHtml += '<h3 class="rel-section-heading">De tre forbindelser</h3>';
      forbHtml += '<p class="rel-section-subtitle">Tre b\u00e5nd binder jer sammen \u2014 arv, frihed og fornyelse. Hvert b\u00e5nd b\u00e6rer sin egen energi og sin egen invitation til at vokse n\u00e6rmere hinanden.</p>';
      forbHtml += '<div style="height:12px;"></div>';

      // Dig ↔ forælder
      forbHtml += '<div class="rel-forbindelse">';
      forbHtml += '<div class="rel-forbindelse__who">Dig \u2194 ' + parentName + ' (' + parentLabel.toLowerCase() + ')</div>';
      forbHtml += '<div class="rel-forbindelse__word">Arv</div>';
      forbHtml += '<div class="rel-forbindelse__desc">' + generateForbindelseTekst(userPhase.element, parentPhase.element, 'arv', parentName) + '</div>';
      forbHtml += '</div>';

      // Forælder ↔ barn
      forbHtml += '<div class="rel-forbindelse">';
      forbHtml += '<div class="rel-forbindelse__who">' + parentName + ' \u2194 ' + childName + ' (bedstemor og barn)</div>';
      forbHtml += '<div class="rel-forbindelse__word">Frihed</div>';
      forbHtml += '<div class="rel-forbindelse__desc">' + generateForbindelseTekst(parentPhase.element, childPhase.element, 'frihed', childName) + '</div>';
      forbHtml += '</div>';

      // Dig ↔ barn
      forbHtml += '<div class="rel-forbindelse">';
      forbHtml += '<div class="rel-forbindelse__who">Dig \u2194 ' + childName + ' (' + childLabel.toLowerCase() + ')</div>';
      forbHtml += '<div class="rel-forbindelse__word">Fornyelse</div>';
      forbHtml += '<div class="rel-forbindelse__desc">' + generateForbindelseTekst(userPhase.element, childPhase.element, 'fornyelse', childName) + '</div>';
      forbHtml += '</div>';

      forbEl.innerHTML = forbHtml;
    }

    // Future insight + actions
    var tidEl = document.getElementById('tre-gen-tid');
    if (tidEl) {
      var futureYears = 7;
      var futureUserPhase = calculateLifePhase(userAge + futureYears);
      var futureParentPhase = (parentGender === 'mand') ? calculateMalePhase(parentAge + futureYears) : calculateLifePhase(parentAge + futureYears);
      var futureChildPhase = (childGender === 'mand') ? calculateMalePhase(childAge + futureYears) : calculateLifePhase(childAge + futureYears);

      var futureText = childName + ' vil v\u00e6re i Fase ' + futureChildPhase.phase + ' (' + ELEMENT_LABELS[futureChildPhase.element] + '), ' +
        'du i Fase ' + futureUserPhase.phase + ' (' + ELEMENT_LABELS[futureUserPhase.element] + '), ' +
        'og ' + parentName + ' i Fase ' + futureParentPhase.phase + ' (' + ELEMENT_LABELS[futureParentPhase.element] + '). ' +
        'Forbered dig p\u00e5, at rollerne \u00e6ndrer sig.';

      tidEl.innerHTML =
        '<div class="rel-dots">\u00B7 \u00B7 \u00B7</div>' +
        '<h2 class="rejse__t2">Om ' + futureYears + ' \u00e5r</h2>' +
        '<p class="rejse__intr">Tiden \u00e6ndrer alt \u2014 ogs\u00e5 rollerne mellem jer. Om ' + futureYears + ' \u00e5r vil I alle tre st\u00e5 i nye faser med ny energi. Her kan du forberede dig p\u00e5 det der kommer.</p>' +
        '<div class="rel-insight">' +
          '<div class="rel-insight__text">' + futureText + '</div>' +
        '</div>' +
        '<div class="rel-soft-link" onclick="navigateToJeresEnergi()">Se jeres tre generationer p\u00e5 en anden dato \u2192</div>';
      if (!hasAll) {
        tidEl.innerHTML += '<div style="height:20px;"></div>' +
          '<div class="rel-add-person" onclick="App.loadScreen(\'relationer\')">' +
            '<div class="rel-add-person__main">+ Tilf\u00f8j ' + (!realParent ? 'for\u00e6lder' : 'barn') + '</div>' +
            '<div class="rel-add-person__sub">Se jeres personlige tre generationer</div>' +
          '</div>';
      }
      // Generic footer adds "Tilbage til toppen"
    }
  }
}

function getElementQualityShort(element) {
  var qualities = {
    'VAND': 'Dybde, ro',
    'TR\u00C6': 'V\u00e6kst, identitet',
    'ILD': 'Passion, forbindelse',
    'JORD': 'Balance, ansvar',
    'METAL': 'Visdom, slip'
  };
  return qualities[element] || '';
}

function generateRolleText(userElement, parentName, childName) {
  var texts = {
    'VAND': 'Du holder forbindelsen mellem ' + parentName + 's visdom og ' + childName + 's v\u00e6kst med stilhed og dybde. Vand b\u00e6rer begge \u2014 men husk ogs\u00e5 at fylde op i dig selv.',
    'TR\u00C6': 'Din v\u00e6kst tr\u00e6kker b\u00e5de opad mod ' + parentName + ' og nedad mod ' + childName + '. Tr\u00e6et er broen \u2014 men det har brug for r\u00f8dder. Tag tid til at st\u00e5 stille.',
    'ILD': 'Du brænder lyst nok til at varme b\u00e5de ' + parentName + ' og ' + childName + '. Men ild kan udbrænde. Giv dig selv lov til at dæmpe flammen indimellem.',
    'JORD': 'Du holder forbindelsen mellem ' + parentName + 's visdom og ' + childName + 's v\u00e6kst. Det er en stor opgave \u2014 og den kr\u00e6ver, at du ogs\u00e5 passer p\u00e5 dig selv.',
    'METAL': 'Du ser klarere end de fleste, hvad der er essentielt mellem generationerne. Brug din klarhed til at sortere \u2014 men slip ogs\u00e5 kontrollen en gang imellem.'
  };
  return texts[userElement] || texts['JORD'];
}

function generateForbindelseTekst(element1, element2, theme, otherName) {
  var interaction = ELEMENT_INTERACTIONS[element1 + '_' + element2];
  if (!interaction) interaction = { type: 'm\u00f8des', text: 'Jeres elementer m\u00f8des i en unik konstellation.' };

  var el1Label = ELEMENT_LABELS[element1];
  var el2Label = ELEMENT_LABELS[element2];

  if (theme === 'arv') {
    if (interaction.type === 'n\u00e6rer') return el1Label + ' n\u00e6rer ' + el2Label + '. Der er noget i jer, der flyder naturligt \u2014 en arv af omsorg, der g\u00e5r dybere end ord.';
    if (interaction.type === 'udfordrer') return el1Label + ' m\u00f8der ' + el2Label + '. Jeres energier gnider \u2014 men i den gnidning ligger ogs\u00e5 vækst og forsoning.';
    if (interaction.type === 'spejler') return el1Label + ' m\u00f8der ' + el1Label + '. I deler samme dybde \u2014 det giver genklang, men ogs\u00e5 blinde vinkler. Se hinanden.';
    return el1Label + ' og ' + el2Label + ' m\u00f8des mellem jer. M\u00e6rk efter \u2014 hvad har du arvet, og hvad har du valgt selv?';
  }
  if (theme === 'frihed') {
    if (element1 === element2) return 'De to deler en stille forbindelse p\u00e5 tv\u00e6rs af generationerne. Lad dem m\u00f8des i deres eget tempo.';
    return el1Label + ' og ' + el2Label + ' kan tale sammen hen over generationerne \u2014 lad dem. Der er en frihed i det springende led.';
  }
  if (theme === 'fornyelse') {
    if (interaction.type === 'udfordrer' || interaction.type === 'udfordres') return el2Label + ' bryder gennem ' + el1Label + ' for at vokse. ' + otherName + 's opr\u00f8r er ikke afvisning \u2014 det er livskraft. Giv plads og hold fast p\u00e5 samme tid.';
    if (interaction.type === 'n\u00e6rer') return el1Label + ' n\u00e6rer ' + el2Label + '. Du giver plads til noget nyt \u2014 og det er m\u00e5ske det vigtigste du kan g\u00f8re.';
    return 'Noget nyt vokser mellem jer. Det er hverken dit eller ' + otherName + 's \u2014 det er jeres.';
  }
  return interaction.text.replace(/\{pron\}/g, 'hendes').replace(/\{navn\}/g, otherName);
}

// ---- Niveau 1: Mine Cyklusser ----

function renderMcThreeCircleSvg(d) {
  // Tre-cirkel SVG: LIVSFASE / ÅRSTID / CYKLUS med DIT KRYDSFELT i centrum
  var phaseLabel = 'Fase ' + d.lifePhase.phase + ' \u00B7 ' + d.lifePhase.name;
  var seasonLabel = d.season.season + ' \u00B7 ' + ELEMENT_LABELS[d.season.element];
  var cyclusLabel = (d.monthCycle.data.name || d.monthCycle.data.phase || '') + ' \u00B7 ' + ELEMENT_LABELS[d.monthCycle.data.element];

  var svg = '<svg width="280" height="240" xmlns="http://www.w3.org/2000/svg">';
  // Top circle (LIVSFASE)
  svg += '<circle cx="140" cy="80" r="72" fill="rgba(118,144,193,0.08)" stroke="rgba(118,144,193,0.2)" stroke-width="1"/>';
  // Bottom-left circle (ÅRSTID)
  svg += '<circle cx="85" cy="168" r="72" fill="rgba(118,144,193,0.06)" stroke="rgba(118,144,193,0.18)" stroke-width="1"/>';
  // Bottom-right circle (CYKLUS)
  svg += '<circle cx="195" cy="168" r="72" fill="rgba(118,144,193,0.06)" stroke="rgba(118,144,193,0.18)" stroke-width="1"/>';
  // Labels
  svg += '<text x="140" y="50" font-family="\'Cormorant Garamond\',serif" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">LIVSFASE</text>';
  svg += '<text x="140" y="66" font-family="\'Cormorant Garamond\',serif" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">' + phaseLabel + '</text>';
  svg += '<text x="60" y="190" font-family="\'Cormorant Garamond\',serif" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">\u00c5RSTID</text>';
  svg += '<text x="60" y="206" font-family="\'Cormorant Garamond\',serif" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">' + seasonLabel + '</text>';
  svg += '<text x="220" y="190" font-family="\'Cormorant Garamond\',serif" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5" font-weight="600">CYKLUS</text>';
  svg += '<text x="220" y="206" font-family="\'Cormorant Garamond\',serif" font-size="10" fill="#7690C1" font-style="italic" text-anchor="middle">' + cyclusLabel + '</text>';
  // Overlap labels
  svg += '<text x="100" y="112" font-family="\'Cormorant Garamond\',serif" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">tid \u00B7 natur</text>';
  svg += '<text x="180" y="112" font-family="\'Cormorant Garamond\',serif" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">tid \u00B7 krop</text>';
  svg += '<text x="140" y="192" font-family="\'Cormorant Garamond\',serif" font-size="8" fill="#7690C1" font-style="italic" text-anchor="middle">natur \u00B7 krop</text>';
  // Center
  svg += '<text x="140" y="132" font-family="\'Cormorant Garamond\',serif" font-size="13" fill="#5A74A5" font-weight="600" text-anchor="middle">DIT</text>';
  svg += '<text x="140" y="148" font-family="\'Cormorant Garamond\',serif" font-size="11" fill="#5A74A5" text-anchor="middle" letter-spacing="1">KRYDSFELT</text>';
  svg += '</svg>';
  return svg;
}

function generateMcInsightText(d) {
  // Dynamisk indsigt-boks tekst baseret på aktive elementer
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var dominant = '';
  var maxCount = 0;
  for (var el in counts) {
    if (counts[el] > maxCount) { maxCount = counts[el]; dominant = el; }
  }
  var elLabel = ELEMENT_LABELS[dominant] || dominant;

  if (maxCount >= 4) {
    return 'Fire af dine fem cyklusser peger mod ' + elLabel + '. Du er i en periode med dyb resonans \u2014 din livsfase, \u00e5rstiden og din m\u00e5nedscyklus synger sammen. M\u00e5ske kan du m\u00e6rke det som en stille ro, der ikke beh\u00f8ver forklaring.';
  } else if (maxCount === 3) {
    return 'Tre af dine cyklusser peger mod ' + elLabel + '. Der er en tydelig retning i din energi lige nu \u2014 en str\u00f8m du kan l\u00e6ne dig ind i, selvom ikke alt f\u00f8lger med.';
  } else if (maxCount === 2) {
    return 'Dine cyklusser peger i flere retninger. Der er dynamik og sp\u00e6nding mellem dine elementer \u2014 det kan f\u00f8les som kreativ uro eller indre dialog.';
  } else {
    return 'Hvert af dine fem cyklusser b\u00e6rer sit eget element. Du st\u00e5r i et rigt og komplekst krydsfelt \u2014 mange kr\u00e6fter, mange muligheder.';
  }
}

function renderMcNavCard(title, desc, arrowText, screen) {
  var html = '<div class="mc__nav-card" onclick="App.loadScreen(\'' + screen + '\')">';
  html += '<h3>' + title + '</h3>';
  html += '<p>' + desc + '</p>';
  html += '<div class="mc__nav-arrow">' + arrowText + '</div>';
  html += '</div>';
  return html;
}

// ---- Krydslinks (UDFORSK MERE) ----

var KRYDS_DATA = {
  'mine-cyklusser': { title: 'Mine Cyklusser', color: 'rgba(118,144,193,0.08)', border: 'rgba(118,144,193,0.18)', textColor: '#5A74A5', desc: 'Dine fem cyklusser og livets store overgange' },
  'mine-relationer': { title: 'Mine Relationer', color: 'rgba(184,166,192,0.08)', border: 'rgba(184,166,192,0.18)', textColor: '#8B6F9B', desc: 'Se hvordan dine faser m\u00f8der dem du holder af' },
  'min-praksis': { title: 'Min Praksis', color: 'rgba(139,154,157,0.08)', border: 'rgba(139,154,157,0.18)', textColor: '#6B7F82', desc: 'Yoga, kost, \u00e5ndedræt og f\u00f8lelsesarbejde' },
  'min-rejse': { title: 'Min Rejse', color: 'rgba(139,125,155,0.06)', border: 'rgba(139,125,155,0.14)', textColor: '#6B5F7B', desc: 'Tracking, journal og din udvikling over tid' },
  'mine-vinduer': { title: 'Mine Vinduer', color: 'rgba(107,95,123,0.08)', border: 'rgba(107,95,123,0.18)', textColor: '#6B5F7B', desc: 'Rejse i tid \u2014 alene eller med nogen' }
};

function renderKrydslinks(excludeScreen) {
  var targets = {
    'mine-cyklusser': ['min-praksis', 'mine-relationer', 'mine-vinduer'],
    'mine-relationer': ['mine-cyklusser', 'min-praksis', 'mine-vinduer'],
    'min-praksis': ['mine-cyklusser', 'mine-relationer', 'mine-vinduer'],
    'min-rejse': ['mine-cyklusser', 'min-praksis', 'mine-vinduer']
  };
  var links = targets[excludeScreen] || [];
  if (links.length === 0) return '';

  var html = '<div class="krydslinks">';
  html += '<div class="krydslinks__label">UDFORSK MERE</div>';
  html += '<div class="krydslinks__grid">';
  for (var i = 0; i < links.length; i++) {
    var k = KRYDS_DATA[links[i]];
    if (!k) continue;
    html += '<div class="krydslinks__card" style="background:' + k.color + ';border:1px solid ' + k.border + '" onclick="App.loadScreen(\'' + links[i] + '\')">';
    html += '<div class="krydslinks__card-title" style="color:' + k.textColor + '">' + k.title + '</div>';
    html += '<div class="krydslinks__card-desc">' + k.desc + '</div>';
    html += '</div>';
  }
  html += '</div></div>';
  return html;
}

function initMineCyklusserScreen() {
  ensureIdagData();
  var d = window._idagData;

  // Tre-cirkel SVG
  var figEl = document.getElementById('mc-venn-fig');
  if (figEl && d) {
    figEl.innerHTML = renderMcThreeCircleSvg(d);
  }

  // Indsigt-boks
  var insEl = document.getElementById('mc-indsigt');
  if (insEl && d) {
    var insHtml = '<div class="mc__ins">';
    insHtml += '<div class="mc__ins-label">DINE CYKLUSSER LIGE NU</div>';
    insHtml += '<div class="mc__ins-text">' + generateMcInsightText(d) + '</div>';
    insHtml += '</div>';
    insEl.innerHTML = insHtml;
  }

  // Forstå dine rytmer (3 kort)
  var rytmerEl = document.getElementById('mc-group-rytmer');
  if (rytmerEl) {
    var h = '';
    h += renderMcNavCard('Cyklusser i Cyklusser', 'De fem samtidige cyklusser der former dit liv \u2014 fra livets store bue til d\u00f8gnets puls. Se dem alle p\u00e5 \u00e9n gang.', 'Se blomsten \u2192', 'cyklusser-i-cyklusser');
    h += renderMcNavCard('Dine cyklusser lige nu', 'Hvilke elementer dominerer i dag? Er du i medvind eller modvind? Den dybe analyse af dit \u00f8jeblik.', 'Se dit samspil \u2192', 'dine-cyklusser-lige-nu');
    h += renderMcNavCard('Din energi p\u00e5 en anden dag', 'Rejs tilbage i din egen historie \u2014 eller se hvad der venter forude. V\u00e6lg en dag og se dine cyklusser dengang.', '\u00c5bn Tidsvinduet \u2192', 'din-energi');
    rytmerEl.innerHTML = h;
  }

  // Kroppen og tiden (1 kort)
  var kroppenEl = document.getElementById('mc-group-kroppen');
  if (kroppenEl) {
    kroppenEl.innerHTML = renderMcNavCard('Kroppens store overgange', 'Fra pubertetens Tr\u00e6-energi til overgangsalderens Metal \u2014 din krop gennemg\u00e5r vendepunkter der \u00e6ndrer alt.', 'Se dine overgange \u2192', 'kroppens-store-overgange');
  }

  // Livets kapitler (2 kort)
  var kapitlerEl = document.getElementById('mc-group-kapitler');
  if (kapitlerEl) {
    var k = '';
    k += renderMcNavCard('De Ni Livsfaser', 'Ni syv-\u00e5rs cyklusser fra f\u00f8dsel til visdom. Udforsk hver fase i dybden \u2014 krop, sind, element og anbefalinger.', 'Udforsk faserne \u2192', 'de-ni-livsfaser');
    k += renderMcNavCard('De Fire Uger', 'Din m\u00e5nedscyklus udfoldet \u2014 fire uger, fire elementer, fire kvaliteter af energi. Se hvor du er lige nu.', 'Se din m\u00e5ned \u2192', 'de-fire-uger');
    kapitlerEl.innerHTML = k;
  }

  // Krydslinks
  var content = document.getElementById('screen-content');
  if (content) {
    var krydsDiv = document.createElement('div');
    krydsDiv.innerHTML = renderKrydslinks('mine-cyklusser');
    content.appendChild(krydsDiv);
  }
}

// ---- Niveau 1: Mine Relationer ----

function initMineRelationerScreen() {
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  ensureIdagData();
  var d = window._idagData;
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var userAge = userData.birthdate ? calculateAge(userData.birthdate) : 0;
  var userPhase = d ? d.lifePhase : calculateLifePhase(userAge);
  var userEl = userPhase.element;

  // ---- Venn diagram: DIG / MØDET / DIN NÆRMESTE ----
  var vennEl = document.getElementById('mine-relationer-venn');
  if (vennEl) {
    var nearestEl = 'default';
    var nearestName = 'din n\u00e6rmeste';
    if (relations.length > 0) {
      var nr = relations[0];
      var nrAge = calculateAge(nr.birthdate);
      var nrPhase = (nr.gender === 'mand') ? calculateMalePhase(nrAge) : calculateLifePhase(nrAge);
      nearestEl = nrPhase.element;
      nearestName = nr.name || 'din n\u00e6rmeste';
    }
    vennEl.innerHTML = renderVennTwo({
      leftTitle: 'DIG',
      leftLines: [
        'Fase ' + userPhase.phase + ' \u00B7 ' + ELEMENT_LABELS[userEl]
      ],
      rightTitle: 'DIN N\u00c6RMESTE',
      rightLines: [
        nearestEl !== 'default' ? ELEMENT_LABELS[nearestEl] : 'Tilf\u00f8j en relation'
      ],
      overlapTitle: 'M\u00d8DET',
      overlapLines: [
        'faser \u00B7 elementer',
        '*rytme \u00B7 tid'
      ],
      leftElement: userEl,
      rightElement: nearestEl !== 'default' ? nearestEl : undefined
    });
  }

  // ---- Person circles ----
  var profilEl = document.getElementById('mine-relationer-profiler');
  if (profilEl) {
    var profilHtml = '<div class="tema__profil-row">';
    // Add "Dig" first
    profilHtml += '<div class="tema__profil">';
    profilHtml += '<div class="tema__profil-circle" style="background:#7B6E9A;">F' + userPhase.phase + '</div>';
    profilHtml += '<p class="tema__profil-name">Dig</p>';
    profilHtml += '<p class="tema__profil-meta">' + ELEMENT_LABELS[userEl] + '</p>';
    profilHtml += '</div>';
    for (var i = 0; i < relations.length; i++) {
      var r = relations[i];
      var rAge = calculateAge(r.birthdate);
      var rPhase = (r.gender === 'mand') ? calculateMalePhase(rAge) : calculateLifePhase(rAge);
      var phaseLabel = (r.gender === 'mand') ? rPhase.phase + '.' : 'F' + rPhase.phase;
      profilHtml += '<div class="tema__profil" onclick="navigateToRelationDetail(' + i + ')">';
      profilHtml += '<div class="tema__profil-circle">' + phaseLabel + '</div>';
      profilHtml += '<p class="tema__profil-name">' + escapeHtml(r.name) + '</p>';
      profilHtml += '<p class="tema__profil-meta">' + ELEMENT_LABELS[rPhase.element] + '</p>';
      profilHtml += '</div>';
    }
    profilHtml += '<div class="tema__profil" onclick="App.loadScreen(\'relationer\')">';
    profilHtml += '<div class="tema__profil-circle tema__profil-circle--add">+</div>';
    profilHtml += '<p class="tema__profil-name">Tilf\u00f8j</p>';
    profilHtml += '</div>';
    profilHtml += '</div>';
    profilEl.innerHTML = profilHtml;
  }

  // ---- Dynamic insight box ----
  var kontekstEl = document.getElementById('mine-relationer-kontekst');
  if (kontekstEl) {
    if (relations.length > 0) {
      var primaryR = relations[0];
      var prAge = calculateAge(primaryR.birthdate);
      var prPhase = (primaryR.gender === 'mand') ? calculateMalePhase(prAge) : calculateLifePhase(prAge);
      var interaction = getElementInteraction(userEl, prPhase.element, primaryR.name, primaryR.gender);
      kontekstEl.innerHTML = '<div class="rel-insight">' +
        '<div class="rel-insight__label">Lige nu</div>' +
        '<div class="rel-insight__text">' + interaction.text + '</div>' +
        '</div>';
    } else {
      kontekstEl.innerHTML = '';
    }
  }

  // ---- Section: Lige nu ----
  var ligeNuEl = document.getElementById('mine-relationer-lige-nu');
  if (ligeNuEl) {
    var h = '';
    h += renderRelNavCard('relationer', 'Relationer lige nu',
      'V\u00e6lg en person og se jeres dynamik \u2014 hvor I m\u00f8des, hvor I kolliderer, og hvad det kalder p\u00e5.',
      'Se jeres dynamik \u2192');
    h += renderRelNavCard('relationer', 'N\u00e5r faser m\u00f8des',
      'Fire m\u00f8dem\u00f8nstre \u2014 n\u00e6rende, regulerende, parallelt, modsat. Hvilket pr\u00e6ger jeres relation lige nu?',
      'Se m\u00f8nstret \u2192');
    ligeNuEl.innerHTML = h;
  }

  // ---- Section: Gå i dybden ----
  var dybdenEl = document.getElementById('mine-relationer-dybden');
  if (dybdenEl) {
    var h2 = '';
    // To Rytmer — only if user has a male partner
    var hasPartner = relations.some(function(r) { return r.gender === 'mand' && (r.relationType === 'partner' || r.relationType === 'mand'); });
    h2 += renderRelNavCard('to-rytmer', 'To Rytmer',
      'Hendes syv \u00e5r, hans otte. Se forskydningen mellem jer og hvad den betyder.',
      'Se jeres rytmer \u2192',
      !hasPartner);
    // Tre Generationer
    var hasParent = relations.some(function(r) { return r.relationType === 'mor' || r.relationType === 'far'; });
    var hasChild = relations.some(function(r) { return r.relationType === 'datter' || r.relationType === 's\u00f8n'; });
    var hasThreeGen = hasParent && hasChild;
    h2 += renderRelNavCard('tre-generationer', 'Tre Generationer',
      'Bedstemor, mor, datter \u2014 tre faser, tre energier. Og du i midten.',
      'Se jeres generationer \u2192',
      !hasThreeGen);
    dybdenEl.innerHTML = h2;
  }

  // ---- Section: Over tid ----
  var tidEl = document.getElementById('mine-relationer-tid');
  if (tidEl) {
    tidEl.innerHTML = renderRelNavCard('jeres-energi', 'Jeres energi p\u00e5 en anden dag',
      'V\u00e6lg en dato og se hvordan I m\u00f8dtes dengang \u2014 eller vil m\u00f8des i fremtiden.',
      'V\u00e6lg en dag \u2192');
  }

  // ---- Tilføj person ----
  var tilfoejEl = document.getElementById('mine-relationer-tilfoej');
  if (tilfoejEl) {
    tilfoejEl.innerHTML = '<div class="rel-add-person" onclick="App.loadScreen(\'relationer\')">' +
      '<div class="rel-add-person__main">+ Tilf\u00f8j person</div>' +
      '<div class="rel-add-person__sub">Partner, barn, for\u00e6lder, veninde...</div>' +
      '</div>';
  }

  // Krydslinks
  var content = document.getElementById('screen-content');
  if (content) {
    var krydsDiv = document.createElement('div');
    krydsDiv.innerHTML = renderKrydslinks('mine-relationer');
    content.appendChild(krydsDiv);
  }
}

function renderRelNavCard(screen, title, desc, arrowText, disabled) {
  var opacity = disabled ? ' style="opacity:0.45;pointer-events:none;"' : '';
  var html = '<div class="rel-nav-card" onclick="App.loadScreen(\'' + screen + '\')"' + opacity + '>';
  html += '<div class="rel-nav-card__title">' + title + '</div>';
  html += '<div class="rel-nav-card__desc">' + desc + '</div>';
  html += '<div class="rel-nav-card__arrow">' + arrowText + '</div>';
  html += '</div>';
  return html;
}

// ---- Niveau 1: Min Praksis ----

// "Lige nu" tekster for Min Praksis — per element
var PRAKSIS_LIGE_NU = {
  'VAND': 'Vand-elementet pr\u00e6ger din dag. Kroppen kalder p\u00e5 langsomhed, varme og dybde. Nyrerne og bl\u00e6ren har brug for din opm\u00e6rksomhed \u2014 de b\u00e6rer din grundl\u00e6ggende livskraft.',
  'TR\u00c6': 'Tr\u00e6-elementet pr\u00e6ger din dag. Kroppen kalder p\u00e5 bev\u00e6gelse, str\u00e6k og fri flow. Leveren og galdebl\u00e6ren har brug for din opm\u00e6rksomhed \u2014 de b\u00e6rer din retningssans og vilje.',
  'ILD': 'Ild-elementet pr\u00e6ger din dag. Kroppen kalder p\u00e5 forbindelse, gl\u00e6de og udtryk. Hjertet og tyndtarmen har brug for din opm\u00e6rksomhed \u2014 de b\u00e6rer din evne til n\u00e6rv\u00e6r.',
  'JORD': 'Jord-elementet pr\u00e6ger din dag. Kroppen kalder p\u00e5 n\u00e6ring, stabilitet og omsorg. Milten og maven har brug for din opm\u00e6rksomhed \u2014 de b\u00e6rer din evne til at tage imod.',
  'METAL': 'Metal-elementet pr\u00e6ger din dag. Kroppen kalder p\u00e5 klarhed, ro og slip. Lungerne og tyktarmen har brug for din opm\u00e6rksomhed \u2014 de b\u00e6rer din evne til at give slip.'
};

function renderMinPraksisFigur() {
  return '<div class="praksis__figur">' +
    '<svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">' +
    // Center: DIN KROP
    '<circle cx="140" cy="140" r="40" fill="#8B9A9D" fill-opacity="0.15" stroke="#8B9A9D" stroke-opacity="0.25" stroke-width="1"/>' +
    '<text x="140" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#555" font-family="' + VENN_FONT + '">DIN KROP</text>' +
    '<text x="140" y="150" text-anchor="middle" font-size="10" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">lige nu</text>' +
    // Top: YIN YOGA
    '<circle cx="140" cy="42" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="140" y="38" text-anchor="middle" font-size="10" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">YIN</text>' +
    '<text x="140" y="50" text-anchor="middle" font-size="10" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">YOGA</text>' +
    // Top-right: VEJRTRÆKNING
    '<circle cx="233" cy="88" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="233" y="85" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">VEJR-</text>' +
    '<text x="233" y="96" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">TR\u00c6KNING</text>' +
    // Bottom-right: MERIDIAN & EFT
    '<circle cx="233" cy="192" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="233" y="189" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">MERIDIAN</text>' +
    '<text x="233" y="200" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">& EFT</text>' +
    // Bottom: KOST & URTER
    '<circle cx="140" cy="238" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="140" y="234" text-anchor="middle" font-size="10" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">KOST</text>' +
    '<text x="140" y="246" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">& URTER</text>' +
    // Bottom-left: FØLELSERNE
    '<circle cx="47" cy="192" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="47" y="188" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">F\u00d8LEL-</text>' +
    '<text x="47" y="199" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">SERNE</text>' +
    // Top-left: REFLEKSION
    '<circle cx="47" cy="88" r="30" fill="#8B9A9D" fill-opacity="0.08" stroke="#8B9A9D" stroke-opacity="0.15" stroke-width="1"/>' +
    '<text x="47" y="84" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">REFLEK-</text>' +
    '<text x="47" y="95" text-anchor="middle" font-size="9" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">SION</text>' +
    // Lines from center to each outer circle
    '<line x1="140" y1="100" x2="140" y2="72" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="172" y1="112" x2="207" y2="92" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="172" y1="168" x2="207" y2="188" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="140" y1="180" x2="140" y2="208" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="108" y1="168" x2="73" y2="188" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="108" y1="112" x2="73" y2="92" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '</svg>' +
    '</div>';
}

function renderPraksisCard(title, desc, link, onclick) {
  return '<div class="praksis__card" onclick="' + onclick + '">' +
    '<h3 class="praksis__card-title">' + title + '</h3>' +
    '<p class="praksis__card-desc">' + desc + '</p>' +
    '<div class="praksis__card-link">' + link + '</div>' +
    '</div>';
}

function initMinPraksisScreen() {
  var figurEl = document.getElementById('min-praksis-figur');
  var indsigtEl = document.getElementById('min-praksis-indsigt');
  var sektionerEl = document.getElementById('min-praksis-sektioner');
  if (!sektionerEl) return;

  ensureIdagData();
  var elements = window._activeElements || [];
  var insight = generateInsight(elements);
  var primaryEl = insight.dominantElement;

  // 1. SVG Cirkeldiagram
  if (figurEl) {
    figurEl.innerHTML = renderMinPraksisFigur();
  }

  // 2. "Lige nu" indsigt-boks
  if (indsigtEl) {
    var ligeNuTekst = PRAKSIS_LIGE_NU[primaryEl] || PRAKSIS_LIGE_NU['VAND'];
    indsigtEl.innerHTML =
      '<div class="praksis__indsigt">' +
      '<div class="praksis__indsigt-label">Lige nu</div>' +
      '<div class="praksis__indsigt-text">' + ligeNuTekst + '</div>' +
      '</div>';
  }

  // 3. Alle sektioner med nav-kort
  var html = '';

  // --- Krop og bevægelse ---
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Krop og bev\u00e6gelse</h3>';
  html += '<p class="praksis__section-intro">\u00d8velser der st\u00f8tter dit element lige nu. Fra yin yoga til vejrtr\u00e6kning \u2014 din krop ved hvad den har brug for, n\u00e5r du giver den de rette stillinger.</p>';
  html += renderPraksisCard(
    'Yin Yoga',
    'Dybe stillinger der arbejder med bindev\u00e6vet og meridianerne. V\u00e6lg dit element og find de positioner, der st\u00f8tter dig.',
    'Se stillinger \u2192',
    "App.loadScreen('yin-yoga')"
  );
  html += renderPraksisCard(
    'Meridianstrygning',
    'Blide str\u00f8g langs kroppens energibaner. F\u00e5 energien til at flyde \u2014 p\u00e5 f\u00e5 minutter, hvor som helst.',
    'Se meridianerne \u2192',
    "App.loadScreen('samlede-indsigt')"
  );
  html += renderPraksisCard(
    'Fod Yoga',
    'F\u00f8dderne rummer et kort over hele kroppen. V\u00e6k dem \u2014 og v\u00e6k forbindelsen til nuet.',
    'Se \u00f8velser \u2192',
    "App.loadScreen('samlede-indsigt')"
  );

  // --- Åndedræt og sind ---
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">\u00c5ndedr\u00e6t og sind</h3>';
  html += '<p class="praksis__section-intro">N\u00e5r f\u00f8lelserne fylder eller du har brug for ro, kan \u00e5ndedr\u00e6ttet v\u00e6re vejen ind. Her finder du refleksioner og \u00f8velser der bringer sindet i balance.</p>';
  html += renderPraksisCard(
    'Vejrtr\u00e6kning',
    '\u00c5ndedr\u00e6ttet er altid tilg\u00e6ngeligt og p\u00e5virker nervesystemet direkte. Start her, hvis du ikke ved, hvad du har brug for.',
    'Find din vejrtr\u00e6kning \u2192',
    "App.loadScreen('samlede-indsigt')"
  );
  html += renderPraksisCard(
    'EFT Tapping',
    'Banken p\u00e5 akupunkturpunkter kombineret med ord. S\u00e6rligt effektivt n\u00e5r noget bestemt tynger dig.',
    'Pr\u00f8v en sekvens \u2192',
    "App.loadScreen('samlede-indsigt')"
  );
  html += renderPraksisCard(
    'Refleksion',
    'Sp\u00f8rgsm\u00e5l tilpasset din fase og dit element. Lad dem synke ind \u2014 du beh\u00f8ver ikke svare p\u00e5 dem alle.',
    'Find et sp\u00f8rgsm\u00e5l \u2192',
    "App.loadScreen('refleksion')"
  );

  // --- Næring ---
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">N\u00e6ring</h3>';
  html += '<p class="praksis__section-intro">Mad og urter der st\u00f8tter dit element indefra. Den rette n\u00e6ring kan \u00e5bne for energi du ikke vidste du havde \u2014 kroppen responderer n\u00e5r den f\u00e5r det den mangler.</p>';
  html += renderPraksisCard(
    'Kost & Urter',
    'F\u00f8devarer og urter fra den kinesiske og den indiske tradition, tilpasset dit element og din fase.',
    'Se anbefalinger \u2192',
    "App.loadScreen('kost-urter')"
  );

  // --- Følelserne ---
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">F\u00f8lelserne</h3>';
  html += '<p class="praksis__section-intro">Alle f\u00f8lelser h\u00f8rer til et element og et organpar. N\u00e5r du forst\u00e5r hvor f\u00f8lelsen kommer fra, kan du m\u00f8de den med omsorg i stedet for modstand.</p>';
  html += renderPraksisCard(
    'F\u00f8lelsernes Hjul',
    'Frygt, vrede, gl\u00e6de, bekymring, sorg \u2014 se hvor dine f\u00f8lelser bor i kroppen, og hvad de fort\u00e6ller dig.',
    'Udforsk dine f\u00f8lelser \u2192',
    "App.loadScreen('foelelser')"
  );

  // --- Fællesskab ---
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">F\u00e6llesskab</h3>';
  html += '<p class="praksis__section-intro">Anonyme erfaringer fra kvinder i samme situation som dig. Der er en s\u00e6rlig styrke i at vide at andre har g\u00e5et den samme vej og fundet noget der virker.</p>';
  html += renderPraksisCard(
    'Hvad har hjulpet andre',
    'Se hvad kvinder i din livsfase og med dit element anbefaler. Del dine egne erfaringer anonymt.',
    'Se erfaringer \u2192',
    "App.loadScreen('hvad-har-hjulpet')"
  );

  sektionerEl.innerHTML = html;

  // Krydslinks
  var content = document.getElementById('screen-content');
  if (content) {
    var krydsDiv = document.createElement('div');
    krydsDiv.innerHTML = renderKrydslinks('min-praksis');
    content.appendChild(krydsDiv);
  }
}

// ---- Niveau 1: Min Rejse ----

function initMinRejseScreen() {
  var el = document.getElementById('min-rejse-content');
  if (!el) return;

  ensureIdagData();
  var d = window._idagData || {};
  var phaseObj = d.lifePhase || {};
  var phaseNum = phaseObj.phase || 7;
  var phaseName = phaseObj.name || (PHASE_DATA[phaseNum] || {}).name || 'Fase ' + phaseNum;

  // Beregn dynamisk indsigt-tekst
  var checkins = getCheckins();
  var reflections = [];
  try { reflections = JSON.parse(localStorage.getItem('livsfaser_reflections') || '[]'); } catch(e) {}
  var checkinCount = checkins.length;
  var reflCount = reflections.length;

  // Find dominerende element fra aktive elementer
  var activeEls = window._activeElements || {};
  var elCounts = {};
  for (var key in activeEls) {
    var eName = activeEls[key];
    if (eName) { elCounts[eName] = (elCounts[eName] || 0) + 1; }
  }
  var domElement = 'Vand';
  var domCount = 0;
  for (var e in elCounts) {
    if (elCounts[e] > domCount) { domCount = elCounts[e]; domElement = e; }
  }
  // Konverter til title case (VAND → Vand)
  domElement = domElement.charAt(0).toUpperCase() + domElement.slice(1).toLowerCase();

  // Beregn måneder i fasen
  var userData = null;
  try { userData = JSON.parse(localStorage.getItem('user')); } catch(e) {}
  var monthsInPhase = 14;
  if (userData && userData.birthdate) {
    var bd = new Date(userData.birthdate);
    var now = new Date();
    var ageMonths = (now.getFullYear() - bd.getFullYear()) * 12 + (now.getMonth() - bd.getMonth());
    var phaseStartMonths = (phaseNum - 1) * 7 * 12;
    monthsInPhase = ageMonths - phaseStartMonths;
    if (monthsInPhase < 1) monthsInPhase = 1;
  }

  var insightText = 'Du er ' + monthsInPhase + ' m\u00e5neder inde i ' + phaseName + '. '
    + 'Du har skrevet ' + reflCount + ' refleksioner og gennemf\u00f8rt ' + checkinCount + ' check-ins. '
    + 'Dit ' + domElement + '-element giver dig mest ro, og din energi f\u00f8lger \u00e5rstidernes rytme t\u00e6t.';

  // SVG: Tre overlappende cirkler
  var svg = '<svg width="280" height="230" xmlns="http://www.w3.org/2000/svg">'
    + '<circle cx="110" cy="100" r="72" fill="rgba(139,125,155,0.06)" stroke="rgba(139,125,155,0.2)" stroke-width="1"/>'
    + '<circle cx="170" cy="100" r="72" fill="rgba(139,125,155,0.05)" stroke="rgba(139,125,155,0.17)" stroke-width="1"/>'
    + '<circle cx="140" cy="155" r="72" fill="rgba(139,125,155,0.055)" stroke="rgba(139,125,155,0.18)" stroke-width="1"/>'
    + '<text x="78" y="78" text-anchor="middle" font-size="11" fill="#8B7D9B" font-style="italic">ERINDRING</text>'
    + '<text x="202" y="78" text-anchor="middle" font-size="11" fill="#8B7D9B" font-style="italic">INDSIGT</text>'
    + '<text x="140" y="205" text-anchor="middle" font-size="11" fill="#8B7D9B" font-style="italic">RETNING</text>'
    + '<text x="140" y="112" text-anchor="middle" font-size="13" fill="#6B5F7B" font-weight="600">DIN</text>'
    + '<text x="140" y="130" text-anchor="middle" font-size="13" fill="#6B5F7B" font-weight="600">REJSE</text>'
    + '</svg>';

  var h = '';
  h += '<h1 class="rejse__t1">Min Rejse</h1>';
  h += '<p class="rejse__intr">Dit personlige bibliotek og din udvikling over tid. Her samler du tr\u00e5dene fra dine check-ins, refleksioner og gemte favoritter — et stille vidnesbyrd om din vej.</p>';

  // Tre-cirkel figur
  h += '<div class="rejse__fig">' + svg + '</div>';

  // Dynamisk indsigt-boks
  h += '<div class="rejse__ins">';
  h += '<div class="rejse__ins-label">DIN REJSE LIGE NU</div>';
  h += '<div class="rejse__ins-text">' + insightText + '</div>';
  h += '</div>';

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Sektion: Se dig selv over tid
  h += '<h2 class="rejse__t2">Se dig selv over tid</h2>';
  h += '<p class="rejse__intr">Dine check-ins og refleksioner tegner et billede af din udvikling. Her kan du se m\u00f8nstrene \u2014 og m\u00e5ske genkende noget du ikke vidste om dig selv.</p>';

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'min-udvikling\')">';
  h += '<h3>Min udvikling</h3>';
  h += '<p>M\u00f8nstre i din energi, dine \u00f8velser og dine f\u00f8lelser \u2014 uge for uge, m\u00e5ned for m\u00e5ned</p>';
  h += '<div class="rejse__nc-arrow">Se dine m\u00f8nstre \u2192</div>';
  h += '</div>';

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'min-journal\')">';
  h += '<h3>Min journal</h3>';
  h += '<p>Dine refleksioner, check-ins og tanker \u2014 samlet og forbundet med dine cyklusser</p>';
  h += '<div class="rejse__nc-arrow">Skriv eller l\u00e6s \u2192</div>';
  h += '</div>';

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Sektion: Det du har samlet
  h += '<h2 class="rejse__t2">Det du har samlet</h2>';
  h += '<p class="rejse__intr">Dine favoritter og samlinger vokser stille frem undervejs. Her finder du de \u00f8velser, den kost og den visdom du har valgt at gemme til dig selv.</p>';

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'mine-favoritter\')">';
  h += '<h3>Mine favoritter</h3>';
  h += '<p>\u00d8velser, kostvejledning, refleksioner og indsigter du har gemt undervejs</p>';
  h += '<div class="rejse__nc-arrow">Se dit bibliotek \u2192</div>';
  h += '</div>';

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'mine-samlinger\')">';
  h += '<h3>Mine samlinger</h3>';
  h += '<p>Dine egne mapper \u2014 &quot;Min morgenrutine&quot;, &quot;Til min datter&quot;, &quot;N\u00e5r jeg har brug for ro&quot;</p>';
  h += '<div class="rejse__nc-arrow">Se dine samlinger \u2192</div>';
  h += '</div>';

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Sektion: Forstå dybere
  h += '<h2 class="rejse__t2">Forst\u00e5 dybere</h2>';
  h += '<p class="rejse__intr">Under overfladen ligger en dybere forst\u00e5else af livets cyklusser. Her kan du udforske baggrunden \u2014 de traditioner og den forskning som b\u00e6rer det hele.</p>';

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'baggrundsviden\')">';
  h += '<h3>Baggrundsviden</h3>';
  h += '<p>De fem elementer, vedisk filosofi, ni traditioner med \u00e9n visdom, videnskabens bekr\u00e6ftelse</p>';
  h += '<div class="rejse__nc-arrow">Udforsk baggrunden \u2192</div>';
  h += '</div>';

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Dagens check-in gradient-boks
  h += '<h2 class="rejse__t2">Dagens check-in</h2>';
  h += '<p class="rejse__intr">Et \u00f8jeblik for dig selv. M\u00e6rk efter hvordan din energi f\u00f8les lige nu \u2014 ikke som den burde v\u00e6re, men som den er. Over tid vokser der m\u00f8nstre frem af dine stille observationer.</p>';
  h += '<div class="rejse__checkin" onclick="App.loadScreen(\'min-udvikling\')">';
  h += '<div class="rejse__checkin-label">DAGENS CHECK-IN</div>';
  h += '<div class="rejse__checkin-title">Hvordan f\u00f8les din energi lige nu?</div>';
  h += '<div class="rejse__checkin-sub">Tryk for at m\u00e6rke efter \u2192</div>';
  h += '</div>';

  // Privacy hint
  h += '<div class="rejse__hint">Din rejse er din egen. Alt her er privat, og du bestemmer hvad du gemmer og deler.</div>';

  el.innerHTML = h;

  // Krydslinks
  var content = document.getElementById('screen-content');
  if (content) {
    var krydsDiv = document.createElement('div');
    krydsDiv.innerHTML = renderKrydslinks('min-rejse');
    content.appendChild(krydsDiv);
  }
}

// ---- Niveau 2: Cyklusser i Cyklusser ----

function renderCicBlomstSvg() {
  // Blomst-SVG: fem ellipser (blade) roteret 72° + center-cirkel
  var svg = '<svg width="280" height="280" xmlns="http://www.w3.org/2000/svg">';
  // 5 blade (ellipser roteret 0°, 72°, 144°, 216°, 288°)
  var opacities = [0.07, 0.06, 0.05, 0.06, 0.07];
  var strokes = [0.18, 0.16, 0.14, 0.16, 0.18];
  for (var i = 0; i < 5; i++) {
    svg += '<ellipse cx="140" cy="55" rx="44" ry="65" fill="rgba(118,144,193,' + opacities[i] + ')" stroke="rgba(118,144,193,' + strokes[i] + ')" stroke-width="1" transform="rotate(' + (i * 72) + ',140,140)"/>';
  }
  // Center-cirkel
  svg += '<circle cx="140" cy="140" r="34" fill="rgba(118,144,193,0.1)" stroke="rgba(118,144,193,0.25)" stroke-width="1"/>';
  svg += '<text x="140" y="136" font-family="serif" font-size="12" fill="#5A74A5" font-weight="600" text-anchor="middle">DIG</text>';
  svg += '<text x="140" y="151" font-family="serif" font-size="9" fill="#7690C1" font-style="italic" text-anchor="middle">i alle rytmer</text>';
  // Labels (positioneret som i mockup)
  svg += '<text x="140" y="18" font-family="-apple-system,sans-serif" font-size="8" fill="#5A74A5" text-anchor="middle" letter-spacing="1.5">LIVETS BUE</text>';
  svg += '<text x="140" y="30" font-family="serif" font-size="9" fill="#7690C1" font-style="italic" text-anchor="middle">9 faser \u00B7 63 \u00e5r</text>';
  svg += '<text x="260" y="105" font-family="-apple-system,sans-serif" font-size="7" fill="#5A74A5" text-anchor="middle" letter-spacing="1">\u00c5RETS RYTME</text>';
  svg += '<text x="232" y="248" font-family="-apple-system,sans-serif" font-size="7" fill="#5A74A5" text-anchor="middle" letter-spacing="1">M\u00c5NEDENS CYKLUS</text>';
  svg += '<text x="48" y="248" font-family="-apple-system,sans-serif" font-size="7" fill="#5A74A5" text-anchor="middle" letter-spacing="1">UGENS DAGE</text>';
  svg += '<text x="20" y="105" font-family="-apple-system,sans-serif" font-size="7" fill="#5A74A5" text-anchor="middle" letter-spacing="1">D\u00d8GNETS PULS</text>';
  svg += '</svg>';
  return svg;
}

// Dynamiske tekster for de fem cyklusser
var CIC_CYCLE_TEXTS = {
  'VAND': { livsfase: 'Visdomstiden. Energien vender hjem til vandet, hvor den begyndte. Der er en cirkel der sluttes.',
           aarstid_vinter: '\u00c5rets dybeste Vand-tid. M\u00f8rket kalder p\u00e5 hvile og indadvendthed \u2014 som fr\u00f8et under sneen.',
           aarstid_default: 'Vand-energi i \u00e5rstiden. Stilhed og dybde pr\u00e6ger perioden.',
           maaned_uge1: 'Menstruationens indre vinter \u2014 kroppen beder om ro og varme.',
           maaned_default: 'Vand-energi i din cyklus. En tid for indadvendthed.',
           uge_mandag: 'Ugens stille begyndelse. Vand-energi. Planl\u00e6g, men pres ikke.',
           uge_default: 'Vand-energi i ugen. Tag det roligt.',
           doegn: 'Den bedste tid til at n\u00e6re dig selv.' },
  'TR\u00C6': { livsfase: 'V\u00e6kstens tid. Energien skyder op som nye skud. Der er en kraft der vil frem.',
           aarstid_default: 'Tr\u00e6-energi. V\u00e6kst og fornyelse pr\u00e6ger perioden.',
           maaned_default: 'Follikul\u00e6r fase \u2014 energien stiger. Ny begyndelse.',
           uge_default: 'Tr\u00e6-energi i ugen. God tid til at starte nyt.',
           doegn: 'Leveren arbejder. Kreativitet og planl\u00e6gning.' },
  'ILD':  { livsfase: 'Ildens tid. Fuld energi, udadvendthed, passion.',
           aarstid_default: 'Ild-energi. Varme og udfoldelse pr\u00e6ger perioden.',
           maaned_default: '\u00c6gl\u00f8sning. Mest energi, mest udadvendt. Hjertet \u00e5bner.',
           uge_default: 'Ild-energi i ugen. Sociale m\u00f8der og kreativitet.',
           doegn: 'Hjertets tid. V\u00e6r \u00e5ben og n\u00e6rv\u00e6rende.' },
  'JORD': { livsfase: 'Modningens tid. Hvad er essentielt? Hvad kan du give videre?',
           aarstid_default: 'Jord-energi. N\u00e6ring og stabilitet pr\u00e6ger perioden.',
           maaned_default: 'Luteal fase \u2014 energi falder. Kroppen sorterer.',
           uge_default: 'Jord-energi i ugen. God tid til at n\u00e6re dig selv.',
           doegn: 'Jord-element. Den bedste tid til at n\u00e6re dig selv med varm mad.' },
  'METAL':{ livsfase: 'Frig\u00f8relsens tid. At give slip. Hvad har du brug for \u2014 og hvad kan du l\u00e6gge fra dig?',
           aarstid_default: 'Metal-energi. Klarhed og sortering pr\u00e6ger perioden.',
           maaned_default: 'Sen luteal fase. Energi falder. Behov for ro.',
           uge_default: 'Metal-energi i ugen. Afslut og ryd op.',
           doegn: 'Lungernes tid. Dybe \u00e5ndedrag og ro.' }
};

function getCicCycleDesc(element, cycle, d) {
  var t = CIC_CYCLE_TEXTS[element] || CIC_CYCLE_TEXTS.VAND;
  if (cycle === 'livsfase') return t.livsfase || t.aarstid_default;
  if (cycle === 'aarstid') {
    if (element === 'VAND' && d.season.season === 'Vinter') return t.aarstid_vinter;
    return t.aarstid_default;
  }
  if (cycle === 'maaned') {
    if (element === 'VAND' && d.monthCycle && d.monthCycle.data && d.monthCycle.data.week === 1) return t.maaned_uge1;
    return t.maaned_default;
  }
  if (cycle === 'uge') {
    if (element === 'VAND' && d.weekday.day === 'Mandag') return t.uge_mandag;
    return t.uge_default;
  }
  if (cycle === 'doegn') return t.doegn;
  return '';
}

function generateCicDetBetyder(d) {
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var dominant = '';
  var maxCount = 0;
  for (var el in counts) {
    if (counts[el] > maxCount) { maxCount = counts[el]; dominant = el; }
  }
  var elLabel = ELEMENT_LABELS[dominant] || dominant;
  // Find det element der bryder mønstret
  var breaker = '';
  var breakerCycle = '';
  var cycleElements = [
    { el: d.lifePhase.element, name: 'livsfasen' },
    { el: d.season.element, name: '\u00e5rstiden' },
    { el: d.monthCycle.data.element, name: 'm\u00e5nedscyklussen' },
    { el: d.weekday.element, name: 'ugedagen' },
    { el: d.organ.element, name: 'd\u00f8gnets organur' }
  ];
  for (var j = 0; j < cycleElements.length; j++) {
    if (cycleElements[j].el !== dominant) {
      breaker = ELEMENT_LABELS[cycleElements[j].el];
      breakerCycle = cycleElements[j].name;
      break;
    }
  }

  if (maxCount >= 4) {
    return maxCount + ' af dine cyklusser peger mod ' + elLabel + ' lige nu \u2014 kun ' + breakerCycle + ' bryder m\u00f8nstret med ' + breaker + '. Du er i dyb resonans. Det kan f\u00f8les som en stille kraft, der ikke beh\u00f8ver ord.';
  } else if (maxCount === 3) {
    return 'Tre af dine cyklusser peger mod ' + elLabel + '. Der er en tydelig retning \u2014 men ogs\u00e5 modstemmer der giver dynamik og sp\u00e6nding.';
  } else {
    return 'Dine cyklusser tr\u00e6kker i flere retninger. Der er kreativ sp\u00e6nding mellem dine elementer \u2014 det kan f\u00f8les som indre dialog.';
  }
}

function initCyklusserICyklusserScreen() {
  ensureIdagData();
  var d = window._idagData;
  if (!d) return;

  // 1. Lotus-billede
  var blomstEl = document.getElementById('cic-blomst');
  if (blomstEl) {
    blomstEl.innerHTML = '<img src="assets/images/lotus-5blade-cropped.png" alt="Cyklusser i cyklusser" class="cic-lotus-img">';
  }

  // 2. "LIGE NU" indsigt-boks
  var ligeNuEl = document.getElementById('cic-lige-nu');
  if (ligeNuEl) {
    var lnh = '<div class="mc__ins">';
    lnh += '<div class="mc__ins-label">LIGE NU</div>';
    lnh += '<div class="mc__ins-text">Vi lever altid i fem cyklusser p\u00e5 \u00e9n gang. Hver bev\u00e6ger sig gennem de samme elementer: Vand \u2192 Tr\u00e6 \u2192 Ild \u2192 Jord \u2192 Metal \u2192 Vand. Fra stilhed til v\u00e6kst til udfoldelse til h\u00f8st til slip.</div>';
    lnh += '</div>';
    ligeNuEl.innerHTML = lnh;
  }

  // 3. Fem cyklus-kort
  var femEl = document.getElementById('cic-fem-cyklusser');
  if (femEl) {
    var now = new Date();
    var hours = now.getHours();
    var mins = String(now.getMinutes()).padStart(2, '0');
    var timeStr = hours + ':' + mins;

    var cycles = [
      { name: 'Livets bue', tag: ELEMENT_LABELS[d.lifePhase.element] + ' \u00B7 FASE ' + d.lifePhase.phase,
        desc: (d.lifePhase.phase >= 9 ? '63+ \u00e5r' : (d.lifePhase.startAge + '\u2013' + d.lifePhase.endAge + ' \u00e5r')) + ' \u00B7 ' + getCicCycleDesc(d.lifePhase.element, 'livsfase', d) },
      { name: '\u00c5rets rytme', tag: ELEMENT_LABELS[d.season.element] + ' \u00B7 ' + d.season.season.toUpperCase(),
        desc: ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'][now.getMonth()] + '. ' + getCicCycleDesc(d.season.element, 'aarstid', d) },
      { name: 'M\u00e5nedens cyklus', tag: ELEMENT_LABELS[d.monthCycle.data.element] + ' \u00B7 ' + (d.monthCycle.data.phase || d.monthCycle.data.name || '').toUpperCase(),
        desc: (d.monthCycle.data.day ? 'Dag ' + d.monthCycle.data.day + ' i din cyklus. ' : d.monthCycle.data.name + '. ') + getCicCycleDesc(d.monthCycle.data.element, 'maaned', d) },
      { name: 'Ugens dage', tag: ELEMENT_LABELS[d.weekday.element] + ' \u00B7 ' + d.weekday.day.toUpperCase(),
        desc: d.weekday.day + '. ' + getCicCycleDesc(d.weekday.element, 'uge', d) },
      { name: 'D\u00f8gnets puls', tag: ELEMENT_LABELS[d.organ.element] + ' \u00B7 ' + d.organ.organ.toUpperCase(),
        desc: 'Kl. ' + timeStr + ' \u2014 ' + d.organ.organ + 's tid (' + d.organ.hours + '). ' + getCicCycleDesc(d.organ.element, 'doegn', d) }
    ];

    var ch = '';
    for (var i = 0; i < cycles.length; i++) {
      ch += '<div class="mc__cycle-card">';
      ch += '<div class="mc__cycle-header">';
      ch += '<div class="mc__cycle-name">' + cycles[i].name + '</div>';
      ch += '<div class="mc__cycle-tag">' + cycles[i].tag + '</div>';
      ch += '</div>';
      ch += '<div class="mc__cycle-desc">' + cycles[i].desc + '</div>';
      ch += '</div>';
    }
    femEl.innerHTML = ch;
  }

  // 4. "DET BETYDER" indsigt-boks
  var betyderEl = document.getElementById('cic-det-betyder');
  if (betyderEl) {
    var bh = '<h2 class="rejse__t2">Det betyder</h2>';
    bh += '<p class="rejse__intr">N\u00e5r dine cyklusser taler sammen, skaber de et samlet billede af din energi. Nogle m\u00f8nstre n\u00e6rer dig, andre presser \u2014 og begge dele er v\u00e6rdifulde at forst\u00e5.</p>';
    bh += '<div class="mc__ins">';
    bh += '<div class="mc__ins-text">' + generateCicDetBetyder(d) + '</div>';
    bh += '</div>';
    betyderEl.innerHTML = bh;
  }

  // 5. Link
  var linkEl = document.getElementById('cic-link');
  if (linkEl) {
    linkEl.innerHTML = '<div class="mc__link" onclick="App.loadScreen(\'din-energi\')">Se hvordan det ser ud en anden dag \u2192</div>';
  }

  // 6. Action bar
  var actionsEl = document.getElementById('cic-actions');
  if (actionsEl) {
    actionsEl.innerHTML = renderActionBar('cyklusser-i-cyklusser');
  }
}

// ---- Niveau 2: Dine cyklusser lige nu (NY SIDE) ----

var DCLN_FEELS_LIKE = {
  'VAND': 'Du har m\u00e5ske brug for mere s\u00f8vn end normalt. Tanker bev\u00e6ger sig langsomt, men dybt. Kreativitet kan komme i stille \u00f8jeblikke \u2014 under bruseren, p\u00e5 en g\u00e5tur, i m\u00f8rket. Tillad det.',
  'TR\u00C6': 'Du m\u00e6rker m\u00e5ske en rastl\u00f8shed, en trang til at g\u00f8re noget nyt. Kroppen vil bev\u00e6ge sig, sindet vil planl\u00e6gge. F\u00f8lg impulsen \u2014 men undg\u00e5 at forcere.',
  'ILD':  'Energien er h\u00f8j, du er udadvendt og \u00e5ben. Hjertet er varmt. Det er en god tid til at m\u00f8de andre, dele og skabe. Pas p\u00e5 ikke at br\u00e6nde ud.',
  'JORD': 'Der er en rolig stabilitet i dig. Du har brug for n\u00e6ring \u2014 b\u00e5de fysisk og f\u00f8lelsesm\u00e6ssigt. Varm mad, gode samtaler, jord under f\u00f8dderne.',
  'METAL':'Der er klarhed i tankerne. Du kan se hvad der er essentielt og hvad der kan g\u00e5. Det er en tid for sortering, ro og dybe \u00e5ndedrag.'
};

var DCLN_ISABELLE = {
  'VAND': 'N\u00e5r n\u00e6sten alle dine cyklusser peger samme vej, er det som at st\u00e5 i en flod der b\u00e6rer dig. Du beh\u00f8ver ikke sv\u00f8mme. Du beh\u00f8ver ikke forst\u00e5 alt. Bare m\u00e6rk retningen \u2014 og f\u00f8lg med.',
  'TR\u00C6': 'N\u00e5r Tr\u00e6 dominerer, er det som for\u00e5r indeni. Noget vil vokse. Du beh\u00f8ver ikke vide hvad endnu \u2014 bare giv det plads.',
  'ILD':  'Ilden i dig er ikke farlig. Den er livsenergi. Lad den str\u00f8mme \u2014 men husk at hvile er br\u00e6ndstof, ikke dovenskab.',
  'JORD': 'Jorden i dig beder om at lande. Du beh\u00f8ver ikke v\u00e6re produktiv for at v\u00e6re v\u00e6rdifuld. Bare v\u00e6r her.',
  'METAL':'Metal er lungens element \u2014 og lungens gave er at give slip. Hvad b\u00e6rer du, som ikke l\u00e6ngere er dit?'
};

var DCLN_RESONANCE_TEXTS = {
  'VAND': { resonans: 'forst\u00e6rker dit livsfase-element. Dobbelt Vand \u2014 der er dybde i stilheden.', modspil: 'bryder Vand-m\u00f8nstret.' },
  'TR\u00C6': { resonans: 'forst\u00e6rker v\u00e6kst-energien. Tr\u00e6 m\u00f8der Tr\u00e6.', modspil: 'bryder Tr\u00e6-m\u00f8nstret.' },
  'ILD':  { resonans: 'forst\u00e6rker Ild-energien. Varme m\u00f8der varme.', modspil: 'bryder Ild-m\u00f8nstret.' },
  'JORD': { resonans: 'forst\u00e6rker Jord-energien. Stabilitet m\u00f8der stabilitet.', modspil: 'bryder Jord-m\u00f8nstret.' },
  'METAL':{ resonans: 'forst\u00e6rker Metal-energien. Klarhed m\u00f8der klarhed.', modspil: 'bryder Metal-m\u00f8nstret.' }
};

function getClimateLabel(maxCount) {
  if (maxCount >= 4) return 'FULD RESONANS';
  if (maxCount === 3) return 'STÆRK RESONANS';
  if (maxCount === 2) return 'KREATIV SPÆNDING';
  return 'MANGFOLDIGHED';
}

function initDineCyklusserLigeNuScreen() {
  ensureIdagData();
  var d = window._idagData;
  if (!d) return;

  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var dominant = '';
  var maxCount = 0;
  for (var el in counts) {
    if (counts[el] > maxCount) { maxCount = counts[el]; dominant = el; }
  }
  var elLabel = ELEMENT_LABELS[dominant] || dominant;

  // 1. Element-tælling
  var elcountEl = document.getElementById('dcln-elcount');
  if (elcountEl) {
    var allEls = ['VAND', 'TR\u00C6', 'ILD', 'JORD', 'METAL'];
    var h = '<div class="mc__el-count">';
    for (var j = 0; j < allEls.length; j++) {
      var c = counts[allEls[j]] || 0;
      var dots = '';
      var dimClass = '';
      if (c === 0) {
        dots = '\u00B7';
        dimClass = ' dim';
      } else {
        for (var k = 0; k < c; k++) dots += '\u25CF';
        if (c === 1 && allEls[j] !== dominant) dimClass = ' dim';
      }
      h += '<div class="mc__el-item"><div class="mc__el-name">' + ELEMENT_LABELS[allEls[j]] + '</div>';
      h += '<div class="mc__el-dots' + dimClass + '">' + dots + '</div></div>';
    }
    h += '</div>';
    elcountEl.innerHTML = h;
  }

  // 2. Gradient-boks
  var gradEl = document.getElementById('dcln-gradient');
  if (gradEl) {
    var climateLabel = getClimateLabel(maxCount);
    var mainText = maxCount >= 4
      ? maxCount + ' af dine cyklusser peger mod ' + elLabel + '.'
      : maxCount === 3
        ? 'Tre af dine cyklusser peger mod ' + elLabel + '.'
        : 'Dine cyklusser peger i flere retninger.';
    var subText = maxCount >= 4
      ? 'Det er sj\u00e6ldent at s\u00e5 mange rytmer synger sammen. Du er i en periode hvor kroppen, \u00e5rstiden og livsfasen kalder p\u00e5 det samme: stilhed, dybde, hvile. Det er ikke dovenskab \u2014 det er visdom.'
      : maxCount === 3
        ? 'Der er en tydelig retning i din energi. De fleste rytmer peger samme vej \u2014 lad dig b\u00e6re af str\u00f8mmen.'
        : 'Flere elementer er i spil. Det giver dynamik og kompleksitet \u2014 brug det kreativt.';
    var gh = '<div class="mc__gradient">';
    gh += '<div class="mc__gradient-label">' + climateLabel + '</div>';
    gh += '<div class="mc__gradient-text">' + mainText + '</div>';
    gh += '<div class="mc__gradient-sub">' + subText + '</div>';
    gh += '</div>';
    gradEl.innerHTML = gh;
  }

  // 3. "Hvad det føles som" indsigt-boks
  var foelesEl = document.getElementById('dcln-foeles');
  if (foelesEl) {
    var fh = '<div class="mc__ins">';
    fh += '<div class="mc__ins-label">N\u00c5R ' + elLabel.toUpperCase() + ' DOMINERER</div>';
    fh += '<div class="mc__ins-text">' + (DCLN_FEELS_LIKE[dominant] || DCLN_FEELS_LIKE.VAND) + '</div>';
    fh += '</div>';
    foelesEl.innerHTML = fh;
  }

  // 4. "Dine fem rytmer i dag" — 5 cyklus-kort med RESONANS/MODSPIL
  var rytmerEl = document.getElementById('dcln-rytmer');
  if (rytmerEl) {
    var cycleItems = [
      { label: 'Livsfase', element: d.lifePhase.element,
        desc: 'Fase ' + d.lifePhase.phase + ' er ' + ELEMENT_LABELS[d.lifePhase.element] + 's fase. Du er i livets store tilbagevenden \u2014 energien runder cirklen.' },
      { label: '\u00c5rstid', element: d.season.element,
        desc: d.season.season + ' ' + (d.season.element === dominant ? DCLN_RESONANCE_TEXTS[dominant].resonans : DCLN_RESONANCE_TEXTS[dominant].modspil) },
      { label: 'M\u00e5ned', element: d.monthCycle.data.element,
        desc: (d.monthCycle.data.phase || d.monthCycle.data.name || '') + '. ' + (d.monthCycle.data.element === dominant
          ? (maxCount >= 3 ? 'Tredobbelt ' + elLabel + '. Kroppen insisterer p\u00e5 hvile.' : elLabel + '-resonans i din cyklus.')
          : ELEMENT_LABELS[d.monthCycle.data.element] + '-energi. Et andet element end dit dominerende.') },
      { label: 'Uge', element: d.weekday.element,
        desc: d.weekday.day + '. ' + (d.weekday.element === dominant
          ? 'Ugens stille start. ' + (maxCount >= 4 ? 'Firedobbelt ' + elLabel + '. Giv dig selv lov.' : elLabel + ' ogs\u00e5 i ugen.')
          : ELEMENT_LABELS[d.weekday.element] + '-dag. En anden energi end dit dominerende element.') },
      { label: 'D\u00f8gn', element: d.organ.element,
        desc: 'Kl. ' + new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0') + ' er ' + d.organ.organ + 's tid \u2014 ' + ELEMENT_LABELS[d.organ.element] + '-element. ' + (d.organ.element === dominant
          ? 'Endnu mere ' + elLabel + '.'
          : 'Det eneste der bryder ' + elLabel + '-m\u00f8nstret. Spis noget varmt og n\u00e6rende.') }
    ];

    var rh = '';
    for (var r = 0; r < cycleItems.length; r++) {
      var isResonans = cycleItems[r].element === dominant;
      rh += '<div class="mc__cycle-card">';
      rh += '<div class="mc__cycle-header">';
      rh += '<div class="mc__cycle-name">' + cycleItems[r].label + ' \u2192 ' + ELEMENT_LABELS[cycleItems[r].element] + '</div>';
      rh += '<div class="mc__cycle-tag">' + (isResonans ? 'RESONANS' : 'MODSPIL') + '</div>';
      rh += '</div>';
      rh += '<div class="mc__cycle-desc">' + cycleItems[r].desc + '</div>';
      rh += '</div>';
    }
    rytmerEl.innerHTML = rh;
  }

  // 5. "ISABELLES ORD" indsigt-boks
  var isabEl = document.getElementById('dcln-isabelle');
  if (isabEl) {
    var ih = '<div class="mc__ins">';
    ih += '<div class="mc__ins-label">ISABELLES ORD</div>';
    ih += '<div class="mc__ins-text">' + (DCLN_ISABELLE[dominant] || DCLN_ISABELLE.VAND) + '</div>';
    ih += '</div>';
    isabEl.innerHTML = ih;
  }

  // 6. Link
  var linkEl = document.getElementById('dcln-link');
  if (linkEl) {
    linkEl.innerHTML = '<div class="mc__link" onclick="App.loadScreen(\'din-energi\')">Se hvordan det ser ud en anden dag \u2192</div>';
  }

  // 7. Action bar
  var actionsEl = document.getElementById('dcln-actions');
  if (actionsEl) {
    actionsEl.innerHTML = renderActionBar('dine-cyklusser-lige-nu');
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
  period: '30d',   // 7d | 30d | 90d | all
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
  var el = document.getElementById('min-udvikling-content');
  if (!el) return;

  ensureIdagData();
  var checkins = getCheckins();
  var checkinsPeriod = getCheckinsForPeriod(TrackingState.period);
  var reflections = [];
  try { reflections = JSON.parse(localStorage.getItem('livsfaser_reflections') || '[]'); } catch(e) {}

  // Dominant element
  var insight = generateInsight(window._activeElements || []);
  var domEl = insight.dominantElement;
  var elLabel = ELEMENT_LABELS[domEl];

  // ---- Build HTML ----
  var h = '';
  h += '<h1 class="rejse__t1">Min udvikling</h1>';
  h += '<p class="rejse__intr">Se m\u00f8nstre i din energi, dine \u00f8velser og dine f\u00f8lelser over tid. N\u00e5r du ser tilbage p\u00e5 dine check-ins, tr\u00e6der der m\u00e5ske m\u00f8nstre frem du ikke kunne se indefra.</p>';

  // Tidsfilter chips
  var periods = [
    { id: '7d', label: '7 dage' },
    { id: '30d', label: '30 dage' },
    { id: '90d', label: '3 mdr.' },
    { id: 'all', label: 'Alle' }
  ];
  h += '<div class="rejse__chips">';
  for (var pi = 0; pi < periods.length; pi++) {
    var p = periods[pi];
    var active = p.id === TrackingState.period ? ' rejse__chip--active' : '';
    h += '<button class="rejse__chip' + active + '" onclick="udvSetPeriod(\'' + p.id + '\')">' + p.label + '</button>';
  }
  h += '</div>';

  // DINE MØNSTRE indsigt-boks
  h += '<div class="rejse__ins">';
  h += '<div class="rejse__ins-label">DINE M\u00d8NSTRE</div>';
  h += '<div class="rejse__ins-text">' + udvBuildPatternText(checkinsPeriod, domEl) + '</div>';
  h += '</div>';

  // Stats
  var totalCheckins = checkinsPeriod.length;
  var totalRefl = reflections.length;
  var uniqueElements = udvCountUniqueElements(checkinsPeriod);
  var avgTags = udvAvgTags(checkinsPeriod);

  h += '<div class="rejse__stats">';
  h += '<div class="rejse__stat"><div class="rejse__stat-num">' + totalCheckins + '</div><div class="rejse__stat-label">Check-ins</div></div>';
  h += '<div class="rejse__stat"><div class="rejse__stat-num">' + totalRefl + '</div><div class="rejse__stat-label">Refleksioner</div></div>';
  h += '<div class="rejse__stat"><div class="rejse__stat-num">' + uniqueElements + '/5</div><div class="rejse__stat-label">Elementer m\u00e6rket</div></div>';
  h += '<div class="rejse__stat"><div class="rejse__stat-num">' + avgTags + '</div><div class="rejse__stat-label">Gns. aktiviteter</div></div>';
  h += '</div>';

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Energi over tid
  h += '<h2 class="rejse__t2">Energi over tid</h2>';
  h += '<p class="rejse__intr">Se hvordan din energi har bev\u00e6get sig fra dag til dag. M\u00f8nstrene viser sig langsomt \u2014 som b\u00f8lger der f\u00f8rst bliver synlige n\u00e5r du tr\u00e6der tilbage.</p>';
  h += udvBuildEnergyBars(checkinsPeriod);

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Elementbalance
  h += '<h2 class="rejse__t2">Elementbalance</h2>';
  h += '<p class="rejse__intr">Fordelingen af de fem elementer i dine check-ins. Nogle perioder kalder et element st\u00e6rkere frem end andre \u2014 det er kroppens naturlige visdom.</p>';
  h += udvBuildElementBalance(checkinsPeriod);

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Forslag til dig lige nu
  h += '<h2 class="rejse__t2">Forslag til dig lige nu</h2>';
  h += '<p class="rejse__intr">\u00d8velser, n\u00e6ring og refleksion tilpasset dit dominerende element. Ikke regler du skal f\u00f8lge \u2014 men forslag din krop m\u00e5ske allerede beder om.</p>';
  h += udvBuildRecommendations(domEl);

  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Dagens check-in
  h += '<h2 class="rejse__t2">Dagens check-in</h2>';
  h += '<p class="rejse__intr">M\u00e6rk efter og registr\u00e9r hvor du er lige nu. Det tager et minut \u2014 og over tid vokser der et billede frem af din energis naturlige rytme.</p>';
  h += udvBuildCheckinForm(checkins);

  // Del/Kopiér/Gem
  h += '<div class="rejse__acts">';
  h += '<button class="rejse__act" onclick="actionShare()">Del</button>';
  h += '<button class="rejse__act" onclick="actionCopyLink()">Kopi\u00e9r</button>';
  h += '<button class="rejse__act" onclick="actionToggleSave(\'min-udvikling\')">Gem</button>';
  h += '</div>';

  el.innerHTML = h;
}

// ---- Min Udvikling hjælpefunktioner ----

function udvSetPeriod(period) {
  TrackingState.period = period;
  initMinUdviklingScreen();
}
window.udvSetPeriod = udvSetPeriod;

function udvBuildPatternText(checkins, domEl) {
  if (checkins.length < 3) {
    return 'Registr\u00e9r mindst tre check-ins, s\u00e5 begynder m\u00f8nstrene at vise sig. Din krop ved allerede \u2014 ord beh\u00f8ver tid.';
  }
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
  var topMood = null, topMoodCount = 0;
  for (var mk in moodCounts) { if (moodCounts[mk] > topMoodCount) { topMoodCount = moodCounts[mk]; topMood = mk; } }
  var topTag = null, topTagCount = 0;
  for (var tk in tagCounts) { if (tagCounts[tk] > topTagCount) { topTagCount = tagCounts[tk]; topTag = tk; } }

  var moodInfo = MOOD_OPTIONS.find(function(m) { return m.id === topMood; });
  var moodName = moodInfo ? moodInfo.name.toLowerCase() : 'varierende';
  var elName = moodInfo ? ELEMENT_LABELS[moodInfo.element] : ELEMENT_LABELS[domEl];
  var text = 'Din energi har v\u00e6ret mest ' + moodName + ', og ' + elName + '-element \u00f8velser giver dig mest ro.';
  if (topTag) text += ' ' + topTag + ' er din hyppigste aktivitet \u2014 m\u00e5ske kan en stille morgen\u00f8velse hj\u00e6lpe der.';
  return text;
}

function udvCountUniqueElements(checkins) {
  var elements = {};
  for (var i = 0; i < checkins.length; i++) {
    var mo = MOOD_OPTIONS.find(function(m) { return m.id === checkins[i].mood; });
    if (mo) elements[mo.element] = true;
  }
  return Object.keys(elements).length;
}

function udvAvgTags(checkins) {
  if (checkins.length === 0) return '0';
  var total = 0;
  for (var i = 0; i < checkins.length; i++) {
    total += (checkins[i].tags || []).length;
  }
  return (total / checkins.length).toFixed(1);
}

function udvBuildEnergyBars(checkins) {
  var moodValues = { 'vand': 1, 'metal': 2, 'jord': 3, 'trae': 4, 'ild': 5 };

  if (checkins.length < 2) {
    // Show example bars as in mockup
    var exBars = [45, 65, 85, 78, 50, 35, 42, 58];
    var h = '<div class="rejse__chart">';
    h += '<div class="rejse__chart-title">Energiniveau gennem m\u00e5neden</div>';
    h += '<div class="rejse__bars">';
    for (var e = 0; e < exBars.length; e++) {
      var hi = exBars[e] >= 75 ? ' rejse__bar--hi' : '';
      h += '<div class="rejse__bar' + hi + '" style="height:' + exBars[e] + '%"></div>';
    }
    h += '</div>';
    h += '<div class="rejse__chart-note">H\u00f8jest i uge 2-3 (Tr\u00e6/Ild) \u00B7 Lavest i uge 4 (Metal/Vand)</div>';
    h += '</div>';
    return h;
  }

  // Real data: group by week chunks
  var sorted = checkins.slice().reverse(); // oldest first
  var barValues = [];
  for (var i = 0; i < sorted.length; i++) {
    barValues.push((moodValues[sorted[i].mood] || 3) * 20);
  }
  // Cap at 8 bars for visual clarity
  if (barValues.length > 8) {
    var chunkSize = Math.ceil(barValues.length / 8);
    var averaged = [];
    for (var c = 0; c < barValues.length; c += chunkSize) {
      var chunk = barValues.slice(c, c + chunkSize);
      var sum = 0;
      for (var s = 0; s < chunk.length; s++) sum += chunk[s];
      averaged.push(Math.round(sum / chunk.length));
    }
    barValues = averaged;
  }

  var maxVal = Math.max.apply(null, barValues);
  var h = '<div class="rejse__chart">';
  h += '<div class="rejse__chart-title">Energiniveau gennem m\u00e5neden</div>';
  h += '<div class="rejse__bars">';
  for (var b = 0; b < barValues.length; b++) {
    var pct = maxVal > 0 ? Math.round((barValues[b] / maxVal) * 100) : 10;
    var hiClass = pct >= 75 ? ' rejse__bar--hi' : '';
    h += '<div class="rejse__bar' + hiClass + '" style="height:' + pct + '%"></div>';
  }
  h += '</div>';

  // Find highest/lowest mood names
  var highMoods = {}, lowMoods = {};
  for (var mi = 0; mi < sorted.length; mi++) {
    var val = moodValues[sorted[mi].mood] || 3;
    if (val >= 4) highMoods[sorted[mi].mood] = true;
    if (val <= 2) lowMoods[sorted[mi].mood] = true;
  }
  var highNames = Object.keys(highMoods).map(function(m) { var mo = MOOD_OPTIONS.find(function(o){return o.id===m;}); return mo ? ELEMENT_LABELS[mo.element] : ''; }).filter(Boolean);
  var lowNames = Object.keys(lowMoods).map(function(m) { var mo = MOOD_OPTIONS.find(function(o){return o.id===m;}); return mo ? ELEMENT_LABELS[mo.element] : ''; }).filter(Boolean);
  var noteText = '';
  if (highNames.length > 0) noteText += 'H\u00f8jest: ' + highNames.join('/');
  if (lowNames.length > 0) noteText += (noteText ? ' \u00B7 ' : '') + 'Lavest: ' + lowNames.join('/');
  if (!noteText) noteText = 'Registr\u00e9r flere check-ins for at se m\u00f8nstre';
  h += '<div class="rejse__chart-note">' + noteText + '</div>';
  h += '</div>';
  return h;
}

function udvBuildElementBalance(checkins) {
  var counts = { 'VAND': 0, 'TR\u00C6': 0, 'ILD': 0, 'JORD': 0, 'METAL': 0 };
  var total = 0;
  for (var i = 0; i < checkins.length; i++) {
    var mo = MOOD_OPTIONS.find(function(m) { return m.id === checkins[i].mood; });
    if (mo) { counts[mo.element]++; total++; }
  }

  var elOrder = ['VAND', 'TR\u00C6', 'ILD', 'JORD', 'METAL'];
  var barColors = ['#6B5F7B', '#8B7D9B', '#B8AFCA', '#B8AFCA', '#c4b8d6'];

  // If no data, show example from mockup
  var useExample = total === 0;
  var exPcts = [35, 20, 15, 18, 12];

  var h = '<div class="rejse__chart">';
  for (var j = 0; j < elOrder.length; j++) {
    var pct = useExample ? exPcts[j] : (total > 0 ? Math.round((counts[elOrder[j]] / total) * 100) : 0);
    h += '<div class="rejse__el-row">';
    h += '<span class="rejse__el-name">' + ELEMENT_LABELS[elOrder[j]] + '</span>';
    h += '<div class="rejse__el-track">';
    h += '<div class="rejse__el-fill" style="width:' + pct + '%;background:' + barColors[j] + '"></div>';
    h += '</div>';
    h += '<span class="rejse__el-pct">' + pct + '%</span>';
    h += '</div>';
  }
  h += '</div>';
  return h;
}

function udvBuildRecommendations(domEl) {
  var yoga = INSIGHT_YOGA[domEl];
  var food = INSIGHT_FOOD[domEl];
  var h = '';

  if (yoga && yoga.length > 0) {
    h += '<div class="rejse__nc" onclick="navigateToYogaWithElement(\'' + domEl + '\')">';
    h += '<div class="rejse__nc-label">\u00d8VELSE</div>';
    h += '<h3>' + yoga[0].pose + '</h3>';
    h += '<p>' + yoga[0].desc.split('.')[0] + '.</p>';
    h += '<div class="rejse__nc-arrow">Pr\u00f8v nu \u2192</div>';
    h += '</div>';
  }

  if (food && food.length > 0) {
    h += '<div class="rejse__nc" onclick="App.loadScreen(\'samlede-indsigt\')">';
    h += '<div class="rejse__nc-label">N\u00c6RING</div>';
    h += '<h3>' + food[0].item + '</h3>';
    h += '<p>' + food[0].desc + '</p>';
    h += '<div class="rejse__nc-arrow">Se anbefalinger \u2192</div>';
    h += '</div>';
  }

  h += '<div class="rejse__nc" onclick="App.loadScreen(\'refleksion\')">';
  h += '<div class="rejse__nc-label">REFLEKSION</div>';
  h += '<h3>Tag et stille \u00f8jeblik</h3>';
  h += '<p>Sp\u00f8rgsm\u00e5l tilpasset din livsfase \u2014 du beh\u00f8ver ikke svare, bare lytte indad.</p>';
  h += '<div class="rejse__nc-arrow">\u00c5bn refleksion \u2192</div>';
  h += '</div>';

  return h;
}

function udvBuildCheckinForm(allCheckins) {
  // Check if already checked in today
  var today = getLocalDateStr(new Date());
  var todayCheckin = allCheckins.find(function(c) { return c.date && c.date.substring(0, 10) === today; });

  if (todayCheckin) {
    var moodInfo = MOOD_OPTIONS.find(function(m) { return m.id === todayCheckin.mood; });
    var h = '<div class="rejse__ins">';
    h += '<div class="rejse__ins-label">\u2713 DU HAR ALLEREDE TJEKKET IND I DAG</div>';
    h += '<div class="rejse__ins-text">' + (moodInfo ? moodInfo.icon + ' ' + moodInfo.name : '') + (todayCheckin.note ? ' \u2014 ' + escapeHtml(todayCheckin.note) : '') + '</div>';
    h += '</div>';
    return h;
  }

  var h = '';
  // Gradient-boks med energivalg
  h += '<div class="rejse__checkin">';
  h += '<div class="rejse__checkin-label">HVORDAN F\u00d8LES DIN ENERGI LIGE NU?</div>';
  h += '<div class="rejse__energy-chips">';
  for (var i = 0; i < MOOD_OPTIONS.length; i++) {
    var m = MOOD_OPTIONS[i];
    var sel = TrackingState.checkinMood === m.id ? ' rejse__energy-chip--selected' : '';
    h += '<button class="rejse__energy-chip' + sel + '" onclick="udvSelectMood(\'' + m.id + '\')">' + m.name + '</button>';
  }
  h += '</div>';
  h += '</div>';

  // Skrivefelt
  h += '<div class="rejse__textarea-wrap">';
  h += '<textarea class="rejse__textarea" id="udv-checkin-note" placeholder="Skriv frit \u2014 det er kun for dig selv\u2026" oninput="TrackingState.checkinNote=this.value">' + escapeHtml(TrackingState.checkinNote) + '</textarea>';
  h += '</div>';

  // Gem-knap
  h += '<button class="rejse__btn" onclick="udvSubmitCheckin()">Gem check-in</button>';

  return h;
}

function udvSelectMood(moodId) {
  TrackingState.checkinMood = moodId;
  initMinUdviklingScreen();
  // Scroll to check-in area
  var chips = document.querySelectorAll('.rejse__energy-chip');
  if (chips.length > 0) chips[0].closest('.rejse__checkin').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
window.udvSelectMood = udvSelectMood;

function udvSubmitCheckin() {
  if (!TrackingState.checkinMood) {
    showActionToast('V\u00e6lg din energi f\u00f8rst');
    return;
  }
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
  TrackingState.checkinMood = null;
  TrackingState.checkinTags = [];
  TrackingState.checkinNote = '';
  showActionToast('Check-in gemt \u2713');
  initMinUdviklingScreen();
}
window.udvSubmitCheckin = udvSubmitCheckin;

// ---- Niveau 2: Mine Favoritter (ny lavendel-version) ----

var _favActiveTab = 'oevelser';

var FAV_EXAMPLE_DATA = {
  oevelser: [
    { name: 'Yin Yoga \u2014 Tr\u00e6-element', desc: 'Drage, Sovende svane, Firben \u00B7 Lever og galdebl\u00e6re' },
    { name: 'Meridian-strygning', desc: 'Energiens floder \u00B7 V\u00e6kke og berolige \u00B7 For alle elementer' },
    { name: 'EFT Tapping', desc: '9 punkter p\u00e5 kroppen \u00B7 Til lettelse og balance' },
    { name: 'Vejrtr\u00e6kning for nervesystemet', desc: 'Ventral vagus \u00f8velser \u00B7 Find ro og sikkerhed' },
    { name: 'Vinterforl\u00f8bet', desc: 'For bl\u00e6re og nyrer \u00B7 Vand-elementet \u00B7 Ro og genopladning' }
  ],
  kost: [
    { name: 'Vintersuppe med ingef\u00e6r', desc: 'Varmer nyreessensen \u00B7 Vand-element \u00B7 Nem at lave' },
    { name: 'Sort sesam & valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften' },
    { name: 'Gr\u00f8n te med mynte', desc: 'K\u00f8ler leverild \u00B7 Tr\u00e6-element \u00B7 Til for\u00e5ret' }
  ],
  temaer: [
    { name: 'Stilhed og ro', desc: 'Vand-elementets gave \u00B7 At finde hvile i det ukendte' },
    { name: 'Gr\u00e6nser med omsorg', desc: 'Metal-elementet \u00B7 At give slip uden at miste sig selv' },
    { name: 'Kreativ fornyelse', desc: 'Tr\u00e6-elementet \u00B7 N\u00e5r noget nyt vil vokse' }
  ],
  faser: [
    { name: 'Fase 7 \u2014 H\u00f8st', desc: 'Jord-elementet \u00B7 42-49 \u00e5r \u00B7 Modningens visdom' },
    { name: 'Fase 9 \u2014 Visdom', desc: 'Vand-elementet \u00B7 56-63 \u00e5r \u00B7 Livets fuldendelse' }
  ]
};

function initMineFavoritterScreen() {
  var el = document.getElementById('mine-favoritter-content');
  if (!el) return;

  var h = '';
  h += '<h1 class="rejse__t1">Mine favoritter</h1>';
  h += '<p class="rejse__intr">Alt du har gemt med hjertet \u2014 \u00f8velser, kost, refleksioner og visdom. Din egen samling af det der r\u00f8rte dig, som sm\u00e5 sten du har samlet p\u00e5 en lang strandtur.</p>';

  // Tab-filter
  var tabs = [
    { id: 'oevelser', label: '\u00d8velser' },
    { id: 'kost', label: 'Kost' },
    { id: 'temaer', label: 'Temaer' },
    { id: 'faser', label: 'Faser' }
  ];
  h += '<div class="rejse__tabs">';
  for (var i = 0; i < tabs.length; i++) {
    var t = tabs[i];
    var active = t.id === _favActiveTab ? ' rejse__tab--active' : '';
    h += '<button class="rejse__tab' + active + '" onclick="favSetTab(\'' + t.id + '\')">' + t.label + '</button>';
  }
  h += '</div>';

  // Favoritkort
  var items = FAV_EXAMPLE_DATA[_favActiveTab] || [];
  for (var j = 0; j < items.length; j++) {
    var item = items[j];
    h += '<div class="rejse__fav">';
    h += '<div class="rejse__fav-heart">\u2665</div>';
    h += '<div class="rejse__fav-info">';
    h += '<div class="rejse__fav-name">' + item.name + '</div>';
    h += '<div class="rejse__fav-desc">' + item.desc + '</div>';
    h += '</div>';
    h += '<div class="rejse__fav-arrow">\u2192</div>';
    h += '</div>';
  }

  // Hint
  h += '<div class="rejse__hint">Tryk p\u00e5 hjertet \u2665 p\u00e5 en side for at gemme den her</div>';

  // Link
  h += '<div class="rejse__link" onclick="App.loadScreen(\'samlede-indsigt\')">Se favoritter anbefalet til dig i dag \u2192</div>';

  // Del/Kopiér/Gem
  h += '<div class="rejse__acts">';
  h += '<button class="rejse__act" onclick="actionShare()">Del</button>';
  h += '<button class="rejse__act" onclick="actionCopyLink()">Kopi\u00e9r</button>';
  h += '<button class="rejse__act" onclick="actionToggleSave(\'mine-favoritter\')">Gem</button>';
  h += '</div>';

  el.innerHTML = h;
}

function favSetTab(tabId) {
  _favActiveTab = tabId;
  initMineFavoritterScreen();
}
window.favSetTab = favSetTab;

// ---- Niveau 2: Min Journal (lavendel) ----

var _journalFilter = 'seneste';

var JOURNAL_EXAMPLE_DATA = [
  {
    date: '14. FEBRUAR 2026',
    q: 'Hvad giver dig ro for tiden?',
    text: 'At g\u00e5 ture i m\u00f8rket om aftenen. Der er noget ved vinteren der passer til min rytme lige nu. Jeg beh\u00f8ver ikke s\u00e5 mange ord.',
    tags: ['Fase 7', 'Vinter', 'Vand']
  },
  {
    date: '10. FEBRUAR 2026',
    q: 'Hvad overrasker dig ved denne livsfase?',
    text: 'At jeg kan m\u00e6rke min mors erfaringer i min egen krop. Som om hendes overgangsalder p\u00e5 en m\u00e5de forbereder mig. Vi taler mere \u00e5bent om det nu.',
    tags: ['Fase 7', 'Jord', 'Relationer']
  },
  {
    date: '5. FEBRUAR 2026',
    q: 'Dagens check-in \u2014 hvordan f\u00f8les din energi?',
    text: 'Lav men stabil. Ikke tr\u00e6t, men stille. Har lyst til varm suppe og tidlig sengetid.',
    tags: ['Check-in', 'Vand']
  }
];

function initMinJournalScreen() {
  var el = document.getElementById('min-journal-content');
  if (!el) return;

  var d = window._idagData || {};
  var phaseObj = d.lifePhase || {};
  var phaseNum = phaseObj.phase || 7;
  var phaseName = phaseObj.name || 'H\u00f8st';
  var season = d.season || { season: 'Vinter' };
  var domEl = d.dominantElement || 'VAND';
  var domName = domEl.charAt(0).toUpperCase() + domEl.slice(1).toLowerCase();

  // Dynamisk sp\u00f8rgsm\u00e5l fra REFLEKSION_DATA
  var questions = REFLEKSION_DATA[phaseNum] || REFLEKSION_DATA[7];
  var dayIdx = new Date().getDate() % questions.length;
  var todayQ = questions[dayIdx];

  // Hent gemte refleksioner
  var saved = [];
  try {
    var raw = localStorage.getItem('livsfaser_journal');
    if (raw) saved = JSON.parse(raw);
  } catch (e) {}

  // Kombiner gemte + eksempler
  var allEntries = saved.concat(JOURNAL_EXAMPLE_DATA);

  // Filtr\u00e9r
  var filtered = allEntries;
  if (_journalFilter === 'seneste') {
    filtered = allEntries.slice(0, 5);
  } else if (_journalFilter === 'maaned') {
    var now = new Date();
    var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    filtered = allEntries.filter(function(e) {
      if (e.savedDate) return new Date(e.savedDate) >= monthStart;
      return true; // eksempel-data vises altid
    });
  }

  var h = '';
  h += '<h1 class="rejse__t1">Min journal</h1>';
  h += '<p class="rejse__intr">Dine tanker, check-ins og refleksioner \u2014 forbundet med dine cyklusser. Over tid bliver journalen et stille vidne til din rejse, dine m\u00f8nstre og din udvikling.</p>';

  // Dagens refleksion-boks
  var weekEl = d.menstrualCycle ? d.menstrualCycle.element : '';
  var weekName = weekEl ? weekEl.charAt(0).toUpperCase() + weekEl.slice(1).toLowerCase() : '';
  var subParts = ['Fase ' + phaseNum, season.season];
  if (weekName) subParts.push(weekName);
  subParts.push(domName);
  // Undg\u00e5 dubletter
  var uniqueSub = [];
  for (var s = 0; s < subParts.length; s++) {
    if (uniqueSub.indexOf(subParts[s]) === -1) uniqueSub.push(subParts[s]);
  }

  h += '<div class="rejse__checkin">';
  h += '<div class="rejse__checkin-label">DAGENS REFLEKSION</div>';
  h += '<div class="rejse__checkin-title">' + todayQ + '</div>';
  h += '<div class="rejse__checkin-sub">' + uniqueSub.join(' \u00B7 ') + '</div>';
  h += '</div>';

  // Textarea
  h += '<div class="rejse__wf">';
  h += '<textarea placeholder="Skriv her \u2014 eller lad det hvile..."></textarea>';
  h += '</div>';

  // Gem-knap
  h += '<button class="rejse__btn" onclick="journalSave()">Gem refleksion</button>';

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Tidligere refleksioner
  h += '<h2 class="rejse__t2">Tidligere refleksioner</h2>';
  h += '<p class="rejse__intr">Dine tanker samler sig her som blade p\u00e5 en sti. N\u00e5r du l\u00e6ser dem igen, kan du m\u00e5ske se hvad der var p\u00e5 vej \u2014 f\u00f8r du selv vidste det.</p>';

  // Filter-chips
  var filters = [
    { id: 'seneste', label: 'Seneste' },
    { id: 'maaned', label: 'Denne m\u00e5ned' },
    { id: 'alle', label: 'Alle' }
  ];
  h += '<div class="rejse__chips">';
  for (var f = 0; f < filters.length; f++) {
    var fl = filters[f];
    var active = fl.id === _journalFilter ? ' rejse__chip--active' : '';
    h += '<button class="rejse__chip' + active + '" onclick="journalSetFilter(\'' + fl.id + '\')">' + fl.label + '</button>';
  }
  h += '</div>';

  // Journal entries
  for (var j = 0; j < filtered.length; j++) {
    var entry = filtered[j];
    var dateStr = entry.date || entry.savedDate || '';
    if (entry.savedDate && !entry.date) {
      var dd = new Date(entry.savedDate);
      var months = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
      dateStr = dd.getDate() + '. ' + months[dd.getMonth()].toUpperCase() + ' ' + dd.getFullYear();
    }
    h += '<div class="rejse__je">';
    h += '<div class="rejse__je-date">' + dateStr + '</div>';
    h += '<div class="rejse__je-q">' + (entry.q || '') + '</div>';
    h += '<div class="rejse__je-t">' + (entry.text || '') + '</div>';
    if (entry.tags && entry.tags.length) {
      h += '<div class="rejse__je-tags">';
      for (var t = 0; t < entry.tags.length; t++) {
        h += '<span class="rejse__jtag">' + entry.tags[t] + '</span>';
      }
      h += '</div>';
    }
    h += '</div>';
  }

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // M\u00f8nster-indsigt
  h += '<h2 class="rejse__t2">M\u00f8nster i din journal</h2>';
  h += '<p class="rejse__intr">N\u00e5r du l\u00e6ser dine refleksioner over tid, tr\u00e6der m\u00f8nstre frem som du ikke kunne se indefra. Ordene ved ofte mere end tanken \u2014 de afsl\u00f8rer hvad kroppen allerede vidste.</p>';
  h += '<div class="rejse__ins">';
  h += '<div class="rejse__ins-label">M\u00d8NSTER I DIN JOURNAL</div>';
  h += '<div class="rejse__ins-text">Du skriver mest om ro og stilhed i vinterm\u00e5nederne. Dine refleksioner om relationer kommer oftest i Jord-perioder. M\u00e5ske er der en forbindelse der.</div>';
  h += '</div>';

  // Link
  h += '<div class="rejse__link" onclick="App.loadScreen(\'refleksion\')">Se alle refleksioner fra Fase ' + phaseNum + ' \u2192</div>';

  // Del/Kopi\u00e9r/Gem
  h += '<div class="rejse__acts">';
  h += '<button class="rejse__act" onclick="actionShare()">Del</button>';
  h += '<button class="rejse__act" onclick="actionCopyLink()">Kopi\u00e9r</button>';
  h += '<button class="rejse__act" onclick="actionToggleSave(\'min-journal\')">Gem</button>';
  h += '</div>';

  el.innerHTML = h;
}

function journalSave() {
  var textarea = document.querySelector('.rejse__wf textarea');
  if (!textarea || !textarea.value.trim()) {
    showActionToast('Skriv noget f\u00f8rst');
    return;
  }

  var d = window._idagData || {};
  var phaseObj = d.lifePhase || {};
  var phaseNum = phaseObj.phase || 7;
  var season = d.season || { season: 'Vinter' };
  var domEl = d.dominantElement || 'VAND';
  var domName = domEl.charAt(0).toUpperCase() + domEl.slice(1).toLowerCase();

  var questions = REFLEKSION_DATA[phaseNum] || REFLEKSION_DATA[7];
  var dayIdx = new Date().getDate() % questions.length;

  var entry = {
    savedDate: getLocalDateStr(new Date()),
    q: questions[dayIdx],
    text: textarea.value.trim(),
    tags: ['Fase ' + phaseNum, season.season, domName]
  };

  var saved = [];
  try {
    var raw = localStorage.getItem('livsfaser_journal');
    if (raw) saved = JSON.parse(raw);
  } catch (e) {}
  saved.unshift(entry);
  localStorage.setItem('livsfaser_journal', JSON.stringify(saved));

  showActionToast('Refleksion gemt \u2713');
  initMinJournalScreen();
}
window.journalSave = journalSave;

function journalSetFilter(filterId) {
  _journalFilter = filterId;
  initMinJournalScreen();
}
window.journalSetFilter = journalSetFilter;

// ---- Niveau 2: Mine Samlinger (lavendel) ----

var SAMLINGER_EXAMPLE = [
  {
    icon: '\u2600\uFE0F',
    title: 'Min morgenrutine',
    meta: '6 elementer \u00B7 Brugt 34 gange',
    items: 'Vejrtr\u00e6kning (4-4-8) \u00B7 Meridian-strygning \u00B7 Varm citrondrik \u00B7 Yin Yoga Tr\u00e6...'
  },
  {
    icon: '\uD83C\uDF19',
    title: 'N\u00e5r jeg har brug for ro',
    meta: '5 elementer \u00B7 Brugt 12 gange',
    items: 'Ventral vagus vejrtr\u00e6kning \u00B7 Barnets stilling \u00B7 Varm suppe \u00B7 EFT for angst...'
  },
  {
    icon: '\uD83D\uDC8C',
    title: 'Til min datter',
    meta: '3 elementer \u00B7 Delt 1 gang',
    items: 'Fase 3 indsigt \u00B7 Tr\u00e6-element \u00f8velser \u00B7 Samtale\u00e5bnere mor-datter...'
  },
  {
    icon: '\u2744\uFE0F',
    title: 'Vinterens \u00f8velser',
    meta: '3 elementer',
    items: 'Nyre-strygning \u00B7 Vand-yoga \u00B7 Vinterkost...'
  }
];

function initMineSamlingerScreen() {
  var el = document.getElementById('mine-samlinger-content');
  if (!el) return;

  var h = '';
  h += '<h1 class="rejse__t1">Mine samlinger</h1>';
  h += '<p class="rejse__intr">Dine egne mapper med \u00f8velser, kost og visdom \u2014 samlet som du vil have det. Her skaber du dine egne kombinationer af det der virker bedst for dig.</p>';

  // Indsigt-boks
  h += '<div class="rejse__ins">';
  h += '<div class="rejse__ins-label">DINE SAMLINGER</div>';
  h += '<div class="rejse__ins-text">Du har 4 samlinger med 17 gemte elementer. Den du bruger mest er \u201cMin morgenrutine\u201d \u2014 m\u00e5ske kan du tilf\u00f8je en Vand-\u00f8velse der passer til vinteren.</div>';
  h += '</div>';

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Samlings-kort
  for (var i = 0; i < SAMLINGER_EXAMPLE.length; i++) {
    var s = SAMLINGER_EXAMPLE[i];
    h += '<div class="rejse__coll">';
    h += '<div class="rejse__coll-icon">' + s.icon + '</div>';
    h += '<h3>' + s.title + '</h3>';
    h += '<div class="rejse__coll-meta">' + s.meta + '</div>';
    h += '<div class="rejse__coll-items">' + s.items + '</div>';
    h += '<div class="rejse__coll-arrow">\u00c5bn \u2192</div>';
    h += '</div>';
  }

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Opret ny samling
  h += '<div class="rejse__create" onclick="showActionToast(\'Kommer snart\')">+ Opret ny samling</div>';

  // Hint
  h += '<div class="rejse__hint">Saml \u00f8velser, kost og visdom der h\u00f8rer sammen for dig. Du kan dele en hel samling med nogen du holder af.</div>';

  // Del/Kopi\u00e9r/Gem
  h += '<div class="rejse__acts">';
  h += '<button class="rejse__act" onclick="actionShare()">Del</button>';
  h += '<button class="rejse__act" onclick="actionCopyLink()">Kopi\u00e9r</button>';
  h += '<button class="rejse__act" onclick="actionToggleSave(\'mine-samlinger\')">Gem</button>';
  h += '</div>';

  el.innerHTML = h;
}

// ---- Niveau 2: Baggrundsviden (lavendel) ----

function initBaggrundsvidenScreen() {
  var el = document.getElementById('baggrundsviden-content');
  if (!el) return;

  var h = '';
  h += '<h1 class="rejse__t1">Baggrundsviden</h1>';
  h += '<p class="rejse__intr">Den dybere forst\u00e5else bag cyklusser, elementer og livets rytmer. Her finder du den viden der b\u00e6rer hele appen \u2014 fra kinesisk medicin til vedisk filosofi og epigenetik.</p>';

  // Kontrolcyklus-billede
  h += '<div class="rejse__fig">';
  h += '<img src="assets/images/kontrolcyklus.png" alt="Kontrolcyklussen" class="baggrund-kontrol-img">';
  h += '</div>';

  // Indsigt-boks
  h += '<div class="rejse__ins">';
  h += '<div class="rejse__ins-label">VIDEN DER B\u00c6RER</div>';
  h += '<div class="rejse__ins-text">Disse sider rummer den dybere baggrund \u2014 de traditioner, den forskning og den filosofi som bogens ni livsfaser hviler p\u00e5. Tag det i dit tempo.</div>';
  h += '</div>';

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Traditioner og systemer
  h += '<h2 class="rejse__t2">Traditioner og systemer</h2>';
  h += '<p class="rejse__intr">Kinesisk medicin, vedisk filosofi og ni kulturers visdom \u2014 forskellige sprog for den samme sandhed. De har alle set livets cykliske natur og givet den form.</p>';

  var traditions = [
    { tag: 'KINESISK MEDICIN', title: 'De fem elementer', desc: 'Vand, Tr\u00e6, Ild, Jord, Metal \u2014 elementernes cyklus, organer, f\u00f8lelser, \u00e5rstider og deres forbindelse til livets faser' },
    { tag: 'INDISK TRADITION', title: 'Vedisk filosofi', desc: 'Ashramerne, dharma, karma og de vediske livsperioder \u2014 en indisk spejling af de kinesiske cyklusser' },
    { tag: 'UNIVERSELT', title: 'Ni traditioner, \u00e9n visdom', desc: 'Fra Anishinaabe til nordisk, keltisk til sufisme \u2014 kulturer over hele verden har set de samme cykliske m\u00f8nstre' }
  ];
  for (var i = 0; i < traditions.length; i++) {
    var t = traditions[i];
    h += '<div class="rejse__bg">';
    h += '<div class="rejse__bg-tag">' + t.tag + '</div>';
    h += '<h3>' + t.title + '</h3>';
    h += '<p>' + t.desc + '</p>';
    h += '<div class="rejse__bg-arrow">L\u00e6s mere \u2192</div>';
    h += '</div>';
  }

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Traditionerne kort — scroll row
  h += '<h2 class="rejse__t2">Traditionerne kort</h2>';
  h += '<p class="rejse__intr">Fra Anishinaabe til nordisk, fra keltisk til M\u0101ori \u2014 et hurtigt overblik over de kulturer der alle har set de samme m\u00f8nstre i livets gang.</p>';

  var tradKort = [
    { name: 'Anishinaabe', desc: '7-\u00e5rs faser og 7 generationer' },
    { name: 'Keltisk', desc: '\u00c5rets hjul, 8 tidspunkter' },
    { name: 'Sufisme', desc: 'Sj\u00e6lens 7 stadier' },
    { name: 'Nordisk', desc: '9 verdener, Nornerne' },
    { name: 'M\u0101ori', desc: 'Whakapapa \u2014 alt forbundet' }
  ];
  h += '<div class="rejse__trad-row">';
  for (var j = 0; j < tradKort.length; j++) {
    var tk = tradKort[j];
    h += '<div class="rejse__trad">';
    h += '<div class="rejse__trad-name">' + tk.name + '</div>';
    h += '<div class="rejse__trad-desc">' + tk.desc + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Videnskab og krop
  h += '<h2 class="rejse__t2">Videnskab og krop</h2>';
  h += '<p class="rejse__intr">Moderne forskning bekr\u00e6fter hvad traditionerne altid har vidst. Her m\u00f8des neurologi, hormoner og epigenetik med kroppens dybe visdom om cyklusser.</p>';

  var videnskab = [
    { tag: 'FORSKNING', title: 'Videnskabens bekr\u00e6ftelse', desc: 'Hvad moderne forskning siger om de syv-\u00e5rige cyklusser \u2014 neurologi, hormoner, epigenetik og udviklingspsykologi' },
    { tag: 'F\u00d8LELSER', title: 'F\u00f8lelsernes funktion', desc: 'Hvordan f\u00f8lelser h\u00e6nger sammen med organer og elementer \u2014 og hvorfor de er dine vigtigste vejvisere' },
    { tag: 'KROPPEN', title: 'Yin, Yang og kvindekroppen', desc: 'Hvordan Yin og Yang skifter gennem livet \u2014 og hvad det betyder for din energi, din s\u00f8vn og din krop' }
  ];
  for (var k = 0; k < videnskab.length; k++) {
    var v = videnskab[k];
    h += '<div class="rejse__bg">';
    h += '<div class="rejse__bg-tag">' + v.tag + '</div>';
    h += '<h3>' + v.title + '</h3>';
    h += '<p>' + v.desc + '</p>';
    h += '<div class="rejse__bg-arrow">L\u00e6s mere \u2192</div>';
    h += '</div>';
  }

  // Separator
  h += '<div class="rejse__dots">\u00B7 \u00B7 \u00B7</div>';

  // Hint
  h += '<div class="rejse__hint">Denne viden er altid tilg\u00e6ngelig via S\u00f8g \u2014 du beh\u00f8ver ikke huske den, bare vide at den er her.</div>';

  // Del/Kopi\u00e9r/Gem
  h += '<div class="rejse__acts">';
  h += '<button class="rejse__act" onclick="actionShare()">Del</button>';
  h += '<button class="rejse__act" onclick="actionCopyLink()">Kopi\u00e9r</button>';
  h += '<button class="rejse__act" onclick="actionToggleSave(\'baggrundsviden\')">Gem</button>';
  h += '</div>';

  el.innerHTML = h;
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

function renderTrackingRecommendations() {
  var el = document.getElementById('tracking-recommendations');
  if (!el) return;

  ensureIdagData();
  var checkins = getCheckins();
  var insight = generateInsight(window._activeElements || []);
  var domEl = insight.dominantElement;
  var elLabel = ELEMENT_LABELS[domEl];

  var html = '<h3 class="livsfase-detail__section-title">Forslag til dig lige nu</h3>';
  html += '<p class="livsfase-detail__section-subtitle">\u00d8velser, n\u00e6ring og ro tilpasset dit element. Ikke regler du skal f\u00f8lge \u2014 men forslag din krop m\u00e5ske allerede beder om stille.</p>';

  // If enough checkins, use pattern-based recommendations
  if (checkins.length >= 3) {
    // Find most common mood element
    var moodCounts = {};
    for (var i = 0; i < Math.min(checkins.length, 10); i++) {
      var c = checkins[i];
      if (c.mood) {
        var moodOpt = MOOD_OPTIONS.find(function(m) { return m.name === c.mood; });
        if (moodOpt) {
          moodCounts[moodOpt.element] = (moodCounts[moodOpt.element] || 0) + 1;
        }
      }
    }
    var topMoodEl = domEl;
    var topCount = 0;
    for (var mel in moodCounts) {
      if (moodCounts[mel] > topCount) { topCount = moodCounts[mel]; topMoodEl = mel; }
    }
    html += '<p class="hvadkandu__intro">Dine seneste check-ins peger mod ' + ELEMENT_LABELS[topMoodEl] + '-energi. Her er hvad der kan st\u00f8tte dig.</p>';
    domEl = topMoodEl;
  } else {
    html += '<p class="hvadkandu__intro">' + elLabel + '-elementet pr\u00e6ger din dag. Her er forslag baseret p\u00e5 dine cyklusser.</p>';
  }

  var yoga = INSIGHT_YOGA[domEl];
  var food = INSIGHT_FOOD[domEl];

  if (yoga && yoga.length > 0) {
    html += '<div class="hvadkandu__card" onclick="navigateToYogaWithElement(\'' + domEl + '\')">';
    html += '<p class="hvadkandu__label">\u00d8velse</p>';
    html += '<p class="hvadkandu__title">' + yoga[0].pose + '</p>';
    html += '<p class="hvadkandu__desc">' + yoga[0].desc.split('.')[0] + '. ' + yoga[0].tid + '.</p>';
    html += '<span class="hvadkandu__link">Pr\u00f8v nu \u2192</span></div>';
  }
  if (food && food.length > 0) {
    html += '<div class="hvadkandu__card" onclick="App.loadScreen(\'samlede-indsigt\')">';
    html += '<p class="hvadkandu__label">N\u00e6ring</p>';
    html += '<p class="hvadkandu__title">' + food[0].item + '</p>';
    html += '<p class="hvadkandu__desc">' + food[0].desc + '</p>';
    html += '<span class="hvadkandu__link">Se anbefalinger \u2192</span></div>';
  }

  html += '<div class="hvadkandu__card" onclick="App.loadScreen(\'refleksion\')">';
  html += '<p class="hvadkandu__label">Refleksion</p>';
  html += '<p class="hvadkandu__title">Tag et stille \u00f8jeblik</p>';
  html += '<p class="hvadkandu__desc">Sp\u00f8rgsm\u00e5l tilpasset din livsfase \u2014 du beh\u00f8ver ikke svare, bare lytte indad.</p>';
  html += '<span class="hvadkandu__link">\u00c5bn refleksion \u2192</span></div>';

  el.innerHTML = html;
}

function renderTimeline() {
  var el = document.getElementById('tracking-timeline');
  if (!el) return;

  var checkins = getCheckinsForPeriod(TrackingState.period);

  if (checkins.length === 0) {
    el.innerHTML = '<h3 class="tracking__timeline-title">Tidslinje</h3><p class="praksis__section-intro">Dine check-ins og refleksioner i kronologisk r\u00e6kkef\u00f8lge. Hver registrering b\u00e6rer \u00f8jeblikkets aftryk \u2014 og over tid viser de en bue du ikke kunne se indefra.</p><p class="tracking__empty">Ingen check-ins endnu. Start med din f\u00F8rste ovenfor.</p>';
    return;
  }

  var html = '<h3 class="tracking__timeline-title">Tidslinje</h3>';
  html += '<p class="praksis__section-intro">Dine check-ins og refleksioner i kronologisk r\u00e6kkef\u00f8lge. Hver registrering b\u00e6rer \u00f8jeblikkets aftryk \u2014 og over tid viser de en bue du ikke kunne se indefra.</p>';
  html += '<div class="tracking__timeline">';

  var max = Math.min(checkins.length, 20);
  for (var i = 0; i < max; i++) {
    var c = checkins[i];
    var moodInfo = MOOD_OPTIONS.find(function(m) { return m.id === c.mood; });
    var dateObj = new Date(c.date);
    var dateStr = dateObj.toLocaleDateString('da-DK', { weekday: 'short', day: 'numeric', month: 'short' });
    var timeStr = dateObj.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

    var clickDate = getLocalDateStr(dateObj);
    html += '<div class="tracking__entry tracking__entry--clickable" onclick="navigateToDinEnergiWithDate(\'' + clickDate + '\')">';
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

// Dynamic blue-based Venn circle colors derived from ELEMENT_BLUES
/**
 * VennTwo — Two overlapping circles (master template)
 * ViewBox 700×650, R=160, fixed lavender colors
 */
function renderVennTwo(opts) {
  var id = 'venn2-' + Math.random().toString(36).substr(2, 6);
  var W = 700, H = 650, R = 160;
  var cx1 = 265, cy1 = 320;
  var cx2 = 435, cy2 = 320;
  var font = VENN_FONT;

  // Text zone X centers
  var leftCX = 201;
  var rightCX = 494;
  var overlapCX = 350;

  // Helper: render a block of title (split over 2 lines) + lines
  function textBlock(cx, startY, title, lines, tSize, lSize, lineH) {
    var s = '';
    var titleLines = 0;
    if (title) {
      // Split title into two lines at middle space
      var words = title.split(' ');
      if (words.length >= 2) {
        var mid = Math.ceil(words.length / 2);
        var line1 = words.slice(0, mid).join(' ');
        var line2 = words.slice(mid).join(' ');
        s += '<text x="' + cx + '" y="' + startY + '" text-anchor="middle" font-family=' + font + ' font-size="' + tSize + '" font-weight="bold" fill="black">' + escapeHtml(line1) + '</text>';
        s += '<text x="' + cx + '" y="' + (startY + lineH) + '" text-anchor="middle" font-family=' + font + ' font-size="' + tSize + '" font-weight="bold" fill="black">' + escapeHtml(line2) + '</text>';
        titleLines = 2;
      } else {
        s += '<text x="' + cx + '" y="' + startY + '" text-anchor="middle" font-family=' + font + ' font-size="' + tSize + '" font-weight="bold" fill="black">' + escapeHtml(title) + '</text>';
        titleLines = 1;
      }
    }
    for (var i = 0; i < lines.length; i++) {
      var yy = startY + (titleLines + i) * lineH;
      if (titleLines > 0) yy = startY + titleLines * lineH + i * lineH;
      var italic = lines[i].charAt(0) === '*';
      var txt = italic ? lines[i].substring(1) : lines[i];
      s += '<text x="' + cx + '" y="' + yy + '" text-anchor="middle" font-family=' + font + ' font-size="' + lSize + '"' + (italic ? ' font-style="italic"' : '') + ' fill="black">' + escapeHtml(txt) + '</text>';
    }
    return s;
  }

  var svg = '<div class="venn venn--two" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';

  // Optional heading above diagram
  if (opts.heading) {
    svg += '<text x="350" y="40" text-anchor="middle" font-family=' + font + ' font-size="20" font-weight="bold" fill="black">' + escapeHtml(opts.heading) + '</text>';
  }

  // Circles — fixed blue, no stroke
  svg += '<circle cx="' + cx1 + '" cy="' + cy1 + '" r="' + R + '" fill="#7690C1" fill-opacity="0.60"/>';
  svg += '<circle cx="' + cx2 + '" cy="' + cy2 + '" r="' + R + '" fill="#7690C1" fill-opacity="0.80"/>';

  // Left zone text (centered vertically in circle, title split over 2 lines)
  var ll = opts.leftLines || [];
  var lsy = 290;
  svg += textBlock(leftCX, lsy, opts.leftTitle, ll, 20, 14, 19);

  // Right zone text (centered vertically in circle, title split over 2 lines)
  var rl = opts.rightLines || [];
  var rsy = 290;
  svg += textBlock(rightCX, rsy, opts.rightTitle, rl, 20, 14, 19);

  // Overlap zone text (centered vertically)
  var ol = opts.overlapLines || [];
  var osy = 300;
  svg += textBlock(overlapCX, osy, opts.overlapTitle, ol, 18, 14, 19);

  // Optional subtitle below
  if (opts.subtitle) {
    svg += '<text x="350" y="590" text-anchor="middle" font-family=' + font + ' font-size="14" font-style="italic" fill="black">' + escapeHtml(opts.subtitle) + '</text>';
  }

  // Hit zones for interactivity
  if (opts.onLeftClick) svg += '<circle cx="' + leftCX + '" cy="320" r="70" fill="transparent" class="venn__zone" onclick="' + opts.onLeftClick + '" style="cursor:pointer"/>';
  if (opts.onRightClick) svg += '<circle cx="' + rightCX + '" cy="320" r="70" fill="transparent" class="venn__zone" onclick="' + opts.onRightClick + '" style="cursor:pointer"/>';
  if (opts.onOverlapClick) svg += '<rect x="275" y="250" width="150" height="140" fill="transparent" class="venn__zone" onclick="' + opts.onOverlapClick + '" style="cursor:pointer"/>';

  svg += '</svg></div>';
  return svg;
}

/**
 * VennThree — Three overlapping circles (master template)
 * ViewBox 600×600, R=150, fixed lavender colors
 */
function renderVennThree(opts) {
  var id = 'venn3-' + Math.random().toString(36).substr(2, 6);
  var W = 600, H = 600, R = 150;
  var cxA = 300, cyA = 190;   // top
  var cxB = 223, cyB = 330;   // bottom-left
  var cxC = 377, cyC = 330;   // bottom-right
  var font = VENN_FONT;

  // Text zone positions (exclusive areas)
  var tAx = 300, tAy = 115;   // top zone
  var tBx = 155, tBy = 370;   // bottom-left zone (raised for balance)
  var tCx = 445, tCy = 370;   // bottom-right zone (raised for balance)

  // Pairwise overlap midpoints
  var abX = 230, abY = 240;
  var acX = 370, acY = 240;
  var bcX = 300, bcY = 370;

  // True centroid
  var cX = 300, cY = 280;

  // Helper
  function t(x, y, text, size, weight, italic) {
    return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family=' + font + ' font-size="' + size + '"' + (weight ? ' font-weight="bold"' : '') + (italic ? ' font-style="italic"' : '') + ' fill="black">' + escapeHtml(text || '') + '</text>';
  }

  var svg = '<div class="venn venn--three" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';

  // Circles — fixed blue shades, no stroke
  svg += '<circle cx="' + cxA + '" cy="' + cyA + '" r="' + R + '" fill="#7690C1" fill-opacity="0.55"/>';
  svg += '<circle cx="' + cxB + '" cy="' + cyB + '" r="' + R + '" fill="#7690C1" fill-opacity="0.65"/>';
  svg += '<circle cx="' + cxC + '" cy="' + cyC + '" r="' + R + '" fill="#7690C1" fill-opacity="0.80"/>';

  // Zone A (top) — supports *prefix for italic
  var tl = opts.topLines || [];
  svg += t(tAx, tAy, opts.topTitle, 13, true);
  for (var i = 0; i < tl.length; i++) {
    var tItal = tl[i].charAt(0) === '*';
    var tTxt = tItal ? tl[i].substring(1) : tl[i];
    svg += t(tAx, tAy + (i+1)*15, tTxt, 12, false, tItal);
  }

  // Zone B (bottom-left) — supports *prefix for italic
  var bl = opts.bottomLeftLines || [];
  svg += t(tBx, tBy, opts.bottomLeftTitle, 13, true);
  for (var j = 0; j < bl.length; j++) {
    var bItal = bl[j].charAt(0) === '*';
    var bTxt = bItal ? bl[j].substring(1) : bl[j];
    svg += t(tBx, tBy + (j+1)*15, bTxt, 12, false, bItal);
  }

  // Zone C (bottom-right) — supports *prefix for italic
  var br = opts.bottomRightLines || [];
  svg += t(tCx, tCy, opts.bottomRightTitle, 13, true);
  for (var k = 0; k < br.length; k++) {
    var rItal = br[k].charAt(0) === '*';
    var rTxt = rItal ? br[k].substring(1) : br[k];
    svg += t(tCx, tCy + (k+1)*15, rTxt, 12, false, rItal);
  }

  // Pairwise overlaps (two sizes up)
  svg += t(abX, abY, opts.overlapAB, 13, false);
  svg += t(acX, acY, opts.overlapAC, 13, false);
  svg += t(bcX, bcY, opts.overlapBC, 13, false);

  // Center
  var cl = opts.centerLines || [];
  svg += t(cX, cY, opts.centerTitle, 14, true);
  for (var m = 0; m < cl.length; m++) {
    var cItalic = cl[m].charAt(0) === '*';
    var cTxt = cItalic ? cl[m].substring(1) : cl[m];
    svg += t(cX, cY + (m+1)*15, cTxt, 12, false, cItalic);
  }

  // Optional subtitle
  if (opts.subtitle) {
    svg += t(300, 550, opts.subtitle, 11, false, true);
    if (opts.subtitleLine2) svg += t(300, 564, opts.subtitleLine2, 11, false, true);
  }

  // Hit zones
  if (opts.onZoneClick) {
    var zr = 45;
    svg += '<circle cx="' + tAx + '" cy="' + (tAy+10) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','A') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + tBx + '" cy="' + (tBy+10) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','B') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + tCx + '" cy="' + (tCy+10) + '" r="' + zr + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','C') + '" style="cursor:pointer"/>';
    svg += '<circle cx="' + cX + '" cy="' + cY + '" r="' + (zr*0.7) + '" fill="transparent" class="venn__zone" onclick="' + opts.onZoneClick.replace('{zone}','center') + '" style="cursor:pointer"/>';
  }

  svg += '</svg></div>';
  return svg;
}

/**
 * VennFour — Four overlapping circles in diamond (master template)
 * ViewBox 600×600, R=150, fixed green-gray colors
 */
function renderVennFour(opts) {
  var id = 'venn4-' + Math.random().toString(36).substr(2, 6);
  var W = 600, H = 600, R = 150;
  var cxA = 300, cyA = 200;   // top
  var cxB = 200, cyB = 300;   // left
  var cxC = 400, cyC = 300;   // right
  var cxD = 300, cyD = 400;   // bottom
  var midX = 300, midY = 300;
  var font = VENN_FONT;

  // Text zone positions (exclusive areas, pushed outward)
  var tAx = 300, tAy = 110;
  var tBx = 110, tBy = 300;
  var tCx = 490, tCy = 300;
  var tDx = 300, tDy = 490;

  // Helper
  function t(x, y, text, size, weight, italic) {
    return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family=' + font + ' font-size="' + size + '"' + (weight ? ' font-weight="bold"' : '') + (italic ? ' font-style="italic"' : '') + ' fill="black">' + escapeHtml(text || '') + '</text>';
  }

  var svg = '<div class="venn venn--four" id="' + id + '">';
  svg += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" class="venn__svg">';

  // Circles — configurable color, default blue
  var fc = opts.fillColor || '#7690C1';
  svg += '<circle cx="' + cxA + '" cy="' + cyA + '" r="' + R + '" fill="' + fc + '" fill-opacity="0.50"/>';
  svg += '<circle cx="' + cxB + '" cy="' + cyB + '" r="' + R + '" fill="' + fc + '" fill-opacity="0.60"/>';
  svg += '<circle cx="' + cxC + '" cy="' + cyC + '" r="' + R + '" fill="' + fc + '" fill-opacity="0.70"/>';
  svg += '<circle cx="' + cxD + '" cy="' + cyD + '" r="' + R + '" fill="' + fc + '" fill-opacity="0.75"/>';

  // Zone labels (one size up)
  var al = opts.topLines || [];
  svg += t(tAx, tAy, opts.topTitle, 13, true);
  for (var i = 0; i < al.length; i++) svg += t(tAx, tAy + (i+1)*15, al[i], 12, false);

  var bll = opts.leftLines || [];
  svg += t(tBx, tBy, opts.leftTitle, 13, true);
  for (var j = 0; j < bll.length; j++) svg += t(tBx, tBy + (j+1)*15, bll[j], 12, false);

  var crl = opts.rightLines || [];
  svg += t(tCx, tCy, opts.rightTitle, 13, true);
  for (var k = 0; k < crl.length; k++) svg += t(tCx, tCy + (k+1)*15, crl[k], 12, false);

  var dl = opts.bottomLines || [];
  svg += t(tDx, tDy, opts.bottomTitle, 13, true);
  for (var l = 0; l < dl.length; l++) svg += t(tDx, tDy + (l+1)*15, dl[l], 12, false);

  // Pairwise overlaps (one size up)
  var hl = opts.highlights || [];
  for (var h = 0; h < hl.length; h++) {
    var hi = hl[h];
    var pairs = { AB: [cxA,cyA,cxB,cyB], AC: [cxA,cyA,cxC,cyC], AD: [cxA,cyA,cxD,cyD], BC: [cxB,cyB,cxC,cyC], BD: [cxB,cyB,cxD,cyD], CD: [cxC,cyC,cxD,cyD] };
    var p = pairs[hi.pair];
    if (p) {
      var mx = (p[0]+p[2])/2, my = (p[1]+p[3])/2;
      svg += t(mx, my, hi.text, 12, false);
    }
  }

  // Center text (one size up)
  var cll = opts.centerLines || [];
  var csY = midY - (cll.length * 15) / 2;
  svg += t(midX, csY, opts.centerTitle, 14, true);
  for (var m = 0; m < cll.length; m++) {
    var cItalic = cll[m].charAt(0) === '*';
    var cTxt = cItalic ? cll[m].substring(1) : cll[m];
    svg += t(midX, csY + (m+1)*15, cTxt, 12, false, cItalic);
  }

  // Extra positioned labels (for custom overlap text)
  var el = opts.extraLabels || [];
  for (var e = 0; e < el.length; e++) {
    svg += t(el[e].x, el[e].y, el[e].text, 12, false, el[e].italic);
  }

  svg += '</svg></div>';
  return svg;
}

// Expose Venn functions globally
window.renderVennTwo = renderVennTwo;
window.renderVennThree = renderVennThree;
window.renderVennFour = renderVennFour;

// ---- Circular Figure: Reusable ring of circles ----

var CIRCLE_PALETTE = ['#244382','#2E5196','#3860AA','#426FBE','#4F7DC8','#5E8AD0','#6E97D6','#7FA4DC','#8BA0D1'];

function renderCircularFigure(opts) {
  var items = opts.items || [];
  var n = items.length;
  var W = opts.width || 340;
  var H = opts.height || 340;
  var cR = opts.centerRadius || (n > 6 ? 52 : 44);
  var iR = opts.itemRadius || (n > 6 ? 30 : 34);
  var ringR = opts.ringRadius || (W / 2 - iR - 8);
  var cx = W / 2, cy = H / 2;
  var activeIdx = (opts.activeIndex != null) ? opts.activeIndex : -1;
  var font = VENN_FONT;
  var svg = '<div class="circular-fig" style="max-width:' + W + 'px;margin:0 auto"><svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" xmlns="http://www.w3.org/2000/svg">';

  // Center circle
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + cR + '" fill="#F0F4F8" stroke="#244382" stroke-width="2"/>';
  var cLabel = opts.centerLabel || '';
  var cSub = opts.centerSublabel || '';
  if (cLabel) {
    var cfs = cLabel.length > 12 ? 9 : (cLabel.length > 8 ? 10 : 11);
    svg += '<text x="' + cx + '" y="' + (cy - (cSub ? 5 : 0)) + '" text-anchor="middle" dominant-baseline="central" font-family="' + font + '" font-size="' + cfs + '" font-weight="700" fill="#244382">' + cLabel + '</text>';
  }
  if (cSub) {
    svg += '<text x="' + cx + '" y="' + (cy + 10) + '" text-anchor="middle" dominant-baseline="central" font-family="' + font + '" font-size="9" fill="#666">' + cSub + '</text>';
  }

  // Item circles
  var startAngle = -Math.PI / 2; // top
  for (var i = 0; i < n; i++) {
    var angle = startAngle + (2 * Math.PI * i / n);
    var ix = cx + ringR * Math.cos(angle);
    var iy = cy + ringR * Math.sin(angle);
    var item = items[i];
    var isActive = (i === activeIdx);
    var col = item.color || CIRCLE_PALETTE[i % CIRCLE_PALETTE.length];
    var fillOpacity = isActive ? 0.25 : 0.1;
    var strokeW = isActive ? 3 : 1.5;
    var r = isActive ? iR + 3 : iR;

    // Glow for active
    if (isActive) {
      svg += '<circle cx="' + ix + '" cy="' + iy + '" r="' + (r + 4) + '" fill="none" stroke="' + col + '" stroke-width="1" opacity="0.3"/>';
    }

    // Clickable circle
    var onclick = item.onClick ? ' onclick="' + item.onClick + '" style="cursor:pointer"' : '';
    svg += '<circle cx="' + ix + '" cy="' + iy + '" r="' + r + '" fill="' + col + '" fill-opacity="' + fillOpacity + '" stroke="' + col + '" stroke-width="' + strokeW + '"' + onclick + '/>';

    // Label (main)
    var label = item.label || '';
    var fs = label.length > 10 ? 9 : 10;
    svg += '<text x="' + ix + '" y="' + (iy - (item.sublabel ? 4 : 0)) + '" text-anchor="middle" dominant-baseline="central" font-family="' + font + '" font-size="' + fs + '" font-weight="' + (isActive ? '700' : '600') + '" fill="' + (isActive ? '#244382' : '#333') + '"' + onclick + '>' + label + '</text>';

    // Sublabel
    if (item.sublabel) {
      svg += '<text x="' + ix + '" y="' + (iy + 9) + '" text-anchor="middle" dominant-baseline="central" font-family="' + font + '" font-size="8" fill="#666"' + onclick + '>' + item.sublabel + '</text>';
    }
  }

  svg += '</svg></div>';
  return svg;
}

window.renderCircularFigure = renderCircularFigure;

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

// ---- Favoritter Screen ----

var SCREEN_INFO = {
  'samlede-indsigt': { title: 'Samlet indsigt for i dag', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' },
  'alle-faser': { title: 'Alle 9 faser', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
  'cyklusser-i-cyklusser': { title: 'Cyklusser i Cyklusser', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="9" cy="12" r="7"/><circle cx="15" cy="12" r="7"/></svg>' },
  'min-udvikling': { title: 'Min udvikling', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>' },
  'livsfase-detail': { title: 'Livsfase-detalje', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>' },
  'de-fire-uger': { title: 'De Fire Uger', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>' },
  'refleksion': { title: 'Refleksion', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>' },
  'kontrolcyklussen': { title: 'Elementernes Samspil', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><polygon points="12,2 22,8.5 19,19.5 5,19.5 2,8.5"/></svg>' },
  'foelelser': { title: 'Følelsernes Hjul', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
  'yin-yoga': { title: 'Yin Yoga', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="5" r="2.5"/><path d="M8 22l1-7H6l4-8h4l-2 5h3l-5 10"/></svg>' },
  'tidsrejse': { title: 'Tidsrejse', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>' },
  'de-ni-livsfaser': { title: 'De Ni Livsfaser', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#7690C1" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' }
};

function initFavoritterScreen() {
  var subtitleEl = document.getElementById('favoritter-subtitle');
  var vennEl = document.getElementById('favoritter-venn');
  var contentEl = document.getElementById('favoritter-content');
  if (!contentEl) return;

  var favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  var screens = favs.screens || [];

  // Subtitle
  if (subtitleEl) {
    subtitleEl.textContent = screens.length > 0
      ? screens.length + (screens.length === 1 ? ' side gemt' : ' sider gemt') + ' — dit personlige bibliotek'
      : 'Du har endnu ikke gemt noget. Tryk Gem på de sider, der taler til dig.';
  }

  // Venn
  if (vennEl) {
    vennEl.innerHTML = renderVennTwo({
      leftTitle: 'DET DU FINDER',
      leftLines: ['Indsigter · Øvelser', 'Faser · Følelser'],
      rightTitle: 'DET DU GEMMER',
      rightLines: ['Det der rører', 'Det der virker'],
      overlapTitle: 'DIN SAMLING',
      overlapLines: ['*Dit personlige', '*bibliotek']
    });
  }

  // Empty state
  if (screens.length === 0) {
    contentEl.innerHTML =
      '<div class="favoritter-empty">' +
        '<div class="favoritter-empty__icon">' +
          '<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#B8A6C0" stroke-width="1.2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>' +
        '</div>' +
        '<p class="favoritter-empty__text">' +
          'Når du udforsker appen, vil du finde sider der taler til dig lige nu. ' +
          'Tryk <strong>Gem</strong> på dem — så samler de sig her, som dit eget lille arkiv over det der betyder noget.' +
        '</p>' +
        '<button class="favoritter-empty__btn" onclick="App.loadScreen(\'idag\')">Gå til I dag</button>' +
      '</div>';
    return;
  }

  // Render saved screens
  var html = '<div class="favoritter-list">';
  for (var i = 0; i < screens.length; i++) {
    var screenName = screens[i];
    var info = SCREEN_INFO[screenName];
    if (!info) continue;

    html += '<div class="favoritter-item">';
    html += '<div class="favoritter-item__main" onclick="App.loadScreen(\'' + screenName + '\')">';
    html += '<div class="favoritter-item__icon">' + info.icon + '</div>';
    html += '<div class="favoritter-item__text">';
    html += '<h3 class="favoritter-item__title">' + info.title + '</h3>';
    html += '</div>';
    html += '<span class="favoritter-item__arrow">›</span>';
    html += '</div>';
    html += '<button class="favoritter-item__remove" onclick="removeFavorit(\'' + screenName + '\')" title="Fjern">';
    html += '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#C85A54" stroke-width="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    html += '</button>';
    html += '</div>';
  }
  html += '</div>';

  contentEl.innerHTML = html;
}

function removeFavorit(screenName) {
  var favs = JSON.parse(localStorage.getItem('favorites') || '{}');
  if (!favs.screens) return;
  var idx = favs.screens.indexOf(screenName);
  if (idx !== -1) {
    favs.screens.splice(idx, 1);
    localStorage.setItem('favorites', JSON.stringify(favs));
    showActionToast('Fjernet fra favoritter');
    initFavoritterScreen();
  }
}

window.removeFavorit = removeFavorit;

// ---- Hamburger Menu ----

var MENU_DATA = [
  {
    id: 'lige-nu',
    title: 'Lige nu',
    direct: true
  },
  {
    id: 'mine-vinduer',
    title: 'Mine Vinduer',
    direct: true
  },
  { separator: true },
  {
    id: 'mine-cyklusser',
    title: 'Mine Cyklusser',
    children: [
      { label: 'Oversigt', action: "App.loadScreen('mine-cyklusser')" },
      { label: 'Cyklusser i Cyklusser', action: "App.loadScreen('cyklusser-i-cyklusser')" },
      { label: 'Kroppens store overgange', action: "App.loadScreen('kroppens-store-overgange')" },
      { label: 'De Ni Livsfaser', action: "App.loadScreen('de-ni-livsfaser')" },
      { label: 'De Fire Uger', action: "App.loadScreen('de-fire-uger')" }
    ]
  },
  {
    id: 'mine-relationer',
    title: 'Mine Relationer',
    children: [
      { label: 'Oversigt', action: "App.loadScreen('mine-relationer')" },
      { label: 'Relationer lige nu', action: "App.loadScreen('relationer')" },
      { label: 'To Rytmer \u2014 Parforholdet', action: "App.loadScreen('to-rytmer')" },
      { label: 'Tre Generationer', action: "App.loadScreen('tre-generationer')" },
      { label: 'Epigenetik & Arv', action: "App.loadScreen('epigenetik-arv')" }
    ]
  },
  {
    id: 'min-praksis',
    title: 'Min Praksis',
    children: [
      { label: 'Oversigt', action: "App.loadScreen('min-praksis')" },
      { label: 'Yin Yoga', action: "App.loadScreen('yin-yoga')" },
      { label: 'F\u00f8lelsernes Hjul', action: "App.loadScreen('foelelser')" },
      { label: 'Refleksion', action: "App.loadScreen('refleksion')" },
      { label: 'Kost & Urter', action: "App.loadScreen('kost-urter')" },
      { label: 'Hvad har hjulpet andre', action: "App.loadScreen('hvad-har-hjulpet')" }
    ]
  },
  {
    id: 'min-rejse',
    title: 'Min Rejse',
    children: [
      { label: 'Oversigt', action: "App.loadScreen('min-rejse')" },
      { label: 'Min udvikling', action: "App.loadScreen('min-udvikling')" },
      { label: 'Min journal', action: "App.loadScreen('min-journal')" },
      { label: 'Mine favoritter', action: "App.loadScreen('mine-favoritter')" },
      { label: 'Mine samlinger', action: "App.loadScreen('mine-samlinger')" },
      { label: 'Baggrundsviden', action: "App.loadScreen('baggrundsviden')" }
    ]
  },
  { separator: true },
  {
    id: 'soeg',
    title: 'S\u00f8g',
    direct: true
  },
  {
    id: 'indstillinger',
    title: 'Indstillinger',
    children: [
      { label: 'Min profil', action: "navigateToIndstillinger('profil')" },
      { label: 'Cyklus-indstillinger', action: "navigateToIndstillinger('cyklus')" },
      { label: 'Notifikationer', action: "navigateToIndstillinger('notifikationer')" },
      { label: 'Privatliv & deling', action: "navigateToIndstillinger('privatliv')" },
      { label: 'Udseende', action: "navigateToIndstillinger('udseende')" },
      { label: 'Data', action: "navigateToIndstillinger('data')" }
    ]
  }
];

var _menuExpandedSections = {};

function toggleMenu() {
  var overlay = document.getElementById('menu-overlay');
  if (!overlay) return;
  var isOpen = overlay.classList.contains('menu-overlay--open');

  if (!isOpen) {
    renderMenuContent();
    overlay.classList.add('menu-overlay--open');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('menu-overlay--open');
    document.body.style.overflow = '';
  }
}
window.toggleMenu = toggleMenu;

function renderMenuContent() {
  var nav = document.getElementById('menu-nav');
  if (!nav) return;

  var html = '';
  for (var i = 0; i < MENU_DATA.length; i++) {
    var item = MENU_DATA[i];

    if (item.separator) {
      html += '<div class="menu-separator"></div>';
      continue;
    }

    var isExpanded = !!_menuExpandedSections[item.id];

    if (item.direct) {
      html += '<div class="menu-item">';
      html += '<button class="menu-item__header menu-item__header--direct" onclick="menuDirectAction(\'' + item.id + '\')">';
      html += '<span class="menu-item__title">' + item.title + '</span>';
      html += '<span class="menu-item__arrow">\u203A</span>';
      html += '</button>';
      html += '</div>';
    } else {
      html += '<div class="menu-item' + (isExpanded ? ' menu-item--expanded' : '') + '" id="menu-section-' + item.id + '">';
      html += '<button class="menu-item__header" onclick="toggleMenuSection(\'' + item.id + '\')">';
      html += '<span class="menu-item__title">' + item.title + '</span>';
      html += '<span class="menu-item__arrow">\u203A</span>';
      html += '</button>';
      html += '<div class="menu-item__children">';
      for (var j = 0; j < item.children.length; j++) {
        var child = item.children[j];
        html += '<button class="menu-subitem" onclick="menuNavigate(' + i + ', ' + j + ')">' + child.label + '</button>';
      }
      html += '</div>';
      html += '</div>';
    }
  }
  nav.innerHTML = html;
}

function toggleMenuSection(sectionId) {
  _menuExpandedSections[sectionId] = !_menuExpandedSections[sectionId];
  var el = document.getElementById('menu-section-' + sectionId);
  if (el) {
    el.classList.toggle('menu-item--expanded', _menuExpandedSections[sectionId]);
  }
}
window.toggleMenuSection = toggleMenuSection;

function menuNavigate(itemIndex, childIndex) {
  var item = MENU_DATA[itemIndex];
  if (!item || !item.children || !item.children[childIndex]) return;
  var child = item.children[childIndex];
  toggleMenu();
  setTimeout(function() {
    eval(child.action);
  }, 50);
}
window.menuNavigate = menuNavigate;

function menuDirectAction(itemId) {
  if (itemId === 'lige-nu') {
    toggleMenu();
    setTimeout(function() { App.loadScreen('idag'); }, 50);
  } else if (itemId === 'mine-vinduer') {
    toggleMenu();
    setTimeout(function() { App.loadScreen('mine-vinduer'); }, 50);
  } else if (itemId === 'soeg') {
    toggleMenu();
    setTimeout(function() { App.loadScreen('soeg'); }, 50);
  }
}
window.menuDirectAction = menuDirectAction;

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
    screen: 'foelelser',
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
    screen: 'kost-urter',
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
    screen: 'kroppens-store-overgange',
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
  // Navigate to dedicated søg screen instead of overlay
  App.loadScreen('soeg');
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

// ---- Søg Screen (full page) ----

// Category data for søg screen — icons as text characters (matching mockup)
var SOEG_CATEGORIES = [
  { id: 'oevelser', title: 'Øvelser', icon: '☯', desc: 'Yin yoga, åndedræt, EFT-tapping, meditation og meridianstrygning — tilpasset det element dine cyklusser kalder på.', screen: 'samlede-indsigt' },
  { id: 'foelelser', title: 'Følelser', icon: '♡', desc: 'Vrede, frygt, bekymring, sorg og glæde — hver følelse hører til et element. Forstå hvad din krop prøver at fortælle dig.', screen: 'foelelser' },
  { id: 'livsfaser', title: 'Livsfaser', icon: '◐', desc: 'Ni syv-års cyklusser fra fødsel til visdom. Hver fase bærer sit eget element og sin egen energi.', screen: 'alle-faser' },
  { id: 'elementer', title: 'Elementer', icon: '△', desc: 'Vand, Træ, Ild, Jord og Metal — de fem kræfter der styrer alt fra årstider til organer. Lær dem at kende.', screen: 'samlede-indsigt' },
  { id: 'relationer', title: 'Relationer', icon: '⊻', desc: 'Når to mennesker mødes, mødes to cyklus-systemer. Se hvordan jeres livsfaser, elementer og energier interagerer.', screen: 'mine-relationer' },
  { id: 'kost', title: 'Kost & Næring', icon: '❊', desc: 'Mad er medicin — det vidste kinesisk medicin for tusind år siden. Find fødevarer, urter og tilberedning tilpasset dit element.', screen: 'kost-urter' },
  { id: 'tidsrejse', title: 'Tidsrejse', icon: '◷', desc: 'Rejse i tid — bagud for at forstå, fremad for at forberede. Se hvilke cyklusser der var aktive ved vigtige tidspunkter.', screen: 'tidsrejse' },
  { id: 'overgange', title: 'Kroppens overgange', icon: '⌒', desc: 'Pubertet, graviditet, overgangsalder — de store vendepunkter, hvor ét element afløser et andet.', screen: 'kroppens-store-overgange' },
  { id: 'tracking', title: 'Tracking & Mønstre', icon: '⟋', desc: 'Over tid vokser din egen visdom. Registrér din energi, dine mønstre og dine indsigter — og se dem i sammenhæng.', screen: 'min-udvikling' },
  { id: 'epigenetik', title: 'Epigenetik & Arv', icon: '⊙', desc: 'Din mors livsfase da hun fødte dig påvirkede dit udgangspunkt. Udforsk den forskning der viser, hvordan cyklusser nedarves.', screen: 'samlede-indsigt' },
  { id: 'baggrund', title: 'Baggrundsviden', icon: '▤', desc: 'Ni forskellige kulturer har opdaget det samme: livet bevæger sig i cyklusser. Fra kinesisk medicin til vedisk filosofi.', screen: 'baggrundsviden' },
  { id: 'kollektiv', title: 'Kollektiv visdom', icon: '✦', desc: 'Hvad sker der, når mange kvinder samler deres erfaringer? Anonyme mønstre og fælles indsigter der vokser over tid.', screen: 'min-rejse' }
];

function initSoegScreen() {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var now = new Date();
  var season = calculateSeason(now);
  var phase = user.phase || 9;
  var element = user.element || 'VAND';

  // Season name for tags
  var seasonTagMap = { 'Vinter': 'Vinterøvelser', 'Forår': 'Forårsøvelser', 'Sommer': 'Sommerøvelser', 'Sensommer': 'Sensommerøvelser', 'Efterår': 'Efterårsøvelser' };
  var seasonTag = seasonTagMap[season.season] || 'Vinterøvelser';
  var elementLabel = ELEMENT_LABELS[element] || 'Vand';

  // Render POPULÆRT LIGE NU tags
  var popEl = document.getElementById('soeg-tags-populaert');
  if (popEl) {
    var html = '';
    html += '<div class="soeg__tags-label">POPULÆRT LIGE NU</div>';
    html += '<div class="soeg__tags">';
    html += '<button class="soeg__tag soeg__tag--hot" onclick="handleSoegTag(\'Vrede\')">Vrede</button>';
    html += '<button class="soeg__tag soeg__tag--hot" onclick="handleSoegTag(\'Bekymring\')">Bekymring</button>';
    html += '<button class="soeg__tag" onclick="handleSoegTag(\'Overgangsalder\')">Overgangsalder</button>';
    html += '<button class="soeg__tag" onclick="handleSoegTag(\'Frygt\')">Frygt</button>';
    html += '<button class="soeg__tag" onclick="handleSoegTag(\'Sorg\')">Sorg</button>';
    html += '<button class="soeg__tag" onclick="handleSoegTag(\'Glæde\')">Glæde</button>';
    html += '</div>';
    popEl.innerHTML = html;
  }

  // Render TILPASSET DIG tags (dynamic)
  var tilEl = document.getElementById('soeg-tags-tilpasset');
  if (tilEl) {
    var html2 = '';
    html2 += '<div class="soeg__tags-label soeg__tags-label--spaced">TILPASSET DIG</div>';
    html2 += '<div class="soeg__tags">';
    html2 += '<button class="soeg__tag soeg__tag--hot" onclick="handleSoegTag(\'Fase ' + phase + '\')">Fase ' + phase + '</button>';
    html2 += '<button class="soeg__tag" onclick="handleSoegTag(\'' + seasonTag + '\')">' + seasonTag + '</button>';
    html2 += '<button class="soeg__tag" onclick="handleSoegTag(\'Yin Yoga\')">Yin Yoga</button>';
    html2 += '<button class="soeg__tag" onclick="handleSoegTag(\'' + elementLabel + '-element\')">' + elementLabel + '-element</button>';
    html2 += '<button class="soeg__tag" onclick="handleSoegTag(\'' + elementLabel + '-kost\')">' + elementLabel + '-kost</button>';
    html2 += '</div>';
    tilEl.innerHTML = html2;
  }

  // Render 12 category cards
  var catEl = document.getElementById('soeg-kategorier');
  if (catEl) {
    var html3 = '';
    for (var i = 0; i < SOEG_CATEGORIES.length; i++) {
      var cat = SOEG_CATEGORIES[i];
      html3 += '<div class="soeg__cat" onclick="soegNavigate(\'' + cat.screen + '\')">';
      html3 += '<div class="soeg__cat-icon">' + cat.icon + '</div>';
      html3 += '<div class="soeg__cat-body">';
      html3 += '<div class="soeg__cat-title">' + cat.title + '</div>';
      html3 += '<p class="soeg__cat-desc">' + cat.desc + '</p>';
      html3 += '</div>';
      html3 += '</div>';
    }
    catEl.innerHTML = html3;
  }

  // Focus search input
  var input = document.getElementById('soeg-input');
  if (input) {
    setTimeout(function() { input.focus(); }, 200);
  }
}

function handleSoegSearch(query) {
  var results = document.getElementById('soeg-results');
  var browse = document.getElementById('soeg-browse');
  if (!results) return;

  if (!query || query.length < 2) {
    results.innerHTML = '';
    if (browse) browse.style.display = '';
    return;
  }
  if (browse) browse.style.display = 'none';

  // Reuse existing search logic
  var q = query.toLowerCase();
  var matches = [];

  // 1. Søg i følelser
  var emotionKeys = Object.keys(EMOTION_ELEMENTS);
  for (var e = 0; e < emotionKeys.length; e++) {
    if (emotionKeys[e].indexOf(q) !== -1) {
      var em = EMOTION_ELEMENTS[emotionKeys[e]];
      matches.push({ title: emotionKeys[e].charAt(0).toUpperCase() + emotionKeys[e].slice(1), subtitle: ELEMENT_LABELS[em.element] + '-element \u00B7 ' + em.desc.substring(0, 60) + '\u2026', action: "App.loadScreen('foelelser')" });
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
        matches.push({ title: poses[yp].pose, subtitle: ELEMENT_LABELS[yogaKeys[y]] + '-element \u00B7 Yin Yoga', action: "App.loadScreen('yin-yoga')" });
      }
    }
  }

  // 5. Søg i mad
  var foodKeys = Object.keys(INSIGHT_FOOD);
  for (var f = 0; f < foodKeys.length; f++) {
    var foods = INSIGHT_FOOD[foodKeys[f]];
    for (var fi = 0; fi < foods.length; fi++) {
      if (foods[fi].item.toLowerCase().indexOf(q) !== -1 || foods[fi].desc.toLowerCase().indexOf(q) !== -1) {
        matches.push({ title: foods[fi].item, subtitle: ELEMENT_LABELS[foodKeys[f]] + '-element \u00B7 Kost & N\u00E6ring', action: "App.loadScreen('kost-urter')" });
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
  for (var c = 0; c < SOEG_CATEGORIES.length; c++) {
    var cat = SOEG_CATEGORIES[c];
    if (cat.title.toLowerCase().indexOf(q) !== -1 || cat.desc.toLowerCase().indexOf(q) !== -1) {
      matches.push({ title: cat.title, subtitle: cat.desc.substring(0, 70) + '\u2026', action: "App.loadScreen('" + cat.screen + "')" });
    }
  }

  // 8. Generelle søgetermer
  if ('overgangsalder'.indexOf(q) !== -1 || q.indexOf('overgang') !== -1) {
    matches.push({ title: 'Overgangsalder', subtitle: 'Fase 7\u20138 \u00B7 Jord & Metal \u2014 en af kroppens store overgange', action: "App.loadScreen('kroppens-store-overgange')" });
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
  if ('tracking'.indexOf(q) !== -1 || q.indexOf('mønster') !== -1 || q.indexOf('m\u00F8nster') !== -1) {
    matches.push({ title: 'Tracking & M\u00F8nstre', subtitle: 'F\u00F8lg din energi over tid', action: "App.loadScreen('min-udvikling')" });
  }
  if (q.indexOf('vinter') !== -1) {
    matches.push({ title: 'Vinter\u00F8velser', subtitle: 'Vand-element \u00B7 \u00D8velser der n\u00E6rer nyrer og ro', action: "App.loadScreen('samlede-indsigt')" });
  }

  // Deduplicate
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
    results.innerHTML = '<p class="soeg__empty">Ingen resultater for \u201C' + escapeHtml(query) + '\u201D</p>';
    return;
  }

  var html = '';
  for (var m = 0; m < matches.length; m++) {
    var match = matches[m];
    html += '<div class="soeg__result" onclick="' + match.action + '">';
    html += '<div class="soeg__result-title">' + match.title + '</div>';
    html += '<p class="soeg__result-subtitle">' + match.subtitle + '</p>';
    html += '</div>';
  }
  results.innerHTML = html;
}

function handleSoegTag(tag) {
  var input = document.getElementById('soeg-input');
  if (input) { input.value = tag; }
  handleSoegSearch(tag);
}

function soegNavigate(screen) {
  App.loadScreen(screen);
}

window.initSoegScreen = initSoegScreen;
window.handleSoegSearch = handleSoegSearch;
window.handleSoegTag = handleSoegTag;
window.soegNavigate = soegNavigate;

// ---- Feature: De Ni Livsfaser ----

function navigateToFaseDetail(phaseNum) {
  window._selectedPhase = phaseNum;
  App.loadScreen('livsfase-detail');
}
window.navigateToFaseDetail = navigateToFaseDetail;

// Fase-kort beskrivelser (fra mockup) - element-tags bruger overgang-elementer
var DNL_ELEMENT_TAGS = {
  1: 'VAND', 2: 'VAND-TR\u00c6', 3: 'TR\u00c6', 4: 'TR\u00c6-ILD',
  5: 'ILD', 6: 'ILD-JORD', 7: 'JORD-METAL', 8: 'METAL', 9: 'VAND'
};

var DNL_DESCRIPTIONS = {
  1: 'Nyrernes tid. Opbygning af Jing. Den stille grundl\u00e6ggelse af alt der kommer.',
  2: 'Fra vandets stille opbygning til tr\u00e6ets f\u00f8rste skud. Nysgerrighed og de f\u00f8rste gr\u00e6nser.',
  3: 'Pubertet, identitet, opr\u00f8r. Leverens tid \u2014 vrede og v\u00e6kst som to sider af samme kraft.',
  4: 'Ildens \u00e5r begynder. K\u00e6rlighed, ambition, udadvendthed. Kroppen p\u00e5 sit st\u00e6rkeste.',
  5: 'Hjertets tid. Fuld Ild-energi. Karriere, familie, identitet \u2014 alt br\u00e6nder.',
  6: 'Fra Ild til Jord. Det stille vendepunkt. Hvad er essentielt?',
  7: 'Jordens tid. Overgangsalderen n\u00e6rmer sig. Kroppen beder om balance og ro.',
  8: 'Lungernes tid. At give slip. Hvad har du brug for \u2014 og hvad kan du l\u00e6gge fra dig?',
  9: 'Nyrernes tid igen. Cirklen sluttes. Energien vender hjem til det element, den begyndte i.'
};

function renderDnlArcSvg(userPhase) {
  // 9 cirkler i en bue fra venstre-lav til h\u00f8jre-lav med top i midten
  var positions = [
    { x: 22, y: 58 }, { x: 56, y: 40 }, { x: 92, y: 26 },
    { x: 128, y: 18 }, { x: 164, y: 18 }, { x: 200, y: 26 },
    { x: 234, y: 40 }, { x: 262, y: 58 }, { x: 284, y: 74 }
  ];

  var svg = '<svg viewBox="0 0 300 85" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;height:auto;display:block;margin:0 auto">';

  for (var i = 0; i < 9; i++) {
    var p = positions[i];
    var num = i + 1;
    var isActive = (num === userPhase);

    if (isActive) {
      svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="14" fill="rgba(118,144,193,0.1)" stroke="#5A74A5" stroke-width="1.5"/>';
      svg += '<text x="' + p.x + '" y="' + (p.y + 4) + '" font-family="Georgia,\'Times New Roman\',serif" font-size="10" fill="#5A74A5" font-weight="600" text-anchor="middle">' + num + '</text>';
    } else {
      svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="13" fill="rgba(118,144,193,0.08)" stroke="rgba(118,144,193,0.2)" stroke-width="1"/>';
      svg += '<text x="' + p.x + '" y="' + (p.y + 4) + '" font-family="Georgia,\'Times New Roman\',serif" font-size="10" fill="#7690C1" text-anchor="middle">' + num + '</text>';
    }
  }

  svg += '</svg>';
  return svg;
}

function initDeNiLivsfaserScreen() {
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var userPhase = userData.phase || 0;

  // Bue-billede
  var arcEl = document.getElementById('dnl-arc');
  if (arcEl) {
    arcEl.innerHTML = '<img src="assets/images/de_ni_livsfaser.png" alt="De ni livsfaser" class="dnl-arc-img">';
  }

  // DU ER I FASE X indsigt-boks
  var posEl = document.getElementById('dnl-position');
  if (posEl && PHASE_DATA[userPhase]) {
    var ph = PHASE_DATA[userPhase];
    var posText = '';
    if (userPhase === 9) {
      posText = 'Visdommens tid. Vand-element. Cirklen sluttes \u2014 du er vendt tilbage til det element, du begyndte med. Men med alt, livet har l\u00e6rt dig.';
    } else if (userPhase === 1) {
      posText = 'Livets begyndelse. Vand-element. Alt er nyt \u2014 den stille grundl\u00e6ggelse af alt der kommer.';
    } else {
      posText = ph.name + '. ' + ELEMENT_LABELS[ph.element] + '-element. Du er i gang med et af livets vigtige kapitler \u2014 ' + ph.startAge + ' til ' + ph.endAge + ' \u00e5r.';
    }
    var html = '<div class="mc__ins">';
    html += '<div class="mc__ins-label">DU ER I FASE ' + userPhase + '</div>';
    html += '<div class="mc__ins-text">' + posText + '</div>';
    html += '</div>';
    posEl.innerHTML = html;
  }

  // 9 fase-kort
  var faserEl = document.getElementById('dnl-faser');
  if (faserEl) {
    var fHtml = '<h2 class="rejse__t2">De ni kapitler</h2>';
    fHtml += '<p class="rejse__intr">Hvert kapitel i livet har sin egen energi, sine egne opgaver og sine egne gaver. Tryk p\u00e5 en fase for at udforske den i dybden \u2014 krop, sind, element og anbefalinger.</p>';
    for (var j = 1; j <= 9; j++) {
      var p = PHASE_DATA[j];
      var isCurrent = (j === userPhase);
      var elTag = DNL_ELEMENT_TAGS[j] || ELEMENT_LABELS[p.element];
      var desc = DNL_DESCRIPTIONS[j] || '';
      var ageRange = p.startAge + '-' + (j === 9 ? '63+' : p.endAge);

      fHtml += '<div class="mc__fc' + (isCurrent ? ' on' : '') + '" onclick="navigateToFaseDetail(' + j + ')">';
      fHtml += '<div class="mc__fc-hd">';
      fHtml += '<div class="mc__fc-num">FASE ' + j + ' \u00b7 ' + ageRange + ' \u00c5R</div>';
      fHtml += '<div class="mc__fc-el">' + elTag + '</div>';
      fHtml += '</div>';
      fHtml += '<div class="mc__fc-name">' + p.name + '</div>';
      fHtml += '<div class="mc__fc-text">' + desc + '</div>';
      if (isCurrent) {
        fHtml += '<div class="mc__fc-link">Du er i denne fase \u2014 udforsk den \u2192</div>';
      } else {
        fHtml += '<div class="mc__fc-link">Udforsk fase ' + j + ' \u2192</div>';
      }
      fHtml += '</div>';
    }
    faserEl.innerHTML = fHtml;
  }
}

function initLivsfaseDetailScreen() {
  var el = document.getElementById('livsfase-detail-content');
  if (!el) return;

  var phaseNum = window._selectedPhase || 1;
  var phase = PHASE_DATA[phaseNum];
  var detail = LIVSFASE_DETAIL[phaseNum];
  if (!phase || !detail) return;

  var html = '';

  // Title + badge
  html += '<div class="livsfase-detail__header">';
  html += '<div class="livsfase-detail__badge">' + phaseNum + '</div>';
  html += '<h1 class="rejse__t1">' + phase.name + '</h1>';
  html += '<p class="rejse__intr">' + phase.startAge + '\u2013' + phase.endAge + ' \u00e5r \u00B7 ' + ELEMENT_LABELS[phase.element] + '-element. Hvert kapitel i livet b\u00e6rer sin egen energi og sine egne gaver — her udfolder du det, du st\u00e5r midt i.</p>';
  html += '</div>';

  // Intro
  html += '<p class="livsfase-detail__intro">' + detail.introText + '</p>';

  // Venn diagram
  html += '<div class="livsfase-detail__venn">' + renderVennTwo({
    leftTitle: 'ELEMENT',
    leftLines: [ELEMENT_LABELS[phase.element], detail.organPar, detail.smag + ' \u00B7 ' + detail.aarstid],
    rightTitle: 'TEMAER',
    rightLines: detail.livstemaer.slice(0, 3),
    overlapTitle: 'KROPPEN VED',
    overlapLines: [detail.folelser.balance.split(',')[0].trim()],
    leftElement: phase.element,
    rightElement: phase.element
  }) + '</div>';

  // Info box
  html += '<div class="livsfase-detail__info">';
  html += '<div class="livsfase-detail__info-row"><span class="livsfase-detail__info-label">Element</span><span>' + ELEMENT_LABELS[phase.element] + ' \u2014 ' + ELEMENT_QUALITIES[phase.element] + '</span></div>';
  html += '<div class="livsfase-detail__info-row"><span class="livsfase-detail__info-label">Organpar</span><span>' + detail.organPar + '</span></div>';
  html += '<div class="livsfase-detail__info-row"><span class="livsfase-detail__info-label">I balance</span><span>' + detail.folelser.balance + '</span></div>';
  html += '<div class="livsfase-detail__info-row"><span class="livsfase-detail__info-label">I ubalance</span><span>' + detail.folelser.ubalance + '</span></div>';
  html += '<div class="livsfase-detail__info-row"><span class="livsfase-detail__info-label">Vedisk kobling</span><span>' + detail.vediskKobling + '</span></div>';
  html += '</div>';

  // Body text
  html += '<div class="livsfase-detail__section">';
  html += '<h3 class="livsfase-detail__section-title">Kroppen i denne fase</h3>';
  html += '<p class="livsfase-detail__section-subtitle">Kroppen taler sit eget sprog i hver livsfase. Her kan du l\u00e6se hvad den gennemg\u00e5r, hvad den har brug for, og hvordan du bedst st\u00f8tter den.</p>';
  html += '<p class="livsfase-detail__section-text">' + detail.kropTekst + '</p>';
  html += '</div>';

  // Mind text
  html += '<div class="livsfase-detail__section">';
  html += '<h3 class="livsfase-detail__section-title">Sindet i denne fase</h3>';
  html += '<p class="livsfase-detail__section-subtitle">Tanker, f\u00f8lelser og indre processer f\u00f8lger kroppens rytme. Det du oplever indeni er ikke tilf\u00e6ldigt \u2014 det er et udtryk for den fase du st\u00e5r i.</p>';
  html += '<p class="livsfase-detail__section-text">' + detail.sindTekst + '</p>';
  html += '</div>';

  // Recommendations
  html += '<div class="livsfase-detail__recs">';
  html += '<h3 class="livsfase-detail__section-title">Anbefalinger</h3>';
  html += '<p class="livsfase-detail__section-subtitle">Tre veje ind \u2014 \u00f8velse, kost og healinglyd. Alle er tilpasset denne fases element og den energi der pr\u00e6ger dig. V\u00e6lg det der kalder.</p>';
  var recs = [detail.oevelse, detail.kost, detail.healingLyd];
  var recLabels = ['\u00d8velse', 'Kost', 'Healing-lyd'];
  for (var r = 0; r < recs.length; r++) {
    html += '<div class="livsfase-detail__rec-card">';
    html += '<p class="livsfase-detail__rec-label">' + recLabels[r] + '</p>';
    html += '<p class="livsfase-detail__rec-title">' + recs[r].title + '</p>';
    html += '<p class="livsfase-detail__rec-desc">' + recs[r].desc + '</p>';
    html += '</div>';
  }
  html += '</div>';

  // Reflections
  html += '<div class="livsfase-detail__section">';
  html += '<h3 class="livsfase-detail__section-title">Tjek ind med dig selv</h3>';
  html += '<p class="livsfase-detail__section-subtitle">Sp\u00f8rgsm\u00e5l der ikke kr\u00e6ver svar lige nu. Lad dem synke ind og m\u00e6rk hvad der r\u00f8rer sig \u2014 m\u00e5ske overrasker svaret dig n\u00e5r det kommer.</p>';
  for (var q = 0; q < detail.refleksioner.length; q++) {
    html += '<p class="livsfase-detail__question">\u2022 ' + detail.refleksioner[q] + '</p>';
  }
  html += '</div>';

  // Time perspective
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.birthdate) {
    var userAge = calculateAge(user.birthdate);
    var userPhase = calculateLifePhase(userAge);
    if (userPhase.phase === phaseNum) {
      var yearsIn = Math.round((userAge - phase.startAge) * 10) / 10;
      var yearsLeft = Math.max(0, phase.endAge - userAge);
      html += '<div class="livsfase-detail__section livsfase-detail__tidsperspektiv">';
      html += '<h3 class="livsfase-detail__section-title">Tidsperspektiv</h3>';
      html += '<p class="livsfase-detail__section-subtitle">Tid er ikke bare \u00e5r der g\u00e5r. Her kan du se hvor du er i denne fase, hvor l\u00e6nge den varer endnu, og hvad der langsomt tr\u00e6kker n\u00e6rmere.</p>';
      html += '<p class="livsfase-detail__section-text">Du er ' + yearsIn + ' år inde i denne fase. ';
      if (yearsLeft > 1) {
        html += 'Om ca. ' + Math.round(yearsLeft) + ' år bevæger du dig videre til næste livsfase.';
      } else if (yearsLeft > 0) {
        html += 'Du nærmer dig slutningen af denne fase — en overgang venter.';
      }
      html += '</p>';
      html += '</div>';
    }
  }

  // Nav: prev/next
  html += '<div class="livsfase-detail__nav">';
  if (phaseNum > 1) {
    html += '<button class="livsfase-detail__nav-btn" onclick="navigateToFaseDetail(' + (phaseNum - 1) + ')">\u2039 Fase ' + (phaseNum - 1) + '</button>';
  } else {
    html += '<span></span>';
  }
  if (phaseNum < 9) {
    html += '<button class="livsfase-detail__nav-btn" onclick="navigateToFaseDetail(' + (phaseNum + 1) + ')">Fase ' + (phaseNum + 1) + ' \u203A</button>';
  } else {
    html += '<span></span>';
  }
  html += '</div>';

  // Action bar
  html += sectionDivider();
  html += renderActionBar('livsfase-detail');

  el.innerHTML = html;
}

// ---- Feature: De Fire Uger (new design) ----

var DFU_WEEK_SHORT = {
  1: { season: 'Vinter', element: 'VAND', desc: 'Hvile, stilhed, indadvendthed. Bl\u00f8dning. Kroppen renser.' },
  2: { season: 'For\u00e5r', element: 'TR\u00C6', desc: 'Energi stiger. Ny begyndelse. Klarhed vender tilbage.' },
  3: { season: 'Sommer', element: 'ILD', desc: '\u00C6gl\u00f8sning. Mest energi, mest udadvendt. Hjertet \u00e5bner.' },
  4: { season: 'Sensommer', element: 'METAL', desc: 'Energi falder. PMS. Kroppen sorterer. Behov for ro.' }
};

var DFU_MOON_SHORT = {
  1: { season: 'Vinter', element: 'VAND', desc: 'Nym\u00e5ne. Stilhed, nye intentioner, indre lytning.' },
  2: { season: 'For\u00e5r', element: 'TR\u00C6', desc: 'Tiltagende m\u00e5ne. V\u00e6kst, planl\u00e6gning, handling.' },
  3: { season: 'Sommer', element: 'ILD', desc: 'Fuldm\u00e5ne. Alt i fuld blomst, f\u00f8lelser p\u00e5 toppen.' },
  4: { season: 'Sensommer', element: 'JORD', desc: 'Aftagende m\u00e5ne. Sortering, eftertanke, taknemmelighed.' }
};

var DFU_GRADIENT_TEXTS = {
  1: { main: 'Giv dig selv varme. Varm mad, varme drikke, tidlig sengetid. Undg\u00e5 h\u00e5rd tr\u00e6ning de f\u00f8rste dage \u2014 din krop arbejder allerede.', sub: 'Yin Yoga Vand-element og Nyre-strygning er sk\u00e5nsomme m\u00e5der at st\u00f8tte kroppen i denne uge.' },
  2: { main: 'F\u00f8lg din stigende energi. Start nye projekter, bev\u00e6g dig dynamisk, spis gr\u00f8nt og spirende mad. Kroppen er klar til handling.', sub: 'Yin Yoga Tr\u00e6-element og Levermeridian-stræk \u00e5bner for kreativitetens flow.' },
  3: { main: 'Brug din udadvendte energi. Social aktivitet, intens bev\u00e6gelse, forbindelse og kreativt udtryk. Hjertet er \u00e5bent.', sub: 'Yin Yoga Ild-element og Hjerte\u00e5bnere st\u00f8tter kroppens naturlige gl\u00e6de.' },
  4: { main: 'S\u00e6nk tempoet. Rund af, ryd op, giv dig selv ro. Varm n\u00e6rende mad og tidlig sengetid. Undg\u00e5 store beslutninger.', sub: 'Yin Yoga Jord-element og Mave-Milt-meridian bringer ro til krop og sind.' }
};

function renderDfuCircleSvg(currentWeek) {
  var W = 220, H = 220, cx = 110, cy = 110, R = 85;
  // Quarter positions: FORÅR (top-right), SOMMER (bottom-right), SENSOMMER (bottom-left), VINTER (top-left)
  var quarterFills = [0.06, 0.08, 0.10, 0.12];
  var quarterStrokes = ['rgba(118,144,193,0.2)', 'rgba(118,144,193,0.2)', 'rgba(118,144,193,0.2)', 'rgba(118,144,193,0.2)'];
  var quarterStrokeW = [1, 1, 1, 1];
  // Active quarter gets stronger stroke
  quarterStrokes[currentWeek - 1] = '#7690C1';
  quarterStrokeW[currentWeek - 1] = 1.5;

  // Dot positions for each quarter center (for active marker)
  var dotPositions = [
    { x: cx + R * 0.48, y: cy - R * 0.48 },  // Q1: top-right (FORÅR)
    { x: cx + R * 0.48, y: cy + R * 0.48 },  // Q2: bottom-right (SOMMER)
    { x: cx - R * 0.48, y: cy + R * 0.48 },  // Q3: bottom-left (SENSOMMER)
    { x: cx - R * 0.48, y: cy - R * 0.48 }   // Q4: top-left (VINTER)
  ];

  var svg = '<svg width="' + W + '" height="' + H + '" xmlns="http://www.w3.org/2000/svg">';
  // Background circle
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="rgba(118,144,193,0.15)" stroke-width="1"/>';

  // 4 quarter arcs: top-right, bottom-right, bottom-left, top-left
  var paths = [
    'M ' + cx + ' ' + (cy - R) + ' A ' + R + ' ' + R + ' 0 0 1 ' + (cx + R) + ' ' + cy,
    'M ' + (cx + R) + ' ' + cy + ' A ' + R + ' ' + R + ' 0 0 1 ' + cx + ' ' + (cy + R),
    'M ' + cx + ' ' + (cy + R) + ' A ' + R + ' ' + R + ' 0 0 1 ' + (cx - R) + ' ' + cy,
    'M ' + (cx - R) + ' ' + cy + ' A ' + R + ' ' + R + ' 0 0 1 ' + cx + ' ' + (cy - R)
  ];
  for (var i = 0; i < 4; i++) {
    svg += '<path d="' + paths[i] + '" fill="rgba(118,144,193,' + quarterFills[i] + ')" stroke="' + quarterStrokes[i] + '" stroke-width="' + quarterStrokeW[i] + '"/>';
  }

  // Labels: FORÅR (top), SOMMER (right), SENSOMMER (bottom), VINTER (left)
  var labels = [
    { text: 'FOR\u00c5R', x: cx, y: cy - R - 7, color: currentWeek === 1 ? '#5A74A5' : '#7690C1' },
    { text: 'SOMMER', x: cx + R + 12, y: cy + 3, color: currentWeek === 2 ? '#5A74A5' : '#7690C1' },
    { text: 'SENSOMMER', x: cx, y: cy + R + 16, color: currentWeek === 3 ? '#5A74A5' : '#7690C1' },
    { text: 'VINTER', x: cx - R - 12, y: cy + 3, color: currentWeek === 4 ? '#5A74A5' : '#7690C1' }
  ];
  var anchors = ['middle', 'middle', 'middle', 'middle'];
  // Adjust right/left label anchors
  labels[1].x = cx + R + 2; anchors[1] = 'start';
  labels[3].x = cx - R - 2; anchors[3] = 'end';

  for (var li = 0; li < labels.length; li++) {
    svg += '<text x="' + labels[li].x + '" y="' + labels[li].y + '" font-family="-apple-system,sans-serif" font-size="8" fill="' + labels[li].color + '" text-anchor="' + anchors[li] + '" letter-spacing="1">' + labels[li].text + '</text>';
  }

  // Center circle with "DIN MÅNED"
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="26" fill="rgba(118,144,193,0.1)" stroke="rgba(118,144,193,0.25)" stroke-width="1"/>';
  svg += '<text x="' + cx + '" y="' + (cy - 3) + '" font-family="Georgia,\'Times New Roman\',serif" font-size="10" fill="#5A74A5" text-anchor="middle">DIN</text>';
  svg += '<text x="' + cx + '" y="' + (cy + 10) + '" font-family="Georgia,\'Times New Roman\',serif" font-size="10" fill="#5A74A5" text-anchor="middle">M\u00c5NED</text>';

  // Active dot
  var dot = dotPositions[currentWeek - 1];
  svg += '<circle cx="' + dot.x + '" cy="' + dot.y + '" r="5" fill="#5A74A5"/>';

  svg += '</svg>';
  return svg;
}

function initDeFireUgerScreen() {
  var circleEl = document.getElementById('dfu-circle');
  if (!circleEl) return;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var isMenstrual = user.tracksMenstruation && user.lastPeriodDate;
  var currentWeek = 1;
  var cycleDay = 1;

  if (isMenstrual) {
    var mData = calculateMenstrualDay(user.lastPeriodDate, new Date());
    cycleDay = mData.day;
    currentWeek = cycleDay <= 7 ? 1 : cycleDay <= 14 ? 2 : cycleDay <= 21 ? 3 : 4;
  } else {
    var now = new Date();
    var moonDays = Math.floor((now.getTime() / 86400000 - 10.5) % 29.53);
    currentWeek = moonDays < 7 ? 1 : moonDays < 15 ? 2 : moonDays < 22 ? 3 : 4;
    cycleDay = moonDays + 1;
  }

  var shortData = isMenstrual ? DFU_WEEK_SHORT : DFU_MOON_SHORT;
  var cw = shortData[currentWeek];
  var elLabel = ELEMENT_LABELS[cw.element] || cw.element;

  // 1. Circle image
  circleEl.innerHTML = '<img src="assets/images/de-fire-uger.png" alt="De fire ugers cyklus" class="dfu-circle-img">';

  // 2. Position insight box
  var posEl = document.getElementById('dfu-position');
  if (posEl) {
    var seasonName = cw.season.toLowerCase();
    var posLabel = 'DU ER I UGE ' + currentWeek + ' \u00b7 ' + cw.season.toUpperCase() + ' \u00b7 ' + elLabel.toUpperCase();
    var posText = isMenstrual
      ? 'Dag ' + cycleDay + ' i din cyklus. ' + (currentWeek === 1 ? 'Menstruationens indre vinter. Kroppen beder om hvile og varme \u2014 det er ikke dovenskab, det er klogt kropsarbejde.' : currentWeek === 2 ? 'Opbygningens indre for\u00e5r. Energien stiger \u2014 kroppen er klar til at vokse og skabe.' : currentWeek === 3 ? '\u00c6gl\u00f8sningens indre sommer. Kroppen str\u00e5ler \u2014 hjertet er \u00e5bent og energien p\u00e5 toppen.' : 'Lutealfasens indre sensommer. Kroppen sorterer \u2014 giv dig selv ro og n\u00e6ring.')
      : 'Dag ' + cycleDay + ' i m\u00e5necyklussen. ' + (currentWeek === 1 ? 'Nym\u00e5nens stilhed. Energien er lav og reflekterende \u2014 en tid for nye intentioner.' : currentWeek === 2 ? 'Tiltagende m\u00e5ne. Energien vokser \u2014 en god tid for planer og initiativer.' : currentWeek === 3 ? 'Fuldm\u00e5nens intensitet. Alt er i fuld blomst \u2014 f\u00f8lelser og energi kulminerer.' : 'Aftagende m\u00e5ne. Energien samler sig \u2014 en tid for at slippe og forberede.');
    posEl.innerHTML = '<div class="mc__ins"><div class="mc__ins-label">' + posLabel + '</div><div class="mc__ins-text">' + posText + '</div></div>';
  }

  // 3. Week grid (2x2)
  var weeksEl = document.getElementById('dfu-weeks');
  if (weeksEl) {
    var html = '<div class="mc__wg">';
    for (var w = 1; w <= 4; w++) {
      var wk = shortData[w];
      var isActive = (w === currentWeek);
      var wElLabel = ELEMENT_LABELS[wk.element] || wk.element;
      html += '<div class="mc__wc' + (isActive ? ' on' : '') + '">';
      html += '<div class="mc__wc-n">Uge ' + w + '</div>';
      html += '<div class="mc__wc-days">Dag ' + ((w - 1) * 7 + 1) + '\u2013' + (w * 7) + '</div>';
      html += '<div class="mc__wc-s">Indre ' + wk.season.toLowerCase() + '</div>';
      html += '<div class="mc__wc-el">' + wElLabel.toUpperCase() + '</div>';
      html += '<div class="mc__wc-tx">' + wk.desc + '</div>';
      html += '</div>';
    }
    html += '</div>';
    weeksEl.innerHTML = html;
  }

  // 4. Gradient box — "UGE X — HVAD DU KAN GØRE"
  var gradEl = document.getElementById('dfu-gradient');
  if (gradEl) {
    var gt = DFU_GRADIENT_TEXTS[currentWeek];
    var html = '<div class="mc__grad">';
    html += '<div class="mc__grad-label">UGE ' + currentWeek + ' \u2014 HVAD DU KAN G\u00d8RE</div>';
    html += '<div class="mc__grad-text">' + gt.main + '</div>';
    html += '<div class="mc__grad-sub">' + gt.sub + '</div>';
    html += '</div>';
    gradEl.innerHTML = html;
  }

  // 5. Links
  var linksEl = document.getElementById('dfu-links');
  if (linksEl) {
    var html = '<a class="mc__link" href="#" onclick="navigateToYogaWithElement(\'' + cw.element + '\');return false;">Se \u00f8velser tilpasset uge ' + currentWeek + ' \u2192</a>';
    html += '<a class="mc__link" href="#" onclick="App.loadScreen(\'samlede-indsigt\');return false;">Se kost tilpasset uge ' + currentWeek + ' \u2192</a>';
    linksEl.innerHTML = html;
  }

  // 6. "OGSÅ UDEN MENSTRUATION" insight box
  var udenEl = document.getElementById('dfu-uden');
  if (udenEl) {
    udenEl.innerHTML = '<h2 class="rejse__t2">Ogs\u00e5 uden menstruation</h2>' +
      '<p class="rejse__intr">Din krop er stadig cyklisk, ogs\u00e5 n\u00e5r blødningen er stoppet. M\u00e5nens faser og \u00e5rstidens skift b\u00e6rer de samme kvaliteter \u2014 rytmen er ikke v\u00e6k, den er bare blevet stille.</p>' +
      '<div class="mc__ins"><div class="mc__ins-text">Hvis du ikke l\u00e6ngere har en m\u00e5nedlig cyklus, kan du f\u00f8lge m\u00e5nens faser eller \u00e5rstidens rytme i stedet. Kroppen er stadig cyklisk \u2014 rytmen er bare stille nu.</div></div>';
  }

  // 7. Actions
  var actEl = document.getElementById('dfu-actions');
  if (actEl) {
    actEl.innerHTML = renderActionBar('de-fire-uger');
  }
}

function setMenstruationSetting(tracks) {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  user.tracksMenstruation = tracks;
  if (!tracks) user.lastPeriodDate = null;
  localStorage.setItem('user', JSON.stringify(user));
  initDeFireUgerScreen();
}

// ---- Feature: Refleksion ----

function initRefleksionScreen() {
  var figurEl = document.getElementById('refleksion-figur');
  var contentEl = document.getElementById('refleksion-content');
  if (!contentEl) return;

  // VennTwo figur
  if (figurEl) {
    figurEl.innerHTML = '<div class="praksis__figur">' + renderVennTwo({
      leftTitle: 'SP\u00d8RGSM\u00c5LET',
      leftLines: ['Hvad b\u00e6rer du', 'lige nu?'],
      rightTitle: 'STILHEDEN',
      rightLines: ['Lad svaret komme.', 'Det beh\u00f8ver ikke ord.'],
      overlapTitle: 'INDSIGTEN',
      overlapLines: ['*Refleksion er en gave', '*du giver dig selv']
    }) + '</div>';
  }

  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var phase = userData.phase || 5;
  var questions = REFLEKSION_DATA[phase] || REFLEKSION_DATA[5];
  var savedReflections = JSON.parse(localStorage.getItem('livsfaser_reflections') || '[]');

  var html = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Refleksioner for Fase ' + phase + ': ' + (PHASE_DATA[phase] ? PHASE_DATA[phase].name : '') + '</h3>';
  html += '<p class="praksis__section-intro">Sp\u00f8rgsm\u00e5l til stilhed og selvindsigt. Du beh\u00f8ver ikke svare p\u00e5 dem alle \u2014 lad dem leve i dig og m\u00e6rk hvilke der kalder mest p\u00e5 din opm\u00e6rksomhed.</p>';

  for (var i = 0; i < questions.length; i++) {
    var qId = 'refleksion-' + phase + '-' + i;
    var existing = '';
    for (var s = savedReflections.length - 1; s >= 0; s--) {
      if (savedReflections[s].phase === phase && savedReflections[s].questionIndex === i) {
        existing = savedReflections[s].note || '';
        break;
      }
    }
    html += '<div class="refleksion__question">' + questions[i] + '</div>';
    html += '<textarea class="refleksion__input" id="' + qId + '" placeholder="Skriv hvad du vil huske\u2026">' + escapeHtml(existing) + '</textarea>';
  }

  html += '<button class="refleksion__btn" onclick="saveRefleksion()">Gem refleksion</button>';
  html += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se hvilke refleksioner der passer til dig p\u00e5 en anden dag \u2192</div>';
  html += renderActionBar('refleksion');

  contentEl.innerHTML = html;
}

function saveRefleksion() {
  var userData = JSON.parse(localStorage.getItem('user') || '{}');
  var phase = userData.phase || 5;
  var questions = REFLEKSION_DATA[phase] || REFLEKSION_DATA[5];
  var saved = JSON.parse(localStorage.getItem('livsfaser_reflections') || '[]');

  for (var i = 0; i < questions.length; i++) {
    var textarea = document.getElementById('refleksion-' + phase + '-' + i);
    if (textarea && textarea.value.trim()) {
      saved.push({
        date: getLocalDateStr(new Date()),
        phase: phase,
        questionIndex: i,
        question: questions[i],
        note: textarea.value.trim()
      });
    }
  }
  localStorage.setItem('livsfaser_reflections', JSON.stringify(saved));
  showActionToast('Refleksion gemt \u2713');
}
window.saveRefleksion = saveRefleksion;

// ---- Din Krop Circle (Min Praksis) ----

function renderDinKropCircle() {
  return '<div style="max-width:500px;margin:0 auto;text-align:center"><img src="assets/images/din-krop.jpg" alt="Din krop" style="width:100%;height:auto;border-radius:12px"></div>';
}

// ---- Feature: Kontrolcyklussen ----

function renderTCMCycleDiagram(dominantElement) {
  return '<div style="max-width:500px;margin:0 auto;text-align:center"><img src="assets/images/kontrolcyklus.png" alt="Kontrolcyklus" style="width:100%;height:auto;border-radius:12px"></div>';
}

function initKontrolcyklussenScreen() {
  var diagramEl = document.getElementById('kontrol-diagram');
  var dynamiskEl = document.getElementById('kontrol-dynamisk');
  var detailEl = document.getElementById('kontrol-detail');
  if (!diagramEl) return;

  ensureIdagData();
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  var dominant = elements[0] || 'VAND';
  var maxC = 0;
  var keys = Object.keys(counts);
  for (var j = 0; j < keys.length; j++) { if (counts[keys[j]] > maxC) { maxC = counts[keys[j]]; dominant = keys[j]; } }

  diagramEl.innerHTML = renderTCMCycleDiagram(dominant);

  var kt = KONTROL_TEKST[dominant] || KONTROL_TEKST['VAND'];
  if (dynamiskEl) {
    dynamiskEl.innerHTML = '<p class="tema__kontekst-label">Dit dominerende element</p>' +
      '<p class="tema__kontekst-value">' + ELEMENT_LABELS[dominant] + ' (' + maxC + '/5 cyklusser)</p>' +
      '<p class="tema__kontekst-text">' + kt.naerer + '</p>';
  }

  if (detailEl) {
    var html = '<div class="livsfase-detail__section">';
    html += '<h3 class="livsfase-detail__section-title">Samspillet lige nu</h3>';
    html += '<p class="livsfase-detail__section-subtitle">Hvert element st\u00e5r i relation til alle de andre. Her ser du hvordan dit dominerende element n\u00e6rer, kontrollerer og selv p\u00e5virkes af de \u00f8vrige.</p>';
    var rows = [
      { label: 'N\u00e6rer', text: kt.naerer },
      { label: 'Kontrollerer', text: kt.kontrollerer },
      { label: 'N\u00e6res af', text: kt.naeret_af },
      { label: 'Kontrolleres af', text: kt.kontrolleret_af }
    ];
    for (var r = 0; r < rows.length; r++) {
      html += '<div class="livsfase-detail__rec-card"><p class="livsfase-detail__rec-label">' + rows[r].label + '</p><p class="livsfase-detail__rec-desc">' + rows[r].text + '</p></div>';
    }
    html += '</div>';

    // Element-balancing exercise
    var yogaForBalance = YIN_YOGA_FULL[dominant];
    if (yogaForBalance && yogaForBalance.length > 0) {
      html += '<div class="livsfase-detail__section">';
      html += '<h3 class="livsfase-detail__section-title">Balanc\u00e9r dit element</h3>';
      html += '<p class="livsfase-detail__section-subtitle">N\u00e5r et element dominerer, kan en stille \u00f8velse hj\u00e6lpe med at genoprette balancen. Her er en yin yoga-stilling tilpasset dit element lige nu.</p>';
      html += '<div class="livsfase-detail__rec-card">';
      html += '<p class="livsfase-detail__rec-label">' + ELEMENT_LABELS[dominant] + '-øvelse</p>';
      html += '<p class="livsfase-detail__rec-title">' + yogaForBalance[0].pose + '</p>';
      html += '<p class="livsfase-detail__rec-desc">' + yogaForBalance[0].desc + ' (' + yogaForBalance[0].tid + ')</p>';
      html += '</div>';
      html += '<button class="idag__link-btn" onclick="navigateToYogaWithElement(\'' + dominant + '\')" style="margin-top:12px">Se flere øvelser \u2192</button>';
      html += '</div>';
    }

    html += sectionDivider();
    html += renderActionBar('kontrolcyklussen');
    detailEl.innerHTML = html;
  }
}

// ---- Feature: Følelseshjul ----

var FOELELSER_INDSIGT = {
  'VAND': 'Vand b\u00e6rer frygt og angst \u2014 men ogs\u00e5 visdom og ro. N\u00e5r frygten melder sig, er det nyrerne der taler. Lyt til dem \u2014 de fort\u00e6ller dig noget om din grundl\u00e6ggende tryghed.',
  'TR\u00c6': 'Tr\u00e6 b\u00e6rer vrede og frustration \u2014 men ogs\u00e5 retning og mod. N\u00e5r vreden melder sig, er det leveren der taler. Lyt til den \u2014 den fort\u00e6ller dig noget om din gr\u00e6nses\u00e6tning.',
  'ILD': 'Ild b\u00e6rer rastl\u00f8shed og uro \u2014 men ogs\u00e5 gl\u00e6de og forbindelse. N\u00e5r uroen melder sig, er det hjertet der taler. Lyt til det \u2014 det fort\u00e6ller dig noget om din l\u00e6ngsel efter n\u00e6rv\u00e6r.',
  'JORD': 'Jord b\u00e6rer bekymring og overt\u00e6nkning \u2014 men ogs\u00e5 omsorg og n\u00e6ring. N\u00e5r tankerne maler, er det milten der taler. Lyt til den \u2014 den fort\u00e6ller dig noget om dit behov for tryghed.',
  'METAL': 'Metal b\u00e6rer sorg og tomhed \u2014 men ogs\u00e5 klarhed og slip. N\u00e5r sorgen melder sig, er det lungerne der taler. Lyt til dem \u2014 de fort\u00e6ller dig noget om det du har brug for at give slip p\u00e5.'
};

function renderFoelelserPentagram() {
  return '<div class="praksis__figur">' +
    '<svg width="270" height="270" xmlns="http://www.w3.org/2000/svg">' +
    // Forbindelseslinjer mellem ydre cirkler
    '<line x1="135" y1="42" x2="52" y2="116" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="135" y1="42" x2="218" y2="116" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="52" y1="116" x2="82" y2="222" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="218" y1="116" x2="188" y2="222" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    '<line x1="82" y1="222" x2="188" y2="222" stroke="#8B9A9D" stroke-opacity="0.10" stroke-width="1"/>' +
    // Center: HELE DIG
    '<circle cx="135" cy="142" r="30" fill="#8B9A9D" fill-opacity="0.10" stroke="#8B9A9D" stroke-opacity="0.18" stroke-width="1"/>' +
    '<text x="135" y="138" text-anchor="middle" font-size="10" font-weight="600" fill="#555" font-family="' + VENN_FONT + '">HELE</text>' +
    '<text x="135" y="151" text-anchor="middle" font-size="10" font-weight="600" fill="#555" font-family="' + VENN_FONT + '">DIG</text>' +
    // Top: Frygt (Vand - blå)
    '<circle cx="135" cy="42" r="26" fill="#7690C1" fill-opacity="0.15" stroke="#7690C1" stroke-opacity="0.2" stroke-width="1"/>' +
    '<text x="135" y="39" text-anchor="middle" font-size="11" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">Frygt</text>' +
    '<text x="135" y="52" text-anchor="middle" font-size="10" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">Angst</text>' +
    // Højre: Vrede (Træ - grøn)
    '<circle cx="218" cy="116" r="26" fill="#8BA68B" fill-opacity="0.15" stroke="#8BA68B" stroke-opacity="0.2" stroke-width="1"/>' +
    '<text x="218" y="113" text-anchor="middle" font-size="11" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">Vrede</text>' +
    '<text x="218" y="126" text-anchor="middle" font-size="9" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">Frustration</text>' +
    // Nederst højre: Glæde (Ild - varm)
    '<circle cx="188" cy="222" r="26" fill="#C4A882" fill-opacity="0.15" stroke="#C4A882" stroke-opacity="0.2" stroke-width="1"/>' +
    '<text x="188" y="219" text-anchor="middle" font-size="11" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">Gl\u00e6de</text>' +
    '<text x="188" y="232" text-anchor="middle" font-size="10" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">Rastl\u00f8shed</text>' +
    // Nederst venstre: Bekymring (Jord - gul)
    '<circle cx="82" cy="222" r="26" fill="#C4B882" fill-opacity="0.15" stroke="#C4B882" stroke-opacity="0.2" stroke-width="1"/>' +
    '<text x="82" y="216" text-anchor="middle" font-size="10" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">Bekymring</text>' +
    '<text x="82" y="231" text-anchor="middle" font-size="9" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">Overt\u00e6nkning</text>' +
    // Venstre: Sorg (Metal - grå-lilla)
    '<circle cx="52" cy="116" r="26" fill="#A8A8B8" fill-opacity="0.15" stroke="#A8A8B8" stroke-opacity="0.2" stroke-width="1"/>' +
    '<text x="52" y="113" text-anchor="middle" font-size="11" font-weight="500" fill="#555" font-family="' + VENN_FONT + '">Sorg</text>' +
    '<text x="52" y="126" text-anchor="middle" font-size="10" fill="#999" font-style="italic" font-family="' + VENN_FONT + '">Tomhed</text>' +
    '</svg>' +
    '</div>';
}

function initFoelelserScreen() {
  var figurEl = document.getElementById('foelelser-figur');
  var indsigtEl = document.getElementById('foelelser-indsigt');
  var contentEl = document.getElementById('foelelser-content');
  if (!contentEl) return;

  ensureIdagData();
  var elements = window._activeElements || [];
  var insight = generateInsight(elements);
  var primaryEl = insight.dominantElement;

  // 1. Pentagram image
  if (figurEl) {
    figurEl.innerHTML = '<img src="assets/images/foelelsernes-kort.png" alt="F\u00f8lelsernes hjul" class="foelelser-kort-img">';
  }

  // 2. Dynamisk indsigt-boks
  if (indsigtEl) {
    var indsigtTekst = FOELELSER_INDSIGT[primaryEl] || FOELELSER_INDSIGT['VAND'];
    indsigtEl.innerHTML =
      '<div class="praksis__indsigt">' +
      '<div class="praksis__indsigt-label">Dit element lige nu</div>' +
      '<div class="praksis__indsigt-text">' + indsigtTekst + '</div>' +
      '</div>';
  }

  // 3. Intro-tekst + nav-kort + crosslink + actionbar
  var html = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h2 class="rejse__t2">Udforsk dine f\u00f8lelser</h2>';
  html += '<p class="rejse__intr">V\u00e6lg en f\u00f8lelse og se hvilke \u00f8velser, vejrtr\u00e6kninger og refleksioner der kan st\u00f8tte dig. Hver f\u00f8lelse h\u00f8rer til et element \u2014 og n\u00e5r du m\u00f8der den med forst\u00e5else, \u00e5bner der sig en vej.</p>';

  html += renderPraksisCard(
    'Frygt & Angst',
    'Vand \u00B7 Nyre \u00B7 Bl\u00e6re \u2014 vejrtr\u00e6kning, varme h\u00e6nder p\u00e5 l\u00e6nden, butterfly',
    'Se \u00f8velser \u2192',
    "showEmotionDetail('VAND')"
  );
  html += renderPraksisCard(
    'Vrede & Frustration',
    'Tr\u00e6 \u00B7 Lever \u00B7 Galdebl\u00e6re \u2014 leverens lyd, dragefluen, bev\u00e6gelse',
    'Se \u00f8velser \u2192',
    "showEmotionDetail('TR\u00C6')"
  );
  html += renderPraksisCard(
    'Rastl\u00f8shed & Uro',
    'Ild \u00B7 Hjerte \u00B7 Tyndtarm \u2014 hjertets lyd, \u00e5ben vinge, k\u00f8ling',
    'Se \u00f8velser \u2192',
    "showEmotionDetail('ILD')"
  );
  html += renderPraksisCard(
    'Bekymring & Overt\u00e6nkning',
    'Jord \u00B7 Mave \u00B7 Milt \u2014 stille maven, grounding, varm mad',
    'Se \u00f8velser \u2192',
    "showEmotionDetail('JORD')"
  );
  html += renderPraksisCard(
    'Sorg & Tomhed',
    'Metal \u00B7 Lunge \u00B7 Tyktarm \u2014 slip-ud-\u00e5nding, st\u00f8ttet fisk, give slip',
    'Se \u00f8velser \u2192',
    "showEmotionDetail('METAL')"
  );

  html += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se hvilke f\u00f8lelser der passer til dig p\u00e5 en anden dag \u2192</div>';
  html += renderActionBar('foelelser');

  contentEl.innerHTML = html;
}

function showEmotionDetail(element) {
  var contentEl = document.getElementById('foelelser-content');
  if (!contentEl) return;

  var emotionMap = { 'VAND': ['frygt','angst'], 'TR\u00C6': ['vrede','frustration','irritation'], 'ILD': ['gl\u00e6de','rastl\u00f8shed','uro'], 'JORD': ['bekymring','overt\u00e6nkning'], 'METAL': ['sorg','tomhed'] };
  var organMap = { 'VAND': 'Nyrer \u00B7 Bl\u00e6re', 'TR\u00C6': 'Lever \u00B7 Galdebl\u00e6re', 'ILD': 'Hjerte \u00B7 Tyndtarm', 'JORD': 'Milt \u00B7 Mave', 'METAL': 'Lunger \u00B7 Tyktarm' };

  var emotions = emotionMap[element] || [];
  var yoga = INSIGHT_YOGA[element] || [];
  var food = INSIGHT_FOOD[element] || [];

  var html = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<div class="praksis__indsigt">';
  html += '<div class="praksis__indsigt-label">' + ELEMENT_LABELS[element] + ' \u00B7 ' + organMap[element] + '</div>';
  html += '<div class="praksis__indsigt-text">' + emotions.map(function(e) { return e.charAt(0).toUpperCase() + e.slice(1); }).join(', ') + ' \u2014 disse f\u00f8lelser er ikke problemer der skal l\u00f8ses. De er signaler fra ' + ELEMENT_LABELS[element] + '-elementet.</div>';
  html += '</div>';

  if (yoga.length > 0) {
    html += '<div class="praksis__exercise">';
    html += '<div class="praksis__exercise-organ">\u00d8velse</div>';
    html += '<h3 class="praksis__exercise-title">' + yoga[0].pose + '</h3>';
    html += '<p class="praksis__exercise-desc">' + yoga[0].desc + '</p>';
    html += '</div>';
  }
  if (food.length > 0) {
    html += '<div class="praksis__exercise">';
    html += '<div class="praksis__exercise-organ">Kost</div>';
    html += '<h3 class="praksis__exercise-title">' + food[0].item + '</h3>';
    html += '<p class="praksis__exercise-desc">' + food[0].desc + '</p>';
    html += '</div>';
  }

  html += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se hvilke f\u00f8lelser der passer til dig p\u00e5 en anden dag \u2192</div>';
  html += renderActionBar('foelelser');

  contentEl.innerHTML = html;
  contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.showEmotionDetail = showEmotionDetail;

// ---- Feature: Yin Yoga ----

function initYinYogaScreen() {
  ensureIdagData();
  var elements = window._activeElements || [];
  var counts = {};
  for (var i = 0; i < elements.length; i++) counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  var dominant = elements[0] || 'VAND';
  var maxC = 0;
  var ks = Object.keys(counts);
  for (var j = 0; j < ks.length; j++) { if (counts[ks[j]] > maxC) { maxC = counts[ks[j]]; dominant = ks[j]; } }

  window._yogaSelectedElement = window._yogaSelectedElement || dominant;
  renderYinYogaContent();
}

function renderYinYogaContent() {
  var chipsEl = document.getElementById('yin-yoga-chips');
  var introEl = document.getElementById('yin-yoga-intro');
  var posesEl = document.getElementById('yin-yoga-poses');
  var andreEl = document.getElementById('yin-yoga-andre');
  if (!posesEl) return;

  var selected = window._yogaSelectedElement || 'VAND';
  var elKeys = ['VAND', 'TR\u00C6', 'ILD', 'JORD', 'METAL'];

  // 1. Element chips
  if (chipsEl) {
    var cHtml = '<div class="yin-yoga__chips">';
    for (var i = 0; i < elKeys.length; i++) {
      var isActive = (elKeys[i] === selected);
      cHtml += '<button class="yin-yoga__chip' + (isActive ? ' yin-yoga__chip--active' : '') + '" onclick="selectYogaElement(\'' + elKeys[i] + '\')">' + ELEMENT_LABELS[elKeys[i]] + '</button>';
    }
    cHtml += '</div>';
    chipsEl.innerHTML = cHtml;
  }

  // 2. Dynamisk intro-tekst
  if (introEl) {
    introEl.innerHTML = '<p class="yin-yoga__intro-text">Dit dominerende element lige nu er ' + ELEMENT_LABELS[selected] + '.<br>Disse positioner st\u00f8tter dig:</p>';
  }

  // 3. Øvelseskort for valgt element
  var poses = YIN_YOGA_FULL[selected] || [];
  var html = '';
  for (var p = 0; p < poses.length; p++) {
    var pose = poses[p];
    html += '<div class="praksis__exercise">';
    html += '<div class="praksis__exercise-organ">' + pose.meridian + '</div>';
    html += '<h3 class="praksis__exercise-title">' + pose.pose + '</h3>';
    html += '<p class="praksis__exercise-desc">' + pose.desc + '</p>';
    html += '<div class="praksis__exercise-time">' + pose.tid + '</div>';
    html += '<div class="praksis__exercise-link">Pr\u00f8v nu \u2192</div>';
    html += '</div>';
  }
  posesEl.innerHTML = html;

  // 4. Andre elementer + crosslink + actionbar
  if (andreEl) {
    var aHtml = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
    aHtml += '<h3 class="praksis__section-title">Andre elementer</h3>';
    aHtml += '<p class="praksis__section-intro">Udforsk \u00f8velser for de \u00f8vrige elementer. Selvom dit dominerende element st\u00e5r st\u00e6rkest, kan de andre \u00e5bne for noget nyt n\u00e5r du er klar til det.</p>';
    for (var e = 0; e < elKeys.length; e++) {
      if (elKeys[e] === selected) continue;
      var otherPoses = YIN_YOGA_FULL[elKeys[e]] || [];
      var poseNames = otherPoses.map(function(op) { return op.pose.split('(')[0].trim(); }).join(' \u00B7 ');
      aHtml += '<div class="praksis__card" onclick="selectYogaElement(\'' + elKeys[e] + '\')">';
      aHtml += '<h3 class="praksis__card-title">' + ELEMENT_LABELS[elKeys[e]] + '</h3>';
      aHtml += '<p class="praksis__card-desc">' + poseNames + '</p>';
      aHtml += '<div class="praksis__card-link">\u2192</div>';
      aHtml += '</div>';
    }
    aHtml += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se hvilke stillinger der passer til dig p\u00e5 en anden dag \u2192</div>';
    aHtml += renderActionBar('yin-yoga');
    andreEl.innerHTML = aHtml;
  }
}

function selectYogaElement(element) {
  window._yogaSelectedElement = element;
  renderYinYogaContent();
  window.scrollTo(0, 0);
}
window.selectYogaElement = selectYogaElement;

// Navigation helpers for I dag links
function navigateToYogaWithElement(element) {
  window._yogaSelectedElement = element;
  App.loadScreen('yin-yoga');
}
window.navigateToYogaWithElement = navigateToYogaWithElement;

// ---- Feature: Hvad har hjulpet andre ----

var HJULPET_DATA = {
  'VAND': {
    yoga: { title: 'Butterfly & Sleeping Swan', desc: '\u00c5bner hofter og nyremeridianer \u00B7 3\u20135 min dagligt', pct: 78, count: 342 },
    kost: { title: 'Misosuppe og sort sesam', desc: 'Varme, salte f\u00f8devarer der n\u00e6rer nyrerne', pct: 73, count: 289 },
    aande: { title: 'Dyb mavevejrtr\u00e6kning', desc: 'Langsom ind\u00e5nding til l\u00e6nden \u00B7 Beroer nervesystemet', pct: 81, count: 415 },
    eft: { title: 'EFT for frygt og utryghed', desc: 'Tapping p\u00e5 nyrepunktet \u00B7 Giver ro og grundfornemmelse', pct: 67, count: 198 }
  },
  'TR\u00c6': {
    yoga: { title: 'Dragonfly & Sphinx', desc: '\u00c5bner indersider og levermeridian \u00B7 Hold 3 min', pct: 76, count: 312 },
    kost: { title: 'Gr\u00f8nne bladgr\u00f8ntsager og citron', desc: 'Sure smage der renser leveren og fremmer flow', pct: 71, count: 267 },
    aande: { title: 'Ujjayi-\u00e5ndedr\u00e6t', desc: 'Havvejrtr\u00e6kning \u00B7 Giver retning og fokus', pct: 79, count: 378 },
    eft: { title: 'EFT for vrede og frustration', desc: 'Tapping p\u00e5 leverpunktet \u00B7 Frig\u00f8rer ophobede sp\u00e6ndinger', pct: 64, count: 186 }
  },
  'ILD': {
    yoga: { title: 'Saddle & Open Wings', desc: 'St\u00f8tter hjertemeridian \u00B7 \u00c5bner brystkassen', pct: 80, count: 356 },
    kost: { title: 'R\u00f8de b\u00e6r og bitter salat', desc: 'Bitre smage der k\u00f8ler og n\u00e6rer hjertet', pct: 74, count: 298 },
    aande: { title: 'Hjertemeditation med ud\u00e5nding', desc: 'Haaa-lyd p\u00e5 ud\u00e5nding \u00B7 Letter hjertet', pct: 83, count: 431 },
    eft: { title: 'EFT for uro og overv\u00e6ldelse', desc: 'Tapping p\u00e5 hjertepunktet \u00B7 Finder indre ro', pct: 69, count: 212 }
  },
  'JORD': {
    yoga: { title: 'Child\u2019s Pose & Sphinx', desc: 'Beroer mave-milt \u00B7 Grundende, stille holdninger', pct: 77, count: 334 },
    kost: { title: 'S\u00f8de rodfrugter og ris', desc: 'Varme, s\u00f8de f\u00f8devarer der styrker milten', pct: 75, count: 305 },
    aande: { title: 'Jordforbindelses-\u00e5ndedrag', desc: 'Tung ud\u00e5nding med Huuuu-lyd \u00B7 Forankrer', pct: 80, count: 392 },
    eft: { title: 'EFT for bekymring og grubleri', desc: 'Tapping p\u00e5 miltpunktet \u00B7 Stiller det indre tankemylder', pct: 66, count: 189 }
  },
  'METAL': {
    yoga: { title: 'Melting Heart & Seal', desc: '\u00c5bner bryst og lungemeridian \u00B7 Dyb str\u00e6kning', pct: 75, count: 318 },
    kost: { title: 'P\u00e6re, hvide gr\u00f8ntsager og ingef\u00e6r', desc: 'Skarp smag der st\u00f8tter lungerne og slipper det overfl\u00f8dige', pct: 72, count: 276 },
    aande: { title: 'Sssss-ud\u00e5nding', desc: 'Healinglyd for lungerne \u00B7 Giver slip og klarhed', pct: 82, count: 407 },
    eft: { title: 'EFT for sorg og tab', desc: 'Tapping p\u00e5 lungepunktet \u00B7 Hj\u00e6lper med at give slip', pct: 65, count: 178 }
  }
};

// ---- Kost & Urter Data ----

var KOST_URTER_DATA = {
  'VAND': {
    indsigt: 'Vand-elementet kalder p\u00e5 varme, n\u00e6rende mad. Maden skal varme indefra \u2014 sort og m\u00f8rk mad n\u00e6rer nyrerne, moderat salt smag st\u00f8tter, og krydderier som ingef\u00e6r og kanel giver den varme kroppen har brug for.',
    spisMere: [
      { trad: 'TCM \u00B7 Vand', title: 'Sort sesam & valn\u00f8dder', desc: 'N\u00e6rer nyreessensen og styrker livskraften. Dryp sort sesam over morgenmaden.' },
      { trad: 'TCM \u00B7 Vand', title: 'Misosuppe', desc: 'Varm, salt og n\u00e6rende for nyrerne. Fermenteret soja st\u00f8tter ford\u00f8jelsen.' },
      { trad: 'Ayurveda', title: 'Ingef\u00e6rte med honning', desc: 'Varmer nyreessensen og starter ford\u00f8jelsen. Godt om morgenen og efter m\u00e5ltider.' },
      { trad: 'TCM \u00B7 Vand', title: 'Tang og alger', desc: 'Salt smag der n\u00e6rer vand-elementets dybde. Brug dem i supper eller som tilbeh\u00f8r.' }
    ],
    urter: [
      { trad: 'TCM', title: 'Goji-b\u00e6r', desc: 'Nyren\u00e6rende b\u00e6r brugt i tusindvis af \u00e5r. Spis dem som snack eller i te.' },
      { trad: 'Ayurveda \u00B7 TCM', title: 'Reishi-svamp', desc: 'St\u00f8tter ro og immunforsvar. Kan tages som te eller pulver.' },
      { trad: 'TCM', title: 'Ginseng & Astragalus', desc: 'St\u00f8tter den grundl\u00e6ggende energi. Brug dem i supper eller som te.' }
    ],
    spisMindre: 'Kold, r\u00e5 mad er sv\u00e6r at ford\u00f8je og k\u00f8ler systemet. For meget salt belaster nyrerne. Koffein og alkohol t\u00e6rer p\u00e5 nyre-energien og forstyrrer s\u00f8vnen.'
  },
  'TR\u00C6': {
    indsigt: 'Tr\u00e6-elementet har brug for let, fri energi i maden. Den sure smag stimulerer leveren \u2014 gr\u00f8nne bladgr\u00f8ntsager, spirende f\u00f8devarer og friske urter st\u00f8tter leverens naturlige rensning.',
    spisMere: [
      { trad: 'TCM \u00B7 Tr\u00e6', title: 'Gr\u00f8nne bladgr\u00f8ntsager', desc: 'Spinat, gr\u00f8nk\u00e5l, rucola \u2014 st\u00f8tter leverens rensning og frig\u00f8r stagneret energi.' },
      { trad: 'TCM \u00B7 Tr\u00e6', title: 'Citron i varmt vand', desc: 'Den sure smag stimulerer leveren og galdebl\u00e6ren. Drik det om morgenen.' },
      { trad: 'Ayurveda', title: 'M\u00e6lkeb\u00f8ttete', desc: 'Klassisk leverurt der renser og styrker. Drik den som te efter m\u00e5ltider.' },
      { trad: 'TCM \u00B7 Tr\u00e6', title: 'Spirer og kimchi', desc: 'Fermenteret mad st\u00f8tter leverens arbejde og ford\u00f8jelsen.' }
    ],
    urter: [
      { trad: 'TCM', title: 'Marietidsel', desc: 'En af de st\u00e6rkeste leverurter. St\u00f8tter regeneration af leverceller.' },
      { trad: 'Ayurveda', title: 'Gurkemeje', desc: 'Antiinflammatorisk og leverbeskyttende. Tag den med sort peber.' },
      { trad: 'TCM', title: 'Chrysanthemum-te', desc: 'K\u00f8ler leverhede og lindrer \u00f8jentr\u00e6thed. Perfekt om aftenen.' }
    ],
    spisMindre: 'Fed, friteret mad belaster leveren. Alkohol er leverens st\u00f8rste fjende. For meget kaffe skaber leverhede og \u00f8ger irritabilitet.'
  },
  'ILD': {
    indsigt: 'Ild-elementet har brug for k\u00f8lende, n\u00e6rende mad. Den bitre smag st\u00f8tter hjertet \u2014 r\u00f8de b\u00e6r, r\u00e5 kakao og k\u00f8lende urter bringer ro til et overaktivt ildelement.',
    spisMere: [
      { trad: 'TCM \u00B7 Ild', title: 'R\u00f8de b\u00e6r (hindb\u00e6r, jordb\u00e6r)', desc: 'N\u00e6rer hjertet og blodet. Den bitre smag st\u00f8tter ilden.' },
      { trad: 'TCM \u00B7 Ild', title: 'Kakao (ren)', desc: 'Hjertemedicin i naturlig form. \u00c5bner og varmer. Brug den ren.' },
      { trad: 'Ayurveda', title: 'Hibiscuste', desc: 'K\u00f8lende og hjertestyrkende. Perfekt n\u00e5r ilden er intens.' },
      { trad: 'TCM \u00B7 Ild', title: 'Granat\u00e6ble', desc: 'Forbundet med hjertet i mange traditioner. Antioxidantrig.' }
    ],
    urter: [
      { trad: 'TCM', title: 'Lotus-fr\u00f8', desc: 'Beroligende for hjertet og sindet. Bruges i supper og te.' },
      { trad: 'Ayurveda', title: 'Brahmi', desc: 'K\u00f8ler sindet og st\u00f8tter hjertet. God til meditation.' },
      { trad: 'TCM', title: 'Longan-b\u00e6r', desc: 'N\u00e6rer hjerteblod og bringer s\u00f8vn. Spis dem som snack.' }
    ],
    spisMindre: 'Stærkt krydret mad \u00f8ger ilden yderligere. Koffein overbelaster hjertet. Alkohol og sukker forstyrrer hjertets ro og skaber uro.'
  },
  'JORD': {
    indsigt: 'Jord-elementet har brug for varm, bl\u00f8d, n\u00e6rende mad. Den s\u00f8de smag st\u00f8tter milten \u2014 rodfrugter, supper og langsomt kogt mad giver den grounding kroppen s\u00f8ger.',
    spisMere: [
      { trad: 'TCM \u00B7 Jord', title: 'S\u00f8de rodfrugter', desc: 'S\u00f8de kartofler, guler\u00f8dder \u2014 den s\u00f8de smag n\u00e6rer milten og maven.' },
      { trad: 'TCM \u00B7 Jord', title: 'Havregr\u00f8d', desc: 'Varm, bl\u00f8d, n\u00e6rende \u2014 perfekt jordmad om morgenen.' },
      { trad: 'Ayurveda', title: 'Kamillete', desc: 'Beroligende for maven og nervesystemet. Drik den f\u00f8r sengetid.' },
      { trad: 'TCM \u00B7 Jord', title: 'Supper og gryderetter', desc: 'Langsomt kogt mad n\u00e6rer jordelementet dybt.' }
    ],
    urter: [
      { trad: 'TCM', title: 'Lakridsrod', desc: 'Harmoniserer maven og miltens energi. Bruges i mange kinesiske formler.' },
      { trad: 'Ayurveda', title: 'Ashwagandha', desc: 'Grounding-urt der st\u00f8tter binyrer og giver ro.' },
      { trad: 'TCM', title: 'J\u00f6jusube (r\u00f8de dadler)', desc: 'N\u00e6rer blodet og milten. Brug dem i te eller supper.' }
    ],
    spisMindre: 'For meget r\u00e5 og kold mad sv\u00e6kker milten. Raffineret sukker giver kort energi men t\u00f8mmer milten. Mejeriprodukter kan skabe fugt og slimdannelse.'
  },
  'METAL': {
    indsigt: 'Metal-elementet har brug for fugtende, n\u00e6rende mad. Den skarpe smag st\u00f8tter lungerne \u2014 p\u00e6rer, ris og hvide f\u00f8devarer bringer klarhed og fugter de t\u00f8rre slimhinder.',
    spisMere: [
      { trad: 'TCM \u00B7 Metal', title: 'P\u00e6rer', desc: 'Den klassiske lungefrugt i kinesisk medicin. Fugter og n\u00e6rer.' },
      { trad: 'TCM \u00B7 Metal', title: 'Ris (hvid eller jasmin)', desc: 'Den hvide energi st\u00f8tter metalelementet. N\u00e6rende og let.' },
      { trad: 'Ayurveda', title: 'Timian- og salvite', desc: 'Urter der st\u00f8tter lungerne og \u00e5ndedr\u00e6tsystemet.' },
      { trad: 'TCM \u00B7 Metal', title: 'Hvid r\u00e6ddike (daikon)', desc: 'Renser lungerne og tyktarmen. Skarp smag st\u00f8tter metal.' }
    ],
    urter: [
      { trad: 'TCM', title: 'Astragalus', desc: 'St\u00f8tter lungerne og immunforsvaret. Bruges i supper og te.' },
      { trad: 'Ayurveda', title: 'Tulsi (hellig basilikum)', desc: '\u00c5bner lungerne og st\u00f8tter \u00e5ndedr\u00e6ttet. Drik som te.' },
      { trad: 'TCM', title: 'Hvid svampe (tremella)', desc: 'Fugter lungerne og huden. Bruges i kinesiske desserter.' }
    ],
    spisMindre: 'For meget t\u00f8r, stegt mad t\u00f8rrer lungerne ud. Mejeriprodukter kan skabe slim. For meget krydret mad sv\u00e6kker lungernes yin-energi.'
  }
};

function initKostUrterScreen() {
  var indsigtEl = document.getElementById('kost-urter-indsigt');
  var contentEl = document.getElementById('kost-urter-content');
  if (!contentEl) return;

  ensureIdagData();
  var elements = window._activeElements || [];
  var insight = generateInsight(elements);
  var primaryEl = insight.dominantElement;

  var data = KOST_URTER_DATA[primaryEl] || KOST_URTER_DATA['VAND'];

  // 1. Indsigt-boks
  if (indsigtEl) {
    indsigtEl.innerHTML =
      '<div class="praksis__indsigt">' +
      '<div class="praksis__indsigt-label">Dit element lige nu: ' + ELEMENT_LABELS[primaryEl] + '</div>' +
      '<div class="praksis__indsigt-text">' + data.indsigt + '</div>' +
      '</div>';
  }

  // 2. Content
  var html = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';

  // Spis mere af
  html += '<h3 class="praksis__section-title">Spis mere af</h3>';
  html += '<p class="praksis__section-intro">Din krop kalder på bestemte smagskvaliteter lige nu. Disse fødevarer støtter dit element og møder den sult dit system har brug for indefra.</p>';
  html += '<div style="height:12px"></div>';
  for (var i = 0; i < data.spisMere.length; i++) {
    var f = data.spisMere[i];
    html += '<div class="kost__card">';
    html += '<div class="kost__tag">' + f.trad + '</div>';
    html += '<h3 class="kost__title">' + f.title + '</h3>';
    html += '<p class="kost__desc">' + f.desc + '</p>';
    html += '</div>';
  }

  // Urter til fasen
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Urter til fasen</h3>';
  html += '<p class="praksis__section-intro">Urter arbejder langsomt og dybt. De følgende planter har i tusinder af år støttet kvinder i netop den fase du befinder dig i nu.</p>';
  html += '<div style="height:12px"></div>';
  for (var u = 0; u < data.urter.length; u++) {
    var ur = data.urter[u];
    html += '<div class="kost__card">';
    html += '<div class="kost__tag">' + ur.trad + '</div>';
    html += '<h3 class="kost__title">' + ur.title + '</h3>';
    html += '<p class="kost__desc">' + ur.desc + '</p>';
    html += '</div>';
  }

  // Spis mindre af
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<div class="praksis__indsigt">';
  html += '<div class="praksis__indsigt-label">Spis mindre af</div>';
  html += '<div class="praksis__indsigt-text">' + data.spisMindre + '</div>';
  html += '</div>';

  // Crosslink + actionbar
  html += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se kostvejledning til en anden dato \u2192</div>';
  html += renderActionBar('kost-urter');

  contentEl.innerHTML = html;
}

function initHvadHarHjulpetScreen() {
  ensureIdagData();
  var d = window._idagData;
  if (!d) return;

  var grafEl = document.getElementById('hjulpet-graf');
  var contentEl = document.getElementById('hjulpet-content');
  if (!contentEl) return;

  var elements = window._activeElements || [];
  var insight = generateInsight(elements);
  var el = insight.dominantElement;
  var elLabel = ELEMENT_LABELS[el];
  var phase = d.lifePhase;
  var season = d.season;
  var data = HJULPET_DATA[el] || HJULPET_DATA['VAND'];
  var phaseName = phase.name || ('Fase ' + phase.phase);

  // 1. Horisontal bar-graf
  if (grafEl) {
    var bars = [
      { label: 'Yin Yoga', pct: 82 },
      { label: 'Vejrtr\u00e6kning', pct: 78 },
      { label: 'Kost & urter', pct: 74 },
      { label: 'EFT Tapping', pct: 67 },
      { label: 'Refleksion', pct: 63 },
      { label: 'F\u00e6llesskab', pct: 58 }
    ];
    var gHtml = '<div class="hjulpet__graph">';
    for (var b = 0; b < bars.length; b++) {
      gHtml += '<div class="hjulpet__bar">';
      gHtml += '<div class="hjulpet__bar-label">' + bars[b].label + '</div>';
      gHtml += '<div class="hjulpet__bar-fill" style="width:' + bars[b].pct + '%"><span class="hjulpet__bar-pct">' + bars[b].pct + '%</span></div>';
      gHtml += '</div>';
    }
    gHtml += '<div class="hjulpet__graph-foot">Baseret p\u00e5 anonyme erfaringer fra kvinder i alle ni livsfaser</div>';
    gHtml += '</div>';
    grafEl.innerHTML = gHtml;
  }

  // 2. Content
  var html = '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';

  // Din situation lige nu
  html += '<h3 class="praksis__section-title">Din situation lige nu</h3>';
  html += '<p class="praksis__section-intro">Anbefalingerne nedenfor er tilpasset pr\u00e6cis din kombination af livsfase, element og \u00e5rstid \u2014 ikke generelle r\u00e5d, men noget der m\u00f8der dig hvor du st\u00e5r.</p>';
  html += '<div class="hjulpet__sit">';
  html += '<div class="hjulpet__sit-lbl">Din situation lige nu</div>';
  html += '<div class="hjulpet__sit-val">Fase ' + phase.phase + ' \u00B7 ' + elLabel + ' \u00B7 ' + season.season + '</div>';
  html += '</div>';

  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';

  // Det virker for kvinder som dig
  html += '<h3 class="praksis__section-title">Det virker for kvinder som dig</h3>';
  html += '<p class="praksis__section-intro">Andre kvinder i din livsfase og med dit element har fundet noget der virker. Her er deres anonyme erfaringer \u2014 m\u00e5ske genkender du noget.</p>';

  // Kort 1: Yoga
  html += '<div class="hjulpet__pc">';
  html += '<div class="hjulpet__pc-top"><div class="hjulpet__pc-num">' + data.yoga.pct + '%</div><div class="hjulpet__pc-tag">Fase ' + phase.phase + '</div></div>';
  html += '<h3 class="hjulpet__pc-title">Yin Yoga for ' + elLabel + '-elementet</h3>';
  html += '<p class="hjulpet__pc-desc">' + data.yoga.desc + '</p>';
  html += '<div class="hjulpet__pc-meta">Baseret p\u00e5 ' + data.yoga.count + ' kvinder i Fase ' + phase.phase + '</div>';
  html += '<div class="hjulpet__pc-link" onclick="navigateToYogaWithElement(\'' + el + '\')">Pr\u00f8v nu \u2192</div>';
  html += '</div>';

  // Kort 2: Kost
  html += '<div class="hjulpet__pc">';
  html += '<div class="hjulpet__pc-top"><div class="hjulpet__pc-num">' + data.kost.pct + '%</div><div class="hjulpet__pc-tag">' + elLabel + '</div></div>';
  html += '<h3 class="hjulpet__pc-title">Kost til ' + elLabel + '-elementet</h3>';
  html += '<p class="hjulpet__pc-desc">' + data.kost.desc + '</p>';
  html += '<div class="hjulpet__pc-meta">Baseret p\u00e5 ' + data.kost.count + ' kvinder med ' + elLabel + '-dominans</div>';
  html += '<div class="hjulpet__pc-link" onclick="App.loadScreen(\'kost-urter\')">Se anbefalinger \u2192</div>';
  html += '</div>';

  // Kort 3: Vejrtrækning
  html += '<div class="hjulpet__pc">';
  html += '<div class="hjulpet__pc-top"><div class="hjulpet__pc-num">' + data.aande.pct + '%</div><div class="hjulpet__pc-tag">' + season.season + '</div></div>';
  html += '<h3 class="hjulpet__pc-title">Vejrtr\u00e6kning for ' + season.season.toLowerCase() + '</h3>';
  html += '<p class="hjulpet__pc-desc">' + data.aande.desc + '</p>';
  html += '<div class="hjulpet__pc-meta">Baseret p\u00e5 ' + data.aande.count + ' kvinder i ' + season.season.toLowerCase() + '</div>';
  html += '<div class="hjulpet__pc-link" onclick="App.loadScreen(\'samlede-indsigt\')">Pr\u00f8v nu \u2192</div>';
  html += '</div>';

  // Kort 4: EFT
  html += '<div class="hjulpet__pc">';
  html += '<div class="hjulpet__pc-top"><div class="hjulpet__pc-num">' + data.eft.pct + '%</div><div class="hjulpet__pc-tag">' + phaseName + '</div></div>';
  html += '<h3 class="hjulpet__pc-title">' + data.eft.title + '</h3>';
  html += '<p class="hjulpet__pc-desc">' + data.eft.desc + '</p>';
  html += '<div class="hjulpet__pc-meta">Baseret p\u00e5 ' + data.eft.count + ' kvinder med ' + elLabel + '-dominans</div>';
  html += '<div class="hjulpet__pc-link" onclick="App.loadScreen(\'samlede-indsigt\')">Pr\u00f8v nu \u2192</div>';
  html += '</div>';

  // Hjælp andre kvinder
  html += '<div class="praksis__dots">\u00B7 \u00B7 \u00B7</div>';
  html += '<h3 class="praksis__section-title">Hj\u00e6lp andre kvinder</h3>';
  html += '<p class="praksis__section-intro">Hvad virker for dig? Dine anonyme erfaringer kan hj\u00e6lpe en anden kvinde i samme fase med at finde det hun har brug for.</p>';
  html += '<button class="refleksion__btn">Del din erfaring \u2192</button>';
  html += '<div class="hjulpet__disclaimer">Alle data er anonyme. Vi samler kun hvad der virker, aldrig hvem du er.</div>';

  // Crosslink
  html += '<div class="praksis__crosslink" onclick="App.loadScreen(\'din-energi\')">Se din energi p\u00e5 en anden dag \u2192</div>';

  contentEl.innerHTML = html;
}

// ---- Feature: Indstillinger ----

function navigateToIndstillinger(section) {
  window._indstillingerSection = section;
  App.loadScreen('indstillinger');
}
window.navigateToIndstillinger = navigateToIndstillinger;

// Default settings stored in localStorage.indstillinger
var IND_DEFAULTS = {
  maanedscyklus: false,
  maanefaser: true,
  cykluslaengde: 28,
  morgenIndsigt: true,
  aftenRefleksion: true,
  cyklusSkift: false,
  saesonSkift: true,
  ugentligOpsummering: false,
  morgenTid: '07:30',
  aftenTid: '21:00',
  delAnonymeData: true,
  visKollektivVisdom: true,
  delIndsigter: true,
  moerkTilstand: false,
  foelgSystem: true
};

function getIndSettings() {
  var saved = localStorage.getItem('indstillinger');
  if (saved) {
    var parsed = JSON.parse(saved);
    // Merge with defaults for any new keys
    for (var key in IND_DEFAULTS) {
      if (parsed[key] === undefined) parsed[key] = IND_DEFAULTS[key];
    }
    return parsed;
  }
  return JSON.parse(JSON.stringify(IND_DEFAULTS));
}

function saveIndSettings(settings) {
  localStorage.setItem('indstillinger', JSON.stringify(settings));
}

function indToggle(key) {
  var s = getIndSettings();
  s[key] = !s[key];
  // Cyklus logic: if maanedscyklus ON, also update user
  if (key === 'maanedscyklus' && s.maanedscyklus) {
    var u = JSON.parse(localStorage.getItem('user') || '{}');
    u.tracksMenstruation = true;
    localStorage.setItem('user', JSON.stringify(u));
  }
  if (key === 'maanedscyklus' && !s.maanedscyklus) {
    var u2 = JSON.parse(localStorage.getItem('user') || '{}');
    u2.tracksMenstruation = false;
    u2.lastPeriodDate = null;
    localStorage.setItem('user', JSON.stringify(u2));
  }
  if (key === 'maanefaser') {
    var u3 = JSON.parse(localStorage.getItem('user') || '{}');
    if (!s.maanefaser) u3.tracksMenstruation = true;
    localStorage.setItem('user', JSON.stringify(u3));
  }
  saveIndSettings(s);
  initIndstillingerScreen(null);
}
window.indToggle = indToggle;

function initIndstillingerScreen(scrollToSection) {
  var contentEl = document.getElementById('indstillinger-content');
  if (!contentEl) return;

  var user = JSON.parse(localStorage.getItem('user') || '{}');
  var relations = JSON.parse(localStorage.getItem('relations') || '[]');
  var s = getIndSettings();

  // Sync toggle state from user data
  s.maanedscyklus = !!user.tracksMenstruation;
  if (!s.maanedscyklus && s.maanefaser === undefined) s.maanefaser = true;

  var html = '';

  // Helper for toggle HTML
  function tog(key) {
    return '<div class="ind__toggle' + (s[key] ? ' ind__toggle--on' : '') + '" onclick="indToggle(\'' + key + '\')"></div>';
  }

  // ===== SEKTION 1: MIN PROFIL =====
  html += '<div class="ind__section" id="indstilling-profil">';
  html += '<div class="ind__section-label">MIN PROFIL</div>';
  html += '<div class="ind__setting-name">F\u00f8dselsdato</div>';
  html += '<input type="date" id="ind-birthdate" class="ind__input" value="' + (user.birthdate || '') + '">';
  if (user.birthdate) {
    var age = calculateAge(user.birthdate);
    var phase = calculateLifePhase(age);
    html += '<div class="ind__setting-info">Du er ' + Math.floor(age) + ' \u00e5r \u00b7 Fase ' + phase.phase + ': ' + phase.name + ' \u00b7 ' + ELEMENT_LABELS[phase.element] + '</div>';
  }
  html += '<div style="margin-top:16px">';
  html += '<div class="ind__setting-name">Navn (valgfrit)</div>';
  html += '<input type="text" id="ind-name" class="ind__input" placeholder="Dit fornavn \u2014 bruges kun i appen" value="' + escapeHtml(user.name || '') + '">';
  html += '</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 2: CYKLUS-INDSTILLINGER =====
  html += '<div class="ind__section" id="indstilling-cyklus">';
  html += '<div class="ind__section-label">CYKLUS-INDSTILLINGER</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info">';
  html += '<div class="ind__row-name">M\u00e5nedscyklus</div>';
  html += '<div class="ind__row-desc">F\u00f8lg din menstruationscyklus som den femte cyklus</div>';
  html += '</div>';
  html += tog('maanedscyklus');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info">';
  html += '<div class="ind__row-name">M\u00e5nens faser</div>';
  html += '<div class="ind__row-desc">F\u00f8lg m\u00e5nefaser i stedet \u2014 til dig uden menstruation, eller som supplement</div>';
  html += '</div>';
  html += tog('maanefaser');
  html += '</div>';

  html += '<div style="margin-top:12px">';
  html += '<div class="ind__setting-name">Cyklusl\u00e6ngde</div>';
  html += '<div class="ind__setting-desc">Gennemsnit i dage \u2014 bruges til at beregne uge 1-4</div>';
  html += '<input type="number" id="ind-cykluslaengde" class="ind__input ind__input--short" value="' + (s.cykluslaengde || 28) + '">';
  html += '</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 3: NOTIFIKATIONER =====
  html += '<div class="ind__section" id="indstilling-notifikationer">';
  html += '<div class="ind__section-label">NOTIFIKATIONER</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Morgen-indsigt</div>';
  html += '<div class="ind__row-desc">Kort besked om dagens energi, element og cyklusser n\u00e5r du v\u00e5gner</div></div>';
  html += tog('morgenIndsigt');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Aften-refleksion</div>';
  html += '<div class="ind__row-desc">En invitation til at m\u00e6rke efter \u2014 hvordan var din dag?</div></div>';
  html += tog('aftenRefleksion');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Cyklus-skift</div>';
  html += '<div class="ind__row-desc">Besked n\u00e5r du skifter fra \u00e9t element til et andet i dine cyklusser</div></div>';
  html += tog('cyklusSkift');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">S\u00e6son-skift</div>';
  html += '<div class="ind__row-desc">Besked ved overgang til en ny \u00e5rstid med nye anbefalinger</div></div>';
  html += tog('saesonSkift');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Ugentlig opsummering</div>';
  html += '<div class="ind__row-desc">Et kort overblik over din uge \u2014 m\u00f8nstre, check-ins og hvad der kommer</div></div>';
  html += tog('ugentligOpsummering');
  html += '</div>';

  html += '<div style="margin-top:12px">';
  html += '<div class="ind__setting-name">Morgentidspunkt</div>';
  html += '<input type="time" id="ind-morgen-tid" class="ind__input ind__input--narrow" value="' + (s.morgenTid || '07:30') + '">';
  html += '</div>';
  html += '<div style="margin-top:8px">';
  html += '<div class="ind__setting-name">Aftentidspunkt</div>';
  html += '<input type="time" id="ind-aften-tid" class="ind__input ind__input--narrow" value="' + (s.aftenTid || '21:00') + '">';
  html += '</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 4: PRIVATLIV & DELING =====
  html += '<div class="ind__section" id="indstilling-privatliv">';
  html += '<div class="ind__section-label">PRIVATLIV & DELING</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Del anonyme data</div>';
  html += '<div class="ind__row-desc">Bidrag til \u201CHvad andre i din fase g\u00f8r\u201D \u2014 helt anonymt, ingen persondata deles</div></div>';
  html += tog('delAnonymeData');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Vis kollektiv visdom</div>';
  html += '<div class="ind__row-desc">Se anonyme m\u00f8nstre og erfaringer fra andre kvinder i din livsfase</div></div>';
  html += tog('visKollektivVisdom');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">Del indsigter</div>';
  html += '<div class="ind__row-desc">Mulighed for at dele specifikke sider, \u00f8velser eller indsigter med veninder</div></div>';
  html += tog('delIndsigter');
  html += '</div>';
  html += '</div>';

  // OM DINE DATA insight box
  html += '<div class="ind__insight">';
  html += '<div class="ind__insight-label">OM DINE DATA</div>';
  html += '<div class="ind__insight-text">Alt gemmes lokalt p\u00e5 din enhed. Hvis du v\u00e6lger at dele anonyme data, fjernes al personlig information f\u00f8rst. Vi kan aldrig se hvem du er \u2014 kun at en kvinde i din fase valgte en bestemt \u00f8velse.</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 5: MINE RELATIONER =====
  html += '<div class="ind__section" id="indstilling-relationer">';
  html += '<div class="ind__section-label">MINE RELATIONER</div>';

  html += '<div class="ind__link" onclick="App.loadScreen(\'mine-relationer\')">';
  html += '<div class="ind__link-icon">\u2661</div>';
  html += '<div class="ind__link-body"><div class="ind__link-name">Tilf\u00f8j eller rediger relationer</div>';
  html += '<div class="ind__link-desc">Partner, b\u00f8rn, for\u00e6ldre, veninder \u2014 se jeres cyklusser sammen</div></div>';
  html += '<div class="ind__link-arrow">\u2192</div>';
  html += '</div>';

  html += '<div class="ind__hint">Du har ' + relations.length + ' relationer tilf\u00f8jet.</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 6: ISABELLE & INDHOLD =====
  html += '<div class="ind__section" id="indstilling-isabelle">';
  html += '<div class="ind__section-label">ISABELLE & INDHOLD</div>';

  html += '<div class="ind__link" onclick="App.loadScreen(\'min-praksis\')">';
  html += '<div class="ind__link-icon">\u25ce</div>';
  html += '<div class="ind__link-body"><div class="ind__link-name">Isabelles forl\u00f8b</div>';
  html += '<div class="ind__link-desc">S\u00e6sonbestemte forl\u00f8b med yoga, kost, refleksion og vejledning</div></div>';
  html += '<div class="ind__link-arrow">\u2192</div>';
  html += '</div>';

  html += '<div class="ind__link" onclick="window.open(\'https://isabelle-evita.dk\', \'_blank\')">';
  html += '<div class="ind__link-icon">\u2197</div>';
  html += '<div class="ind__link-body"><div class="ind__link-name">isabelle-evita.dk</div>';
  html += '<div class="ind__link-desc">Isabelles hjemmeside med kurser, workshops og retreats</div></div>';
  html += '<div class="ind__link-arrow">\u2192</div>';
  html += '</div>';

  html += '<div class="ind__link">';
  html += '<div class="ind__link-icon">\uD83D\uDCD6</div>';
  html += '<div class="ind__link-body"><div class="ind__link-name">Om bogen</div>';
  html += '<div class="ind__link-desc">\u201CDe 9 Livsfasers Energi\u201D \u2014 kinesisk medicin, vedisk filosofi og moderne psykologi</div></div>';
  html += '<div class="ind__link-arrow">\u2192</div>';
  html += '</div>';

  html += '<div class="ind__link">';
  html += '<div class="ind__link-icon">\u2709</div>';
  html += '<div class="ind__link-body"><div class="ind__link-name">Nyhedsbrev</div>';
  html += '<div class="ind__link-desc">Tilmeld dig Isabelles nyhedsbrev med s\u00e6sonens r\u00e5d og nye indsigter</div></div>';
  html += '<div class="ind__link-arrow">\u2192</div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 7: UDSEENDE =====
  html += '<div class="ind__section" id="indstilling-udseende">';
  html += '<div class="ind__section-label">UDSEENDE</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">M\u00f8rk tilstand</div>';
  html += '<div class="ind__row-desc">Skifte til m\u00f8rke farver \u2014 lettere at bruge om aftenen</div></div>';
  html += tog('moerkTilstand');
  html += '</div>';

  html += '<div class="ind__row">';
  html += '<div class="ind__row-info"><div class="ind__row-name">F\u00f8lg system</div>';
  html += '<div class="ind__row-desc">Skift automatisk mellem lys og m\u00f8rk baseret p\u00e5 din enheds indstilling</div></div>';
  html += tog('foelgSystem');
  html += '</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== SEKTION 8: DATA =====
  html += '<div class="ind__section" id="indstilling-data">';
  html += '<div class="ind__section-label">DATA</div>';

  html += '<button class="ind__btn" onclick="indExportData()">Eksport\u00e9r mine data</button>';
  html += '<div class="ind__btn-hint">Download dine check-ins, refleksioner og favoritter som fil</div>';

  html += '<button class="ind__btn" style="margin-top:16px" onclick="indImportData()">Import\u00e9r data</button>';
  html += '<div class="ind__btn-hint">Gendan data fra en tidligere eksport</div>';

  html += '<button class="ind__btn ind__btn--danger" style="margin-top:24px" onclick="confirmResetData()">Nulstil alle data</button>';
  html += '<div class="ind__btn-hint ind__btn-hint--danger">Slet alt \u2014 profil, relationer, check-ins, favoritter. Kan ikke fortrydes.</div>';
  html += '</div>';

  html += '<div class="ind__dots">\u00b7 \u00b7 \u00b7</div>';

  // ===== FOOTER: OM APPEN =====
  html += '<div class="ind__insight">';
  html += '<div class="ind__insight-label">OM APPEN</div>';
  html += '<div class="ind__insight-text">De 9 Livsfaser er bygget med k\u00e6rlighed og kinesisk medicin. Baseret p\u00e5 Isabelle Evita S\u00f8ndergaards bog \u201CDe 9 Livsfasers Energi.\u201D Version 1.0.</div>';
  html += '</div>';

  html += '<div class="ind__footer-links">';
  html += '<button class="ind__footer-link">Vilk\u00e5r</button>';
  html += '<button class="ind__footer-link">Privatlivspolitik</button>';
  html += '<button class="ind__footer-link">Kontakt</button>';
  html += '</div>';

  contentEl.innerHTML = html;

  // ===== EVENT LISTENERS =====

  // Birthdate change
  var bdInput = document.getElementById('ind-birthdate');
  if (bdInput) {
    bdInput.addEventListener('change', function() {
      var val = sanitizeBirthdate(this.value);
      if (!val) return;
      var d = safeParseBirth(val);
      if (d >= new Date()) return;
      var u = JSON.parse(localStorage.getItem('user') || '{}');
      u.birthdate = val;
      u.age = calculateAge(val);
      var ph = calculateLifePhase(u.age);
      u.phase = ph.phase;
      u.element = ph.element;
      localStorage.setItem('user', JSON.stringify(u));
      initIndstillingerScreen(null);
    });
  }

  // Name change
  var nameInput = document.getElementById('ind-name');
  if (nameInput) {
    nameInput.addEventListener('change', function() {
      var u = JSON.parse(localStorage.getItem('user') || '{}');
      u.name = this.value.trim();
      localStorage.setItem('user', JSON.stringify(u));
    });
  }

  // Cykluslængde change
  var clInput = document.getElementById('ind-cykluslaengde');
  if (clInput) {
    clInput.addEventListener('change', function() {
      var val = parseInt(this.value);
      if (val < 20 || val > 45) return;
      var st = getIndSettings();
      st.cykluslaengde = val;
      saveIndSettings(st);
    });
  }

  // Morgen/aften tid
  var mtInput = document.getElementById('ind-morgen-tid');
  if (mtInput) {
    mtInput.addEventListener('change', function() {
      var st = getIndSettings();
      st.morgenTid = this.value;
      saveIndSettings(st);
    });
  }
  var atInput = document.getElementById('ind-aften-tid');
  if (atInput) {
    atInput.addEventListener('change', function() {
      var st = getIndSettings();
      st.aftenTid = this.value;
      saveIndSettings(st);
    });
  }

  // Scroll to section if requested
  if (scrollToSection) {
    var target = document.getElementById('indstilling-' + scrollToSection);
    if (target) {
      setTimeout(function() { target.scrollIntoView({ behavior: 'smooth' }); }, 100);
    }
  }
}

// Export data as JSON file download
function indExportData() {
  var data = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'livsfaser-data-' + getLocalDateStr(new Date()) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showActionToast('Data eksporteret');
}
window.indExportData = indExportData;

// Import data from JSON file
function indImportData() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      try {
        var data = JSON.parse(ev.target.result);
        if (confirm('Import\u00e9r data? Dette overskriver dine nuv\u00e6rende data.')) {
          for (var key in data) {
            localStorage.setItem(key, data[key]);
          }
          showActionToast('Data importeret');
          initIndstillingerScreen(null);
        }
      } catch (err) {
        showActionToast('Ugyldig fil');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}
window.indImportData = indImportData;

function confirmResetData() {
  if (confirm('Er du sikker? Alle data slettes permanent \u2014 profil, relationer, check-ins, favoritter. Kan ikke fortrydes.')) {
    localStorage.clear();
    App.loadScreen('onboarding');
  }
}
window.confirmResetData = confirmResetData;

// ---- Feature: Notifikationer Timeline (I dag) ----

function generateNotifikationer() {
  var user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user.birthdate) return [];

  ensureIdagData();
  var d = window._idagData;
  if (!d) return [];

  var notifs = [];
  var now = new Date();

  // 1. Phase transition check (within 90 days of boundary)
  var age = d.age;
  var phase = d.lifePhase;
  var daysToNextPhase = Math.floor((phase.endAge - age) * 365.25);
  if (daysToNextPhase <= 90 && daysToNextPhase > 0 && phase.phase < 9) {
    var nextPhase = PHASE_DATA[phase.phase + 1];
    notifs.push({
      type: 'fase',
      color: '#244382',
      time: 'Om ' + (daysToNextPhase > 30 ? Math.round(daysToNextPhase/30) + ' mdr' : daysToNextPhase + ' dage'),
      title: 'Din fase skifter snart',
      text: 'Du bev\u00e6ger dig fra Fase ' + phase.phase + ' til Fase ' + nextPhase.phase + ': ' + nextPhase.name + '. En tid for ' + ELEMENT_LABELS[nextPhase.element].toLowerCase() + '.',
      priority: 1,
      action: "App.loadScreen('de-ni-livsfaser')"
    });
  }

  // 2. Season change (within 14 days of solstice/equinox)
  var seasonDates = [
    { month: 3, day: 21, season: 'For\u00e5r' },
    { month: 6, day: 21, season: 'Sommer' },
    { month: 8, day: 23, season: 'Sensommer' },
    { month: 9, day: 23, season: 'Efter\u00e5r' },
    { month: 12, day: 21, season: 'Vinter' }
  ];
  for (var s = 0; s < seasonDates.length; s++) {
    var sd = seasonDates[s];
    var sdDate = new Date(now.getFullYear(), sd.month - 1, sd.day);
    var diff = Math.floor((sdDate - now) / 86400000);
    if (diff > 0 && diff <= 14) {
      notifs.push({
        type: 'aarstid',
        color: '#5B8C5A',
        time: 'Om ' + diff + ' dage',
        title: sd.season + ' n\u00e6rmer sig',
        text: '\u00c5rstiden skifter snart. Din krop begynder m\u00e5ske allerede at m\u00e6rke den nye energi.',
        priority: 2,
        action: "App.loadScreen('de-fire-uger')"
      });
    }
  }

  // 3. Next organ clock shift
  var currentHour = now.getHours();
  var nextOrganHour = (Math.floor(currentHour / 2) + 1) * 2 + 1;
  if (nextOrganHour > 23) nextOrganHour = 1;
  var nextOrgan = null;
  for (var o = 0; o < ORGAN_CLOCK.length; o++) {
    if (ORGAN_CLOCK[o].startHour === nextOrganHour || (nextOrganHour >= ORGAN_CLOCK[o].startHour && nextOrganHour < ORGAN_CLOCK[o].startHour + 2)) {
      nextOrgan = ORGAN_CLOCK[o];
      break;
    }
  }
  if (!nextOrgan && ORGAN_CLOCK.length > 0) nextOrgan = ORGAN_CLOCK[0];
  if (nextOrgan) {
    var displayHour = (Math.floor(currentHour / 2) + 1) * 2;
    if (displayHour > 23) displayHour = 0;
    notifs.push({
      type: 'organur',
      color: '#7690C1',
      time: 'Kl. ' + (displayHour < 10 ? '0' : '') + displayHour + ':00',
      title: nextOrgan.organ + '-tid (' + ELEMENT_LABELS[nextOrgan.element] + ')',
      text: ORGAN_DESCRIPTIONS[nextOrgan.organ] ? ORGAN_DESCRIPTIONS[nextOrgan.organ].substring(0, 80) + '\u2026' : '',
      priority: 4,
      action: "showDetail('organur')"
    });
  }

  // 4. Daily reflection prompt
  notifs.push({
    type: 'refleksion',
    color: '#B8A6C0',
    time: 'I aften',
    title: 'Tid til refleksion',
    text: 'Tag 5 minutter til at reflektere over din dag.',
    priority: 5,
    action: "App.loadScreen('refleksion')"
  });

  // Sort by priority
  notifs.sort(function(a, b) { return a.priority - b.priority; });
  return notifs;
}

function renderNotifikationer() {
  var el = document.getElementById('idag-timeline');
  if (!el) return;

  var notifs = generateNotifikationer();
  if (notifs.length === 0) return;

  var headerEl = document.getElementById('idag-timeline-header');
  if (headerEl) {
    headerEl.innerHTML = '<h3 class="idag__section-title">Kommende</h3>' +
      '<p class="idag__section-subtitle">Skift og forskydninger i dine cyklusser de n\u00e6ste timer og dage. N\u00e5r du ved hvad der kommer, kan du m\u00f8de det forberedt i stedet for overrasket.</p>';
  }

  var maxVisible = 3;
  var html = '<div class="idag__tidslinje">';

  for (var i = 0; i < notifs.length; i++) {
    var n = notifs[i];
    var hidden = i >= maxVisible ? ' idag__tidslinje-item--hidden' : '';
    var isNext = i === 0 ? ' next' : '';
    var onclick = n.action ? ' onclick="' + n.action + '"' : '';
    html += '<div class="idag__tidslinje-item' + hidden + '"' + onclick + '>';
    html += '<div class="idag__tidslinje-dot' + isNext + '"></div>';
    html += '<div class="idag__tidslinje-time">' + n.time + '</div>';
    html += '<div class="idag__tidslinje-navn">' + n.title + '</div>';
    html += '<div class="idag__tidslinje-tekst">' + n.text + '</div>';
    html += '</div>';
  }

  if (notifs.length > maxVisible) {
    html += '<button class="idag__tidslinje-expand" onclick="toggleTimelineExpand()">Se alle \u203A</button>';
  }
  html += '</div>';
  el.innerHTML = html;
}

function toggleTimelineExpand() {
  var items = document.querySelectorAll('.idag__tidslinje-item--hidden');
  var btn = document.querySelector('.idag__tidslinje-expand');
  for (var i = 0; i < items.length; i++) {
    items[i].classList.toggle('idag__tidslinje-item--hidden');
  }
  if (btn) btn.textContent = btn.textContent === 'Se alle \u203A' ? 'Vis f\u00e6rre' : 'Se alle \u203A';
}
window.toggleTimelineExpand = toggleTimelineExpand;

// ---- Feature: Forløb (external links) ----

function renderForloebCard() {
  var el = document.getElementById('idag-forloeb');
  if (!el) return;

  ensureIdagData();
  var d = window._idagData;
  var seasonName = d ? d.season.season : 'Vinter';
  var forlob = FORLOB_DATA[seasonName] || FORLOB_DATA['Vinter'];

  var headerEl = document.getElementById('idag-forloeb-header');
  if (headerEl) {
    headerEl.innerHTML = '<h3 class="idag__section-title">G\u00e5 dybere</h3>' +
      '<p class="idag__section-subtitle">Isabelles s\u00e6sonforl\u00f8b med vejledning, \u00e5rstidskost og personlig praksis. F\u00f8lg den rytme naturen s\u00e6tter og udbyg den indsigt denne app bygger p\u00e5.</p>';
  }

  var html = '<div class="idag__indsigt-boks">';
  html += '<div class="idag__indsigt-label">ISABELLES FORL\u00d8B \u00b7 ' + seasonName.toUpperCase() + 'EN</div>';
  html += '<p class="idag__indsigt-tekst">' + forlob.subtitle + '</p>';
  html += '</div>';

  html += '<div class="idag__nav-kort" onclick="window.open(\'' + forlob.url + '\', \'_blank\')">';
  html += '<h3 class="idag__nav-titel">' + forlob.title + '</h3>';
  html += '<p class="idag__nav-tekst">F\u00f8lg ' + ELEMENT_LABELS[d.season.element] + '-elementet gennem ' + seasonName.toLowerCase() + 'en. En invitation til at g\u00e5 ind i stilheden og m\u00e6rke, hvad der gemmer sig der.</p>';
  html += '<div class="idag__nav-pil">L\u00e6s mere \u2192</div>';
  html += '</div>';

  // Colophon
  html += '<div class="idag__dots">\u00b7 \u00b7 \u00b7</div>';
  html += '<p class="idag__colophon">Denne app er bygget p\u00e5 Isabelle Evita S\u00f8ndergaards bog \u201cDe 9 Livsfasers Energi\u201d \u2014 et v\u00e6rk der samler kinesisk medicin, vedisk filosofi og moderne psykologi i \u00e9n sammenh\u00e6ngende forst\u00e5else af kvinders liv.</p>';

  el.innerHTML = html;
}

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

// Escape key handler for overlays
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var menuOv = document.getElementById('menu-overlay');
    if (menuOv && menuOv.classList.contains('menu-overlay--open')) {
      toggleMenu();
      return;
    }
    var searchOv = document.getElementById('search-overlay');
    if (searchOv && searchOv.classList.contains('search-overlay--open')) {
      toggleSearch();
    }
  }
});
