"use client";

import { memo, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";
import Title from "@/components/ui/title";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { whyUsData } from '@/data/data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 }
  })
};

const FeatureCard = memo(function FeatureCard({ item, index, cardRef, isInView }) {
  return (
    <motion.div
      key={index}
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative bg-background rounded-2xl p-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:-translate-y-2 hover:shadow-lg hover:shadow-foreground/5
        border border-foreground/10 hover:border-foreground/20
        before:absolute before:inset-0 before:bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.15),transparent])
        before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
        overflow-hidden"
    >
      {/* Lottie Animation */}
      <div className="relative h-32 w-full flex items-center justify-center mb-6">
        <DotLottieReact
          src={item.lottie}
          style={{ width: 200, height: 200 }}
          loop
          autoplay
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="relative mt-2 text-xl font-semibold text-center text-foreground">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 text-center text-foreground/70 text-sm leading-6">
        {item.desc}
      </p>
    </motion.div>
  );
});

const WhyUs = memo(function WhyUs() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const handleMouseMove = useCallback((e) => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  }, []);

  // Mouse move effect for cards
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="why-us" className="pt-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Why Choose Us"
          subTitle="Get your business style back with our proven expertise and innovative solutions"
        />

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyUsData.map((item, index) => (
            <FeatureCard
              key={index}
              item={item}
              index={index}
              cardRef={(el) => cardsRef.current[index] = el}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhyUs;