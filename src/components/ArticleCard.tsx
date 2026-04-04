import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

const ArticleCard = ({ article, showDate = false }: { article: Article; showDate?: boolean }) => {
  const categoryColors: Record<string, string> = {
    "Regeln & Tipps": "bg-primary/10 text-primary",
    "Anlagen-Typen": "bg-accent text-accent-foreground",
    Golf: "bg-secondary/20 text-secondary-foreground",
    Familie: "bg-primary/15 text-primary",
    Events: "bg-secondary/30 text-secondary-foreground",
  };

  return (
    <Link
      to={`/magazin/${article.slug}`}
      className="group block bg-card rounded-lg border overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="h-36 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
        <span className="text-4xl">⛳</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[article.category] || "bg-muted text-muted-foreground"}`}>
            {article.category}
          </span>
          {showDate && (
            <span className="text-xs text-muted-foreground">
              {new Date(article.publishDate).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
          )}
        </div>
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
