import React from "react";
import { KittenStatus } from "@/types";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status?: KittenStatus;
  variant?: "gold" | "noir" | "outline" | "success" | "muted";
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ status, variant = "noir", children, className }: BadgeProps) {
  let content = children;
  let computedVariant = variant;

  if (status) {
    content = status;
    if (status === "Disponible") {
      computedVariant = "gold";
    } else if (status === "Reservado") {
      computedVariant = "muted";
    } else if (status === "Entregado") {
      computedVariant = "noir";
    }
  }

  const variantClasses = {
    gold: "bg-gold/15 text-gold-light border border-gold/40 shadow-sm",
    noir: "bg-noir-soft text-muted border border-noir-line",
    muted: "bg-[#1E1E22] text-[#8E8B85] border border-[#2D2D32]",
    outline: "bg-transparent text-bone border border-noir-line",
    success: "bg-emerald-950/40 text-emerald-300 border border-emerald-800/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] md:text-[11px] uppercase tracking-luxury font-medium px-2.5 py-1 select-none backdrop-blur-sm",
        variantClasses[computedVariant],
        className
      )}
    >
      {status === "Disponible" && (
        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-1.5 animate-pulse" />
      )}
      {content}
    </span>
  );
}
