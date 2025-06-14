import React from 'react';
import { Link } from 'react-router-dom';
import { Home, School, Bus, Briefcase, Heart, Building, Users, Book } from 'lucide-react';

const categories = [
  {
    title: "Housing",
    icon: <Home className="h-6 w-6 text-cityguide-purple" />,
    description: "Find accommodation options from apartments to shared spaces",
    bgColor: "bg-purple-50",
    path: "/housing"
  },
  {
    title: "Education",
    icon: <School className="h-6 w-6 text-blue-500" />,
    description: "Discover schools, universities, and learning resources",
    bgColor: "bg-blue-50",
    path: "/education"
  },
  {
    title: "Transportation",
    icon: <Bus className="h-6 w-6 text-green-500" />,
    description: "Navigate public transit, biking routes, and more",
    bgColor: "bg-green-50",
    path: "/transportation"
  },
  {
    title: "Employment",
    icon: <Briefcase className="h-6 w-6 text-amber-500" />,
    description: "Job opportunities and career resources",
    bgColor: "bg-amber-50",
    path: "/employment"
  },
  {
    title: "Healthcare",
    icon: <Heart className="h-6 w-6 text-red-500" />,
    description: "Hospitals, clinics, and health services",
    bgColor: "bg-red-50",
    path: "/healthcare"
  },
  {
    title: "Government",
    icon: <Building className="h-6 w-6 text-indigo-500" />,
    description: "Public services and administrative information",
    bgColor: "bg-indigo-50",
    path: "/government"
  },
  {
    title: "Community",
    icon: <Users className="h-6 w-6 text-cyan-500" />,
    description: "Local groups, events, and social connections",
    bgColor: "bg-cyan-50",
    path: "/community"
  },
  {
    title: "Culture",
    icon: <Book className="h-6 w-6 text-pink-500" />,
    description: "Arts, history, and cultural experiences",
    bgColor: "bg-pink-50",
    path: "/culture"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">City Information by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different aspects of city life and find the information you need,
            organized by categories for easy navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="category-card flex flex-col items-center text-center group hover:shadow-lg transition-shadow rounded-lg p-6 bg-white"
            >
              <div className={`p-4 rounded-full ${category.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
