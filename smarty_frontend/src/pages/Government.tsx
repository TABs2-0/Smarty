
import React from 'react';
import CategoryPageTemplate from '@/components/shared/CategoryPageTemplate';
import { Building, FileText, User, Scale, Shield, MapPin } from 'lucide-react';

const Government = () => {
  const governmentItems = [
    {
      title: "City Departments",
      description: "Information about various city government offices and services",
      icon: Building,
    },
    {
      title: "Documents & Records",
      description: "How to obtain vital records, permits, and other official documents",
      icon: FileText,
    },
    {
      title: "Resident Services",
      description: "Services available to city residents and how to access them",
      icon: User,
    },
    {
      title: "Laws & Regulations",
      description: "Local ordinances, codes, and legal information",
      icon: Scale,
    },
    {
      title: "Public Safety",
      description: "Police, fire, and emergency services information",
      icon: Shield,
    },
    {
      title: "City Planning",
      description: "Urban development plans and community input opportunities",
      icon: MapPin,
    },
  ];

  const governmentResources = [
    {
      title: "City Hall Website",
      description: "Official portal for city government information",
      link: "#",
    },
    {
      title: "Online Service Portal",
      description: "Pay bills, report issues, and request services online",
      link: "#",
    },
    {
      title: "City Council Information",
      description: "Meeting schedules, agendas, and contact information for representatives",
      link: "#",
    },
  ];

  const governmentFaqs = [
    {
      question: "How do I register to vote in the city?",
      answer: "You can register to vote at the City Clerk's office, public libraries, or online through the state's voter registration portal. You'll need proof of residence and identification. The deadline is typically 30 days before an election.",
    },
    {
      question: "Where can I pay my property taxes?",
      answer: "Property taxes can be paid online through the City Treasurer's portal, by mail, or in person at City Hall. Payments are typically due in two installments each year, and various payment plans may be available.",
    },
    {
      question: "How do I obtain a building permit?",
      answer: "Building permits are issued by the Department of Building and Safety. You can start the application process online, but might need to visit their office for plan review. Permit requirements vary based on the type and scope of your project.",
    },
  ];

  return (
    <CategoryPageTemplate
      title="Government"
      subtitle="Navigate city services, departments, and civic information."
      bgColor="bg-indigo-100"
      textColor="text-indigo-500"
      icon={<Building className="h-6 w-6 text-indigo-500" />}
      introduction="Our city government provides essential services and resources to residents, businesses, and visitors. This guide will help you navigate municipal departments, access public services, understand local regulations, and participate in civic processes that shape our community."
      items={governmentItems}
      resources={governmentResources}
      faqs={governmentFaqs}
    />
  );
};

export default Government;
