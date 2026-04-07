import type { Metadata } from 'next';
import ContactSection from '@/components/public/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us — Dapin Edu',
  description:
    'Get in touch with Dapin Edu. Fill in the contact form or reach us at our Nairobi office. We help you establish accredited TVET colleges in Kenya.',
};

export default function ContactPage() {
  return <ContactSection />;
}
