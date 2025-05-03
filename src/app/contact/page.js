'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(
  () => import('@/page/ContactForm'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading Contact Form...</div>
      </div>
    )
  }
);

const ContactFormWrapper = memo(function ContactFormWrapper() {
  return <ContactForm />;
});

export default ContactFormWrapper;
