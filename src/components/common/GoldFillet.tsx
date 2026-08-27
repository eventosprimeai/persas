import { cn } from "@/lib/utils";

interface GoldFilletProps {
  className?: string;
  soft?: boolean;
}

export function GoldFillet({ className, soft = false }: GoldFilletProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-[1px] w-full",
        soft ? "bg-gold-fillet-soft" : "bg-gold-fillet",
        className
      )}
    />
  );
}
