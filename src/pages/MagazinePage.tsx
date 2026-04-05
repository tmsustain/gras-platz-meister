import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import { articles, articleCategories } from "@/data/articles";

const MagazinePage = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered = activeCategory === "Alle"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <SEOHead
        title="📰 Minigolf Magazin – Tipps, Tricks & Wissen"
        description="🧠 Dein Minigolf-Ratgeber: Regeln, Technik-Tipps & spannende Facts rund um Minigolf, Adventure Golf & Schwarzlicht ✓ Jetzt schlauer spielen!"
        canonical="/magazin"
      />
      <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Magazin" }]} />

      <div className="container-page py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">Minigolf Magazin</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">Ratgeber, Tipps und Wissenswertes rund um Minigolf, Adventure Golf und Schwarzlicht-Minigolf in der Metropolregion Rhein-Neckar.</p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} showDate />
          ))}
        </div>
      </div>
    </>
  );
};

export default MagazinePage;
