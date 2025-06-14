
import React from 'react';
import CategoryPageTemplate from '@/components/shared/CategoryPageTemplate';
import { Users, Calendar, Heart, HandHelping, User, MessageSquare } from 'lucide-react';

const Community = () => {
  const communityItems = [
    {
      title: "Neighborhood Associations",
      description: "Connect with your local neighborhood group",
      icon: Users,
    },
    {
      title: "Community Events",
      description: "Calendar of local events and gatherings",
      icon: Calendar,
    },
    {
      title: "Volunteer Opportunities",
      description: "Ways to give back and help your community",
      icon: Heart,
    },
    {
      title: "Support Services",
      description: "Resources for those in need of assistance",
      icon: HandHelping,
    },
    {
      title: "Newcomer Programs",
      description: "Resources specifically for new residents",
      icon: User,
    },
    {
      title: "Community Forums",
      description: "Online and in-person discussion groups",
      icon: MessageSquare,
    },
  ];

  const communityResources = [
    {
      title: "Community Center Directory",
      description: "Find neighborhood community centers and their programs",
      link: "#",
    },
    {
      title: "Volunteer Match Service",
      description: "Connect with organizations that need volunteers",
      link: "#",
    },
    {
      title: "Community Calendar",
      description: "Comprehensive listing of events throughout the city",
      link: "#",
    },
  ];

  const communityFaqs = [
    {
      question: "How can I get involved in my neighborhood association?",
      answer: "Most neighborhood associations hold regular meetings that are open to all residents. Check the community calendar or contact your area's association directly. Many also have social media groups or newsletters you can subscribe to for updates.",
    },
    {
      question: "Are there programs to help newcomers adjust to the city?",
      answer: "Yes! The City Welcome Program offers orientation sessions, networking events, and resource guides specifically for new residents. The public library also hosts newcomer coffee hours and cultural exchange programs.",
    },
    {
      question: "How can I organize a community event?",
      answer: "Community events may require permits depending on their size and location. The Parks and Recreation Department can help with public space reservations, while the Community Relations office offers event planning guidance and potential sponsorship opportunities.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Community"
      subtitle="Connect with local groups, events, and social opportunities."
      bgColor="bg-cyan-100"
      textColor="text-cyan-500"
      icon={<Users className="h-6 w-6 text-cyan-500" />}
      introduction="A strong sense of community is at the heart of city life. This guide helps you connect with neighborhood associations, discover local events, find volunteer opportunities, and access support services that strengthen our community bonds and enhance quality of life for all residents."
      items={communityItems}
      resources={communityResources}
      faqs={communityFaqs}
    />
  );
};

export default Community;
