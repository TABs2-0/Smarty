import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Transportation from "./pages/Transportation";
import Healthcare from "./pages/Healthcare";
import Housing from "./pages/Housing";
import Education from "./pages/Education";
import Employment from "./pages/Employment";
import Government from "./pages/Government";
import Community from "./pages/Community";
import Culture from "./pages/Culture";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
           <Route path="/transportation" element={<Transportation />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/education" element={<Education />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/government" element={<Government />} />
          <Route path="/community" element={<Community />} />
          <Route path="/culture" element={<Culture />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>

);

export default App;
