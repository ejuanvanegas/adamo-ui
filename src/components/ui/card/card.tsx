/* eslint-disable react-refresh/only-export-components */

import * as React from "react";

import { cn } from "@src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "adm:bg-card adm:text-card-foreground adm:flex adm:flex-col adm:gap-6 adm:rounded-xl adm:border adm:py-6 adm:shadow-sm",
  {
    variants: {
      variant: {
        default: "adm:bg-card adm:text-card-foreground",
        primary:
          "adm:bg-primary-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-primary/90",
        muted:
          "adm:bg-muted adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-muted/90",
        success:
          "adm:bg-success-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-success/90",
        warning:
          "adm:bg-warning-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-warning/90",
        destructive:
          "adm:bg-destructive-50 adm:[&>svg]:text-current adm:*:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "adm:@container/card-header adm:grid adm:auto-rows-min adm:grid-rows-[auto_auto] adm:items-start adm:gap-2 adm:px-6 adm:has-data-[slot=card-action]:grid-cols-[1fr_auto] adm:[.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("adm:leading-none adm:font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("adm:text-muted-foreground adm:text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "adm:col-start-2 adm:row-span-2 adm:row-start-1 adm:self-start adm:justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("adm:px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("adm:flex adm:items-center adm:px-6 adm:[.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};
