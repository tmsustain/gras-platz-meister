import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SEOHead = ({ title, description, canonical, type = "website", jsonLd, noindex }: SEOHeadProps) => {
  const baseUrl = "https://gartengolf-eppelheim.de";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <html lang="de" />
      <link rel="alternate" hrefLang="de" href={fullCanonical || baseUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content="Gartengolf Eppelheim" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
