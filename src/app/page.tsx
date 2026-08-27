import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedKittens } from "@/components/home/FeaturedKittens";
import { BreederStory } from "@/components/home/BreederStory";
import { AdoptionSteps } from "@/components/home/AdoptionSteps";
import { HealthGuarantee } from "@/components/home/HealthGuarantee";
import { MosaicGallery } from "@/components/home/MosaicGallery";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getFaqJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col">
        <HeroSection />
        <TrustStrip />
        <FeaturedKittens />
        <BreederStory />
        <AdoptionSteps />
        <HealthGuarantee />
        <MosaicGallery />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </div>
    </>
  );
}
