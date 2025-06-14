import React from 'react';
import { ExternalLink, Star, MapPin } from 'lucide-react';

const places = [
  {
    title: "Central Library",
    category: "Education",
    rating: 4.8,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect fill='%23E2E8F0' width='320' height='180'/%3E%3Cpath fill='%23CBD5E1' d='M160 60h100v80H160z'/%3E%3Cpath fill='%2394A3B8' d='M60 60h100v80H60z'/%3E%3Cpath fill='%23475569' d='M120 80h80v40h-80z'/%3E%3Ctext fill='%23475569' font-family='Arial' font-size='12' x='160' y='100' text-anchor='middle'%3ELibrary%3C/text%3E%3C/svg%3E",
    location: "Downtown Area"
  },
  {
    title: "Innovation Hub",
    category: "Business",
    rating: 4.6,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect fill='%23E2E8F0' width='320' height='180'/%3E%3Cpath fill='%23CBD5E1' d='M70 40h180v100H70z'/%3E%3Cpath fill='%2394A3B8' d='M110 70h100v70H110z'/%3E%3Cpath fill='%23475569' d='M150 70h20v70h-20z'/%3E%3Cpath fill='%23475569' d='M110 100h100v10H110z'/%3E%3Ctext fill='%23475569' font-family='Arial' font-size='12' x='160' y='150' text-anchor='middle'%3EInnovation Hub%3C/text%3E%3C/svg%3E",
    location: "Tech District"
  },
  {
    title: "City Park",
    category: "Recreation",
    rating: 4.9,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect fill='%23D1FAE5' width='320' height='180'/%3E%3Cpath fill='%2310B981' d='M160 50c-20 0-40 10-40 40s20 40 40 40 40-10 40-40-20-40-40-40z'/%3E%3Cpath fill='%236EE7B7' d='M120 130h160v20H120z'/%3E%3Cpath fill='%23A7F3D0' d='M40 90c15 0 25-15 45-15s35 15 50 15 30-15 50-15 30 15 45 15v60H40V90z'/%3E%3Ctext fill='%23065F46' font-family='Arial' font-size='12' x='160' y='160' text-anchor='middle'%3ECity Park%3C/text%3E%3C/svg%3E",
    location: "North Side"
  },
  {
    title: "Museum of History",
    category: "Culture",
    rating: 4.7,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect fill='%23E2E8F0' width='320' height='180'/%3E%3Cpath fill='%23CBD5E1' d='M110 40l100 0 20 30-140 0z'/%3E%3Cpath fill='%2394A3B8' d='M90 70h140v80H90z'/%3E%3Cpath fill='%23475569' d='M100 80h20v70h-20zM160 80h20v70h-20zM220 80h-20v70h20z'/%3E%3Ctext fill='%23475569' font-family='Arial' font-size='12' x='160' y='165' text-anchor='middle'%3EMuseum%3C/text%3E%3C/svg%3E",
    location: "Cultural District"
  }
];

const FeaturedPlaces = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="section-title">Featured Places</h2>
          <p className="text-gray-600">Notable locations that newcomers should know about</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div key={index} className="city-card group">
              <div className="relative overflow-hidden rounded-lg h-40 mb-3">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 text-amber-500 mr-1" fill="currentColor" />
                  <span>{place.rating}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{place.title}</h3>
                  <a href="#" className="text-cityguide-purple hover:text-cityguide-dark-purple">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{place.category}</span>
                  <span className="flex items-center text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {place.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center text-cityguide-purple hover:text-cityguide-dark-purple font-medium">
            View all featured places
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;
