import { Link } from "react-router-dom";
import { cities } from "@/data/cities";

const RegionLinks = ({ excludeSlug, title, limitSlugs }: { excludeSlug?: string; title?: string; limitSlugs?: string[] }) => {
  const filtered = limitSlugs
    ? cities.filter((c) => limitSlugs.includes(c.slug))
    : cities.filter((c) => c.slug !== excludeSlug);

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl mb-6">{title || "Minigolf in der Region"}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map((city) => (
          <Link
            key={city.slug}
            to={`/minigolf/${city.slug}`}
            className="block bg-card rounded-lg border p-4 text-center card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span className="text-2xl mb-2 block">📍</span>
            <span className="font-medium text-sm group-hover:text-primary transition-colors">
              Minigolf {city.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RegionLinks;
