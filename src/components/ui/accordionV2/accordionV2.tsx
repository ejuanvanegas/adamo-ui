import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

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
      className={cn(
        "adm:rounded-2xl adm:bg-neutrals-50 adm:mb-4 last:adm:mb-0",
        className,
      )}
      {...props}
    />
  );
}

interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  title?: string
  badge?: React.ReactNode
}

function AccordionTrigger({
  className,
  children,
  title,
  badge,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="adm:flex adm:h-16">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "adm:flex adm:flex-1 adm:items-center adm:gap-4 adm:rounded-lg adm:px-4 adm:outline-none adm:transition-all adm:disabled:pointer-events-none adm:disabled:opacity-50 adm:group",
          className,
        )}
        {...props}
      >
        <div className="adm:flex adm:flex-1 adm:items-center adm:justify-start adm:text-left adm:text-xs adm:font-semibold adm:uppercase adm:text-neutrals-500 adm:leading-5 adm:line-clamp-1">
          {title || children}
        </div>
        {badge && (
          <div className="adm:shrink-0">
            {badge}
          </div>
        )}
        <div className="adm:flex adm:w-14 adm:items-center adm:justify-end adm:shrink-0">
          <Plus className="adm:h-4 adm:w-4 adm:text-neutrals-500 adm:transition-transform adm:duration-200 adm:group-data-[state=open]:hidden" />
          <Minus className="adm:h-4 adm:w-4 adm:text-neutrals-500 adm:hidden adm:group-data-[state=open]:block" />
        </div>
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
