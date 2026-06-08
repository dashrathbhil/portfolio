import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  as?: React.ElementType;
  id?: string;
}

const sizeMap = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-full",
} as const;

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={clsx("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeMap[size], className)}
    >
      {children}
    </Component>
  );
}
