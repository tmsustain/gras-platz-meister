import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import LocationHubPage from "@/pages/LocationHubPage";
import CityPage from "@/pages/CityPage";
import VenuePage from "@/pages/VenuePage";
import MagazinePage from "@/pages/MagazinePage";
import ArticlePage from "@/pages/ArticlePage";
import UeberUns from "@/pages/UeberUns";
import Preise from "@/pages/Preise";
import Spielregeln from "@/pages/Spielregeln";
import Anfahrt from "@/pages/Anfahrt";
import Kontakt from "@/pages/Kontakt";
import Datenschutz from "@/pages/Datenschutz";
import Impressum from "@/pages/Impressum";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gartengolf-eppelheim" element={<LocationHubPage />} />
              <Route path="/minigolf/:slug" element={<CityPage />} />
              <Route path="/minigolf-platz/:slug" element={<VenuePage />} />
              <Route path="/magazin" element={<MagazinePage />} />
              <Route path="/magazin/:slug" element={<ArticlePage />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/preise" element={<Preise />} />
              <Route path="/spielregeln" element={<Spielregeln />} />
              <Route path="/anfahrt" element={<Anfahrt />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
