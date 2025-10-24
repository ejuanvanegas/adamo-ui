import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("adm:border-b adm:last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="adm:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:flex adm:flex-1 adm:items-start adm:justify-between adm:gap-4 adm:rounded-md adm:py-4 adm:text-left adm:text-sm adm:font-medium adm:transition-all adm:outline-none adm:hover:underline adm:focus-visible:ring-[3px] adm:disabled:pointer-events-none adm:disabled:opacity-50 adm:[&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="adm:text-muted-foreground adm:pointer-events-none adm:size-4 adm:shrink-0 adm:translate-y-0.5 adm:transition-transform adm:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="adm:data-[state=closed]:animate-accordion-up adm:data-[state=open]:animate-accordion-down adm:overflow-hidden adm:text-sm"
      {...props}
    >
      <div className={cn("adm:pt-0 adm:pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
