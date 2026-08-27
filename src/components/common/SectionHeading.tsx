import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium mb-3 px-3 py-1 bg-noir-soft border border-noir-line rounded-full">
          {tag}
        </span>
      )}
      <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-bone tracking-tight leading-[1.15] max-w-3xl">
        {title}{" "}
        {highlight && (
          <span className="text-gold-gradient italic font-normal">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted font-normal max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
