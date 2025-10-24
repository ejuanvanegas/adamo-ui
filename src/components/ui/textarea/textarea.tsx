import * as React from "react"

import { cn } from "@src/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "adm:border-input adm:placeholder:text-muted-foreground adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:dark:bg-input/30 adm:flex adm:field-sizing-content adm:min-h-16 adm:w-full adm:rounded-md adm:border adm:bg-transparent adm:px-3 adm:py-2 adm:text-base adm:shadow-xs adm:transition-[color,box-shadow] adm:outline-none adm:focus-visible:ring-[3px] adm:disabled:cursor-not-allowed adm:disabled:opacity-50 adm:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
