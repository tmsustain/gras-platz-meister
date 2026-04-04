import ArticleCard from "./ArticleCard";
import type { Article } from "@/data/articles";

const MagazineTeaser = ({ articles, title }: { articles: Article[]; title?: string }) => {
  if (articles.length === 0) return null;
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl mb-6">{title || "Aus dem Magazin"}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.slice(0, 3).map((a) => (
          <ArticleCard key={a.slug} article={a} showDate />
        ))}
      </div>
    </section>
  );
};

export default MagazineTeaser;
