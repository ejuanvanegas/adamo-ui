import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@src/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "adm:bg-neutrals-800 adm:text-white adm:animate-in adm:fade-in-0 adm:zoom-in-95 adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=closed]:zoom-out-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:z-50 adm:w-fit adm:origin-(--radix-tooltip-content-transform-origin) adm:rounded-md adm:px-3 adm:py-3 adm:text-xs adm:text-balance",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="adm:bg-foreground adm:fill-foreground adm:z-50 adm:size-2.5 adm:translate-y-[calc(-50%_-_2px)] adm:rotate-45 adm:rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
