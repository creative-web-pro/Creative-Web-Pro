"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentImage, setCurrentImage] = useState("/assets/hero_light.jpg");

  // Mount effect - runs once
  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme change effect
  useEffect(() => {
    if (mounted) {
      setCurrentImage(
        theme === "dark" ? "/assets/hero_dark.jpg" : "/assets/hero_light.jpg"
      );
    }
  }, [theme, mounted]);

  // Scroll to about section handler
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[93dvh] min-h-[600px] max-h-[1000px] flex items-center justify-center mt-4">
      {/* Background Image with Key Prop */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          key={currentImage} // Force re-render when image changes
          src={currentImage}
          alt="CREATIVE WEB PRO"
          fill
          priority
          quality={100}
          className="object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(129,177,213,0.09)] backdrop-blur-[8.8px] bg-[rgba(129,177,213,0.09)]"
        style={{
          backdropFilter: "blur(8.8px)",
          WebkitBackdropFilter: "blur(8.8px)",
        }}
      >
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Text content */}
      <div className="container relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bevan-regular text-foreground mb-6 leading-tight"
          >
            CREATIVE <span className="gradient-text">WEB PRO</span>
          </motion.h1>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
