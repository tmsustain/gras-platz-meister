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
        title="💰 Preise – Gartengolf Eppelheim | Ab 3,20 € pro Runde"
        description="⛳ Minigolf Preise Gartengolf Eppelheim: Einzelrunde ab 3,20 € ✓ 10er-Karten ✓ 50er-Karte ✓ Kinder, Schüler, Studierende & Rentner günstiger!"
        canonical="/preise"
      />
      <div className="container-page py-10">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Preise – Gartengolf Eppelheim</h1>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          Hier finden Sie alle aktuellen Eintrittspreise für den Gartengolf Eppelheim.
          Ob Einzelrunde, Mehrfachkarte oder Saisonkarte – für jeden ist das passende Angebot dabei.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {/* Erwachsene */}
          <div className="bg-card rounded-lg border card-shadow overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-primary-foreground">Erwachsene</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Erste Runde", "4,20 €"],
                  ["Weitere Runde", "3,70 €"],
                  ["10er-Karte", "34,00 €"],
                  ["50er-Karte", "110,00 €"],
                ].map(([label, price], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-3 text-muted-foreground">{label}</td>
                    <td className="px-6 py-3 text-right font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Schüler / Studierende / Auszubildende / Rentner */}
          <div className="bg-card rounded-lg border card-shadow overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-primary-foreground">
                Schüler, Studierende, Auszubildende &amp; Rentner
              </h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Erste Runde", "3,70 €"],
                  ["Weitere Runde", "3,20 €"],
                  ["10er-Karte", "30,00 €"],
                ].map(([label, price], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="px-6 py-3 text-muted-foreground">{label}</td>
                    <td className="px-6 py-3 text-right font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Kinder bis 14 Jahre */}
          <div className="bg-card rounded-lg border card-shadow overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-lg font-bold text-primary-foreground">Kinder bis 14 Jahre</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Erste Runde", "3,20 €"],
                  ["Weitere Runde", "2,70 €"],
                  ["10er-Karte", "26,00 €"],
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
