import { useState, useEffect } from "react";

const STORAGE_KEY = "infoBannerDismissed";

const InfoBanner = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== "true";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 300000);
    return () => clearTimeout(timer);
  }, [visible]);

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  };

  if (!visible) return null;

  return (
    <div className="bg-amber-100 text-amber-900 text-xs sm:text-sm text-center py-2 px-4 relative z-[60]">
      <span className="font-medium">
        Wir sind nicht der Betreiber des Gartengolf Eppelheim – inoffizielle Seite.
      </span>
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-amber-200 rounded transition-colors"
        aria-label="Schließen"
      >
        ✕
      </button>
    </div>
  );
};

export default InfoBanner;
