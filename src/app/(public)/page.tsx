import type { Metadata } from 'next';
import HeroSection from '@/components/public/home/HeroSection';
import ClientsSection from '@/components/public/home/ClientsSection';
import ServicesSection from '@/components/public/home/ServicesSection';
import TVETTypesSection from '@/components/public/home/TVETTypesSection';
import WhyChooseUsSection from '@/components/public/home/WhyChooseUsSection';
import DocumentsSection from '@/components/public/home/DocumentsSection';
import TestimonialsSection from '@/components/public/home/TestimonialsSection';
import WhatsAppButton from '@/components/public/home/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Dapin Edu — Empowering Kenya\'s TVET Institutions',
  description:
    'Dapin Edu helps entrepreneurs and organizations establish accredited TVET colleges in Kenya with full regulatory compliance and digital infrastructure.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TVETTypesSection />
      <WhyChooseUsSection />
      <DocumentsSection />
      <TestimonialsSection />
      <WhatsAppButton />
    </>
  );
}
