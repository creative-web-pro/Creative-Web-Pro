"use client";

import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import Image from "next/image";
import { feedbackData } from '@/data/data';
import Title from '@/components/ui/title';

const TestimonialCard = ({ testimonial }) => (
  <div className="group relative h-full min-h-[487px] bg-background rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-foreground/20">
        <Image
          src={testimonial.avatar}
          alt={`${testimonial.id}-${testimonial.name}`}
          fill
          sizes="(max-width: 768px) 50px, 56px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {testimonial.role}
        </h3>
      </div>
    </div>

    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          fill={i < testimonial.rating ? "currentColor" : "none"}
          className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>

    <p className="text-foreground/80 leading-relaxed flex-grow">
      &quot;{testimonial.text}&quot;
    </p>

    <div className="flex items-center justify-between text-sm text-foreground/60 mt-6 pt-4 border-t border-foreground/10">
      <span>{testimonial.location}</span>
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1 text-primary-500"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
        Verified Client
      </span>
    </div>
  </div>
);

export default function Feedback() {
  const swiperConfig = {
    modules: [Autoplay, Pagination],
    spaceBetween: 25,
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { clickable: true },
    className: "!pb-16"
  };

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <Title
          title='Client Testimonials'
          subTitle='Hear what our clients say about our services and commitment to excellence'
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Swiper {...swiperConfig}>
            {feedbackData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}