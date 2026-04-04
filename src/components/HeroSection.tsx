import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  cta1?: { label: string; to: string };
  cta2?: { label: string; to: string };
}

const HeroSection = ({ title, subtitle, cta1, cta2 }: HeroSectionProps) => {
  return (
    <section className="hero-gradient text-primary-foreground py-16 md:py-24">
      <div className="container-page text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {(cta1 || cta2) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {cta1 && (
              <Link
                to={cta1.to}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-base"
              >
                {cta1.label}
              </Link>
            )}
            {cta2 && (
              <Link
                to={cta2.to}
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
              >
                {cta2.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
