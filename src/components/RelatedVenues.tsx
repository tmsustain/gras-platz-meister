import { Link } from "react-router-dom";
import type { Venue } from "@/data/venues";
import VenueCard from "./VenueCard";

const RelatedVenues = ({ venues, title }: { venues: Venue[]; title?: string }) => {
  if (venues.length === 0) return null;
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl mb-6">{title || "Ähnliche Minigolfplätze in der Nähe"}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {venues.slice(0, 3).map((v) => (
          <VenueCard key={v.slug} venue={v} />
        ))}
      </div>
    </section>
  );
};

export default RelatedVenues;
