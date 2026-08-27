"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/common/SectionHeading";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-noir relative border-t border-noir-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Transparencia Total"
          title="Preguntas"
          highlight="Frecuentes"
          description="Resolvemos todas tus dudas sobre cuidados, garantías de salud, reservas y la llegada de tu gato persa a casa."
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border transition-colors duration-300 bg-noir-soft ${
                  isOpen ? "border-gold/60 shadow-lg" : "border-noir-line hover:border-noir-line/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  <span className="font-cormorant text-xl sm:text-2xl font-semibold text-bone">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 bg-noir border border-noir-line shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-gold text-gold" : "text-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-muted font-normal leading-relaxed border-t border-noir-line/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
