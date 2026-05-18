"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-black disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-brand-indigo hover:bg-brand-purple text-white focus:ring-brand-indigo shadow-glow-sm hover:shadow-glow active:scale-95",
      secondary:
        "border border-brand-border bg-brand-card hover:bg-white/5 text-white focus:ring-brand-border active:scale-95",
      ghost:
        "text-brand-muted hover:text-white hover:bg-white/5 focus:ring-white/20 active:scale-95",
      whatsapp:
        "bg-[#25D366] hover:bg-[#20bd5a] text-white focus:ring-[#25D366] shadow-lg active:scale-95",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
