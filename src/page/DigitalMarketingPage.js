"use client";

import { memo } from "react";
import { digitalMarketing_services, digitalMarketing_benefitsList } from '@/data/data';
import Title from "@/components/ui/title";
import Link from "next/link";

// Component for service card to improve reusability and readability
const ServiceCard = memo(function ServiceCard({ service, idx }) {
  return (
    <div
      key={idx}
      className="group p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-indigo-50"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-foreground/10 rounded-full w-max">
          {service.icon}
        </div>
        <h4 className="text-xl font-semibold text-foreground">{service.title}</h4>
      </div>
      <p className="text-foreground/60 leading-relaxed">{service.description}</p>
    </div>
  );
});

// Component for benefit card to improve reusability and readability
const BenefitCard = memo(function BenefitCard({ benefit, idx }) {
  return (
    <div
      key={idx}
      className="bg-background/10 p-8 rounded-2xl space-y-4 backdrop-blur-sm hover:bg-background/15 transition-colors"
    >
      <div className="p-3 bg-background/10 rounded-full w-max">
        {benefit.icon}
      </div>
      <h4 className="text-xl font-semibold text-background">{benefit.title}</h4>
      <p className="text-background/60">{benefit.description}</p>
    </div>
  );
});

/**
 * Digital Marketing Page Component
 * Displays information about digital marketing services
 */
const DigitalMarketingPage = memo(function DigitalMarketingPage() {
  return (
    <section className="min-h-screen bg-background text-foreground max-w-7xl mx-auto space-y-20 py-16 px-4">
      {/* Hero Section */}
      <section className="text-justify space-y-4">
        <Title
          title="Digital Marketing Services"
          subTitle="Grow Smarter. Convert Better. Scale Faster."
        />
        <p className="max-w-6xl mx-auto text-lg text-foreground/60 leading-relaxed">
          At Creative Web Pro, we deliver full-funnel digital marketing solutions that drive real business growth. Whether you&apos;re scaling startups or enterprise campaigns, we create performance-driven strategies that convert. Combining data, creativity, and cutting-edge tech to help you dominate your digital landscape.
        </p>
      </section>

      {/* Services Grid */}
      <section className="space-y-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Our Digital Marketing Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalMarketing_services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-foreground rounded-3xl p-8 md:p-12 space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-background">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalMarketing_benefitsList.map((benefit, idx) => (
            <BenefitCard key={idx} benefit={benefit} idx={idx} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-14">
        <div className="space-y-4 pb-6">
          <h3 className="text-3xl font-bold text-foreground">
            Ready to Dominate Your Market?
          </h3>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Let&apos;s create performance-driven campaigns that deliver measurable business growth and real ROI.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:bg-foreground/90 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
          aria-label="Contact us to start your digital marketing campaign"
        >
          Launch Your Campaign
        </Link>
      </section>
    </section>
  );
});

export default DigitalMarketingPage;