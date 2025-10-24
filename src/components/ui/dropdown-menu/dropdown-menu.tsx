import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "adm:bg-popover adm:text-popover-foreground adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:z-50 adm:max-h-(--radix-dropdown-menu-content-available-height) adm:min-w-[8rem] adm:origin-(--radix-dropdown-menu-content-transform-origin) adm:overflow-x-hidden adm:overflow-y-auto adm:rounded-md adm:border adm:p-1 adm:shadow-md",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:data-[variant=destructive]:text-destructive adm:data-[variant=destructive]:focus:bg-destructive/10 adm:dark:data-[variant=destructive]:focus:bg-destructive/20 adm:data-[variant=destructive]:focus:text-destructive adm:data-[variant=destructive]:*:[svg]:!text-destructive adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:px-2 adm:py-1.5 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:data-[inset]:pl-8 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:py-1.5 adm:pr-2 adm:pl-8 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="adm:pointer-events-none adm:absolute adm:left-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="adm:size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:py-1.5 adm:pr-2 adm:pl-8 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="adm:pointer-events-none adm:absolute adm:left-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="adm:size-2 adm:fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "adm:px-2 adm:py-1.5 adm:text-sm adm:font-medium adm:data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("adm:bg-border adm:-mx-1 adm:my-1 adm:h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "adm:text-muted-foreground adm:ml-auto adm:text-xs adm:tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:data-[state=open]:bg-accent adm:data-[state=open]:text-accent-foreground adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:px-2 adm:py-1.5 adm:text-sm adm:outline-hidden adm:select-none adm:data-[inset]:pl-8 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="adm:ml-auto adm:size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "adm:bg-popover adm:text-popover-foreground adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:z-50 adm:min-w-[8rem] adm:origin-(--radix-dropdown-menu-content-transform-origin) adm:overflow-hidden adm:rounded-md adm:border adm:p-1 adm:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
