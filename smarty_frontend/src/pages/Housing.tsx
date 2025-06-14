import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Removed BrowserRouter, Routes, Route as they belong in the main App.js
import { Bed, Home, Building, Key, MapPin, Users, School, ChevronDown } from 'lucide-react';

// --- CategoryPageTemplate Component ---
// This component encapsulates the common layout for category pages
export const CategoryPageTemplate = ({ // Exported as a named export if needed elsewhere
  title,
  subtitle,
  bgColor,
  textColor,
  icon: TitleIcon,
  introduction,
  items,
  resources,
  faqs,
}) => {
  // State to manage FAQ accordion open/close
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      {/* Hero Section (Banner) */}
      <div className={`py-16 px-4 md:px-8 ${bgColor} text-gray-800 rounded-b-xl shadow-inner`}>
        <div className="container mx-auto flex items-center">
          {TitleIcon && <TitleIcon className={`h-8 w-8 mr-4 ${textColor}`} />}
          <div>
            <h1 className={`text-4xl font-bold ${textColor}`}>{title}</h1>
            <p className={`mt-2 text-lg ${textColor.replace('text-', 'text-opacity-80 text-')}`}>{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-8">
        {/* Introduction Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{introduction}</p>
        </section>

        {/* Explore Items Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Explore {title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {item.icon && <item.icon className={`h-10 w-10 mb-4 ${textColor}`} />}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Useful Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Useful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-cityguide-purple transition-colors duration-200">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <p className="mt-4 text-gray-700 leading-relaxed transition-opacity duration-300 ease-in-out opacity-100">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="rounded-xl p-8 bg-gradient-to-r from-purple-500 to-cityguide-purple text-white text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-3">Need more Information?</h2>
          <p className="text-lg opacity-90 mb-6">
            Our team is ready to help you navigate all aspects of city life.
          </p>
          <button className="bg-white text-cityguide-purple font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

// --- Housing Component (Your original component) ---
const Housing = () => {
  const housingItems = [
    {
      title: "Apartments & Condos",
      description: "Find modern apartments and condominiums throughout the city",
      icon: Building,
    },
    {
      title: "Houses & Townhomes",
      description: "Discover houses and townhomes for families and individuals",
      icon: Home,
    },
    {
      title: "Student Housing",
      description: "On-campus and off-campus housing options for students",
      icon: School,
    },
    {
      title: "Short-term Rentals",
      description: "Temporary accommodations for visitors and newcomers",
      icon: Key,
    },
    {
      title: "Shared Accommodations",
      description: "Roommate opportunities and shared living spaces",
      icon: Users,
    },
    {
      title: "Housing Assistance",
      description: "Resources and support for housing needs",
      icon: Bed,
    },
  ];

  const housingResources = [
    {
      title: "City Housing Portal",
      description: "Official city resource for housing information and listings",
      link: "#", // Placeholder link
    },
    {
      title: "Rental Rights Guide",
      description: "Learn about your rights as a tenant in our city",
      link: "#", // Placeholder link
    },
    {
      title: "Neighborhood Profiles",
      description: "Detailed information about different city neighborhoods",
      link: "#", // Placeholder link
    },
  ];

  const housingFaqs = [
    {
      question: "What's the average rent for a one-bedroom apartment?",
      answer: "The average rent for a one-bedroom apartment varies by neighborhood, ranging from $900 to $1,800 per month. Downtown areas tend to have higher prices, while suburbs offer more affordable options.",
    },
    {
      question: "Are utilities typically included in rent?",
      answer: "This varies by property. Many apartments include water and trash service, but electricity, gas, and internet are commonly paid by tenants. Always check the lease agreement for specific details about utility responsibilities.",
    },
    {
      question: "What documents do I need to apply for housing?",
      answer: "Most landlords require proof of income (pay stubs or offer letter), photo ID, rental history, and references. Some may also request a credit check or proof of renter's insurance.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Housing"
      subtitle="Find your perfect home in our city, from apartments to houses and everything in between."
      // Assuming 'bg-purple-100' and 'text-cityguide-purple' are defined in your external Tailwind config
      bgColor="bg-purple-100"
      textColor="text-cityguide-purple"
      icon={Home} // Pass the Lucide React icon component directly
      introduction="Our city offers diverse housing options to fit every lifestyle and budget. Whether you're looking for a downtown apartment, a suburban family home, or student accommodation, this guide will help you navigate the local housing market and find the perfect place to call home."
      items={housingItems}
      resources={housingResources}
      faqs={housingFaqs}
    />
  );
};

export default Housing; // This is the only default export from this file
