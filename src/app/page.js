"use client";

import { memo } from "react";
import dynamic from 'next/dynamic';

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Feedback from "@/components/Feedback";

const About = dynamic(() => import('@/components/About'), { 
  ssr: false,
  loading: () => <div className="min-h-screen" aria-label="Loading About section" />
});

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Feedback />
    </main>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Home);