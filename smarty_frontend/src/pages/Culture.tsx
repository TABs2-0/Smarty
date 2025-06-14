import React from 'react';
import CategoryPageTemplate from '@/components/shared/CategoryPageTemplate';
import { Book, Music, Palette, Film, Utensils, Landmark } from 'lucide-react';

const Culture = () => {
  const cultureItems = [
    {
      title: "Museums & Galleries",
      description: "Explore art, history, and science exhibitions",
      icon: Palette,
    },
    {
      title: "Performance Venues",
      description: "Theaters, concert halls, and entertainment spaces",
      icon: Music,
    },
    {
      title: "Historical Sites",
      description: "Landmarks and heritage locations around the city",
      icon: Landmark,
    },
    {
      title: "Libraries & Literary Events",
      description: "Book clubs, author talks, and literary festivals",
      icon: Book,
    },
    {
      title: "Cinemas & Film Festivals",
      description: "Movie theaters and film culture",
      icon: Film,
    },
    {
      title: "Culinary Arts",
      description: "Food festivals, cooking classes, and gastronomic experiences",
      icon: Utensils,
    },
  ];

  const cultureResources = [
    {
      title: "City Arts Council",
      description: "Information about cultural programs and funding opportunities",
      link: "#",
    },
    {
      title: "Events Calendar",
      description: "Comprehensive listing of cultural events throughout the city",
      link: "#",
    },
    {
      title: "Cultural District Guide",
      description: "Interactive map of the city's arts and culture neighborhoods",
      link: "#",
    },
  ];

  const cultureFaqs = [
    {
      question: "Are there any free museum days?",
      answer: "Yes, most city museums offer free admission on the first Sunday of each month. The Contemporary Art Museum is free every Thursday evening, and the City History Museum offers free entry to residents on the last Friday of each month.",
    },
    {
      question: "How can I find out about cultural festivals?",
      answer: "The City Cultural Calendar is the best resource for festival information. Major annual events include the International Film Festival in April, Heritage Days in June, and the Music & Arts Festival in September.",
    },
    {
      question: "Are there discounts for students and seniors?",
      answer: "Most cultural institutions offer discounted admission for students, seniors, and military personnel. The City Culture Pass provides additional discounts and is available to all residents through the public library.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Culture"
      subtitle="Discover arts, history, and cultural experiences throughout the city."
      bgColor="bg-pink-100"
      textColor="text-pink-500"
      icon={<Book className="h-6 w-6 text-pink-500" />}
      introduction="Our city boasts a vibrant cultural scene with world-class museums, theaters, music venues, and historical sites. This guide helps you explore the rich tapestry of arts and culture that makes our city unique, from established institutions to emerging creative spaces."
      items={cultureItems}
      resources={cultureResources}
      faqs={cultureFaqs}
    />
  );
};

export default Culture;
