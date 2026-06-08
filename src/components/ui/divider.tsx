import { clsx } from "clsx";

interface DividerProps {
  className?: string;
  gradient?: boolean;
}

export function Divider({ className, gradient = false }: DividerProps) {
  if (gradient) {
    return (
      <div
        className={clsx("h-px w-full", className)}
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border-primary) 20%, var(--border-primary) 80%, transparent)",
        }}
      />
    );
  }

  return <hr className={clsx("border-t border-border-primary", className)} />;
}
