import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "adm:group/input-group adm:border-input adm:dark:bg-input/30 adm:relative adm:flex adm:w-full adm:items-center adm:rounded-md adm:border adm:shadow-xs adm:transition-[color,box-shadow] adm:outline-none",
        "adm:h-9 adm:min-w-0 adm:has-[>textarea]:h-auto",

        // Variants based on alignment.
        "adm:has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "adm:has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "adm:has-[>[data-align=block-start]]:h-auto adm:has-[>[data-align=block-start]]:flex-col adm:has-[>[data-align=block-start]]:[&>input]:pb-3",
        "adm:has-[>[data-align=block-end]]:h-auto adm:has-[>[data-align=block-end]]:flex-col adm:has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "adm:has-[[data-slot=input-group-control]:focus-visible]:border-ring adm:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 adm:has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",

        // Error state.
        "adm:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 adm:has-[[data-slot][aria-invalid=true]]:border-destructive adm:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "adm:text-muted-foreground adm:flex adm:h-auto adm:cursor-text adm:items-center adm:justify-center adm:gap-2 adm:py-1.5 adm:text-sm adm:font-medium adm:select-none adm:[&>svg:not([class*=size-])]:size-4 adm:[&>kbd]:rounded-[calc(var(--radius)-5px)] adm:group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "adm:order-first adm:pl-3 adm:has-[>button]:ml-[-0.45rem] adm:has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "adm:order-last adm:pr-3 adm:has-[>button]:mr-[-0.45rem] adm:has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "adm:order-first adm:w-full adm:justify-start adm:px-3 adm:pt-3 adm:[.border-b]:pb-3 adm:group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "adm:order-last adm:w-full adm:justify-start adm:px-3 adm:pb-3 adm:[.border-t]:pt-3 adm:group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva(
  "adm:text-sm adm:shadow-none adm:flex adm:gap-2 adm:items-center",
  {
    variants: {
      size: {
        xs: "adm:h-6 adm:gap-1 adm:px-2 adm:rounded-[calc(var(--radius)-5px)] adm:[&>svg:not([class*=size-])]:size-3.5 adm:has-[>svg]:px-2",
        sm: "adm:h-8 adm:px-2.5 adm:gap-1.5 adm:rounded-md adm:has-[>svg]:px-2.5",
        "icon-xs":
          "adm:size-6 adm:rounded-[calc(var(--radius)-5px)] adm:p-0 adm:has-[>svg]:p-0",
        "icon-sm": "adm:size-8 adm:p-0 adm:has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size">
  & VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "adm:text-muted-foreground adm:flex adm:items-center adm:gap-2 adm:text-sm adm:[&_svg]:pointer-events-none adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "adm:flex-1 adm:rounded-none adm:border-0 adm:bg-transparent adm:shadow-none adm:focus-visible:ring-0 adm:dark:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "adm:flex-1 adm:resize-none adm:rounded-none adm:border-0 adm:bg-transparent adm:py-3 adm:shadow-none adm:focus-visible:ring-0 adm:dark:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
