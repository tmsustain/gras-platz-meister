import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  title?: string;
  items: FAQItem[];
}

const FAQBlock = ({ title, items }: FAQBlockProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {title && <h2 className="text-2xl md:text-3xl mb-8">{title}</h2>}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-card rounded-lg border overflow-hidden card-shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-base md:text-lg font-semibold pr-4">{item.question}</h3>
              <span className="text-primary shrink-0 text-xl font-light">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQBlock;
