
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FleetShowcase from "./components/FleetShowcase";
import AirportTransfer from "./pages/AirportTransfer";
import RoadsideAssistance from "./pages/RoadsideAssistance";
import PersonalLeasing from "./pages/PersonalLeasing";
import CorporateLeasing from "./pages/CorporateLeasing";
import BusinessSolutions from "./pages/BusinessSolutions";
import TruckRental from "./pages/TruckRental";
import ChauffeuredServices from "./pages/ChauffeuredServices";
import ContactUs from "./pages/ContactUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fleet" element={<FleetShowcase />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/leasing/roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="/leasing/personal-leasing" element={<PersonalLeasing />} />
          <Route path="/leasing/corporate-leasing" element={<CorporateLeasing />} />
          <Route path="/leasing/business-solutions" element={<BusinessSolutions />} />
          <Route path="/leasing/truck-rental" element={<TruckRental />} />
          <Route path="/leasing/chauffeured-services" element={<ChauffeuredServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
