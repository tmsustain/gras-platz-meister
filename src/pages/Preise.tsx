import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";

const Preise = () => {
  const breadcrumbItems = [
    { label: "Startseite", to: "/" },
    { label: "Preise" },
  ];

  return (
    <>
      <SEOHead
        title="Preise – Gartengolf Eppelheim | Minigolf Eintrittspreise"
        description="Alle Preise für Gartengolf Eppelheim auf einen Blick: Einzelrunden, 10er-Karten, 50er-Karten und Saisonkarten für Erwachsene, Kinder, Studenten und Senioren."
        canonical="/preise"
      />
      <div className="container-page py-10">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Preise – Gartengolf Eppelheim</h1>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          Hier finden Sie alle aktuellen Eintrittspreise für den Gartengolf Eppelheim.
          Ob Einzelrunde, Mehrfachkarte oder Saisonkarte – für jeden ist das passende Angebot dabei.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {/* Kinder / Studenten / Senioren */}
          <div className="bg-card rounded-lg border card-shadow overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-primary-foreground">
                Kinder, Studenten &amp; Senioren &gt; 65 Jahre
              </h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Erste Runde", "5,00 €"],
                  ["Weitere Runde", "4,00 €"],
                  ["10er-Karte", "43,00 €"],
                  ["Saisonkarte", "120,00 €"],
                ].map(([label, price], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-3 text-muted-foreground">{label}</td>
                    <td className="px-6 py-3 text-right font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Erwachsene */}
          <div className="bg-card rounded-lg border card-shadow overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-primary-foreground">Erwachsene</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Erste Runde", "6,00 €"],
                  ["Weitere Runde", "5,00 €"],
                  ["10er-Karte", "50,00 €"],
                  ["50er-Karte", "245,00 €"],
                  ["Saisonkarte", "150,00 €"],
                ].map(([label, price], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-3 text-muted-foreground">{label}</td>
                    <td className="px-6 py-3 text-right font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Alle Preise inkl. Leihschläger und Ball. Änderungen vorbehalten.
        </p>
      </div>
    </>
  );
};

export default Preise;
