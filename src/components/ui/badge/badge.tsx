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
        default:
          "adm:border-transparent adm:bg-primary adm:text-primary-foreground adm:[a&]:hover:bg-primary/90",
        secondary:
          "adm:border-transparent adm:bg-secondary adm:text-secondary-foreground adm:[a&]:hover:bg-secondary/90",
        destructive:
          "adm:border-transparent adm:bg-destructive adm:text-white adm:[a&]:hover:bg-destructive/90 adm:focus-visible:ring-destructive/20 adm:dark:focus-visible:ring-destructive/40 adm:dark:bg-destructive/60",
        outline:
          "adm:text-foreground adm:[a&]:hover:bg-accent adm:[a&]:hover:text-accent-foreground",
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
  asChild = false,
  ...props
}: React.ComponentProps<"span">
  & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
