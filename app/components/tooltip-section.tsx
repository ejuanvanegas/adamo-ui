import { ThemableSection } from "@app/contexts/themable-section";
import { Button } from "@src/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@src/components/ui/tooltip";

import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type TooltipSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function TooltipSection({ className, ...props }: Omit<TooltipSectionProps, "title">) {
  return (
    <ThemableSection title="Tooltip" className={cn(className)} {...props}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="adm:flex">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </ThemableSection>
  );
}
