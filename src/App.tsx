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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>HRX CPAs Test Page</h1>
          <p>If you can see this, the React app is working!</p>
          <p>Current URL: {window.location.href}</p>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
