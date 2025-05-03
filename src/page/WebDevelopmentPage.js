"use client";

import { memo } from "react";
import { web_services, web_benefitsList } from '@/data/data';
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
      <ul className="text-foreground/60 list-disc pl-5 space-y-2">
        {service.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
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

const WebDevelopmentPage = memo(function WebDevelopmentPage() {
  return (
    <section className="min-h-screen bg-background text-foreground max-w-7xl mx-auto space-y-20 py-16 px-4">
      {/* Hero Section */}
      <section className="text-justify space-y-4">
        <Title
          title="Web Development Services"
          subTitle="Build Powerful, Scalable & Modern Web Solutions That Drive Results"
        />
        <p className="max-w-6xl mx-auto text-lg text-foreground/60 leading-relaxed">
          At Creative Web Pro, we specialize in creating responsive, secure, and user-friendly websites and web applications tailored to your goals. From startups to enterprises, we deliver scalable web solutions that look stunning, load fast, and convert visitors into customers. Whether it&apos;s a dynamic business website, eCommerce store, or custom web application, we ensure your online presence works seamlessly — across all browsers, devices, and screen sizes.
        </p>
      </section>

      {/* Services Grid */}
      <section className="space-y-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Our Web Development Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {web_services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-foreground rounded-3xl p-8 md:p-12 space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-background">
          Why Choose Creative Web Pro?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {web_benefitsList.map((benefit, idx) => (
            <BenefitCard key={idx} benefit={benefit} idx={idx} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-14">
        <div className="space-y-4 pb-6">
          <h3 className="text-3xl font-bold text-foreground">
            Let&apos;s Build Your Next Great Web Solution
          </h3>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Ready to elevate your online presence? We&apos;ll craft a high-performance website or web application that drives real business results.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-foreground text-background px-8 py-4 rounded-xl font-semibold hover:bg-foreground/90 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
          aria-label="Contact us to start your web development project"
        >
          Start Your Web Project
        </Link>
      </section>
    </section>
  );
});

export default WebDevelopmentPage;