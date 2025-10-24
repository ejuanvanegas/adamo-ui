import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@src/lib/utils";
import type { Theme } from "@src/types/theme.type";

function Tabs({
  className,
  theme,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & { theme?: Theme }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-theme={theme}
      className={cn("adm:flex adm:flex-col adm:gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "adm:bg-muted adm:text-muted-foreground adm:inline-flex adm:w-fit adm:items-center adm:justify-center adm:rounded-lg adm:p-[3px]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "adm:data-[state=active]:bg-primary adm:data-[state=active]:text-primary-foreground adm:dark:data-[state=active]:text-foreground adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:focus-visible:outline-ring adm:dark:data-[state=active]:border-input adm:dark:data-[state=active]:bg-input/30 adm:text-foreground adm:dark:text-muted-foreground adm:inline-flex adm:h-[calc(100%-1px)] adm:flex-1 adm:items-center adm:justify-center adm:gap-1.5 adm:rounded-md adm:border adm:border-transparent adm:px-3 adm:py-3 adm:text-sm adm:font-medium adm:whitespace-nowrap adm:transition-[color,box-shadow] adm:focus-visible:ring-[3px] adm:focus-visible:outline-1 adm:disabled:pointer-events-none adm:disabled:opacity-50 adm:data-[state=active]:shadow-sm adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("adm:flex-1 adm:outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
