import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  className?: string;
}

const variantStyles = {
  primary: [
    "bg-accent text-white",
    "hover:bg-accent-hover",
    "shadow-sm hover:shadow-md",
    "border border-accent/50",
  ].join(" "),
  secondary: [
    "bg-bg-elevated text-text-primary",
    "hover:bg-bg-surface",
    "border border-border-primary",
    "hover:border-border-hover",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-secondary",
    "hover:text-text-primary",
    "hover:bg-white/[0.04]",
  ].join(" "),
  outline: [
    "bg-transparent text-text-primary",
    "border border-border-primary",
    "hover:border-border-hover",
    "hover:bg-white/[0.04]",
  ].join(" "),
} as const;

const sizeStyles = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-sm gap-2.5 rounded-lg",
} as const;

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  target,
  rel,
  download,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = [
    "inline-flex items-center justify-center font-medium",
    "transition-all duration-200",
    "cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    "disabled:opacity-50 disabled:pointer-events-none",
    "active:scale-[0.98]",
  ].join(" ");

  const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
