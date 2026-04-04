import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";

const rules = [
  {
    number: 1,
    title: "Spielablauf",
    text: "Eine Runde umfasst alle 18 Bahnen der Anlage. Ziel ist es, sämtliche Bahnen mit so wenigen Schlägen wie möglich zu absolvieren. Am Ende werden alle Schläge zusammengezählt – die niedrigste Punktzahl gewinnt.",
  },
  {
    number: 2,
    title: "Grundregel",
    text: "Der Ball muss von der markierten Abschlagstelle geschlagen werden und unter Überwindung aller Hindernisse ins Zielloch befördert werden.",
  },
  {
    number: 3,
    title: "Weiterspielen",
    text: "Nach jedem Schlag wird der Ball grundsätzlich dort weitergespielt, wo er zum Liegen kommt.",
  },
  {
    number: 4,
    title: "Zweite Abschlagstelle",
    text: "Falls sich hinter einem Hindernis eine zweite Abschlagmarkierung befindet, muss der Ball zunächst direkt von der ersten Markierung über das Hindernis gespielt werden. Gelingt dies nach drei Versuchen nicht, darf an der zweiten Markierung weitergespielt werden – allerdings wird ein Strafpunkt zu den bisherigen drei Schlägen addiert.",
  },
  {
    number: 5,
    title: "Ball außerhalb der Bahn",
    text: "Verlässt der Ball die Bahn, wird er an der Stelle zurückgelegt, an der er die Bahn verlassen hat, und es gibt einen Strafpunkt. Liegt der Ball direkt an der Bande, darf er 15 cm in die Bahn hinein versetzt werden, um einen fairen Schlag zu ermöglichen.",
  },
  {
    number: 6,
    title: "Maximale Schlagzahl",
    text: "Pro Bahn stehen maximal sieben Schläge zur Verfügung. Befindet sich der Ball danach nicht im Loch, ist die Bahn beendet und es werden acht Punkte in die Scorekarte eingetragen.",
  },
  {
    number: 7,
    title: "Haftung",
    text: "Jeder Spieler ist für den sorgsamen Umgang mit Schläger und Ball selbst verantwortlich. Bitte behandelt die Ausrüstung und die Anlage pfleglich.",
  },
];

const Spielregeln = () => {
  const breadcrumbItems = [
    { label: "Startseite", to: "/" },
    { label: "Spielregeln" },
  ];

  return (
    <>
      <SEOHead
        title="Spielregeln – Gartengolf Eppelheim | Minigolf Regeln einfach erklärt"
        description="Die offiziellen Spielregeln beim Gartengolf Eppelheim: Ablauf, Schlagzahl, Strafpunkte und Tipps für Anfänger – einfach und verständlich erklärt."
        canonical="/spielregeln"
      />
      <div className="container-page py-10">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Spielregeln – Gartengolf Eppelheim</h1>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          Minigolf ist einfach zu lernen und macht allen Altersgruppen Spaß. Hier sind die wichtigsten
          Regeln, damit ihr bestens vorbereitet auf die 18 Bahnen bei Gartengolf Eppelheim starten könnt.
        </p>

        <div className="max-w-2xl space-y-6">
          {rules.map((rule) => (
            <div key={rule.number} className="bg-card rounded-lg border p-6 card-shadow">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {rule.number}
                </span>
                <div>
                  <h2 className="font-semibold text-lg mb-2">{rule.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rule.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/50 rounded-lg p-6 max-w-2xl">
          <h2 className="font-semibold text-lg mb-2">💡 Tipp für Anfänger</h2>
          <p className="text-sm text-muted-foreground">
            Nehmt euch Zeit für jeden Schlag und beobachtet die Bahn genau, bevor ihr spielt.
            Leichtes, kontrolliertes Schlagen ist oft effektiver als volle Kraft. Und das Wichtigste:
            Habt Spaß – es geht um das gemeinsame Erlebnis!
          </p>
        </div>
      </div>
    </>
  );
};

export default Spielregeln;
