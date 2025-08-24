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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
