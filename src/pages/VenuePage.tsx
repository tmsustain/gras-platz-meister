import { useParams, Navigate, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import InfoSidebar from "@/components/InfoSidebar";
import RelatedVenues from "@/components/RelatedVenues";
import MagazineTeaser from "@/components/MagazineTeaser";
import { getVenueBySlug, venues } from "@/data/venues";
import { articles } from "@/data/articles";

const VenuePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const venue = getVenueBySlug(slug || "");
  if (!venue) return <Navigate to="/404" replace />;

  const sections = [
    { question: `Was ist ${venue.name}?`, answer: venue.description.slice(0, 200) + "." },
    { question: `Wo liegt ${venue.name}?`, answer: `${venue.name} befindet sich in ${venue.address}. Die Anlage liegt in ${venue.city} in der Metropolregion Rhein-Neckar und ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut erreichbar.` },
    { question: `Welche Bahnen/Angebote hat ${venue.name}?`, answer: `${venue.name} bietet ${venue.holes || "mehrere"} ${venue.type === "Schwarzlicht" ? "spektakulär beleuchtete Schwarzlicht-Bahnen" : venue.type === "Adventure Golf" ? "naturnahe Adventure-Golf-Bahnen auf Kunstrasen" : "klassische Minigolfbahnen"} für Spieler aller Altersgruppen. ${venue.features.join(", ")} gehören zu den Highlights der Anlage.` },
    { question: `Was kostet ${venue.name}?`, answer: `Der Eintritt bei ${venue.name} beträgt ${venue.priceAdult || "ca. 5-13 €"} für Erwachsene und ${venue.priceChild || "ca. 3-10 €"} für Kinder. Schläger und Bälle sind im Preis enthalten. Gruppenrabatte sind auf Anfrage möglich.` },
    { question: `Für wen ist ${venue.name} geeignet?`, answer: `${venue.name} eignet sich hervorragend für Familien mit Kindern, Freundesgruppen, Paare und Firmenausflüge. Die Anlage bietet ein abwechslungsreiches Erlebnis für alle Altersgruppen und Erfahrungsstufen.` },
    { question: `Wie kommt man zu ${venue.name}?`, answer: `${venue.name} in ${venue.address} ist gut erreichbar. Parkplätze sind in der Nähe vorhanden. Für die genaue Anfahrt empfehlen wir die Nutzung eines Navigationsgeräts oder einer Karten-App.` },
    { question: `Was sind Besonderheiten von ${venue.name}?`, answer: `Besondere Merkmale von ${venue.name}: ${venue.features.join(", ")}. Die Anlage in ${venue.city} bietet ein ${venue.type === "Schwarzlicht" ? "immersives Schwarzlicht-Erlebnis" : venue.type === "Adventure Golf" ? "naturnahes Adventure-Golf-Abenteuer" : "klassisches Minigolf-Vergnügen"} in der Metropolregion Rhein-Neckar.` },
  ];

  const relatedVenues = venues.filter((v) => v.slug !== venue.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: venue.name,
    description: venue.description,
    address: { "@type": "PostalAddress", streetAddress: venue.address.split(",")[0], addressLocality: venue.city, postalCode: venue.postalCode, addressCountry: "DE" },
    sport: "Minigolf",
    ...(venue.lat && venue.lng ? { geo: { "@type": "GeoCoordinates", latitude: venue.lat, longitude: venue.lng } } : {}),
  };

  return (
    <>
      <SEOHead
        title={`⛳ ${venue.name} – Minigolf ${venue.city} | Preise & Infos`}
        description={`🎯 ${venue.name} in ${venue.city}: ${venue.shortDescription} ✓ Preise ✓ Öffnungszeiten ✓ Anfahrt – Jetzt alle Infos!`}
        canonical={`/minigolf-platz/${venue.slug}`}
        jsonLd={jsonLd}
      />
      <Breadcrumb items={[
        { label: "Startseite", href: "/" },
        { label: `Minigolf ${venue.city}`, href: `/minigolf/${venue.citySlug}` },
        { label: venue.name },
      ]} />

      <div className="container-page py-8">
        {/* Venue Hero */}
        <div className="bg-gradient-to-br from-primary/10 to-accent rounded-xl p-8 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">{venue.name}: Minigolfanlage in {venue.city}</h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="px-3 py-1 bg-card rounded-full text-sm font-medium">{venue.type}</span>
                {venue.rating && <span className="text-secondary font-bold">★ {venue.rating.toFixed(1)}</span>}
                {venue.holes && <span className="text-sm text-muted-foreground">{venue.holes} Bahnen</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        {venue.lat && venue.lng && (
          <div className="rounded-xl overflow-hidden border card-shadow mb-8 aspect-[3/1]">
            <iframe
              title={`${venue.name} auf Google Maps`}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(venue.address)}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
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

        <FAQBlock items={sections.map((s) => ({ question: s.question, answer: s.answer }))} />
        <RelatedVenues venues={relatedVenues} />
        <MagazineTeaser articles={articles.slice(0, 2)} />
      </div>
    </>
  );
};

export default VenuePage;
