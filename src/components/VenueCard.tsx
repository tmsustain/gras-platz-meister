import { Link } from "react-router-dom";
import type { Venue } from "@/data/venues";

const typeBadgeColors: Record<string, string> = {
  Outdoor: "bg-primary/10 text-primary",
  Indoor: "bg-secondary/20 text-secondary-foreground",
  Schwarzlicht: "bg-foreground/10 text-foreground",
  "Adventure Golf": "bg-accent text-accent-foreground",
};

const VenueCard = ({ venue }: { venue: Venue }) => {
  return (
    <Link
      to={`/minigolf-platz/${venue.slug}`}
      className="group block bg-card rounded-lg border p-5 card-shadow hover:card-shadow-hover transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {venue.name}
        </h3>
        {venue.rating && (
          <span className="flex items-center gap-1 text-secondary font-semibold text-sm shrink-0 ml-2">
            ★ {venue.rating.toFixed(1)}
          </span>
        )}
      </div>
      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${typeBadgeColors[venue.type] || "bg-muted text-muted-foreground"}`}>
        {venue.type}
      </span>
      <p className="text-sm text-muted-foreground mb-2">{venue.address}</p>
      <p className="text-sm text-foreground/80 mb-4">{venue.shortDescription}</p>
      <span className="text-sm text-primary font-medium group-hover:underline">
        Mehr erfahren →
      </span>
    </Link>
  );
};

export default VenueCard;
