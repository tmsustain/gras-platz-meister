import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";

const UeberUns = () => (
  <>
    <SEOHead title="💚 Über uns – Gartengolf Eppelheim | Unsere Geschichte" description="🌿 Lerne Gartengolf Eppelheim kennen: Tradition, Leidenschaft & 18 Bahnen Minigolf-Spaß ✓ Seit Jahren das Ausflugsziel Nr. 1 bei Heidelberg!" canonical="/ueber-uns" />
    <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Über uns" }]} />
    <div className="container-page py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl mb-6">Über Gartengolf Eppelheim</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">Gartengolf Eppelheim ist ein traditioneller Minigolfplatz in der Kirchheimerstraße 90 in Eppelheim. Seit vielen Jahren bieten wir Familien, Gruppen und Minigolf-Begeisterten aus der gesamten Metropolregion Rhein-Neckar ein unvergessliches Freizeiterlebnis auf unseren 18 gepflegten Betonbahnen inmitten einer idyllischen Gartenanlage.</p>
      <h2 className="text-2xl mb-3">Unsere Mission</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">Wir möchten Minigolf als Freizeitsport für alle zugänglich machen. Ob Kindergeburtstag, Familienausflug oder Firmenevent – bei uns steht der Spaß im Vordergrund. Gleichzeitig informieren wir auf dieser Website umfassend über alle Minigolfanlagen in der Region Heidelberg, Mannheim und Schwetzingen.</p>
      <h2 className="text-2xl mb-3">Die Region Rhein-Neckar</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">Die Metropolregion Rhein-Neckar bietet eine vielfältige Minigolf-Landschaft: von klassischen Outdoor-Anlagen über spektakuläre Schwarzlicht-Minigolf-Hallen bis hin zu naturnahen Adventure-Golf-Plätzen. Auf unserer Website finden Sie alle Informationen zu den besten Minigolfplätzen der Region.</p>
      <FAQBlock items={[
        { question: "Wer betreibt Gartengolf Eppelheim?", answer: "Gartengolf Eppelheim wird als traditioneller Minigolfplatz in Eppelheim bei Heidelberg betrieben und ist ein beliebtes Ausflugsziel in der Metropolregion Rhein-Neckar." },
        { question: "Seit wann gibt es Gartengolf Eppelheim?", answer: "Der Minigolfplatz in Eppelheim hat eine lange Tradition und ist seit vielen Jahren fester Bestandteil des Freizeitangebots in der Region." },
      ]} />
    </div>
  </>
);
export default UeberUns;
