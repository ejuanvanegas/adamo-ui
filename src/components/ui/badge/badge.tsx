/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const badgeVariants = cva(
  "adm:inline-flex adm:items-center adm:justify-center adm:rounded-full adm:border adm:px-2 adm:py-0.5 adm:text-xs adm:font-medium adm:w-fit adm:whitespace-nowrap adm:shrink-0 adm:[&>svg]:size-3 adm:gap-1 adm:[&>svg]:pointer-events-none adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:ring-[3px] adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:transition-[color,box-shadow] adm:overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "adm:border-transparent adm:bg-primary adm:text-primary-foreground adm:[a&]:hover:bg-primary/90",
        secondary:
          "adm:border-transparent adm:bg-secondary adm:text-secondary-foreground adm:[a&]:hover:bg-secondary/90",
        success:
          "adm:border-transparent adm:bg-success adm:text-white adm:[a&]:hover:bg-success/90 adm:focus-visible:ring-success/20 adm:dark:focus-visible:ring-success/40 adm:dark:bg-success/60",
        "success-medium":
          "adm:border-transparent adm:bg-success-50 adm:text-success adm:[a&]:hover:bg-success/20 adm:focus-visible:ring-success/20 adm:dark:focus-visible:ring-success/40 adm:dark:bg-success-50/60",
        warning:
          "adm:border-transparent adm:bg-warning adm:text-white adm:[a&]:hover:bg-warning/90 adm:focus-visible:ring-warning/20 adm:dark:focus-visible:ring-warning/40 adm:dark:bg-warning/60",
        "warning-medium":
          "adm:border-transparent adm:bg-warning-50 adm:text-warning adm:[a&]:hover:bg-warning/20 adm:focus-visible:ring-warning/20 adm:dark:focus-visible:ring-warning/40 adm:dark:bg-warning-50/60",
        destructive:
          "adm:border-transparent adm:bg-destructive adm:text-white adm:[a&]:hover:bg-destructive/90 adm:focus-visible:ring-destructive/20 adm:dark:focus-visible:ring-destructive/40 adm:dark:bg-destructive/60",
        "destructive-medium":
          "adm:border-transparent adm:bg-destructive-50 adm:text-destructive adm:[a&]:hover:bg-destructive/20 adm:focus-visible:ring-destructive/20 adm:dark:focus-visible:ring-destructive/40 adm:dark:bg-destructive-50/60",
        muted:
          "adm:border-transparent adm:bg-muted adm:text-foreground adm:[a&]:hover:bg-muted/90",
        "muted-medium":
          "adm:bg-muted-50 adm:text-muted-foreground adm:[a&]:hover:bg-muted/20",
        outline:
          "adm:text-foreground adm:[a&]:hover:bg-accent adm:[a&]:hover:text-accent-foreground",
      },
      size: {
        lg: "dam:gap-1 adm:px-2.5 adm:py-2 adm:text-sm adm:[&>svg]:size-5 adm:rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
