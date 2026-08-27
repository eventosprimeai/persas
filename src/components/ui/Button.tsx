import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      fullWidth,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-4 py-2 uppercase tracking-luxury",
      md: "text-sm px-6 py-3 tracking-wide",
      lg: "text-base px-8 py-4 tracking-wide font-medium",
    };

    const variantClasses = {
      primary:
        "bg-gold text-noir font-semibold hover:bg-gold-light shadow-gold-glow transition-all duration-300 hover:shadow-gold-glow-lg active:scale-[0.98]",
      secondary:
        "bg-noir-soft text-bone border border-noir-line hover:border-gold/60 hover:text-gold-light transition-all duration-300 active:scale-[0.98]",
      "gold-outline":
        "bg-transparent text-gold-light border border-gold/70 hover:bg-gold/10 hover:border-gold shadow-sm transition-all duration-300 active:scale-[0.98]",
      outline:
        "bg-transparent text-bone border border-noir-line hover:border-bone/50 hover:bg-noir-soft transition-all duration-300 active:scale-[0.98]",
      ghost:
        "bg-transparent text-muted hover:text-bone hover:bg-noir-soft transition-all duration-200",
    };

    const combinedClasses = cn(
      "inline-flex items-center justify-center font-inter transition-all duration-300 rounded-none disabled:opacity-50 disabled:pointer-events-none group select-none relative overflow-hidden",
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {leftIcon && <span className="mr-2 inline-flex items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className="ml-2 inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
