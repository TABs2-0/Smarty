
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This guide made my transition to the city so much easier. I found all the resources I needed in one place!",
    author: "Sarah L.",
    role: "International Student",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23CBD5E1'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%2394A3B8'/%3E%3Cpath d='M25 85C25 68 37 55 50 55S75 68 75 85' fill='%2394A3B8'/%3E%3C/svg%3E"
  },
  {
    quote: "As a job seeker new to the area, the employment resources section was incredibly valuable for my search.",
    author: "Michael T.",
    role: "Software Developer",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23DBEAFE'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%2393C5FD'/%3E%3Cpath d='M25 85C25 68 37 55 50 55S75 68 75 85' fill='%2393C5FD'/%3E%3C/svg%3E"
  },
  {
    quote: "The interactive map helped me discover hidden gems in my new neighborhood that I wouldn't have found otherwise.",
    author: "Elena R.",
    role: "Entrepreneur",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FCE7F3'/%3E%3Ccircle cx='50' cy='35' r='20' fill='%23F9A8D4'/%3E%3Cpath d='M25 85C25 68 37 55 50 55S75 68 75 85' fill='%23F9A8D4'/%3E%3C/svg%3E"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-cityguide-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Newcomers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who have used our city guide to help them navigate their new surroundings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="absolute top-4 right-4 text-cityguide-light-purple">
                <Quote className="h-12 w-12 opacity-20" />
              </div>
              <div className="mb-6">
                <p className="text-gray-700 italic relative z-10">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cityguide-purple/5 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Have you used our Smart City Guide? We'd love to hear about your experience
            and how we can make it even better for newcomers.
          </p>
          <button className="bg-cityguide-purple hover:bg-cityguide-dark-purple text-white py-2 px-6 rounded-full font-medium transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
