import { Link } from "react-router-dom";
import heroImage from "@/assets/minigolf-startseite.png.asset.json";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import FAQBlock from "@/components/FAQBlock";
import RegionLinks from "@/components/RegionLinks";
import MagazineTeaser from "@/components/MagazineTeaser";
import InfoSidebar from "@/components/InfoSidebar";
import RelatedVenues from "@/components/RelatedVenues";
import { articles } from "@/data/articles";
import { venues, getVenueBySlug } from "@/data/venues";

const venue = getVenueBySlug("gartengolf-eppelheim")!;

const sections = [
  { question: "Was ist das Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim ist ein traditioneller Minigolfplatz mit 18 gepflegten Betonbahnen in Eppelheim bei Heidelberg. Die Anlage besticht durch ihre idyllische Gartenatmosphäre und ist seit vielen Jahren ein beliebtes Ausflugsziel für Familien, Gruppen und Minigolf-Enthusiasten aus der gesamten Metropolregion Rhein-Neckar." },
  { question: "Wo befindet sich Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim liegt in der Kirchheimerstraße 90, 69214 Eppelheim. Die Gemeinde Eppelheim befindet sich direkt westlich von Heidelberg und südlich von Mannheim im Rhein-Neckar-Kreis. Die Anlage ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut erreichbar – die Straßenbahnlinie 22 hält in unmittelbarer Nähe." },
  { question: "Wie viele Bahnen hat Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim verfügt über 18 klassische Betonbahnen, die in einer gepflegten Gartenanlage angeordnet sind. Die Bahnen bieten verschiedene Schwierigkeitsgrade – von einfachen Geradeaus-Bahnen bis hin zu anspruchsvollen Kurven- und Hindernisbahnen. Sowohl Anfänger als auch erfahrene Spieler kommen auf ihre Kosten." },
  { question: "Welche Öffnungszeiten hat das Gartengolf Eppelheim?", answer: "Montag bis Freitag: 14:00–22:00 Uhr, Samstag: 11:00–22:00 Uhr, Sonn- und Feiertags: 10:00–22:00 Uhr." },
  { question: "Was kostet der Eintritt beim Gartengolf Eppelheim?", answer: "Die erste Runde kostet für Erwachsene 4,20 €, für Schüler, Studierende, Auszubildende und Rentner 3,70 € und für Kinder bis 14 Jahre 3,20 €. Weitere Runden sind vergünstigt (3,70 € / 3,20 € / 2,70 €). Es gibt 10er-Karten ab 26,00 € sowie eine 50er-Karte für Erwachsene (110,00 €)." },
  { question: "Wie kommt man zum Gartengolf Eppelheim?", answer: "Mit dem Auto erreichen Sie Gartengolf Eppelheim über die B535 oder die A5 (Ausfahrt Heidelberg/Schwetzingen). Kostenlose Parkplätze sind direkt an der Anlage vorhanden. Mit öffentlichen Verkehrsmitteln nehmen Sie die Straßenbahnlinie 22 Richtung Eppelheim – die Haltestelle liegt nur wenige Gehminuten entfernt." },
  { question: "Welche Minigolfvariante wird in Eppelheim gespielt?", answer: "Beim Gartengolf Eppelheim wird klassisches Minigolf auf genormten Betonbahnen gespielt. Diese Bahnvariante ist die in Deutschland am weitesten verbreitete und bietet durch feste Hindernisse wie Rampen, Tunnel und Kurven ein abwechslungsreiches Spielerlebnis für alle Altersgruppen." },
  { question: "Ist Gartengolf Eppelheim für Kindergeburtstage geeignet?", answer: "Ja, Gartengolf Eppelheim ist hervorragend für Kindergeburtstage geeignet. Die familienfreundliche Anlage bietet Kinderschläger, ausreichend Platz für Gruppen und eine sichere Umgebung. Gruppenreservierungen sind nach Voranmeldung möglich. Eine Runde Minigolf dauert etwa 45-60 Minuten und lässt sich ideal mit einem Picknick oder Kuchen kombinieren." },
  { question: "Welche ähnlichen Minigolfplätze gibt es in der Nähe von Eppelheim?", answer: "In der Nähe von Eppelheim finden sich zahlreiche weitere Minigolfanlagen: Gartengolf Schwetzingen (5 km), GATE99/Gleamgolf Heidelberg-Schwarzlicht (direkt in Eppelheim), OMA's Garten Heidelberg (8 km) und der Adventure Golf Hohenhardter Hof bei Wiesloch (15 km). Jede Anlage bietet ein eigenes Spielerlebnis." },
  { question: "Was macht Gartengolf Eppelheim besonders?", answer: "Gartengolf Eppelheim verbindet klassisches Minigolf mit einer einzigartigen Gartenatmosphäre. Die gepflegte Anlage mit schattenspendenden Bäumen, die zentrale Lage zwischen Heidelberg und Schwetzingen sowie die günstigen Preise machen den Platz zu einem der beliebtesten Minigolf-Ausflugsziele in der Metropolregion Rhein-Neckar." },
];

const faqItems = sections.map((s) => ({ question: s.question, answer: s.answer }));

const relatedVenues = venues.filter((v) => v.slug !== "gartengolf-eppelheim").slice(0, 4);

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Gartengolf Eppelheim",
  description: venue.description,
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
  numberOfRooms: 18,
};

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="⛳ Gartengolf Eppelheim – Minigolf-Spaß bei Heidelberg"
        description="🏌️ Gartengolf Eppelheim: 18 Bahnen Minigolf-Vergnügen für Familien & Gruppen ✓ Günstige Preise ✓ Idyllische Gartenanlage ✓ Jetzt entdecken!"
        canonical="/"
        jsonLd={localBusinessJsonLd}
      />

      <HeroSection
        title="Gartengolf Eppelheim – Minigolf für die ganze Familie"
        subtitle="Minigolf im Herzen der Metropolregion Rhein-Neckar"
        cta1={{ label: "Öffnungszeiten", to: "#oeffnungszeiten" }}
        cta2={{ label: "Anfahrt & Lage", to: "/anfahrt" }}
      />

      {/* Hero Image */}
      <section className="w-full">
        <img
          src={heroImage.url}
          alt="Minigolfanlage Gartengolf Eppelheim mit gepflegten Bahnen und idyllischer Gartenatmosphäre"
          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          loading="eager"
        />
      </section>

      {/* Feature Cards */}
      <section id="oeffnungszeiten" className="container-page py-12">
        <h2 className="text-2xl md:text-3xl mb-8">Über den Platz</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: "🕐",
              title: "Öffnungszeiten",
              lines: ["Mo–Fr: 14:00–22:00 Uhr", "Sa: 11:00–22:00 Uhr", "So/Feiertage: 10:00–22:00 Uhr"],
            },
            {
              icon: "💰",
              title: "Preise",
              lines: ["Erwachsene: 4,20 € (1. Runde)", "Schüler/Studenten/Rentner: 3,70 €", "Kinder bis 14: 3,20 €", "10er-Karte ab 26,00 €"],
              link: "/preise",
            },
            {
              icon: "📍",
              title: "Anfahrt",
              lines: ["Kirchheimerstraße 90", "69214 Eppelheim", "Kostenlose Parkplätze vorhanden"],
              link: "/anfahrt",
            },
          ].map((card) => {
            const inner = (
              <div key={card.title} className="bg-card rounded-lg border p-6 card-shadow text-center hover:border-primary/40 transition-colors">
                <span className="text-4xl mb-3 block">{card.icon}</span>
                <h3 className="font-semibold text-lg mb-3">{card.title}</h3>
                <ul className="text-sm text-muted-foreground divide-y divide-border">
                  {card.lines.map((line) => (
                    <li key={line} className="py-2">{line}</li>
                  ))}
                </ul>
              </div>
            );
            return card.link ? (
              <Link key={card.title} to={card.link} className="block">{inner}</Link>
            ) : (
              <div key={card.title}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Google Maps */}
      <section className="container-page">
        <div className="rounded-xl overflow-hidden border card-shadow mb-8 aspect-[3/1]">
          <iframe
            title="Gartengolf Eppelheim auf Google Maps"
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(venue.address)}&zoom=15`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Detailed Content + Sidebar */}
      <section id="platz-infos" className="container-page py-8">
        <h2 className="text-2xl md:text-3xl mb-8">Gartengolf Eppelheim: Der klassische Minigolfplatz nahe Heidelberg</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {sections.map((s, i) => (
              <section key={i}>
                <h3 className="text-xl md:text-2xl mb-3">{s.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.answer}</p>
              </section>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <InfoSidebar venue={venue} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="container-page">
        <FAQBlock title="Häufige Fragen zu Gartengolf Eppelheim" items={faqItems} />
      </div>

      {/* Related Venues */}
      <div className="container-page">
        <RelatedVenues venues={relatedVenues} title="Ähnliche Minigolfplätze in der Nähe von Eppelheim" />
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
            to="/anfahrt"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Anfahrt & Kontakt
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
