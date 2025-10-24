import * as React from "react";

import { cn } from "@src/lib/utils";
import type { Theme } from "@src/types/theme.type";

function Input({ className, type, theme, ...props }: React.ComponentProps<"input"> & { theme?: Theme }) {
  return (
    <input
      type={type}
      data-slot="input"
      data-theme={theme}
      className={cn(
        "adm:file:text-foreground adm:placeholder:text-muted-foreground adm:selection:bg-primary adm:selection:text-primary-foreground adm:dark:bg-input/30 adm:border-input adm:h-10 adm:w-full adm:min-w-0 adm:rounded-sm adm:border adm:bg-transparent adm:px-3 adm:py-1 adm:text-base adm:shadow-xs adm:transition-[color,box-shadow] adm:outline-none adm:file:inline-flex adm:file:h-7 adm:file:border-0 adm:file:bg-transparent adm:file:text-sm adm:file:font-medium adm:disabled:pointer-events-none adm:disabled:cursor-not-allowed adm:disabled:opacity-50 adm:md:text-sm",
        "adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:ring-[3px]",
        "adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
