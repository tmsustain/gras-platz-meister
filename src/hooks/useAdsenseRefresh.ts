import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * Re-triggers AdSense on every route change so ads refresh on navigation.
 */
export const useAdsenseRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch {
      // AdSense not ready or blocked
    }
  }, [location.pathname]);
};
