
import React from 'react';
import CategoryPageTemplate from '@/components/shared/CategoryPageTemplate';
import { Briefcase, Building, Laptop, Users, Clipboard, GraduationCap } from 'lucide-react';

const Employment = () => {
  const employmentItems = [
    {
      title: "Job Listings",
      description: "Current employment opportunities in the city",
      icon: Clipboard,
    },
    {
      title: "Major Employers",
      description: "Information about the city's largest companies and organizations",
      icon: Building,
    },
    {
      title: "Remote Work",
      description: "Resources for finding remote positions and co-working spaces",
      icon: Laptop,
    },
    {
      title: "Networking Events",
      description: "Professional meetups and career fairs",
      icon: Users,
    },
    {
      title: "Career Development",
      description: "Training, workshops, and skill-building resources",
      icon: GraduationCap,
    },
    {
      title: "Entrepreneurship",
      description: "Support for starting and growing your own business",
      icon: Briefcase,
    },
  ];

  const employmentResources = [
    {
      title: "City Job Portal",
      description: "Official employment listings and application platform",
      link: "#",
    },
    {
      title: "Workforce Development Center",
      description: "Training programs and career counseling services",
      link: "#",
    },
    {
      title: "Business Resource Hub",
      description: "Support for entrepreneurs and small business owners",
      link: "#",
    },
  ];

  const employmentFaqs = [
    {
      question: "What industries are most prominent in the city?",
      answer: "Our city has a diverse economy with strengths in healthcare, technology, education, finance, and manufacturing. Recent growth has been particularly strong in the tech and healthcare sectors.",
    },
    {
      question: "Are there resources for job seekers new to the area?",
      answer: "Yes, the Workforce Development Center offers newcomer orientation sessions, resume workshops, and job placement assistance. They also maintain a network of employers interested in hiring new residents.",
    },
    {
      question: "What support exists for entrepreneurs?",
      answer: "Entrepreneurs can access mentorship, funding opportunities, and affordable workspace through the Business Resource Hub. The city also offers tax incentives for startups in certain industries and locations.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Employment"
      subtitle="Discover job opportunities and career resources throughout the city."
      bgColor="bg-amber-100"
      textColor="text-amber-500"
      icon={<Briefcase className="h-6 w-6 text-amber-500" />}
      introduction="Our city offers a dynamic job market with opportunities across various industries. Whether you're seeking employment, looking to advance your career, or planning to start your own business, this guide provides valuable resources to help you succeed in our local economy."
      items={employmentItems}
      resources={employmentResources}
      faqs={employmentFaqs}
    />
  );
};

export default Employment;
