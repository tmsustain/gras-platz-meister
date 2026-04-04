import { useParams, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import VenueCard from "@/components/VenueCard";
import RegionLinks from "@/components/RegionLinks";
import MagazineTeaser from "@/components/MagazineTeaser";
import { getCityBySlug } from "@/data/cities";
import { getVenuesByCity, venues } from "@/data/venues";
import { articles } from "@/data/articles";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");
  if (!city) return <Navigate to="/404" replace />;

  const cityVenues = getVenuesByCity(city.slug);
  // Also show venues from nearby that mention this city
  const allRelevant = cityVenues.length > 0 ? cityVenues : venues.slice(0, 3);

  const faqItems = [
    { question: `Wie viele Minigolfplätze gibt es in ${city.name}?`, answer: `In ${city.name} und der näheren Umgebung gibt es ${allRelevant.length} Minigolfanlagen verschiedener Typen – von klassischem Outdoor-Minigolf über Schwarzlicht-Minigolf bis hin zu Adventure Golf.` },
    { question: `Was kostet Minigolf in ${city.name}?`, answer: `Die Preise für Minigolf in ${city.name} variieren je nach Anlage. Klassisches Outdoor-Minigolf kostet 3-6 Euro für Erwachsene, Indoor- und Schwarzlicht-Minigolf liegt bei 9-13 Euro pro Person.` },
    { question: `Welcher Minigolfplatz in ${city.name} ist für Kinder am besten?`, answer: `Für Familien mit Kindern eignen sich besonders die Outdoor-Anlagen in und um ${city.name}. Diese bieten Kinderschläger, einfachere Bahnen und eine entspannte Atmosphäre zum günstigen Preis.` },
    { question: `Gibt es Indoor-Minigolf in ${city.name}?`, answer: `In ${city.name} und der Metropolregion Rhein-Neckar gibt es mehrere Indoor-Minigolf-Anlagen, darunter Schwarzlicht-Minigolf-Anlagen mit 3D-Effekten – ideal für Regentage und ganzjähriges Spielvergnügen.` },
    { question: `Welcher Minigolfplatz in ${city.name} eignet sich für Gruppen?`, answer: `Die meisten Minigolfanlagen in ${city.name} heißen Gruppen willkommen. Für Firmenevents und größere Gruppen empfehlen sich besonders die Indoor-Anlagen, die wetterunabhängig sind und oft Event-Pakete anbieten.` },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Minigolf in ${city.name}`,
      description: city.description,
      address: { "@type": "PostalAddress", addressLocality: city.name, addressCountry: "DE" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Minigolfplätze in ${city.name}`,
      itemListElement: allRelevant.map((v, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: v.name,
        url: `https://gartengolf-eppelheim.de/minigolf-platz/${v.slug}`,
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title={`Minigolf ${city.name} – Alle ${allRelevant.length} Minigolfplätze & Anlagen ${new Date().getFullYear()}`}
        description={`Alle Minigolfplätze in ${city.name} auf einen Blick – Adressen, Öffnungszeiten, Preise und Tipps für Familien, Gruppen & Schulklassen.`}
        canonical={`/minigolf/${city.slug}`}
        jsonLd={jsonLd}
      />
      <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: `Minigolf ${city.name}` }]} />

      <div className="container-page py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">Minigolf in {city.name}: Die besten Anlagen im Überblick</h1>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">{city.description}</p>

        {/* Venue Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {allRelevant.map((v) => (
            <VenueCard key={v.slug} venue={v} />
          ))}
        </div>

        <FAQBlock title={`Häufige Fragen: Minigolf in ${city.name}`} items={faqItems} />

        <RegionLinks
          excludeSlug={city.slug}
          limitSlugs={city.nearbyCity}
          title={`Minigolf auch in der Nähe von ${city.name}`}
        />

        <MagazineTeaser articles={articles.slice(0, 2)} title="Lesetipps aus dem Magazin" />

        {/* Info Table */}
        <section className="py-8">
          <h2 className="text-2xl mb-4">Minigolf {city.name} auf einen Blick</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card border rounded-lg text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left font-semibold">Anlage</th>
                  <th className="p-3 text-left font-semibold">Typ</th>
                  <th className="p-3 text-left font-semibold">Preis Erw.</th>
                  <th className="p-3 text-left font-semibold">Bahnen</th>
                </tr>
              </thead>
              <tbody>
                {allRelevant.map((v) => (
                  <tr key={v.slug} className="border-t">
                    <td className="p-3 font-medium">{v.name}</td>
                    <td className="p-3 text-muted-foreground">{v.type}</td>
                    <td className="p-3">{v.priceAdult || "—"}</td>
                    <td className="p-3">{v.holes || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default CityPage;
