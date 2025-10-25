import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("adm:grid adm:gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "adm:border-input adm:text-primary adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:dark:bg-input/30 adm:aspect-square adm:size-5 adm:shrink-0 adm:rounded-full adm:border adm:shadow-xs adm:transition-[color,box-shadow] adm:outline-none adm:focus-visible:ring-[3px] adm:disabled:cursor-not-allowed adm:disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="adm:relative adm:flex adm:items-center adm:justify-center"
      >
        <CircleIcon className="adm:fill-primary adm:absolute adm:top-1/2 adm:left-1/2 adm:size-3 adm:-translate-x-1/2 adm:-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
