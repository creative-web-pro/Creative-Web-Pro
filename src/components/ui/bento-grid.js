"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Base styles extracted as constants for better maintainability
const BENTO_GRID_BASE_STYLES = "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[25rem] md:grid-cols-3";
const BENTO_ITEM_BASE_STYLES = "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200/20 bg-background p-4 transition duration-200 hover:shadow-xl";

/**
 * BentoGrid component for creating a responsive grid layout
 */
export const BentoGrid = memo(function BentoGrid({ className, children }) {
  return (
    <div className={cn(BENTO_GRID_BASE_STYLES, className)}>
      {children}
    </div>
  );
});

/**
 * BentoGridItem component for individual grid items with hover effects
 */
export const BentoGridItem = memo(function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  link
}) {
  return (
    <Link 
      href={link} 
      className={cn(BENTO_ITEM_BASE_STYLES, className)}
      aria-label={title}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        {title && (
          <div className="mt-2 mb-2 font-sans text-lg font-bold text-foreground">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-xs font-normal text-foreground">
            {description}
          </div>
        )}
      </div>
    </Link>
  );
});
