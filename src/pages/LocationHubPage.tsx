import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import InfoSidebar from "@/components/InfoSidebar";
import RelatedVenues from "@/components/RelatedVenues";
import MagazineTeaser from "@/components/MagazineTeaser";
import { venues, getVenueBySlug } from "@/data/venues";
import { articles } from "@/data/articles";

const venue = getVenueBySlug("gartengolf-eppelheim")!;

const sections = [
  { question: "Was ist das Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim ist ein traditioneller Minigolfplatz mit 18 gepflegten Betonbahnen in Eppelheim bei Heidelberg. Die Anlage besticht durch ihre idyllische Gartenatmosphäre und ist seit vielen Jahren ein beliebtes Ausflugsziel für Familien, Gruppen und Minigolf-Enthusiasten aus der gesamten Metropolregion Rhein-Neckar." },
  { question: "Wo befindet sich Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim liegt in der Kirchheimerstraße 90, 69214 Eppelheim. Die Gemeinde Eppelheim befindet sich direkt westlich von Heidelberg und südlich von Mannheim im Rhein-Neckar-Kreis. Die Anlage ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut erreichbar – die Straßenbahnlinie 22 hält in unmittelbarer Nähe." },
  { question: "Wie viele Bahnen hat Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim verfügt über 18 klassische Betonbahnen, die in einer gepflegten Gartenanlage angeordnet sind. Die Bahnen bieten verschiedene Schwierigkeitsgrade – von einfachen Geradeaus-Bahnen bis hin zu anspruchsvollen Kurven- und Hindernisbahnen. Sowohl Anfänger als auch erfahrene Spieler kommen auf ihre Kosten." },
  { question: "Welche Öffnungszeiten hat das Gartengolf Eppelheim?", answer: "Montag bis Freitag: 14:00–19:00 Uhr, Samstag/Sonntag/Feiertage: 11:00–19:00 Uhr. Die Schlägerausgabe endet jeweils um 18:00 Uhr. In den Baden-Württemberg-Schulferien ist täglich ab 11:00 Uhr geöffnet." },
  { question: "Was kostet der Eintritt beim Gartengolf Eppelheim?", answer: "Die erste Runde kostet für Erwachsene 6,00 €, für Kinder, Studenten und Senioren ab 65 Jahren 5,00 €. Weitere Runden sind vergünstigt (5,00 € bzw. 4,00 €). Es gibt 10er-Karten (ab 43,00 €), 50er-Karten (245,00 €) und Saisonkarten (ab 120,00 €)." },
  { question: "Wie kommt man zum Gartengolf Eppelheim?", answer: "Mit dem Auto erreichen Sie Gartengolf Eppelheim über die B535 oder die A5 (Ausfahrt Heidelberg/Schwetzingen). Kostenlose Parkplätze sind direkt an der Anlage vorhanden. Mit öffentlichen Verkehrsmitteln nehmen Sie die Straßenbahnlinie 22 Richtung Eppelheim – die Haltestelle liegt nur wenige Gehminuten entfernt." },
  { question: "Welche Minigolfvariante wird in Eppelheim gespielt?", answer: "Beim Gartengolf Eppelheim wird klassisches Minigolf auf genormten Betonbahnen gespielt. Diese Bahnvariante ist die in Deutschland am weitesten verbreitete und bietet durch feste Hindernisse wie Rampen, Tunnel und Kurven ein abwechslungsreiches Spielerlebnis für alle Altersgruppen." },
  { question: "Ist Gartengolf Eppelheim für Kindergeburtstage geeignet?", answer: "Ja, Gartengolf Eppelheim ist hervorragend für Kindergeburtstage geeignet. Die familienfreundliche Anlage bietet Kinderschläger, ausreichend Platz für Gruppen und eine sichere Umgebung. Gruppenreservierungen sind nach Voranmeldung möglich. Eine Runde Minigolf dauert etwa 45-60 Minuten und lässt sich ideal mit einem Picknick oder Kuchen kombinieren." },
  { question: "Welche ähnlichen Minigolfplätze gibt es in der Nähe von Eppelheim?", answer: "In der Nähe von Eppelheim finden sich zahlreiche weitere Minigolfanlagen: Gartengolf Schwetzingen (5 km), GATE99/Gleamgolf Heidelberg-Schwarzlicht (direkt in Eppelheim), OMA's Garten Heidelberg (8 km) und der Adventure Golf Hohenhardter Hof bei Wiesloch (15 km). Jede Anlage bietet ein eigenes Spielerlebnis." },
  { question: "Was macht Gartengolf Eppelheim besonders?", answer: "Gartengolf Eppelheim verbindet klassisches Minigolf mit einer einzigartigen Gartenatmosphäre. Die gepflegte Anlage mit schattenspendenden Bäumen, die zentrale Lage zwischen Heidelberg und Schwetzingen sowie die günstigen Preise machen den Platz zu einem der beliebtesten Minigolf-Ausflugsziele in der Metropolregion Rhein-Neckar." },
];

const faqItems = sections.map((s) => ({ question: s.question, answer: s.answer }));

const relatedVenues = venues.filter((v) => v.slug !== "gartengolf-eppelheim").slice(0, 4);

const LocationHubPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: "Gartengolf Eppelheim",
    description: venue.description,
    address: { "@type": "PostalAddress", streetAddress: "Kirchheimerstraße 90", addressLocality: "Eppelheim", postalCode: "69214", addressCountry: "DE" },
    geo: { "@type": "GeoCoordinates", latitude: 49.3975, longitude: 8.6331 },
    url: "https://gartengolf-eppelheim.de/gartengolf-eppelheim",
    sport: "Minigolf",
    numberOfRooms: 18,
  };

  return (
    <>
      <SEOHead
        title="Gartengolf Eppelheim – Minigolfplatz Kirchheimerstraße 90 | Öffnungszeiten & Preise"
        description="Gartengolf Eppelheim: 18-Bahnen-Minigolfplatz in idyllischer Gartenatmosphäre. Alle Infos zu Öffnungszeiten, Preisen, Anfahrt und Veranstaltungen."
        canonical="/gartengolf-eppelheim"
        jsonLd={jsonLd}
      />
      <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Gartengolf Eppelheim" }]} />

      <div className="container-page py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">Gartengolf Eppelheim: Der klassische Minigolfplatz nahe Heidelberg</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl mb-3">{s.question}</h2>
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

        <FAQBlock title="Häufige Fragen zu Gartengolf Eppelheim" items={faqItems} />
        <RelatedVenues venues={relatedVenues} title="Ähnliche Minigolfplätze in der Nähe von Eppelheim" />
        <MagazineTeaser articles={articles.slice(0, 3)} />
      </div>
    </>
  );
};

export default LocationHubPage;
