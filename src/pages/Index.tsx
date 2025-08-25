import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>HRX CPAs | Irvine CPA Firm | Tax Planning & CFO Services</title>
        <meta name="description" content="Expert CPA firm in Irvine serving businesses $1M-$10M revenue & high-net-worth families. Tax planning, CFO consulting, bookkeeping & exit planning in Orange County." />
        <meta name="keywords" content="CPA firm Irvine, tax planning Irvine, CFO services Irvine, business accountant Irvine, virtual CFO Orange County, exit planning CPA" />
        <link rel="canonical" href="https://hrxcpas.com/" />
      </Helmet>
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
    </>
  );
};

export default Index;
