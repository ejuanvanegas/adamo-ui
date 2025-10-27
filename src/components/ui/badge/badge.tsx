/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const badgeVariants = cva(
  "adm:inline-flex adm:items-center adm:justify-center adm:rounded-md adm:border adm:px-2 adm:py-0.5 adm:text-xs adm:font-medium adm:w-fit adm:whitespace-nowrap adm:shrink-0 adm:[&>svg]:size-3 adm:gap-1 adm:[&>svg]:pointer-events-none adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:ring-[3px] adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:transition-[color,box-shadow] adm:overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "adm:border-transparent adm:bg-primary adm:text-primary-foreground adm:[a&]:hover:bg-primary/90",
        "default-medium":
          "adm:border-transparent adm:bg-primary-50 adm:text-neutral-600 adm:[&>svg]:text-primary adm:[a&]:hover:bg-primary-100 adm:focus-visible:ring-primary/10 adm:dark:focus-visible:ring-primary/20 adm:dark:bg-primary-200 adm:dark:text-primary-800",
        secondary:
          "adm:border-transparent adm:bg-secondary adm:text-secondary-foreground adm:[a&]:hover:bg-secondary/90",
        "success-medium":
          "adm:border-transparent adm:bg-success-50 adm:text-neutral-600 adm:[&>svg]:text-success adm:[a&]:hover:bg-success-100 adm:focus-visible:ring-success/10 adm:dark:focus-visible:ring-success/20 adm:dark:bg-success-200 adm:dark:text-success-800",
        success:
          "adm:border-transparent adm:bg-success adm:text-white adm:[a&]:hover:bg-success/90 adm:focus-visible:ring-success/20 adm:dark:focus-visible:ring-success/40 adm:dark:bg-success/60",
        "warning-medium":
          "adm:border-transparent adm:bg-warning-50 adm:text-neutral-600 adm:[&>svg]:text-warning adm:[a&]:hover:bg-warning-100 adm:focus-visible:ring-warning/10 adm:dark:focus-visible:ring-warning/20 adm:dark:bg-warning-200 adm:dark:text-warning-800",
        warning:
          "adm:border-transparent adm:bg-warning adm:text-white adm:[a&]:hover:bg-warning/90 adm:focus-visible:ring-warning/20 adm:dark:focus-visible:ring-warning/40 adm:dark:bg-warning/60",
        "destructive-medium":
          "adm:border-transparent adm:bg-destructive-50 adm:text-neutral-600 adm:[&>svg]:text-destructive adm:[a&]:hover:bg-destructive-100 adm:focus-visible:ring-destructive/10 adm:dark:focus-visible:ring-destructive/20 adm:dark:bg-destructive-200 adm:dark:text-destructive-800",
        destructive:
          "adm:border-transparent adm:bg-destructive adm:text-white adm:[a&]:hover:bg-destructive/90 adm:focus-visible:ring-destructive/20 adm:dark:focus-visible:ring-destructive/40 adm:dark:bg-destructive/60",
        muted:
          "adm:border-transparent adm:bg-muted adm:text-muted-foreground adm:[a&]:hover:bg-muted/90 adm:focus-visible:ring-muted/20 adm:dark:focus-visible:ring-muted/40 adm:dark:bg-muted/60",
        outline:
          "adm:text-foreground adm:[a&]:hover:bg-accent adm:[a&]:hover:text-accent-foreground",
      },
      size: {
        lg: "adm:text-sm adm:px-2 adm:py-1 adm:gap-2 dm:text-sm adm:[&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span">
  & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
