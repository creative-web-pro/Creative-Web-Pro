"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import Title from "@/components/ui/title";
import { servicesData } from '@/data/data';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Services = memo(function Services() {
  
  const bentoItems = useMemo(() => {
    return servicesData.map((service) => ({
      title: service.title,
      description: service.description,
      header: (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={service.image}
            alt={service.title}
            width={240}
            height={240}
            className="object-cover transition-all duration-700 group-hover:scale-110 place-self-center"
          />
        </div>
      ),
      link: service.link
    }));
  }, []);

  return (
    <section id="services" className="pt-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <Title
          title="Our Services"
          subTitle="Expert solutions delivered by professionals in their field. Expect more than you pay for."
        />

        {/* BentoGrid Section */}
        <div className="mt-12">
          <BentoGrid className="max-w-7xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                link={item.link}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
});

export default Services;