"use client";

import { memo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const errorAnimationVariants = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 }
};

const textareaStyles = "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200";

const LabelInputContainer = memo(function LabelInputContainer({ children, className }) {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
});

const FormInputField = memo(function FormInputField({
  id,
  label,
  placeholder,
  type = "text",
  icon,
  textarea = false,
  rows = 3,
  name,
  register,
  errors,
  validation = {}
}) {
  const error = errors[name];
  
  return (
    <LabelInputContainer>
      <Label htmlFor={id} className="flex items-center gap-2 text-muted-foreground">
        {icon}
        {label}
      </Label>
      
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          {...register(name, validation)}
          className={cn(
            textareaStyles,
            error && "border-red-500 focus:ring-red-200"
          )}
        />
      ) : (
        <Input
          id={id}
          placeholder={placeholder}
          type={type}
          {...register(name, validation)}
          className={cn(
            "transition-all duration-200",
            error && "border-red-500 focus:ring-red-200"
          )}
        />
      )}
      
      <AnimatePresence>
        {error && (
          <motion.span
            className="text-sm text-red-500 flex items-center gap-1"
            variants={errorAnimationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <X className="h-3 w-3" />
            {error.message?.toString()}
          </motion.span>
        )}
      </AnimatePresence>
    </LabelInputContainer>
  );
});

export default FormInputField;