"use client";

import { memo, useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Title from "@/components/ui/title";
import Link from "next/link";
import { portfolio, portfolio_tags } from "@/data/data";

// Animation constants
const FADE_IN_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

// Scroll animation settings
const SCROLL_SPEED = 147; // pixels per second

/**
 * WorkSample Component
 * Displays a portfolio item with hover animation and scrolling effect
 */
const WorkSample = memo(function WorkSample({ image, name, url }) {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef(null);
  const imgContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const clonedImageRef = useRef(false);

  // Handle mouse enter event
  const handleMouseEnter = useCallback(() => setHovered(true), []);
  
  // Handle mouse leave event
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    clonedImageRef.current = false;
  }, []);

  // Scroll animation effect
  useEffect(() => {
    if (!hovered || !wrapperRef.current || !imgContainerRef.current) return;

    const currentWrapper = wrapperRef.current;
    const imgContainer = imgContainerRef.current;
    const imgHeight = imgContainer.firstElementChild?.clientHeight || 0;
    const containerHeight = currentWrapper.clientHeight;

    // Only clone image if needed and not already cloned
    if (imgHeight > containerHeight && !clonedImageRef.current) {
      const imgClone = imgContainer.firstElementChild?.cloneNode(true);
      if (imgClone) {
        imgContainer.appendChild(imgClone);
        clonedImageRef.current = true;
      }
    }

    let animationId;
    let lastTimestamp = 0;

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (currentWrapper.scrollTop >= imgHeight) {
        currentWrapper.scrollTop = 0;
        scrollPositionRef.current = 0;
      } else {
        scrollPositionRef.current += (SCROLL_SPEED * deltaTime) / 1000;
        currentWrapper.scrollTop = scrollPositionRef.current;
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationId);
      // Reset scroll position when not hovered
      if (currentWrapper) {
        currentWrapper.scrollTop = 0;
        scrollPositionRef.current = 0;
      }
    };
  }, [hovered]);

  return (
    <motion.div
      className="group relative bg-foreground text-background rounded-2xl w-[280px] md:w-[320px] flex flex-col items-center p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
      {...FADE_IN_ANIMATION}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={wrapperRef}
        className="relative overflow-hidden h-[360px] w-full bg-background rounded-xl"
      >
        <Link
          href={url}
          ref={imgContainerRef}
          target="_blank"
          aria-label={`View ${name} website`}
        >
          <Image
            src={image}
            className="w-full h-auto"
            alt={`${name} website work sample`}
            width={600}
            height={900}
            quality={90}
            loading="lazy"
            draggable={false}
          />
        </Link>
      </div>
    </motion.div>
  );
});

const Portfolio = memo(function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Handle filter change
  const handleFilterChange = useCallback((tag) => {
    setFilter(tag);
  }, []);

  // Handle pagination
  const goToPreviousPage = useCallback(() => {
    setCurrentPage(p => Math.max(1, p - 1));
  }, []);

  const goToNextPage = useCallback((totalPages) => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
  }, []);

  // Filter portfolio items based on selected tag
  const filteredPortfolio = filter === 'all'
    ? portfolio
    : portfolio.filter(item => item.tags?.includes(filter));

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Calculate paginated projects
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPortfolio = filteredPortfolio.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPortfolio.length / itemsPerPage);

  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <Title
        title="Our Portfolio"
        subTitle="Explore our collection of web design and development projects crafted for startups and SMEs worldwide."
      />
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {portfolio_tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${filter === tag
              ? 'bg-foreground text-background'
              : 'bg-background text-muted-foreground hover:bg-background-secondary'
            }`}
            onClick={() => handleFilterChange(tag)}
            aria-label={`Filter by ${tag}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="w-full flex flex-wrap justify-center gap-8 md:gap-10 mb-12">
        <AnimatePresence>
          {paginatedPortfolio.map((project, index) => (
            <WorkSample
              key={`${project.name}-${index}`}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {filteredPortfolio.length > itemsPerPage && (
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-foreground text-background disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>

          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => goToNextPage(totalPages)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 rounded-lg bg-foreground text-background disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-foreground rounded-lg text-lg font-semibold text-background hover:shadow-lg transition-all"
          aria-label="Contact us to discuss your project"
        >
          Get in Touch
          <ArrowUpRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
});

export default Portfolio;