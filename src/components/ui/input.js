"use client";

import { forwardRef, useState, useCallback, memo } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";

const errorAnimationVariants = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 }
};

const INPUT_BASE_STYLES = "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200";

/**
 * Enhanced Input component with password toggle and error/success states
 */
const Input = memo(forwardRef(function Input(
  {
    className,
    type,
    icon,
    showPasswordToggle = false,
    error,
    success,
    ...props
  },
  ref
) {

  const [showPassword, setShowPassword] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const togglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const inputType = showPasswordToggle && type === "password" && showPassword
    ? "text"
    : type;

  return (
    <motion.div
      className={cn(
        "group/input relative rounded-lg p-[2px] transition-all duration-300",
        error && "shadow-[0_0_0_1px_#ef4444]",
        success && "shadow-[0_0_0_1px_#10b981]"
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            INPUT_BASE_STYLES,
            showPasswordToggle && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            onClick={togglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {(error || success) && (
        <motion.p
          variants={errorAnimationVariants}
          initial="initial"
          animate="animate"
          className={cn(
            "mt-1 text-xs",
            error ? "text-red-500" : "text-green-500"
          )}
        >
          {error || success}
        </motion.p>
      )}
    </motion.div>
  );
}));

Input.displayName = "Input";

export { Input };