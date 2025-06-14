import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Bell } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-cityguide-purple to-cityguide-dark-purple rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Explore Your City?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations, real-time updates, and all the essential information you need as a newcomer to the city.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-cityguide-purple hover:bg-gray-100 flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Mobile App
            </Button>

            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl">50k+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl">200+</div>
              <div className="text-sm opacity-80">City Services</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl">15+</div>
              <div className="text-sm opacity-80">Categories</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl md:text-3xl">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
