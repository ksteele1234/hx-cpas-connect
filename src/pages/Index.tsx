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
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "HRX CPAs",
            "alternateName": "HRX Certified Public Accountants",
            "description": "Expert CPA firm in Irvine serving businesses $1M-$10M revenue & high-net-worth families. Tax planning, CFO consulting, bookkeeping & exit planning in Orange County.",
            "url": "https://hrxcpas.com",
            "logo": "https://hrxcpas.com/assets/hrx-logo.png",
            "image": "https://hrxcpas.com/assets/office-building.png",
            "telephone": "(949) 431-0469",
            "email": "info@hrxcpas.com",
            "founder": {
              "@type": "Person",
              "name": "Hiren Parmar",
              "jobTitle": "CPA, Founder & President",
              "description": "Founder and president of HRX CPAs with over 20 years of experience in tax planning and business advisory services."
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6 Venture #250",
              "addressLocality": "Irvine",
              "addressRegion": "CA",
              "postalCode": "92618",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.6846",
              "longitude": "-117.8265"
            },
            "openingHours": "Mo-Th 10:00-16:00",
            "areaServed": [
              {
                "@type": "State",
                "name": "California"
              },
              {
                "@type": "City",
                "name": "Irvine"
              },
              {
                "@type": "City",
                "name": "Orange County"
              }
            ],
            "serviceType": [
              "Tax Planning & Preparation",
              "Bookkeeping",
              "CFO Consulting", 
              "Business Valuation",
              "Exit Planning",
              "Estate Planning Coordination",
              "Individual Tax Preparation",
              "RSU & Equity Planning"
            ],
            "priceRange": "$$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50+"
            },
            "sameAs": [
              "https://www.linkedin.com/company/hrx-cpas",
              "https://www.facebook.com/hrxcpas"
            ]
          })}
        </script>
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
