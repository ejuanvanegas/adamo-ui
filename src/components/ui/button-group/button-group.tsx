/* eslint-disable react-refresh/only-export-components */

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";
import { Separator } from "@src/components/ui/separator";

const buttonGroupVariants = cva(
  "adm:flex adm:w-fit adm:items-stretch adm:[&>*]:focus-visible:z-10 adm:[&>*]:focus-visible:relative adm:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit adm:[&>input]:flex-1 adm:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md adm:has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "adm:[&>*:not(:first-child)]:rounded-l-none adm:[&>*:not(:first-child)]:border-l-0 adm:[&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "adm:flex-col adm:[&>*:not(:first-child)]:rounded-t-none adm:[&>*:not(:first-child)]:border-t-0 adm:[&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "adm:bg-muted adm:flex adm:items-center adm:gap-2 adm:rounded-md adm:border adm:px-4 adm:text-sm adm:font-medium adm:shadow-xs adm:[&_svg]:pointer-events-none adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "adm:bg-input adm:relative adm:!m-0 adm:self-stretch adm:data-[orientation=vertical]:h-auto",
        className,
      )}
      {...props}
    />
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
};
