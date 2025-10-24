/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const toggleVariants = cva(
  "adm:inline-flex adm:items-center adm:justify-center adm:gap-2 adm:rounded-md adm:text-sm adm:font-medium adm:hover:bg-muted adm:hover:text-muted-foreground adm:disabled:pointer-events-none adm:disabled:opacity-50 adm:data-[state=on]:bg-accent adm:data-[state=on]:text-accent-foreground adm:[&_svg]:pointer-events-none adm:[&_svg:not([class*=size-])]:size-4 adm:[&_svg]:shrink-0 adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:ring-[3px] adm:outline-none adm:transition-[color,box-shadow] adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "adm:bg-transparent",
        outline:
          "adm:border adm:border-input adm:bg-transparent adm:shadow-xs adm:hover:bg-accent adm:hover:text-accent-foreground",
      },
      size: {
        default: "adm:h-9 adm:px-2 adm:min-w-9",
        sm: "adm:h-8 adm:px-1.5 adm:min-w-8",
        lg: "adm:h-10 adm:px-2.5 adm:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>
  & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
