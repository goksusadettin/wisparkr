import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover &&
          "transition-all duration-300 hover:scale-[1.02] hover:shadow-glow hover:border-brand-indigo/30 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
