import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";

const Datenschutz = () => (
  <>
    <SEOHead title="🔒 Datenschutz – Gartengolf Eppelheim" description="Datenschutzerklärung von Gartengolf Eppelheim gemäß DSGVO – Ihre Daten sind bei uns sicher." canonical="/datenschutz" noindex />
    <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Datenschutz" }]} />
    <div className="container-page py-8 max-w-3xl prose prose-sm">
      <h1 className="text-3xl md:text-4xl mb-6 font-bold">Datenschutzerklärung</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Datenschutz auf einen Blick</h2>
      <p className="text-muted-foreground mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Hosting</h2>
      <p className="text-muted-foreground mb-4">Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <p className="text-muted-foreground mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      <p className="text-muted-foreground text-sm mt-8">[Vollständige Datenschutzerklärung hier einfügen]</p>
    </div>
  </>
);
export default Datenschutz;
