import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import { articles } from "@/data/articles";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="container-page py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="text-2xl">⛳</span>
              Gartengolf Eppelheim
            </Link>
            <p className="text-sm opacity-70 mb-3">
              Minigolf im Herzen der Metropolregion Rhein-Neckar. Traditioneller Minigolfplatz für Familien, Gruppen und Freizeitsportler.
            </p>
            <p className="text-sm opacity-60">
              Kirchheimerstraße 90<br />69214 Eppelheim
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-1.5 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Startseite</Link></li>
              <li><Link to="/gartengolf-eppelheim" className="hover:opacity-100 transition-opacity">Gartengolf Eppelheim</Link></li>
              <li><Link to="/preise" className="hover:opacity-100 transition-opacity">Preise</Link></li>
              <li><Link to="/magazin" className="hover:opacity-100 transition-opacity">Magazin</Link></li>
              <li><Link to="/ueber-uns" className="hover:opacity-100 transition-opacity">Über uns</Link></li>
              <li><Link to="/kontakt" className="hover:opacity-100 transition-opacity">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Minigolf Regionen</h3>
            <ul className="space-y-1.5 text-sm opacity-70">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link to={`/minigolf/${c.slug}`} className="hover:opacity-100 transition-opacity">
                    Minigolf {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Magazin</h3>
            <ul className="space-y-1.5 text-sm opacity-70">
              {articles.slice(0, 5).map((a) => (
                <li key={a.slug}>
                  <Link to={`/magazin/${a.slug}`} className="hover:opacity-100 transition-opacity line-clamp-1">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Gartengolf Eppelheim. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:opacity-100">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-100">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
