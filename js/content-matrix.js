// ---- Indholdsmatrix: Tidsvinduet v2 ----
// Dynamisk motor baseret på sheng/ko-cyklusser

// ================================================================
// BEVAREDE DATA (bruges af forsiden, Min Praksis, m.fl.)
// ================================================================

var CM_PHASES = {
  1: { name: "Livets begyndelse", age: "0\u20137 \u00e5r", element: "vand", short: "Livets begyndelse. Vand-elementet. Alt bygges op i stilhed.", energy: "Indadvendt, samlende, dyb. Fundamentet for hele livet l\u00e6gges her \u2014 knogler, t\u00e6nder, tillid.", body: "Nyreenergi blomstrer for f\u00f8rste gang. Kroppen samler og oplagrer jing.", emotion: "Frygt og tillid. Barnets verden er enten tryg eller utryg \u2014 og den oplevelse sidder i kroppen resten af livet." },
  2: { name: "Udforskning", age: "7\u201314 \u00e5r", element: "vand", short: "Udforskning. Stadig vand, men tr\u00e6ets energi begynder at spire.", energy: "Overgangen fra passiv modtagelse til aktiv nysgerrighed. Kroppen \u00e6ndrer sig, verden udvider sig.", body: "V\u00e6kst accelererer. Knogler forl\u00e6nges, t\u00e6nder skiftes. Puberteten banker p\u00e5.", emotion: "Nysgerrighed og usikkerhed. Verden er b\u00e5de sp\u00e6ndende og skr\u00e6mmende." },
  3: { name: "Forvandling", age: "14\u201321 \u00e5r", element: "trae", short: "Forvandling. Tr\u00e6-elementet. Alt vokser, alt vil ud, alt vil fremad.", energy: "Eksplosiv. Retning, handlekraft, ut\u00e5lmodighed. Kroppen er f\u00e6rdigudviklet, psyken er det ikke.", body: "Menstruation etableres. Lever og galdebl\u00e6re er aktive. Muskler og sener er fleksible.", emotion: "Vrede og frustration \u2014 tr\u00e6ets skygge. Men ogs\u00e5 mod, idealisme og en br\u00e6ndende trang til retf\u00e6rdighed." },
  4: { name: "Blomstring", age: "21\u201328 \u00e5r", element: "trae", short: "Blomstring. Tr\u00e6ets energi er p\u00e5 sit h\u00f8jeste. Retning, dr\u00f8mme, passion.", energy: "Tr\u00e6ets sidste og st\u00e6rkeste fase. Handlekraft, planer, fremtidsdr\u00f8mme. Ilden begynder at t\u00e6ndes.", body: "Kroppen er p\u00e5 sit mest fertile. Hormoner er i balance. Energien er h\u00f8j og j\u00e6vn.", emotion: "Ambition og ut\u00e5lmodighed. Dr\u00f8mme der f\u00f8les mulige og presserende p\u00e5 \u00e9n gang." },
  5: { name: "Ansvar", age: "28\u201335 \u00e5r", element: "ild", short: "Ansvar. Ild-elementet. Karriere, relationer, b\u00f8rn \u2014 alt br\u00e6nder.", energy: "Ildens fulde kraft. Du er synlig, aktiv, forbundet. Alt kr\u00e6ver dit engagement. Det er fantastisk \u2014 og udmattende.", body: "Hjertet og tyndtarmen er aktive. Kroppen kan stadig det hele, men begynder at vise de f\u00f8rste tegn p\u00e5 overbelastning.", emotion: "Gl\u00e6de og overv\u00e6ldelse. Ildens paradoks: at elske sit liv og samtidig f\u00f8le sig br\u00e6ndt." },
  6: { name: "Modning", age: "35\u201342 \u00e5r", element: "jord", short: "Modning. Jord-elementet. Fra ild til jord \u2014 fra at br\u00e6nde til at samle.", energy: "Overgang. Ilden d\u00e6mpes, og der melder sig nye sp\u00f8rgsm\u00e5l: Hvad er virkelig vigtigt? Hvad n\u00e6rer mig?", body: "Milt og mave kr\u00e6ver mere opm\u00e6rksomhed. Ford\u00f8jelsen \u00e6ndrer sig. Stofskiftet langsommes.", emotion: "Bekymring og omsorg \u2014 jordens grundf\u00f8lelse. At b\u00e6re andres behov og glemme sine egne." },
  7: { name: "H\u00f8st", age: "42\u201349 \u00e5r", element: "jord", short: "H\u00f8st. Jordens dybe fase. At samle ind og fejre hvad du har bygget.", energy: "Jordens modenhed. Du ved hvem du er. Kroppen begynder at forberede sig p\u00e5 n\u00e6ste store overgang.", body: "Perimenopause begynder ofte her. Hormoner svinger. V\u00e6gt\u00e6ndringer. Hedetogter kan starte.", emotion: "Taknemmelighed og savn. At se sine b\u00f8rn vokse, at m\u00e6rke tiden, at v\u00e6rdss\u00e6tte det n\u00e6re." },
  8: { name: "Frig\u00f8relse", age: "49\u201356 \u00e5r", element: "metal", short: "Frig\u00f8relse. Metal-elementet. At slippe det der ikke l\u00e6ngere passer.", energy: "Menstruation oph\u00f8rer. Ny hormonal virkelighed. Metal sk\u00e6rer igennem til det v\u00e6sentlige.", body: "Langsommere men renere. T\u00f8rhed i hud og slimhinder. Lunger og tyktarm kr\u00e6ver opm\u00e6rksomhed.", emotion: "Sorg og lettelse \u2014 metallets paradoks. Roller falder bort, og under dem: dig." },
  9: { name: "Visdom", age: "56\u201363 \u00e5r", element: "vand", short: "Visdom. Tilbage til vandet. Cirklen sluttes.", energy: "Vandet vender tilbage \u2014 men nu med hele livets erfaring. Dybde, ro, accept.", body: "Nyrerne beder om opm\u00e6rksomhed igen. Knogler, led, h\u00f8relse. Men ogs\u00e5 en kropslig ro der ikke fandtes f\u00f8r.", emotion: "Visdom og accept. At kunne rumme modsigelser uden at have brug for at l\u00f8se dem." }
};

var CM_SEASONS = {
  vinter: { name: "Vinter", months: [12, 1, 2], element: "vand", short: "Naturen hviler. Alt tr\u00e6kker sig ind under jorden for at samle kr\u00e6fter.", energy: "Tyngde der vil ned og ind. Naturlig trang til hvile.", body: "Nyrer og bl\u00e6re er aktive. Kroppen beder om mere s\u00f8vn, mere varme, mere stilhed.", advice: "Sov mere. Drik varmt. Spis n\u00e6rende supper. Giv dig selv lov til at tr\u00e6kke dig ind." },
  foraar: { name: "For\u00e5r", months: [3, 4, 5], element: "trae", short: "Naturen v\u00e5gner. Alt bryder frem efter vinterens hvile.", energy: "Opadg\u00e5ende, ekspansiv. Lys, vind, bev\u00e6gelse. Kroppen vil ud.", body: "Lever og galdebl\u00e6re er aktive. Allergi og hovedpine kan forekomme. Kroppen renser.", advice: "Bev\u00e6g dig mere. Spis gr\u00f8nt. Rens kroppen. Giv leveren plads til at arbejde." },
  sommer: { name: "Sommer", months: [6, 7], element: "ild", short: "Naturen st\u00e5r i fuldt flor. Lys, varme, forbindelse.", energy: "Udadvendt, varm, forbundet. Den l\u00e6ngste dag, den korteste nat.", body: "Hjerte og tyndtarm er aktive. Blodtryk og puls kan stige. Kroppen vil forbinde sig.", advice: "V\u00e6r social. Nyd lyset. Men husk at k\u00f8le ned \u2014 b\u00e5de krop og sind." },
  sensommer: { name: "Sensommer", months: [8, 9], element: "jord", short: "H\u00f8sten begynder. Naturen samler ind og modner.", energy: "Jordets fylde. Varme der langsomt vender.", body: "Milt og mave er aktive. Ford\u00f8jelsen er vigtig nu. Kroppen beder om n\u00e6ring.", advice: "Spis modne frugter og gr\u00f8ntsager. Undg\u00e5 r\u00e5 mad om aftenen. N\u00e6r dig selv." },
  efteraar: { name: "Efter\u00e5r", months: [10, 11], element: "metal", short: "Naturen giver slip. Bladene falder, og det essentielle st\u00e5r tilbage.", energy: "Indadg\u00e5ende, klar. Metallets skarpe luft.", body: "Lunger og tyktarm er aktive. Hud og slimhinder kan t\u00f8rre ud. Immunforsvaret udfordres.", advice: "Befugt kroppen. Tr\u00e6k vejret dybt. Giv dig selv lov til at slippe det overfl\u00f8dige." }
};

var CM_MENSTRUATION = {
  1: { name: "Uge 1", element: "vand", season: "Vinter", text: "Menstruationen tr\u00e6kker indad. Kroppen beder om hvile. Det er naturligt at have brug for at v\u00e6re alene, sove mere, sige nej til det der kr\u00e6ver for meget. Lyt til det." },
  2: { name: "Uge 2", element: "trae", season: "For\u00e5r", text: "Energien vender tilbage, og du m\u00e6rker dig klarere i hovedet, mere handlekraftig. En god tid til at tage de ting du har udskudt." },
  3: { name: "Uge 3", element: "ild", season: "Sommer", text: "Kroppen er p\u00e5 sit h\u00f8jeste. Du m\u00e6rker dig mere udadvendt, social, energisk. Brug det \u2014 men husk at samle ind f\u00f8r n\u00e6ste uge." },
  4: { name: "Uge 4", element: "metal", season: "Efter\u00e5r", text: "Kroppen forbereder sig p\u00e5 at give slip. Du kan m\u00e6rke en s\u00e5rbarhed, en tyndhudethed, hvor alt f\u00f8les lidt for meget. Det er metallets energi \u2014 respekt\u00e9r den." }
};

var CM_PRACTICE = {
  vand: { exercise: { name: "Butterfly (Baddha Konasana)", description: "\u00c5bner hofterne og stimulerer nyremeridanen. Sid 3\u20135 min og lad kroppen synke." }, food: { name: "Sort sesam og valn\u00f8dder", description: "N\u00e6rer nyreessensen og styrker livskraften." }, mind: { label: "BEVIDSTHED", description: "Vand pr\u00e6gede din krop. Hvile og regeneration \u2014 priorit\u00e9r s\u00f8vn og stille tid." }, breathing: { name: "Healinglyd: Chuiii", description: "Lad lyden vibrere dybt i l\u00e6nden. Chuiii beroer nyrerne og n\u00e6rer din grundl\u00e6ggende livsenergi." } },
  trae: { exercise: { name: "Dragen", description: "Dybt hoftestretch der stimulerer lever- og galdebl\u00e6remeridianen. 3\u20135 min per side." }, food: { name: "Gr\u00f8nne bladgr\u00f8ntsager og citronsaft", description: "St\u00f8tter leverens naturlige rensning og giver tr\u00e6ets energi n\u00e6ring." }, mind: { label: "BEVIDSTHED", description: "Tr\u00e6 pr\u00e6gede din krop. Kreativt udtryk og bev\u00e6gelse \u2014 giv vreden retning, den er skabekraft." }, breathing: { name: "Healinglyd: Shhh", description: "Leverens og galdebl\u00e6rens lyd. Slipper frustration og giver plads til handling." } },
  ild: { exercise: { name: "Sphinx (Bhujangasana)", description: "\u00c5bner brystet og stimulerer hjertemeridianen. 3\u20135 min. M\u00e6rk den bl\u00f8de \u00e5bning over brystet." }, food: { name: "Gr\u00f8n te, rucula og vandmelon", description: "Bitter smag k\u00f8ler ilden. Vandmelon og agurk befugter indefra." }, mind: { label: "BEVIDSTHED", description: "Ild pr\u00e6gede din krop. Forbindelse og gl\u00e6de \u2014 men husk stille stunder. Hjertet har brug for hvile midt i al den varme." }, breathing: { name: "K\u00f8ling: 4-2-8", description: "Ind p\u00e5 4 t\u00e6l, hold 2, ud p\u00e5 6\u20138 t\u00e6l \u2014 som at bl\u00e6se bl\u00f8dt p\u00e5 en varm kop te. K\u00f8ler ilden." } },
  jord: { exercise: { name: "Sphinx med vrid", description: "Vrid langsomt overkroppen mod den ene side. 2\u20133 min per side. \u00c5bner miltmeridianen og stimulerer ford\u00f8jelsen." }, food: { name: "Gr\u00e6skar, guler\u00f8dder og s\u00f8de kartofler", description: "Naturlig s\u00f8d smag styrker milten. Varme, n\u00e6rende f\u00f8devarer der st\u00f8tter ford\u00f8jelsen." }, mind: { label: "BEVIDSTHED", description: "Jord pr\u00e6gede din krop. Hvad n\u00e6rer dig? Stop op og saml ind. Sp\u00f8rg: hvad har jeg egentlig brug for?" }, breathing: { name: "Varme i midten", description: "H\u00e6nder p\u00e5 maven. \u00c5nd ind og send \u00e5ndedr\u00e6ttet ned i b\u00e6kkenet \u2014 forestil dig et b\u00e5l i kroppens midte." } },
  metal: { exercise: { name: "Bananen", description: "L\u00e6g dig p\u00e5 ryggen og dan en bananform. 3\u20135 min per side. \u00c5bner interkostale muskler og giver lungerne mere plads." }, food: { name: "P\u00e6rer med honning og blomk\u00e5l", description: "Hvide f\u00f8devarer n\u00e6rer lungerne. P\u00e6rer med honning befugter indefra." }, mind: { label: "BEVIDSTHED", description: "Metal pr\u00e6gede din krop. Hvad holder du fast i? Skriv det ned. Sp\u00f8rg dig selv: er dette mit at b\u00e6re?" }, breathing: { name: "Lungernes lyd: Ssss", description: "Ind p\u00e5 4 t\u00e6l, ud p\u00e5 8 med bl\u00f8d \u00absss\u00bb-lyd. Dobbelt ud\u00e5nding. Slipper sorg og giver lethed." } }
};

// Bevarede hjælpefunktioner (bruges andre steder i app.js)
function cmGetSeason(targetDate) {
  var month = targetDate.getMonth() + 1;
  if (month === 12 || month === 1 || month === 2) return "vinter";
  if (month >= 3 && month <= 5) return "foraar";
  if (month === 6 || month === 7) return "sommer";
  if (month === 8 || month === 9) return "sensommer";
  return "efteraar";
}

function cmGetPhase(birthDate, targetDate) {
  var bd = new Date(birthDate);
  var td = new Date(targetDate);
  var age = td.getFullYear() - bd.getFullYear();
  var m = td.getMonth() - bd.getMonth();
  if (m < 0 || (m === 0 && td.getDate() < bd.getDate())) age--;
  if (age < 0) age = 0;
  if (age < 7) return 1;
  if (age < 14) return 2;
  if (age < 21) return 3;
  if (age < 28) return 4;
  if (age < 35) return 5;
  if (age < 42) return 6;
  if (age < 49) return 7;
  if (age < 56) return 8;
  return 9;
}


// ================================================================
// TIDSVINDUET MOTOR v2 — Dynamisk indsigt
// ================================================================

// ---- Elementrelationer (faste regler) ----

var SHENG = {
  vand: "trae",
  trae: "ild",
  ild: "jord",
  jord: "metal",
  metal: "vand"
};

var KO = {
  vand: "ild",
  ild: "metal",
  metal: "trae",
  trae: "jord",
  jord: "vand"
};

// ---- Elementernes kvaliteter (ordbog) ----

var ELEMENTS = {
  vand: {
    name: "Vand",
    season: "Vinter",
    quality: "stilhed, dybde, hvile, tillid",
    organs: "Nyrer og bl\u00e6re",
    emotion_balanced: "tillid, rolig styrke, t\u00e5lmodighed",
    emotion_challenged: "frygt, udmattelse, kulde i knoglerne, uro i l\u00e6nden",
    direction: "indad og nedad",
    need: "hvile, varme, s\u00f8vn, tid til at lade tingene modnes",
    gift: "fundamentet, livskraften, evnen til at stole p\u00e5 at livet b\u00e6rer",
    image: "vinteren, det stille vand under isen, fr\u00f8et der venter i m\u00f8rket"
  },
  trae: {
    name: "Tr\u00e6",
    season: "For\u00e5r",
    quality: "v\u00e6kst, retning, handlekraft, gennembrud",
    organs: "Lever og galdebl\u00e6re",
    emotion_balanced: "mod, kreativitet, fleksibilitet",
    emotion_challenged: "vrede, frustration, ut\u00e5lmodighed, stive skuldre, hovedpine",
    direction: "fremad og opad",
    need: "bev\u00e6gelse, retning, frihed til at vokse, plads til kreativt udtryk",
    gift: "kraften til at bryde igennem, modet til at g\u00e5 nye veje",
    image: "for\u00e5ret, spiren der presser gennem asfalten, tr\u00e6et der b\u00f8jer uden at kn\u00e6kke"
  },
  ild: {
    name: "Ild",
    season: "Sommer",
    quality: "varme, forbindelse, passion, gl\u00e6de",
    organs: "Hjerte og tyndtarm",
    emotion_balanced: "gl\u00e6de, forbindelse, evne til at elske og v\u00e6re n\u00e6rv\u00e6rende",
    emotion_challenged: "rastl\u00f8shed, overstimulering, s\u00f8vnl\u00f8shed, tankemylder, tomhed",
    direction: "udad og opad",
    need: "forbindelse, samv\u00e6r, men ogs\u00e5 stille stunder for at balancere",
    gift: "gl\u00e6den, varmen, evnen til at bringe mennesker sammen",
    image: "sommeren, de lange aftener, latteren over bordet, den varme der opst\u00e5r n\u00e5r du h\u00f8rer til"
  },
  jord: {
    name: "Jord",
    season: "Sensommer",
    quality: "stabilitet, n\u00e6ring, omsorg, fylde",
    organs: "Mave og milt",
    emotion_balanced: "tryghed, omsorg, evne til at give uden at t\u00f8mme sig selv",
    emotion_challenged: "bekymring, tanker der k\u00f8rer i ring, uro i maven, at blive splittet i for mange retninger",
    direction: "centrerende, samlende",
    need: "varme, n\u00e6rende mad, stabilitet, at sp\u00f8rge: hvad n\u00e6rer mig?",
    gift: "den grund du st\u00e5r p\u00e5, evnen til at rumme og n\u00e6re",
    image: "sensommeren, de gyldne marker, frugttræerne der bugner, f\u00f8lelsen af at have nok"
  },
  metal: {
    name: "Metal",
    season: "Efter\u00e5r",
    quality: "klarhed, essens, at slippe det overfl\u00f8dige",
    organs: "Lunger og tyktarm",
    emotion_balanced: "klarhed, accept, lethed, v\u00e6rdighed",
    emotion_challenged: "sorg, melankoli, tyngde i brystet, at holde fast i det der burde slippes",
    direction: "indad og nedad, mod essens",
    need: "frisk luft, bevidst vejrtr\u00e6kning, befugtende mad, at give slip",
    gift: "evnen til at se hvad der er v\u00e6sentligt, modet til at s\u00f8rge og slippe",
    image: "efter\u00e5ret, bladene der falder, tr\u00e6et der st\u00e5r lettere, den skarpe klare luft"
  }
};

// ---- Fasedata med overgangselementer ----

var WOMAN_PHASES = {
  1: { name: "Livets begyndelse", element: "vand", age: "0\u20137" },
  2: { name: "Udforskning", element: "vand_trae", age: "7\u201314" },
  3: { name: "Forvandling", element: "trae", age: "14\u201321" },
  4: { name: "Blomstring", element: "trae_ild", age: "21\u201328" },
  5: { name: "Ansvar", element: "ild", age: "28\u201335" },
  6: { name: "Modning", element: "ild_jord", age: "35\u201342" },
  7: { name: "H\u00f8st", element: "jord", age: "42\u201349" },
  8: { name: "Frig\u00f8relse", element: "metal", age: "49\u201356" },
  9: { name: "Visdom", element: "metal_vand", age: "56\u201363+" }
};

var MAN_PHASES = {
  1: { name: "Fundament", element: "vand", age: "0\u20138" },
  2: { name: "Opv\u00e5gning", element: "vand_trae", age: "8\u201316" },
  3: { name: "Udfoldelse", element: "trae", age: "16\u201324" },
  4: { name: "Toppunkt", element: "trae_ild", age: "24\u201332" },
  5: { name: "Konsolidering", element: "ild", age: "32\u201340" },
  6: { name: "Vendepunkt", element: "ild_jord", age: "40\u201348" },
  7: { name: "Forvandling", element: "jord", age: "48\u201356" },
  8: { name: "H\u00f8st", element: "jord_metal", age: "56\u201364" },
  9: { name: "Visdom", element: "metal_vand", age: "64+" }
};


// ================================================================
// BEREGNINGSFUNKTIONER
// ================================================================

function yearsDiff(targetDate, birthDate) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);
  var bd = (birthDate instanceof Date) ? birthDate : new Date(birthDate);
  var age = td.getFullYear() - bd.getFullYear();
  var m = td.getMonth() - bd.getMonth();
  if (m < 0 || (m === 0 && td.getDate() < bd.getDate())) age--;
  if (age < 0) age = 0;
  return age;
}

function getWomanPhase(birthDate, targetDate) {
  var age = yearsDiff(targetDate, birthDate);
  var phaseNum;
  if (age < 7) phaseNum = 1;
  else if (age < 14) phaseNum = 2;
  else if (age < 21) phaseNum = 3;
  else if (age < 28) phaseNum = 4;
  else if (age < 35) phaseNum = 5;
  else if (age < 42) phaseNum = 6;
  else if (age < 49) phaseNum = 7;
  else if (age < 56) phaseNum = 8;
  else phaseNum = 9;
  var p = WOMAN_PHASES[phaseNum];
  return { phase: phaseNum, name: p.name, element: p.element, age: p.age };
}

function getManPhase(birthDate, targetDate) {
  var age = yearsDiff(targetDate, birthDate);
  var phaseNum;
  if (age < 8) phaseNum = 1;
  else if (age < 16) phaseNum = 2;
  else if (age < 24) phaseNum = 3;
  else if (age < 32) phaseNum = 4;
  else if (age < 40) phaseNum = 5;
  else if (age < 48) phaseNum = 6;
  else if (age < 56) phaseNum = 7;
  else if (age < 64) phaseNum = 8;
  else phaseNum = 9;
  var p = MAN_PHASES[phaseNum];
  return { phase: phaseNum, name: p.name, element: p.element, age: p.age };
}

function tvGetSeason(date) {
  var d = (date instanceof Date) ? date : new Date(date);
  var month = d.getMonth() + 1;
  if (month === 12 || month === 1 || month === 2) return { name: "Vinter", element: "vand" };
  if (month >= 3 && month <= 5) return { name: "For\u00e5r", element: "trae" };
  if (month === 6 || month === 7) return { name: "Sommer", element: "ild" };
  if (month === 8 || month === 9) return { name: "Sensommer", element: "jord" };
  return { name: "Efter\u00e5r", element: "metal" };
}

function getMonthElement(date) {
  var d = (date instanceof Date) ? date : new Date(date);
  var month = d.getMonth() + 1;
  var map = { 12: "vand", 1: "vand", 2: "vand", 3: "trae", 4: "trae", 5: "trae", 6: "ild", 7: "ild", 8: "jord", 9: "jord", 10: "metal", 11: "metal" };
  return map[month];
}

function getPrimaryElement(phaseElement) {
  if (phaseElement.indexOf("_") !== -1) {
    return phaseElement.split("_")[0];
  }
  return phaseElement;
}

function getSecondaryElement(phaseElement) {
  if (phaseElement.indexOf("_") !== -1) {
    return phaseElement.split("_")[1];
  }
  return null;
}

function getRelation(element1, element2) {
  if (element1 === element2) return "same";
  if (SHENG[element1] === element2) return "nourish";
  if (SHENG[element2] === element1) return "nourished";
  if (KO[element1] === element2) return "control";
  if (KO[element2] === element1) return "controlled";
  return "neutral";
}


// ================================================================
// INDSIGT-GENERATORER
// ================================================================

function generatePersonalInsight(person, targetDate, isPast) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);
  var phase = (person.gender === "male" || person.gender === "mand")
    ? getManPhase(person.birthDate, td)
    : getWomanPhase(person.birthDate, td);
  var season = tvGetSeason(td);
  var age = yearsDiff(td, person.birthDate);

  var phaseElement = getPrimaryElement(phase.element);
  var seasonElement = season.element;
  var relation = getRelation(phaseElement, seasonElement);

  var pe = ELEMENTS[phaseElement];
  var se = ELEMENTS[seasonElement];

  var insight = "";

  // Tidsangivelse
  if (isPast) {
    insight += "Du var " + age + " og i " + phase.name + " \u2014 " + pe.name + "-elementets \u00e5r. ";
    insight += "Det var " + season.name.toLowerCase() + ", og " + se.name + "-elementet pr\u00e6gede \u00e5rstiden. ";
  } else {
    insight += "Du vil v\u00e6re " + age + " og i " + phase.name + " \u2014 " + pe.name + "-elementets \u00e5r. ";
    insight += "Det er " + season.name.toLowerCase() + ", og " + se.name + "-elementet pr\u00e6ger \u00e5rstiden. ";
  }

  // Elementrelation
  switch (relation) {
    case "same":
      insight += "\n\n";
      insight += pe.name + " m\u00f8der " + pe.name + ". ";
      insight += "Din livsfase og \u00e5rstiden taler samme sprog \u2014 begge tr\u00e6kker " + pe.direction + ". ";
      insight += "Det forst\u00e6rker alt: " + pe.emotion_balanced + ", men ogs\u00e5 risikoen for " + pe.emotion_challenged + ". ";
      if (isPast) {
        insight += "Hvis du husker den periode, m\u00e6rkede du sandsynligvis det dobbelte af " + pe.name.toLowerCase() + "ets kvalitet \u2014 " + pe.quality + ". Det var ikke tilf\u00e6ldigt.";
      } else {
        insight += "Du kan forvente at m\u00e6rke " + pe.name.toLowerCase() + "ets kvalitet ekstra st\u00e6rkt \u2014 " + pe.quality + ". Brug det, men v\u00e6r opm\u00e6rksom p\u00e5 at balancere.";
      }
      break;

    case "nourish":
      insight += "\n\n";
      insight += pe.name + " n\u00e6rer " + se.name + ". ";
      insight += "Din livsfases energi giver br\u00e6ndstof til \u00e5rstidens kvalitet. ";
      insight += "Det kan f\u00f8les som en naturlig str\u00f8m \u2014 " + pe.gift + " st\u00f8tter " + se.quality + ". ";
      if (isPast) {
        insight += "Du gav sandsynligvis mere af dig selv end normalt i den periode.";
      } else {
        insight += "Det er en god tid til at bruge den str\u00f8m \u2014 men husk at fylde op.";
      }
      break;

    case "nourished":
      insight += "\n\n";
      insight += se.name + " n\u00e6rer " + pe.name + ". ";
      insight += "\u00c5rstiden st\u00f8tter din livsfase \u2014 " + se.quality + " giver n\u00e6ring til " + pe.need + ". ";
      if (isPast) {
        insight += "Det var sandsynligvis en periode hvor du f\u00f8lte dig b\u00e5ret, m\u00e5ske uden at vide hvorfor.";
      } else {
        insight += "\u00c5rstiden arbejder for dig. Brug den.";
      }
      break;

    case "control":
      insight += "\n\n";
      insight += pe.name + " kontrollerer " + se.name + ". ";
      insight += "Din livsfases energi d\u00e6mper \u00e5rstidens naturlige udtryk. ";
      insight += "Du m\u00e6rker m\u00e5ske at " + se.quality + " ikke rigtig slipper igennem \u2014 fordi " + pe.quality + " dominerer. ";
      if (isPast) {
        insight += "Det var en periode hvor din egen fase overstyrede \u00e5rstiden. Det er ikke forkert, men det kan have kostet energi.";
      } else {
        insight += "Giv bevidst plads til det \u00e5rstiden pr\u00f8ver at give dig.";
      }
      break;

    case "controlled":
      insight += "\n\n";
      insight += se.name + " kontrollerer " + pe.name + ". ";
      insight += "\u00c5rstiden bremser din livsfases naturlige bev\u00e6gelse. ";
      if (isPast) {
        insight += "Det kan have f\u00f8lt sig som modstand \u2014 din fase ville " + pe.direction + ", men \u00e5rstiden trak i en anden retning. Der var ingenting galt. Du blev trukket i to retninger af to naturlige kr\u00e6fter.";
      } else {
        insight += "Du kan opleve at \u00e5rstiden bremser dig. Det er ikke svaghed \u2014 det er to naturlige kr\u00e6fter der tr\u00e6kker i forskellige retninger. Lyt til begge.";
      }
      break;

    default:
      insight += "\n\n";
      insight += pe.name + " og " + se.name + " m\u00f8des. ";
      insight += "Din livsfase tr\u00e6kker " + pe.direction + ", mens \u00e5rstiden inviterer til " + se.quality + ". ";
      insight += "De to energier udfordrer ikke hinanden direkte, men de taler heller ikke samme sprog.";
      break;
  }

  // Overgangsnotat
  var secondary = getSecondaryElement(phase.element);
  if (secondary) {
    var secEl = ELEMENTS[secondary];
    insight += "\n\n";
    insight += "Du er i en overgang \u2014 " + pe.name + " bevæger sig mod " + secEl.name + ". ";
    insight += "Det betyder at du m\u00e5ske m\u00e6rker begge kvaliteter: " + pe.quality + " og begyndende " + secEl.quality + ".";
  }

  return insight;
}


function generateRelationInsight(person1, person2, targetDate, isPast) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);

  var phase1 = (person1.gender === "male" || person1.gender === "mand")
    ? getManPhase(person1.birthDate, td)
    : getWomanPhase(person1.birthDate, td);
  var phase2 = (person2.gender === "male" || person2.gender === "mand")
    ? getManPhase(person2.birthDate, td)
    : getWomanPhase(person2.birthDate, td);

  var el1 = getPrimaryElement(phase1.element);
  var el2 = getPrimaryElement(phase2.element);
  var season = tvGetSeason(td);

  var relation = getRelation(el1, el2);
  var e1 = ELEMENTS[el1];
  var e2 = ELEMENTS[el2];

  var age1 = yearsDiff(td, person1.birthDate);
  var age2 = yearsDiff(td, person2.birthDate);

  var p2name = person2.name || "den anden";

  var insight = "";

  // Hvem er hvem
  if (isPast) {
    insight += "Du var " + age1 + " og i " + phase1.name + ". " + p2name + " var " + age2 + " og i " + phase2.name + ". ";
  } else {
    insight += "Du er " + age1 + " og i " + phase1.name + ". " + p2name + " er " + age2 + " og i " + phase2.name + ". ";
  }
  insight += e1.name + " m\u00f8der " + e2.name + ".\n\n";

  // Dynamik baseret p\u00e5 elementrelation
  switch (relation) {
    case "same":
      insight += "I er i det samme element. Det betyder at I deler de samme grundl\u00e6ggende behov \u2014 " + e1.quality + ". ";
      insight += "I forst\u00e5r hinanden intuitivt, fordi I tr\u00e6kker i samme retning. ";
      insight += "Men det betyder ogs\u00e5 at I mangler det samme. ";
      insight += "N\u00e5r begge har brug for " + e1.need + ", er der ingen der fylder op.";
      break;

    case "nourish":
      insight += "Dit element n\u00e6rer " + p2name + "s. " + e1.name + " giver " + e2.name + " kraft \u2014 " + e1.gift + " st\u00f8tter " + e2.need + ". ";
      insight += "Det er en naturlig str\u00f8m, og den kan f\u00f8les god. ";
      insight += "Men hvis du giver for meget, t\u00f8mmes du selv. ";
      if (isPast) {
        insight += "M\u00e6rkede du at du gav mere end du fik tilbage i den periode?";
      } else {
        insight += "V\u00e6r opm\u00e6rksom p\u00e5 at fylde dig selv op, mens du n\u00e6rer " + p2name + ".";
      }
      break;

    case "nourished":
      insight += p2name + "s element n\u00e6rer dit. " + e2.name + " giver " + e1.name + " kraft. ";
      insight += p2name + " st\u00f8tter dig med " + e2.gift + ", og du har brug for " + e1.need + ". ";
      if (isPast) {
        insight += "Det var sandsynligvis en periode hvor " + p2name + " var en kilde til st\u00f8tte for dig \u2014 m\u00e5ske uden at nogen af jer var bevidste om det.";
      } else {
        insight += p2name + " kan v\u00e6re en vigtig st\u00f8tte for dig i denne periode.";
      }
      break;

    case "control":
      insight += "Dit element kontrollerer " + p2name + "s. " + e1.name + " bremser " + e2.name + ". ";
      insight += "Det kan betyde at din tilstedev\u00e6relse d\u00e6mper det " + p2name + " har brug for \u2014 " + e2.need + ". ";
      insight += "Det er ikke nogens skyld. Det er elementerne der tr\u00e6kker. ";
      if (isPast) {
        insight += "Hvis der var friktion mellem jer, var det sandsynligvis her den sad. Ikke i viljen, men i energien.";
      } else {
        insight += "V\u00e6r bevidst om at give " + p2name + " plads til " + e2.quality + ", ogs\u00e5 n\u00e5r det strider mod din egen rytme.";
      }
      break;

    case "controlled":
      insight += p2name + "s element kontrollerer dit. " + e2.name + " bremser " + e1.name + ". ";
      insight += "Det kan f\u00f8les som at " + p2name + " holder dig tilbage \u2014 men det er ikke personligt. ";
      insight += p2name + "s energi tr\u00e6kker " + e2.direction + ", og din tr\u00e6kker " + e1.direction + ". ";
      if (isPast) {
        insight += "Den frustration du m\u00e5ske f\u00f8lte, var to naturlige kr\u00e6fter der m\u00f8dtes. Ingen af jer var forkerte.";
      } else {
        insight += "Det kan hj\u00e6lpe at vide, at sp\u00e6ndingen er energetisk, ikke personlig.";
      }
      break;

    default:
      insight += e1.name + " og " + e2.name + " er hverken i direkte n\u00e6ring eller kontrol. ";
      insight += "Jeres energier m\u00f8des p\u00e5 neutral grund \u2014 der er plads, men ogs\u00e5 afstand.";
      break;
  }

  // Tilf\u00f8j \u00e5rstiden som tredje faktor
  var seasonRelToP1 = getRelation(season.element, el1);
  var seasonRelToP2 = getRelation(season.element, el2);

  insight += "\n\n";
  insight += "\u00c5rstiden (" + season.name + ", " + ELEMENTS[season.element].name + ") ";

  if (seasonRelToP1 === "same" || seasonRelToP1 === "nourished") {
    insight += "st\u00f8tter dig ";
  } else if (seasonRelToP1 === "controlled") {
    insight += "presser dig ";
  } else {
    insight += "p\u00e5virker dig ";
  }

  if (seasonRelToP2 === "same" || seasonRelToP2 === "nourished") {
    insight += "og st\u00f8tter " + p2name + ". ";
  } else if (seasonRelToP2 === "controlled") {
    insight += "og presser " + p2name + ". ";
  } else {
    insight += "og p\u00e5virker " + p2name + " anderledes. ";
  }

  return insight;
}


function generateGroupInsight(persons, targetDate, isPast) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);
  var season = tvGetSeason(td);

  // Beregn alle faser
  var people = [];
  for (var i = 0; i < persons.length; i++) {
    var p = persons[i];
    var phase = (p.gender === "male" || p.gender === "mand")
      ? getManPhase(p.birthDate, td)
      : getWomanPhase(p.birthDate, td);
    var age = yearsDiff(td, p.birthDate);
    people.push({ name: p.name || "Person " + (i + 1), phase: phase, age: age, element: getPrimaryElement(phase.element) });
  }

  var insight = "";

  // Hvem er i hvilken fase
  for (var j = 0; j < people.length; j++) {
    var pp = people[j];
    var el = ELEMENTS[pp.element];
    insight += pp.name + ": " + pp.age + " \u00e5r, " + pp.phase.name + ", " + el.name + "\n";
  }
  insight += "\u00c5rstid: " + season.name + " (" + ELEMENTS[season.element].name + ")\n\n";

  // Find konflikter og harmonier
  var tensions = [];
  var harmonies = [];

  for (var a = 0; a < people.length; a++) {
    for (var b = a + 1; b < people.length; b++) {
      var rel = getRelation(people[a].element, people[b].element);
      if (rel === "control" || rel === "controlled") {
        tensions.push({ p1: people[a], p2: people[b], el1: people[a].element, el2: people[b].element, rel: rel });
      } else if (rel === "same" || rel === "nourish" || rel === "nourished") {
        harmonies.push({ p1: people[a], p2: people[b], el1: people[a].element, el2: people[b].element, rel: rel });
      }
    }
  }

  if (tensions.length > 0) {
    insight += isPast ? "Det der skabte sp\u00e6nding:\n" : "Hvor det kan presse:\n";
    for (var ti = 0; ti < tensions.length; ti++) {
      var t = tensions[ti];
      var te1 = ELEMENTS[t.el1];
      var te2 = ELEMENTS[t.el2];
      if (t.rel === "control") {
        insight += t.p1.name + "s " + te1.name + " kontrollerer " + t.p2.name + "s " + te2.name + ". ";
        insight += t.p1.name + " tr\u00e6kker " + te1.direction + ", " + t.p2.name + " har brug for " + te2.need + ". ";
        insight += "Det kan skabe friktion.\n";
      } else {
        insight += t.p2.name + "s " + te2.name + " kontrollerer " + t.p1.name + "s " + te1.name + ". ";
        insight += t.p1.name + "s behov for " + te1.need + " bremses.\n";
      }
    }
  }

  if (harmonies.length > 0) {
    insight += isPast ? "\nDet der bar jer:\n" : "\nHvor I kan st\u00f8tte hinanden:\n";
    for (var hi = 0; hi < harmonies.length; hi++) {
      var h = harmonies[hi];
      var he1 = ELEMENTS[h.el1];
      var he2 = ELEMENTS[h.el2];
      if (h.rel === "same") {
        insight += h.p1.name + " og " + h.p2.name + " deler " + he1.name + ". I forst\u00e5r hinanden her.\n";
      } else if (h.rel === "nourish") {
        insight += h.p1.name + "s " + he1.name + " n\u00e6rer " + h.p2.name + "s " + he2.name + ". Der er en naturlig str\u00f8m.\n";
      } else {
        insight += h.p2.name + "s " + he2.name + " n\u00e6rer " + h.p1.name + "s " + he1.name + ". " + h.p2.name + " st\u00f8tter dig her.\n";
      }
    }
  }

  return insight;
}


// ================================================================
// PAR-FORSKYDNING (7-\u00e5rs vs 8-\u00e5rs cyklus)
// ================================================================

function getPhaseShift(womanBirthDate, manBirthDate, targetDate) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);
  var wPhase = getWomanPhase(womanBirthDate, td);
  var mPhase = getManPhase(manBirthDate, td);

  var wAge = yearsDiff(td, womanBirthDate);
  var mAge = yearsDiff(td, manBirthDate);

  var wPhaseStart = (wPhase.phase - 1) * 7;
  var wProgress = Math.min((wAge - wPhaseStart) / 7, 1);

  var mPhaseStart = (mPhase.phase - 1) * 8;
  var mProgress = Math.min((mAge - mPhaseStart) / 8, 1);

  var wEl = getPrimaryElement(wPhase.element);
  var mEl = getPrimaryElement(mPhase.element);
  var sameElement = (wEl === mEl);

  // Generer beskrivelse
  var desc = "";
  desc += "Hendes fase: " + wPhase.name + " (" + ELEMENTS[wEl].name + ", " + Math.round(wProgress * 100) + "% igennem). ";
  desc += "Hans fase: " + mPhase.name + " (" + ELEMENTS[mEl].name + ", " + Math.round(mProgress * 100) + "% igennem). ";

  if (sameElement) {
    desc += "\n\nI er i det samme element lige nu. Det sker ikke altid \u2014 hendes 7-\u00e5rs og hans 8-\u00e5rs cyklus f\u00f8lges ikke ad. N\u00e5r I m\u00f8des i det samme element, er der en naturlig genklang.";
  } else {
    var rel = getRelation(wEl, mEl);
    desc += "\n\nI er i forskellige elementer. ";
    if (rel === "nourish") {
      desc += "Hendes " + ELEMENTS[wEl].name + " n\u00e6rer hans " + ELEMENTS[mEl].name + " \u2014 hun giver energi til ham i denne periode.";
    } else if (rel === "nourished") {
      desc += "Hans " + ELEMENTS[mEl].name + " n\u00e6rer hendes " + ELEMENTS[wEl].name + " \u2014 han st\u00f8tter hende i denne periode.";
    } else if (rel === "control") {
      desc += "Hendes " + ELEMENTS[wEl].name + " kontrollerer hans " + ELEMENTS[mEl].name + ". Det kan skabe en sp\u00e6nding der kr\u00e6ver bevidsthed.";
    } else if (rel === "controlled") {
      desc += "Hans " + ELEMENTS[mEl].name + " kontrollerer hendes " + ELEMENTS[wEl].name + ". Det kan f\u00f8les som at han bremser hendes naturlige rytme.";
    } else {
      desc += "Jeres elementer m\u00f8des p\u00e5 neutral grund.";
    }
  }

  return {
    womanPhase: wPhase,
    manPhase: mPhase,
    womanProgress: wProgress,
    manProgress: mProgress,
    sameElement: sameElement,
    description: desc
  };
}


// ================================================================
// HARMONI-SCANNING
// ================================================================

function findHarmonyDates(person1, person2, fromDate, months) {
  var results = [];
  var from = (fromDate instanceof Date) ? new Date(fromDate.getTime()) : new Date(fromDate);
  var endDate = new Date(from.getTime());
  endDate.setMonth(endDate.getMonth() + (months || 12));

  var current = new Date(from.getTime());
  var lastScore = -1;
  var lastDate = null;

  while (current < endDate) {
    var phase1 = (person1.gender === "male" || person1.gender === "mand")
      ? getManPhase(person1.birthDate, current)
      : getWomanPhase(person1.birthDate, current);
    var phase2 = (person2.gender === "male" || person2.gender === "mand")
      ? getManPhase(person2.birthDate, current)
      : getWomanPhase(person2.birthDate, current);
    var season = tvGetSeason(current);

    var el1 = getPrimaryElement(phase1.element);
    var el2 = getPrimaryElement(phase2.element);
    var rel = getRelation(el1, el2);
    var seasonRel1 = getRelation(season.element, el1);
    var seasonRel2 = getRelation(season.element, el2);

    var score = 0;
    if (rel === "same") score += 2;
    if (rel === "nourish" || rel === "nourished") score += 1;
    if (seasonRel1 === "same" || seasonRel1 === "nourished") score += 1;
    if (seasonRel2 === "same" || seasonRel2 === "nourished") score += 1;

    if (score >= 3 && score !== lastScore) {
      results.push({
        date: new Date(current.getTime()),
        score: score,
        phase1: phase1,
        phase2: phase2,
        season: season
      });
      lastScore = score;
      lastDate = new Date(current.getTime());
    }

    // Spring 7 dage ad gangen for hastighed
    current.setDate(current.getDate() + 7);
  }

  // Sorter efter score (h\u00f8jeste f\u00f8rst) og begr\u00e6ns til top 5
  results.sort(function(a, b) { return b.score - a.score; });
  return results.slice(0, 5);
}
