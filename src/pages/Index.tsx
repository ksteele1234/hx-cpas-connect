import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AboutPreview from "@/components/AboutPreview";
import AudienceChips from "@/components/AudienceChips";
import ValuePillars from "@/components/ValuePillars";
import PackagesTeaser from "@/components/PackagesTeaser";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import FAQPreview from "@/components/FAQPreview";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <AboutPreview />
        <AudienceChips />
        <ValuePillars />
        <PackagesTeaser />
        <TestimonialsPreview />
        <FAQPreview />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
