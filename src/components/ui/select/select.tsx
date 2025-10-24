import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "adm:border-input adm:data-[placeholder]:text-muted-foreground adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:focus-visible:border-ring adm:focus-visible:ring-ring/50 adm:aria-invalid:ring-destructive/20 adm:dark:aria-invalid:ring-destructive/40 adm:aria-invalid:border-destructive adm:dark:bg-input/30 adm:dark:hover:bg-input/50 adm:flex adm:w-fit adm:items-center adm:justify-between adm:gap-2 adm:rounded-md adm:border adm:bg-transparent adm:px-3 adm:py-2 adm:text-sm adm:whitespace-nowrap adm:shadow-xs adm:transition-[color,box-shadow] adm:outline-none adm:focus-visible:ring-[3px] adm:disabled:cursor-not-allowed adm:disabled:opacity-50 adm:data-[size=default]:h-10 adm:data-[size=sm]:h-8 adm:*:data-[slot=select-value]:line-clamp-1 adm:*:data-[slot=select-value]:flex adm:*:data-[slot=select-value]:items-center adm:*:data-[slot=select-value]:gap-2 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="adm:size-4 adm:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "adm:bg-popover adm:text-popover-foreground adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:relative adm:z-50 adm:max-h-(--radix-select-content-available-height) adm:min-w-[8rem] adm:origin-(--radix-select-content-transform-origin) adm:overflow-x-hidden adm:overflow-y-auto adm:rounded-md adm:border adm:shadow-md",
          position === "popper"
          && "adm:data-[side=bottom]:translate-y-1 adm:data-[side=left]:-translate-x-1 adm:data-[side=right]:translate-x-1 adm:data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "adm:p-1",
            position === "popper"
            && "adm:h-[var(--radix-select-trigger-height)] adm:w-full adm:min-w-[var(--radix-select-trigger-width)] adm:scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("adm:text-muted-foreground adm:px-2 adm:py-1.5 adm:text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:relative adm:flex adm:w-full adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:py-1.5 adm:pr-8 adm:pl-2 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4 adm:*:[span]:last:flex adm:*:[span]:last:items-center adm:*:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="adm:absolute adm:right-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="adm:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("adm:bg-border adm:pointer-events-none adm:-mx-1 adm:my-1 adm:h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "adm:flex adm:cursor-default adm:items-center adm:justify-center adm:py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="adm:size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "adm:flex adm:cursor-default adm:items-center adm:justify-center adm:py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="adm:size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
