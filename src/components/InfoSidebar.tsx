import type { Venue } from "@/data/venues";

const InfoSidebar = ({ venue }: { venue: Venue }) => {
  return (
    <aside className="space-y-4">
      <div className="bg-card rounded-lg border p-5 card-shadow">
        <h3 className="font-semibold mb-3 text-primary">📍 Adresse</h3>
        <p className="text-sm text-muted-foreground">{venue.address}</p>
        {venue.phone && (
          <p className="text-sm text-muted-foreground mt-1">Tel: {venue.phone}</p>
        )}
        {venue.website && (
          <a
            href={venue.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-primary font-medium hover:underline"
          >
            Website besuchen →
          </a>
        )}
      </div>

      {venue.openingHours && (
        <div className="bg-card rounded-lg border p-5 card-shadow">
          <h3 className="font-semibold mb-3 text-primary">🕐 Öffnungszeiten</h3>
          <p className="text-sm text-muted-foreground">{venue.openingHours}</p>
        </div>
      )}

      <div className="bg-card rounded-lg border p-5 card-shadow">
        <h3 className="font-semibold mb-3 text-primary">💰 Preise</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-border/50">
              <td className="py-2 text-muted-foreground">Erwachsene (1. Runde)</td>
              <td className="py-2 text-right font-medium">{venue.priceAdult || "—"}</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-2 text-muted-foreground">Kinder/Studenten/Senioren (1. Runde)</td>
              <td className="py-2 text-right font-medium">{venue.priceChild || "—"}</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground" colSpan={2}>
                <a href="/preise" className="text-primary font-medium hover:underline text-xs">Alle Preise & Mehrfachkarten →</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {venue.features.length > 0 && (
        <div className="bg-card rounded-lg border p-5 card-shadow">
          <h3 className="font-semibold mb-3 text-primary">✨ Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {venue.features.map((f) => (
              <span key={f} className="px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default InfoSidebar;
