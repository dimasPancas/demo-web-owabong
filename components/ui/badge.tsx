import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sky-100 text-sky-800",
        secondary:
          "border-transparent bg-emerald-100 text-emerald-800",
        accent:
          "border-transparent bg-amber-100 text-amber-900",
        destructive:
          "border-transparent bg-red-100 text-red-800",
        outline: "border-slate-300 text-slate-700 bg-white/80",
        solidPrimary: "border-transparent bg-sky-600 text-white",
        solidSecondary: "border-transparent bg-emerald-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
