"use client";

import { memo } from "react";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ui_ux_services, ui_ux_benefitsList, ui_ux_processSteps } from '@/data/data';
import Title from "@/components/ui/title";
import Link from "next/link";

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

const UXUIDesignPage = memo(function UXUIDesignPage() {
  return (
    <section className="min-h-screen bg-background text-foreground max-w-7xl mx-auto space-y-20 py-16 px-4">
      {/* Hero Section */}
      <section className="text-justify space-y-4">
        <Title
          title="UI/UX Design Services"
          subTitle="Designing Digital Experiences That Truly Connect"
        />
        <p className="max-w-6xl mx-auto text-lg text-foreground/60 leading-relaxed">
          At Creative Web Pro, we don&apos;t just design interfaces — we craft intuitive, delightful, and business-driven digital experiences. Whether you&apos;re a startup building your first MVP, a SaaS company scaling up, or an enterprise modernizing your product, our UI/UX services ensure your users engage, trust, and stay loyal.
          We combine deep research, creative strategy, and stunning visual design to bring your digital products to life — seamlessly across web, mobile, and beyond.
        </p>
      </section>

      {/* Services Grid */}
      <section className="space-y-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Comprehensive UI/UX Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ui_ux_services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Visual Process Timeline */}
      <section className="space-y-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Results You Can Expect
        </h3>
        <FeaturesSection processSteps={ui_ux_processSteps} />
      </section>

      {/* Benefits Section */}
      <section className="bg-foreground rounded-3xl p-8 md:p-12 space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-background">
          Why Partner With Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ui_ux_benefitsList.map((benefit, idx) => (
            <BenefitCard key={idx} benefit={benefit} idx={idx} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-14">
        <div className="space-y-4 pb-6">
          <h3 className="text-3xl font-bold text-foreground">
            Let&apos;s Build Your Next Great User Experience
          </h3>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Ready to create digital products that users will love — and competitors will envy?
            Contact us today to kickstart your UI/UX transformation journey!
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:bg-foreground/90 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
          aria-label="Contact us to start your UI/UX design project"
        >
          Start Your Project Now
        </Link>
      </section>
    </section>
  );
});

export default UXUIDesignPage;