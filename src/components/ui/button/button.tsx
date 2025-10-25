/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const buttonVariants = cva(
  "adm:inline-flex adm:items-center adm:justify-center adm:gap-2 adm:whitespace-nowrap adm:rounded-md adm:text-sm adm:font-medium adm:transition-all adm:disabled:pointer-events-none adm:disabled:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg:not([class*=size-])]:size-4 adm:shrink-0 adm:[&_svg]:shrink-0 adm:outline-none adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:ring-[3px] adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "adm:bg-primary adm:text-primary-foreground adm:hover:bg-primary/90",
        destructive:
          "adm:bg-destructive adm:text-white adm:hover:bg-destructive/90 adm:focus-visible:ring-destructive/20 adm:dark:focus-visible:ring-destructive/40 adm:dark:bg-destructive/60",
        outline:
          "adm:border adm:bg-background adm:shadow-xs adm:hover:bg-accent adm:hover:text-accent-foreground adm:dark:bg-input/30 adm:dark:border-input adm:dark:hover:bg-input/50",
        secondary:
          "adm:bg-secondary adm:text-secondary-foreground adm:hover:bg-secondary/80",
        ghost:
          "adm:hover:bg-accent adm:hover:text-accent-foreground adm:dark:hover:bg-accent/50",
        link: "adm:text-primary adm:underline-offset-4 adm:hover:underline",
      },
      size: {
        default: "adm:h-9 adm:px-4 adm:py-2 adm:has-[>svg]:px-3",
        sm: "adm:h-8 adm:rounded-md adm:gap-1.5 adm:px-3 adm:has-[>svg]:px-2.5",
        lg: "adm:h-10 adm:rounded-md adm:px-6 adm:has-[>svg]:px-4",
        icon: "adm:size-9",
        "icon-sm": "adm:size-8",
        "icon-lg": "adm:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
