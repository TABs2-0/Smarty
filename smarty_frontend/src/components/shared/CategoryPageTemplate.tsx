import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { LucideIcon, MapPin } from 'lucide-react';

interface CategoryItem {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

interface CategoryResource {
  title: string;
  description: string;
  link: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
  introduction: string;
  items: CategoryItem[];
  resources: CategoryResource[];
  faqs: { question: string; answer: string }[];
}

const CategoryPageTemplate: React.FC<CategoryPageProps> = ({
  title,
  subtitle,
  bgColor,
  textColor,
  icon,
  introduction,
  items,
  resources,
  faqs
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className={`${bgColor} py-16`}>
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${title.toLowerCase()}`}>{title}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center mb-4">
              <div className="mr-4 bg-white rounded-full p-3">
                {icon}
              </div>
              <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h1>
            </div>
            <p className={`text-xl mb-8 max-w-2xl ${textColor}`}>{subtitle}</p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700">{introduction}</p>
            </div>
          </div>
        </section>

        {/* Items Grid */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Explore {title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`${bgColor} bg-opacity-20 p-3 rounded-full`}>
                      {React.createElement(item.icon, { className: `h-6 w-6 ${textColor}` })}
                    </div>
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.link && (
                      <Button variant="outline" className="mt-2" asChild>
                        <a href={item.link}>Learn More</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Useful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cityguide-purple to-purple-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Need more information?</h2>
              <p className="mb-6">Our team is ready to help you navigate all aspects of city life.</p>
              <div className="flex justify-center">
                <Button variant="outline" className="bg-white text-cityguide-purple hover:bg-gray-100">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPageTemplate;
