import React from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-cityguide-purple via-cityguide-mid-purple to-cityguide-dark-purple relative py-20 md:py-28">
      {/* Optional decorative overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC02VjBoNnYzMHptLTE4IDBoLTZWMGg2djMweiBtMTggMFYwaDZ2Nmg2eiBtMCAxMlYzMGg2djZoLTZ6bTAgMTJ2LTZoNnY2SDQyeiBNMjQgMFY2aC02VjBoLTZ2NmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              <span>Your ultimate companion for city exploration</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Discover and Navigate Your City with Ease
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            The essential digital guide for newcomers, visitors, students, and anyone looking to explore and connect with city services and attractions.
          </p>

          <div className="relative max-w-xl mx-auto animate-slide-up">
            <div className="relative flex items-center">
              <MapPin className="absolute left-4 text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for places, services, or information..."
                className="pl-12 pr-28 py-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-cityguide-purple/20 shadow-lg text-gray-800"
              />
              <div className="absolute right-2">
                <Button size="sm" className="bg-cityguide-purple hover:bg-cityguide-dark-purple rounded-full px-5 text-white">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </div>

            <div className="flex justify-center mt-4 space-x-4 text-white text-sm">
              {["Housing", "Transportation", "Entertainment", "Education"].map((item) => (
                <button key={item} className="hover:text-white/70 transition-colors flex items-center">
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
