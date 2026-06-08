import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "ghost" | "accent";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  as?: React.ElementType;
  id?: string;
}

const variantStyles = {
  default: [
    "bg-bg-secondary/60",
    "border border-border-primary",
  ].join(" "),
  elevated: [
    "bg-bg-elevated/80",
    "border border-border-primary",
    "shadow-md",
  ].join(" "),
  ghost: [
    "bg-transparent",
    "border border-transparent",
  ].join(" "),
  accent: [
    "bg-accent-subtle",
    "border border-accent-border",
  ].join(" "),
} as const;

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
  padding = "md",
  as: Component = "div",
  id,
}: CardProps) {
  return (
    <Component
      id={id}
      className={clsx(
        "rounded-xl transition-all duration-200",
        variantStyles[variant],
        paddingStyles[padding],
        hover && [
          "hover:border-border-hover",
          "hover:bg-bg-tertiary/60",
          "hover:shadow-lg",
          "hover:-translate-y-0.5",
        ],
        className
      )}
    >
      {children}
    </Component>
  );
}

/* ── Card sub-components for composition ── */

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className={clsx("text-lg font-semibold text-text-primary tracking-tight", className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={clsx("text-sm text-text-secondary leading-relaxed mt-1.5", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={clsx(className)}>{children}</div>;
}
