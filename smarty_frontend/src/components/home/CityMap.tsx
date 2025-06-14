
import React from 'react';
import { MapPin, Navigation, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CityMap = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h2 className="section-title">Interactive City Map</h2>
            <p className="text-gray-600 mb-4">Explore key locations and services around the city</p>
          </div>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Layers className="h-4 w-4" />
              <span>Layers</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Navigation className="h-4 w-4" />
              <span>My Location</span>
            </Button>
          </div>
        </div>

        <div className="map-container bg-cityguide-soft-gray relative">
          {/* This is where a real map would be integrated */}
          <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
            <MapPin className="h-12 w-12 text-cityguide-purple mb-4" />
            <h3 className="text-xl font-medium mb-2">Interactive Map</h3>
            <p className="text-gray-600 max-w-md">
              This is where the interactive map would be displayed. In a real implementation,
              this would integrate with a mapping service like Google Maps, Mapbox, or Leaflet.
            </p>
          </div>

          {/* Map Pins - these would be positioned based on real coordinates in a real implementation */}
          <div className="absolute top-1/3 left-1/4">
            <div className="relative">
              <div className="absolute -top-10 -left-16 w-32 bg-white p-2 rounded-lg shadow-lg text-xs text-center hidden group-hover:block">
                Central Library
              </div>
              <div className="w-6 h-6 bg-cityguide-purple rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-2/3">
            <div className="w-6 h-6 bg-cityguide-dark-purple rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
          </div>

          <div className="absolute top-2/3 left-1/3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-3 hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-sm">Public Services</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-3 hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-sm">Parks & Recreation</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-3 hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-sm">Shopping & Dining</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-3 hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-sm">Cultural Spots</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityMap;
