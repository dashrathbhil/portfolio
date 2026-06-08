import { clsx } from "clsx";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "narrow" | "wide";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
}

const spacingClasses = {
  none: "py-0",
  sm: "py-4 sm:py-6",
  md: "py-8 sm:py-10",
  lg: "py-10 sm:py-14",
  xl: "py-14 sm:py-20",
} as const;

const containerSizeMap = {
  narrow: "narrow" as const,
  default: "default" as const,
  wide: "wide" as const,
};

export function Section({
  children,
  className,
  id,
  size = "wide",
  spacing = "md",
  border = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        spacingClasses[spacing],
        border && "border-b border-border-primary",
        className
      )}
    >
      <Container size={containerSizeMap[size]}>
        {children}
      </Container>
    </section>
  );
}

/* ── Section Header — reusable title + subtitle pattern ── */

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx("mb-8 sm:mb-12", className)}>
      <h2 className="text-base sm:text-[17px] font-bold text-slate-200 uppercase tracking-[0.15em] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-[17px] text-slate-400 leading-[1.7] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
