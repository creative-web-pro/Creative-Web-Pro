"use client";

import { forwardRef, memo } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const LABEL_BASE_STYLES = "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

/**
 * Label component that wraps Radix UI's Label primitive
 * with custom styling and forwarded refs
 */
const Label = memo(forwardRef(function Label({ className, ...props }, ref) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(LABEL_BASE_STYLES, className)}
      {...props}
    />
  );
}));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
