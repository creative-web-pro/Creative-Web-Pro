"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  BarChart2,
  Users,
} from "lucide-react";
import { aboutFeatures } from "@/data/data";
import Link from "next/link";
import Title from "@/components/ui/title";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ICON_MAP = {
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  "bar-chart-2": BarChart2,
  users: Users,
};

const FeatureCard = ({ icon, color, title, description }) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <div className="flex items-start gap-5 p-4 rounded-xl border border-foreground/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-background">
      <div className={`p-3 rounded-full ${color}`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark" ? "/assets/about_dark.jpg" : "/assets/about_light.jpg";

  return (
    <section id="about" className="pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Title
          title="Where Cosmic Insight Meets Digital Design"
          subTitle="Transforming ideas into powerful digital solutions that drive your business forward"
        />

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[86rem] mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              At{" "}
              <strong className="text-primary-600 dark:text-primary-500">
                CreativeWebPro
              </strong>
              , we&apos;re passionate about helping businesses thrive online.
              We&apos;re a team of skilled developers, digital marketers, and
              creative designers who craft exceptional digital experiences that
              achieve real results.
            </p>

            <div className="space-y-6">
              {aboutFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-foreground font-medium rounded-lg transition-all duration-300 mt-4"
            >
              Let&apos;s Work Together
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          {/* <div className="relative h-80 lg:h-[625px] overflow-hidden">
            <Image
              src={imageSrc}
              alt="CreativeWebPro team collaborating"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              fill
              quality={100}
            />
          </div> */}
          {/* Lottie Animation with Gradient Background */}
          <div className="relative h-80 lg:h-[625px] overflow-hidden rounded-xl group">
            {/* Glass Background Layer */}
            <div
              className="absolute inset-0 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-[rgba(129,177,213,0.09)] backdrop-blur-[8.8px] bg-[rgba(129,177,213,0.09)]"
              style={{
                backdropFilter: "blur(8.8px)",
                WebkitBackdropFilter: "blur(8.8px)",
              }}
            >
              {/* Optional subtle texture */}
              <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Centered Lottie Animation */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <DotLottieReact
                src="/assets/lottie/about.lottie"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
