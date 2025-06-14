import React from 'react';
import CategoryPageTemplate from '@/components/shared/CategoryPageTemplate';
import { School, GraduationCap, Library, BookOpen, Laptop, PenTool } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      title: "Public Schools",
      description: "Information on K-12 public education in the city",
      icon: School,
    },
    {
      title: "Higher Education",
      description: "Universities, colleges and professional schools",
      icon: GraduationCap,
    },
    {
      title: "Libraries",
      description: "Public and academic libraries around the city",
      icon: Library,
    },
    {
      title: "Adult Education",
      description: "Continuing education and professional development courses",
      icon: BookOpen,
    },
    {
      title: "Online Learning",
      description: "Digital education resources and platforms",
      icon: Laptop,
    },
    {
      title: "Art & Music Schools",
      description: "Specialized education in arts and music",
      icon: PenTool,
    },
  ];

  const educationResources = [
    {
      title: "School District Website",
      description: "Official resource for public school information",
      link: "#",
    },
    {
      title: "City Library System",
      description: "Access digital resources and find your local branch",
      link: "#",
    },
    {
      title: "Education Assistance Programs",
      description: "Financial aid and scholarship information",
      link: "#",
    },
  ];

  const educationFaqs = [
    {
      question: "How do I enroll my child in public school?",
      answer: "To enroll in public schools, visit the district office with proof of residence, birth certificate, and immunization records. Registration typically opens in spring for the following school year.",
    },
    {
      question: "Are there any specialized public schools in the city?",
      answer: "Yes, our city offers several magnet schools specializing in STEM, arts, language immersion, and international baccalaureate programs. These schools often have application processes or lotteries for admission.",
    },
    {
      question: "What continuing education options are available for adults?",
      answer: "Adults can access continuing education through community colleges, university extension programs, and the city's workforce development center. Courses range from professional certifications to personal enrichment.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Education"
      subtitle="Discover schools, universities, and learning resources throughout the city."
      bgColor="bg-blue-100"
      textColor="text-blue-500"
      icon={<School className="h-6 w-6 text-blue-500" />}
      introduction="Education is a cornerstone of our community, with excellent options from early childhood through higher education and continuing learning. Our city boasts renowned public and private schools, prestigious universities, and abundant resources for lifelong education."
      items={educationItems}
      resources={educationResources}
      faqs={educationFaqs}
    />
  );
};

export default Education;
