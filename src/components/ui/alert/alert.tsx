import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";

const alertVariants = cva(
  "adm:relative adm:w-full adm:rounded-lg adm:border adm:px-4 adm:py-3 adm:text-sm adm:grid adm:has-[>svg]:grid-cols-[calc(var(--adm-spacing)*4)_1fr] adm:grid-cols-[0_1fr] adm:has-[>svg]:gap-x-3 adm:gap-y-0.5 adm:items-start adm:[&>svg]:size-4 adm:[&>svg]:translate-y-0.5 adm:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "adm:bg-card adm:text-card-foreground",
        destructive:
          "adm:text-destructive adm:bg-destructive-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-destructive/90",
        success:
          "adm:text-success adm:bg-success-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-success/90",
        warning:
          "adm:text-warning adm:bg-warning-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-warning/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "adm:col-start-2 adm:line-clamp-1 adm:min-h-4 adm:font-medium adm:tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "adm:text-muted-foreground adm:col-start-2 adm:grid adm:justify-items-start adm:gap-1 adm:text-sm adm:[&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
