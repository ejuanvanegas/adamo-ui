import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@src/lib/utils";
import type { Theme } from "@src/types/theme.type";

function Switch({
  className,
  theme,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & { theme?: Theme }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-theme={theme}
      className={cn(
        "adm:peer adm:data-[state=checked]:bg-primary adm:data-[state=unchecked]:bg-input adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:dark:data-[state=unchecked]:bg-input/80 adm:inline-flex adm:h-5 adm:w-8 adm:shrink-0 adm:items-center adm:rounded-full adm:border adm:border-transparent adm:shadow-xs adm:transition-all adm:outline-none adm:focus-visible:ring-[3px] adm:disabled:cursor-not-allowed adm:disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "adm:bg-background adm:dark:data-[state=unchecked]:bg-foreground adm:dark:data-[state=checked]:bg-primary-foreground adm:pointer-events-none adm:block adm:size-4 adm:rounded-full adm:ring-0 adm:transition-transform adm:data-[state=checked]:translate-x-[calc(100%-2px)] adm:data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
