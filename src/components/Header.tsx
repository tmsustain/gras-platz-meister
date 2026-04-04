import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cities } from "@/data/cities";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Gartengolf Eppelheim", to: "/gartengolf-eppelheim" },
    { label: "Preise", to: "/preise" },
    { label: "Magazin", to: "/magazin" },
    { label: "Über uns", to: "/ueber-uns" },
    { label: "Kontakt", to: "/kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <span className="text-2xl">⛳</span>
          <span className="hidden sm:inline">Gartengolf Eppelheim</span>
          <span className="sm:hidden">GG Eppelheim</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 1).map((l) => (
            <Link key={l.to} to={l.to} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(l.to) ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              {l.label}
            </Link>
          ))}

          {/* Region Dropdown */}
          <div className="relative" onMouseEnter={() => setRegionOpen(true)} onMouseLeave={() => setRegionOpen(false)}>
            <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith("/minigolf/") ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              Minigolf in der Region
              <span className="text-xs">▾</span>
            </button>
            {regionOpen && (
              <div className="absolute top-full left-0 mt-1 bg-card border rounded-lg shadow-lg p-4 w-80 grid grid-cols-2 gap-1">
                {cities.map((c) => (
                  <Link key={c.slug} to={`/minigolf/${c.slug}`} className="px-3 py-1.5 text-sm rounded hover:bg-muted transition-colors" onClick={() => setRegionOpen(false)}>
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(l.to) ? "bg-accent text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü öffnen">
          <span className="text-xl">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="container-page py-4 space-y-1">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-muted" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2 border-t mt-2">
              <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">Regionen</p>
              <div className="grid grid-cols-2 gap-1">
                {cities.map((c) => (
                  <Link key={c.slug} to={`/minigolf/${c.slug}`} className="px-3 py-1.5 text-sm rounded hover:bg-muted" onClick={() => setMobileOpen(false)}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
