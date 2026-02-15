// ---- Indholdsmatrix: Tidsvinduet ----
// Alle tekster fra trin2_indholdsmatrix_komplet.md

var CM_PHASES = {
  1: {
    name: "Livets begyndelse",
    age: "0\u20137 \u00e5r",
    element: "vand",
    short: "Livets begyndelse. Vand-elementet. Alt bygges op i stilhed.",
    energy: "Indadvendt, samlende, dyb. Fundamentet for hele livet l\u00e6gges her \u2014 knogler, t\u00e6nder, tillid.",
    body: "Nyreenergi blomstrer for f\u00f8rste gang. Kroppen samler og oplagrer jing.",
    emotion: "Frygt og tillid. Barnets verden er enten tryg eller utryg \u2014 og den oplevelse sidder i kroppen resten af livet."
  },
  2: {
    name: "Udforskning",
    age: "7\u201314 \u00e5r",
    element: "vand",
    short: "Udforskning. Stadig vand, men tr\u00e6ets energi begynder at spire.",
    energy: "Overgangen fra passiv modtagelse til aktiv nysgerrighed. Kroppen \u00e6ndrer sig, verden udvider sig.",
    body: "V\u00e6kst accelererer. Knogler forl\u00e6nges, t\u00e6nder skiftes. Puberteten banker p\u00e5.",
    emotion: "Nysgerrighed og usikkerhed. Verden er b\u00e5de spændende og skr\u00e6mmende."
  },
  3: {
    name: "Forvandling",
    age: "14\u201321 \u00e5r",
    element: "trae",
    short: "Forvandling. Tr\u00e6-elementet. Alt vokser, alt vil ud, alt vil fremad.",
    energy: "Eksplosiv. Retning, handlekraft, ut\u00e5lmodighed. Kroppen er f\u00e6rdigudviklet, psyken er det ikke.",
    body: "Menstruation etableres. Lever og galdebl\u00e6re er aktive. Muskler og sener er fleksible.",
    emotion: "Vrede og frustration \u2014 tr\u00e6ets skygge. Men ogs\u00e5 mod, idealisme og en br\u00e6ndende trang til retf\u00e6rdighed."
  },
  4: {
    name: "Blomstring",
    age: "21\u201328 \u00e5r",
    element: "trae",
    short: "Blomstring. Tr\u00e6ets energi er p\u00e5 sit h\u00f8jeste. Retning, drømme, passion.",
    energy: "Tr\u00e6ets sidste og st\u00e6rkeste fase. Handlekraft, planer, fremtidsdr\u00f8mme. Ilden begynder at t\u00e6ndes.",
    body: "Kroppen er p\u00e5 sit mest fertile. Hormoner er i balance. Energien er h\u00f8j og j\u00e6vn.",
    emotion: "Ambition og ut\u00e5lmodighed. Dr\u00f8mme der f\u00f8les mulige og presserende p\u00e5 \u00e9n gang."
  },
  5: {
    name: "Ansvar",
    age: "28\u201335 \u00e5r",
    element: "ild",
    short: "Ansvar. Ild-elementet. Karriere, relationer, b\u00f8rn \u2014 alt br\u00e6nder.",
    energy: "Ildens fulde kraft. Du er synlig, aktiv, forbundet. Alt kr\u00e6ver dit engagement. Det er fantastisk \u2014 og udmattende.",
    body: "Hjertet og tyndtarmen er aktive. Kroppen kan stadig det hele, men begynder at vise de f\u00f8rste tegn p\u00e5 overbelastning.",
    emotion: "Gl\u00e6de og overv\u00e6ldelse. Ildens paradoks: at elske sit liv og samtidig f\u00f8le sig br\u00e6ndt."
  },
  6: {
    name: "Modning",
    age: "35\u201342 \u00e5r",
    element: "jord",
    short: "Modning. Jord-elementet. Fra ild til jord \u2014 fra at br\u00e6nde til at samle.",
    energy: "Overgang. Ilden d\u00e6mpes, og der melder sig nye sp\u00f8rgsm\u00e5l: Hvad er virkelig vigtigt? Hvad n\u00e6rer mig?",
    body: "Milt og mave kr\u00e6ver mere opm\u00e6rksomhed. Ford\u00f8jelsen \u00e6ndrer sig. Stofskiftet langsom\u00admes.",
    emotion: "Bekymring og omsorg \u2014 jordens grundf\u00f8lelse. At b\u00e6re andres behov og glemme sine egne."
  },
  7: {
    name: "H\u00f8st",
    age: "42\u201349 \u00e5r",
    element: "jord",
    short: "H\u00f8st. Jordens dybe fase. At samle ind og fejre hvad du har bygget.",
    energy: "Jordens modenhed. Du ved hvem du er. Kroppen begynder at forberede sig p\u00e5 n\u00e6ste store overgang.",
    body: "Perimenopause begynder ofte her. Hormoner svinger. V\u00e6gt\u00e6ndringer. Hede\u00adtogter kan starte.",
    emotion: "Taknemmelighed og savn. At se sine b\u00f8rn vokse, at m\u00e6rke tiden, at v\u00e6rdss\u00e6tte det n\u00e6re."
  },
  8: {
    name: "Frig\u00f8relse",
    age: "49\u201356 \u00e5r",
    element: "metal",
    short: "Frig\u00f8relse. Metal-elementet. At slippe det der ikke l\u00e6ngere passer.",
    energy: "Menstruation oph\u00f8rer. Ny hormonal virkelighed. Metal sk\u00e6rer igennem til det v\u00e6sentlige: hvad er virkelig vigtigt her?",
    body: "Langsommere men renere. T\u00f8rhed i hud og slimhinder. Lunger og tyktarm kr\u00e6ver opm\u00e6rksomhed. Vejrtr\u00e6kning kan blive overfladisk.",
    emotion: "Sorg og lettelse \u2014 metallets paradoks. At sorg og lettelse kan bo i samme \u00e5ndedr\u00e6t. Roller falder bort, og under dem: dig."
  },
  9: {
    name: "Visdom",
    age: "56\u201363 \u00e5r",
    element: "vand",
    short: "Visdom. Tilbage til vandet. Cirklen sluttes.",
    energy: "Vandet vender tilbage \u2014 men nu med hele livets erfaring. Dybde, ro, accept. En ny form for styrke.",
    body: "Nyrerne beder om opm\u00e6rksomhed igen. Knogler, led, h\u00f8relse. Men ogs\u00e5 en kropslig ro der ikke fandtes f\u00f8r.",
    emotion: "Visdom og accept. At kunne rumme modsigelser uden at have brug for at l\u00f8se dem."
  }
};

var CM_SEASONS = {
  vinter: {
    name: "Vinter",
    months: [12, 1, 2],
    element: "vand",
    short: "Naturen hviler. Alt tr\u00e6kker sig ind under jorden for at samle kr\u00e6fter.",
    energy: "Tyngde der vil ned og ind. Naturlig trang til hvile. M\u00f8rkere, koldere, langsommere.",
    body: "Nyrer og bl\u00e6re er aktive. Kroppen beder om mere s\u00f8vn, mere varme, mere stilhed.",
    advice: "Sov mere. Drik varmt. Spis n\u00e6rende supper. Giv dig selv lov til at tr\u00e6kke dig ind."
  },
  foraar: {
    name: "For\u00e5r",
    months: [3, 4, 5],
    element: "trae",
    short: "Naturen v\u00e5gner. Alt bryder frem efter vinterens hvile.",
    energy: "Opadg\u00e5ende, ekspansiv. Lys, vind, bev\u00e6gelse. Kroppen vil ud.",
    body: "Lever og galdebl\u00e6re er aktive. Allergi og hovedpine kan forekomme. Kroppen renser.",
    advice: "Bev\u00e6g dig mere. Spis gr\u00f8nt. Rens kroppen. Giv leveren plads til at arbejde."
  },
  sommer: {
    name: "Sommer",
    months: [6, 7],
    element: "ild",
    short: "Naturen st\u00e5r i fuldt flor. Lys, varme, forbindelse.",
    energy: "Udadvendt, varm, forbundet. Den l\u00e6ngste dag, den korteste nat.",
    body: "Hjerte og tyndtarm er aktive. Blodtryk og puls kan stige. Kroppen vil forbinde sig.",
    advice: "V\u00e6r social. Nyd lyset. Men husk at k\u00f8le ned \u2014 b\u00e5de krop og sind."
  },
  sensommer: {
    name: "Sensommer",
    months: [8, 9],
    element: "jord",
    short: "H\u00f8sten begynder. Naturen samler ind og modner.",
    energy: "Jordets fylde. Varme der langsomt vender. Tiden for at samle ind hvad sommeren bragte.",
    body: "Milt og mave er aktive. Ford\u00f8jelsen er vigtig nu. Kroppen beder om n\u00e6ring.",
    advice: "Spis modne frugter og gr\u00f8ntsager. Undg\u00e5 r\u00e5 mad om aftenen. N\u00e6r dig selv."
  },
  efteraar: {
    name: "Efter\u00e5r",
    months: [10, 11],
    element: "metal",
    short: "Naturen giver slip. Bladene falder, og det essentielle st\u00e5r tilbage.",
    energy: "Indadg\u00e5ende, klar. Metallets skarpe luft. Tid for at sortere og slippe.",
    body: "Lunger og tyktarm er aktive. Hud og slimhinder kan t\u00f8rre ud. Immunforsvaret udfordres.",
    advice: "Befugt kroppen. Tr\u00e6k vejret dybt. Giv dig selv lov til at slippe det overfl\u00f8dige."
  }
};

var CM_CROSSFIELDS = {
  "1_vinter": "Alt er vand. Stilheden er dobbelt, og fundamentet bygges i den dybeste ro. For et barn i denne alder er vinterens hvile den mest naturlige tilstand \u2014 kroppen samler og samler. Hvis du ser tilbage p\u00e5 denne tid, var det her din dybe livskraft blev oplagret.",
  "1_foraar": "Vandets fundament n\u00e6rer tr\u00e6ets f\u00f8rste spirer. For\u00e5ret bringer bev\u00e6gelse ind i barnets ellers stille verden \u2014 en naturlig trang til at r\u00e6kke ud og unders\u00f8ge. Vand giver tr\u00e6 liv, og det er pr\u00e6cis det der sker her.",
  "1_sommer": "Sommeren tr\u00e6kker udad, men barnets fase tr\u00e6kker indad. Det kan skabe en slags dobbelthed \u2014 barnet vil lege og udforske, men har samtidig brug for dyb hvile. S\u00f8rg for begge dele.",
  "1_sensommer": "Jordens omsorg st\u00f8tter vandets behov for tryghed. En god tid for n\u00e6ring, stabilitet og n\u00e6rhed. Barnet bader i det der bygger fundamentet.",
  "1_efteraar": "Metal n\u00e6rer vand. Efter\u00e5rets klarhed st\u00f8tter barnets dybe opbygning. Stilhed og enkelhed er den bedste gave.",

  "2_vinter": "Vandets rodkraft er stadig st\u00e6rk, og vinteren st\u00f8tter den. Men tr\u00e6ets energi begynder at r\u00f8re p\u00e5 sig under overfladen \u2014 som fr\u00f8 der venter under sneen.",
  "2_foraar": "For\u00e5ret forst\u00e6rker den spirende tr\u00e6energi. Barnet m\u00e6rker en ny ut\u00e5lmodighed, en trang til at komme ud og unders\u00f8ge verden. Alt vokser \u2014 b\u00e5de indeni og udenfor.",
  "2_sommer": "Sommerens energi kan l\u00f8fte barnet ud i verden med en gl\u00e6de og lethed der matcher den voksende nysgerrighed. Men husk at vandets fundament stadig har brug for ro.",
  "2_sensommer": "Jordens n\u00e6ring st\u00f8tter overgangen fra vand til tr\u00e6. En god tid for at samle nye erfaringer ind og lade dem synke ned.",
  "2_efteraar": "Metallets klarhed kan m\u00e6rkes som en rolig tid \u2014 en kontrast til tr\u00e6ets fremadstr\u00e6ben. Giv plads til eftertanke i overgangen.",

  "3_vinter": "Vand n\u00e6rer tr\u00e6 \u2014 men vinteren bremser den eksplosive ungdomsenergi. Det kan f\u00f8les frustrerende at v\u00e6re fuld af retning og samtidig blive trukket mod hvile. Kroppen har brug for begge dele: bev\u00e6gelse OG dyb s\u00f8vn.",
  "3_foraar": "Dobbelt tr\u00e6. Alt vil ud, alt vil op, alt vil fremad. En enormt kraftfuld kombination \u2014 men pas p\u00e5 at energien ikke l\u00f8ber l\u00f8bsk. Fleksibilitet er n\u00f8glen: at b\u00f8je uden at kn\u00e6kke.",
  "3_sommer": "Tr\u00e6 n\u00e6rer ild \u2014 ungdommens v\u00e6kst finder retning i sommerens passion. En tid med intensitet, forbindelse og dr\u00f8mme der f\u00f8les uovervindelige.",
  "3_sensommer": "Tr\u00e6 kontrollerer jord i elementcyklussen, og det kan m\u00e6rkes som en sp\u00e6nding: ungdommens trang til frihed m\u00f8der sensommerens kald om stabilitet. Begge energier er der \u2014 lad dem forhandle.",
  "3_efteraar": "Metal sk\u00e6rer tr\u00e6 \u2014 efter\u00e5rets trang til at slippe m\u00f8der ungdommens trang til at holde fast. Kan f\u00f8les som en indre kamp mellem at rive sig l\u00f8s og at miste noget.",

  "4_vinter": "Vintere kan f\u00f8les urolige i denne fase \u2014 ildens passion begynder at br\u00e6nde, men vinteren siger hvil. Lyt til kroppen, selv n\u00e5r hovedet vil videre.",
  "4_foraar": "For\u00e5ret forst\u00e6rker den sidste rest af tr\u00e6energi. Retning, handlekraft, ut\u00e5lmodighed. En god tid til at tr\u00e6ffe de store beslutninger.",
  "4_sommer": "Dobbelt ild. Alt br\u00e6nder. Passion, dr\u00f8mme, forbindelse \u2014 det hele f\u00f8les intenst og presserende. Brug energien, men husk at k\u00f8le ned. Ellers br\u00e6nder du op.",
  "4_sensommer": "Ildens intensitet m\u00f8der jordens beroligende varme. En god kombination \u2014 passion med fundament. Nyd fylden.",
  "4_efteraar": "Metallets klarhed kan sk\u00e6re igennem ildens kaos og hj\u00e6lpe dig med at se hvad der virkelig betyder noget. En tid for at sortere i dr\u00f8mmene.",

  "5_vinter": "Vand slukker ild. Din livsfase kr\u00e6ver aktivitet og tilstedev\u00e6relse, men vinteren tr\u00e6kker indad. Det kan f\u00f8les som at k\u00f8re med h\u00e5ndbremsen trukket. Giv dig selv lov til at hvile uden skyldf\u00f8lelse \u2014 du er ikke doven, du er i to cyklusser der tr\u00e6kker i hver sin retning.",
  "5_foraar": "Tr\u00e6 n\u00e6rer ild \u2014 for\u00e5ret giver br\u00e6ndstof til den passion og handlekraft der pr\u00e6ger din fase. Energien er h\u00f8j og retningen er klar. En fantastisk tid til at s\u00e6tte ting i gang.",
  "5_sommer": "Alt br\u00e6nder p\u00e5 sit h\u00f8jeste. Du er i livets mest intense fase, og \u00e5rstiden forst\u00e6rker det hele. Karriere, relationer, dr\u00f8mme \u2014 alt f\u00f8les muligt og presserende p\u00e5 \u00e9n gang. Men pas p\u00e5: for meget ild udbr\u00e6nder. Skab bevidst balance med k\u00f8ling og ro.",
  "5_sensommer": "Ilden begynder at finde rodf\u00e6ste i jordens stabilitet. En god kombination for at samle det du har skabt og nyde frugterne. M\u00e6thed og varme.",
  "5_efteraar": "Metallets trang til at slippe m\u00f8der ildens trang til at holde fast. Efter\u00e5ret kan f\u00f8les som en afbrydelse af alt det du er midt i. Men der er visdom i at give slip \u2014 selv midt i ildens travlhed.",

  "6_vinter": "Vinteren st\u00f8tter den indadvendthed der naturligt melder sig i overgangen fra ild til jord. Du begynder at stille de store sp\u00f8rgsm\u00e5l \u2014 og vinterens stilhed giver plads til at lytte efter svarene.",
  "6_foraar": "For\u00e5rets v\u00e6kst kan m\u00e6rkes som en modstr\u00f8m \u2014 du er begyndt at vende indad, men naturen spr\u00e6nger udad. Det er OK at m\u00e6rke begge impulser.",
  "6_sommer": "Den sidste rest af ildens energi i din fase m\u00f8der sommerens ild. En tid med b\u00e5de gl\u00e6de og en spirende bevidsthed om at noget er ved at \u00e6ndre sig.",
  "6_sensommer": "Dobbelt jord begynder at melde sig. Sensommerens fylde spejler den modning du m\u00e6rker i dig selv. En tid for at samle ind og stille sp\u00f8rgsm\u00e5let: hvad er virkelig vigtigt?",
  "6_efteraar": "Metallets klarhed hj\u00e6lper med den sortering der h\u00f8rer til overgangen. Hvad skal blive, hvad skal g\u00e5? Efter\u00e5ret er din allierede her.",

  "7_vinter": "Jordens omsorg m\u00f8der vinterens tilbagetr\u00e6kning. En tid for indre arbejde \u2014 at tr\u00e6kke dig tilbage og integrere alt det \u00e5rets brug har bragt. Kan f\u00f8les ensomt, men den stilhed rummer n\u00e6ring.",
  "7_foraar": "For\u00e5rets eksplosive v\u00e6kstenergi matcher ikke altid din egen langsommere rytme. Du kan m\u00e6rke en ut\u00e5lmodighed \u2014 \u00abburde jeg ikke have mere energi?\u00bb Nej. Du er i en anden \u00e5rstid af livet, og det er helt rigtigt.",
  "7_sommer": "Sommeren bringer stadig varme og gl\u00e6de, men du har m\u00e5ske brug for mere skygge og ro end f\u00f8r. Nyd den \u2014 bare i dit eget tempo.",
  "7_sensommer": "\u00c5rstiden og din livsfase taler samme sprog. N\u00e5r august og september kommer med deres gyldne lys, m\u00e6rker du en smuk genklang \u2014 en f\u00f8lelse af at v\u00e6re p\u00e5 rette sted. Saml ind. Fejr hvad du har.",
  "7_efteraar": "Efter\u00e5ret l\u00e6rer dig at give slip, og den lektie bliver mere central for hvert \u00e5r. Metallets klarhed kan sk\u00e6re igennem jordens tendens til at holde fast. Lad det ske.",

  "8_vinter": "Metal n\u00e6rer vand \u2014 vinterens dybde forst\u00e6rker den introspektion der pr\u00e6ger din fase. Stilheden kan nu f\u00f8les som en ven snarere end en fjende. Giv dig selv lov til at hvile dybt, m\u00e6rke dybt, v\u00e6re stille.",
  "8_foraar": "For\u00e5ret kan f\u00f8les overraskende energisk \u2014 som en p\u00e5mindelse om at der stadig er v\u00e6kst i dig. Metal sk\u00e6rer tr\u00e6, og det kan m\u00e6rkes som en sp\u00e6nding: din fase vil slippe, men for\u00e5ret vil skabe. Lad begge stemmer tale.",
  "8_sommer": "Mange kvinder nyder sommeren p\u00e5 en helt anden m\u00e5de i denne fase \u2014 frigjort fra det pres de bar i de yngre \u00e5r. Ildens varme kan lindre metallets k\u00f8lige klarhed. En god tid for forbindelse og lethed.",
  "8_sensommer": "Jordens varme er endnu ikke helt sluppet, og sensommeren minder dig om den fylde du har samlet. Overgang fra jord til metal \u2014 fra at rumme til at sortere.",
  "8_efteraar": "\u00c5rstiden og din livsfase spejler hinanden. N\u00e5r bladene skifter farve og luften bliver skarp, m\u00e6rker du en genkendelse. Metallets klarhed i \u00e5rstiden svarer til metallets klarhed i din fase. Der er en ro i det \u2014 men ogs\u00e5 en risiko for at sorgen forst\u00e6rkes. G\u00e5 ud. Tr\u00e6k vejret. Lad efter\u00e5rets luft minde dig om at det at slippe er naturligt.",

  "9_vinter": "Du vender tilbage til vandets element, og vinteren bekr\u00e6fter den bev\u00e6gelse. To lag af stilhed, dybde og indadvendthed. Det er ikke en depression \u2014 det er to cyklusser der m\u00f8des i det mest rolige punkt. Giv dig selv lov til at hvile uden skyld.",
  "9_foraar": "For\u00e5rets v\u00e6kst kan m\u00e6rkes som en blid p\u00e5mindelse om livets vedvarende kraft. Selv i denne fase er der spirekraft \u2014 m\u00e5ske ikke den samme som i ungdommen, men den er der. Nye fr\u00f8 kan stadig s\u00e5s.",
  "9_sommer": "Sommerens varme og lys kan f\u00f8les som en gave \u2014 en \u00e5rstid hvor kroppen letter og forbindelsen til andre styrkes. Nyd det. Du har fortjent sommerens varme.",
  "9_sensommer": "Jordens n\u00e6ring st\u00f8tter den dybe regeneration som vandets tilbagekomst bringer. En tid for at samle de sidste frugter og nyde det du har bygget.",
  "9_efteraar": "Den sidste rest af metallets klarhed. Efter\u00e5ret afslutter sin egen cyklus, og du afslutter din overgang fra metal til vand. Enkelhed, essens, accept."
};

var CM_PRACTICE = {
  vand: {
    exercise: {
      name: "Butterfly (Baddha Konasana)",
      description: "\u00c5bner hofterne og stimulerer nyremeridanen. Sid 3\u20135 min og lad kroppen synke."
    },
    food: {
      name: "Sort sesam og valn\u00f8dder",
      description: "N\u00e6rer nyreessensen og styrker livskraften."
    },
    mind: {
      label: "BEVIDSTHED",
      description: "Vand pr\u00e6gede din krop. Hvile og regeneration \u2014 priorit\u00e9r s\u00f8vn og stille tid."
    },
    breathing: {
      name: "Healinglyd: Chuiii",
      description: "Lad lyden vibrere dybt i l\u00e6nden. Chuiii beroer nyrerne og n\u00e6rer din grundl\u00e6ggende livsenergi."
    }
  },
  trae: {
    exercise: {
      name: "Dragen",
      description: "Dybt hoftestretch der stimulerer lever- og galdebl\u00e6remeridianen. 3\u20135 min per side."
    },
    food: {
      name: "Gr\u00f8nne bladgr\u00f8ntsager og citronsaft",
      description: "St\u00f8tter leverens naturlige rensning og giver tr\u00e6ets energi n\u00e6ring."
    },
    mind: {
      label: "BEVIDSTHED",
      description: "Tr\u00e6 pr\u00e6gede din krop. Kreativt udtryk og bev\u00e6gelse \u2014 giv vreden retning, den er skabekraft."
    },
    breathing: {
      name: "Healinglyd: Shhh",
      description: "Leverens og galdebl\u00e6rens lyd. Slipper frustration og giver plads til handling."
    }
  },
  ild: {
    exercise: {
      name: "Sphinx (Bhujangasana)",
      description: "\u00c5bner brystet og stimulerer hjertemeridianen. 3\u20135 min. M\u00e6rk den bl\u00f8de \u00e5bning over brystet."
    },
    food: {
      name: "Gr\u00f8n te, rucula og vandmelon",
      description: "Bitter smag k\u00f8ler ilden. Vandmelon og agurk befugter indefra."
    },
    mind: {
      label: "BEVIDSTHED",
      description: "Ild pr\u00e6gede din krop. Forbindelse og gl\u00e6de \u2014 men husk stille stunder. Hjertet har brug for hvile midt i al den varme."
    },
    breathing: {
      name: "K\u00f8ling: 4-2-8",
      description: "Ind p\u00e5 4 t\u00e6l, hold 2, ud p\u00e5 6\u20138 t\u00e6l \u2014 som at bl\u00e6se bl\u00f8dt p\u00e5 en varm kop te. K\u00f8ler ilden."
    }
  },
  jord: {
    exercise: {
      name: "Sphinx med vrid",
      description: "Vrid langsomt overkroppen mod den ene side. 2\u20133 min per side. \u00c5bner miltmeridianen og stimulerer ford\u00f8jelsen."
    },
    food: {
      name: "Gr\u00e6skar, guler\u00f8dder og s\u00f8de kartofler",
      description: "Naturlig s\u00f8d smag styrker milten. Varme, n\u00e6rende f\u00f8devarer der st\u00f8tter ford\u00f8jelsen."
    },
    mind: {
      label: "BEVIDSTHED",
      description: "Jord pr\u00e6gede din krop. Hvad n\u00e6rer dig? Stop op og saml ind. Sp\u00f8rg: hvad har jeg egentlig brug for?"
    },
    breathing: {
      name: "Varme i midten",
      description: "H\u00e6nder p\u00e5 maven. \u00c5nd ind og send \u00e5ndedr\u00e6ttet ned i b\u00e6kkenet \u2014 forestil dig et b\u00e5l i kroppens midte."
    }
  },
  metal: {
    exercise: {
      name: "Bananen",
      description: "L\u00e6g dig p\u00e5 ryggen og dan en bananform. 3\u20135 min per side. \u00c5bner interkostale muskler og giver lungerne mere plads."
    },
    food: {
      name: "P\u00e6rer med honning og blomk\u00e5l",
      description: "Hvide f\u00f8devarer n\u00e6rer lungerne. P\u00e6rer med honning befugter indefra. Supper og gr\u00f8d mod t\u00f8rhed."
    },
    mind: {
      label: "BEVIDSTHED",
      description: "Metal pr\u00e6gede din krop. Hvad holder du fast i? Skriv det ned. Sp\u00f8rg dig selv: er dette mit at b\u00e6re?"
    },
    breathing: {
      name: "Lungernes lyd: Ssss",
      description: "Ind p\u00e5 4 t\u00e6l, ud p\u00e5 8 med bl\u00f8d \u00absss\u00bb-lyd. Dobbelt ud\u00e5nding. Slipper sorg og giver lethed."
    }
  }
};

var CM_DOMINANT = {
  vand: "Flere lag tr\u00e6kker mod stilhed og dybde lige nu. Det er ikke svaghed \u2014 det er en synkronisering. Din krop, din fase og tiden kalder alle p\u00e5 hvile. Giv dig selv lov.",
  trae: "Flere lag tr\u00e6kker mod v\u00e6kst og handling. Du m\u00e6rker en ut\u00e5lmodighed, en kraft der vil fremad. Brug den \u2014 men husk at fleksibilitet er lige s\u00e5 vigtig som retning.",
  ild: "Flere lag forst\u00e6rker varmen og forbindelsen. Der er en gl\u00e6de og intensitet der kan f\u00f8les overv\u00e6ldende. Nyd den \u2014 men skab bevidst pauser.",
  jord: "Flere lag kalder p\u00e5 stabilitet og n\u00e6ring. Du m\u00e6rker m\u00e5ske en trang til at samle ind, til at passe p\u00e5, til at give. Husk at sp\u00f8rge: hvad n\u00e6rer MIG?",
  metal: "Flere lag kalder p\u00e5 klarhed og essens. Du m\u00e6rker m\u00e5ske en trang til at rydde ud, give slip, sortere. Det er ikke tomhed \u2014 det er plads der skabes til noget nyt.",
  blandet: "Dine cyklusser tr\u00e6kker i forskellige retninger lige nu. Det er helt normalt \u2014 det er faktisk det der sker det meste af tiden. Der er ingenting galt. Du bliver bare p\u00e5virket af flere str\u00f8mme p\u00e5 \u00e9n gang."
};

var CM_MENSTRUATION = {
  1: {
    name: "Uge 1",
    element: "vand",
    season: "Vinter",
    text: "Menstruationen tr\u00e6kker indad. Kroppen beder om hvile. Det er naturligt at have brug for at v\u00e6re alene, sove mere, sige nej til det der kr\u00e6ver for meget. Lyt til det."
  },
  2: {
    name: "Uge 2",
    element: "trae",
    season: "For\u00e5r",
    text: "Energien vender tilbage, og du m\u00e6rker dig klarere i hovedet, mere handlekraftig. En god tid til at tage de ting du har udskudt."
  },
  3: {
    name: "Uge 3",
    element: "ild",
    season: "Sommer",
    text: "Kroppen er p\u00e5 sit h\u00f8jeste. Du m\u00e6rker dig mere udadvendt, social, energisk. Brug det \u2014 men husk at samle ind f\u00f8r n\u00e6ste uge."
  },
  4: {
    name: "Uge 4",
    element: "metal",
    season: "Efter\u00e5r",
    text: "Kroppen forbereder sig p\u00e5 at give slip. Du kan m\u00e6rke en s\u00e5rbarhed, en tyndhudethed, hvor alt f\u00f8les lidt for meget. Det er metallets energi \u2014 respekt\u00e9r den."
  }
};

var CM_RELATIONS = {
  "ild_ild": "Dobbelt varme. Gl\u00e6de, forbindelse, intensitet \u2014 men ogs\u00e5 risiko for overophedning. Skab rum for stilhed.",
  "ild_jord": "Ild n\u00e6rer jord. Din varme giver hende n\u00e6ring. Hendes stabilitet holder dig. En varm og tryg forbindelse.",
  "ild_metal": "Ild smelter metal. Din intensitet kan overv\u00e6lde hendes behov for ro. Hendes klarhed kan f\u00f8les kold for dig.",
  "ild_trae": "Tr\u00e6 n\u00e6rer ild. Din v\u00e6kst giver br\u00e6ndstof til hendes passion. En energisk og dynamisk forbindelse.",
  "ild_vand": "Vand slukker ild. Din ro kan d\u00e6mpe hendes gl\u00e6de. Hendes intensitet kan udt\u00f8mme dig. V\u00e6r bevidst om begge retninger.",
  "jord_jord": "Dyb omsorg. I n\u00e6rer hinanden. Risiko: at I giver s\u00e5 meget til hinanden at ingen husker sig selv.",
  "jord_metal": "Jord n\u00e6rer metal. Din stabilitet giver hende plads til at finde klarhed. En rolig og moden forbindelse.",
  "jord_trae": "Tr\u00e6 tager n\u00e6ring fra jord. Din fremadstr\u00e6ben kan t\u00e6re p\u00e5 hendes ressourcer. Hendes stabilitet kan f\u00f8les begr\u00e6nsende for dig.",
  "jord_vand": "Jord d\u00e6mmer vand op. Hendes omsorg kan f\u00f8les som kontrol for dig. Din dybde kan f\u00f8les som utilg\u00e6ngelighed for hende.",
  "metal_metal": "Dobbelt klarhed. I forst\u00e5r hinanden i sorg og essens. Risiko: at stilheden bliver for stor. Tal om det.",
  "metal_trae": "Metal sk\u00e6rer tr\u00e6. Hendes klarhed kan sk\u00e6re i din v\u00e6kst. Din energi kan f\u00f8les overv\u00e6ldende for hende.",
  "metal_vand": "Metal n\u00e6rer vand. Hendes klarhed st\u00f8tter din dybde. En harmonisk forbindelse \u2014 I forst\u00e5r hinanden intuitivt.",
  "trae_trae": "To kr\u00e6fter der begge vil fremad. Enten en fantastisk alliance \u2014 eller en kollision. Fleksibilitet er n\u00f8glen.",
  "trae_vand": "Vand n\u00e6rer tr\u00e6. Du giver fundament, hun vokser. En naturlig balance \u2014 men husk at vand ogs\u00e5 har brug for at blive fyldt op.",
  "vand_vand": "Dyb forst\u00e5else. I m\u00f8des i stilheden. Risiko: at I tr\u00e6kker jer begge ind og mister forbindelsen."
};

// ---- Beregningsfunktioner ----

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

function cmGetDominantElement(phase, season, menstruationWeek) {
  var phaseElement = CM_PHASES[phase].element;
  var seasonElement = CM_SEASONS[season].element;
  var elements = [phaseElement, seasonElement];
  if (menstruationWeek && CM_MENSTRUATION[menstruationWeek]) {
    elements.push(CM_MENSTRUATION[menstruationWeek].element);
  }
  var counts = {};
  for (var i = 0; i < elements.length; i++) {
    counts[elements[i]] = (counts[elements[i]] || 0) + 1;
  }
  var maxCount = 0;
  var maxEl = null;
  for (var el in counts) {
    if (counts[el] > maxCount) { maxCount = counts[el]; maxEl = el; }
  }
  if (maxCount >= 2) return maxEl;
  return "blandet";
}

function cmGetCrossfieldKey(phase, season) {
  return phase + "_" + season;
}

function cmGetRelationKey(element1, element2) {
  var sorted = [element1, element2].sort();
  return sorted[0] + "_" + sorted[1];
}
