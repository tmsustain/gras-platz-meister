import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import FAQBlock from "@/components/FAQBlock";
import RegionLinks from "@/components/RegionLinks";
import MagazineTeaser from "@/components/MagazineTeaser";
import { articles } from "@/data/articles";

const homeFAQ = [
  { question: "Was ist Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim ist ein traditioneller Outdoor-Minigolfplatz mit 18 gepflegten Betonbahnen in idyllischer Gartenatmosphäre in Eppelheim bei Heidelberg. Die Anlage ist ein beliebtes Ausflugsziel für Familien und Gruppen." },
  { question: "Wo liegt Gartengolf Eppelheim genau?", answer: "Gartengolf Eppelheim befindet sich in der Kirchheimerstraße 90, 69214 Eppelheim. Die Anlage liegt verkehrsgünstig zwischen Heidelberg und Schwetzingen in der Metropolregion Rhein-Neckar." },
  { question: "Wann hat Gartengolf Eppelheim geöffnet?", answer: "Gartengolf Eppelheim hat von April bis September täglich von 10:00 bis 20:00 Uhr geöffnet. In den Wintermonaten Oktober bis März ist die Anlage samstags und sonntags von 11:00 bis 17:00 Uhr zugänglich." },
  { question: "Was kostet Minigolf in Eppelheim?", answer: "Die erste Runde kostet für Erwachsene 6,00 €, für Kinder, Studenten und Senioren ab 65 Jahren 5,00 €. Weitere Runden sind vergünstigt. Es gibt 10er-Karten und Saisonkarten." },
  { question: "Ist Gartengolf Eppelheim für Kinder geeignet?", answer: "Ja, Gartengolf Eppelheim ist sehr familienfreundlich. Kinderschläger sind vorhanden, die Bahnen sind für alle Altersgruppen geeignet und die Gartenanlage bietet eine sichere und angenehme Umgebung." },
  { question: "Kann man bei Gartengolf Eppelheim Geburtstag feiern?", answer: "Ja, Kindergeburtstage und Gruppenevents sind bei Gartengolf Eppelheim herzlich willkommen. Gruppenreservierungen sind nach Voranmeldung möglich und es gibt ausreichend Platz für Feiern." },
  { question: "Gibt es Parkplätze beim Gartengolf Eppelheim?", answer: "Ja, direkt an der Anlage stehen kostenlose Parkplätze zur Verfügung. Die Anlage ist auch gut mit öffentlichen Verkehrsmitteln erreichbar – die nächste Straßenbahnhaltestelle liegt wenige Gehminuten entfernt." },
  { question: "Was unterscheidet Gartengolf Eppelheim von anderen Minigolfplätzen?", answer: "Gartengolf Eppelheim besticht durch seine idyllische Gartenatmosphäre, die gepflegten Betonbahnen und die zentrale Lage zwischen Heidelberg und Schwetzingen. Die familiäre Atmosphäre macht den Platz einzigartig." },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Gartengolf Eppelheim",
  description: "Traditioneller Minigolfplatz mit 18 Bahnen in idyllischer Gartenatmosphäre in Eppelheim bei Heidelberg.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kirchheimerstraße 90",
    addressLocality: "Eppelheim",
    postalCode: "69214",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.3975, longitude: 8.6331 },
  url: "https://gartengolf-eppelheim.de",
  sport: "Minigolf",
  openingHours: "Mo-Su 10:00-20:00",
  priceRange: "€",
};

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Gartengolf Eppelheim – Minigolf in der Metropolregion Rhein-Neckar"
        description="Gartengolf Eppelheim: Traditioneller Minigolfplatz bei Heidelberg. Alle Infos zu Öffnungszeiten, Preisen & Minigolfplätzen in der Region."
        canonical="/"
        jsonLd={localBusinessJsonLd}
      />

      <HeroSection
        title="Gartengolf Eppelheim – Minigolf für die ganze Familie"
        subtitle="Minigolf im Herzen der Metropolregion Rhein-Neckar"
        cta1={{ label: "Zum Platz", to: "/gartengolf-eppelheim" }}
        cta2={{ label: "Minigolf in der Region", to: "/minigolf/heidelberg" }}
      />

      {/* Feature Cards */}
      <section className="container-page py-12">
        <h2 className="text-2xl md:text-3xl mb-8">Über den Platz</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "🕐", title: "Öffnungszeiten", desc: "April–September: täglich 10–20 Uhr. Oktober–März: Sa/So 11–17 Uhr." },
            { icon: "💰", title: "Preise", desc: "Erwachsene: 6,00 € (1. Runde) · Kinder/Studenten/Senioren: 5,00 € (1. Runde) · 10er-Karte ab 43,00 €" },
            { icon: "📍", title: "Anfahrt", desc: "Kirchheimerstraße 90, 69214 Eppelheim. Kostenlose Parkplätze vorhanden." },
          ].map((card) => (
            <div key={card.title} className="bg-card rounded-lg border p-6 card-shadow text-center">
              <span className="text-4xl mb-3 block">{card.icon}</span>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="container-page">
        <FAQBlock title="Häufige Fragen zu Gartengolf Eppelheim" items={homeFAQ} />
      </div>

      {/* Region Links */}
      <div className="container-page">
        <RegionLinks title="Minigolf in der Region Heidelberg/Mannheim" />
      </div>

      {/* Magazine Teaser */}
      <div className="container-page">
        <MagazineTeaser articles={articles.slice(0, 3)} title="Aus dem Minigolf-Magazin" />
      </div>

      {/* CTA Banner */}
      <section className="hero-gradient text-primary-foreground py-12 mt-12">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary-foreground">Jetzt besuchen</h2>
          <p className="opacity-90 mb-4">Kirchheimerstraße 90, 69214 Eppelheim</p>
          <Link
            to="/gartengolf-eppelheim"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Alle Infos zum Platz
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
