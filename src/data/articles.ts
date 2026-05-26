export interface Article {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  publishDate: string;
  sections: { question: string; answer: string; content: string }[];
  relatedArticles: string[];
  relatedCities: string[];
}

export const articleCategories = [
  "Alle",
  "Regeln & Tipps",
  "Anlagen-Typen",
  "Golf",
  "Familie",
  "Events",
] as const;

export const articles: Article[] = [
  {
    slug: "was-ist-minigolf",
    title: "Was ist Minigolf? Definition, Geschichte und Regeln im Überblick",
    h1: "Was ist Minigolf? Definition, Geschichte und Regeln im Überblick",
    metaDescription: "Was ist Minigolf? Erfahren Sie alles über Definition, Geschichte, Varianten und die wichtigsten Regeln des beliebten Freizeitsports.",
    category: "Regeln & Tipps",
    excerpt: "Minigolf ist eine der beliebtesten Freizeitaktivitäten in Deutschland. Erfahren Sie alles über Ursprung, Varianten und Grundregeln.",
    publishDate: "2025-03-15",
    sections: [
      { question: "Was genau ist Minigolf?", answer: "Minigolf ist eine Präzisionssportart, bei der Spieler einen Ball mit einem Schläger über genormte Bahnen in ein Loch spielen. Das Ziel ist, möglichst wenige Schläge zu benötigen.", content: "Minigolf, auch Bahnengolf genannt, gehört zu den beliebtesten Freizeitsportarten in Deutschland und Europa. Anders als beim großen Golf wird auf vordefinierten, kurzen Bahnen mit Hindernissen gespielt. Eine Runde umfasst typischerweise 18 Bahnen. Der Sport ist für alle Altersgruppen geeignet und erfordert keine Vorkenntnisse. In Deutschland gibt es über 1.500 Minigolfanlagen – von klassischen Betonbahnen bis hin zu modernen Adventure-Golf-Plätzen." },
      { question: "Woher kommt Minigolf und wer hat es erfunden?", answer: "Minigolf wurde 1954 vom Schweizer Gartenarchitekten Paul Bongni standardisiert. Die ersten genormten Bahnen entstanden in Ascona, Schweiz. Seitdem hat sich der Sport weltweit verbreitet.", content: "Die Geschichte des Minigolfs reicht bis ins frühe 20. Jahrhundert zurück. Bereits 1916 gab es in den USA erste 'Miniatur-Golf'-Kurse. In Europa entwickelte sich der Sport in den 1950er Jahren, als Paul Bongni in der Schweiz die ersten genormten Betonbahnen entwarf. Deutschland wurde schnell zum Minigolf-Land Nummer eins: Der Deutsche Minigolfsport Verband (DMV) wurde 1966 gegründet und organisiert bis heute Wettkämpfe auf nationaler und internationaler Ebene." },
      { question: "Welche Minigolf-Varianten gibt es?", answer: "Es gibt vier Hauptvarianten: Minigolf (Beton), Miniaturgolf (Eternit), Sterngolf und Filzgolf. Zusätzlich existieren moderne Varianten wie Adventure Golf, Schwarzlicht-Minigolf und Pit-Pat.", content: "Die klassischen Varianten unterscheiden sich hauptsächlich durch das Bahnmaterial und die Bahnlänge. Minigolf wird auf Betonbahnen gespielt, Miniaturgolf auf Eternitplatten. Modernere Varianten wie Adventure Golf bieten naturnahe Bahnen mit Kunstrasen und echten Geländehindernissen. Schwarzlicht-Minigolf findet in abgedunkelten Hallen mit fluoreszierenden Farben statt – ein besonderes Erlebnis. In der Region Heidelberg/Mannheim finden sich alle diese Varianten." },
      { question: "Wie lauten die wichtigsten Minigolf-Regeln?", answer: "Jeder Spieler hat maximal 6 (im Wettkampf 7) Versuche pro Bahn. Der Ball muss vom Abschlagpunkt gespielt werden. Wer nach dem Maximum den Ball nicht eingelocht hat, bekommt einen Strafschlag.", content: "Die Grundregeln sind einfach: Gespielt wird reihum, jeder Spieler schlägt seinen Ball vom markierten Abschlagpunkt. Der Ball muss auf der Bahn bleiben – fällt er herunter, wird vom letzten Punkt oder vom Abschlag neu gespielt. Es gibt keine Mindest- oder Höchstspielerzahl. Im Freizeitbereich wird meist nach vereinfachten Regeln gespielt. Für offizielle Turniere gelten die Regeln des Deutschen Minigolfsport Verbands (DMV)." },
    ],
    relatedArticles: ["minigolf-regeln", "minigolf-vs-golf", "minigolf-bahnen-arten"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "minigolf-regeln",
    title: "Minigolf Regeln: Die offiziellen Bahnengolf-Regeln erklärt",
    h1: "Minigolf Regeln: Die offiziellen Bahnengolf-Regeln erklärt",
    metaDescription: "Die offiziellen Minigolf-Regeln einfach erklärt: Schlagzahl, Bahnregeln, Strafschläge und Turnier-Bestimmungen für Anfänger und Fortgeschrittene.",
    category: "Regeln & Tipps",
    excerpt: "Alle offiziellen Minigolf-Regeln verständlich erklärt – für Freizeitspieler und Wettkämpfer.",
    publishDate: "2025-03-20",
    sections: [
      { question: "Wie viele Schläge hat man pro Bahn beim Minigolf?", answer: "Im Freizeitspiel sind maximal 6 Schläge pro Bahn üblich. Bei offiziellen Turnieren gilt eine Obergrenze von 7 Schlägen. Wird nicht eingelocht, zählt ein Strafschlag.", content: "Die Schlagbegrenzung ist eine der wichtigsten Regeln im Minigolf. Sie sorgt für einen flüssigen Spielablauf und verhindert, dass einzelne Spieler zu lange an einer Bahn verweilen. Im Freizeitbereich wird oft mit 6 Schlägen als Maximum gespielt – nach dem sechsten Schlag wird der Ball aufgenommen und man notiert 7 Schläge. Bei offiziellen Wettkämpfen des DMV gelten 7 Schläge als Maximum, bei Nichteinlochen werden 8 Punkte notiert." },
      { question: "Was passiert, wenn der Ball von der Bahn fällt?", answer: "Fällt der Ball von der Bahn, wird er an die Stelle zurückgelegt, an der er die Bahn verlassen hat. Es gibt keinen Strafschlag dafür, der nächste Schlag zählt normal.", content: "Das Verlassen der Bahn ist im Minigolf häufig und Teil des Spiels. Im Freizeitbereich wird der Ball meist einfach an die nächstgelegene Stelle der Bahnbegrenzung gelegt. Im Wettkampf gibt es genaue Regeln, welcher Punkt als Wiedereinsetzpunkt gilt. Wichtig: Der Ball muss immer auf der Bahn ruhen, bevor der nächste Schlag ausgeführt wird." },
      { question: "Wie wird beim Minigolf gezählt und wer gewinnt?", answer: "Jeder Schlag zählt als ein Punkt. Alle Punkte aller 18 Bahnen werden addiert. Der Spieler mit der niedrigsten Gesamtpunktzahl gewinnt die Runde.", content: "Die Zählung beim Minigolf ist denkbar einfach: Jeder Schlag ergibt einen Punkt. Ein Ass (Einlochen mit dem ersten Schlag) ergibt 1 Punkt – das bestmögliche Ergebnis pro Bahn. Die theoretisch beste Gesamtpunktzahl bei 18 Bahnen beträgt also 18 Punkte. Profispieler erreichen auf bekannten Bahnen durchschnittlich 20-25 Punkte über 18 Bahnen." },
      { question: "Gibt es besondere Regeln für Kinder beim Minigolf?", answer: "Für Kinder gibt es keine speziellen Regeln, aber viele Anlagen bieten kleinere Schläger und erlauben eine lockerere Handhabung der Regeln für mehr Spielspaß.", content: "Minigolf ist von Natur aus kinderfreundlich. Die meisten Anlagen bieten Kinderschläger in verschiedenen Größen an. Im Freizeitbereich können Eltern die Regeln flexibel anpassen: zusätzliche Versuche erlauben, den Ball näher ans Loch legen oder einfach nur den Spaß in den Vordergrund stellen. Kinder ab etwa 4 Jahren können Minigolf spielen. In der Metropolregion Rhein-Neckar gibt es viele familienfreundliche Anlagen." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-technik-tipps", "minigolf-turniere"],
    relatedCities: ["heidelberg", "schwetzingen"],
  },
  {
    slug: "minigolf-vs-golf",
    title: "Minigolf vs. Golf: Was sind die Unterschiede?",
    h1: "Minigolf vs. Golf: Was sind die Unterschiede?",
    metaDescription: "Minigolf oder Golf? Wir vergleichen Kosten, Spielweise, Zeitaufwand und Einstiegshürden der beiden beliebten Sportarten.",
    category: "Golf",
    excerpt: "Die wichtigsten Unterschiede zwischen Minigolf und Golf – Kosten, Zeitaufwand, Schwierigkeitsgrad und mehr im Vergleich.",
    publishDate: "2025-04-01",
    sections: [
      { question: "Was ist der Hauptunterschied zwischen Minigolf und Golf?", answer: "Minigolf wird auf kurzen, genormten Bahnen mit Hindernissen gespielt. Golf findet auf weitläufigen Plätzen statt und erfordert verschiedene Schlagtechniken über große Distanzen.", content: "Der fundamentale Unterschied liegt in der Spielfläche und der Komplexität. Eine Minigolfbahn ist typischerweise 6-12 Meter lang, eine Golfloch-Spielbahn kann mehrere hundert Meter umfassen. Beim Minigolf nutzt man einen einzigen Schläger (Putter), beim Golf kommen bis zu 14 verschiedene Schläger zum Einsatz. Minigolf konzentriert sich auf Präzision auf kurze Distanz, Golf erfordert zusätzlich Kraft, Technik und strategisches Denken." },
      { question: "Was kostet Minigolf im Vergleich zu Golf?", answer: "Eine Runde Minigolf kostet 3-13 Euro. Golf erfordert eine Mitgliedschaft (1.000-3.000 Euro/Jahr) oder Greenfees von 30-150 Euro pro Runde plus Ausrüstung.", content: "Kostentechnisch ist Minigolf deutlich günstiger und niedrigschwelliger. In der Region Rhein-Neckar kostet eine Runde klassisches Minigolf zwischen 3 und 6 Euro, Schwarzlicht-Minigolf zwischen 9 und 13 Euro. Schläger und Ball werden gestellt. Golf hingegen erfordert eine erhebliche Investition: Die Grundausrüstung kostet ab 300 Euro, eine Clubmitgliedschaft ab 1.000 Euro jährlich. Hinzu kommt die Platzreife (Golfkurs für ca. 300-500 Euro)." },
      { question: "Wie lange dauert eine Runde Minigolf bzw. Golf?", answer: "Eine Runde Minigolf dauert 45-60 Minuten für 18 Bahnen. Eine 18-Loch-Runde Golf dauert 4-5 Stunden – deutlich mehr Zeitaufwand.", content: "Der Zeitfaktor ist für viele Freizeitsportler entscheidend. Minigolf ist die perfekte Aktivität für einen kurzen Ausflug oder als Teil eines größeren Programms. Golf hingegen ist ein Halbtages-Programm. Für Familien mit Kindern ist Minigolf daher oft die bessere Wahl – die Aufmerksamkeitsspanne bleibt erhalten und alle Altersgruppen können mitspielen." },
    ],
    relatedArticles: ["was-ist-minigolf", "golf-grundlagen", "golf-anfaenger-guide"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "minigolf-fuer-kinder",
    title: "Minigolf mit Kindern: Tipps für den perfekten Familienausflug",
    h1: "Minigolf mit Kindern: Tipps für den perfekten Familienausflug",
    metaDescription: "Minigolf mit Kindern: Ab welchem Alter, welche Anlagen sind geeignet und wie wird der Ausflug zum Erfolg? Tipps für Familien in der Region.",
    category: "Familie",
    excerpt: "Praktische Tipps für den Minigolf-Ausflug mit Kindern – Alter, Auswahl der Anlage und wie der Tag zum Erfolg wird.",
    publishDate: "2025-04-05",
    sections: [
      { question: "Ab welchem Alter können Kinder Minigolf spielen?", answer: "Kinder können ab etwa 4 Jahren Minigolf spielen. Die meisten Anlagen bieten Kinderschläger an. Mit 6-7 Jahren können Kinder bereits eigenständig eine Runde spielen.", content: "Minigolf ist einer der familienfreundlichsten Sportarten überhaupt. Bereits Kleinkinder ab 3-4 Jahren können mit Unterstützung der Eltern erste Versuche wagen. Wichtig: Wählen Sie eine Anlage mit einfacheren Bahnen und planen Sie genug Zeit ein. Kinder unter 6 Jahren brauchen oft Hilfe beim Schlagen und sollten nicht unter Zeitdruck stehen. Viele Anlagen in der Region Heidelberg/Mannheim wie Gartengolf Eppelheim oder OMA's Garten sind besonders familienfreundlich." },
      { question: "Welche Minigolfanlage ist für Kinder am besten geeignet?", answer: "Für Kinder eignen sich besonders Outdoor-Anlagen mit einfachen Bahnen, Schattenmöglichkeiten und Gastronomie. Adventure-Golf-Plätze bieten zusätzlichen Spaß durch kreative Gestaltung.", content: "Bei der Auswahl der richtigen Anlage für Kinder sollten Sie auf folgende Kriterien achten: Verfügbarkeit von Kinderschlägern, einfache bis mittlere Bahnschwierigkeit, Toiletten und Wickelmöglichkeiten, Schattenbereiche für heiße Tage und idealerweise ein gastronomisches Angebot. In der Metropolregion Rhein-Neckar sind Gartengolf Eppelheim, OMA's Garten Heidelberg und der Adventure Golf Hohenhardter Hof besonders empfehlenswert für Familien." },
      { question: "Wie macht man Minigolf mit Kindern zum Erlebnis?", answer: "Machen Sie aus dem Minigolf-Besuch einen Wettbewerb mit kleinen Preisen, planen Sie Pausen ein und kombinieren Sie den Ausflug mit einem Eis oder Picknick danach.", content: "Einige bewährte Tipps für den Familienausflug: Führen Sie eine eigene Scorekarte, bei der auch die lustigsten Fehlschläge gewertet werden. Vergeben Sie Preise in verschiedenen Kategorien (bester Schlag, lustigster Moment, fairster Spieler). Planen Sie nach dem Spiel eine Belohnung ein – viele Anlagen haben ein Kiosk oder Café. Vermeiden Sie Stoßzeiten an Wochenenden und kommen Sie lieber am frühen Nachmittag." },
    ],
    relatedArticles: ["minigolf-kindergeburtstag", "was-ist-minigolf", "minigolf-regeln"],
    relatedCities: ["heidelberg", "schwetzingen", "mannheim"],
  },
  {
    slug: "minigolf-kindergeburtstag",
    title: "Kindergeburtstag auf dem Minigolfplatz: Planung & Tipps",
    h1: "Kindergeburtstag auf dem Minigolfplatz: Planung & Tipps",
    metaDescription: "Kindergeburtstag auf dem Minigolfplatz feiern: Planung, Einladung, Ablauf und die besten Anlagen in der Region Heidelberg/Mannheim.",
    category: "Familie",
    excerpt: "So planen Sie einen unvergesslichen Kindergeburtstag auf dem Minigolfplatz – Schritt für Schritt.",
    publishDate: "2025-04-10",
    sections: [
      { question: "Kann man auf dem Minigolfplatz Kindergeburtstag feiern?", answer: "Ja, viele Minigolfanlagen bieten spezielle Kindergeburtstags-Pakete an. Diese beinhalten oft vergünstigte Preise, reservierte Bereiche und manchmal auch Verpflegung.", content: "Minigolf ist eine ideale Aktivität für Kindergeburtstage: Es macht allen Kindern Spaß, erfordert keine Vorkenntnisse und dauert eine überschaubare Zeit. Viele Anlagen in der Region bieten spezielle Geburtstagspakete an. Gartengolf Eppelheim zum Beispiel ermöglicht Gruppenreservierungen und bietet ausreichend Platz für eine Geburtstagsfeier im Freien." },
      { question: "Wie plant man einen Minigolf-Kindergeburtstag?", answer: "Planen Sie 2-3 Wochen vorher: Anlage reservieren, Einladungen versenden, Verpflegung organisieren. Rechnen Sie mit 1,5-2 Stunden für Spiel plus Essen.", content: "Planungsschritte: 1) Anlage auswählen und anfragen, ob Gruppenreservierungen möglich sind. 2) Einladungen mit Treffpunkt und Zeitangabe versenden. 3) Gruppenanzahl bestätigen. 4) Kleine Preise für den Gewinner besorgen. 5) Verpflegung klären – entweder vor Ort oder eigenes Picknick. 6) Eventuell eine Urkunde für alle Teilnehmer vorbereiten. Die meisten Anlagen sind bei Voranmeldung flexibel und helfen bei der Organisation." },
      { question: "Was kostet ein Minigolf-Kindergeburtstag?", answer: "Die Kosten liegen bei 3-6 Euro pro Kind für die Minigolf-Runde. Gruppenrabatte sind häufig möglich. Rechnen Sie mit 5-10 Euro pro Kind inklusive Getränk und Snack.", content: "Ein Minigolf-Kindergeburtstag ist eine der günstigsten Feier-Optionen. Bei 8 Kindern und einem Preis von 4 Euro pro Kind zahlen Sie 32 Euro für die Minigolf-Runde. Dazu kommen eventuell Kosten für Getränke, Kuchen und kleine Preise. Insgesamt können Sie mit 60-100 Euro für eine komplette Geburtstagsfeier rechnen – deutlich günstiger als Indoor-Spielplätze oder organisierte Partyprogramme." },
    ],
    relatedArticles: ["minigolf-fuer-kinder", "minigolf-gruppenevents", "was-ist-minigolf"],
    relatedCities: ["heidelberg", "schwetzingen"],
  },
  {
    slug: "minigolf-gruppenevents",
    title: "Minigolf für Gruppenevents & Firmenevents",
    h1: "Minigolf für Gruppenevents & Firmenevents",
    metaDescription: "Minigolf als Gruppenevent oder Firmenevent: Vorteile, Planung und die besten Anlagen für Teambuilding in der Region Rhein-Neckar.",
    category: "Events",
    excerpt: "Warum Minigolf das perfekte Teamevent ist und wie Sie einen gelungenen Gruppenausflug planen.",
    publishDate: "2025-04-15",
    sections: [
      { question: "Warum eignet sich Minigolf als Firmenevent?", answer: "Minigolf fördert Teamgeist, ist niedrigschwellig und macht allen Spaß – unabhängig von Alter oder Fitnesslevel. Es bietet natürliche Gesprächsanlässe und spielerischen Wettbewerb.", content: "Minigolf ist eines der besten Teambuilding-Aktivitäten: Es erfordert keine sportliche Vorbildung, alle können mitmachen, und der spielerische Wettbewerb schafft Gesprächsstoff. Im Vergleich zu Kletterparks oder Escape Rooms ist Minigolf barriereärmer und günstiger. Besonders die Indoor-Anlagen in Mannheim wie The Mindgolf oder die World of Gleamgolf sind bei Firmengruppen beliebt." },
      { question: "Wie viele Personen können gleichzeitig Minigolf spielen?", answer: "Pro Gruppe empfehlen sich 3-5 Spieler. Bei größeren Gruppen werden Teams gebildet, die gestaffelt starten. Die meisten Anlagen können 20-40 Personen gleichzeitig aufnehmen.", content: "Bei der Planung eines Gruppenevents sollten Sie die Kapazität der Anlage berücksichtigen. Melden Sie größere Gruppen (ab 10 Personen) immer vorab an. Viele Anlagen bieten für Gruppen Sonderkonditionen und reservieren Zeitfenster. Gartengolf Eppelheim und andere Anlagen in der Region sind erfahren in der Durchführung von Gruppenevents." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-kindergeburtstag", "minigolf-turniere"],
    relatedCities: ["mannheim", "heidelberg"],
  },
  {
    slug: "minigolf-turniere",
    title: "Minigolf-Turniere: So funktionieren offizielle Wettkämpfe",
    h1: "Minigolf-Turniere: So funktionieren offizielle Wettkämpfe",
    metaDescription: "Wie funktionieren Minigolf-Turniere? Regeln, Ablauf, Wertung und wie Sie an offiziellen Wettkämpfen teilnehmen können.",
    category: "Events",
    excerpt: "Alles über Minigolf-Turniere: Regeln, Formate, Wertung und Teilnahmemöglichkeiten.",
    publishDate: "2025-04-20",
    sections: [
      { question: "Wie funktioniert ein Minigolf-Turnier?", answer: "Bei Turnieren spielen alle Teilnehmer die gleichen Bahnen unter gleichen Bedingungen. Es werden mehrere Runden gespielt und die Schläge addiert. Der Spieler mit der niedrigsten Gesamtzahl gewinnt.", content: "Offizielle Minigolf-Turniere werden nach den Regeln des Deutschen Minigolfsport Verbands (DMV) ausgetragen. Typischerweise werden 4-6 Runden à 18 Bahnen gespielt. Es gibt verschiedene Spielklassen und Altersgruppen. Auch auf regionaler Ebene finden in der Metropolregion Rhein-Neckar regelmäßig Turniere statt – einige Vereine wie der MGC Weinheim und MGC Ladenburg sind im Wettkampfbetrieb aktiv." },
      { question: "Kann man als Anfänger an Minigolf-Turnieren teilnehmen?", answer: "Ja, viele Vereine und Anlagen veranstalten offene Turniere für Freizeitspieler. Für offizielle DMV-Wettkämpfe ist eine Vereinsmitgliedschaft erforderlich.", content: "Der Einstieg in den Turniersport ist einfacher als gedacht. Viele Anlagen veranstalten Fun-Turniere und offene Meisterschaften, an denen jeder teilnehmen kann. Wer es ernster nehmen möchte, tritt einem Minigolf-Verein bei. In der Region gibt es mehrere aktive Vereine, die neue Mitglieder willkommen heißen." },
    ],
    relatedArticles: ["minigolf-regeln", "minigolf-technik-tipps", "minigolf-gruppenevents"],
    relatedCities: ["weinheim", "ladenburg"],
  },
  {
    slug: "minigolf-bahnen-arten",
    title: "Minigolf Bahnen: Welche Typen gibt es? (Beton, Eternit, Kunstrasen)",
    h1: "Minigolf Bahnen: Welche Typen gibt es?",
    metaDescription: "Minigolf-Bahnen im Überblick: Beton, Eternit, Filz und Kunstrasen – Unterschiede, Vor- und Nachteile der verschiedenen Bahntypen.",
    category: "Anlagen-Typen",
    excerpt: "Von Beton bis Kunstrasen: Die verschiedenen Minigolf-Bahntypen und ihre Eigenschaften im Vergleich.",
    publishDate: "2025-03-25",
    sections: [
      { question: "Welche Arten von Minigolfbahnen gibt es?", answer: "Die vier Haupttypen sind: Betonbahnen (klassisches Minigolf), Eternitbahnen (Miniaturgolf), Filzbahnen (Sterngolf) und Kunstrasen (Adventure Golf). Jeder Typ hat eigene Spieleigenschaften.", content: "In Deutschland dominieren Beton- und Eternitbahnen. Betonbahnen sind die bekannteste Variante und finden sich auf den meisten klassischen Minigolfplätzen wie Gartengolf Eppelheim. Eternitbahnen sind glatter und werden vor allem bei Wettkämpfen eingesetzt. Kunstrasen-Bahnen kommen beim modernen Adventure Golf zum Einsatz und bieten ein naturnahes Spielerlebnis." },
      { question: "Was ist der Unterschied zwischen Minigolf und Miniaturgolf?", answer: "Minigolf wird auf Betonbahnen mit festen Hindernissen gespielt, Miniaturgolf auf glatteren Eternitbahnen. Die Bahnen bei Miniaturgolf sind etwas kleiner und die Spieleigenschaften unterscheiden sich.", content: "Obwohl die Begriffe oft synonym verwendet werden, bezeichnen sie technisch verschiedene Bahnsysteme. Für den Freizeitspieler sind die Unterschiede gering, für Wettkampfspieler jedoch erheblich. In der Region Rhein-Neckar finden sich überwiegend klassische Betonbahnen." },
    ],
    relatedArticles: ["was-ist-minigolf", "adventure-golf", "schwarzlicht-minigolf"],
    relatedCities: ["heidelberg", "schwetzingen"],
  },
  {
    slug: "schwarzlicht-minigolf",
    title: "Schwarzlicht Minigolf: Was ist das und wo spielen?",
    h1: "Schwarzlicht Minigolf: Was ist das und wo spielen?",
    metaDescription: "Schwarzlicht Minigolf: Leuchtende Bahnen, 3D-Effekte und Indoor-Spaß bei jedem Wetter. Anlagen in der Region Heidelberg & Mannheim.",
    category: "Anlagen-Typen",
    excerpt: "Alles über Schwarzlicht-Minigolf: leuchtende Bahnen, 3D-Effekte und die besten Anlagen in der Metropolregion.",
    publishDate: "2025-04-02",
    sections: [
      { question: "Was ist Schwarzlicht-Minigolf?", answer: "Schwarzlicht-Minigolf ist Indoor-Minigolf in abgedunkelten Räumen mit UV-Licht. Bahnen, Wände und Hindernisse sind mit fluoreszierenden Farben gestaltet und leuchten im Schwarzlicht.", content: "Schwarzlicht-Minigolf, auch Neon-Minigolf oder Glow Golf genannt, hat sich in den letzten Jahren zu einem beliebten Freizeittrend entwickelt. Die Bahnen sind in vollständig abgedunkelten Räumen aufgebaut und mit speziellen UV-reaktiven Farben gestaltet. Dreidimensionale Effekte durch 3D-Brillen verstärken das Erlebnis. In der Region Rhein-Neckar gibt es mehrere Anlagen: GATE99/Gleamgolf bei Heidelberg und die World of Gleamgolf in Mannheim." },
      { question: "Wo kann man in der Region Heidelberg/Mannheim Schwarzlicht-Minigolf spielen?", answer: "In der Region gibt es zwei große Anlagen: GATE99/Gleamgolf in Eppelheim bei Heidelberg und die World of Gleamgolf in Mannheim. Beide bieten 18 Bahnen mit 3D-Effekten.", content: "GATE99 Gleamgolf liegt im Gewerbegebiet Eppelheim und bietet neben Schwarzlicht-Minigolf auch Escape Rooms. Die World of Gleamgolf in Mannheim ist eine der größten Schwarzlicht-Minigolf-Anlagen der Region. Beide Anlagen sind ganzjährig geöffnet und eignen sich besonders für Regentage, Geburtstagsfeiern und Gruppenevents." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-bahnen-arten", "minigolf-wetter-outdoor-vs-indoor"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "adventure-golf",
    title: "Adventure Golf: Abwechslungsreiches Minigolf-Erlebnis",
    h1: "Adventure Golf: Abwechslungsreiches Minigolf-Erlebnis",
    metaDescription: "Adventure Golf: Minigolf auf Kunstrasen mit Naturhindernissen. Was Adventure Golf ausmacht und wo Sie es in der Region spielen können.",
    category: "Anlagen-Typen",
    excerpt: "Adventure Golf verbindet Minigolf mit Natur und Abenteuer – alles über die moderne Minigolf-Variante.",
    publishDate: "2025-04-08",
    sections: [
      { question: "Was ist Adventure Golf?", answer: "Adventure Golf ist eine moderne Minigolf-Variante mit großzügig gestalteten Bahnen auf Kunstrasen. Natürliche Hindernisse wie Felsen, Wasserläufe und Brücken ersetzen die klassischen Beton-Hindernisse.", content: "Adventure Golf unterscheidet sich deutlich vom klassischen Minigolf. Die Bahnen sind größer (oft 15-30 Meter lang), werden auf Kunstrasen gespielt und sind in eine natürliche oder thematisch gestaltete Landschaft eingebettet. In der Region Heidelberg ist der Adventure Golf Hohenhardter Hof bei Wiesloch ein hervorragendes Beispiel für diese Variante." },
      { question: "Wo kann man in der Region Rhein-Neckar Adventure Golf spielen?", answer: "Der bekannteste Adventure-Golf-Platz der Region ist der Hohenhardter Hof bei Wiesloch mit 18 naturnahen Bahnen. Weitere Anlagen finden sich im weiteren Umkreis.", content: "Der Adventure Golf Hohenhardter Hof bietet 18 großzügig angelegte Bahnen mit echten Geländehindernissen in einer wunderschönen Naturkulisse. Die Anlage ist für alle Altersgruppen geeignet und bietet auch Gastronomie. Sie liegt gut erreichbar zwischen Heidelberg und Wiesloch." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-bahnen-arten", "schwarzlicht-minigolf"],
    relatedCities: ["wiesloch", "heidelberg"],
  },
  {
    slug: "minigolf-schlaeger-ball",
    title: "Minigolf Schläger und Bälle: Was sollte man wissen?",
    h1: "Minigolf Schläger und Bälle: Was sollte man wissen?",
    metaDescription: "Minigolf Schläger und Bälle: Materialien, Unterschiede, Kauftipps und was Freizeitspieler wissen müssen.",
    category: "Regeln & Tipps",
    excerpt: "Alles über Minigolf-Ausrüstung: Welche Schläger und Bälle es gibt und was für Freizeitspieler wichtig ist.",
    publishDate: "2025-04-12",
    sections: [
      { question: "Braucht man eigene Schläger und Bälle zum Minigolf?", answer: "Nein, alle Minigolfanlagen stellen Schläger und Bälle zur Verfügung. Eigene Ausrüstung ist nur für ambitionierte Spieler und Wettkampfteilnehmer sinnvoll.", content: "Für den Freizeitbesuch auf dem Minigolfplatz benötigen Sie keine eigene Ausrüstung. Gartengolf Eppelheim und alle anderen Anlagen in der Region stellen Schläger in verschiedenen Größen (auch Kinderschläger) und Bälle bereit. Erst wenn Sie regelmäßig spielen oder an Turnieren teilnehmen, lohnt sich die Anschaffung eigener Ausrüstung." },
      { question: "Was kostet ein eigener Minigolfschläger?", answer: "Einstiegsschläger gibt es ab 20-30 Euro, Wettkampfschläger kosten 50-150 Euro. Professionelle Spezialbälle kosten 5-15 Euro pro Stück.", content: "Die Preisspanne ist groß. Für Freizeitspieler reicht ein einfacher Putter, der in jedem Sportgeschäft erhältlich ist. Wettkampfspieler investieren in Spezialschläger mit bestimmten Gewichten und Kopfformen. Bälle unterscheiden sich in Härte, Gewicht und Material – Profis wählen den Ball passend zur Bahn." },
    ],
    relatedArticles: ["minigolf-technik-tipps", "was-ist-minigolf", "minigolf-regeln"],
    relatedCities: ["heidelberg"],
  },
  {
    slug: "minigolf-technik-tipps",
    title: "Minigolf Technik: So verbesserst du dein Spiel",
    h1: "Minigolf Technik: So verbesserst du dein Spiel",
    metaDescription: "Minigolf Tipps und Technik: Schlaghaltung, Zielgenauigkeit, Bandenspiel und Strategien für bessere Ergebnisse auf dem Platz.",
    category: "Regeln & Tipps",
    excerpt: "Praktische Technik-Tipps für besseres Minigolf: Von der richtigen Haltung bis zur Strategie für schwierige Bahnen.",
    publishDate: "2025-04-18",
    sections: [
      { question: "Wie hält man den Minigolfschläger richtig?", answer: "Greifen Sie den Schläger am Griffende mit beiden Händen. Die Hände liegen übereinander, der Daumen der oberen Hand zeigt nach unten. Stehen Sie schulterbreit mit leicht gebeugten Knien.", content: "Die richtige Griffhaltung ist die Basis für ein gutes Minigolf-Spiel. Stellen Sie sich mit schulterbreitem Stand hinter den Ball, die Knie leicht gebeugt. Der Schläger wird pendelt frei zwischen den Beinen. Vermeiden Sie verkrampftes Greifen – ein lockerer Griff führt zu besserer Kontrolle. Üben Sie auf den ersten Bahnen verschiedene Griffstärken, um ein Gefühl für die richtige Dosierung zu bekommen." },
      { question: "Wie zielt man beim Minigolf richtig?", answer: "Visieren Sie die Ziellinie an, indem Sie sich hinter den Ball stellen und eine gedachte Linie zum Loch ziehen. Berücksichtigen Sie Gefälle, Banden und Hindernisse in Ihrer Planung.", content: "Gutes Zielen beginnt mit dem Lesen der Bahn. Schauen Sie sich Gefälle, Neigungen und Hindernisse an, bevor Sie schlagen. Bei geraden Bahnen zielen Sie direkt auf das Loch. Bei Bahnen mit Kurven nutzen Sie die Bande als Spiegel – der Einfallswinkel entspricht dem Ausfallswinkel. Erfahrene Spieler in Anlagen wie Gartengolf Eppelheim empfehlen, mehrere Wege zum Loch zu prüfen und den sichersten zu wählen." },
    ],
    relatedArticles: ["minigolf-regeln", "minigolf-schlaeger-ball", "minigolf-turniere"],
    relatedCities: ["heidelberg", "schwetzingen"],
  },
  {
    slug: "golf-grundlagen",
    title: "Golf Grundlagen: Alles was Einsteiger wissen müssen",
    h1: "Golf Grundlagen: Alles was Einsteiger wissen müssen",
    metaDescription: "Golf Grundlagen für Einsteiger: Platzreife, Ausrüstung, Kosten und der Weg zum ersten Spiel auf dem Golfplatz.",
    category: "Golf",
    excerpt: "Der umfassende Einstiegsguide für Golf-Anfänger: Von der Platzreife bis zum ersten Abschlag.",
    publishDate: "2025-04-22",
    sections: [
      { question: "Was braucht man, um Golf zu spielen?", answer: "Für Golf benötigen Sie die Platzreife (einen Golfkurs), eine Grundausrüstung und Zugang zu einem Golfplatz – entweder durch Mitgliedschaft oder Greenfee.", content: "Golf ist ein Gentleman-Sport mit einer gewissen Einstiegshürde. Die Platzreife – ein Nachweis über Regelkenntnisse und Spielfähigkeit – ist auf den meisten deutschen Golfplätzen Voraussetzung. Platzreife-Kurse kosten 300-500 Euro und dauern 2-4 Wochenenden. Alternativ bietet Minigolf einen niedrigschwelligen Einstieg in den Schlägersport – wer Minigolf mag, wird auch Golf lieben." },
      { question: "Was kostet Golf spielen in Deutschland?", answer: "Die Grundausrüstung kostet ab 300 Euro, die Platzreife 300-500 Euro, eine Jahresmitgliedschaft 1.000-3.000 Euro. Greenfees liegen bei 30-150 Euro pro Runde.", content: "Golf ist kostenintensiver als Minigolf, bietet aber auch ein anderes Erlebnis. Für Einsteiger lohnt es sich, zunächst gebrauchte Schläger zu kaufen und die Platzreife zu erwerben. In der Region Rhein-Neckar gibt es mehrere Golfclubs, darunter der GC Heddesheim und der GC St. Leon-Rot." },
    ],
    relatedArticles: ["minigolf-vs-golf", "golf-anfaenger-guide", "golf-vs-minigolf-unterschied"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "golf-vs-minigolf-unterschied",
    title: "Golf vs. Minigolf: Alle Unterschiede auf einen Blick",
    h1: "Golf vs. Minigolf: Alle Unterschiede auf einen Blick",
    metaDescription: "Golf und Minigolf im direkten Vergleich: Spielweise, Kosten, Zeitaufwand, Ausrüstung und für wen sich welcher Sport eignet.",
    category: "Golf",
    excerpt: "Golf und Minigolf im Vergleich – für wen sich welche Variante eignet und wo die Unterschiede liegen.",
    publishDate: "2025-04-25",
    sections: [
      { question: "Was sind die größten Unterschiede zwischen Golf und Minigolf?", answer: "Golf erfordert Platzreife, teure Ausrüstung und viel Zeit. Minigolf ist sofort spielbar, günstig und in einer Stunde erledigt. Golf findet auf Rasen-Kursen statt, Minigolf auf festen Bahnen.", content: "Die beiden Sportarten teilen zwar den Namen und das Grundprinzip (Ball ins Loch), unterscheiden sich aber grundlegend. Golf ist ein Ganzkörpersport mit verschiedenen Schlagtechniken, Minigolf fokussiert auf Putten und Präzision. Beide Sportarten haben ihre Berechtigung und können sich ergänzen. Viele Golfer spielen auch gern Minigolf – und umgekehrt ist Minigolf oft der Einstieg in den Golfsport." },
    ],
    relatedArticles: ["minigolf-vs-golf", "golf-grundlagen", "golf-anfaenger-guide"],
    relatedCities: ["heidelberg"],
  },
  {
    slug: "golf-anfaenger-guide",
    title: "Golf für Anfänger: Der ultimative Einstiegsguide",
    h1: "Golf für Anfänger: Der ultimative Einstiegsguide",
    metaDescription: "Golf für Anfänger: Schritt-für-Schritt zum ersten Abschlag. Platzreife, Ausrüstung, Etikette und Tipps für den Einstieg in den Golfsport.",
    category: "Golf",
    excerpt: "Ihr Weg zum Golf: Von der ersten Stunde bis zum ersten Spiel auf dem Platz – der komplette Anfänger-Guide.",
    publishDate: "2025-04-28",
    sections: [
      { question: "Wie fängt man mit Golf an?", answer: "Beginnen Sie mit einer Schnupperstunde bei einem Golfclub. Dort erhalten Sie Leihschläger und erste Anweisungen. Wenn es Ihnen gefällt, melden Sie sich zum Platzreife-Kurs an.", content: "Der beste Einstieg in den Golfsport führt über Schnupperkurse. Nahezu jeder Golfclub bietet diese an – oft kostenlos oder für eine geringe Gebühr. In der Region Heidelberg/Mannheim gibt es mehrere Golfclubs, die Einsteiger willkommen heißen. Wer erst einmal testen möchte, ob Schlägersport etwas für ihn ist, kann auch mit Minigolf beginnen – die Grundprinzipien von Zielen und Putten sind identisch." },
    ],
    relatedArticles: ["golf-grundlagen", "golf-vs-minigolf-unterschied", "minigolf-vs-golf"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "minigolf-wetter-outdoor-vs-indoor",
    title: "Indoor vs. Outdoor Minigolf: Welche Variante ist besser?",
    h1: "Indoor vs. Outdoor Minigolf: Welche Variante ist besser?",
    metaDescription: "Indoor oder Outdoor Minigolf? Vorteile, Nachteile und wann welche Variante die bessere Wahl ist – mit Anlagen-Empfehlungen.",
    category: "Anlagen-Typen",
    excerpt: "Indoor oder Outdoor? Die Vor- und Nachteile beider Minigolf-Varianten und wann welche die bessere Wahl ist.",
    publishDate: "2025-05-01",
    sections: [
      { question: "Was sind die Vorteile von Outdoor-Minigolf?", answer: "Outdoor-Minigolf bietet frische Luft, Sonnenlicht und Naturerlebnis. Die Anlagen sind oft günstiger und haben mehr Bahnen. Perfekt für schönes Wetter von April bis Oktober.", content: "Outdoor-Minigolf ist die klassische Variante und bietet ein ganz anderes Erlebnis als Indoor-Anlagen. Die Verbindung von Sport und Natur macht den Reiz aus. Anlagen wie Gartengolf Eppelheim, OMA's Garten Heidelberg und der Adventure Golf Hohenhardter Hof bieten idyllische Outdoor-Erlebnisse. Der Nachteil: Wetterabhängigkeit. Bei Regen fällt der Ausflug buchstäblich ins Wasser." },
      { question: "Was sind die Vorteile von Indoor-Minigolf?", answer: "Indoor-Minigolf ist wetterunabhängig und ganzjährig spielbar. Schwarzlicht-Anlagen bieten ein besonderes Erlebnis mit leuchtenden Farben und 3D-Effekten. Ideal für Regentage.", content: "Indoor-Minigolf hat in den letzten Jahren stark zugelegt. Schwarzlicht-Anlagen wie GATE99 Gleamgolf bei Heidelberg und die World of Gleamgolf in Mannheim bieten ein immersives Erlebnis, das Outdoor-Anlagen nicht bieten können. Die Preise liegen allerdings höher (9-13 Euro vs. 3-6 Euro). Dafür sind die Anlagen ganzjährig und bei jedem Wetter nutzbar." },
    ],
    relatedArticles: ["schwarzlicht-minigolf", "adventure-golf", "was-ist-minigolf"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "minigolf-preise-vergleich",
    title: "Minigolf Preise: Was kostet eine Runde in Deutschland?",
    h1: "Minigolf Preise: Was kostet eine Runde in Deutschland?",
    metaDescription: "Minigolf Preise im Vergleich: Was kostet Minigolf in Deutschland? Outdoor, Indoor, Schwarzlicht und Adventure Golf Preise im Überblick.",
    category: "Regeln & Tipps",
    excerpt: "Was kostet Minigolf? Ein Preisvergleich für verschiedene Anlagentypen in der Metropolregion Rhein-Neckar.",
    publishDate: "2025-05-05",
    sections: [
      { question: "Was kostet eine Runde Minigolf im Durchschnitt?", answer: "Outdoor-Minigolf kostet für Erwachsene 3-6 Euro, für Kinder 2-4 Euro. Indoor-Schwarzlicht-Minigolf liegt bei 9-13 Euro für Erwachsene und 7-10 Euro für Kinder.", content: "Die Preise für Minigolf variieren je nach Anlagentyp und Region. In der Metropolregion Rhein-Neckar finden Sie folgende Preisspannen: Gartengolf Eppelheim (5 Euro Erwachsene, 3,50 Euro Kinder), GATE99 Gleamgolf (12 Euro, 9 Euro), World of Gleamgolf Mannheim (13 Euro, 10 Euro). Klassische Outdoor-Anlagen sind die günstigste Option für Familienausflüge." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-wetter-outdoor-vs-indoor", "minigolf-fuer-kinder"],
    relatedCities: ["heidelberg", "mannheim", "schwetzingen"],
  },
  {
    slug: "minigolf-mit-hund",
    title: "Minigolf mit Hund: Erlaubt und möglich?",
    h1: "Minigolf mit Hund: Erlaubt und möglich?",
    metaDescription: "Minigolf mit Hund: Welche Anlagen erlauben Hunde? Tipps für den Besuch mit Vierbeiner und hundefreundliche Plätze in der Region.",
    category: "Familie",
    excerpt: "Hund und Minigolf – geht das? Welche Anlagen Hunde erlauben und worauf Sie achten sollten.",
    publishDate: "2025-05-08",
    sections: [
      { question: "Darf man Hunde auf den Minigolfplatz mitnehmen?", answer: "Das hängt von der Anlage ab. Viele Outdoor-Minigolfplätze erlauben Hunde an der Leine. Indoor-Anlagen und Schwarzlicht-Minigolf sind in der Regel nicht hundefreundlich.", content: "Hundebesitzer sollten vor dem Besuch die jeweilige Anlage kontaktieren. Generell sind Outdoor-Anlagen hundefreundlicher als Indoor-Anlagen. Achten Sie darauf, dass Ihr Hund angeleint ist, andere Spieler nicht stört und Sie Hundekot entfernen. In der Region Rhein-Neckar sind die meisten Outdoor-Anlagen nach Absprache hundefreundlich." },
    ],
    relatedArticles: ["minigolf-fuer-kinder", "was-ist-minigolf", "minigolf-wetter-outdoor-vs-indoor"],
    relatedCities: ["heidelberg", "schwetzingen"],
  },
  {
    slug: "minigolf-barrierefrei",
    title: "Minigolf barrierefrei: Anlagen für alle Fähigkeiten",
    h1: "Minigolf barrierefrei: Anlagen für alle Fähigkeiten",
    metaDescription: "Barrierefreies Minigolf: Welche Anlagen sind rollstuhlgerecht? Tipps für Minigolf mit Handicap und inklusive Freizeitgestaltung.",
    category: "Familie",
    excerpt: "Minigolf für alle: Welche Anlagen barrierefrei sind und wie Inklusion im Minigolf funktioniert.",
    publishDate: "2025-05-10",
    sections: [
      { question: "Gibt es barrierefreie Minigolfanlagen?", answer: "Ja, einige Minigolfanlagen sind rollstuhlgerecht gestaltet. Besonders neuere Adventure-Golf-Anlagen und einige Indoor-Anlagen sind gut zugänglich. Fragen Sie vorab bei der Anlage nach.", content: "Barrierefreiheit wird im Freizeitsport immer wichtiger. Während ältere Minigolfanlagen oft nicht vollständig barrierefrei sind, berücksichtigen neuere Anlagen die Bedürfnisse von Menschen mit Mobilitätseinschränkungen. Adventure-Golf-Plätze haben den Vorteil breiterer Bahnen auf ebenem Gelände. Auch einige Indoor-Anlagen wie GATE99 sind stufenlos erreichbar." },
    ],
    relatedArticles: ["was-ist-minigolf", "minigolf-fuer-kinder", "minigolf-gruppenevents"],
    relatedCities: ["heidelberg", "mannheim"],
  },
  {
    slug: "beste-minigolf-apps",
    title: "Die besten Minigolf Apps & Scorecards",
    h1: "Die besten Minigolf Apps & Scorecards",
    metaDescription: "Minigolf Apps und digitale Scorecards: Die besten Apps zum Punkte zählen, Ergebnisse vergleichen und Minigolf-Spaß teilen.",
    category: "Regeln & Tipps",
    excerpt: "Digitale Helfer für den Minigolfplatz: Die besten Apps zum Punkte zählen und Ergebnisse teilen.",
    publishDate: "2025-05-12",
    sections: [
      { question: "Gibt es Apps zum Minigolf Punkte zählen?", answer: "Ja, es gibt mehrere kostenlose Apps für Minigolf-Scorecards. Die beliebtesten sind Mini Golf Score Card, Minigolf Tracker und 18Birdies (auch für Golf).", content: "Digitale Scorecards ersetzen zunehmend den klassischen Papierzettel. Die Vorteile: automatische Berechnung, Verlauf über mehrere Besuche, Vergleich mit Freunden und Teilen in sozialen Medien. Bei Ihrem nächsten Besuch bei Gartengolf Eppelheim können Sie direkt eine App testen und Ihre Ergebnisse digital festhalten." },
    ],
    relatedArticles: ["minigolf-regeln", "minigolf-technik-tipps", "was-ist-minigolf"],
    relatedCities: ["heidelberg"],
  },
  {
    slug: "garten-gemuetlich-gestalten-sitzplatz-beete-schatten",
    title: "Garten gemütlich gestalten: Sitzplatz, Beete & Schatten planen",
    h1: "Garten gemütlich gestalten: Ideen für Sitzplatz, Beete, Schatten und mehr Natur",
    metaDescription: "Garten gemütlich gestalten: praktische Ideen für Sitzplatz, Beete, Schatten, Wege, Essplatz und naturnahes Gärtnern in Eppelheim.",
    category: "Familie",
    excerpt: "Ein gemütlicher Garten entsteht durch gute Planung: Sitzplatz, Beete, Schatten, Wege, Licht und naturnahe Pflanzen sinnvoll kombinieren – Ideen für Eppelheim und die Rhein-Neckar-Region.",
    publishDate: "2026-05-26",
    sections: [
      {
        question: "Garten gemütlich gestalten: erst Nutzung klären, dann planen",
        answer: "Vor Möbeln, Pflanzen und Deko steht die Frage, wofür der Garten hauptsächlich da sein soll: Erholung, Essen im Freien, Familie, naturnahes Gärtnern oder Kleingarten. Aus dieser Nutzung ergeben sich Sitzplatz, Wege und Pflanzen.",
        content: "Viele Gartenbesitzer beginnen mit einzelnen Ideen: neue Stühle, Hochbeet, Sonnenschirm, Lichterkette, Staudenbeet oder kleiner Teich. Das ist verständlich, führt aber schnell zu einem unruhigen Gesamtbild. Besser ist die Frage, wofür der Garten hauptsächlich da sein soll. Für Erholung zählen ruhiger Sitzplatz, Sichtschutz, Schatten und bequeme Möbel. Für Essen im Freien sind ein stabiler Tisch, kurze Wege zur Küche, Licht und Wetterschutz wichtig. Familiengärten brauchen robuste Flächen, sichere Wege und flexible Sitzgelegenheiten. Naturnahe Gärten leben von heimischen Pflanzen, Blühflächen, einer Wasserstelle, Totholz und weniger Versiegelung. Kleingärten profitieren von einer praktischen Aufteilung mit Beeten, Kompost, Geräteplatz und gemeinschaftstauglicher Gestaltung. Der Landesverband der Gartenfreunde Baden-Württemberg zeigt, wie stark Kleingärten und Gartenvereine regional verankert sind."
      },
      {
        question: "Der Sitzplatz als Herzstück des Gartens",
        answer: "Der Sitzplatz entscheidet, ob der Garten wirklich genutzt wird. Er sollte angenehm, geschützt und gut erreichbar liegen – nicht zufällig irgendwo, sondern dort, wo man gerne verweilt.",
        content: "Ein guter Sitzplatz liegt mit angenehmem Blick, etwas Schutz vor Wind, nicht zu weit von Haus, Laube oder Gartenküche entfernt und möglichst nicht in der prallen Mittagssonne. In Eppelheim und im Raum Heidelberg sind die Sommer oft warm genug, um viele Stunden draußen zu verbringen. Deshalb sollte ein Sitzplatz nicht nur für den Sonntagnachmittag gedacht sein, sondern auch für den schnellen Kaffee, das Abendessen nach der Arbeit oder ein Gespräch mit Nachbarn. Besonders gemütlich wirken Sitzplätze, wenn sie nicht völlig frei im Raum stehen: Eine Hecke, ein Rankgitter, hohe Stauden, ein kleiner Baum oder ein Beet im Rücken geben dem Platz Halt, während der Blick offen bleibt."
      },
      {
        question: "Schatten macht den Garten alltagstauglich",
        answer: "Ohne Schatten wird selbst der schönste Garten im Hochsommer schnell unbequem. Sonnenschirm, Sonnensegel, Pergola, Bäume und Rankpflanzen lassen sich gut kombinieren – kurzfristig flexibel, langfristig natürlich.",
        content: "Ein Sonnenschirm ist die einfachste Lösung, aber nicht die einzige. Auch Bäume, Pergolen, Rankpflanzen, Sonnensegel oder begrünte Laubengänge können helfen. Natürlicher Schatten fühlt sich oft angenehmer an, braucht aber Zeit. Deshalb ist eine Kombination sinnvoll: kurzfristig Schirm oder Segel, langfristig Baum, Strauch oder Kletterpflanze. Für kleine Gärten eignen sich schlanke Bäume, Spalierobst oder Rankpflanzen besonders gut. Sie bringen Höhe in den Garten, ohne zu viel Fläche zu verbrauchen, und verbessern gleichzeitig das Mikroklima."
      },
      {
        question: "Beete als Rahmen für mehr Gemütlichkeit",
        answer: "Beete strukturieren den Garten und rahmen den Sitzplatz. Mischpflanzungen aus Stauden, Kräutern und kleinen Sträuchern wirken lebendiger als eine leere Fläche und brauchen mit den richtigen Pflanzen wenig Pflege.",
        content: "Ein Sitzplatz neben einem Beet wirkt sofort wohnlicher als eine Stuhlgruppe auf einer leeren Fläche. Besonders angenehm sind Mischpflanzungen aus Stauden, Kräutern, kleinen Sträuchern und saisonalen Blüten. Sie verändern sich im Laufe des Jahres und sorgen dafür, dass der Garten lebendig bleibt. Wer wenig Zeit hat, sollte pflegeleichte Stauden und robuste Kräuter wählen: Lavendel, Salbei, Thymian, Katzenminze, Frauenmantel, Sonnenhut, Fetthenne oder Ziergräser. Für naturnahes Gärtnern sind heimische Pflanzen besonders wertvoll, weil sie Insekten und Vögeln Nahrung bieten."
      },
      {
        question: "Wege, Licht und Wasser im Garten",
        answer: "Klare Wege, dezente Beleuchtung und etwas Wasser machen den Garten alltagstauglich. Wasserdurchlässige Beläge, warme Lichtpunkte und eine Regentonne oder Vogeltränke reichen oft schon aus.",
        content: "Ein Garten wirkt ruhiger, wenn die Wege klar sind – ob gerade oder geschwungen. Wichtig ist, dass man trockenen Fußes zum Sitzplatz, zum Kompost, zur Laube und zu den Beeten kommt. Wasserdurchlässige Materialien wie Kies, Splitt, Trittplatten oder Holzroste sind oft besser als komplett versiegelte Flächen. Gartenbeleuchtung darf zurückhaltend sein: wenige warme Lichtpunkte am Weg und am Sitzplatz reichen aus. Wasser macht den Garten zusätzlich angenehmer – schon eine Regentonne, eine Vogeltränke oder eine flache Wasserschale hilft Vögeln und Insekten und spart in trockenen Sommern Trinkwasser."
      },
      {
        question: "Mehr Natur statt zu viel Dekoration",
        answer: "Ein Garten wird nicht gemütlicher, wenn jede Ecke dekoriert ist. Natürliche Elemente wie alte Obstbäume, Wildblumenecken, Kompost und Totholz wirken stärker und bieten Lebensraum.",
        content: "Oft reicht es, natürliche Elemente stärker wirken zu lassen: ein alter Obstbaum, ein Kräuterbeet, eine Wildblumenecke, ein Kompostplatz, eine Wasserstelle, ein Stück Totholz oder ein kleiner Steinhaufen. Solche Elemente sehen nicht nur gut aus, sondern bieten auch Lebensraum. Besonders in dicht besiedelten Regionen wie dem Umfeld von Heidelberg, Eppelheim und Mannheim sind grüne Flächen wichtig. Private Gärten und Kleingärten können kleine Ausgleichsräume sein, in denen Natur wieder näher an den Alltag rückt."
      },
      {
        question: "Kleiner Garten, große Wirkung",
        answer: "Auch kleine Gärten können gemütlich sein – wenn nicht zu viele Funktionen gleichzeitig untergebracht werden. Ein guter Sitzplatz, wenige starke Pflanzen und schmale Beete am Rand reichen oft aus.",
        content: "Ein kleiner Garten braucht klare Prioritäten: ein guter Sitzplatz, wenige starke Pflanzen, Stauraum für Geräte und vielleicht ein Hochbeet. Große Möbel, zu viele Pflanzkübel und unruhige Dekoration lassen kleine Flächen schnell voll wirken. Für kleine Gärten eignen sich klappbare Möbel, stapelbare Stühle, schmale Pflanzregale, vertikale Rankhilfen und Beete entlang der Ränder. Wer Platz sparen möchte, kombiniert Stauraum und Sitzfläche, etwa mit einer Banktruhe."
      },
      {
        question: "Gemüse, Kräuter und Naschobst integrieren",
        answer: "Kräuter, Beeren und kleine Gemüseflächen machen den Garten lebendig. Hochbeete sorgen für Ordnung und sind bequem zu bearbeiten – ideal für Familien- und Kleingärten.",
        content: "Minze, Schnittlauch, Petersilie, Rosmarin oder Thymian in der Nähe des Sitzplatzes sind praktisch und duften angenehm. Erdbeeren, Johannisbeeren oder Himbeeren bringen Naschmomente in den Garten. Hochbeete sind besonders beliebt, weil sie Ordnung schaffen und bequem zu bearbeiten sind. Wichtig ist, sie nicht zu groß zu planen: Man sollte von allen Seiten gut an die Pflanzen kommen oder das Beet so schmal anlegen, dass die Mitte erreichbar bleibt."
      },
      {
        question: "Garten gemütlich machen im Jahreslauf",
        answer: "Ein guter Garten funktioniert nicht nur im Hochsommer. Mit Frühblühern, Sommerstauden, Herbstgräsern und immergrünen Sträuchern bleibt er ganzjährig attraktiv.",
        content: "Im Frühling braucht der Garten erste Sitzplätze in der Sonne, Frühblüher und vorbereitete Beete. Im Sommer stehen Schatten, Wasser und Ernte im Mittelpunkt. Im Herbst sorgen Gräser, Astern, Laubfarben und späte Kräuter für Stimmung. Im Winter können immergrüne Sträucher, schöne Strukturen und ein aufgeräumter Sitzplatz den Garten weiterhin attraktiv machen. Wer den Garten ganzjährig denkt, kauft weniger spontan und plant besser."
      },
      {
        question: "Regionale Idee für Eppelheim: Garten als Treffpunkt",
        answer: "Gärten sind in Eppelheim nicht nur private Rückzugsorte, sondern auch soziale Orte – zum Beispiel im Verein der Gartenfreunde Eppelheim. Gute Sitz- und Essbereiche machen den Garten zum Treffpunkt.",
        content: "Der Verein der Gartenfreunde Eppelheim ist auf der Website der Stadt Eppelheim als Verein gelistet. Das zeigt, wie stark Gartenkultur auch mit Vereinsleben, Austausch und Nachbarschaft verbunden ist. Ein gemütlicher Garten sollte deshalb nicht nur für Alleinsein geplant werden, sondern auch für Gespräche über den Zaun, gemeinsames Essen, kleine Feiern oder gegenseitige Hilfe. Gerade in einem Gartenverein ist das wichtig: Man gärtnert zwar auf der eigenen Parzelle, ist aber Teil einer größeren Gemeinschaft."
      },
      {
        question: "Welche Fehler sollte man bei der Gartengestaltung vermeiden?",
        answer: "Typische Fehler sind zu große Möbel, fehlender Schatten, zu viele verschiedene Materialien, unklare Wege, ungünstige Sitzplätze und Pflanzen, die nicht zum Standort passen. Besser ist eine einfache Planung mit wenigen starken Elementen.",
        content: "Ein gemütlicher Garten braucht keine perfekte Größe und kein großes Budget. Entscheidend sind klare Zonen, ein angenehmer Sitzplatz, passende Pflanzen, ausreichend Schatten, praktische Wege und ein wenig Licht für den Abend. Wer dann noch Natur zulässt, Wasser spart, heimische Pflanzen integriert und den Garten an die eigene Nutzung anpasst, schafft einen Ort, der mehr ist als eine gepflegte Fläche. Für Eppelheim und die Rhein-Neckar-Region gilt besonders: Gärten sind wertvolle grüne Räume zwischen Stadt, Alltag und Erholung."
      }
    ],
    relatedArticles: ["minigolf-fuer-kinder", "minigolf-kindergeburtstag", "minigolf-gruppenevents"],
    relatedCities: ["heidelberg", "mannheim"],
  },
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
