import { useParams, Navigate, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import FAQBlock from "@/components/FAQBlock";
import ArticleCard from "@/components/ArticleCard";
import RegionLinks from "@/components/RegionLinks";
import { getArticleBySlug, articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");
  if (!article) return <Navigate to="/404" replace />;

  const relatedArticles = articles.filter((a) => article.relatedArticles.includes(a.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.h1,
      description: article.metaDescription,
      datePublished: article.publishDate,
      author: { "@type": "Organization", name: "Gartengolf Eppelheim" },
      publisher: { "@type": "Organization", name: "Gartengolf Eppelheim" },
    },
  ];

  return (
    <>
      <SEOHead
        title={`📖 ${article.title} – Tipps & Ratgeber | Minigolf Magazin`}
        description={article.metaDescription}
        canonical={`/magazin/${article.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Breadcrumb items={[
        { label: "Startseite", href: "/" },
        { label: "Magazin", href: "/magazin" },
        { label: article.title },
      ]} />

      <article className="container-page py-8 max-w-4xl">
        <header className="mb-10">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">{article.h1}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Von Gartengolf Eppelheim Redaktion</span>
            <span>·</span>
            <time dateTime={article.publishDate}>
              {new Date(article.publishDate).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
          </div>
        </header>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary pl-4">
          {article.excerpt}
        </p>

        {/* Table of Contents */}
        <nav className="bg-muted rounded-lg p-5 mb-10">
          <h2 className="font-semibold mb-3">Inhaltsverzeichnis</h2>
          <ol className="space-y-1.5 text-sm">
            {article.sections.map((s, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="text-primary hover:underline">
                  {i + 1}. {s.question}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Article Sections */}
        <div className="space-y-10">
          {article.sections.map((s, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 className="text-xl md:text-2xl mb-3">{s.question}</h2>
              <p className="text-muted-foreground font-medium mb-4 bg-accent/50 p-3 rounded-md text-sm">
                {s.answer}
              </p>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </section>
          ))}
        </div>

        <FAQBlock
          title="Häufige Fragen"
          items={article.sections.map((s) => ({ question: s.question, answer: s.answer }))}
        />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12">
            <h2 className="text-2xl mb-6">Mehr lesen</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} showDate />
              ))}
            </div>
          </section>
        )}

        <RegionLinks limitSlugs={article.relatedCities} title="Minigolfplätze in der Nähe" />
      </article>
    </>
  );
};

export default ArticlePage;
