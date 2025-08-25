import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ThankYou from "./pages/ThankYou";
import Bookkeeping from "./pages/services/Bookkeeping";
import TaxPlanningPrep from "./pages/services/TaxPlanningPrep";
import CFOConsulting from "./pages/services/CFOConsulting";
import EstatePlanningCoordination from "./pages/services/EstatePlanningCoordination";
import BusinessValuation from "./pages/services/BusinessValuation";
import ExitPlanning from "./pages/services/ExitPlanning";
import FullServiceAccountingPayroll from "./pages/services/FullServiceAccountingPayroll";
import BuyerDueDiligence from "./pages/services/BuyerDueDiligence";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/ada-compliance" element={<ADACompliance />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
