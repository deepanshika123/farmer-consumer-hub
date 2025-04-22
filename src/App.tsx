import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Dashboard Components
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import FarmerProfile from "./components/Dashboard/FarmerProfile";
import WeatherAnalysis from "./components/Dashboard/WeatherAnalysis";
import MarketPriceAnalysis from "./components/Dashboard/MarketPriceAnalysis";
import ConsumerProfile from "./components/Dashboard/ConsumerProfile";
import Marketplace from "./components/Dashboard/Marketplace";
import DefaultRedirect from "./pages/DefaultRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DefaultRedirect />} />
            <Route path="profile" element={<FarmerProfile />} />
            <Route path="weather" element={<WeatherAnalysis />} />
            <Route path="market" element={<MarketPriceAnalysis />} />
            <Route path="consumer-profile" element={<ConsumerProfile />} />
            <Route path="marketplace" element={<Marketplace />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
