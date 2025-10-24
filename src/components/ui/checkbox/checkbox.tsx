import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "adm:peer adm:border-input adm:dark:bg-input/30 adm:data-[state=checked]:bg-primary adm:data-[state=checked]:text-primary-foreground adm:dark:data-[state=checked]:bg-primary adm:data-[state=checked]:border-primary adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:size-4 adm:shrink-0 adm:rounded-[4px] adm:border adm:shadow-xs adm:transition-shadow adm:outline-none adm:focus-visible:ring-[3px] adm:disabled:cursor-not-allowed adm:disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="adm:grid adm:place-content-center adm:text-current adm:transition-none"
      >
        <CheckIcon className="adm:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
