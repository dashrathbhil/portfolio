import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-bg-elevated text-text-secondary border border-border-primary",
  accent: "bg-accent-subtle text-accent border border-accent/20",
  outline: "bg-transparent text-text-secondary border border-border-primary",
} as const;

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md",
        "transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
