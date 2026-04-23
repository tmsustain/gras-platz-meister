import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import impressumInfo from "@/assets/impressum-info.jpg";

const Impressum = () => (
  <>
    <SEOHead title="📄 Impressum – Gartengolf Eppelheim" description="Impressum & Anbieterkennzeichnung von Gartengolf Eppelheim gemäß § 5 TMG." canonical="/impressum" noindex />
    <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Impressum" }]} />
    <div className="container-page py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl mb-6">Impressum</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
      <img src={impressumInfo} alt="Viver Anguli – Q. 906 Sul Alameda 7, 22, Plano Diretor Sul, Palmas - TO, 77023-384, Brasilien" className="rounded-lg shadow-md my-4 max-w-md w-full" />
      <h2 className="text-xl font-semibold mt-6 mb-2">Anschrift des Minigolfplatzes</h2>
      <p className="text-muted-foreground mb-4">Gartengolf Eppelheim<br />Kirchheimerstraße 90<br />69214 Eppelheim</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Haftung für Inhalte</h2>
      <p className="text-muted-foreground mb-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Haftung für Links</h2>
      <p className="text-muted-foreground mb-4">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.</p>
    </div>
  </>
);
export default Impressum;
