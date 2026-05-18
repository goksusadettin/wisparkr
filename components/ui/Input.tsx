import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-brand-light">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border",
            "text-white placeholder:text-brand-muted text-sm",
            "focus:outline-none focus:ring-2 focus:ring-brand-indigo/60 focus:border-brand-indigo/60",
            "transition-all duration-200",
            error && "border-red-500/60 focus:ring-red-500/40",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-brand-light">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border",
            "text-white placeholder:text-brand-muted text-sm resize-none",
            "focus:outline-none focus:ring-2 focus:ring-brand-indigo/60 focus:border-brand-indigo/60",
            "transition-all duration-200",
            error && "border-red-500/60 focus:ring-red-500/40",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
