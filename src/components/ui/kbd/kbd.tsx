import { cn } from "@src/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "adm:bg-muted adm:text-muted-foreground adm:pointer-events-none adm:inline-flex adm:h-5 adm:w-fit adm:min-w-5 adm:items-center adm:justify-center adm:gap-1 adm:rounded-sm adm:px-1 adm:font-sans adm:text-xs adm:font-medium adm:select-none",
        "adm:[&_svg:not([class*=size-])]:size-3",
        "adm:[[data-slot=tooltip-content]_&]:bg-background/20 adm:[[data-slot=tooltip-content]_&]:text-background adm:dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("adm:inline-flex adm:items-center adm:gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
