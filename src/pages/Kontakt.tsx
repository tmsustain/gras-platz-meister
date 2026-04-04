import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";

const Kontakt = () => (
  <>
    <SEOHead title="Kontakt – Gartengolf Eppelheim" description="Kontaktieren Sie Gartengolf Eppelheim: Adresse, Anfahrt und Kontaktmöglichkeiten für Ihren Minigolf-Besuch." canonical="/kontakt" />
    <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Kontakt" }]} />
    <div className="container-page py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl mb-6">Kontakt</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border rounded-lg p-6 card-shadow">
          <h2 className="text-xl font-semibold mb-3">📍 Adresse</h2>
          <p className="text-muted-foreground">Gartengolf Eppelheim<br />Kirchheimerstraße 90<br />69214 Eppelheim</p>
        </div>
        <div className="bg-card border rounded-lg p-6 card-shadow">
          <h2 className="text-xl font-semibold mb-3">🕐 Öffnungszeiten</h2>
          <table className="w-full text-sm text-muted-foreground">
            <tbody>
              <tr className="border-b border-border/50"><td className="py-1.5">Mo–Fr</td><td className="text-right">14:00–19:00 Uhr</td></tr>
              <tr className="border-b border-border/50"><td className="py-1.5">Sa/So/Feiertage</td><td className="text-right">11:00–19:00 Uhr</td></tr>
              <tr className="border-b border-border/50"><td className="py-1.5">Schlägerausgabe</td><td className="text-right">bis 18:00 Uhr</td></tr>
              <tr><td className="py-1.5">BW-Ferien</td><td className="text-right">täglich ab 11:00 Uhr</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <FAQBlock items={[
        { question: "Wie erreiche ich Gartengolf Eppelheim?", answer: "Die Anlage liegt in der Kirchheimerstraße 90, 69214 Eppelheim. Mit dem Auto über die B535 oder A5 (Ausfahrt Heidelberg/Schwetzingen). Kostenlose Parkplätze vorhanden." },
        { question: "Kann ich Gruppen oder Kindergeburtstage anmelden?", answer: "Ja, Gruppenreservierungen und Kindergeburtstage sind nach Voranmeldung möglich. Kontaktieren Sie uns für individuelle Angebote und Terminabsprachen." },
      ]} />
    </div>
  </>
);
export default Kontakt;
