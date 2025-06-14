
import React from 'react';
import { Info, Calendar, Wifi, Clock, Globe } from 'lucide-react';

const QuickInfoCards = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="section-title">Essential Information</h2>
          <p className="text-gray-600">Quick access to important city information for newcomers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-cityguide-soft-gray rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cityguide-purple/10 p-2 rounded-lg">
                <Info className="h-5 w-5 text-cityguide-purple" />
              </div>
              <h3 className="font-semibold">Emergency Contacts</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>Police Emergency</span>
                <span className="font-medium">911</span>
              </li>
              <li className="flex justify-between">
                <span>Medical Emergency</span>
                <span className="font-medium">911</span>
              </li>
              <li className="flex justify-between">
                <span>City Helpline</span>
                <span className="font-medium">555-0100</span>
              </li>
              <li className="flex justify-between">
                <span>Tourist Information</span>
                <span className="font-medium">555-0200</span>
              </li>
            </ul>
          </div>

          <div className="bg-cityguide-soft-gray rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cityguide-purple/10 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-cityguide-purple" />
              </div>
              <h3 className="font-semibold">Upcoming Events</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-medium">City Festival</div>
                <div className="text-gray-600 flex justify-between">
                  <span>June 15-18, 2025</span>
                  <span>Downtown</span>
                </div>
              </li>
              <li>
                <div className="font-medium">Farmers Market</div>
                <div className="text-gray-600 flex justify-between">
                  <span>Every Saturday</span>
                  <span>City Square</span>
                </div>
              </li>
              <li>
                <div className="font-medium">Tech Conference</div>
                <div className="text-gray-600 flex justify-between">
                  <span>July 10-12, 2025</span>
                  <span>Convention Center</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-cityguide-soft-gray rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cityguide-purple/10 p-2 rounded-lg">
                <Wifi className="h-5 w-5 text-cityguide-purple" />
              </div>
              <h3 className="font-semibold">Public WiFi Spots</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-medium">Central Library</div>
                <div className="text-gray-600">Free WiFi with library card</div>
              </li>
              <li>
                <div className="font-medium">City Square</div>
                <div className="text-gray-600">Open public WiFi network</div>
              </li>
              <li>
                <div className="font-medium">Transit Stations</div>
                <div className="text-gray-600">1 hour free access</div>
              </li>
              <li>
                <div className="font-medium">Community Centers</div>
                <div className="text-gray-600">WiFi available during opening hours</div>
              </li>
            </ul>
          </div>

          <div className="bg-cityguide-soft-gray rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cityguide-purple/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-cityguide-purple" />
              </div>
              <h3 className="font-semibold">Service Hours</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>City Hall</span>
                <span>Mon-Fri: 8am-5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Public Library</span>
                <span>Mon-Sat: 9am-7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Public Transportation</span>
                <span>5am-12am Daily</span>
              </li>
              <li className="flex justify-between">
                <span>Recycling Centers</span>
                <span>Tue-Sun: 8am-6pm</span>
              </li>
            </ul>
          </div>

          <div className="bg-cityguide-soft-gray rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-cityguide-purple/10 p-2 rounded-lg">
                <Globe className="h-5 w-5 text-cityguide-purple" />
              </div>
              <h3 className="font-semibold">Newcomer Resources</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="block hover:text-cityguide-purple transition-colors">
                  <div className="font-medium">Welcome Center</div>
                  <div className="text-gray-600">City Hall, Ground Floor</div>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-cityguide-purple transition-colors">
                  <div className="font-medium">Immigration Services</div>
                  <div className="text-gray-600">555-0123 / 123 Main St.</div>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-cityguide-purple transition-colors">
                  <div className="font-medium">Language Exchange</div>
                  <div className="text-gray-600">Community Center, Tue & Thu</div>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-cityguide-purple to-cityguide-dark-purple rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Info className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold">Get Citizen App</h3>
            </div>
            <p className="mb-4 text-sm text-white/90">
              Download our mobile app for on-the-go access to city resources, real-time updates, and personalized recommendations.
            </p>
            <div className="flex space-x-2">
              <button className="bg-black/30 hover:bg-black/40 py-2 px-3 rounded-md flex items-center justify-center text-xs">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 12.4c0-3.4 2.8-5 2.9-5.1-1.6-2.3-4-2.6-4.9-2.6-2.1-.2-4.1 1.2-5.1 1.2-1 0-2.7-1.2-4.4-1.2-2.3 0-4.4 1.3-5.6 3.4-2.4 4.1-.6 10.3 1.7 13.6 1.1 1.6 2.5 3.5 4.3 3.4 1.7-.1 2.4-1.1 4.4-1.1 2.1 0 2.7 1.1 4.5 1.1 1.9 0 3.1-1.7 4.2-3.4.9-1.3 1.3-2.6 1.3-2.7-.1-.1-2.3-.9-2.3-3.4z"></path>
                  <path d="M14.7 3.9c.9-1.1 1.6-2.7 1.4-4.2-1.3.1-3 .9-3.9 2-.9 1-1.6 2.6-1.4 4.1 1.5.1 3-.7 3.9-1.9"></path>
                </svg>
                App Store
              </button>
              <button className="bg-black/30 hover:bg-black/40 py-2 px-3 rounded-md flex items-center justify-center text-xs">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path>
                </svg>
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;
