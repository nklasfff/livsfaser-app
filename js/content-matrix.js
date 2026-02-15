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
// MENNESKELIGT SPROG FOR ELEMENTRELATIONER
// ================================================================

// Ko-cyklus (kontrollerende) — hvad det FØLES som
var KO_HUMAN = {
  vand_ild: {
    past: "Din trang til hvile og stilhed dæmpede glæden og forbindelsen. Du mærkede måske at du trak dig fra samvær — ikke fordi du ikke elskede det, men fordi du simpelthen ikke havde energien.",
    future: "Din trang til hvile og stilhed kan dæmpe glæden og forbindelsen. Du vil måske mærke at du trækker dig fra samvær — ikke fordi du ikke vil, men fordi du har brug for at være i dig selv."
  },
  ild_metal: {
    past: "Din passion og intensitet overtrumfede behovet for klarhed og essens. Det var svært at finde ro — der var så meget at brænde for at du glemte at mærke hvad der virkelig betød noget.",
    future: "Din passion og intensitet kan overtrumfe behovet for klarhed og essens. Det kan blive svært at finde ro — husk at stoppe op og mærke hvad der virkelig betyder noget."
  },
  metal_trae: {
    past: "Din trang til at skære fra og forenkle bremsede væksten og den nye retning. Det der ville fremad i dig, blev holdt tilbage af det der ville rense ud.",
    future: "Din trang til at skære fra og forenkle kan bremse væksten og den nye retning. Det der vil fremad, kan blive holdt tilbage af det der vil rense ud."
  },
  trae_jord: {
    past: "Din fremadrettethed tærede på stabiliteten og næringen. Du gav måske mere end du havde — handlekraften kørte hurtigere end kroppen kunne følge med.",
    future: "Din fremadrettethed kan tære på stabiliteten og næringen. Pas på at handlekraften ikke kører hurtigere end kroppen kan følge med."
  },
  jord_vand: {
    past: "Din omsorg og bekymring blokerede den dybe hvile og tillid. Du havde svært ved at slippe kontrollen — fordi du følte dig ansvarlig for alting.",
    future: "Din omsorg og bekymring kan blokere den dybe hvile og tillid. Det kan blive svært at slippe kontrollen — fordi du føler dig ansvarlig for alting."
  }
};

// Sheng-cyklus (nærende) — hvad det FØLES som
var SHENG_HUMAN = {
  vand_trae: {
    past: "Din hvile og dit fundament gav kraft til vækst og nye retninger. Den stilhed du samlede, blev til brændstof for det der ville fremad.",
    future: "Din hvile og dit fundament giver kraft til vækst og nye retninger. Den stilhed du samler, bliver til brændstof for det der vil fremad."
  },
  trae_ild: {
    past: "Din handlekraft og retning gav brændstof til passion og forbindelse. Det der drev dig fremad, tændte noget varmt i dig og omkring dig.",
    future: "Din handlekraft og retning giver brændstof til passion og forbindelse. Det der driver dig fremad, tænder noget varmt i dig og omkring dig."
  },
  ild_jord: {
    past: "Din varme og glæde gav næring til stabilitet og omsorg. Den forbindelse du følte, skabte en grund at stå på.",
    future: "Din varme og glæde giver næring til stabilitet og omsorg. Den forbindelse du føler, skaber en grund at stå på."
  },
  jord_metal: {
    past: "Din stabilitet og omsorg gav plads til klarhed og essens. Fordi du stod fast, kunne du se hvad der virkelig betød noget.",
    future: "Din stabilitet og omsorg giver plads til klarhed og essens. Fordi du står fast, kan du se hvad der virkelig betyder noget."
  },
  metal_vand: {
    past: "Din evne til at give slip gav rum til dyb hvile og fornyet tillid. Det du slap, skabte plads til noget dybere.",
    future: "Din evne til at give slip giver rum til dyb hvile og fornyet tillid. Det du slipper, skaber plads til noget dybere."
  }
};

// Par-ko (kontrol mellem to mennesker)
var KO_PAIR = {
  vand_ild: {
    desc: "trang til hvile og stilhed dæmpede den andens glæde og forbindelse",
    past: "Den ene trak sig ind, den anden ville ud. Det var ikke afvisning — det var to naturlige rytmer der ikke passede sammen lige der.",
    future: "Den ene trækker sig ind, den anden vil ud. Det er ikke afvisning — det er to naturlige rytmer der ikke passer sammen lige nu."
  },
  ild_metal: {
    desc: "passion og intensitet overtrumfede den andens behov for klarhed",
    past: "Den ene brændte, den anden ville have ro. Intensiteten kan have følt overvældende.",
    future: "Den ene brænder, den anden vil have ro. Intensiteten kan føles overvældende."
  },
  metal_trae: {
    desc: "trang til at forenkle bremsede den andens vækst",
    past: "Den ene ville skære til, den anden ville vokse. Det skabte en stille kamp om retning.",
    future: "Den ene vil skære til, den anden vil vokse. Det kan skabe en stille kamp om retning."
  },
  trae_jord: {
    desc: "fremadrettethed tærede på den andens stabilitet",
    past: "Den ene pressede fremad, den anden havde brug for at stå stille. Tempoet passede ikke.",
    future: "Den ene presser fremad, den anden har brug for at stå stille. Tempoet passer ikke."
  },
  jord_vand: {
    desc: "omsorg og bekymring blokerede den andens dybe hvile",
    past: "Den ene ville tage sig af, den anden ville have lov til bare at være. Omsorgen blev for tung.",
    future: "Den ene vil tage sig af, den anden vil have lov til bare at være. Omsorgen kan blive for tung."
  }
};

// Hjælpefunktion til at finde ko/sheng-nøglen
function getKoKey(el1, el2) {
  var key = el1 + "_" + el2;
  if (KO_HUMAN[key]) return key;
  return null;
}
function getShengKey(el1, el2) {
  var key = el1 + "_" + el2;
  if (SHENG_HUMAN[key]) return key;
  return null;
}
function getKoPairKey(el1, el2) {
  var key = el1 + "_" + el2;
  if (KO_PAIR[key]) return key;
  return null;
}


// ================================================================
// INDSIGT-GENERATORER (menneskeligt sprog)
// ================================================================

function generatePersonalInsight(person, targetDate, isPast) {
  var td = (targetDate instanceof Date) ? targetDate : new Date(targetDate);
  var phase = (person.gender === "male" || person.gender === "mand")
    ? getManPhase(person.birthDate, td)
    : getWomanPhase(person.birthDate, td);
  var season = tvGetSeason(td);
  // Alder beregnes fra f\u00f8dselsdato (gemt i localStorage fra onboarding)
  var age = yearsDiff(td, person.birthDate);

  var phaseElement = getPrimaryElement(phase.element);
  var seasonElement = season.element;
  var relation = getRelation(phaseElement, seasonElement);

  var pe = ELEMENTS[phaseElement];
  var se = ELEMENTS[seasonElement];

  var insight = "";

  // Tidsangivelse
  if (isPast) {
    insight += "Du var " + age + " og i " + phase.name + " \u2014 " + pe.name.toLowerCase() + "ets \u00e5r. ";
    insight += "Det var " + season.name.toLowerCase() + ", og " + se.name.toLowerCase() + "ets energi pr\u00e6gede verden omkring dig.";
  } else {
    insight += "Du vil v\u00e6re " + age + " og i " + phase.name + " \u2014 " + pe.name.toLowerCase() + "ets \u00e5r. ";
    insight += "Det er " + season.name.toLowerCase() + ", og " + se.name.toLowerCase() + "ets energi pr\u00e6ger verden omkring dig.";
  }

  // Elementrelation — menneskeligt sprog
  insight += "\n\n";

  switch (relation) {
    case "same":
      if (isPast) {
        insight += "Din fase og årstiden talte samme sprog. Begge trak " + pe.direction + ". ";
        insight += "Det forstærkede alt — " + pe.emotion_balanced + ", men også risikoen for " + pe.emotion_challenged + ". ";
        insight += "Hvis du husker den periode, mærkede du sandsynligvis det dobbelte af " + pe.name.toLowerCase() + "ets kvalitet — " + pe.quality + ". Det var ikke tilfældigt.";
      } else {
        insight += "Din fase og årstiden taler samme sprog. Begge trækker " + pe.direction + ". ";
        insight += "Det forstærker alt — " + pe.emotion_balanced + ", men også risikoen for " + pe.emotion_challenged + ". ";
        insight += "Du kan forvente at mærke " + pe.name.toLowerCase() + "ets kvalitet ekstra stærkt — " + pe.quality + ". Brug det, men vær opmærksom på at balancere.";
      }
      break;

    case "nourish":
      var shengKey = getShengKey(phaseElement, seasonElement);
      if (shengKey && SHENG_HUMAN[shengKey]) {
        insight += isPast ? SHENG_HUMAN[shengKey].past : SHENG_HUMAN[shengKey].future;
      } else {
        if (isPast) {
          insight += "Din livsfases energi gav brændstof til årstidens kvalitet. Du gav sandsynligvis mere af dig selv end normalt.";
        } else {
          insight += "Din livsfases energi giver brændstof til årstidens kvalitet. Det er en god tid til at bruge den strøm — men husk at fylde op.";
        }
      }
      break;

    case "nourished":
      var shengKeyR = getShengKey(seasonElement, phaseElement);
      if (shengKeyR && SHENG_HUMAN[shengKeyR]) {
        insight += isPast ? SHENG_HUMAN[shengKeyR].past : SHENG_HUMAN[shengKeyR].future;
      } else {
        if (isPast) {
          insight += "Årstiden støttede din livsfase. Det var sandsynligvis en periode hvor du følte dig båret, måske uden at vide hvorfor.";
        } else {
          insight += "Årstiden støtter din livsfase. Du kan forvente at føle dig båret — årstiden arbejder for dig.";
        }
      }
      break;

    case "control":
      var koKey = getKoKey(phaseElement, seasonElement);
      if (koKey && KO_HUMAN[koKey]) {
        insight += isPast ? KO_HUMAN[koKey].past : KO_HUMAN[koKey].future;
      } else {
        if (isPast) {
          insight += "Din fase overstyrede årstiden. Det er ikke forkert, men det kan have kostet energi.";
        } else {
          insight += "Din fase kan overstyre årstiden. Giv bevidst plads til det årstiden prøver at give dig.";
        }
      }
      break;

    case "controlled":
      var koKeyR = getKoKey(seasonElement, phaseElement);
      if (koKeyR && KO_HUMAN[koKeyR]) {
        insight += isPast ? KO_HUMAN[koKeyR].past : KO_HUMAN[koKeyR].future;
      } else {
        if (isPast) {
          insight += "Årstiden bremsede din livsfases naturlige bevægelse. Det kan have følt sig som modstand — din fase ville " + pe.direction + ", men årstiden trak i en anden retning. Der var ingenting galt. Du blev trukket i to retninger af to naturlige kræfter.";
        } else {
          insight += "Årstiden bremser din livsfases naturlige bevægelse. Du kan opleve at du bremses. Det er ikke svaghed — det er to naturlige kræfter der trækker i forskellige retninger. Lyt til begge.";
        }
      }
      break;

    default:
      if (isPast) {
        insight += "Din fase trak " + pe.direction + ", mens årstiden inviterede til " + se.quality + ". De to energier udfordrede ikke hinanden direkte, men de talte heller ikke samme sprog.";
      } else {
        insight += "Din fase trækker " + pe.direction + ", mens årstiden inviterer til " + se.quality + ". De to energier udfordrer ikke hinanden direkte, men de taler heller ikke samme sprog.";
      }
      break;
  }

  // Overgangsnotat — nuanceret (punkt 8)
  var secondary = getSecondaryElement(phase.element);
  if (secondary) {
    var secEl = ELEMENTS[secondary];
    insight += "\n\n";
    if (isPast) {
      insight += "Du var i en overgang mellem to elementer. " + pe.name + "s kvaliteter — " + pe.quality + " — var stadig stærke i dig. Men " + secEl.name.toLowerCase() + "ets kvaliteter begyndte at melde sig: " + secEl.quality + ". ";
      insight += "Du mærkede sandsynligvis begge. Nogle dage var det " + pe.name.toLowerCase() + " der fyldte mest, andre dage var det " + secEl.name.toLowerCase() + ". Det var ikke forvirring — det var to kræfter der langsomt skiftede plads i dig.";
    } else {
      insight += "Du er i en overgang mellem to elementer. " + pe.name + "s kvaliteter — " + pe.quality + " — er stadig stærke i dig. Men " + secEl.name.toLowerCase() + "ets kvaliteter begynder at melde sig: " + secEl.quality + ". ";
      insight += "Du vil sandsynligvis mærke begge. Nogle dage er det " + pe.name.toLowerCase() + " der fylder mest, andre dage er det " + secEl.name.toLowerCase() + ". Det er ikke forvirring — det er to kræfter der langsomt skifter plads i dig.";
    }
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
  // Safety: sikr at aldre er rimelige tal
  var p2name = person2.name || "den anden";

  var insight = "";

  // Hvem er hvem — korrekt tid
  if (isPast) {
    insight += "Du var " + age1 + " og i " + phase1.name + ". " + p2name + " var " + age2 + " og i " + phase2.name + ".\n\n";
  } else {
    insight += "Du vil være " + age1 + " og i " + phase1.name + ". " + p2name + " vil være " + age2 + " og i " + phase2.name + ".\n\n";
  }

  // Dynamik — menneskeligt sprog
  switch (relation) {
    case "same":
      if (isPast) {
        insight += "I var i det samme element — " + e1.name.toLowerCase() + ". Det betød at I delte de samme grundlæggende behov: " + e1.quality + ". ";
        insight += "I forstod hinanden intuitivt, fordi I trak i samme retning. ";
        insight += "Men det betød også at I manglede det samme. Når begge havde brug for " + e1.need + ", var der ingen der fyldte op.";
      } else {
        insight += "I er i det samme element — " + e1.name.toLowerCase() + ". Det betyder at I deler de samme grundlæggende behov: " + e1.quality + ". ";
        insight += "I forstår hinanden intuitivt, fordi I trækker i samme retning. ";
        insight += "Men det betyder også at I mangler det samme. Når begge har brug for " + e1.need + ", er der ingen der fylder op.";
      }
      break;

    case "nourish":
      var shKey = getShengKey(el1, el2);
      if (isPast) {
        insight += "Dit element nærede " + p2name + "s. " + e1.name + " gav " + e2.name.toLowerCase() + " kraft. ";
        if (shKey && SHENG_HUMAN[shKey]) {
          insight += SHENG_HUMAN[shKey].past + " ";
        }
        insight += "Det var en naturlig strøm — men hvis du gav for meget, tømtes du selv. Mærkede du det?";
      } else {
        insight += "Dit element nærer " + p2name + "s. " + e1.name + " giver " + e2.name.toLowerCase() + " kraft. ";
        if (shKey && SHENG_HUMAN[shKey]) {
          insight += SHENG_HUMAN[shKey].future + " ";
        }
        insight += "Det er en naturlig strøm — men vær opmærksom på at fylde dig selv op, mens du nærer " + p2name + ".";
      }
      break;

    case "nourished":
      var shKeyR = getShengKey(el2, el1);
      if (isPast) {
        insight += p2name + "s element nærede dit. " + e2.name + " gav " + e1.name.toLowerCase() + " kraft. ";
        if (shKeyR && SHENG_HUMAN[shKeyR]) {
          insight += SHENG_HUMAN[shKeyR].past + " ";
        }
        insight += "Det var sandsynligvis en periode hvor " + p2name + " var en kilde til støtte — måske uden at nogen af jer var bevidste om det.";
      } else {
        insight += p2name + "s element nærer dit. " + e2.name + " giver " + e1.name.toLowerCase() + " kraft. ";
        if (shKeyR && SHENG_HUMAN[shKeyR]) {
          insight += SHENG_HUMAN[shKeyR].future + " ";
        }
        insight += p2name + " kan være en vigtig støtte for dig i denne periode.";
      }
      break;

    case "control":
      var koKey = getKoPairKey(el1, el2);
      if (isPast) {
        insight += "Dit element kontrollerede " + p2name + "s. ";
        if (koKey && KO_PAIR[koKey]) {
          insight += KO_PAIR[koKey].past + " ";
        } else {
          insight += "Din tilstedeværelse dæmpede det " + p2name + " havde brug for. ";
        }
        insight += "Det var ikke nogens skyld. Hvis der var friktion mellem jer, sad den sandsynligvis her — ikke i viljen, men i energien.";
      } else {
        insight += "Dit element kontrollerer " + p2name + "s. ";
        if (koKey && KO_PAIR[koKey]) {
          insight += KO_PAIR[koKey].future + " ";
        } else {
          insight += "Din tilstedeværelse kan dæmpe det " + p2name + " har brug for. ";
        }
        insight += "Det er ikke nogens skyld. Vær bevidst om at give " + p2name + " plads, også når det strider mod din egen rytme.";
      }
      break;

    case "controlled":
      var koKeyR = getKoPairKey(el2, el1);
      if (isPast) {
        insight += p2name + "s element kontrollerede dit. ";
        if (koKeyR && KO_PAIR[koKeyR]) {
          insight += KO_PAIR[koKeyR].past + " ";
        } else {
          insight += "Det kan have følt sig som at " + p2name + " holdt dig tilbage. ";
        }
        insight += "Den frustration du måske følte, var to naturlige kræfter der mødtes. Ingen af jer var forkerte.";
      } else {
        insight += p2name + "s element kontrollerer dit. ";
        if (koKeyR && KO_PAIR[koKeyR]) {
          insight += KO_PAIR[koKeyR].future + " ";
        } else {
          insight += "Det kan føles som at " + p2name + " holder dig tilbage. ";
        }
        insight += "Det kan hjælpe at vide, at spændingen er energetisk, ikke personlig.";
      }
      break;

    default:
      if (isPast) {
        insight += e1.name + " og " + e2.name.toLowerCase() + " var hverken i direkte næring eller kontrol. Jeres energier mødtes på neutral grund — der var plads, men også afstand.";
      } else {
        insight += e1.name + " og " + e2.name.toLowerCase() + " er hverken i direkte næring eller kontrol. Jeres energier mødes på neutral grund — der er plads, men også afstand.";
      }
      break;
  }

  // Årstiden som tredje faktor — også med korrekt tid
  var seasonRelToP1 = getRelation(season.element, el1);
  var seasonRelToP2 = getRelation(season.element, el2);

  insight += "\n\n";
  if (isPast) {
    insight += "Årstiden (" + season.name + ") ";
    if (seasonRelToP1 === "same" || seasonRelToP1 === "nourished") {
      insight += "støttede dig ";
    } else if (seasonRelToP1 === "controlled") {
      insight += "pressede dig ";
    } else {
      insight += "påvirkede dig ";
    }
    if (seasonRelToP2 === "same" || seasonRelToP2 === "nourished") {
      insight += "og støttede " + p2name + ".";
    } else if (seasonRelToP2 === "controlled") {
      insight += "og pressede " + p2name + ".";
    } else {
      insight += "og påvirkede " + p2name + " anderledes.";
    }
  } else {
    insight += "Årstiden (" + season.name + ") ";
    if (seasonRelToP1 === "same" || seasonRelToP1 === "nourished") {
      insight += "støtter dig ";
    } else if (seasonRelToP1 === "controlled") {
      insight += "presser dig ";
    } else {
      insight += "påvirker dig ";
    }
    if (seasonRelToP2 === "same" || seasonRelToP2 === "nourished") {
      insight += "og støtter " + p2name + ".";
    } else if (seasonRelToP2 === "controlled") {
      insight += "og presser " + p2name + ".";
    } else {
      insight += "og påvirker " + p2name + " anderledes.";
    }
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

  // Hvem er i hvilken fase — med korrekt tid
  for (var j = 0; j < people.length; j++) {
    var pp = people[j];
    var el = ELEMENTS[pp.element];
    if (isPast) {
      insight += pp.name + " var " + pp.age + " år, " + pp.phase.name + " (" + el.name.toLowerCase() + ")\n";
    } else {
      insight += pp.name + " vil være " + pp.age + " år, " + pp.phase.name + " (" + el.name.toLowerCase() + ")\n";
    }
  }
  insight += "Årstid: " + season.name + " (" + ELEMENTS[season.element].name.toLowerCase() + ")\n\n";

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
    insight += isPast ? "Det der skabte spænding:\n" : "Hvor det kan presse:\n";
    for (var ti = 0; ti < tensions.length; ti++) {
      var t = tensions[ti];
      var koKey;
      if (t.rel === "control") {
        koKey = getKoPairKey(t.el1, t.el2);
        if (koKey && KO_PAIR[koKey]) {
          insight += t.p1.name + " og " + t.p2.name + ": " + (isPast ? KO_PAIR[koKey].past : KO_PAIR[koKey].future) + "\n";
        } else {
          insight += t.p1.name + "s " + ELEMENTS[t.el1].name.toLowerCase() + " " + (isPast ? "bremsede" : "bremser") + " " + t.p2.name + "s " + ELEMENTS[t.el2].name.toLowerCase() + ".\n";
        }
      } else {
        koKey = getKoPairKey(t.el2, t.el1);
        if (koKey && KO_PAIR[koKey]) {
          insight += t.p2.name + " og " + t.p1.name + ": " + (isPast ? KO_PAIR[koKey].past : KO_PAIR[koKey].future) + "\n";
        } else {
          insight += t.p2.name + "s " + ELEMENTS[t.el2].name.toLowerCase() + " " + (isPast ? "bremsede" : "bremser") + " " + t.p1.name + "s " + ELEMENTS[t.el1].name.toLowerCase() + ".\n";
        }
      }
    }
  }

  if (harmonies.length > 0) {
    insight += isPast ? "\nDet der bar jer:\n" : "\nHvor I kan støtte hinanden:\n";
    for (var hi = 0; hi < harmonies.length; hi++) {
      var h = harmonies[hi];
      if (h.rel === "same") {
        if (isPast) {
          insight += h.p1.name + " og " + h.p2.name + " delte " + ELEMENTS[h.el1].name.toLowerCase() + ". I forstod hinanden her.\n";
        } else {
          insight += h.p1.name + " og " + h.p2.name + " deler " + ELEMENTS[h.el1].name.toLowerCase() + ". I forstår hinanden her.\n";
        }
      } else if (h.rel === "nourish") {
        if (isPast) {
          insight += h.p1.name + "s " + ELEMENTS[h.el1].name.toLowerCase() + " nærede " + h.p2.name + "s " + ELEMENTS[h.el2].name.toLowerCase() + ". Der var en naturlig strøm.\n";
        } else {
          insight += h.p1.name + "s " + ELEMENTS[h.el1].name.toLowerCase() + " nærer " + h.p2.name + "s " + ELEMENTS[h.el2].name.toLowerCase() + ". Der er en naturlig strøm.\n";
        }
      } else {
        if (isPast) {
          insight += h.p2.name + "s " + ELEMENTS[h.el2].name.toLowerCase() + " nærede " + h.p1.name + "s " + ELEMENTS[h.el1].name.toLowerCase() + ". " + h.p2.name + " støttede dig her.\n";
        } else {
          insight += h.p2.name + "s " + ELEMENTS[h.el2].name.toLowerCase() + " nærer " + h.p1.name + "s " + ELEMENTS[h.el1].name.toLowerCase() + ". " + h.p2.name + " støtter dig her.\n";
        }
      }
    }
  }

  return insight;
}


// ================================================================
// PAR-FORSKYDNING (7-års vs 8-års cyklus)
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
  desc += "Hendes fase: " + wPhase.name + " (" + ELEMENTS[wEl].name.toLowerCase() + ", " + Math.round(wProgress * 100) + "% igennem). ";
  desc += "Hans fase: " + mPhase.name + " (" + ELEMENTS[mEl].name.toLowerCase() + ", " + Math.round(mProgress * 100) + "% igennem).";

  if (sameElement) {
    desc += "\n\nI er i det samme element lige nu. Det sker ikke altid — hendes 7-års og hans 8-års cyklus følges ikke ad. Når I mødes i det samme element, er der en naturlig genklang. I trækker i samme retning og forstår hinandens behov intuitivt.";
  } else {
    var rel = getRelation(wEl, mEl);
    desc += "\n\nI er i forskellige elementer. ";
    var koKey, shKey;
    if (rel === "nourish") {
      shKey = getShengKey(wEl, mEl);
      if (shKey && SHENG_HUMAN[shKey]) {
        desc += SHENG_HUMAN[shKey].future + " Hun giver energi til ham i denne periode.";
      } else {
        desc += "Hendes " + ELEMENTS[wEl].name.toLowerCase() + " nærer hans " + ELEMENTS[mEl].name.toLowerCase() + " — hun giver energi til ham i denne periode.";
      }
    } else if (rel === "nourished") {
      shKey = getShengKey(mEl, wEl);
      if (shKey && SHENG_HUMAN[shKey]) {
        desc += SHENG_HUMAN[shKey].future + " Han støtter hende i denne periode.";
      } else {
        desc += "Hans " + ELEMENTS[mEl].name.toLowerCase() + " nærer hendes " + ELEMENTS[wEl].name.toLowerCase() + " — han støtter hende i denne periode.";
      }
    } else if (rel === "control") {
      koKey = getKoPairKey(wEl, mEl);
      if (koKey && KO_PAIR[koKey]) {
        desc += KO_PAIR[koKey].future + " Det kræver bevidsthed.";
      } else {
        desc += "Hendes " + ELEMENTS[wEl].name.toLowerCase() + " kontrollerer hans " + ELEMENTS[mEl].name.toLowerCase() + ". Det kan skabe en spænding der kræver bevidsthed.";
      }
    } else if (rel === "controlled") {
      koKey = getKoPairKey(mEl, wEl);
      if (koKey && KO_PAIR[koKey]) {
        desc += KO_PAIR[koKey].future + " Det kan føles som at han bremser hendes naturlige rytme.";
      } else {
        desc += "Hans " + ELEMENTS[mEl].name.toLowerCase() + " kontrollerer hendes " + ELEMENTS[wEl].name.toLowerCase() + ". Det kan føles som at han bremser hendes naturlige rytme.";
      }
    } else {
      desc += "Jeres elementer mødes på neutral grund.";
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
