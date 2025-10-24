import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@src/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "adm:flex adm:items-center adm:gap-2 adm:text-sm adm:leading-none adm:font-medium adm:select-none adm:group-data-[disabled=true]:pointer-events-none adm:group-data-[disabled=true]:opacity-50 adm:peer-disabled:cursor-not-allowed adm:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
