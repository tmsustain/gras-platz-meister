import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";

const Anfahrt = () => {
  const breadcrumbItems = [
    { label: "Startseite", to: "/" },
    { label: "Anfahrt" },
  ];

  return (
    <>
      <SEOHead
        title="Anfahrt – Gartengolf Eppelheim | So finden Sie uns"
        description="Anfahrt zum Gartengolf Eppelheim: Adresse, Google Maps Karte, Parkmöglichkeiten und Anreise mit öffentlichen Verkehrsmitteln."
        canonical="/anfahrt"
      />
      <div className="container-page py-10">
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Anfahrt – Gartengolf Eppelheim</h1>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          So finden Sie den Gartengolf Eppelheim. Wir befinden uns zentral in Eppelheim
          zwischen Heidelberg und Schwetzingen – gut erreichbar mit dem Auto und öffentlichen Verkehrsmitteln.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Karte */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden border card-shadow aspect-video">
              <iframe
                title="Gartengolf Eppelheim auf Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.5!2d8.6308!3d49.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bea4a5555555%3A0x0!2sOdenwaldring%2C+68723+Schwetzingen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info-Spalte */}
          <div className="space-y-5">
            <div className="bg-card rounded-lg border p-6 card-shadow">
              <h2 className="font-semibold text-lg mb-3 text-primary">📍 Adresse</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gartengolf Eppelheim<br />
                Odenwaldring<br />
                – gegenüber Bellamar –<br />
                68723 Schwetzingen
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6 card-shadow">
              <h2 className="font-semibold text-lg mb-3 text-primary">📞 Kontakt</h2>
              <p className="text-sm text-muted-foreground">
                Tel:{" "}
                <a href="tel:+4962022707 06" className="text-primary hover:underline font-medium">
                  06202 - 27 07 06
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                E-Mail:{" "}
                <a href="mailto:info@gartengolf.de" className="text-primary hover:underline font-medium">
                  info@gartengolf.de
                </a>
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6 card-shadow">
              <h2 className="font-semibold text-lg mb-3 text-primary">🚗 Mit dem Auto</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Über die A5 oder A6 Richtung Schwetzingen. Die Anlage befindet sich am Odenwaldring,
                direkt gegenüber dem Bellamar Freizeitbad. Kostenlose Parkplätze sind vorhanden.
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6 card-shadow">
              <h2 className="font-semibold text-lg mb-3 text-primary">🚋 Öffentliche Verkehrsmittel</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mit der Straßenbahn oder dem Bus bis Schwetzingen. Die Anlage ist wenige Gehminuten
                von der Haltestelle entfernt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anfahrt;
