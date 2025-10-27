import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const progressRootVariants = cva(
  "adm:relative adm:h-2 adm:w-full adm:overflow-hidden adm:rounded-full",
  {
    variants: {
      variant: {
        default: "adm:bg-primary/20",
        destructive: "adm:bg-destructive/20",
        success: "adm:bg-success/20",
        warning: "adm:bg-warning/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const progressIndicatorVariants = cva(
  "adm:h-full adm:w-full adm:flex-1 adm:transition-all",
  {
    variants: {
      variant: {
        default: "adm:bg-primary",
        destructive: "adm:bg-destructive",
        success: "adm:bg-success",
        warning: "adm:bg-warning",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & VariantProps<typeof progressRootVariants>;

export function Progress({
  className,
  value,
  variant,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressRootVariants({ variant }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
