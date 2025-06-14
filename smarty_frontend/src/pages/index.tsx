
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CityMap from '@/components/home/CityMap';
import CategorySection from '@/components/home/CategorySection';
import FeaturedPlaces from '@/components/home/FeaturedPlaces';
import QuickInfoCards from '@/components/home/QuickInfoCards';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <CityMap />
        <FeaturedPlaces />
        <QuickInfoCards />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
