import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CookieConsent from "@/components/CookieConsent";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import BusinessServices from "./pages/BusinessServices";
import PersonalServices from "./pages/PersonalServices";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import BookConsultation from "./pages/BookConsultation";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogImport from "./pages/BlogImport";
import ADACompliance from "./pages/ADACompliance";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ProfessionalDisclosures from "./pages/ProfessionalDisclosures";
import CookiePolicy from "./pages/CookiePolicy";
import ClientEngagementAgreement from "./pages/ClientEngagementAgreement";
import ThankYou from "./pages/ThankYou";
import Bookkeeping from "./pages/services/Bookkeeping";
import TaxPlanningPrep from "./pages/services/TaxPlanningPrep";
import CFOConsulting from "./pages/services/CFOConsulting";
import EstatePlanningCoordination from "./pages/services/EstatePlanningCoordination";
import BusinessValuation from "./pages/services/BusinessValuation";
import ExitPlanning from "./pages/services/ExitPlanning";
import FullServiceAccountingPayroll from "./pages/services/FullServiceAccountingPayroll";
import BuyerDueDiligence from "./pages/services/BuyerDueDiligence";
import IndividualTaxPreparation from "./pages/services/IndividualTaxPreparation";
import RSUEquityPlanning from "./pages/services/RSUEquityPlanning";
import RentalK1Support from "./pages/services/RentalK1Support";
import PersonalEstatePlanning from "./pages/services/PersonalEstatePlanning";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// Declare global type for Netlify Identity widget
declare global {
  interface Window {
    netlifyIdentity?: {
      on: (event: string, callback: (user?: any) => void) => void;
      init: () => void;
    };
  }
}

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Also ensure we're at the top for cases where smooth scroll might not work
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
};

const App = () => {
  // Add this useEffect to handle Netlify Identity
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user?: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/business-services" element={<BusinessServices />} />
            <Route path="/personal-services" element={<PersonalServices />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin/blog-import" element={<BlogImport />} />
            <Route path="/ada-compliance" element={<ADACompliance />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/professional-disclosures" element={<ProfessionalDisclosures />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/client-engagement-agreement" element={<ClientEngagementAgreement />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* Service Pages */}
            <Route path="/services/bookkeeping" element={<Bookkeeping />} />
            <Route path="/services/tax-planning-prep" element={<TaxPlanningPrep />} />
            <Route path="/services/cfo-consulting" element={<CFOConsulting />} />
            <Route path="/services/estate-planning-coordination" element={<EstatePlanningCoordination />} />
            <Route path="/services/business-valuation" element={<BusinessValuation />} />
            <Route path="/services/exit-planning" element={<ExitPlanning />} />
            <Route path="/services/full-service-accounting-payroll" element={<FullServiceAccountingPayroll />} />
            <Route path="/services/buyer-due-diligence" element={<BuyerDueDiligence />} />
            {/* Personal Service Pages */}
            <Route path="/services/individual-tax-preparation" element={<IndividualTaxPreparation />} />
            <Route path="/services/rsu-equity-planning" element={<RSUEquityPlanning />} />
            <Route path="/services/rental-k1-support" element={<RentalK1Support />} />
            <Route path="/services/personal-estate-planning" element={<PersonalEstatePlanning />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
